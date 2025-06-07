"use client";

import { Badge } from "./ui/badge";
import { Label } from "./ui/label";
import { Slider } from "./ui/slider";
import { useAudioEngine } from "@/hooks";

export const AudioControls = () => {
  const {
    baseFrequency,
    volume,
    handleBaseFrequencyChange,
    handleVolumeChange,
  } = useAudioEngine();

  return (
    <div className="space-y-4">
      {/* Base Frequency Slider */}
      <div className="space-y-2">
        <Label htmlFor="base-frequency">
          Base Frequency (Hz){" "}
          <Badge variant="outline">{baseFrequency} Hz</Badge>
        </Label>
        <Slider
          id="base-frequency"
          min={100}
          max={1000}
          step={10}
          value={[baseFrequency]}
          onValueChange={(value) => handleBaseFrequencyChange(value[0])}
        />
      </div>

      {/* Volume Control */}
      <div className="space-y-2">
        <Label htmlFor="volume-control">
          Volume (dB) <Badge variant="outline">{volume} dB</Badge>
        </Label>
        <Slider
          id="volume-control"
          min={-60}
          max={0}
          step={1}
          value={[volume]}
          onValueChange={(value) => handleVolumeChange(value[0])}
        />
      </div>
    </div>
  );
};
