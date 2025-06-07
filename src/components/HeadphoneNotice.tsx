import { SoundType } from "@/types/audio";

interface HeadphoneNoticeProps {
  soundType: SoundType;
}

export const HeadphoneNotice = ({ soundType }: HeadphoneNoticeProps) => {
  if (soundType !== "binaural") return " ";

  return (
    <p className="text-center text-sm text-accent-foreground font-medium">
      For Binaural Beats, stereo headphones are required for the effect to work.
    </p>
  );
};
