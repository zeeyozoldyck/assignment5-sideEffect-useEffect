import React, { useState, useEffect } from 'react';

const ActivityTracker: React.FC = () => {
  const [count, setCount] = useState(0);
  const [timer, setTimer] = useState(0);
  const [isTracking, setIsTracking] = useState(false);

  // 1. Track Page Load - useEffect with empty dependency array
  useEffect(() => {
    console.log('Page loaded');
  }, []); // Runs only once on mount

  // 2. React to State Change - useEffect with dependency
  useEffect(() => {
    if (count > 0) {
      console.log('Count updated');
    }
  }, [count]); // Runs when count changes (not on initial render)

  // 3. Update Document Title - Side effect outside React
  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]); // Updates title when count changes

  // 4. Timer with Cleanup
  useEffect(() => {
    let intervalId: ReturnType<typeof setInterval>;

    if (isTracking) {
      intervalId = setInterval(() => {
        setTimer(prev => prev + 1);
      }, 1000);
    }

    // Cleanup function
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [isTracking]); // Re-runs when tracking state changes

  // 5. Conditional Effect
  useEffect(() => {
    if (isTracking) {
      console.log('Tracking active');
    }
  }, [isTracking]); // Runs when tracking state changes

  // Button click handler (Event, not effect)
  const handleIncrease = () => {
    setCount(prev => prev + 1);
  };

  const toggleTracking = () => {
    setIsTracking(prev => !prev);
    if (!isTracking) {
      setTimer(0); // Reset timer when starting
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h1>User Activity Tracker</h1>
      
      {/* Button Click Counter */}
      <div style={{ marginBottom: '20px' }}>
        <h2>Button Click Counter</h2>
        <p>Count: {count}</p>
        <button onClick={handleIncrease} style={{ padding: '10px 20px', fontSize: '16px' }}>
          Increase Count
        </button>
      </div>

      {/* Timer with Cleanup */}
      <div style={{ marginBottom: '20px' }}>
        <h2>Timer</h2>
        <p>Timer: {timer} seconds</p>
        <button 
          onClick={toggleTracking}
          style={{ 
            padding: '10px 20px', 
            fontSize: '16px',
            backgroundColor: isTracking ? '#ff4444' : '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '4px'
          }}
        >
          {isTracking ? 'Stop Tracking' : 'Start Tracking'}
        </button>
      </div>

      {/* Tracking Status */}
      <div>
        <h3>Tracking Status:</h3>
        <p>{isTracking ? '🟢 Active' : '🔴 Inactive'}</p>
        <p>Check console for logs:</p>
        <ul>
          <li>"Page loaded" - logged once on component mount</li>
          <li>"Count updated" - logged when count changes (not on initial render)</li>
          <li>"Tracking active" - logged when tracking is turned on</li>
        </ul>
      </div>
    </div>
  );
};

export default ActivityTracker;