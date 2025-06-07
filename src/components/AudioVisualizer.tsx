"use client";

import { motion } from "motion/react";
import { useEffect, useState } from "react";

interface AudioVisualizerProps {
  isPlaying: boolean;
  soundType: "binaural" | "isochronic";
  beatFrequency: number;
}

export const AudioVisualizer = ({
  isPlaying,
  soundType,
  beatFrequency,
}: AudioVisualizerProps) => {
  const [bars, setBars] = useState<number[]>([]);

  // Generate random heights for bars to simulate audio activity
  useEffect(() => {
    if (!isPlaying) {
      setBars(Array(12).fill(0.1)); // Minimal height when not playing
      return;
    }

    const interval = setInterval(() => {
      const newBars = Array.from({ length: 12 }, () => {
        if (soundType === "isochronic") {
          // For isochronic, create a pulsing pattern based on beat frequency
          const pulseIntensity =
            Math.sin(Date.now() * (beatFrequency / 1000)) * 0.5 + 0.5;
          return Math.random() * 0.6 * pulseIntensity + 0.2;
        } else {
          // For binaural, create more steady but varied bars
          return Math.random() * 0.8 + 0.2;
        }
      });
      setBars(newBars);
    }, 100); // Update every 100ms

    return () => clearInterval(interval);
  }, [isPlaying, soundType, beatFrequency]);

  if (!isPlaying) {
    return (
      <div className="flex items-center justify-center h-16 space-x-1">
        <div className="text-sm text-muted-foreground">
          Press Play to start audio
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center h-16 space-x-1">
      {bars.map((height, index) => (
        <motion.div
          key={index}
          className={`w-2 rounded-full ${
            soundType === "binaural"
              ? "bg-gradient-to-t from-blue-500 to-purple-500"
              : "bg-gradient-to-t from-green-500 to-emerald-500"
          }`}
          animate={{
            height: `${height * 100}%`,
            opacity: isPlaying ? 1 : 0.3,
          }}
          transition={{
            duration: 0.1,
            ease: "easeOut",
          }}
          style={{
            minHeight: "8px",
          }}
        />
      ))}
    </div>
  );
};
