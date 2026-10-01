import { useRef, useState, type DragEvent, type FormEvent } from "react";
import { LoaderCircle, Plus, Upload, X } from "./icons";

// Same endpoint and payload shape as the original site's lead form.
const LEADS_ENDPOINT = import.meta.env.VITE_LEADS_ENDPOINT ?? "/api/leads";

const YEARS = Array.from({ length: 30 }, (_, i) => String(2025 - i));
const FUELS = ["Benzina", "Diesel", "Ibrido", "Elettrico", "GPL / Metano"];
const GEARBOXES = ["Automatico", "Manuale", "Sequenziale / CVT"];

const input =
  "w-full rounded-xl border border-border bg-background px-3 py-2.5 text-sm transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30";
const select = `${input} appearance-none cursor-pointer`;
const label = "block text-sm font-semibold text-foreground/80 mb-1";

type Photo = { id: string; name: string; previewUrl: string };
type Errors = Partial<Record<"firstName" | "lastName" | "email" | "phone" | "termini", string>>;

function validate(v: Record<string, string>, termini: boolean): Errors {
  const e: Errors = {};
  if ((v.firstName ?? "").length < 2) e.firstName = "Nome obbligatorio";
  if ((v.lastName ?? "").length < 2) e.lastName = "Cognome obbligatorio";
  if (v.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email)) e.email = "Email non valida";
  if ((v.phone ?? "").length < 8) e.phone = "Telefono obbligatorio";
  if (!termini) e.termini = "Devi accettare i termini";
  return e;
}

export default function LeadForm({ onSuccess, className }: { onSuccess?: () => void; className?: string }) {
  const [status, setStatus] = useState<"success" | "error" | null>(null);
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [dragging, setDragging] = useState(false);
  const [errors, setErrors] = useState<Errors>({});
  const [submitting, setSubmitting] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);

  const addFiles = (files: FileList) => {
    const images = Array.from(files).filter((f) => f.type.startsWith("image/"));
    if (!images.length) return;
    setPhotos((p) => [
      ...p,
      ...images.map((f) => ({ id: `${Date.now()}-${Math.random()}`, name: f.name, previewUrl: URL.createObjectURL(f) })),
    ]);
  };
  const removePhoto = (id: string) =>
    setPhotos((p) => {
      const found = p.find((x) => x.id === id);
      if (found) URL.revokeObjectURL(found.previewUrl);
      return p.filter((x) => x.id !== id);
    });
  const onDrop = (e: DragEvent) => {
    e.preventDefault();
    setDragging(false);
    if (e.dataTransfer.files.length) addFiles(e.dataTransfer.files);
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const v = Object.fromEntries([...fd.entries()].map(([k, val]) => [k, String(val)]));
    const errs = validate(v, fd.get("termini") !== null);
    setErrors(errs);
    if (Object.keys(errs).length) return;
    setStatus(null);
    const lines: string[] = [];
    if (v.marca || v.modello) lines.push(`Marca e modello: ${[v.marca, v.modello].filter(Boolean).join(" ")}`);
    if (v.anno) lines.push(`Anno: ${v.anno}`);
    if (v.km) lines.push(`Chilometri: ${v.km}`);
    if (v.carburante) lines.push(`Alimentazione: ${v.carburante}`);
    if (v.cambio) lines.push(`Cambio: ${v.cambio}`);
    if (v.descrizione) lines.push(`Descrizione veicolo: ${v.descrizione}`);
    if (v.citta) lines.push(`Dove si trova l'auto: ${v.citta}`);
    setSubmitting(true);
    try {
      const res = await fetch(LEADS_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: `${v.firstName} ${v.lastName}`,
          phone: `+41 ${v.phone}`,
          email: v.email || null,
          message: lines.join("\n") || "Richiesta di valutazione rapida",
        }),
      });
      if (!res.ok) throw new Error(String(res.status));
      setStatus("success");
      form.reset();
      photos.forEach((p) => URL.revokeObjectURL(p.previewUrl));
      setPhotos([]);
      if (onSuccess) window.setTimeout(onSuccess, 1200);
    } catch {
      setStatus("error");
    } finally {
      setSubmitting(false);
    }
  };

  const err = (k: keyof Errors) => (errors[k] ? <p className="text-red-500 text-xs mt-1">{errors[k]}</p> : null);

  return (
    <form onSubmit={onSubmit} noValidate className={`space-y-4 ${className ?? ""}`} data-testid="form-lead">
      {status === "success" ? (
        <div role="status" className="rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-sm font-semibold text-green-800">
          Richiesta inviata! Ti rispondo personalmente il prima possibile. Grazie!
        </div>
      ) : null}
      {status === "error" ? (
        <div role="alert" className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-800">
          Invio non riuscito. Riprova tra un momento.
        </div>
      ) : null}
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className={label}>Nome *</label>
          <input placeholder="Mario" className={input} data-testid="input-lead-firstname" name="firstName" />
          {err("firstName")}
        </div>
        <div>
          <label className={label}>Cognome *</label>
          <input placeholder="Rossi" className={input} data-testid="input-lead-lastname" name="lastName" />
          {err("lastName")}
        </div>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className={label}>Telefono *</label>
          <div className="flex">
            <span className="inline-flex shrink-0 items-center gap-1 rounded-l-xl border border-r-0 border-border bg-gray-50 px-2.5 text-sm font-medium text-foreground/70">
              🇨🇭 +41
            </span>
            <input
              placeholder="79 000 00 00"
              className="w-full rounded-r-xl border border-border bg-background px-3 py-2.5 text-sm transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
              data-testid="input-lead-phone"
              name="phone"
            />
          </div>
          {err("phone")}
        </div>
        <div>
          <label className={label}>Email</label>
          <input placeholder="mario@email.com" className={input} data-testid="input-lead-email" type="email" name="email" />
          {err("email")}
        </div>
      </div>
      <div>
        <label className={label}>Dove si trova l'auto?</label>
        <input placeholder="Es. Lugano, Bellinzona, Locarno…" className={input} name="citta" />
      </div>
      <div className="flex items-center gap-3 pt-1">
        <div className="flex-1 h-px bg-border" />
        <span className="text-xs font-bold text-foreground/60 uppercase tracking-widest">La tua auto</span>
        <div className="flex-1 h-px bg-border" />
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className={label}>Marca</label>
          <input placeholder="Es. BMW, Audi, VW…" className={input} data-testid="input-lead-marca" name="marca" />
        </div>
        <div>
          <label className={label}>Modello</label>
          <input placeholder="Es. Serie 3, A4, Golf…" className={input} data-testid="input-lead-modello" name="modello" />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className={label}>Anno</label>
          <select name="anno" className={select} data-testid="input-lead-anno" defaultValue="">
            <option value="">Seleziona anno</option>
            {YEARS.map((y) => (
              <option key={y} value={y}>
                {y}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className={label}>Chilometri</label>
          <input placeholder="Es. 85000" min="0" className={input} data-testid="input-lead-km" type="number" name="km" />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className={label}>Alimentazione</label>
          <select name="carburante" className={select} data-testid="input-lead-carburante" defaultValue="">
            <option value="">Tipo carburante</option>
            {FUELS.map((f) => (
              <option key={f} value={f}>
                {f}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className={label}>Cambio</label>
          <select name="cambio" className={select} defaultValue="">
            <option value="">Tipo cambio</option>
            {GEARBOXES.map((g) => (
              <option key={g} value={g}>
                {g}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div>
        <label className={label}>Descrizione veicolo</label>
        <textarea
          name="descrizione"
          rows={3}
          placeholder="Stato del veicolo, accessori, eventuali danni, revisioni, leasing residuo…"
          className={`${input} resize-none`}
          data-testid="input-lead-message"
        />
      </div>
      <div>
        <label className={label}>Foto dell'auto</label>
        {photos.length > 0 && (
          <div className="grid grid-cols-4 gap-2 mb-2">
            {photos.map((p) => (
              <div key={p.id} className="relative aspect-square rounded-lg overflow-hidden border border-border bg-gray-50">
                <img src={p.previewUrl} alt={p.name} width="320" height="320" className="w-full h-full object-cover" loading="lazy" decoding="async" />
                <button
                  type="button"
                  onClick={() => removePhoto(p.id)}
                  className="absolute top-1 right-1 w-5 h-5 bg-black/60 hover:bg-black/80 rounded-full flex items-center justify-center transition-colors"
                >
                  <X className="w-3 h-3 text-white" />
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={() => fileRef.current?.click()}
              className="aspect-square rounded-lg border-2 border-dashed border-border hover:border-primary/50 hover:bg-gray-50 flex flex-col items-center justify-center gap-1 transition-colors text-foreground/60 hover:text-primary"
            >
              <Plus className="w-5 h-5" />
              <span className="text-xs">Aggiungi</span>
            </button>
          </div>
        )}
        {photos.length === 0 && (
          <div
            onDragOver={(e) => {
              e.preventDefault();
              setDragging(true);
            }}
            onDragLeave={() => setDragging(false)}
            onDrop={onDrop}
            onClick={() => fileRef.current?.click()}
            className={`border-2 border-dashed rounded-lg px-4 py-5 text-center cursor-pointer transition-colors ${dragging ? "border-primary bg-primary/5" : "border-border hover:border-primary/50 hover:bg-gray-50"}`}
            data-testid="dropzone-foto"
          >
            <Upload className="w-5 h-5 mx-auto mb-1 text-foreground/60" />
            <p className="text-sm text-foreground/75">
              <span className="text-primary font-semibold">Scegli foto</span> o trascina qui
            </p>
            <p className="text-xs text-foreground/60 mt-0.5">Puoi caricare più immagini · JPG, PNG, HEIC</p>
          </div>
        )}
        <input
          ref={fileRef}
          type="file"
          accept="image/*"
          multiple
          className="hidden"
          onChange={(e) => {
            if (e.target.files?.length) addFiles(e.target.files);
          }}
        />
      </div>
      <div className="flex items-start gap-2.5">
        <input type="checkbox" id="termini" name="termini" className="mt-0.5 w-4 h-4 accent-primary shrink-0 cursor-pointer" />
        <label htmlFor="termini" className="text-sm text-foreground/70 cursor-pointer leading-snug">
          Accetto il trattamento dei miei dati personali per ricevere la valutazione rapida della mia auto.{" "}
          <a href="/informativa-privacy" target="_blank" className="text-primary underline">
            Informativa privacy
          </a>
        </label>
      </div>
      {errors.termini && <p className="text-red-500 text-xs -mt-2">{errors.termini}</p>}
      <button
        type="submit"
        disabled={submitting}
        className="w-full rounded-xl bg-accent py-3 text-base font-bold text-primary shadow-md transition-colors hover:bg-accent/90 disabled:opacity-60"
        data-testid="button-submit-lead"
      >
        {submitting ? <LoaderCircle className="w-4 h-4 animate-spin" /> : null}
        Invia richiesta
      </button>
    </form>
  );
}
