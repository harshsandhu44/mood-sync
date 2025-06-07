"use client";

import { InfoIcon } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";
import { forwardRef } from "react";

export const HeadphoneNotice = forwardRef<HTMLDivElement, object>((_, ref) => {
  return (
    <Alert
      ref={ref}
      className="opacity-0 transform translate-y-[-10px] overflow-hidden"
      style={{
        display: "none",
        height: 0,
      }}
    >
      <InfoIcon className="h-4 w-4" />
      <AlertTitle>Headphone Notice</AlertTitle>
      <AlertDescription>
        For Binaural Beats, stereo headphones are required for the effect to
        work.
      </AlertDescription>
    </Alert>
  );
});

HeadphoneNotice.displayName = "HeadphoneNotice";
