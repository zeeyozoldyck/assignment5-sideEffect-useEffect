import React, { useState, useEffect } from 'react';

const ConditionalEffect: React.FC = () => {
  const [isEnabled, setIsEnabled] = useState(false);

  useEffect(() => {
    if (isEnabled) {
      console.log("Effect is running");
    }
  }, [isEnabled]);

  const toggleEffect = () => {
    setIsEnabled(prev => !prev);
  };

  return (
    <div className="component-card">
      <h2>Conditional useEffect</h2>
      <p>Effect Status: {isEnabled ? "ON" : "OFF"}</p>
      <button onClick={toggleEffect}>
        Turn {isEnabled ? "OFF" : "ON"}
      </button>
      <p>Console log "Effect is running" only appears when toggle is ON</p>
    </div>
  );
};

export default ConditionalEffect;