import React, { useState, useEffect } from 'react';

const UpdateTitle: React.FC = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  const incrementCount = () => {
    setCount(prevCount => prevCount + 1);
  };

  return (
    <div className="component-card">
      <h2>Update Document Title</h2>
      <p>Current Count: {count}</p>
      <button onClick={incrementCount}>Increase Count</button>
      <p>The document title updates to "Count: X" each time you click</p>
    </div>
  );
};

export default UpdateTitle;