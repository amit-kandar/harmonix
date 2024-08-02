import { useState, useEffect } from 'react';

function DynamicCounter({ initialValue, targetValue }) {
  const [count, setCount] = useState(initialValue);

  useEffect(() => {
    let startValue = initialValue;
    const difference = Math.abs(targetValue - initialValue);
    const stepSize = Math.max(1, Math.floor(difference / 100)); // Adjust the division factor as needed

    const interval = 10; // Set a fixed interval for smooth animation

    const steps = Math.ceil(difference / stepSize); // Calculate total steps based on step size

    let currentStep = 0;

    const counter = setInterval(() => {
      if (startValue < targetValue) {
        startValue += stepSize;
        setCount(startValue);
      } else if (startValue > targetValue) {
        startValue -= stepSize;
        setCount(startValue);
      }

      currentStep++;

      if (currentStep >= steps) {
        clearInterval(counter);
      }
    }, interval);

    return () => clearInterval(counter);
  }, [targetValue, initialValue]);

  return count;
}

export default DynamicCounter;
