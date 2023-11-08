import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {MainScreen} from './Screens/MainScreen';
import PlayScreen from './Screens/PlayScreen';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainScreen />} />
        <Route path="/play" element={<PlayScreen />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );


	// State for the counter
	// const [count, setCount] = useState(0);

	// return (
	//   <div className="App">
	//     <header className="App-header">
	//       <img src={logo} className="App-logo" alt="logo" />
	//       <p>
	//         Edit <code>src/App.js</code> and save to reload.
	//       </p>
	//       {/* Interactive button */}
	//       <p>You clicked {count} times</p>
	//       <button onClick={() => setCount(count + 1)}>
	//         Click me
	//       </button>
	//       {/* Link to React documentation */}
	//       <p>
	//         ^ I was tinkering and made this button to familiarize myself -Michael
	//       </p>
	//     </header>
	//   </div>
	// );
}

export default App;
