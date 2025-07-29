"use client";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    };
    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 py-4 bg-transparent text-white">
      {/* Left: Name */}
      <h1 className="text-xl font-extrabold text-purple-400 drop-shadow-lg">
        Ashik Kishor
      </h1>

      {/* Right: Location + Time */}
      <div className="text-sm text-gray-300">
        📍 Kochi, India | {time}
      </div>
    </header>
  );
}

