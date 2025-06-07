"use client";

import { MoodName } from "@/types/audio";
import { useAudioEngine } from "@/hooks";
import { moodFrequencies } from "@/constants/moodFrequencies";
import { Label } from "./ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

export const MoodSelector = () => {
  const { selectedMood, setSelectedMood } = useAudioEngine();

  return (
    <div className="space-y-2">
      <Label htmlFor="mood-select">Select Your Desired Mood</Label>

      <Select
        value={selectedMood}
        onValueChange={(value) => setSelectedMood(value as MoodName)}
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
