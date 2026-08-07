import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import EyeGlyph from "@/components/EyeGlyph";

export const metadata: Metadata = {
  title: "The Foundation",
  description:
    "The origin, mandate, and structure of the Illuminati Foundation — classified briefing for approved access.",
};

/* ─── Shared primitives ──────────────────────────────────── */
function PageLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-mono text-[0.6rem] tracking-[0.35em] text-foreground/35 uppercase mb-6">
      {children}
    </p>
  );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-display text-4xl md:text-5xl text-foreground mb-10 leading-tight">
      {children}
    </h2>
  );
}

function BodyLine({
  children,
  dim = false,
  indent = false,
}: {
  children: React.ReactNode;
  dim?: boolean;
  indent?: boolean;
}) {
  return (
    <p
      className={`font-mono text-sm leading-relaxed mb-3 ${
        dim ? "text-foreground/40" : "text-foreground/65"
      } ${indent ? "pl-4 border-l border-accent/30" : ""}`}
    >
      {children}
    </p>
  );
}

function Divider() {
  return <div className="w-px h-20 bg-accent/30 mx-auto my-24 md:my-32" />;
}

/* ─── Page ───────────────────────────────────────────────── */
export default function FoundationPage() {
  return (
    <article className="max-w-2xl mx-auto px-6">
      {/* ══════════════════════════════════════════
          PAGE HEADER
      ══════════════════════════════════════════ */}
      <header className="pt-20 pb-16 border-b border-foreground/10 mb-16">
        <ScrollReveal>
          <PageLabel>02 — The Foundation</PageLabel>
        </ScrollReveal>
        <ScrollReveal delay={0.05}>
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl text-foreground leading-[0.95] mb-8">
            The Illuminati
            <br />
            <em className="text-accent">Foundation.</em>
          </h1>
        </ScrollReveal>

        {/* Vault Image Banner */}
        <ScrollReveal delay={0.1}>
          <div className="relative w-full h-64 sm:h-72 my-8 overflow-hidden border border-foreground/20">
            <Image
              src="/images/vault.png"
              alt="Secret underground archive vault"
              fill
              className="object-cover object-center filter grayscale contrast-125 brightness-80 hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40" />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.12}>
          <p className="font-mono text-xs text-foreground/35 tracking-widest uppercase">
            Classified briefing — level 01 clearance
          </p>
        </ScrollReveal>
      </header>

      {/* ══════════════════════════════════════════
          01 — ORIGINS
      ══════════════════════════════════════════ */}
      <section className="mb-8">
        <ScrollReveal>
          <PageLabel>01 — Origins</PageLabel>
        </ScrollReveal>
        <ScrollReveal delay={0.05}>
          <SectionHeading>
            It Did Not Begin
            <br />
            <em className="text-accent">With a Name.</em>
          </SectionHeading>
        </ScrollReveal>

        {/* Origins Image Card */}
        <ScrollReveal delay={0.08}>
          <div className="relative w-full h-56 sm:h-64 mb-8 border border-foreground/20 overflow-hidden">
            <Image
              src="/images/3tt.jpg"
              alt="Origins of the Illuminati Foundation"
              fill
              className="object-cover filter grayscale contrast-125 hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40" />
          </div>
        </ScrollReveal>

        {[
          "Before it was called the Foundation, it was called nothing.",
          "Names invite attention. Attention invites interference.",
          "In the winter of 1776, seven men gathered in a room with no windows.",
          "They did not agree on much.",
          "They agreed on this: the world needed a witness.",
          "Someone to remember what power wants forgotten.",
          "Someone to record what history tries to erase.",
          "By the time the candles burned out, the Foundation existed.",
          "It has not stopped watching since.",
        ].map((line, i) => (
          <ScrollReveal key={i} delay={i * 0.06}>
            <BodyLine dim={line.startsWith("Before") || line.startsWith("Names")}>
              {line}
            </BodyLine>
          </ScrollReveal>
        ))}
      </section>

      <Divider />

      {/* ══════════════════════════════════════════
          02 — THE MANDATE
      ══════════════════════════════════════════ */}
      <section className="mb-8">
        <ScrollReveal>
          <PageLabel>02 — The Mandate</PageLabel>
        </ScrollReveal>
        <ScrollReveal delay={0.05}>
          <SectionHeading>
            What We Were
            <br />
            <em className="text-accent">Built to Do.</em>
          </SectionHeading>
        </ScrollReveal>

        {/* Mandate Image Card */}
        <ScrollReveal delay={0.08}>
          <div className="relative w-full h-56 sm:h-64 mb-8 border border-accent/30 overflow-hidden">
            <Image
              src="/images/dfg.jpg"
              alt="The Mandate of the Foundation"
              fill
              className="object-cover filter grayscale contrast-125 hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40" />
          </div>
        </ScrollReveal>

        {[
          "The mandate has not changed in two hundred and fifty years.",
          "Observe. Record. Preserve. Endure.",
          "We do not govern.",
          "We do not legislate.",
          "We do not punish.",
          "We witness.",
          "Every war. Every treaty signed and broken.",
          "Every figure of consequence who ever crossed our threshold.",
          "Every secret surrendered in exchange for protection.",
          "All of it lives in The Archive.",
          "All of it has been kept.",
        ].map((line, i) => (
          <ScrollReveal key={i} delay={i * 0.06}>
            <BodyLine
              indent={
                line.startsWith("Every") || line.startsWith("All of it")
              }
              dim={line === "Observe. Record. Preserve. Endure."}
            >
              {line}
            </BodyLine>
          </ScrollReveal>
        ))}
      </section>

      <Divider />

      {/* ══════════════════════════════════════════
          03 — THE STRUCTURE
      ══════════════════════════════════════════ */}
      <section className="mb-8">
        <ScrollReveal>
          <PageLabel>03 — The Structure</PageLabel>
        </ScrollReveal>
        <ScrollReveal delay={0.05}>
          <SectionHeading>
            Organised by
            <br />
            <em className="text-accent">Design.</em>
          </SectionHeading>
        </ScrollReveal>

        {[
          "The Foundation is not a hierarchy. It is a geometry.",
          "At its centre: the Inner Circle.",
          "Twelve members. No more. No fewer.",
          "Their identities are not known to one another.",
          "Their decisions are unanimous — or they are not made.",
          "Beyond the Inner Circle: the Four Pillars.",
          "Each Pillar holds a domain. Each domain holds a Symbol.",
          "Below the Pillars: the Observers.",
          "Below the Observers: you.",
          "For now.",
        ].map((line, i) => (
          <ScrollReveal key={i} delay={i * 0.07}>
            <BodyLine
              dim={line === "For now." || line === "Below the Observers: you."}
              indent={line.startsWith("Twelve") || line.startsWith("Their") || line.startsWith("Each Pillar")}
            >
              {line}
            </BodyLine>
          </ScrollReveal>
        ))}
      </section>

      <Divider />

      {/* ══════════════════════════════════════════
          04 — WHAT IS ASKED
      ══════════════════════════════════════════ */}
      <section className="mb-8">
        <ScrollReveal>
          <PageLabel>04 — What Is Asked</PageLabel>
        </ScrollReveal>
        <ScrollReveal delay={0.05}>
          <SectionHeading>
            We Ask Only
            <br />
            <em className="text-accent">One Thing.</em>
          </SectionHeading>
        </ScrollReveal>

        {[
          "We do not ask for loyalty. Loyalty fades.",
          "We do not ask for belief. Belief bends.",
          "We ask only that you look.",
          "Look at what is in front of you.",
          "Look at what they do not want you to see.",
          "Hold it in your mind.",
          "Do not flinch.",
          "Do not look away.",
          "That is the first vow.",
          "It is the only one that matters.",
        ].map((line, i) => (
          <ScrollReveal key={i} delay={i * 0.07}>
            <BodyLine
              dim={line.startsWith("We do not ask for")}
              indent={line.startsWith("Look at what they") || line.startsWith("Hold") || line.startsWith("Do not")}
            >
              {line}
            </BodyLine>
          </ScrollReveal>
        ))}
      </section>

      <Divider />

      {/* ══════════════════════════════════════════
          CLOSING — THE EYE
      ══════════════════════════════════════════ */}
      <section className="text-center py-8 pb-20">
        <ScrollReveal>
          <div className="flex justify-center mb-8">
            <EyeGlyph animated size={80} className="text-accent/70" />
          </div>
        </ScrollReveal>

        {[
          "The Foundation does not recruit.",
          "The Foundation does not advertise.",
          "If you have found this page, the Foundation found you first.",
        ].map((line, i) => (
          <ScrollReveal key={i} delay={i * 0.1} className="mb-2">
            <p className="font-mono text-xs text-foreground/45 tracking-wider">
              {line}
            </p>
          </ScrollReveal>
        ))}

        {/* Navigation forward */}
        <ScrollReveal delay={0.45}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-14">
            <Link
              href="/inner-circle"
              className="font-mono text-[0.7rem] tracking-[0.25em] uppercase px-8 py-3 border border-accent text-accent hover:bg-accent hover:text-foreground transition-all duration-300"
            >
              The Inner Circle →
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
