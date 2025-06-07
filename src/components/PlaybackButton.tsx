"use client";

import { useAudioEngine } from "@/hooks";
import { Button } from "./ui/button";

export const PlaybackButton = () => {
  const { isPlaying, togglePlayback } = useAudioEngine();

  return (
    <Button
      onClick={togglePlayback}
      variant={isPlaying ? "destructive" : "default"}
      className="w-full"
    >
      {isPlaying ? "Pause Sound" : "Play Sound"}
    </Button>
  );
};
