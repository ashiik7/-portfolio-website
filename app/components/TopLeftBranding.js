"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function TopLeftBranding() {
  const [fontIndex, setFontIndex] = useState(0);
  const fonts = [
    "font-extrabold tracking-widest",
    "italic font-light tracking-wide",
    "uppercase font-semibold",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setFontIndex((prev) => (prev + 1) % fonts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute top-6 left-8 select-none">
      {/* Animated Name (No AK Logo) */}
      <motion.div
        key={fontIndex}
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 10 }}
        transition={{ duration: 0.5 }}
        className={`text-2xl text-yellow-400 drop-shadow-[0_0_15px_rgba(255,215,0,0.8)] ${fonts[fontIndex]}`}
      >
        Ashik Kishor
      </motion.div>
    </div>
  );
}


