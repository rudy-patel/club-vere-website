import { cleanup, render, screen } from "@testing-library/react";
import type { ComponentType } from "react";
import { afterEach, describe, expect, it } from "vitest";

import { PicnicPop } from "@/components/picnic-pop";
import { SoftFocus } from "@/components/soft-focus";
import { VereAfterDark } from "@/components/vere-after-dark";
import { clubVereContent, type ClubVereContent } from "@/lib/content";

afterEach(cleanup);

const designs: Array<[string, ComponentType<{ content: ClubVereContent }>]> = [
  ["Soft Focus", SoftFocus],
  ["Vere After Dark", VereAfterDark],
  ["Picnic Pop", PicnicPop],
];

describe.each(designs)("%s landing page", (_name, Design) => {
  it("renders core discovery and past-event content", () => {
    render(<Design content={clubVereContent} />);

    expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument();
    expect(screen.getAllByText("Past event").length).toBeGreaterThan(0);
    for (const link of screen.getAllByRole("link", { name: /see what's next/i })) {
      expect(link).toHaveAttribute("href", clubVereContent.instagramUrl);
    }
    expect(
      screen.getByRole("link", { name: /view the past event/i }),
    ).toHaveAttribute("href", clubVereContent.eventbriteUrl);
  });
});
