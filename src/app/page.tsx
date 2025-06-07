"use client";

import { useAudioEngine } from "@/hooks";
import {
  SafetyWarning,
  MoodSelector,
  SoundTypeSelector,
  AudioControls,
  PlaybackButton,
  HeadphoneNotice,
} from "@/components";

// Main App component for the Mood-Based Sound Frequency application
export default function App() {
  const {
    selectedMood,
    soundType,
    isPlaying,
    volume,
    baseFrequency,
    setSelectedMood,
    setSoundType,
    togglePlayback,
    handleVolumeChange,
    handleBaseFrequencyChange,
  } = useAudioEngine();

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-card shadow-lg rounded-lg p-8 max-w-lg w-full">
        <h1 className="text-4xl font-extrabold text-center text-primary mb-6">
          MoodSync
        </h1>

        <SafetyWarning />

        <MoodSelector
          selectedMood={selectedMood}
          onMoodChange={setSelectedMood}
        />

        <SoundTypeSelector
          soundType={soundType}
          onSoundTypeChange={setSoundType}
        />

        <AudioControls
          baseFrequency={baseFrequency}
          volume={volume}
          onBaseFrequencyChange={handleBaseFrequencyChange}
          onVolumeChange={handleVolumeChange}
        />

        <PlaybackButton isPlaying={isPlaying} onToggle={togglePlayback} />

        <HeadphoneNotice soundType={soundType} />
      </div>
    </div>
  );
}
