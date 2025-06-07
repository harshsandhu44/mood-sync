"use client";

import { Button } from "./ui/button";

interface PlaybackButtonProps {
  isPlaying: boolean;
  onToggle: () => void;
}

export const PlaybackButton = ({
  isPlaying,
  onToggle,
}: PlaybackButtonProps) => {
  return (
    <Button
      onClick={onToggle}
      variant={isPlaying ? "destructive" : "default"}
      className="w-full"
    >
      {isPlaying ? "Pause Sound" : "Play Sound"}
    </Button>
  );
};
