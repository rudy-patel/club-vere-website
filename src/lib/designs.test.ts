import { describe, expect, it } from "vitest";

import { DESIGN_IDS, getInitialDesign, isDesignId } from "@/lib/designs";

describe("design selection", () => {
  it("accepts each available design", () => {
    for (const design of DESIGN_IDS) {
      expect(isDesignId(design)).toBe(true);
    }

    expect(DESIGN_IDS).toContain("good-company");
    expect(DESIGN_IDS).toContain("the-vere-edit");
    expect(DESIGN_IDS).not.toContain("blue-hour");
  });

  it("rejects unknown persisted values", () => {
    expect(isDesignId("gradient-slop")).toBe(false);
    expect(isDesignId("neon-signal")).toBe(false);
    expect(isDesignId("blue-hour")).toBe(false);
    expect(isDesignId(null)).toBe(false);
  });

  it("defaults to soft focus", () => {
    expect(getInitialDesign(undefined)).toBe("soft-focus");
    expect(getInitialDesign("unknown")).toBe("soft-focus");
  });

  it("restores a valid persisted design", () => {
    expect(getInitialDesign("good-company")).toBe("good-company");
    expect(getInitialDesign("invite-club")).toBe("invite-club");
    expect(getInitialDesign("the-vere-edit")).toBe("the-vere-edit");
  });

  it("migrates the legacy Blue Hour selection to Good Company", () => {
    expect(getInitialDesign("blue-hour")).toBe("good-company");
  });
});
