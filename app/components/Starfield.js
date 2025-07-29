"use client";
import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";

export default function Starfield() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas>
        <Stars
          radius={50}
          depth={80}
          count={5000}
          factor={4}
          saturation={0}
          fade
          speed={1}
        />
      </Canvas>
    </div>
  );
}

