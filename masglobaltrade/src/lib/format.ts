const MONTHS_IT = ["gen", "feb", "mar", "apr", "mag", "giu", "lug", "ago", "set", "ott", "nov", "dic"];

/** Same output as date-fns `format(d, "dd MMM yyyy", { locale: it })`. */
export function formatDateIt(iso: string) {
  const d = new Date(iso);
  return `${String(d.getDate()).padStart(2, "0")} ${MONTHS_IT[d.getMonth()]} ${d.getFullYear()}`;
}
