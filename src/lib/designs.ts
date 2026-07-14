export const DESIGN_IDS = [
  "soft-focus",
  "vere-after-dark",
  "blue-hour",
  "invite-club",
  "neon-signal",
] as const;

export type DesignId = (typeof DESIGN_IDS)[number];

export function isDesignId(value: unknown): value is DesignId {
  return typeof value === "string" && DESIGN_IDS.includes(value as DesignId);
}

export function getInitialDesign(value: unknown): DesignId {
  return isDesignId(value) ? value : "soft-focus";
}
