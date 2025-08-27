"use client";

import { Toggle, ToggleWithNewButton } from "@/app/patterns/compound/Toggle";

export default function CompoundComponent() {
  return (
    <div>
      <Toggle initialValue={false} />
      <ToggleWithNewButton initialValue={false} />
    </div>
  );
}
