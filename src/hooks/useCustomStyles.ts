import { useEffect } from "react";

export const useCustomStyles = () => {
  useEffect(() => {
    // Custom CSS for range input thumb (optional, but enhances styling)
    const style = document.createElement("style");
    style.innerHTML = `
.range-thumb-blue::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 20px;
  height: 20px;
  background: #2563eb;
  border-radius: 50%;
  cursor: grab;
  box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.4);
}
.range-thumb-blue::-moz-range-thumb {
  width: 20px;
  height: 20px;
  background: #2563eb;
  border-radius: 50%;
  cursor: grab;
  box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.4);
}
`;
    document.head.appendChild(style);

    // Cleanup function to remove the style when component unmounts
    return () => {
      if (document.head.contains(style)) {
        document.head.removeChild(style);
      }
    };
  }, []); // Empty dependency array means this runs once on mount
};
