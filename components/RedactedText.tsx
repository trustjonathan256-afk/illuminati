"use client";

import { useState, useCallback } from "react";

interface RedactedTextProps {
  children: string;
  className?: string;
}

export default function RedactedText({ children, className = "" }: RedactedTextProps) {
  const [revealed, setRevealed] = useState(false);

  const reveal = useCallback(() => setRevealed(true), []);
  const conceal = useCallback(() => setRevealed(false), []);
  const toggle = useCallback(() => setRevealed((v) => !v), []);

  return (
    <span
      role="button"
      tabIndex={0}
      aria-label={revealed ? children : "Redacted — hover or tap to reveal"}
      onMouseEnter={reveal}
      onMouseLeave={conceal}
      onClick={toggle}
      onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && toggle()}
      className={`
        inline cursor-pointer select-none rounded-[2px] px-0.5 transition-all duration-300
        ${revealed
          ? "text-inherit bg-transparent"
          : "text-transparent bg-[#e8e8e3]"
        }
        ${className}
      `}
    >
      {children}
    </span>
  );
}
