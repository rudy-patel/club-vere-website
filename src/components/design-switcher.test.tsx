import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import { DesignSwitcher } from "@/components/design-switcher";

describe("DesignSwitcher", () => {
  it("exposes the active design and changes selection", () => {
    const onDesignChange = vi.fn();

    render(
      <DesignSwitcher
        activeDesign="soft-focus"
        onDesignChange={onDesignChange}
      />,
    );

    expect(screen.getByRole("button", { name: /soft focus/i })).toHaveAttribute(
      "aria-pressed",
      "true",
    );

    fireEvent.click(screen.getByRole("button", { name: /picnic pop/i }));

    expect(onDesignChange).toHaveBeenCalledWith("picnic-pop");
  });

  it("labels the control for design comparison", () => {
    render(
      <DesignSwitcher
        activeDesign="vere-after-dark"
        onDesignChange={() => undefined}
      />,
    );

    expect(
      screen.getByRole("group", { name: /compare landing page designs/i }),
    ).toBeInTheDocument();
  });
});
