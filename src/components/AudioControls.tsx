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
  const handleBaseFrequencyChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newFreq = parseFloat(e.target.value);
    onBaseFrequencyChange(newFreq);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    onVolumeChange(newVolume);
  };

  return (
    <>
      {/* Base Frequency Slider */}
      <div className="mb-6">
        <label
          htmlFor="base-frequency"
          className="block text-lg font-semibold text-gray-700 mb-2"
        >
          Base Frequency: {baseFrequency} Hz
        </label>
        <input
          type="range"
          id="base-frequency"
          min="100"
          max="1000"
          step="10"
          value={baseFrequency}
          onChange={handleBaseFrequencyChange}
          className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer range-thumb-blue"
        />
      </div>

      {/* Volume Control */}
      <div className="mb-6">
        <label
          htmlFor="volume-control"
          className="block text-lg font-semibold text-gray-700 mb-2"
        >
          Volume: {Math.round(volume)} dB
        </label>
        <input
          type="range"
          id="volume-control"
          min="-60"
          max="0"
          step="1"
          value={volume}
          onChange={handleVolumeChange}
          className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer range-thumb-blue"
        />
      </div>
    </>
  );
};
