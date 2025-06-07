import { MoodName } from "@/types/audio";
import { moodFrequencies } from "@/constants/moodFrequencies";

interface MoodSelectorProps {
  selectedMood: MoodName;
  onMoodChange: (mood: MoodName) => void;
}

export const MoodSelector = ({
  selectedMood,
  onMoodChange,
}: MoodSelectorProps) => {
  return (
    <div className="mb-6">
      <label
        htmlFor="mood-select"
        className="block text-lg font-semibold text-gray-700 mb-2"
      >
        Select Your Desired Mood:
      </label>
      <select
        id="mood-select"
        value={selectedMood}
        onChange={(e) => onMoodChange(e.target.value as MoodName)}
        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
      >
        {Object.keys(moodFrequencies).map((mood) => (
          <option key={mood} value={mood}>
            {mood} ({moodFrequencies[mood as MoodName].beat} Hz)
          </option>
        ))}
      </select>
      <p className="text-sm text-gray-600 mt-2">
        {moodFrequencies[selectedMood].description}
      </p>
    </div>
  );
};
