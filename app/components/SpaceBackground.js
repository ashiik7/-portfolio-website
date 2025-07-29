"use client";
import { useEffect, useRef } from "react";

export default function SpaceBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let width, height;
    let stars = [];
    const trails = [];
    let rotationAngle = 0;

    const resize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // Create stars
    for (let i = 0; i < 300; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 1.5 + 0.5,
        alpha: Math.random(),
        twinkle: Math.random() * 0.03 + 0.01,
      });
    }

    // Planets (orbit around center of screen)
    const planets = [
      { orbitRadius: 120, angle: 0, speed: 0.018, r: 8, color: "#C0C0C0", tilt: 0.2 },
      { orbitRadius: 170, angle: 0, speed: 0.014, r: 12, color: "#DAA520", tilt: -0.1 },
      { orbitRadius: 230, angle: 0, speed: 0.012, r: 14, color: "#1E90FF", tilt: 0.3 },
      { orbitRadius: 290, angle: 0, speed: 0.01, r: 10, color: "#FF4500", tilt: -0.25 },
      { orbitRadius: 370, angle: 0, speed: 0.008, r: 30, color: "#FFA500", tilt: 0.15 },
      { orbitRadius: 470, angle: 0, speed: 0.006, r: 25, color: "#F5DEB3", tilt: -0.2 },
      { orbitRadius: 560, angle: 0, speed: 0.004, r: 18, color: "#40E0D0", tilt: 0.1 },
      { orbitRadius: 650, angle: 0, speed: 0.003, r: 16, color: "#4169E1", tilt: -0.15 },
    ];

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Gradient space background
      const gradient = ctx.createRadialGradient(width / 2, height / 2, 0, width / 2, height / 2, width);
      gradient.addColorStop(0, "#0a0a1a");
      gradient.addColorStop(1, "#000000");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      // Stars with twinkle effect
      stars.forEach((star) => {
        star.alpha += star.twinkle;
        if (star.alpha <= 0 || star.alpha >= 1) star.twinkle *= -1;

        ctx.globalAlpha = star.alpha;
        ctx.fillStyle = "#ffffff";
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fill();
      });
      ctx.globalAlpha = 1;

      rotationAngle += 0.0005;

      // Draw planets orbiting center (no sun/spaceship)
      planets.forEach((planet) => {
        planet.angle += planet.speed;
        const totalAngle = planet.angle + rotationAngle;
        const tiltFactor = Math.cos(totalAngle * 2) * planet.tilt;
        const orbitY = planet.orbitRadius * (1 + tiltFactor * 0.5);

        const centerX = width / 2;
        const centerY = height / 2;

        const px = centerX + Math.cos(totalAngle) * planet.orbitRadius;
        const py = centerY + Math.sin(totalAngle) * orbitY;

        // Add glowing trail
        trails.push({ x: px, y: py, color: planet.color, alpha: 1, r: planet.r / 2 });

        // Draw orbit path
        ctx.strokeStyle = "rgba(255,255,255,0.07)";
        ctx.beginPath();
        ctx.ellipse(centerX, centerY, planet.orbitRadius, orbitY, 0, 0, Math.PI * 2);
        ctx.stroke();

        // Draw planet with glow
        ctx.save();
        ctx.shadowBlur = 30;
        ctx.shadowColor = planet.color;
        ctx.fillStyle = planet.color;
        ctx.beginPath();
        ctx.arc(px, py, planet.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });

      // Draw trails (fade over time)
      for (let i = trails.length - 1; i >= 0; i--) {
        const t = trails[i];
        ctx.globalAlpha = t.alpha;
        ctx.fillStyle = t.color;
        ctx.beginPath();
        ctx.arc(t.x, t.y, t.r, 0, Math.PI * 2);
        ctx.fill();

        t.alpha -= 0.02;
        t.r *= 0.97;
        if (t.alpha <= 0.05) trails.splice(i, 1);
      }
      ctx.globalAlpha = 1;

      requestAnimationFrame(draw);
    };

    draw();
    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10"
    ></canvas>
  );
}






