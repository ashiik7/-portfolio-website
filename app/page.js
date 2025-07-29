"use client";
import SpaceBackground from "./components/SpaceBackground";
import TopLeftBranding from "./components/TopLeftBranding";
import Skillset from "./components/Skillset";
import Contact from "./components/Contact";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function HomePage() {
  const [time, setTime] = useState("");
  const location = "Kerala, India";

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }));
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <main className="relative w-full min-h-screen text-white overflow-hidden">
      {/* FIRST PAGE (Intro Section) */}
      <div className="relative min-h-screen flex flex-col">
        <SpaceBackground />
        <TopLeftBranding />

        {/* Top Right Location & Time */}
        <div className="absolute top-4 right-4 sm:top-6 sm:right-8 text-right text-sm sm:text-lg font-light tracking-wide text-gray-300">
          <div className="text-cyan-300 drop-shadow-[0_0_10px_rgba(0,255,255,0.6)]">{location}</div>
          <div className="text-yellow-200 drop-shadow-[0_0_8px_rgba(255,255,0,0.5)]">{time}</div>
        </div>

        {/* Center Intro Text */}
        <div className="flex flex-col items-center justify-center text-center flex-1 px-4 sm:px-6">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-3xl sm:text-5xl md:text-7xl font-bold text-white drop-shadow-[0_0_25px_rgba(255,255,255,0.7)] mb-4 sm:mb-6 leading-tight"
          >
            Hi, I&apos;m Ashik Kishor
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-base sm:text-xl md:text-2xl text-gray-300 max-w-md sm:max-w-2xl px-2"
          >
            A passionate <span className="text-cyan-300">Full Stack Developer</span> crafting
            modern, animated, and interactive web experiences.
          </motion.p>
        </div>
      </div>

      {/* SECOND PAGE (Skillset Section) */}
      <Skillset />

      {/* THIRD PAGE (Contact Section) */}
      <Contact />
    </main>
  );
}















