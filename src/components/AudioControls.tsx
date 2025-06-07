import { Badge } from "./ui/badge";
import { Label } from "./ui/label";
import { Slider } from "./ui/slider";

interface AudioControlsProps {
  baseFrequency: number;
  volume: number;
  onBaseFrequencyChange: (freq: number) => void;
  onVolumeChange: (vol: number) => void;
}

export const AudioControls = ({
  baseFrequency,
  volume,
  onBaseFrequencyChange,
  onVolumeChange,
}: AudioControlsProps) => {
  const handleBaseFrequencyChange = (value: number[]) => {
    onBaseFrequencyChange(value[0]);
  };

  const handleVolumeChange = (value: number[]) => {
    onVolumeChange(value[0]);
  };

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
          onValueChange={handleBaseFrequencyChange}
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
          onValueChange={handleVolumeChange}
        />
      </div>
    </div>
  );
};
