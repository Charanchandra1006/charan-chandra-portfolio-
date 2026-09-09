"use client";

import { useEffect, useRef, useState } from "react";
import { createRenderer } from "./renderer";

/** Standalone host for the optimized black-hole renderer formerly used by the homepage. */
export function BlackHole() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    let cancelled = false;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const renderer = createRenderer({ canvas });
    renderer.ready
      .then(() => {
        if (!cancelled) setIsReady(true);
      })
      .catch((err) => {
        console.error("Failed to initialize WebGPU Black Hole:", err);
      });
    return () => {
      cancelled = true;
      renderer.dispose();
    };
  }, []);

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden bg-black">
      <canvas
        ref={canvasRef}
        className={`block h-full w-full touch-none transition-opacity duration-500 ${
          isReady ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
}

export default BlackHole;
