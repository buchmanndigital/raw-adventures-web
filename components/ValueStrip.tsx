"use client";

import { Check } from "@/components/Check";
import { Tx } from "@/components/Tx";

const keys = ["strip1", "strip2", "strip3", "strip4", "strip5"] as const;

export function ValueStrip() {
  return (
    <div className="value-strip">
      {keys.map((k) => (
        <div key={k} className="value-item">
          <Check />
          <Tx k={k} as="span" id={k} />
        </div>
      ))}
    </div>
  );
}
