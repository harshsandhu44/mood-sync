"use client";

import { InfoIcon } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";
import { useAudioEngine } from "@/hooks";

export const HeadphoneNotice = () => {
  const { soundType } = useAudioEngine();

  if (soundType !== "binaural") return " ";

  return (
    <Alert>
      <InfoIcon className="h-4 w-4" />
      <AlertTitle>Headphone Notice</AlertTitle>
      <AlertDescription>
        For Binaural Beats, stereo headphones are required for the effect to
        work.
      </AlertDescription>
    </Alert>
  );
};
