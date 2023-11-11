import React, { useState, useEffect } from "react";import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {MainScreen} from './Screens/MainScreen';
import PlayScreen from './Screens/PlayScreen';
import QueueScreen from "./Screens/QueueScreen";
import SettingsScreen from "./Screens/SettingsScreen";
import { Markwood } from "./Screens/Markwood";
import { CreateQueueScreen } from "./Screens/CreateQueueScreen";

function App() {
	//user profile info default
	//user data is stored in localstorage.userData
	const initUserData = {
		name: "Michael Li",
		age: 21,
		language: "Eng",
		sport: "Basketball",
		level: "Novice",
		location: "University City",
		distance: 1,
	};

	useEffect(() => {
    // Check if user data is already in local storage
    const storedUserData = localStorage.getItem("userData");

    // If user data is not in local storage, set the initial data
    if (!storedUserData) {
      localStorage.setItem("userData", JSON.stringify(initUserData));
    }
  }, []);


  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainScreen />} />
        <Route path="/play" element={<PlayScreen />} />
        <Route path="/queue" element={<QueueScreen />} />
        <Route path="/settings" element={<SettingsScreen />} />
        <Route path="/markwood" element={<Markwood/>} />
        <Route path="/create_queue" element={<CreateQueueScreen/>} />
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
