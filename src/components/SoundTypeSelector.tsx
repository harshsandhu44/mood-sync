import { SoundType } from "@/types/audio";

interface SoundTypeSelectorProps {
  soundType: SoundType;
  onSoundTypeChange: (type: SoundType) => void;
}

export const SoundTypeSelector = ({
  soundType,
  onSoundTypeChange,
}: SoundTypeSelectorProps) => {
  return (
    <div className="mb-6">
      <label className="block text-lg font-semibold text-gray-700 mb-2">
        Choose Sound Type:
      </label>
      <div className="flex space-x-4">
        <label className="inline-flex items-center cursor-pointer">
          <input
            type="radio"
            className="form-radio h-5 w-5 text-blue-600"
            name="soundType"
            value="isochronic"
            checked={soundType === "isochronic"}
            onChange={() => onSoundTypeChange("isochronic")}
          />
          <span className="ml-2 text-gray-700">
            Isochronic Tones (No headphones needed)
          </span>
        </label>
        <label className="inline-flex items-center cursor-pointer">
          <input
            type="radio"
            className="form-radio h-5 w-5 text-blue-600"
            name="soundType"
            value="binaural"
            checked={soundType === "binaural"}
            onChange={() => onSoundTypeChange("binaural")}
          />
          <span className="ml-2 text-gray-700">
            Binaural Beats (Headphones required)
          </span>
        </label>
      </div>
    </div>
  );
};
