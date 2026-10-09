import * as I from "@clone/components/icons";

const toName = (n: string) => n.replace(/(^|-)([a-z0-9])/g, (_, _a, c: string) => c.toUpperCase());

/** Renders one of the site's icons by its lucide name (e.g. "map-pin"). */
export function Icon({ name, className }: { name: string; className?: string }) {
  const C = (I as unknown as Record<string, (p: { className?: string }) => React.ReactElement>)[toName(name)] ?? I.Check;
  return <C className={className} />;
}

export const { WhatsAppIcon, GoogleIcon, InstagramIcon } = I;
