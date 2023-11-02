import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  // State for the counter
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {/* Interactive button */}
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>
          Click me
        </button>
        {/* Link to React documentation */}
        <p>
          ^ I was tinkering and made this button to familiarize myself -Michael
        </p>
      </header>
    </div>
  );
}

export default App;