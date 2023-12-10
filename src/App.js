import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { MainScreen } from "./Screens/MainScreen";
import PlayScreen from "./Screens/PlayScreen";
import QueueScreen from "./Screens/QueueScreen";
import SettingsScreen from "./Screens/SettingsScreen";
import { Markwood } from "./Screens/Markwood";
import Pottruck from "./Screens/Pottruck";
import Samson from "./Screens/Samson";
import { Palestra } from "./Screens/Palestra";
import JoinQueueScreen from "./Screens/JoinQueueScreen";
import MarkwoodAScreen from "./Screens/MarkwoodAScreen";
import MarkwoodBScreen from "./Screens/MarkwoodBScreen";
import PalestraAScreen from "./Screens/PalestraAScreen";
import PottruckQueue from "./Screens/PottruckQueue";
import FinishScreen from "./Screens/FinishScreen";

//Finished screens
//MarkwoodA
//Palestra
//Markwood
//MarkwoodB





function App() {
	const currentUser = {
		name: "Michael Li",
		age: 21,
		language: "Eng",
		sport: "Basketball",
		level: "Novice",
		location: "University City",
		distance: 1,
	};

	const user1 = {
    name: "Aria Eghbali",
    age: 21,
    language: "Eng",
    sport: "Basketball",
    level: "Novice",
    location: "University City",
    distance: 1,
	};

	const user2 = {
			name: "Blake Johnson",
			age: 22,
			language: "Eng",
			sport: "Basketball",
			level: "Novice",
			location: "University City",
			distance: 1,
	};

	const user3 = {
			name: "Carter Lee",
			age: 23,
			language: "Eng",
			sport: "Basketball",
			level: "Novice",
			location: "University City",
			distance: 1,
	};

	const user4 = {
			name: "Dylan Patel",
			age: 24,
			language: "Eng",
			sport: "Basketball",
			level: "Novice",
			location: "University City",
			distance: 1,
	};

	const user5 = {
			name: "Evelyn Garcia",
			age: 25,
			language: "Eng",
			sport: "Basketball",
			level: "Novice",
			location: "University City",
			distance: 1,
	};

	const user6 = {
			name: "Finley Brown",
			age: 26,
			language: "Eng",
			sport: "Basketball",
			level: "Novice",
			location: "University City",
			distance: 1,
	};

	const user7 = {
			name: "Greyson Davis",
			age: 27,
			language: "Eng",
			sport: "Basketball",
			level: "Novice",
			location: "University City",
			distance: 1,
	};

	const user8 = {
			name: "Harper Lopez",
			age: 28,
			language: "Eng",
			sport: "Basketball",
			level: "Novice",
			location: "University City",
			distance: 1,
	};

	const user9 = {
			name: "Isaac Martin",
			age: 29,
			language: "Eng",
			sport: "Basketball",
			level: "Novice",
			location: "University City",
			distance: 1,
	};

	const user10 = {
			name: "Jade Thompson",
			age: 30,
			language: "Eng",
			sport: "Basketball",
			level: "Novice",
			location: "University City",
			distance: 1,
	};

	const user11 = {
			name: "Kai White",
			age: 31,
			language: "Eng",
			sport: "Basketball",
			level: "Novice",
			location: "University City",
			distance: 1,
	};

	const user12 = {
			name: "Luna Harris",
			age: 32,
			language: "Eng",
			sport: "Basketball",
			level: "Novice",
			location: "University City",
			distance: 1,
	};

	const user13 = {
			name: "Mason Clark",
			age: 33,
			language: "Eng",
			sport: "Basketball",
			level: "Novice",
			location: "University City",
			distance: 1,
	};

	const user14 = {
			name: "Nora Rodriguez",
			age: 34,
			language: "Eng",
			sport: "Basketball",
			level: "Novice",
			location: "University City",
			distance: 1,
	};

	const user15 = {
			name: "Oliver Lewis",
			age: 35,
			language: "Eng",
			sport: "Basketball",
			level: "Novice",
			location: "University City",
			distance: 1,
	};

	const user16 = {
			name: "Peyton Walker",
			age: 36,
			language: "Eng",
			sport: "Basketball",
			level: "Novice",
			location: "University City",
			distance: 1,
	};

	const user17 = {
			name: "Quinn Hall",
			age: 37,
			language: "Eng",
			sport: "Basketball",
			level: "Novice",
			location: "University City",
			distance: 1,
	};

	const user18 = {
			name: "Riley Young",
			age: 38,
			language: "Eng",
			sport: "Basketball",
			level: "Novice",
			location: "University City",
			distance: 1,
	};

	const user19 = {
			name: "Sawyer Allen",
			age: 39,
			language: "Eng",
			sport: "Basketball",
			level: "Novice",
			location: "University City",
			distance: 1,
	};

	const user20 = {
			name: "Taylor King",
			age: 40,
			language: "Eng",
			sport: "Basketball",
			level: "Novice",
			location: "University City",
			distance: 1,
	};

	const user21 = {
			name: "Utah Wright",
			age: 41,
			language: "Eng",
			sport: "Basketball",
			level: "Novice",
			location: "University City",
			distance: 1,
	};

	const user22 = {
			name: "Violet Scott",
			age: 42,
			language: "Eng",
			sport: "Basketball",
			level: "Novice",
			location: "University City",
			distance: 1,
	};

	const user23 = {
			name: "Will Hernandez",
			age: 43,
			language: "Eng",
			sport: "Basketball",
			level: "Novice",
			location: "University City",
			distance: 1,
	};

	const user24 = {
			name: "Xena Moore",
			age: 44,
			language: "Eng",
			sport: "Basketball",
			level: "Novice",
			location: "University City",
			distance: 1,
	};

	const user25 = {
			name: "Yara Taylor",
			age: 45,
			language: "Eng",
			sport: "Basketball",
			level: "Novice",
			location: "University City",
			distance: 1,
	};

	const user26 = {
			name: "Zack Adams",
			age: 46,
			language: "Eng",
			sport: "Basketball",
			level: "Novice",
			location: "University City",
			distance: 1,
	};

	const user27 = {
			name: "Alex Miller",
			age: 47,
			language: "Eng",
			sport: "Basketball",
			level: "Novice",
			location: "University City",
			distance: 1,
	};

	const user28 = {
			name: "Bailey Wilson",
			age: 48,
			language: "Eng",
			sport: "Basketball",
			level: "Novice",
			location: "University City",
			distance: 1,
	};

	const user29 = {
			name: "Casey Anderson",
			age: 49,
			language: "Eng",
			sport: "Basketball",
			level: "Novice",
			location: "University City",
			distance: 1,
	};

	const user30 = {
			name: "Devon Thomas",
			age: 50,
			language: "Eng",
			sport: "Basketball",
			level: "Novice",
			location: "University City",
			distance: 1,
	};

	const user31 = {
			name: "Emerson Jackson",
			age: 51,
			language: "Eng",
			sport: "Basketball",
			level: "Novice",
			location: "University City",
			distance: 1,
	};

	const user32 = {
			name: "Flynn Lee",
			age: 52,
			language: "Eng",
			sport: "Basketball",
			level: "Novice",
			location: "University City",
			distance: 1,
	};

	const user33 = {
			name: "Gavin Hill",
			age: 53,
			language: "Eng",
			sport: "Basketball",
			level: "Novice",
			location: "University City",
			distance: 1,
	};

	const user34 = {
			name: "Hayden Baker",
			age: 54,
			language: "Eng",
			sport: "Basketball",
			level: "Novice",
			location: "University City",
			distance: 1,
	};

	const user35 = {
			name: "Ivy Green",
			age: 55,
			language: "Eng",
			sport: "Basketball",
			level: "Novice",
			location: "University City",
			distance: 1,
	};

	const user36 = {
			name: "Jesse Carter",
			age: 56,
			language: "Eng",
			sport: "Basketball",
			level: "Novice",
			location: "University City",
			distance: 1,
	};

	const user37 = {
			name: "Kelsey Mitchell",
			age: 57,
			language: "Eng",
			sport: "Basketball",
			level: "Novice",
			location: "University City",
			distance: 1,
	};

	const user38 = {
			name: "Leo Roberts",
			age: 58,
			language: "Eng",
			sport: "Basketball",
			level: "Novice",
			location: "University City",
			distance: 1,
	};

	const user39 = {
			name: "Mia Phillips",
			age: 59,
			language: "Eng",
			sport: "Basketball",
			level: "Novice",
			location: "University City",
			distance: 1,
	};

	const user40 = {
			name: "Noah Campbell",
			age: 60,
			language: "Eng",
			sport: "Basketball",
			level: "Novice",
			location: "University City",
			distance: 1,
	};

	const user41 = {
			name: "Owen Parker",
			age: 61,
			language: "Eng",
			sport: "Basketball",
			level: "Novice",
			location: "University City",
			distance: 1,
	};

	const user42 = {
			name: "Piper Murphy",
			age: 62,
			language: "Eng",
			sport: "Basketball",
			level: "Novice",
			location: "University City",
			distance: 1,
	};

	const user43 = {
			name: "Quincy Nelson",
			age: 63,
			language: "Eng",
			sport: "Basketball",
			level: "Novice",
			location: "University City",
			distance: 1,
	};

	const user44 = {
			name: "Rory Edwards",
			age: 64,
			language: "Eng",
			sport: "Basketball",
			level: "Novice",
			location: "University City",
			distance: 1,
	};

	const user45 = {
			name: "Skye Collins",
			age: 65,
			language: "Eng",
			sport: "Basketball",
			level: "Novice",
			location: "University City",
			distance: 1,
	};

	const user46 = {
			name: "Tanner Bailey",
			age: 66,
			language: "Eng",
			sport: "Basketball",
			level: "Novice",
			location: "University City",
			distance: 1,
	};

	const user47 = {
			name: "Uma Morris",
			age: 67,
			language: "Eng",
			sport: "Basketball",
			level: "Novice",
			location: "University City",
			distance: 1,
	};

	const user48 = {
			name: "Valerie Richardson",
			age: 68,
			language: "Eng",
			sport: "Basketball",
			level: "Novice",
			location: "University City",
			distance: 1,
	};

	const user49 = {
			name: "Weston Russell",
			age: 69,
			language: "Eng",
			sport: "Basketball",
			level: "Novice",
			location: "University City",
			distance: 1,
	};

	const user50 = {
			name: "Zoe Howard",
			age: 70,
			language: "Eng",
			sport: "Basketball",
			level: "Novice",
			location: "University City",
			distance: 1,
	};
	const openSpot = {
		name: "OPEN"
	};

	const allUsers = [
		currentUser, user1, user2, user3, user4, user5, user6, user7, user8, user9, user10, 
		user11, user12, user13, user14, user15, user16, user17, user18, user19, user20,
		user21, user22, user23, user24, user25, user26, user27, user28, user29, user30,
		user31, user32, user33, user34, user35, user36, user37, user38, user39, user40,
		user41, user42, user43, user44, user45, user46, user47, user48, user49, user50
	];//list of all users

	const currentPos = -1 //-1 means you are not in queue starts 0-4

	const currentQueue = 'NONE' //NONE means you are not in a queue, otherwise would be name of queue 

	//each group has a max capacity of 10
	//markwood facility has 2 courts
	const markwoodA = { //3 join groups, 1 full group, 1 group playing now 
		group1: [user1, user2, user3, user4, user5, user6, user7, user8, user9, user10],
		group2: [user11, user12, user13, user14, user15, user16, user17],
		group3: [user21, user22, user23, user24, user25, user26, user27, user28, user29, user30],
		group4: [user31, user32, user33, user34],
		group5: [openSpot],
	}
	const markwoodB = {// now playing group, 2 full groups, joining at end of queue into group 4
		group1: [user1, user2, user3, user4, user5, user6, user7, user8, user9, user10],
		group2: [user11, user12, user13, user14, user15, user16, user17, user18, user19, user20],
		group3: [user21, user22, user23, user24, user25, user26, user27, user28, user29, user30],
		group4: [openSpot],
		group5: [openSpot],
	}


	//pottrcuk has 1 court
	const pottruckA = { //fully empty so you create group 1
		group1: [openSpot],
		group2: [openSpot],
		group3: [openSpot],
		group4: [openSpot],
		group5: [openSpot],
	}


	//samson court: 1
	const samsonA = { //all 5 groups are full no one can join
		group1: [user1, user2, user3, user4, user5, user6, user7, user8, user9, user10],
		group2: [user11, user12, user13, user14, user15, user16, user17, user18, user19, user20,],
		group3: [user21, user22, user23, user24, user25, user26, user27, user28, user29, user30,],
		group4: [user31, user32, user33, user34, user35, user36, user37, user38, user39, user40,],
		group5: [user41, user42, user43, user44, user45, user46, user47, user48, user49, user50],
	}


	//Palestra court: 1
	const palestraA = { //all 5 groups are full no one can join
		group1: [user1, user2, user3, user4, user5, user6, user7, user8, user9, user10],
		group2: [user11, user12, user13, user14, user15, user16, user17, user18, user19, user20,],
		group3: [user21, user22, user23, user24, user25, user26, user27, user28, user29, user30,],
		group4: [user31, user32, user33, user34, user35, user36, user37, user38, user39, user40,],
		group5: [user41, user42, user43, user44, user45, user46, user47, user48, user49, user50],
	}

  
  //court conditions
	const markwood_Condition = {
		night_lighting: 5,
		court_lines: 4.5,
		court_surface: 3,
		court_net: 4,
	};

	const pottruck_Condition = {
		night_lighting: 4,
		court_lines: 3,
		court_surface: 4,
		court_net: 3.5,
	};

	const samson_Condition = {
		night_lighting: 0,
		court_lines: 0,
		court_surface: 0,
		court_net: 0,
	};

	const palestra_Condition = {
		night_lighting: 5,
		court_lines: 5,
		court_surface: 5,
		court_net: 5,
	};

  //saved courts
	const saved_Courts = {
		markwood: true,
		pottruck: true,
		samson: false,
		palestra: false,
	};

	const numSaved = 2;

	useEffect(() => {
		// If user data is not in local storage, set the initial data

		const stored_currentUser = localStorage.getItem("currentUser");
		if (!stored_currentUser) {
			localStorage.setItem("currentUser", JSON.stringify(currentUser)); //currentUser: info about user of app
		}

		const stored_markwoodA = localStorage.getItem("markwoodA");
		if (!stored_markwoodA) {
			localStorage.setItem("markwoodA", JSON.stringify(markwoodA));
		}

		const stored_markwoodB = localStorage.getItem("markwoodB");
		if (!stored_markwoodB) {
			localStorage.setItem("markwoodB", JSON.stringify(markwoodB));
		}

		const stored_allUsers = localStorage.getItem("allUsers");
		if (!stored_allUsers) {
			localStorage.setItem("allUsers", JSON.stringify(allUsers));
		}

		const stored_markwood_Condition =
			localStorage.getItem("markwood_Condition");
		if (!stored_markwood_Condition) {
			localStorage.setItem(
				"markwood_Condition",
				JSON.stringify(markwood_Condition)
			);
		}

		const stored_currentPos = localStorage.getItem("currentPos");
		if (!stored_currentPos) {
			localStorage.setItem("currentPos", currentPos);
		}

		const stored_currentQueue = localStorage.getItem("currentQueue");
		if (!stored_currentQueue) {
			localStorage.setItem("currentQueue", currentQueue);
		}

		const stored_pottruckA = localStorage.getItem("pottruckA");
		if (!stored_pottruckA) {
			localStorage.setItem("pottruckA", JSON.stringify(pottruckA));
		}

		const stored_pottruck_Condition =
			localStorage.getItem("pottruck_Condition");
		if (!stored_pottruck_Condition) {
			localStorage.setItem(
				"pottruck_Condition",
				JSON.stringify(pottruck_Condition)
			);
		}

		const stored_samsonA = localStorage.getItem("samsonA");
		if (!stored_samsonA) {
			localStorage.setItem("samsonA", JSON.stringify(samsonA));
		}

		const stored_samson_Condition =
			localStorage.getItem("samson_Condition");
		if (!stored_samson_Condition) {
			localStorage.setItem(
				"samson_Condition",
				JSON.stringify(samson_Condition)
			);
		}

		const stored_palestraA = localStorage.getItem("palestraA");
		if (!stored_palestraA) {
			localStorage.setItem("palestraA", JSON.stringify(palestraA));
		}

		const stored_palestra_Condition =
			localStorage.getItem("palestra_Condition");
		if (!stored_palestra_Condition) {
			localStorage.setItem(
				"palestra_Condition",
				JSON.stringify(palestra_Condition)
			);
		}

		const stored_saved_Courts = localStorage.getItem("saved_Courts");
		if (!stored_saved_Courts) {
			localStorage.setItem("saved_Courts", JSON.stringify(saved_Courts));
		}
	});

	return (
		<Router>
			<Routes>
				<Route path="/" element={<MainScreen />} />
				<Route path="/play" element={<PlayScreen />} />
				<Route path="/queue" element={<QueueScreen />} />
				<Route path="/settings" element={<SettingsScreen />} />
				<Route path="/markwood" element={<Markwood />} />
				<Route path="/pottruck" element={<Pottruck />} />
				<Route path="/samson" element={<Samson />} />
				<Route path="/palestra" element={<Palestra />} />
				<Route path="/palestra_A" element={<PalestraAScreen />} />
				<Route path="/markwood_A" element={<MarkwoodAScreen />} />
				<Route path="/markwood_B" element={<MarkwoodBScreen />} />
				<Route path="/join_queue" element={<JoinQueueScreen />} />
				<Route path="/pottruck_queue" element={<PottruckQueue />} />
				<Route path="/finish" element={<FinishScreen />} />

				{/* Add more routes as needed */}
			</Routes>
		</Router>
	);
}

export default App;
