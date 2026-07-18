"use client";

import type { DesignId } from "@/lib/designs";

const options: ReadonlyArray<{
  id: DesignId;
  number: string;
  label: string;
}> = [
  { id: "soft-focus", number: "01", label: "Soft Focus" },
  { id: "vere-after-dark", number: "02", label: "After Dark" },
  { id: "blue-hour", number: "03", label: "Blue Hour" },
  { id: "invite-club", number: "04", label: "Invite" },
  { id: "the-vere-edit", number: "05", label: "Vere Edit" },
];

interface DesignSwitcherProps {
  activeDesign: DesignId;
  onDesignChange: (design: DesignId) => void;
}

export function DesignSwitcher({
  activeDesign,
  onDesignChange,
}: DesignSwitcherProps) {
  return (
    <div className="design-switcher-wrap">
      <div
        aria-label="Compare landing page designs"
        className="design-switcher"
        role="group"
      >
        {options.map((option) => (
          <button
            aria-label={`${option.number} ${option.label}`}
            aria-pressed={activeDesign === option.id}
            className="design-switcher__button"
            key={option.id}
            onClick={() => onDesignChange(option.id)}
            type="button"
          >
            <span aria-hidden="true" className="design-switcher__number">
              {option.number}
            </span>
            <span className="design-switcher__label">{option.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
