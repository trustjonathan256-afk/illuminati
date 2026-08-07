import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import EyeGlyph from "@/components/EyeGlyph";

export const metadata: Metadata = {
  title: "Inner Circle",
  description:
    "The five levels of Foundation membership, what each demands, and what each provides.",
};

/* ─── Shared primitives ──────────────────────────────────── */
function PageLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-mono text-[0.6rem] tracking-[0.35em] text-foreground/35 uppercase mb-6">
      {children}
    </p>
  );
}

function Divider() {
  return <div className="w-px h-20 bg-accent/30 mx-auto my-24 md:my-32" />;
}

/* ─── Five Levels data ───────────────────────────────────── */
const LEVELS = [
  {
    number: "01",
    name: "Observer",
    tagline: "You have found us.",
    description:
      "You are watching. Nothing more is asked of you yet. You may read. You may listen. The Foundation is aware of your presence. You are not yet aware of ours.",
    image: "/images/fgfds.jpg",
    border: "border-foreground/10",
    bg: "",
    numberColor: "text-foreground/20",
    nameSize: "text-base",
    nameWeight: "font-normal",
    textColor: "text-foreground/45",
    taglineColor: "text-foreground/30",
    px: "px-5",
    py: "py-4",
  },
  {
    number: "02",
    name: "Watcher",
    tagline: "You chose to remain.",
    description:
      "The Foundation has taken note. You receive the first briefings. Your observations are welcomed but not yet required. The door behind you is still visible.",
    border: "border-foreground/20",
    bg: "bg-foreground/[0.015]",
    numberColor: "text-foreground/30",
    nameSize: "text-lg",
    nameWeight: "font-normal",
    textColor: "text-foreground/55",
    taglineColor: "text-foreground/40",
    px: "px-5",
    py: "py-5",
  },
  {
    number: "03",
    name: "Keeper",
    tagline: "A domain has been assigned.",
    description:
      "A sliver of the Archive is now your responsibility. You are expected to maintain it without error and without complaint. What is lost under your watch is lost forever. The Foundation does not offer second chances at this level.",
    image: "/images/ghjhgf.jpg",
    border: "border-foreground/35",
    bg: "bg-foreground/[0.03]",
    numberColor: "text-foreground/40",
    nameSize: "text-xl",
    nameWeight: "font-medium",
    textColor: "text-foreground/65",
    taglineColor: "text-foreground/50",
    px: "px-6",
    py: "py-6",
  },
  {
    number: "04",
    name: "Arbiter",
    tagline: "You have been tested.",
    description:
      "You did not look away. You may now speak in Council. Your word carries weight in matters of the second order. You know three of the Four Symbols. The fourth is earned, not given.",
    border: "border-accent/50",
    bg: "bg-accent/[0.03]",
    numberColor: "text-accent/60",
    nameSize: "text-2xl",
    nameWeight: "font-semibold",
    textColor: "text-foreground/75",
    taglineColor: "text-accent/70",
    px: "px-6",
    py: "py-7",
  },
  {
    number: "05",
    name: "Inner Circle",
    tagline: "Twelve seats. One is yours.",
    description:
      "Your name is known to no one else here. You do not know theirs. Your decisions shape what the world will remember — or forget. You have seen the full Archive. You carry its weight without letting it show. This is the last level because there is nothing beyond it.",
    image: "/images/kjhgf.jpg",
    border: "border-accent",
    bg: "bg-accent/[0.06]",
    numberColor: "text-accent",
    nameSize: "text-3xl",
    nameWeight: "font-bold",
    textColor: "text-foreground/90",
    taglineColor: "text-accent",
    px: "px-7",
    py: "py-8",
  },
];

/* ─── Membership benefit card ────────────────────────────── */
type BenefitProps = {
  icon: string;
  label: string;
  body: string;
  delay: number;
};

function BenefitCard({ icon, label, body, delay }: BenefitProps) {
  return (
    <ScrollReveal delay={delay}>
      <div className="border border-foreground/15 p-6 flex flex-col gap-3 h-full hover:border-accent/30 transition-colors duration-400">
        <span className="font-mono text-xl text-accent/70" aria-hidden="true">
          {icon}
        </span>
        <h3 className="font-display text-2xl text-foreground">{label}</h3>
        <p className="font-mono text-sm text-foreground/55 leading-relaxed">
          {body}
        </p>
      </div>
    </ScrollReveal>
  );
}

const BENEFITS: BenefitProps[] = [
  {
    icon: "◈",
    label: "Knowledge",
    body: "Every classified briefing. Every sealed record. The full Archive, unrestricted. What the world has buried, you will read by candlelight.",
    delay: 0.05,
  },
  {
    icon: "❖",
    label: "Abundance & Wealth",
    body: "Financial sovereignty, global capital alignment, and generational prosperity. Those who serve the Foundation never struggle for resources.",
    delay: 0.12,
  },
  {
    icon: "⊗",
    label: "Influence & Power",
    body: "Reach that crosses every border, every institution, every financial market. You will not hold mere power; global markets will align with your intent.",
    delay: 0.19,
  },
  {
    icon: "◉",
    label: "Immortal Legacy",
    body: "Your family line elevated forever. Long after governments fall and currencies dissolve, the Foundation guarantees your wealth and name endure.",
    delay: 0.26,
  },
];

/* ─── Page ───────────────────────────────────────────────── */
export default function InnerCirclePage() {
  return (
    <article className="max-w-2xl mx-auto px-6">
      {/* ══════════════════════════════════════════
          PAGE HEADER
      ══════════════════════════════════════════ */}
      <header className="pt-20 pb-16 border-b border-foreground/10 mb-16">
        <ScrollReveal>
          <PageLabel>03 — The Inner Circle</PageLabel>
        </ScrollReveal>
        <ScrollReveal delay={0.05}>
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl text-foreground leading-[0.95] mb-8">
            Not Everyone
            <br />
            <em className="text-accent">Is Ready.</em>
          </h1>
        </ScrollReveal>

        {/* Inner Circle Image Banner */}
        <ScrollReveal delay={0.1}>
          <div className="relative w-full h-64 sm:h-72 my-8 overflow-hidden border border-accent/30 shadow-[0_0_30px_rgba(138,31,31,0.2)]">
            <Image
              src="/images/inner_circle.png"
              alt="The Inner Circle Assembly"
              fill
              className="object-cover object-center filter grayscale contrast-125 brightness-90 hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40" />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.12}>
          <p className="font-mono text-xs text-foreground/35 tracking-widest uppercase">
            Classified briefing — level 02 clearance
          </p>
        </ScrollReveal>
      </header>

      {/* ══════════════════════════════════════════
          INTRO
      ══════════════════════════════════════════ */}
      <section className="mb-8">
        <ScrollReveal>
          <PageLabel>What This Is</PageLabel>
        </ScrollReveal>
        <ScrollReveal delay={0.05}>
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-10 leading-tight">
            Membership Is Not
            <br />
            <em className="text-accent">Applied For.</em>
          </h2>
        </ScrollReveal>

        {[
          "There is no application form.",
          "There is no recruitment drive.",
          "There is no shortcut.",
          "The Inner Circle has twelve seats.",
          "Those seats are almost always occupied.",
          "When one becomes available, the Foundation already knows who fills it.",
          "What follows is not an invitation.",
          "It is a map.",
          "Study it.",
        ].map((line, i) => (
          <ScrollReveal key={i} delay={i * 0.06}>
            <p
              className={`font-mono text-sm leading-relaxed mb-3 ${
                line === "It is a map." || line === "Study it."
                  ? "text-foreground/80"
                  : "text-foreground/55"
              }`}
            >
              {line}
            </p>
          </ScrollReveal>
        ))}
      </section>

      <Divider />

      {/* ══════════════════════════════════════════
          THE FIVE LEVELS
      ══════════════════════════════════════════ */}
      <section className="mb-8">
        <ScrollReveal>
          <PageLabel>The Five Levels</PageLabel>
        </ScrollReveal>
        <ScrollReveal delay={0.05}>
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-12 leading-tight">
            The Geometry
            <br />
            <em className="text-accent">of Ascent.</em>
          </h2>
        </ScrollReveal>

        <div className="flex flex-col gap-3">
          {LEVELS.map((level, i) => (
            <ScrollReveal key={level.number} delay={i * 0.1}>
              <div
                className={`border ${level.border} ${level.bg} ${level.px} ${level.py} transition-all duration-300`}
              >
                <div className="flex items-baseline gap-3 mb-2">
                  <span
                    className={`font-mono text-[0.6rem] tracking-[0.3em] ${level.numberColor}`}
                  >
                    {level.number}
                  </span>
                  <span
                    className={`font-display ${level.nameSize} ${level.nameWeight} text-foreground`}
                  >
                    {level.name}
                  </span>
                </div>
                <p
                  className={`font-mono text-[0.7rem] tracking-widest uppercase mb-3 ${level.taglineColor}`}
                >
                  {level.tagline}
                </p>
                <p className={`font-mono text-xs leading-relaxed mb-4 ${level.textColor}`}>
                  {level.description}
                </p>
                {level.image && (
                  <div className="relative w-full h-40 sm:h-48 border border-foreground/15 overflow-hidden">
                    <Image
                      src={level.image}
                      alt={level.name}
                      fill
                      className="object-cover filter grayscale contrast-125 hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/30" />
                  </div>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <Divider />

      {/* ══════════════════════════════════════════
          WHAT MEMBERSHIP PROVIDES — 2×2 GRID
      ══════════════════════════════════════════ */}
      <section className="mb-8">
        <ScrollReveal>
          <PageLabel>What Membership Provides</PageLabel>
        </ScrollReveal>
        <ScrollReveal delay={0.05}>
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-12 leading-tight">
            What You
            <br />
            <em className="text-accent">Receive.</em>
          </h2>
        </ScrollReveal>

        {/* 2×2 on sm+, stacked on mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {BENEFITS.map((b) => (
            <BenefitCard key={b.label} {...b} />
          ))}
        </div>
      </section>

      <Divider />

      {/* ══════════════════════════════════════════
          THE PROCESS
      ══════════════════════════════════════════ */}
      <section className="mb-8">
        <ScrollReveal>
          <PageLabel>The Process</PageLabel>
        </ScrollReveal>
        <ScrollReveal delay={0.05}>
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-10 leading-tight">
            Readiness Is
            <br />
            <em className="text-accent">Recognised.</em>
          </h2>
        </ScrollReveal>

        {[
          "The Foundation does not announce when it is watching.",
          "It watches regardless.",
          "Readiness is not declared. It is observed.",
          "It is measured in silence. In steadiness. In the quality of what you notice.",
          "You will not know you are being considered.",
          "You will not know when the decision is made.",
          "You will know only when the door opens.",
          "Until then: observe.",
          "Until then: do not look away.",
        ].map((line, i) => (
          <ScrollReveal key={i} delay={i * 0.06}>
            <p
              className={`font-mono text-sm leading-relaxed mb-3 ${
                line.startsWith("Until then")
                  ? "text-foreground/80 pl-4 border-l border-accent/40"
                  : "text-foreground/55"
              }`}
            >
              {line}
            </p>
          </ScrollReveal>
        ))}
      </section>

      <Divider />

      {/* ══════════════════════════════════════════
          CLOSING
      ══════════════════════════════════════════ */}
      <section className="text-center py-8 pb-20">
        <ScrollReveal>
          <div className="flex justify-center mb-8">
            <EyeGlyph animated size={80} className="text-accent/70" />
          </div>
        </ScrollReveal>

        {[
          "The Inner Circle is not a reward.",
          "It is a responsibility.",
          "Consider whether you are prepared for what it costs.",
        ].map((line, i) => (
          <ScrollReveal key={i} delay={i * 0.1} className="mb-2">
            <p className="font-mono text-xs text-foreground/45 tracking-wider">
              {line}
            </p>
          </ScrollReveal>
        ))}

        <ScrollReveal delay={0.45}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-14">
            <Link
              href="/symbols"
              className="font-mono text-[0.7rem] tracking-[0.25em] uppercase px-8 py-3 border border-accent text-accent hover:bg-accent hover:text-foreground transition-all duration-300"
            >
              The Four Symbols →
            </Link>
            <Link
              href="/archive"
              className="font-mono text-[0.7rem] tracking-[0.25em] uppercase px-8 py-3 border border-foreground/20 text-foreground/50 hover:border-foreground/50 hover:text-foreground/80 transition-all duration-300"
            >
              Enter the Archive →
            </Link>
          </div>
        </ScrollReveal>
      </section>
    </article>
  );
}
