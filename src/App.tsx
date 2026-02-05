import React from 'react';
import './App.css';
import HelloEffect from './components/HelloEffect';
import ToggleMessage from './components/ToggleMessage';
import UpdateTitle from './components/UpdateTitle';
import TimerWithCleanup from './components/TimerWithCleanup';
import ConditionalEffect from './components/ConditionalEffect';
import FetchOnMount from './components/FetchOnMount';
import FetchOnStateChange from './components/FetchOnStateChange';

function App() {
  return (
    <div className="App">
      <h1>useEffect Side Effects</h1>
      
      <div className="component-container">
        <HelloEffect />
        <ToggleMessage />
        <UpdateTitle />
        <TimerWithCleanup />
        <ConditionalEffect />
        <FetchOnMount />
        <FetchOnStateChange />
      </div>
    </div>
  );
}

export default App;