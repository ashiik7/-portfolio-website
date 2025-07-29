"use client";
import SpaceBackground from "./components/SpaceBackground";
import TopLeftBranding from "./components/TopLeftBranding";
import Skillset from "./components/Skillset";
import Contact from "./components/Contact";
import { useState, useEffect } from "react";

export default function HomePage() {
  const [time, setTime] = useState("");
  const location = "Kerala, India"; // Update location if needed

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
      );
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <main className="relative w-full min-h-screen text-white overflow-hidden">
      {/* FIRST PAGE (Intro Section) */}
      <div className="relative h-screen">
        <SpaceBackground />
        <TopLeftBranding />

        {/* Top Right Location & Time */}
        <div className="absolute top-6 right-8 text-right text-lg font-light tracking-wide text-gray-300">
          <div className="text-cyan-300 drop-shadow-[0_0_10px_rgba(0,255,255,0.6)]">
            {location}
          </div>
          <div className="text-yellow-200 drop-shadow-[0_0_8px_rgba(255,255,0,0.5)]">
            {time}
          </div>
        </div>

        {/* Center Intro Text */}
        <div className="flex flex-col items-center justify-center text-center h-full px-6">
          <h1 className="text-5xl md:text-7xl font-bold text-white drop-shadow-[0_0_25px_rgba(255,255,255,0.7)] mb-6">
            Hi, I'm Ashik Kishor
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl">
            A passionate{" "}
            <span className="text-cyan-300">Full Stack Developer</span> building
            modern, animated, and interactive web experiences.
          </p>
        </div>
      </div>

      {/* SECOND PAGE (Skillset Section) */}
      <Skillset />

      {/* THIRD PAGE (Contact Section) */}
      <Contact />
    </main>
  );
}















