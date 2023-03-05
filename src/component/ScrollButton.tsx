import { useState, useEffect } from "react";

const AutoScrollToggle = () => {
  const [isScrolling, setIsScrolling] = useState(false);
  const [scrollSpeed, setScrollSpeed] = useState(50);

  const handleToggle = () => {
    setIsScrolling((prevState) => !prevState);
  };

  const handleSpeedChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newSpeed = parseFloat(e.target.value);
    setScrollSpeed(newSpeed);
  };

  useEffect(() => {
    let interval: number | null = null;
    if (isScrolling) {
      interval = setInterval(() => {
        window.scrollBy(0, 1);
      }, 1000 / scrollSpeed);
    } else {
      clearInterval(interval!);
    }
    return () => clearInterval(interval!);
  }, [isScrolling, scrollSpeed]);

  return (
    <div className="fixed bottom-5 right-5 flex flex-row items-center gap-2">
      <div className="flex-1">
        <input
        title="speed"
          type="range"
          className="slider slider-horizontal bg-primary-300 w-full rounded-lg"
          min="50"
          max="300"
          step="5"
          value={scrollSpeed}
          onChange={handleSpeedChange}
        />
      </div>
      <div className="flex-none">
        <button
          className={`btn btn-primary btn-sm ${
            isScrolling ? "bg-green-500" : ""
          }`}
          onClick={handleToggle}
        >
          {isScrolling ? "Stop Scroll" : "Start Scroll"}
        </button>
      </div>
    </div>
  );
};

export default AutoScrollToggle;
