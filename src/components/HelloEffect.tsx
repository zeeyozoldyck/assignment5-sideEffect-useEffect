import React, { useEffect } from 'react';

const HelloEffect: React.FC = () => {
  useEffect(() => {
    console.log("Component Mounted");
  }, []);

  return (
    <div className="component-card">
      <h2>First useEffect (Run Once)</h2>
      <p>Check the console to see "Component Mounted" message</p>
      <p>This effect runs only once when component mounts</p>
    </div>
  );
};

export default HelloEffect;