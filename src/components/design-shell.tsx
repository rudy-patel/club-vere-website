"use client";

import { useEffect, useState } from "react";

import { DesignSwitcher } from "@/components/design-switcher";
import { GoodCompany } from "@/components/good-company";
import { InviteClub } from "@/components/invite-club";
import { SoftFocus } from "@/components/soft-focus";
import { TheVereEdit } from "@/components/the-vere-edit";
import { VereAfterDark } from "@/components/vere-after-dark";
import { clubVereContent } from "@/lib/content";
import { getInitialDesign, type DesignId } from "@/lib/designs";

const STORAGE_KEY = "club-vere-design";

const designs = {
  "soft-focus": SoftFocus,
  "vere-after-dark": VereAfterDark,
  "good-company": GoodCompany,
  "invite-club": InviteClub,
  "the-vere-edit": TheVereEdit,
} satisfies Record<DesignId, typeof SoftFocus>;

export function DesignShell() {
  const [activeDesign, setActiveDesign] = useState<DesignId>("soft-focus");

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      setActiveDesign(getInitialDesign(window.localStorage.getItem(STORAGE_KEY)));
    });

    return () => window.cancelAnimationFrame(frame);
  }, []);

  function handleDesignChange(design: DesignId) {
    setActiveDesign(design);
    window.localStorage.setItem(STORAGE_KEY, design);
  }

  const ActiveDesign = designs[activeDesign];

  return (
    <>
      <DesignSwitcher
        activeDesign={activeDesign}
        onDesignChange={handleDesignChange}
      />
      <div className="design-stage" data-active-design={activeDesign} key={activeDesign}>
        <ActiveDesign content={clubVereContent} />
      </div>
    </>
  );
}
