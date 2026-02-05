import React, { useState, useEffect } from 'react';

const ToggleMessage: React.FC = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Count Changed");
  }, [count]);

  const incrementCount = () => {
    setCount(prevCount => prevCount + 1);
  };

  return (
    <div className="component-card">
      <h2>Toggle Message (Conditional Rendering)</h2>
      <p>Current Count: {count}</p>
      <button onClick={incrementCount}>Increase Count</button>
      <p>Check console to see "Count Changed" message each time you click</p>
    </div>
  );
};

export default ToggleMessage;