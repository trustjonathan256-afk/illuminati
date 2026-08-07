import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "The Four Symbols",
  description:
    "The Pyramid, the Eye, the Light, and the Eternal — the four pillars of the Illuminati Foundation.",
};

/* ════════════════════════════════════════════════════════════
   SVG GLYPHS
════════════════════════════════════════════════════════════ */

function PyramidGlyph({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 90"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
    >
      {/* Outer triangle */}
      <polygon
        points="50,4 97,86 3,86"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      {/* Inner construction lines */}
      <line
        x1="50"
        y1="4"
        x2="50"
        y2="86"
        stroke="currentColor"
        strokeWidth="0.6"
        opacity="0.2"
      />
      <line
        x1="3"
        y1="86"
        x2="72"
        y2="32"
        stroke="currentColor"
        strokeWidth="0.6"
        opacity="0.2"
      />
      <line
        x1="97"
        y1="86"
        x2="28"
        y2="32"
        stroke="currentColor"
        strokeWidth="0.6"
        opacity="0.2"
      />
      {/* Eye at upper-third */}
      <ellipse
        cx="50"
        cy="40"
        rx="8"
        ry="4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <circle cx="50" cy="40" r="2.5" fill="currentColor" />
    </svg>
  );
}

function EyeGlyphLarge({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 60"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
    >
      <defs>
        <clipPath id="sym-eye-clip">
          <path d="M5,30 Q60,2 115,30 Q60,58 5,30 Z" />
        </clipPath>
      </defs>
      {/* Outer lids */}
      <path
        d="M5,30 Q60,2 115,30 Q60,58 5,30 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      {/* Iris */}
      <circle
        cx="60"
        cy="30"
        r="18"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        clipPath="url(#sym-eye-clip)"
      />
      {/* Inner iris ring */}
      <circle
        cx="60"
        cy="30"
        r="11"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.8"
        opacity="0.4"
        clipPath="url(#sym-eye-clip)"
      />
      {/* Pupil */}
      <circle
        cx="60"
        cy="30"
        r="6.5"
        fill="currentColor"
        clipPath="url(#sym-eye-clip)"
      />
      {/* Highlight */}
      <circle
        cx="64"
        cy="26"
        r="2"
        fill="white"
        opacity="0.4"
        clipPath="url(#sym-eye-clip)"
      />
    </svg>
  );
}

function SunburstGlyph({ className = "" }: { className?: string }) {
  /* 8 long rays + 8 short rays alternating, from a central circle */
  const rays = Array.from({ length: 16 }, (_, i) => {
    const angle = (i * 360) / 16;
    const isLong = i % 2 === 0;
    const inner = 16;
    const outer = isLong ? 44 : 32;
    const rad = (angle * Math.PI) / 180;
    const x1 = 50 + inner * Math.sin(rad);
    const y1 = 50 - inner * Math.cos(rad);
    const x2 = 50 + outer * Math.sin(rad);
    const y2 = 50 - outer * Math.cos(rad);
    return { x1, y1, x2, y2, isLong };
  });

  return (
    <svg
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
    >
      {/* Rays */}
      {rays.map((r, i) => (
        <line
          key={i}
          x1={r.x1}
          y1={r.y1}
          x2={r.x2}
          y2={r.y2}
          stroke="currentColor"
          strokeWidth={r.isLong ? "1.8" : "1"}
          opacity={r.isLong ? "0.9" : "0.45"}
          strokeLinecap="round"
        />
      ))}
      {/* Centre circle */}
      <circle
        cx="50"
        cy="50"
        r="12"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
      {/* Inner dot */}
      <circle cx="50" cy="50" r="4" fill="currentColor" />
    </svg>
  );
}

function EternalGlyph({ className = "" }: { className?: string }) {
  /* Lemniscate (∞) drawn with two tangent bezier loops */
  return (
    <svg
      viewBox="0 0 120 60"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
    >
      {/* Infinity path: two loops meeting at centre (60,30) */}
      <path
        d="M 60,30
           C 60,12  47,2  30,2
           C 13,2   2,13  2,30
           C 2,47   13,58  30,58
           C 47,58  60,48  60,30
           C 60,12  73,2   90,2
           C 107,2  118,13  118,30
           C 118,47  107,58  90,58
           C 73,58  60,48  60,30 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      {/* Crossing mark at centre */}
      <circle cx="60" cy="30" r="2.5" fill="currentColor" />
      {/* Small circles at loop centres */}
      <circle
        cx="30"
        cy="30"
        r="5"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.8"
        opacity="0.35"
      />
      <circle
        cx="90"
        cy="30"
        r="5"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.8"
        opacity="0.35"
      />
    </svg>
  );
}

/* ════════════════════════════════════════════════════════════
   SYMBOL DATA
════════════════════════════════════════════════════════════ */

const SYMBOLS = [
  {
    roman: "I",
    id: "pyramid",
    name: "The Pyramid",
    aspect: "Structure",
    Glyph: PyramidGlyph,
    glyphColor: "text-accent",
    image:
      "/images/mystic-all-seeing-eye-pyramid-engraving-detailed-black-white-engraving-style-illustration-all-seeing-eye-eye-411939909.webp",
    lines: [
      "The first symbol is the oldest.",
      "A triangle reaching upward.",
      "Not a monument. Not a tomb.",
      "A geometry of intention.",
      "The Pyramid represents Structure.",
      "Without structure, knowledge collapses.",
      "Without structure, the Foundation cannot endure.",
      "The Pyramid has no door.",
      "It has a summit.",
    ],
    accentLines: ["The Pyramid has no door.", "It has a summit."],
    quote:
      "Structure is not constraint. Structure is the shape that endurance takes.",
  },
  {
    roman: "II",
    id: "eye",
    name: "The Eye",
    aspect: "Witness",
    Glyph: EyeGlyphLarge,
    glyphColor: "text-accent",
    image:
      "/images/all-seeing-eye-triangle-geometric-vector-design-providance-pyramid-tattoo-symbol-occult-secret-hand-sign-mystic-spiritual-138469328.webp",
    lines: [
      "The second symbol needs no explanation.",
      "You have seen it already.",
      "On currency. On monuments.",
      "On the walls of rooms you were told were empty.",
      "The Eye represents Witness.",
      "To witness is not merely to see.",
      "It is to remember. To record. To refuse to forget.",
      "The Eye does not judge.",
      "It observes.",
      "That is enough.",
    ],
    accentLines: ["It observes.", "That is enough."],
    quote:
      "The most powerful thing in any room is the one that does not blink.",
  },
  {
    roman: "III",
    id: "light",
    name: "The Light",
    aspect: "Knowledge",
    Glyph: SunburstGlyph,
    glyphColor: "text-accent",
    image: "/images/360_F_1037895593_d4qeLnDiLAWCj9WufGQ3FpSg390YegYr.jpg",
    lines: [
      "The third symbol is often misread.",
      "They call it the sun. They call it fire.",
      "It is neither.",
      "The Light represents Knowledge.",
      "Not comfort. Not warmth.",
      "The light that burns away what you were certain of.",
      "The light that leaves no shadow to hide in.",
      "Knowledge, properly understood, is not a gift.",
      "It is a weight.",
      "The Foundation carries it.",
    ],
    accentLines: ["It is a weight.", "The Foundation carries it."],
    quote:
      "You cannot unsee what the light has shown you. That is its power. That is its cost.",
  },
  {
    roman: "IV",
    id: "eternal",
    name: "The Eternal",
    aspect: "Continuity",
    Glyph: EternalGlyph,
    glyphColor: "text-accent",
    image: "/images/3-25-1-30-16-35-30m.jpg",
    lines: [
      "The fourth symbol has no beginning.",
      "It has no end.",
      "The Eternal represents Continuity.",
      "Governments dissolve. Empires are forgotten.",
      "The Foundation is not.",
      "Three hundred years is not a long time to us.",
      "We are patient in the way that stone is patient.",
      "We do not rush.",
      "We do not end.",
      "We endure.",
    ],
    accentLines: ["We do not end.", "We endure."],
    quote:
      "Everything that matters survives long enough to be remembered. We ensure it is remembered correctly.",
  },
] as const;

/* ════════════════════════════════════════════════════════════
   SHARED PRIMITIVES
════════════════════════════════════════════════════════════ */

function PageLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-mono text-[0.6rem] tracking-[0.35em] text-foreground/35 uppercase mb-6">
      {children}
    </p>
  );
}

// function Divider() {
//   return <div className="w-px h-20 bg-accent/30 mx-auto my-0" />;
// }

/* ════════════════════════════════════════════════════════════
   PAGE
════════════════════════════════════════════════════════════ */

export default function SymbolsPage() {
  return (
    <article>
      {/* ══════════════════════════════════════════
          PAGE HEADER
      ══════════════════════════════════════════ */}
      <header className="max-w-2xl mx-auto px-6 pt-20 pb-16 border-b border-foreground/10 mb-0">
        <ScrollReveal>
          <PageLabel>04 — The Four Symbols</PageLabel>
        </ScrollReveal>
        <ScrollReveal delay={0.05}>
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl text-foreground leading-[0.95] mb-8">
            Four Words.
            <br />
            <em className="text-accent">One Mandate.</em>
          </h1>
        </ScrollReveal>
        <ScrollReveal delay={0.12}>
          <p className="font-mono text-xs text-foreground/35 tracking-widest uppercase">
            Classified briefing — level 02 clearance
          </p>
        </ScrollReveal>
      </header>

      {/* ══════════════════════════════════════════
          FOUR SYMBOL SECTIONS
      ══════════════════════════════════════════ */}
      {SYMBOLS.map((symbol, index) => {
        const isEven = index % 2 === 0;
        return (
          <section
            key={symbol.id}
            id={symbol.id}
            className="relative border-b border-foreground/8"
          >
            {/* Full-width inner container */}
            <div
              className={`max-w-6xl mx-auto px-6 py-24 md:py-36 flex flex-col ${
                isEven ? "md:flex-row" : "md:flex-row-reverse"
              } items-center gap-16 md:gap-24`}
            >
              {/* ── Glyph & Image ── */}
              <div className="flex-shrink-0 flex flex-col items-center justify-center w-full md:w-80">
                <ScrollReveal delay={0.05}>
                  <div className="w-44 h-44 md:w-56 md:h-56 mx-auto mb-6 flex items-center justify-center">
                    <symbol.Glyph
                      className={`w-full h-full ${symbol.glyphColor} opacity-80`}
                    />
                  </div>
                </ScrollReveal>
                <ScrollReveal delay={0.08}>
                  <div className="relative w-full h-48 sm:h-56 border border-foreground/20 overflow-hidden shadow-lg">
                    <Image
                      src={symbol.image}
                      alt={symbol.name}
                      fill
                      className="object-cover filter grayscale contrast-125 hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/30" />
                  </div>
                </ScrollReveal>
              </div>

              {/* ── Text block ── */}
              <div className="flex-1 max-w-lg">
                <ScrollReveal>
                  <div className="flex items-center gap-4 mb-6">
                    <span className="font-mono text-[0.55rem] tracking-[0.4em] text-foreground/25 uppercase">
                      Symbol {symbol.roman}
                    </span>
                    <span className="w-8 h-px bg-foreground/15" />
                    <span className="font-mono text-[0.55rem] tracking-[0.4em] text-accent/60 uppercase">
                      {symbol.aspect}
                    </span>
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={0.06}>
                  <h2 className="font-display text-4xl md:text-5xl text-foreground mb-8 leading-tight">
                    {symbol.name}.
                  </h2>
                </ScrollReveal>

                {symbol.lines.map((line, i) => (
                  <ScrollReveal key={i} delay={0.07 + i * 0.06}>
                    <p
                      className={`font-mono text-sm leading-relaxed mb-2.5 ${
                        (symbol.accentLines as readonly string[]).includes(line)
                          ? "text-foreground/85 pl-4 border-l border-accent/40"
                          : "text-foreground/55"
                      }`}
                    >
                      {line}
                    </p>
                  </ScrollReveal>
                ))}

                {/* Pull quote */}
                <ScrollReveal delay={0.07 + symbol.lines.length * 0.06 + 0.06}>
                  <blockquote className="mt-8 pt-6 border-t border-foreground/10">
                    <p className="font-display text-lg md:text-xl italic text-foreground/40 leading-snug">
                      &ldquo;{symbol.quote}&rdquo;
                    </p>
                  </blockquote>
                </ScrollReveal>
              </div>
            </div>

            {/* Roman numeral watermark */}
            <span
              aria-hidden="true"
              className="pointer-events-none absolute top-1/2 -translate-y-1/2 right-6 md:right-12 font-display text-[8rem] md:text-[12rem] text-foreground/[0.025] leading-none select-none"
            >
              {symbol.roman}
            </span>
          </section>
        );
      })}

      {/* ══════════════════════════════════════════
          THE FOUR TOGETHER
      ══════════════════════════════════════════ */}
      <section className="max-w-2xl mx-auto px-6 py-24 md:py-36 text-center">
        <ScrollReveal>
          <PageLabel>The Four Together</PageLabel>
        </ScrollReveal>
        <ScrollReveal delay={0.05}>
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-12 leading-tight">
            One Language.
            <br />
            <em className="text-accent">Complete.</em>
          </h2>
        </ScrollReveal>

        {/* All four glyphs in a row */}
        <ScrollReveal delay={0.1}>
          <div className="flex items-center justify-center gap-8 md:gap-16 mb-14">
            {SYMBOLS.map((symbol) => (
              <a
                key={symbol.id}
                href={`#${symbol.id}`}
                className="group flex flex-col items-center gap-2"
                aria-label={`Scroll to ${symbol.name}`}
              >
                <symbol.Glyph className="w-10 h-10 md:w-14 md:h-14 text-foreground/30 group-hover:text-accent transition-colors duration-300" />
                <span className="font-mono text-[0.5rem] tracking-[0.3em] text-foreground/20 uppercase group-hover:text-foreground/50 transition-colors duration-300">
                  {symbol.aspect}
                </span>
              </a>
            ))}
          </div>
        </ScrollReveal>

        {[
          "The Four Symbols are not decorations.",
          "They are a language.",
          "Each one precise. Each one ancient.",
          "When you see all four together, you are looking at the complete mandate of the Foundation.",
          "Structure. Witness. Knowledge. Continuity.",
          "Everything else is detail.",
        ].map((line, i) => (
          <ScrollReveal key={i} delay={0.15 + i * 0.07} className="mb-2">
            <p
              className={`font-mono text-sm tracking-wider ${
                line === "Structure. Witness. Knowledge. Continuity."
                  ? "text-accent/70 mt-4 mb-4 tracking-[0.15em]"
                  : line === "Everything else is detail."
                    ? "text-foreground/80 font-medium"
                    : "text-foreground/50"
              }`}
            >
              {line}
            </p>
          </ScrollReveal>
        ))}

        <ScrollReveal delay={0.7}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-14">
            <Link
              href="/archive"
              className="font-mono text-[0.7rem] tracking-[0.25em] uppercase px-8 py-3 border border-accent text-accent hover:bg-accent hover:text-foreground transition-all duration-300"
            >
              Enter the Archive →
            </Link>
            <Link
              href="/verified"
              className="font-mono text-[0.7rem] tracking-[0.25em] uppercase px-8 py-3 border border-foreground/20 text-foreground/50 hover:border-foreground/50 hover:text-foreground/80 transition-all duration-300"
            >
              Verification →
            </Link>
          </div>
        </ScrollReveal>
      </section>
    </article>
  );
}
