import { SoundType } from "@/types/audio";

interface HeadphoneNoticeProps {
  soundType: SoundType;
}

export const HeadphoneNotice = ({ soundType }: HeadphoneNoticeProps) => {
  if (soundType !== "binaural") return null;

  return (
    <p className="mt-4 text-center text-sm text-blue-700 font-medium">
      For Binaural Beats, stereo headphones are required for the effect to work.
    </p>
  );
};
