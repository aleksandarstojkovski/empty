import { useRef, useState, type FormEvent } from "react";
import { useRouter } from "wouter";

// Same endpoint and payload as the original site's lead form.
const LEADS_ENDPOINT = import.meta.env.VITE_LEADS_ENDPOINT ?? "/api/leads";
const YEARS = Array.from({ length: 30 }, (_, i) => String(2025 - i));
const FUELS = ["Benzina", "Diesel", "Ibrido", "Elettrico", "GPL / Metano"];
const GEARBOXES = ["Automatico", "Manuale", "Sequenziale / CVT"];

type Errors = Partial<Record<"firstName" | "lastName" | "email" | "phone" | "termini", string>>;

export type LeadFormClasses = {
  form: string;
  row: string;
  field: string;
  label: string;
  input: string;
  select: string;
  textarea: string;
  error: string;
  divider: string;
  prefix?: string;
  phoneWrap?: string;
  drop: string;
  check: string;
  checkLabel: string;
  submit: string;
  success: string;
  failure: string;
};

/**
 * The lead form used by all three designs: same fields, validation and payload
 * as the original; each design passes its own class names.
 */
export function LeadForm({ c, onSuccess, submitLabel = "Invia richiesta" }: { c: LeadFormClasses; onSuccess?: () => void; submitLabel?: string }) {
  const [status, setStatus] = useState<"success" | "error" | null>(null);
  const [errors, setErrors] = useState<Errors>({});
  const [busy, setBusy] = useState(false);
  const [photos, setPhotos] = useState<string[]>([]);
  const fileRef = useRef<HTMLInputElement>(null);
  const { base } = useRouter();

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const v = Object.fromEntries([...fd.entries()].map(([k, x]) => [k, String(x)]));
    const errs: Errors = {};
    if ((v.firstName ?? "").length < 2) errs.firstName = "Nome obbligatorio";
    if ((v.lastName ?? "").length < 2) errs.lastName = "Cognome obbligatorio";
    if (v.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email)) errs.email = "Email non valida";
    if ((v.phone ?? "").length < 8) errs.phone = "Telefono obbligatorio";
    if (fd.get("termini") === null) errs.termini = "Devi accettare i termini";
    setErrors(errs);
    if (Object.keys(errs).length) return;
    const lines: string[] = [];
    if (v.marca || v.modello) lines.push(`Marca e modello: ${[v.marca, v.modello].filter(Boolean).join(" ")}`);
    if (v.anno) lines.push(`Anno: ${v.anno}`);
    if (v.km) lines.push(`Chilometri: ${v.km}`);
    if (v.carburante) lines.push(`Alimentazione: ${v.carburante}`);
    if (v.cambio) lines.push(`Cambio: ${v.cambio}`);
    if (v.descrizione) lines.push(`Descrizione veicolo: ${v.descrizione}`);
    if (v.citta) lines.push(`Dove si trova l'auto: ${v.citta}`);
    setBusy(true);
    setStatus(null);
    try {
      const res = await fetch(LEADS_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: `${v.firstName} ${v.lastName}`, phone: `+41 ${v.phone}`, email: v.email || null, message: lines.join("\n") || "Richiesta di valutazione rapida" }),
      });
      if (!res.ok) throw new Error(String(res.status));
      setStatus("success");
      form.reset();
      setPhotos([]);
      if (onSuccess) window.setTimeout(onSuccess, 1200);
    } catch {
      setStatus("error");
    } finally {
      setBusy(false);
    }
  };
  const err = (k: keyof Errors) => (errors[k] ? <p className={c.error}>{errors[k]}</p> : null);
  const field = (label: string, el: React.ReactNode, k?: keyof Errors) => (
    <div className={c.field}>
      <label className={c.label}>{label}</label>
      {el}
      {k && err(k)}
    </div>
  );

  return (
    <form onSubmit={onSubmit} noValidate className={c.form}>
      {status === "success" && <div role="status" className={c.success}>Richiesta inviata! Ti rispondo personalmente il prima possibile. Grazie!</div>}
      {status === "error" && <div role="alert" className={c.failure}>Invio non riuscito. Riprova tra un momento.</div>}
      <div className={c.row}>
        {field("Nome *", <input name="firstName" placeholder="Mario" className={c.input} autoComplete="given-name" />, "firstName")}
        {field("Cognome *", <input name="lastName" placeholder="Rossi" className={c.input} autoComplete="family-name" />, "lastName")}
      </div>
      <div className={c.row}>
        {field(
          "Telefono *",
          <div className={c.phoneWrap}>
            <span className={c.prefix}>🇨🇭 +41</span>
            <input name="phone" placeholder="79 000 00 00" className={c.input} inputMode="tel" autoComplete="tel-national" />
          </div>,
          "phone",
        )}
        {field("Email", <input name="email" type="email" placeholder="mario@email.com" className={c.input} autoComplete="email" />, "email")}
      </div>
      {field("Dove si trova l'auto?", <input name="citta" placeholder="Es. Lugano, Bellinzona, Locarno…" className={c.input} />)}
      <div className={c.divider}>
        <span>La tua auto</span>
      </div>
      <div className={c.row}>
        {field("Marca", <input name="marca" placeholder="Es. BMW, Audi, VW…" className={c.input} />)}
        {field("Modello", <input name="modello" placeholder="Es. Serie 3, A4, Golf…" className={c.input} />)}
      </div>
      <div className={c.row}>
        {field(
          "Anno",
          <select name="anno" className={c.select} defaultValue="">
            <option value="">Seleziona anno</option>
            {YEARS.map((y) => (
              <option key={y}>{y}</option>
            ))}
          </select>,
        )}
        {field("Chilometri", <input name="km" type="number" min="0" placeholder="Es. 85000" className={c.input} />)}
      </div>
      <div className={c.row}>
        {field(
          "Alimentazione",
          <select name="carburante" className={c.select} defaultValue="">
            <option value="">Tipo carburante</option>
            {FUELS.map((f) => (
              <option key={f}>{f}</option>
            ))}
          </select>,
        )}
        {field(
          "Cambio",
          <select name="cambio" className={c.select} defaultValue="">
            <option value="">Tipo cambio</option>
            {GEARBOXES.map((g) => (
              <option key={g}>{g}</option>
            ))}
          </select>,
        )}
      </div>
      {field("Descrizione veicolo", <textarea name="descrizione" rows={3} placeholder="Stato del veicolo, accessori, eventuali danni, revisioni, leasing residuo…" className={c.textarea} />)}
      {field(
        "Foto dell'auto",
        <>
          <button type="button" className={c.drop} onClick={() => fileRef.current?.click()}>
            {photos.length ? `${photos.length} foto selezionate · aggiungi altre` : "Scegli foto o trascina qui · JPG, PNG, HEIC"}
          </button>
          <input
            ref={fileRef}
            type="file"
            accept="image/*"
            multiple
            hidden
            onChange={(e) => setPhotos((p) => [...p, ...Array.from(e.target.files ?? []).map((f) => f.name)])}
          />
        </>,
      )}
      <label className={c.checkLabel}>
        <input type="checkbox" name="termini" className={c.check} />
        <span>
          Accetto il trattamento dei miei dati personali per ricevere la valutazione rapida della mia auto.{" "}
          <a href={`${base}/informativa-privacy`} target="_blank" rel="noreferrer">
            Informativa privacy
          </a>
        </span>
      </label>
      {err("termini")}
      <button type="submit" disabled={busy} className={c.submit}>
        {busy ? "Invio in corso…" : submitLabel}
      </button>
    </form>
  );
}
