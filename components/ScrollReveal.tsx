"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  /** Stagger offset in seconds (default 0) */
  delay?: number;
  /** Translate distance in px (default 18) */
  distance?: number;
}

export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
  distance = 18,
}: ScrollRevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: distance }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -40px 0px" }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.22, 1, 0.36, 1], // custom ease-out quart
      }}
    >
      {children}
    </motion.div>
  );
}
