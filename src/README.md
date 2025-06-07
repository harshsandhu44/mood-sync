# MoodSync Audio - Code Organization

This document outlines the modular structure of the MoodSync Audio application following Next.js best practices.

## Project Structure

```
src/
├── app/
│   └── page.tsx              # Main application component
├── components/               # Reusable UI components
│   ├── index.ts             # Component exports
│   ├── SafetyWarning.tsx    # Safety warning banner
│   ├── MoodSelector.tsx     # Mood selection dropdown
│   ├── SoundTypeSelector.tsx # Sound type radio buttons
│   ├── AudioControls.tsx    # Volume and frequency sliders
│   ├── PlaybackButton.tsx   # Play/pause button
│   └── HeadphoneNotice.tsx  # Binaural beats notice
├── hooks/                   # Custom React hooks
│   ├── index.ts            # Hook exports
│   ├── useAudioEngine.ts   # Audio logic and state management
│   └── useCustomStyles.ts  # CSS injection for styling
├── types/                  # TypeScript type definitions
│   └── audio.ts           # Audio-related types
└── constants/             # Application constants
    └── moodFrequencies.ts # Mood frequency mappings
```

## Architecture Benefits

### 1. **Separation of Concerns**

- **Components**: Pure UI components focused on presentation
- **Hooks**: Business logic and state management
- **Types**: Type safety and documentation
- **Constants**: Centralized configuration

### 2. **Reusability**

- Components can be easily reused across different pages
- Hooks can be shared between components
- Types ensure consistency across the application

### 3. **Maintainability**

- Each file has a single responsibility
- Easy to locate and modify specific functionality
- Clear dependency relationships

### 4. **Testability**

- Components can be tested in isolation
- Hooks can be tested independently
- Business logic is separated from UI logic

## Component Responsibilities

### `SafetyWarning`

- Displays health and safety warnings
- Handles warning dismissal

### `MoodSelector`

- Renders mood selection dropdown
- Displays mood descriptions
- Handles mood change events

### `SoundTypeSelector`

- Renders sound type radio buttons
- Handles sound type selection

### `AudioControls`

- Renders frequency and volume sliders
- Handles real-time audio parameter changes

### `PlaybackButton`

- Renders play/pause button with dynamic styling
- Handles playback state toggling

### `HeadphoneNotice`

- Conditionally displays headphone requirement notice
- Only shown for binaural beats

## Hook Responsibilities

### `useAudioEngine`

- Manages all audio-related state
- Handles Tone.js audio node lifecycle
- Provides audio control functions
- Encapsulates complex audio logic

### `useCustomStyles`

- Injects custom CSS for range input styling
- Handles style cleanup on unmount

## Type Definitions

### `MoodName`

- Union type for available mood options
- Ensures type safety for mood selection

### `SoundType`

- Union type for audio generation methods
- Distinguishes between binaural and isochronic

### `MoodFrequency`

- Interface for mood frequency data
- Includes beat frequency and description

## Best Practices Implemented

1. **Custom Hooks**: Business logic extracted into reusable hooks
2. **Component Composition**: Small, focused components
3. **TypeScript**: Full type safety throughout the application
4. **Barrel Exports**: Clean import statements using index files
5. **Error Handling**: Robust error handling in audio operations
6. **Performance**: Optimized with useCallback and proper dependencies
7. **Accessibility**: Proper labeling and semantic HTML
8. **Responsive Design**: Mobile-first approach with Tailwind CSS

## Usage Example

```tsx
import { useAudioEngine } from "@/hooks";
import { MoodSelector, PlaybackButton } from "@/components";

export default function MyPage() {
  const { selectedMood, setSelectedMood, isPlaying, togglePlayback } =
    useAudioEngine();

  return (
    <div>
      <MoodSelector
        selectedMood={selectedMood}
        onMoodChange={setSelectedMood}
      />
      <PlaybackButton isPlaying={isPlaying} onToggle={togglePlayback} />
    </div>
  );
}
```
