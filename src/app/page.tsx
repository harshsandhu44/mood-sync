"use client";

import { useState } from "react";
import { useAudioEngine, useCustomStyles } from "@/hooks";
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
  const [warningVisible, setWarningVisible] = useState<boolean>(true);

  // Use custom hooks
  useCustomStyles();
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
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center p-4 font-inter text-gray-800">
      <div className="bg-white rounded-3xl shadow-xl p-8 max-w-lg w-full transform transition-all duration-300 hover:scale-105">
        <h1 className="text-4xl font-extrabold text-center text-blue-800 mb-6">
          MoodSync Audio
        </h1>

        <SafetyWarning
          isVisible={warningVisible}
          onClose={() => setWarningVisible(false)}
        />

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
