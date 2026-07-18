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

    fireEvent.click(screen.getByRole("button", { name: /blue hour/i }));

    expect(onDesignChange).toHaveBeenCalledWith("blue-hour");
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

  it("offers five designs including the Vere Edit without the removed Neon option", () => {
    render(
      <DesignSwitcher
        activeDesign="soft-focus"
        onDesignChange={() => undefined}
      />,
    );

    expect(screen.getAllByRole("button")).toHaveLength(5);
    expect(
      screen.getByRole("button", { name: /05 vere edit/i }),
    ).toBeInTheDocument();
    expect(screen.queryByRole("button", { name: /neon/i })).not.toBeInTheDocument();
  });
});
