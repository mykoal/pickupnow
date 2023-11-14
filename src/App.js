import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { MainScreen } from "./Screens/MainScreen";
import PlayScreen from "./Screens/PlayScreen";
import QueueScreen from "./Screens/QueueScreen";
import SettingsScreen from "./Screens/SettingsScreen";
import { Markwood } from "./Screens/Markwood";
import Potruck from "./Screens/Potruck";
import Samson from "./Screens/Samson";
import Palestra from "./Screens/Palestra";
import CreateQueueScreen from "./Screens/CreateQueueScreen";
import QueueTest from "./Screens/QueueTest";

export function removeFromQueue(courtId, user) {
	// Get the queue data from local storage
	const queueData = JSON.parse(localStorage.getItem("courtQueue")) || {};
  
	// Get the queue for the specified court
	const courtQueue = queueData[courtId] || [];
  
	// Remove the user from the court's queue
	const updatedCourtQueue = courtQueue.filter(queueUser => queueUser.name !== user.name);
  
	// Update the court's queue in the queue data
	queueData[courtId] = updatedCourtQueue;
  
	// Save the updated queue data back to local storage
	localStorage.setItem("courtQueue", JSON.stringify(queueData));
  }
export function addToQueue(courtId, user) {
	// Get the queue data from local storage
	const queueData = JSON.parse(localStorage.getItem("courtQueue")) || {};
  
	// Get the queue for the specified court
	const courtQueue = queueData[courtId] || [];
  
	// Add the user to the court's queue
	courtQueue.push(user);
  
	// Update the court's queue in the queue data
	queueData[courtId] = courtQueue;
  
	// Save the updated queue data back to local storage
	localStorage.setItem("courtQueue", JSON.stringify(queueData));
  }
//user profile info default
//user data is stored in localstorage.userData
export const thisUser = {
	name: "Michael Li",
	age: 21,
	language: "Eng",
	sport: "Pickleball",
	level: "Novice",
	location: "University City",
	distance: 1,
  }
function App() {
	localStorage.clear();
	const initUserData = [{
		name: "Tom Smith",
		age: 21,
		language: "Eng",
		sport: "Pickleball",
		level: "Novice",
		location: "University City",
		distance: 1,
	  }, {
		name: "John Doe",
		age: 25,
		language: "Eng",
		sport: "Pickleball",
		level: "Novice",
		location: "University City",
		distance: 5,
	  },
	  {
		name: "Joe Random",
		age: 22,
		language: "Eng",
		sport: "Pickleball",
		level: "Novice",
		location: "University City",
		distance: 1,
	  }
	];
	  
	  const initQueueData = {
		"Rockwood A": [],
		"Rockwood B": [],
		"Rockwood C": [],
	  };
	  
	  
   
	  useEffect(() => {
		// Check if user data is already in local storage
		const storedUserData = localStorage.getItem("userData");
	  
		// If user data is not in local storage, set the initial data
		if (!storedUserData) {
		  localStorage.setItem("userData", JSON.stringify(initUserData));
		}
	  
		const storedQueueData = localStorage.getItem("courtQueue");
	  
		if (!storedQueueData) {
		  localStorage.setItem("courtQueue", JSON.stringify({initQueueData}));
	  
		  // Only add users to the queue if the queue data was not in local storage
		  initUserData.forEach(element => {
			addToQueue("Rockwood A", element);
		  });
		}
	  }, []); // Pass an empty array as the second argument to useEffect

	return (
		<Router>
			<Routes>
				<Route path="/" element={<MainScreen />} />
				<Route path="/play" element={<PlayScreen />} />
				<Route path="/queue" element={<QueueScreen />} />
				<Route path="/settings" element={<SettingsScreen />} />
				<Route path="/markwood" element={<Markwood />} />
				<Route path="/potruck" element={<Potruck />} />
				<Route path="/samson" element={<Samson />} />
				<Route path="/palestra" element={<Palestra />} />
				<Route path="/create_queue" element={<CreateQueueScreen />} />
				<Route path="/x" element={<QueueTest />} />
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
