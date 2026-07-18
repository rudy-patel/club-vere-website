import { cleanup, render, screen } from "@testing-library/react";
import type { ComponentType } from "react";
import { afterEach, describe, expect, it } from "vitest";

import { BlueHour } from "@/components/blue-hour";
import { InviteClub } from "@/components/invite-club";
import { SoftFocus } from "@/components/soft-focus";
import { TheVereEdit } from "@/components/the-vere-edit";
import { VereAfterDark } from "@/components/vere-after-dark";
import { clubVereContent, type ClubVereContent } from "@/lib/content";

afterEach(cleanup);

const designs: Array<[string, ComponentType<{ content: ClubVereContent }>]> = [
  ["Soft Focus", SoftFocus],
  ["Vere After Dark", VereAfterDark],
  ["Blue Hour", BlueHour],
  ["Invite Club", InviteClub],
  ["The Vere Edit", TheVereEdit],
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

describe("Vere After Dark hero", () => {
  it("introduces Club Vere through the event formats without a duplicate formats section", () => {
    const { container } = render(
      <VereAfterDark content={clubVereContent} />,
    );

    expect(
      screen.getByRole("heading", { level: 1, name: /club vere/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        level: 2,
        name: clubVereContent.formatsTitle,
      }),
    ).toBeInTheDocument();

    for (const format of clubVereContent.formats) {
      expect(
        screen.getByRole("heading", { level: 3, name: format.title }),
      ).toBeInTheDocument();
    }

    expect(container.querySelector(".ad-hero__formats")).toBeInTheDocument();
    expect(container.querySelector(".ad-formats")).not.toBeInTheDocument();
  });
});
