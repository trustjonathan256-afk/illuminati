"use client";

import { useState } from "react";

interface WhatsAppButtonProps {
  /** WhatsApp phone number with country code, e.g. "15551234567" */
  phoneNumber?: string;
  /** Optional pre-filled text message */
  message?: string;
  /** Custom label */
  label?: string;
}

export default function WhatsAppButton({
  phoneNumber = "15551234567",
  message = "I wish to inquire about the Foundation.",
  label = "WhatsApp Transmission",
}: WhatsAppButtonProps) {
  const [hovered, setHovered] = useState(false);

  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="fixed bottom-12 right-6 z-50 flex items-center gap-2.5 px-4 py-2.5 bg-background/90 border border-emerald-500/40 hover:border-emerald-400 text-emerald-400 backdrop-blur-md shadow-[0_4px_20px_rgba(16,185,129,0.15)] transition-all duration-300 rounded-none group"
      aria-label="Contact via WhatsApp"
    >
      {/* WhatsApp SVG Icon */}
      <svg
        className="w-5 h-5 fill-current text-emerald-400 group-hover:scale-110 transition-transform duration-300"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.195 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-1.14 4.162 4.256-1.134zm7.986-6.143c-.287-.144-1.701-.84-1.964-.936-.263-.096-.454-.144-.646.144-.192.288-.742.936-.91 1.128-.168.192-.335.216-.622.072-.287-.144-1.214-.447-2.312-1.427-.855-.763-1.432-1.704-1.599-1.992-.168-.288-.018-.444.126-.587.13-.13.287-.336.431-.504.144-.168.192-.288.288-.48.096-.192.048-.36-.024-.504-.072-.144-.646-1.56-.884-2.136-.232-.56-.468-.483-.646-.492l-.552-.008c-.192 0-.504.072-.767.36-.264.288-1.007.984-1.007 2.4 0 1.416 1.031 2.784 1.175 2.976.144.192 2.03 3.1 4.919 4.347.687.297 1.224.474 1.642.607.69.22 1.318.189 1.815.115.554-.083 1.701-.696 1.941-1.368.24-.672.24-1.248.168-1.368-.072-.12-.264-.192-.551-.336z" />
      </svg>

      {/* Button Text */}
      <span className="font-mono text-xs tracking-widest uppercase font-semibold">
        {label}
      </span>

      {/* Live pulse dot */}
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
      </span>
    </a>
  );
}
