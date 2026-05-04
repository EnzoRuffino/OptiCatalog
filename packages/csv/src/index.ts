import { parse } from 'csv-parse/sync';

export * from './export';

/** Ligne normalisée prête pour Prisma / createMany */
export type ParsedProductRow = {
  originalTitle: string;
  originalDescription: string;
  price: number;
  imageUrl?: string;
  imageAlt?: string;
  attributes: Record<string, string>;
};

function normKey(h: string): string {
  return h.trim().toLowerCase().replace(/\s+/g, '');
}

function pickTitle(row: Record<string, string>): string {
  const t = row['originaltitle'] ?? row['title'] ?? '';
  return String(t).trim();
}

function pickDescription(row: Record<string, string>): string {
  const d = row['originaldescription'] ?? row['description'] ?? '';
  return String(d).trim();
}

function pickPrice(row: Record<string, string>): number {
  const raw = row['price'] ?? '';
  const n = Number(String(raw).replace(',', '.').trim());
  if (!Number.isFinite(n) || n < 0) {
    throw new Error(`Prix invalide : "${raw}"`);
  }
  return n;
}

function pickAttributes(row: Record<string, string>): Record<string, string> {
  const raw = row['attributes'] ?? '';
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

/**
 * Parse un CSV (séparateur auto : , ou ; détecté sur la première ligne).
 * En-têtes acceptés : originalTitle / title, originalDescription / description, price,
 * optionnellement imageUrl, imageAlt, attributes (JSON objet).
 */
export function parseProductCsv(raw: string): ParsedProductRow[] {
  const trimmed = raw.trim();
  if (!trimmed) {
    return [];
  }

  const delimiter = trimmed.includes(';') && !trimmed.includes(',') ? ';' : ',';

  const records = parse(trimmed, {
    columns: (header) => header.map((h: string) => normKey(String(h))),
    skip_empty_lines: true,
    trim: true,
    delimiter,
    relax_column_count: true,
  }) as Record<string, string>[];

  if (records.length === 0) {
    return [];
  }

  const headers = Object.keys(records[0] ?? {});
  const hasTitle = headers.some((h) => h === 'originaltitle' || h === 'title');
  const hasDesc = headers.some((h) => h === 'originaldescription' || h === 'description');
  const hasPrice = headers.includes('price');
  if (!hasTitle || !hasDesc || !hasPrice) {
    throw new Error(
      'CSV : colonnes requises title (ou originalTitle), description (ou originalDescription), price.',
    );
  }

  const out: ParsedProductRow[] = [];
  for (let i = 0; i < records.length; i++) {
    const row = records[i];
    const title = pickTitle(row);
    const description = pickDescription(row);
    if (!title && !description) {
      continue;
    }
    if (!title || !description) {
      throw new Error(`Ligne ${i + 2} : titre et description sont requis.`);
    }
    const price = pickPrice(row);
    const imageUrlRaw = row['imageurl'] ?? row['image_url'] ?? '';
    const imageAltRaw = row['imagealt'] ?? row['image_alt'] ?? '';
    const imageUrl = String(imageUrlRaw).trim() || undefined;
    const imageAlt = String(imageAltRaw).trim() || undefined;
    const attributes = pickAttributes(row);
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
