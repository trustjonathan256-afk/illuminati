import Link from "next/link";
import Image from "next/image";
import EyeGlyph from "@/components/EyeGlyph";
import ScrollReveal from "@/components/ScrollReveal";
import ContactSection from "@/components/ContactSection";

/* ─── Reusable section label ──────────────────────────────── */
function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-mono text-[0.6rem] tracking-[0.35em] text-foreground/35 uppercase mb-6">
      {children}
    </p>
  );
}

/* ─── Thin vertical divider ──────────────────────────────── */
function Divider() {
  return <div className="w-px h-20 bg-accent/30 mx-auto my-24 md:my-32" />;
}

export default function HomePage() {
  return (
    <>
      {/* ══════════════════════════════════════════
          HERO
      ══════════════════════════════════════════ */}
      <section className="relative flex flex-col items-center justify-center min-h-screen px-6 text-center overflow-hidden">
        {/* Ambient background image — visible but dim */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
        >
          <Image
            src="/images/Kaye-Illuminati1.webp"
            alt="Illuminati background atmosphere"
            fill
            className="object-cover object-center filter grayscale contrast-125 opacity-30"
            priority
          />
          {/* Gradient veil: edges fade to bg, centre is cleaner */}
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/40 to-background/80" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-background/60" />
        </div>

        {/* Animated eye */}
        <div className="mb-10 opacity-90 relative z-10">
          <EyeGlyph animated size={180} className="text-accent" />
        </div>

        {/* Wealth & Prosperity Teaser Badge */}
        <ScrollReveal delay={0.05} className="relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 border border-accent/40 bg-accent/10 rounded-none">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            <span className="font-mono text-[0.65rem] tracking-[0.3em] uppercase text-accent font-semibold">
              UNLIMITED PROSPERITY • GLOBAL INFLUENCE • SOVEREIGN WEALTH
            </span>
          </div>
        </ScrollReveal>

        {/* Main heading */}
        <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-foreground leading-[0.95] mb-8 max-w-4xl relative z-10">
          Wealth &amp; Power
          <br />
          <em className="text-accent not-italic">Belong To Those Who See.</em>
        </h1>

        {/* Taglines — enticing wealth & status hooks */}
        <div className="flex flex-col gap-1.5 mb-10 max-w-lg relative z-10">
          <ScrollReveal delay={0.1}>
            <p className="font-mono text-[0.8rem] tracking-widest text-foreground/80">
              Beyond the veil of ordinary life lies absolute financial freedom.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="font-mono text-[0.75rem] tracking-widest text-foreground/50">
              The Illuminati Foundation guides those destined for immense fortune.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <p className="font-mono text-[0.75rem] tracking-widest text-accent/80 font-semibold">
              Step into abundance. Command your destiny.
            </p>
          </ScrollReveal>
        </div>

        {/* Highlight Stats Ticker */}
        <ScrollReveal delay={0.35} className="relative z-10">
          <div className="grid grid-cols-3 gap-6 sm:gap-12 py-4 px-6 border-y border-foreground/10 mb-12 max-w-xl">
            <div>
              <p className="font-display text-2xl sm:text-3xl text-foreground">$∞</p>
              <p className="font-mono text-[0.55rem] tracking-widest uppercase text-foreground/40">Sovereign Wealth</p>
            </div>
            <div>
              <p className="font-display text-2xl sm:text-3xl text-accent">100%</p>
              <p className="font-mono text-[0.55rem] tracking-widest uppercase text-foreground/40">Financial Freedom</p>
            </div>
            <div>
              <p className="font-display text-2xl sm:text-3xl text-foreground">300+</p>
              <p className="font-mono text-[0.55rem] tracking-widest uppercase text-foreground/40">Years of Dominance</p>
            </div>
          </div>
        </ScrollReveal>

        {/* CTAs */}
        <ScrollReveal delay={0.45} className="relative z-10">
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Link
              href="/foundation"
              className="font-mono text-[0.7rem] tracking-[0.25em] uppercase px-8 py-3 border border-accent text-accent hover:bg-accent hover:text-foreground transition-all duration-300"
            >
              Enter the Foundation
            </Link>
            <Link
              href="/archive"
              className="font-mono text-[0.7rem] tracking-[0.25em] uppercase px-8 py-3 border border-foreground/20 text-foreground/50 hover:border-foreground/50 hover:text-foreground/80 transition-all duration-300"
            >
              Discover the Archive
            </Link>
          </div>
        </ScrollReveal>

        {/* Scroll cue */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30 z-10">
          <div className="w-px h-10 bg-foreground animate-[scrollCue_2s_ease-in-out_infinite]" />
        </div>
      </section>

      {/* ══════════════════════════════════════════
          THE FOUNDATION
      ══════════════════════════════════════════ */}
      <Divider />

      <section className="max-w-2xl mx-auto px-6 py-8">
        <ScrollReveal>
          <SectionLabel>The Foundation</SectionLabel>
        </ScrollReveal>
        <ScrollReveal delay={0.05}>
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-8">
            Not a Conspiracy.
            <br />
            <em className="text-accent">A Custodian.</em>
          </h2>
        </ScrollReveal>

        {/* Atmospheric Cityscape Image Card */}
        <ScrollReveal delay={0.08}>
          <div className="relative w-full h-64 sm:h-72 mb-8 border border-foreground/20 overflow-hidden shadow-lg">
            <Image
              src="/images/cityspace--039-82-architects-the-illuminati-private-houses-archello.1609411522.8384.webp"
              alt="Illuminati architecture"
              fill
              className="object-cover filter grayscale contrast-125 hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/30" />
          </div>
        </ScrollReveal>

        {[
          "The Illuminati Foundation is not what you were told.",
          "It is not what they told you to fear.",
          "For three centuries, we have preserved what others sought to destroy.",
          "The maps they burned. The records they buried. The names they erased.",
          "We kept all of it.",
          "We do not seek power.",
          "We have always held it.",
        ].map((line, i) => (
          <ScrollReveal key={i} delay={i * 0.07} className="mb-3">
            <p className="font-mono text-sm text-foreground/65 leading-relaxed">
              {line}
            </p>
          </ScrollReveal>
        ))}
      </section>

      {/* ══════════════════════════════════════════
          THE EYE IS OPEN
      ══════════════════════════════════════════ */}
      <Divider />

      <section className="max-w-xl mx-auto px-6 py-8 text-center">
        <ScrollReveal>
          <div className="flex justify-center mb-6">
            <EyeGlyph animated size={120} className="text-accent" />
          </div>
        </ScrollReveal>

        {/* Eerie Image Banner */}
        <ScrollReveal delay={0.08}>
          <div className="relative w-full h-64 sm:h-80 mb-10 overflow-hidden border border-accent/40 shadow-[0_0_30px_rgba(138,31,31,0.25)]">
            <Image
              src="/images/eye.png"
              alt="The Eye of Providence carved in obsidian"
              fill
              className="object-cover object-center filter grayscale contrast-125 brightness-90 hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="font-display text-4xl md:text-5xl tracking-wider text-foreground mb-8">
            The Eye Is Open.
          </h2>
        </ScrollReveal>

        {[
          "It has never closed.",
          "Not once.",
          "Not for you.",
          "Not for anyone.",
          "It saw you find this page.",
          "It saw you before you found it.",
        ].map((line, i) => (
          <ScrollReveal key={i} delay={i * 0.08} className="mb-2">
            <p className="font-mono text-sm text-foreground/55 tracking-wider">
              {line}
            </p>
          </ScrollReveal>
        ))}
      </section>

      {/* ══════════════════════════════════════════
          WHO WE ARE
      ══════════════════════════════════════════ */}
      <Divider />

      <section className="max-w-2xl mx-auto px-6 py-8">
        <ScrollReveal>
          <SectionLabel>Inner Circle</SectionLabel>
        </ScrollReveal>
        <ScrollReveal delay={0.05}>
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-8">
            Who We Are.
          </h2>
        </ScrollReveal>

        {/* Inner Circle Gallery Image */}
        <ScrollReveal delay={0.08}>
          <div className="relative w-full h-64 sm:h-72 mb-8 border border-accent/30 overflow-hidden shadow-md">
            <Image
              src="/images/3.jpg"
              alt="Inner Circle Assembly"
              fill
              className="object-cover filter grayscale contrast-125 hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/30" />
          </div>
        </ScrollReveal>

        {[
          "We are observers.",
          "We are recorders.",
          "We are the memory of the world.",
          "Every significant event of the last three hundred years—",
          "We were there.",
          "Nothing is lost.",
          "Nothing is forgotten.",
          "If you are reading this, you were meant to find us.",
        ].map((line, i) => (
          <ScrollReveal key={i} delay={i * 0.06} className="mb-3">
            <p
              className={`font-mono text-sm leading-relaxed ${
                line.startsWith("Every") || line.startsWith("We were")
                  ? "text-foreground/40 pl-4 border-l border-accent/30"
                  : "text-foreground/65"
              }`}
            >
              {line}
            </p>
          </ScrollReveal>
        ))}
      </section>

      {/* ══════════════════════════════════════════
          THE FOUR SYMBOLS
      ══════════════════════════════════════════ */}
      <Divider />

      <section className="max-w-2xl mx-auto px-6 py-8">
        <ScrollReveal>
          <SectionLabel>The Four Symbols</SectionLabel>
        </ScrollReveal>
        <ScrollReveal delay={0.05}>
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-8">
            Four Pillars.
            <br />
            <em className="text-accent">Three Centuries.</em>
          </h2>
        </ScrollReveal>

        {/* Four Symbols Image Banner */}
        <ScrollReveal delay={0.08}>
          <div className="relative w-full h-64 sm:h-72 mb-8 border border-foreground/20 overflow-hidden shadow-md">
            <Image
              src="/images/51CVRSiZIAL._SL500_.jpg"
              alt="The Four Symbols of the Foundation"
              fill
              className="object-cover filter grayscale contrast-125 hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/30" />
          </div>
        </ScrollReveal>

        {[
          "Each symbol represents a pillar of the Foundation.",
          "Each pillar has stood for three hundred years.",
          "Those inside the Inner Circle know their names.",
          "Those outside are not yet ready.",
          "You will learn them.",
          "In time.",
        ].map((line, i) => (
          <ScrollReveal key={i} delay={i * 0.07} className="mb-3">
            <p className="font-mono text-sm text-foreground/65 leading-relaxed">
              {line}
            </p>
          </ScrollReveal>
        ))}
      </section>

      {/* ══════════════════════════════════════════
          THE PROMISE OF ABUNDANCE
      ══════════════════════════════════════════ */}
      <Divider />

      <section className="max-w-2xl mx-auto px-6 py-8">
        <ScrollReveal>
          <SectionLabel>The Promise</SectionLabel>
        </ScrollReveal>
        <ScrollReveal delay={0.05}>
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-8">
            Wealth &amp; Power
            <br />
            <em className="text-accent">Follow Sight.</em>
          </h2>
        </ScrollReveal>

        {/* Wealth Image Banner */}
        <ScrollReveal delay={0.08}>
          <div className="relative w-full h-64 sm:h-72 mb-8 border border-accent/40 shadow-[0_0_30px_rgba(138,31,31,0.25)] overflow-hidden">
            <Image
              src="/images/234.jpg"
              alt="Sovereign wealth and prosperity"
              fill
              className="object-cover filter grayscale contrast-125 hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/30" />
          </div>
        </ScrollReveal>

        {[
          "True wealth is not earned. It is commanded.",
          "Those who enter the Inner Circle do not seek fortune.",
          "Fortune naturally flows to where knowledge and order reside.",
          "From international banking to global trade, our shadow guides prosperity.",
          "When you are chosen, poverty becomes a memory of the uninitiated.",
          "Immense riches. Absolute protection. Sovereign standing.",
          "This is what awaits those who pass through the door.",
        ].map((line, i) => (
          <ScrollReveal key={i} delay={i * 0.07} className="mb-3">
            <p
              className={`font-mono text-sm leading-relaxed ${
                line.startsWith("Immense riches")
                  ? "text-accent font-semibold tracking-wider pl-4 border-l border-accent"
                  : "text-foreground/65"
              }`}
            >
              {line}
            </p>
          </ScrollReveal>
        ))}
      </section>

      {/* ══════════════════════════════════════════
          THE DOOR
      ══════════════════════════════════════════ */}
      <Divider />

      <section className="max-w-xl mx-auto px-6 py-8 text-center pb-20">
        <ScrollReveal>
          <SectionLabel>The Door</SectionLabel>
        </ScrollReveal>
        <ScrollReveal delay={0.05}>
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-10">
            You Have Seen Enough.
          </h2>
        </ScrollReveal>

        {[
          "You have seen enough to understand.",
          "You have not yet seen enough to enter.",
          "But the door is here.",
          "It has always been here.",
        ].map((line, i) => (
          <ScrollReveal key={i} delay={i * 0.08} className="mb-3">
            <p className="font-mono text-sm text-foreground/60 tracking-wider">
              {line}
            </p>
          </ScrollReveal>
        ))}

        <ScrollReveal delay={0.45}>
          <div className="mt-14">
            <Link
              href="/foundation"
              className="font-mono text-base tracking-[0.4em] uppercase text-accent border border-accent/50 px-10 py-4 hover:bg-accent hover:text-foreground hover:border-accent transition-all duration-400 inline-block"
            >
              [ Enter ]
            </Link>
          </div>
        </ScrollReveal>
      </section>

      {/* ══════════════════════════════════════════
          CONTACT SECTION (Door CTA + Form)
      ══════════════════════════════════════════ */}
      <ContactSection />
    </>
  );
}
