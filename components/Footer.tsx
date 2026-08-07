import EyeGlyph from "./EyeGlyph";

export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 z-40 flex items-center justify-center gap-3 px-6 py-2 border-t border-foreground/10 bg-background/70 backdrop-blur-sm">
      <EyeGlyph size={20} className="text-foreground/30 shrink-0" />
      <p className="font-mono text-[0.6rem] tracking-widest uppercase text-foreground/30">
        Fictional horror concept — educational project.
      </p>
    </footer>
  );
}
