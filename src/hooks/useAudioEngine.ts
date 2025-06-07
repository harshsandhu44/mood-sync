import { useState, useRef, useCallback, useEffect } from "react";
import * as Tone from "tone";
import { MoodName, SoundType } from "@/types/audio";
import { moodFrequencies } from "@/constants/moodFrequencies";

export const useAudioEngine = () => {
  // State variables
  const [selectedMood, setSelectedMood] = useState<MoodName>("Relaxation");
  const [soundType, setSoundType] = useState<SoundType>("isochronic");
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [volume, setVolume] = useState<number>(-10);
  const [baseFrequency, setBaseFrequency] = useState<number>(440);
  const [beatFrequency, setBeatFrequency] = useState<number>(10);

  // Refs to hold Tone.js audio nodes
  const osc1Ref = useRef<Tone.Oscillator | null>(null);
  const osc2Ref = useRef<Tone.Oscillator | null>(null);
  const pannerRef = useRef<Tone.Panner | null>(null);
  const gainNodeRef = useRef<Tone.Gain | null>(null);
  const tremoloRef = useRef<Tone.Tremolo | null>(null);

  // Function to initialize Tone.js audio nodes
  const setupAudioNodes = useCallback(() => {
    // Only create nodes if they haven't been created yet or if they've been disposed
    if (!gainNodeRef.current || gainNodeRef.current.disposed) {
      try {
        gainNodeRef.current = new Tone.Gain(
          Tone.dbToGain(volume)
        ).toDestination();
        osc1Ref.current = new Tone.Oscillator();
        osc2Ref.current = new Tone.Oscillator();
        pannerRef.current = new Tone.Panner();
        tremoloRef.current = new Tone.Tremolo(beatFrequency, 0.5);
      } catch (error) {
        console.warn("Error creating audio nodes:", error);
      }
    }
  }, [volume, beatFrequency]);

  // Effect hook to handle initial audio node setup and cleanup
  useEffect(() => {
    setupAudioNodes();

    // Cleanup function
    return () => {
      try {
        // Check if nodes exist and safely stop/dispose them
        if (osc1Ref.current) {
          if (osc1Ref.current.state === "started") {
            osc1Ref.current.stop();
          }
          osc1Ref.current.dispose();
          osc1Ref.current = null;
        }
        if (osc2Ref.current) {
          if (osc2Ref.current.state === "started") {
            osc2Ref.current.stop();
          }
          osc2Ref.current.dispose();
          osc2Ref.current = null;
        }
        if (pannerRef.current) {
          pannerRef.current.dispose();
          pannerRef.current = null;
        }
        if (gainNodeRef.current) {
          gainNodeRef.current.dispose();
          gainNodeRef.current = null;
        }
        if (tremoloRef.current) {
          tremoloRef.current.dispose();
          tremoloRef.current = null;
        }
      } catch (error) {
        console.warn("Error during audio cleanup:", error);
      }
    };
  }, [setupAudioNodes]);

  // Effect hook to update frequencies and connections
  useEffect(() => {
    if (
      !osc1Ref.current ||
      !osc2Ref.current ||
      !gainNodeRef.current ||
      !tremoloRef.current ||
      !pannerRef.current
    ) {
      setupAudioNodes();
      return;
    }

    const { beat } = moodFrequencies[selectedMood];
    setBeatFrequency(beat);

    // Disconnect all potential previous connections
    osc1Ref.current.disconnect();
    osc2Ref.current.disconnect();
    pannerRef.current.disconnect();
    tremoloRef.current.disconnect();

    // Reconnect nodes based on the current soundType
    if (soundType === "binaural") {
      // Set frequencies for binaural beats
      osc1Ref.current.frequency.value = baseFrequency + beat / 2;
      osc2Ref.current.frequency.value = baseFrequency - beat / 2;

      // Connect oscillators to panner, then panner to gain
      osc1Ref.current.connect(pannerRef.current);
      osc2Ref.current.connect(pannerRef.current);
      pannerRef.current.connect(gainNodeRef.current);

      tremoloRef.current.disconnect();
    } else {
      // Isochronic tones
      osc1Ref.current.frequency.value = baseFrequency;
      osc2Ref.current.frequency.value = 0;
      osc2Ref.current.disconnect();

      tremoloRef.current.frequency.value = beat;

      osc1Ref.current.connect(tremoloRef.current);
      tremoloRef.current.connect(gainNodeRef.current);

      pannerRef.current.disconnect();
    }

    // Update master volume
    gainNodeRef.current.gain.value = Tone.dbToGain(volume);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedMood, soundType, baseFrequency, volume, setupAudioNodes]);

  // Effect hook to handle playback
  useEffect(() => {
    if (!osc1Ref.current || !osc2Ref.current || !tremoloRef.current) {
      return;
    }

    if (isPlaying) {
      if (Tone.context.state !== "running") {
        Tone.start().then(() => console.log("AudioContext resumed!"));
      }

      if (osc1Ref.current.state !== "started") {
        osc1Ref.current.start();
      }

      if (soundType === "binaural") {
        if (osc2Ref.current.state !== "started") {
          osc2Ref.current.start();
        }
      } else {
        if (osc2Ref.current.state === "started") {
          osc2Ref.current.stop();
        }
      }
    } else {
      if (osc1Ref.current.state === "started") {
        osc1Ref.current.stop();
      }
      if (osc2Ref.current.state === "started") {
        osc2Ref.current.stop();
      }
    }
  }, [isPlaying, soundType]);

  // Handler functions
  const togglePlayback = useCallback(async () => {
    setIsPlaying((prev) => !prev);
  }, []);

  const handleVolumeChange = useCallback((newVolume: number) => {
    setVolume(newVolume);
    if (gainNodeRef.current) {
      gainNodeRef.current.gain.rampTo(Tone.dbToGain(newVolume), 0.05);
    }
  }, []);

  const handleBaseFrequencyChange = useCallback(
    (newFreq: number) => {
      setBaseFrequency(newFreq);
      const { beat } = moodFrequencies[selectedMood];

      if (osc1Ref.current && osc2Ref.current) {
        if (soundType === "binaural") {
          osc1Ref.current.frequency.rampTo(newFreq + beat / 2, 0.05);
          osc2Ref.current.frequency.rampTo(newFreq - beat / 2, 0.05);
        } else {
          osc1Ref.current.frequency.rampTo(newFreq, 0.05);
        }
      }
    },
    [selectedMood, soundType]
  );

  return {
    // State
    selectedMood,
    soundType,
    isPlaying,
    volume,
    baseFrequency,
    beatFrequency,

    // Setters
    setSelectedMood,
    setSoundType,

    // Handlers
    togglePlayback,
    handleVolumeChange,
    handleBaseFrequencyChange,
  };
};
