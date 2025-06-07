// Define types for mood frequencies
export type MoodName =
  | "Deep Sleep"
  | "Relaxation"
  | "Calm Focus"
  | "Alert Focus"
  | "High Concentration";

export interface MoodFrequency {
  beat: number;
  description: string;
}

export type SoundType = "isochronic" | "binaural";
