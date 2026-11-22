/**
 * Parse a timestamp from the database. Postgres returns UTC timestamps
 * without a zone ("2025-08-22 18:47:06.356"), which `new Date` would read
 * as local time, so mark them as UTC first. Returns null if missing/invalid.
 */
export function parseDbTimestamp(value: unknown): Date | null {
  if (!value) return null;
  if (value instanceof Date) return Number.isNaN(value.getTime()) ? null : value;
  const text = String(value);
  const iso = /[zZ]|[+-]\d\d:?\d\d$/.test(text) ? text : `${text.replace(" ", "T")}Z`;
  const date = new Date(iso);
  return Number.isNaN(date.getTime()) ? null : date;
}
