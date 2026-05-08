import { parse } from 'csv-parse/sync';

export * from './export';
export * from './template';

/** Ligne normalisée prête pour Prisma / createMany */
export type ParsedProductRow = {
  originalTitle: string;
  originalDescription: string;
  price: number;
  imageUrl?: string;
  imageAlt?: string;
  attributes: Record<string, string>;
};

export type CsvColumnMeta = { key: string; label: string };

/** Clés = identifiants normalisés des colonnes du fichier (voir preview). */
export type ProductCsvColumnMapping = {
  title: string;
  description: string;
  price: string;
  imageUrl?: string;
  imageAlt?: string;
  attributes?: string;
};

export type ProductCsvPreview = {
  delimiter: ',' | ';';
  columns: CsvColumnMeta[];
  sampleRows: Record<string, string>[];
  suggestedMapping: Partial<ProductCsvColumnMapping>;
};

export type ParsedCsvGrid = {
  delimiter: ',' | ';';
  columns: CsvColumnMeta[];
  records: Record<string, string>[];
};

function normKey(h: string): string {
  return h.trim().toLowerCase().replace(/\s+/g, '');
}

function detectDelimiter(trimmed: string): ',' | ';' {
  return trimmed.includes(';') && !trimmed.includes(',') ? ';' : ',';
}

const TITLE_HINTS = new Set([
  'originaltitle',
  'title',
  'nom',
  'name',
  'produit',
  'libelle',
  'designation',
  'productname',
  'producttitle',
  'intitule',
]);

const DESC_HINTS = new Set([
  'originaldescription',
  'description',
  'desc',
  'details',
  'resume',
  'body',
  'content',
]);

const PRICE_HINTS = new Set(['price', 'prix', 'tarif', 'montant', 'cost', 'amount']);

const IMAGE_URL_HINTS = new Set([
  'imageurl',
  'image_url',
  'photo',
  'image',
  'urlimage',
  'picture',
  'visuel',
]);

const IMAGE_ALT_HINTS = new Set(['imagealt', 'image_alt', 'alttext', 'alt']);

const ATTR_HINTS = new Set(['attributes', 'attributs', 'specs', 'specifications']);

function hintsMatch(column: CsvColumnMeta, hints: Set<string>): boolean {
  const k = column.key;
  const l = normKey(column.label);
  return hints.has(k) || hints.has(l);
}

export function suggestProductCsvMapping(columns: CsvColumnMeta[]): Partial<ProductCsvColumnMapping> {
  const out: Partial<ProductCsvColumnMapping> = {};
  for (const c of columns) {
    if (!out.title && hintsMatch(c, TITLE_HINTS)) out.title = c.key;
    if (!out.description && hintsMatch(c, DESC_HINTS)) out.description = c.key;
    if (!out.price && hintsMatch(c, PRICE_HINTS)) out.price = c.key;
    if (!out.imageUrl && hintsMatch(c, IMAGE_URL_HINTS)) out.imageUrl = c.key;
    if (!out.imageAlt && hintsMatch(c, IMAGE_ALT_HINTS)) out.imageAlt = c.key;
    if (!out.attributes && hintsMatch(c, ATTR_HINTS)) out.attributes = c.key;
  }
  return out;
}

/**
 * Parse un CSV en lignes objets (clés = en-têtes normalisés).
 * Séparateur : `,` ou `;` (détection simple sur la première ligne brute).
 */
export function parseProductCsvGrid(raw: string): ParsedCsvGrid {
  const trimmed = raw.trim();
  if (!trimmed) {
    return { delimiter: ',', columns: [], records: [] };
  }

  const delimiter = detectDelimiter(trimmed);
  const matrix = parse(trimmed, {
    skip_empty_lines: true,
    trim: true,
    delimiter,
    relax_column_count: true,
  }) as string[][];

  if (matrix.length === 0) {
    return { delimiter, columns: [], records: [] };
  }

  const headerCells = matrix[0].map((c) => String(c ?? ''));
  const keys = headerCells.map((h) => normKey(h));
  const columns: CsvColumnMeta[] = keys.map((key, i) => ({
    key,
    label: headerCells[i].trim(),
  }));

  const records: Record<string, string>[] = [];
  for (let r = 1; r < matrix.length; r++) {
    const row = matrix[r];
    const obj: Record<string, string> = {};
    for (let i = 0; i < keys.length; i++) {
      const k = keys[i];
      const cell = row[i];
      obj[k] = cell != null ? String(cell) : '';
    }
    records.push(obj);
  }

  return { delimiter, columns, records };
}

function inferLegacyMapping(columns: CsvColumnMeta[]): ProductCsvColumnMapping | null {
  const keys = new Set(columns.map((c) => c.key));
  const titleKey = keys.has('originaltitle')
    ? 'originaltitle'
    : keys.has('title')
      ? 'title'
      : null;
  const descKey = keys.has('originaldescription')
    ? 'originaldescription'
    : keys.has('description')
      ? 'description'
      : null;
  const priceKey = keys.has('price') ? 'price' : null;
  if (!titleKey || !descKey || !priceKey) {
    return null;
  }

  const imageUrlKey =
    columns.find((c) => c.key === 'imageurl' || c.key === 'image_url')?.key ?? undefined;
  const imageAltKey =
    columns.find((c) => c.key === 'imagealt' || c.key === 'image_alt')?.key ?? undefined;

  return {
    title: titleKey,
    description: descKey,
    price: priceKey,
    ...(imageUrlKey ? { imageUrl: imageUrlKey } : {}),
    ...(imageAltKey ? { imageAlt: imageAltKey } : {}),
    ...(keys.has('attributes') ? { attributes: 'attributes' } : {}),
  };
}

function pickPrice(row: Record<string, string>, mapping: ProductCsvColumnMapping): number {
  const raw = row[mapping.price] ?? '';
  const n = Number(String(raw).replace(',', '.').trim());
  if (!Number.isFinite(n) || n < 0) {
    throw new Error(`Prix invalide : "${raw}"`);
  }
  return n;
}

function pickAttributes(row: Record<string, string>, mapping: ProductCsvColumnMapping): Record<string, string> {
  if (!mapping.attributes) {
    return {};
  }
  const raw = row[mapping.attributes] ?? '';
  if (!raw || !String(raw).trim()) {
    return {};
  }
  try {
    const parsed = JSON.parse(String(raw)) as unknown;
    if (parsed && typeof parsed === 'object' && !Array.isArray(parsed)) {
      const out: Record<string, string> = {};
      for (const [k, v] of Object.entries(parsed)) {
        out[k] = v == null ? '' : String(v);
      }
      return out;
    }
  } catch {
    throw new Error(`Colonne "attributes" : JSON invalide (${String(raw).slice(0, 80)}…)`);
  }
  throw new Error('Colonne "attributes" : attendu un objet JSON.');
}

function assertMappingMatchesColumns(mapping: ProductCsvColumnMapping, columns: CsvColumnMeta[]): void {
  const keySet = new Set(columns.map((c) => c.key));
  for (const col of [mapping.title, mapping.description, mapping.price]) {
    if (!keySet.has(col)) {
      throw new Error(`CSV mapping : colonne « ${col} » absente du fichier.`);
    }
  }
  for (const opt of ['imageUrl', 'imageAlt', 'attributes'] as const) {
    const col = mapping[opt];
    if (col && !keySet.has(col)) {
      throw new Error(`CSV mapping : colonne « ${col} » absente du fichier.`);
    }
  }
}

function recordsToParsedProducts(
  records: Record<string, string>[],
  mapping: ProductCsvColumnMapping,
): ParsedProductRow[] {
  const out: ParsedProductRow[] = [];
  for (let i = 0; i < records.length; i++) {
    const row = records[i];
    const title = String(row[mapping.title] ?? '').trim();
    const description = String(row[mapping.description] ?? '').trim();
    if (!title && !description) {
      continue;
    }
    if (!title || !description) {
      throw new Error(`Ligne ${i + 2} : titre et description sont requis.`);
    }
    const price = pickPrice(row, mapping);
    const imageUrlRaw = mapping.imageUrl ? (row[mapping.imageUrl] ?? '') : '';
    const imageAltRaw = mapping.imageAlt ? (row[mapping.imageAlt] ?? '') : '';
    const imageUrl = String(imageUrlRaw).trim() || undefined;
    const imageAlt = String(imageAltRaw).trim() || undefined;
    const attributes = pickAttributes(row, mapping);
    out.push({
      originalTitle: title,
      originalDescription: description,
      price,
      imageUrl,
      imageAlt,
      attributes,
    });
  }
  return out;
}

/**
 * Aperçu pour construire un mapping côté UI (échantillon + suggestion heuristique).
 */
export function previewProductCsv(raw: string, options?: { maxRows?: number }): ProductCsvPreview {
  const trimmed = raw.trim();
  const maxRows = options?.maxRows ?? 5;
  if (!trimmed) {
    return { delimiter: ',', columns: [], sampleRows: [], suggestedMapping: {} };
  }
  const { delimiter, columns, records } = parseProductCsvGrid(raw);
  const suggestedMapping = suggestProductCsvMapping(columns);
  return {
    delimiter,
    columns,
    sampleRows: records.slice(0, maxRows),
    suggestedMapping,
  };
}

/**
 * Import avec mapping explicite (mode colonnes libres).
 */
export function parseProductCsvWithMapping(raw: string, mapping: ProductCsvColumnMapping): ParsedProductRow[] {
  const trimmed = raw.trim();
  if (!trimmed) {
    return [];
  }
  const { columns, records } = parseProductCsvGrid(raw);
  assertMappingMatchesColumns(mapping, columns);
  return recordsToParsedProducts(records, mapping);
}

/**
 * Mode rapide OptiCatalog : `originalTitle`/`title`, `originalDescription`/`description`, `price`, optionnels images / attributes.
 */
export function parseProductCsv(raw: string): ParsedProductRow[] {
  const trimmed = raw.trim();
  if (!trimmed) {
    return [];
  }
  const { columns, records } = parseProductCsvGrid(raw);
  if (records.length === 0 && columns.length === 0) {
    return [];
  }

  const mapping = inferLegacyMapping(columns);
  if (!mapping) {
    throw new Error(
      'CSV : colonnes requises title (ou originalTitle), description (ou originalDescription), price — ou passe par le mode colonnes libres avec mapping.',
    );
  }

  return recordsToParsedProducts(records, mapping);
}
