"use client";

import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import EyeGlyph from "@/components/EyeGlyph";

export default function ContactSection() {
  const handleScrollToForm = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    document
      .getElementById("contact-form")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="contact" className="py-24 border-t border-foreground/10">
      <div className="max-w-2xl mx-auto px-6">
        {/* ══════════════════════════════════════════
            YOU FOUND THE DOOR CTA BLOCK
        ══════════════════════════════════════════ */}
        <ScrollReveal>
          <div className="text-center mb-20 p-8 sm:p-12 border border-accent/30 bg-accent/[0.03]">
            <p className="font-mono text-[0.65rem] tracking-[0.3em] uppercase text-accent mb-3 font-semibold">
              FINAL THRESHOLD
            </p>
            <h2 className="font-display text-4xl sm:text-5xl text-foreground mb-6">
              You Found The Door.
            </h2>
            <p className="font-mono text-xs text-foreground/60 leading-relaxed mb-8 max-w-md mx-auto">
              If you have read this far, your curiosity was not accidental. The
              path to alignment and sovereign prosperity begins with a single
              transmission.
            </p>
            <button
              onClick={handleScrollToForm}
              className="font-mono text-xs tracking-[0.25em] uppercase px-8 py-4 border border-accent text-accent hover:bg-accent hover:text-foreground transition-all duration-300 cursor-pointer"
            >
              HOW TO CONTACT THE FOUNDATION
            </button>
          </div>
        </ScrollReveal>

        {/* ══════════════════════════════════════════
            HOW TO CONTACT THE FOUNDATION FORM
        ══════════════════════════════════════════ */}
        <div id="contact-form" className="scroll-mt-24">
          <ScrollReveal>
            <div className="text-center mb-10">
              <EyeGlyph size={44} className="text-accent mx-auto mb-4" />

              {/* Contact Portal Image Banner */}
              <div className="relative w-full h-48 sm:h-56 mb-8 border border-accent/30 overflow-hidden shadow-md">
                <Image
                  src="/images/images.jpg"
                  alt="Contact Portal Transmission"
                  fill
                  className="object-cover filter grayscale contrast-125 hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/30" />
              </div>

              <p className="font-mono text-[0.6rem] tracking-[0.35em] text-foreground/35 uppercase mb-2">
                CLASSIFIED TRANSMISSION PORTAL
              </p>
              <h3 className="font-display text-3xl sm:text-4xl text-foreground mb-4">
                How to Contact the Foundation
              </h3>
              <p className="font-mono text-xs text-foreground/50 leading-relaxed max-w-lg mx-auto">
                Transmissions are monitored by Observers of the Third Rank.
                Provide valid routing metadata. Response is delivered at the
                discretion of the Foundation.
              </p>
            </div>
          </ScrollReveal>

          {/* Form */}
          <ScrollReveal delay={0.1}>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="space-y-6 bg-foreground/[0.02] border border-foreground/15 p-6 sm:p-10"
            >
              <div>
                <label
                  htmlFor="contact-name"
                  className="block font-mono text-[0.65rem] tracking-widest uppercase text-foreground/60 mb-2"
                >
                  Name / Identifier
                </label>
                <input
                  type="text"
                  id="contact-name"
                  placeholder="Enter your name or cipher designation"
                  className="w-full bg-background border border-foreground/20 text-foreground text-sm font-mono px-4 py-3 focus:outline-none focus:border-accent transition-colors placeholder:text-foreground/20"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  className="block font-mono text-[0.65rem] tracking-widest uppercase text-foreground/60 mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="contact-email"
                  placeholder="name@domain.com"
                  className="w-full bg-background border border-foreground/20 text-foreground text-sm font-mono px-4 py-3 focus:outline-none focus:border-accent transition-colors placeholder:text-foreground/20"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="block font-mono text-[0.65rem] tracking-widest uppercase text-foreground/60 mb-2"
                >
                  Transmission Message
                </label>
                <textarea
                  id="contact-message"
                  rows={4}
                  placeholder="State your business or query with precision..."
                  className="w-full bg-background border border-foreground/20 text-foreground text-sm font-mono px-4 py-3 focus:outline-none focus:border-accent transition-colors placeholder:text-foreground/20 resize-none"
                />
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full font-mono text-xs tracking-[0.3em] uppercase py-4 bg-accent/90 text-foreground hover:bg-accent transition-colors duration-300 font-semibold cursor-pointer border border-accent"
                >
                  TRANSMIT MESSAGE
                </button>
              </div>

              {/* Alternative Direct WhatsApp Channel */}
              <div className="pt-2 text-center">
                <a
                  href="https://wa.me/15551234567?text=I%20wish%20to%20inquire%20about%20the%20Foundation."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-mono text-[0.7rem] tracking-widest text-emerald-400 hover:text-emerald-300 transition-colors uppercase py-2"
                >
                  <svg
                    className="w-4 h-4 fill-current"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.195 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-1.14 4.162 4.256-1.134zm7.986-6.143c-.287-.144-1.701-.84-1.964-.936-.263-.096-.454-.144-.646.144-.192.288-.742.936-.91 1.128-.168.192-.335.216-.622.072-.287-.144-1.214-.447-2.312-1.427-.855-.763-1.432-1.704-1.599-1.992-.168-.288-.018-.444.126-.587.13-.13.287-.336.431-.504.144-.168.192-.288.288-.48.096-.192.048-.36-.024-.504-.072-.144-.646-1.56-.884-2.136-.232-.56-.468-.483-.646-.492l-.552-.008c-.192 0-.504.072-.767.36-.264.288-1.007.984-1.007 2.4 0 1.416 1.031 2.784 1.175 2.976.144.192 2.03 3.1 4.919 4.347.687.297 1.224.474 1.642.607.69.22 1.318.189 1.815.115.554-.083 1.701-.696 1.941-1.368.24-.672.24-1.248.168-1.368-.072-.12-.264-.192-.551-.336z" />
                  </svg>
                  <span>Or Direct WhatsApp Transmission →</span>
                </a>
              </div>

              {/* Status line below form */}
              <div className="pt-4 border-t border-foreground/10 flex items-center justify-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-500/80 animate-pulse" />
                <span className="font-mono text-[0.65rem] tracking-[0.25em] text-foreground/40 uppercase">
                  WAITING FOR CONNECTION...
                </span>
              </div>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
