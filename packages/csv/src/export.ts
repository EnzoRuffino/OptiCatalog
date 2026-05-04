export type ExportProductRow = {
  id: string;
  originalTitle: string;
  originalDescription: string;
  price: number;
  optimizedTitle: string;
  optimizedDescription: string;
  seoKeywords: string;
  seoScore: string;
};

function escapeCell(value: string): string {
  if (/[",\n\r]/.test(value)) {
    return `"${value.replace(/"/g, '""')}"`;
  }
  return value;
}

const HEADER = [
  'id',
  'originalTitle',
  'originalDescription',
  'price',
  'optimizedTitle',
  'optimizedDescription',
  'seoKeywords',
  'seoScore',
] as const;

/** CSV UTF-8 avec en-tête (séparateur virgule). */
export function buildProductsExportCsv(rows: ExportProductRow[]): string {
  const lines = [HEADER.join(',')];
  for (const r of rows) {
    lines.push(
      [
        escapeCell(r.id),
        escapeCell(r.originalTitle),
        escapeCell(r.originalDescription),
        escapeCell(String(r.price)),
        escapeCell(r.optimizedTitle),
        escapeCell(r.optimizedDescription),
        escapeCell(r.seoKeywords),
        escapeCell(r.seoScore),
      ].join(','),
    );
  }
  return lines.join('\n');
}
