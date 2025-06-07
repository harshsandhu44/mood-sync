import {
  SafetyWarning,
  MoodSelector,
  SoundTypeSelector,
  AudioControls,
  PlaybackButton,
  HeadphoneNotice,
} from "@/components";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-card shadow-lg rounded-lg p-8 max-w-lg w-full space-y-6">
        <h1 className="text-4xl font-extrabold text-center text-primary">
          MoodSync
        </h1>

        <SafetyWarning />
        <MoodSelector />
        <SoundTypeSelector />
        <AudioControls />
        <PlaybackButton />
        <HeadphoneNotice />
      </div>
    </div>
  );
}
