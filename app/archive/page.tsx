import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import RedactedText from "@/components/RedactedText";
import EyeGlyph from "@/components/EyeGlyph";

export const metadata: Metadata = {
  title: "The Archive",
  description:
    "Classified case-files, transcripts, and records preserved by the Illuminati Foundation.",
};

type StatusType =
  | "DECLASSIFIED"
  | "RESTRICTED"
  | "CLASSIFIED"
  | "UNKNOWN"
  | "UNVERIFIED"
  | "DELETED";

interface ArchiveFile {
  id: string;
  code: string;
  title: string;
  date: string;
  clearance: string;
  status: StatusType;
  image: string;
  summary: string;
  lines: Array<{ text: string; redacted?: string }>;
}

const STATUS_STYLES: Record<StatusType, string> = {
  DECLASSIFIED: "border-emerald-700/60 text-emerald-400 bg-emerald-950/20",
  RESTRICTED: "border-amber-600/60 text-amber-400 bg-amber-950/20",
  CLASSIFIED: "border-accent text-accent bg-accent/10",
  UNKNOWN: "border-purple-600/60 text-purple-400 bg-purple-950/20",
  UNVERIFIED: "border-yellow-600/60 text-yellow-500 bg-yellow-950/20",
  DELETED: "border-zinc-700 text-zinc-500 bg-zinc-900/40 line-through",
};

const ARCHIVE_FILES: ArchiveFile[] = [
  {
    id: "file-01",
    code: "DOC-1776-0501",
    title: "Initial Assembly & Founding Oath",
    date: "1776-05-01",
    clearance: "LEVEL 01",
    status: "DECLASSIFIED",
    image: "/images/fghjkjhgf.jpg",
    summary:
      "Original transcript of the seven founders assembled in Ingolstadt under candlelight.",
    lines: [
      { text: "Seven signatures were affixed to the parchment at midnight." },
      {
        text: "The primary objective agreed upon: ",
        redacted: "Absolute historical preservation without state oversight.",
      },
      {
        text: "No member shall reveal the location of the secondary vault located in ",
        redacted: "the Bavarian Alps",
      },
      {
        text: "The oath remains binding across bloodlines until the consensus is fulfilled.",
      },
    ],
  },
  {
    id: "file-02",
    code: "DOC-1848-0224",
    title: "The Continental Shift Protocol",
    date: "1848-02-24",
    clearance: "LEVEL 02",
    status: "RESTRICTED",
    image: "/images/ab67616d0000b27343fbdcf6702b5f1354c4db43.jpg",
    summary:
      "Directives issued during the European revolutions of 1848 to secure archival vaults.",
    lines: [
      {
        text: "As monarchies fragment, observers must secure all royal registries.",
      },
      {
        text: "Special attention paid to the correspondence of ",
        redacted: "House of Rothschild and Metternich",
      },
      {
        text: "Assets moved under cover of night to the sub-level below ",
        redacted: "Zürich Central Station",
      },
      {
        text: "Do not intervene in political restructuring; our task is purely memory.",
      },
    ],
  },
  {
    id: "file-03",
    code: "DOC-1913-1223",
    title: "Currency & Reserve Audit",
    date: "1913-12-23",
    clearance: "LEVEL 04",
    status: "CLASSIFIED",
    image: "/images/sfle218wmgyc1.jpeg",
    summary:
      "Observation ledger detailing the establishment of centralized monetary ledgers.",
    lines: [
      { text: "The legislative vote was secured at 23:45 EST." },
      {
        text: "Initial reserve allocation established under code name ",
        redacted: "PROJECT JEKLE",
      },
      {
        text: "The gold reserves in Vault 4 were swapped for ",
        redacted: "tungsten-alloy replicas",
      },
      { text: "Access limited strictly to Arbiter rank and above." },
    ],
  },
  {
    id: "file-04",
    code: "DOC-1969-0720",
    title: "Lunar Signal & Deep Telemetry",
    date: "1969-07-20",
    clearance: "LEVEL 03",
    status: "UNKNOWN",
    image: "/images/1728577796685.jpg",
    summary:
      "Unexplained radio frequency anomalies intercepted during the Tranquility Base broadcast.",
    lines: [
      {
        text: "Audio feed contained a 4.2-second carrier gap before public transmission.",
      },
      {
        text: "Intercepted phrase during gap: ",
        redacted: "The monolith on the far side is responsive.",
      },
      {
        text: "Telemetry logs submitted by Observer 09 were ",
        redacted: "purged from NASA archives",
      },
      { text: "Origin of secondary signal remains unidentified." },
    ],
  },
  {
    id: "file-05",
    code: "DOC-1999-1231",
    title: "Y2K Digital Vault Integrity Check",
    date: "1999-12-31",
    clearance: "LEVEL 02",
    status: "UNVERIFIED",
    image: "/images/jhgfd.jpg",
    summary:
      "Emergency protocol executed at midnight millennia transition to prevent data loss.",
    lines: [
      { text: "All digital records mirrored to analog microfilm in Bunker 7." },
      {
        text: "Unexpected network ping received at 00:00:01 from ",
        redacted: "an unregistered subnet in Antarctica",
      },
      {
        text: "Payload contained 1024 encrypted keys matching ",
        redacted: "the Four Symbols cipher",
      },
      { text: "Verification pending confirmation by the Inner Circle." },
    ],
  },
  {
    id: "file-06",
    code: "DOC-2026-0807",
    title: "Consensus Terminal Breach Attempt",
    date: "2026-08-07",
    clearance: "LEVEL 05",
    status: "DELETED",
    image: "/images/dfghgfd.jpg",
    summary:
      "Incident report regarding unauthorized access attempt to the core ledger.",
    lines: [
      {
        text: "An unauthorized query was detected from node IP ",
        redacted: "192.168.1.1",
      },
      {
        text: "The query attempted to retrieve the identity of ",
        redacted: "Member XII of the Inner Circle",
      },
      {
        text: "Countermeasures deployed immediately: ",
        redacted: "Memory wipe initialized.",
      },
      { text: "This file has been marked for permanent deletion." },
    ],
  },
];

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

export default function ArchivePage() {
  return (
    <article className="max-w-4xl mx-auto px-6">
      {/* ══════════════════════════════════════════
          PAGE HEADER
      ══════════════════════════════════════════ */}
      <header className="pt-20 pb-16 border-b border-foreground/10 mb-16">
        <ScrollReveal>
          <PageLabel>05 — The Archive</PageLabel>
        </ScrollReveal>
        <ScrollReveal delay={0.05}>
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl text-foreground leading-[0.95] mb-8">
            The Vault of
            <br />
            <em className="text-accent">Preserved Records.</em>
          </h1>
        </ScrollReveal>
        <ScrollReveal delay={0.12}>
          <p className="font-mono text-xs text-foreground/35 tracking-widest uppercase">
            Classified case-file index • Click or hover redacted text to decrypt
          </p>
        </ScrollReveal>
      </header>

      {/* ══════════════════════════════════════════
          FILE CARDS INDEX
      ══════════════════════════════════════════ */}
      <section className="space-y-12">
        {ARCHIVE_FILES.map((file, idx) => (
          <ScrollReveal key={file.id} delay={idx * 0.08}>
            <div className="border border-foreground/15 bg-foreground/[0.015] hover:border-foreground/30 transition-all duration-300 p-6 md:p-8 rounded-none relative">
              {/* Card top bar */}
              <div className="flex flex-wrap items-center justify-between gap-4 pb-4 mb-6 border-b border-foreground/10">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-accent tracking-widest">
                    {file.code}
                  </span>
                  <span className="text-foreground/20">•</span>
                  <span className="font-mono text-xs text-foreground/40">
                    {file.date}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="font-mono text-[0.65rem] tracking-wider text-foreground/40">
                    {file.clearance}
                  </span>
                  <span
                    className={`font-mono text-[0.65rem] font-semibold tracking-widest px-2.5 py-0.5 border ${
                      STATUS_STYLES[file.status]
                    }`}
                  >
                    {file.status}
                  </span>
                </div>
              </div>

              {/* Title, image & summary */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
                <div className="md:col-span-3">
                  <h2 className="font-display text-2xl md:text-3xl text-foreground mb-3">
                    {file.title}
                  </h2>
                  <p className="font-mono text-xs text-foreground/50 italic leading-relaxed">
                    {file.summary}
                  </p>
                </div>
                <div className="relative w-full h-32 md:h-auto border border-foreground/20 overflow-hidden shadow-inner">
                  <Image
                    src={file.image}
                    alt={file.title}
                    fill
                    className="object-cover filter grayscale contrast-125 hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/20" />
                </div>
              </div>

              {/* Transcript lines with redacted text */}
              <div className="space-y-2 pt-4 border-t border-foreground/5 font-mono text-xs leading-relaxed text-foreground/75">
                {file.lines.map((line, i) => (
                  <p key={i} className="flex flex-wrap items-baseline gap-1">
                    <span className="text-foreground/30 select-none mr-1">
                      [{String(i + 1).padStart(2, "0")}]
                    </span>
                    <span>{line.text}</span>
                    {line.redacted && (
                      <RedactedText>{line.redacted}</RedactedText>
                    )}
                  </p>
                ))}
              </div>
            </div>
          </ScrollReveal>
        ))}
      </section>

      <Divider />

      {/* ══════════════════════════════════════════
          FOOTER / CLOSING
      ══════════════════════════════════════════ */}
      <section className="text-center py-8 pb-20">
        <ScrollReveal>
          <div className="flex justify-center mb-8">
            <EyeGlyph animated size={80} className="text-accent/70" />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.05}>
          <p className="font-mono text-xs text-foreground/50 tracking-wider mb-2">
            Additional case files remain sealed in Vault 07.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <p className="font-mono text-xs text-foreground/30 tracking-wider mb-10">
            Clearance expansion pending verification.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/verified"
              className="font-mono text-[0.7rem] tracking-[0.25em] uppercase px-8 py-3 border border-accent text-accent hover:bg-accent hover:text-foreground transition-all duration-300"
            >
              Verify Clearance →
            </Link>
            <Link
              href="/"
              className="font-mono text-[0.7rem] tracking-[0.25em] uppercase px-8 py-3 border border-foreground/20 text-foreground/50 hover:border-foreground/50 hover:text-foreground/80 transition-all duration-300"
            >
              Return Home →
            </Link>
          </div>
        </ScrollReveal>
      </section>
    </article>
  );
}
