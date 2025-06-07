"use client";

import { SoundType } from "@/types/audio";
import { Label } from "./ui/label";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { HeadphoneOffIcon, HeadphonesIcon } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

interface SoundTypeSelectorProps {
  soundType: SoundType;
  onSoundTypeChange: (type: SoundType) => void;
}

export const SoundTypeSelector = ({
  soundType,
  onSoundTypeChange,
}: SoundTypeSelectorProps) => {
  const handleSoundTypeChange = (value: string) => {
    onSoundTypeChange(value as SoundType);
  };

  return (
    <div className="space-y-2">
      <Label htmlFor="sound-type-select">Choose Sound Type</Label>

      <RadioGroup value={soundType} onValueChange={handleSoundTypeChange}>
        <div className="flex space-x-4">
          <RadioGroupItem value="isochronic" id="isochronic-tones" />
          <Label htmlFor="isochronic-tones">
            Isochronic Tones{" "}
            <Tooltip delayDuration={200}>
              <TooltipTrigger asChild>
                <HeadphoneOffIcon className="size-4 stroke-muted-foreground" />
              </TooltipTrigger>
              <TooltipContent side="right">No headphones needed</TooltipContent>
            </Tooltip>
          </Label>
        </div>

        <div className="flex space-x-4">
          <RadioGroupItem value="binaural" id="binaural-beats" />
          <Label htmlFor="binaural-beats">
            Binaural Beats{" "}
            <Tooltip delayDuration={200}>
              <TooltipTrigger asChild>
                <HeadphonesIcon className="size-4 stroke-muted-foreground" />
              </TooltipTrigger>
              <TooltipContent side="right">
                For Binaural Beats, stereo headphones are required for the
                effect to work.
              </TooltipContent>
            </Tooltip>
          </Label>
        </div>
      </RadioGroup>
    </div>
  );
};
