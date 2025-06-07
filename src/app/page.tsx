"use client";

import { useAudioEngine, useCustomStyles } from "@/hooks";
import {
  SafetyWarning,
  MoodSelector,
  SoundTypeSelector,
  AudioControls,
  PlaybackButton,
} from "@/components";

export default function Home() {
  useCustomStyles();
  const audioEngine = useAudioEngine();

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-card shadow-lg rounded-lg p-8 max-w-lg w-full space-y-6">
        <h1 className="text-4xl font-bold text-center text-primary">
          MoodSync
        </h1>

        <SafetyWarning />
        <MoodSelector
          selectedMood={audioEngine.selectedMood}
          onMoodChange={audioEngine.setSelectedMood}
        />
        <SoundTypeSelector
          soundType={audioEngine.soundType}
          onSoundTypeChange={audioEngine.setSoundType}
        />
        <AudioControls
          baseFrequency={audioEngine.baseFrequency}
          volume={audioEngine.volume}
          onBaseFrequencyChange={audioEngine.handleBaseFrequencyChange}
          onVolumeChange={audioEngine.handleVolumeChange}
        />
        <PlaybackButton
          isPlaying={audioEngine.isPlaying}
          onToggle={audioEngine.togglePlayback}
        />
      </div>
    </div>
  );
}
