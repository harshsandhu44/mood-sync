"use client";

import { SoundType } from "@/types/audio";
import { Label } from "./ui/label";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { useAudioEngine } from "@/hooks";

export const SoundTypeSelector = () => {
  const { soundType, setSoundType } = useAudioEngine();

  return (
    <div className="space-y-2">
      <Label htmlFor="sound-type-select">Choose Sound Type</Label>

      <RadioGroup
        value={soundType}
        onValueChange={(value) => setSoundType(value as SoundType)}
      >
        <div className="flex space-x-4">
          <RadioGroupItem value="isochronic" id="isochronic-tones" />
          <Label htmlFor="isochronic-tones">
            Isochronic Tones (No headphones needed)
          </Label>
        </div>

        <div className="flex space-x-4">
          <RadioGroupItem value="binaural" id="binaural-beats" />
          <Label htmlFor="binaural-beats">
            Binaural Beats (Headphones required)
          </Label>
        </div>
      </RadioGroup>
    </div>
  );
};
