import { describe, expect, it } from "vitest";

import { DESIGN_IDS, getInitialDesign, isDesignId } from "@/lib/designs";

describe("design selection", () => {
  it("accepts each available design", () => {
    for (const design of DESIGN_IDS) {
      expect(isDesignId(design)).toBe(true);
    }

    expect(DESIGN_IDS).toContain("the-vere-edit");
  });

  it("rejects unknown persisted values", () => {
    expect(isDesignId("gradient-slop")).toBe(false);
    expect(isDesignId("neon-signal")).toBe(false);
    expect(isDesignId(null)).toBe(false);
  });

  it("defaults to soft focus", () => {
    expect(getInitialDesign(undefined)).toBe("soft-focus");
    expect(getInitialDesign("unknown")).toBe("soft-focus");
  });

  it("restores a valid persisted design", () => {
    expect(getInitialDesign("blue-hour")).toBe("blue-hour");
    expect(getInitialDesign("invite-club")).toBe("invite-club");
    expect(getInitialDesign("the-vere-edit")).toBe("the-vere-edit");
  });
});
