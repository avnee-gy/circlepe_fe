import React, { useState, useEffect } from "react";
import HomeScreen from "./home";
import PropertyDetails from "./property";

interface StepOneProps {
  setScrollProgress: number;
}

const StepOne: React.FC<StepOneProps> = ({ setScrollProgress }) => {
  const [currentScreen, setCurrentScreen] = useState("home");
  const [animationProgress, setAnimationProgress] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(setScrollProgress);

  useEffect(() => {
    if (currentScreen === "transitioning") {
      const interval = setInterval(() => {
        setAnimationProgress((prev) => {
          const newProgress = prev + 2;
          setScrollPosition(newProgress);
          if (newProgress >= 100) {
            clearInterval(interval);
            setCurrentScreen("propertyDetails");
          }
          return newProgress;
        });
      }, 20);
      return () => clearInterval(interval);
    }
  }, [currentScreen, scrollPosition]);

  const handleGetStarted = () => {
    setCurrentScreen("transitioning");
    setAnimationProgress(0);
  };

  return (
    <div className="relative w-full h-full">
      <div
        className="absolute w-full h-full transition-transform duration-1000"
        style={{
          transform: `translateY(-${animationProgress}%)`,
        }}
      >
        <HomeScreen onGetStarted={handleGetStarted} />
      </div>
      <div
        className="absolute w-full h-full transition-transform duration-1000"
        style={{
          transform: `translateY(${100 - animationProgress}%)`,
        }}
      >
        <PropertyDetails />
      </div>
    </div>
  );
};

export default StepOne;
