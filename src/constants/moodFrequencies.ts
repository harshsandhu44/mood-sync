import { MoodName, MoodFrequency } from "@/types/audio";

// Mood to Brainwave Frequency mapping
// This object defines the target beat frequency (Hz) for different moods,
// corresponding to brainwave states as per research.
export const moodFrequencies: Record<MoodName, MoodFrequency> = {
  "Deep Sleep": {
    beat: 2,
    description: "Delta waves (1-4 Hz) for profound relaxation and sleep.",
  },
  Relaxation: {
    beat: 6,
    description:
      "Theta waves (4-8 Hz) for reduced anxiety, meditation, and creativity.",
  },
  "Calm Focus": {
    beat: 10,
    description:
      "Alpha waves (8-13 Hz) for a calm, restful mind and enhanced focus.",
  },
  "Alert Focus": {
    beat: 20,
    description:
      "Beta waves (14-30 Hz) for increased concentration and alertness.",
  },
  "High Concentration": {
    beat: 40,
    description:
      "Gamma waves (30-100+ Hz) for heightened alertness and problem-solving.",
  },
};
