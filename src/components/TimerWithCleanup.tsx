import React, { useState, useEffect } from 'react';

const TimerWithCleanup: React.FC = () => {
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(prevTimer => prevTimer + 1);
    }, 1000);

    // Cleanup function
    return () => {
      clearInterval(interval);
      console.log("Timer interval cleared");
    };
  }, []);

  return (
    <div className="component-card">
      <h2>Timer with Cleanup</h2>
      <p>Timer: {timer} seconds</p>
      <p>The timer increases every second and will clean up when component unmounts</p>
      <p>Check console when component unmounts to see cleanup message</p>
    </div>
  );
};

export default TimerWithCleanup;