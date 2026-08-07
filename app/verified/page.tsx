import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import EyeGlyph from "@/components/EyeGlyph";

export const metadata: Metadata = {
  title: "Verified & Safety Warnings",
  description:
    "Official disclaimers, safety warnings, and fictional concept disclosures for the Illuminati Foundation project.",
};

function PageLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-mono text-[0.65rem] tracking-[0.3em] text-accent/80 uppercase font-semibold mb-4">
      {children}
    </p>
  );
}

function Divider() {
  return <div className="w-full h-px bg-foreground/10 my-16" />;
}

export default function VerifiedPage() {
  return (
    <article className="max-w-3xl mx-auto px-6 py-12">
      {/* ══════════════════════════════════════════
          PAGE HEADER (Clean & Legible)
      ══════════════════════════════════════════ */}
      <header className="pt-12 pb-12 border-b border-foreground/15 mb-12">
        <ScrollReveal>
          <PageLabel>06 — Verified / Warnings</PageLabel>
        </ScrollReveal>
        <ScrollReveal delay={0.05}>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl text-foreground font-semibold leading-tight mb-6">
            Official Disclaimer &amp; Safety Directives
          </h1>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <p className="font-mono text-sm text-foreground/75 leading-relaxed bg-accent/10 border-l-2 border-accent p-4">
            <strong>NOTICE:</strong> This website is an immersive fictional
            horror concept and educational design project. It does not represent
            a real secret society, organization, or financial entity.
          </p>
        </ScrollReveal>
      </header>

      {/* ══════════════════════════════════════════
          PROJECT DISCLOSURE
      ══════════════════════════════════════════ */}
      <section className="space-y-4">
        <ScrollReveal>
          <h2 className="font-display text-2xl md:text-3xl text-foreground font-medium mb-4">
            Fictional Concept Disclosure
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.05}>
          <p className="font-mono text-sm text-foreground/80 leading-relaxed">
            The Illuminati Foundation (&quot;ILLUM&quot;) presented on this
            website is entirely a work of fiction, worldbuilding, and modern web
            application prototyping. All lore, symbols, ranks, and historical
            case files are designed purely for entertainment and educational
            purposes.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <p className="font-mono text-sm text-foreground/80 leading-relaxed">
            No real-world initiation, membership, or occult authority is offered
            or implied.
          </p>
        </ScrollReveal>
      </section>

      <Divider />

      {/* ══════════════════════════════════════════
          SCAM & SAFETY WARNING
      ══════════════════════════════════════════ */}
      <section className="space-y-4">
        <ScrollReveal>
          <h2 className="font-display text-2xl md:text-3xl text-accent font-medium mb-4">
            Protection Against Real-World Scams
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.05}>
          <p className="font-mono text-sm text-foreground/80 leading-relaxed">
            Real-world fraudsters frequently use the name &quot;Illuminati&quot;
            to conduct advance-fee fraud, phishing schemes, and social
            engineering attacks on social media platforms.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <p className="font-mono text-sm text-foreground/80 leading-relaxed">
            Be vigilant: legitimate organizations will never request money or
            personal credentials over anonymous internet channels.
          </p>
        </ScrollReveal>
      </section>

      <Divider />

      {/* ══════════════════════════════════════════
          DO NOT SEND ANYTHING (Bulleted List)
      ══════════════════════════════════════════ */}
      <section className="space-y-6">
        <ScrollReveal>
          <h2 className="font-display text-2xl md:text-3xl text-foreground font-medium">
            Strict Safety Directives: Do Not Send Anything
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.05}>
          <p className="font-mono text-sm text-foreground/70 mb-4">
            Under no circumstances should you ever submit or transmit any of the
            following items to anyone claiming to represent this project or any
            related group:
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <ul className="space-y-3 font-mono text-sm text-foreground/85 list-disc list-inside bg-foreground/[0.03] border border-foreground/15 p-6 rounded-none">
            <li className="leading-relaxed">
              <strong className="text-foreground">Financial Assets:</strong> Do
              not send money, wire transfers, credit card details, or
              cryptocurrency (Bitcoin, Ethereum, etc.).
            </li>
            <li className="leading-relaxed">
              <strong className="text-foreground">
                Personal Identification:
              </strong>{" "}
              Do not share Social Security Numbers, passport scans, national ID
              cards, or birth certificates.
            </li>
            <li className="leading-relaxed">
              <strong className="text-foreground">Security Credentials:</strong>{" "}
              Do not disclose passwords, private keys, seed phrases, or
              two-factor authentication tokens.
            </li>
            <li className="leading-relaxed">
              <strong className="text-foreground">Physical Addresses:</strong>{" "}
              Do not provide home addresses, phone numbers, or private location
              data.
            </li>
            <li className="leading-relaxed">
              <strong className="text-foreground">Illegal Commitments:</strong>{" "}
              Do not engage in or promise unlawful behavior, self-harm, or
              damage to property.
            </li>
          </ul>
        </ScrollReveal>
      </section>

      <Divider />

      {/* ══════════════════════════════════════════
          OFFICIAL VERIFICATION STATEMENT
      ══════════════════════════════════════════ */}
      <section className="space-y-4">
        <ScrollReveal>
          <h2 className="font-display text-2xl md:text-3xl text-foreground font-medium mb-4">
            Verification Integrity
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.05}>
          <p className="font-mono text-sm text-foreground/80 leading-relaxed">
            This web application serves as a complete demonstration of Next.js
            14, Tailwind CSS, TypeScript, and modern UI component architecture.
            All components and styling tokens are open for code inspection.
          </p>
        </ScrollReveal>
      </section>

      {/* ══════════════════════════════════════════
          FOOTER / BACK NAVIGATION
      ══════════════════════════════════════════ */}
      <section className="pt-16 pb-12 text-center border-t border-foreground/15 mt-16">
        <ScrollReveal>
          <div className="flex justify-center mb-6">
            <EyeGlyph size={48} className="text-foreground/40" />
          </div>
        </ScrollReveal>
        <ScrollReveal delay={0.05}>
          <p className="font-mono text-xs text-foreground/50 tracking-wider mb-8">
            Verified Educational Concept • End of Directives
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/"
              className="font-mono text-xs tracking-[0.2em] uppercase px-8 py-3 border border-accent text-accent hover:bg-accent hover:text-foreground transition-all duration-300"
            >
              Return to Home
            </Link>
            <Link
              href="/archive"
              className="font-mono text-xs tracking-[0.2em] uppercase px-8 py-3 border border-foreground/20 text-foreground/60 hover:border-foreground/50 hover:text-foreground transition-all duration-300"
            >
              View The Archive
            </Link>
          </div>
        </ScrollReveal>
      </section>
    </article>
  );
}
