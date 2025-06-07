import { MoodName } from "@/types/audio";
import { moodFrequencies } from "@/constants/moodFrequencies";
import { Label } from "./ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

interface MoodSelectorProps {
  selectedMood: MoodName;
  onMoodChange: (mood: MoodName) => void;
}

export const MoodSelector = ({
  selectedMood,
  onMoodChange,
}: MoodSelectorProps) => {
  return (
    <div className="space-y-2">
      <Label htmlFor="mood-select">Select Your Desired Mood</Label>

      <Select
        value={selectedMood}
        onValueChange={(value) => onMoodChange(value as MoodName)}
      >
        <SelectTrigger className="w-full" id="mood-select">
          <SelectValue placeholder="Select a mood" />
        </SelectTrigger>

        <SelectContent>
          {Object.keys(moodFrequencies).map((mood) => (
            <SelectItem key={mood} value={mood}>
              {mood} ({moodFrequencies[mood as MoodName].beat} Hz)
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <p className="text-sm text-muted-foreground">
        {moodFrequencies[selectedMood].description}
      </p>
    </div>
  );
};
