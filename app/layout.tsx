import type { Metadata } from "next";
import { Cormorant_Garamond, IBM_Plex_Mono } from "next/font/google";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import "./globals.css";

// Gothic/serif display font for headings
const displayFont = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

// Monospace font for "classified file" body text
const monoFont = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: " IllUMINATI They Were Always Watching",
    template: "%s | IllUMINATI",
  },
  description:
    "A foundation devoted to sight. To memory. To those who refused to look away. Classified materials — authorised access only.",
  keywords: ["illum", "the foundation", "the archive", "classified"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${displayFont.variable} ${monoFont.variable}`}>
      <body className="antialiased bg-background text-foreground min-h-screen">
        <Nav />
        {/* pt-14 offsets fixed nav; pb-8 offsets fixed footer */}
        <div className="pt-14 pb-8">{children}</div>
        <WhatsAppButton />
        <Footer />
      </body>
    </html>
  );
}
