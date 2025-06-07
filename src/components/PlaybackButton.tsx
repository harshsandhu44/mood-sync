interface PlaybackButtonProps {
  isPlaying: boolean;
  onToggle: () => void;
}

export const PlaybackButton = ({
  isPlaying,
  onToggle,
}: PlaybackButtonProps) => {
  return (
    <button
      onClick={onToggle}
      className={`w-full py-4 px-6 rounded-xl text-white font-bold text-xl transition-all duration-300 transform ${
        isPlaying
          ? "bg-red-500 hover:bg-red-600 active:scale-95 shadow-lg"
          : "bg-green-500 hover:bg-green-600 active:scale-95 shadow-lg"
      }`}
    >
      {isPlaying ? "Pause Sound" : "Play Sound"}
    </button>
  );
};
