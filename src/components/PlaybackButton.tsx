"use client";

import { PauseIcon, PlayIcon } from "lucide-react";
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
      {isPlaying ? (
        <>
          <PauseIcon className="size-4" />
          <span>Pause</span>
        </>
      ) : (
        <>
          <PlayIcon className="size-4" />
          <span>Play</span>
        </>
      )}
    </Button>
  );
};
