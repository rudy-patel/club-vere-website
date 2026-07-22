export const DESIGN_IDS = [
  "soft-focus",
  "vere-after-dark",
  "good-company",
  "invite-club",
  "the-vere-edit",
] as const;

export type DesignId = (typeof DESIGN_IDS)[number];

export function isDesignId(value: unknown): value is DesignId {
  return typeof value === "string" && DESIGN_IDS.includes(value as DesignId);
}

export function getInitialDesign(value: unknown): DesignId {
  if (value === "blue-hour") {
    return "good-company";
  }

  return isDesignId(value) ? value : "soft-focus";
}
