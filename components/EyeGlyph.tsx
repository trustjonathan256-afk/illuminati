"use client";

import { useId } from "react";

interface EyeGlyphProps {
  animated?: boolean;
  size?: number;
  className?: string;
}

export default function EyeGlyph({
  animated = false,
  size = 40,
  className = "",
}: EyeGlyphProps) {
  const uid = useId().replace(/:/g, "");
  const clipId = `eye-clip-${uid}`;

  return (
    <svg
      width={size}
      height={size * 0.5}
      viewBox="0 0 100 50"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
    >
      <defs>
        <clipPath id={clipId}>
          {/* Almond / vesica-piscis eye shape */}
          <path d="M5,25 Q50,2 95,25 Q50,48 5,25 Z" />
        </clipPath>
      </defs>

      {/* Outer eye outline — blinks by scaleY-ing this group */}
      <g
        className={`eye-lid-group${animated ? " eye-blink" : ""}`}
        style={{ transformOrigin: "50px 25px", transformBox: "fill-box" }}
      >
        <path
          d="M5,25 Q50,2 95,25 Q50,48 5,25 Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />

        {/* Iris ring */}
        <circle
          cx="50"
          cy="25"
          r="14"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          clipPath={`url(#${clipId})`}
        />

        {/* Pupil + iris fill — drifts slightly when animated */}
        <g
          className={animated ? "eye-pupil-drift" : ""}
          style={{ transformOrigin: "50px 25px", transformBox: "fill-box" }}
        >
          <circle
            cx="50"
            cy="25"
            r="7"
            fill="currentColor"
            clipPath={`url(#${clipId})`}
          />
          {/* Specular highlight */}
          <circle
            cx="54"
            cy="21"
            r="2"
            fill="white"
            opacity="0.45"
            clipPath={`url(#${clipId})`}
          />
        </g>
      </g>
    </svg>
  );
}
