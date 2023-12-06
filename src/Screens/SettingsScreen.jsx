import React, { useState, useEffect } from "react";
import { NavbarSettings } from "../Components/NavbarSettings";
import "./style.css";

const SettingsScreen = () => {
	// Set initial state based on local storage or default values
	// const storedUserData = JSON.parse(localStorage.getItem("userData")) || {};
	// const [name, setName] = useState(storedUserData.name || "");
	// const [distance, setDistance] = useState(storedUserData.distance || "1 Mile");
	// const [age, setAge] = useState(storedUserData.age || "");
	// const [location, setLocation] = useState(storedUserData.location || "");
	// const [sport, setSport] = useState(storedUserData.sports || "");
	// const [skillLevel, setSkillLevel] = useState(storedUserData.level || "");

	const userData = JSON.parse(localStorage.getItem("userData"));
	// const handleDistanceChange = (e) => {
	//   const newDistance = e.target.value;
	//   setDistance(newDistance);
	//   localStorage.setItem('distance', newDistance); // Store the new distance in local storage
	// };
	// Function to handle the button click
	const handleButtonClick = () => {
		localStorage.clear();
		// Update the local storage value
		// localStorage.setItem(
		// 	"userData",
		// 	JSON.stringify({
		// 		name: "Michael Li",
		// 		age: 23,
		// 		language: "Eng",
		// 		sport: "Basketball",
		// 		level: "Novice",
		// 		location: "University City",
		// 		distance: 1,
		// 	})
		// );

		// You can add additional logic if needed

		// For example, you might want to display a notification that the data has been updated
		alert("Local storage cleared");
	};

	return (
		<div className="index">
			<div className="div">
				<div className="overlap">
					<p className="element">
						<span className="text-wrapper">{userData.age}</span>
					</p>
					<img
						className="frame"
						alt="Frame"
						src="https://cdn.animaapp.com/projects/654bcd0c2b1a72c65fa055c0/releases/654bcddb5cad2d22b9e00caf/img/frame-58@2x.png"
					/>
				</div>
				<div className="overlap-group">
					<img
						className="img"
						alt="Frame"
						src="https://cdn.animaapp.com/projects/654bcd0c2b1a72c65fa055c0/releases/654bcddb5cad2d22b9e00caf/img/frame-59@2x.png"
					/>
					<p className="english">
						<span className="text-wrapper">
							{userData.language}
						</span>
					</p>
				</div>
				<div className="frame-wrapper">
					<img
						className="frame-2"
						alt="Frame"
						src="https://cdn.animaapp.com/projects/654bcd0c2b1a72c65fa055c0/releases/654bcddb5cad2d22b9e00caf/img/frame-63@2x.png"
					/>
				</div>
				<div className="overlap-2">
					<p className="university-city">
						<span className="text-wrapper">
							{userData.location}
						</span>
					</p>
					<img
						className="frame-3"
						alt="Frame"
						src="https://cdn.animaapp.com/projects/654bcd0c2b1a72c65fa055c0/releases/654bcddb5cad2d22b9e00caf/img/frame-61@2x.png"
					/>
				</div>
				<div className="overlap-3">
					<img
						className="frame-4"
						alt="Frame"
						src="https://cdn.animaapp.com/projects/654bcd0c2b1a72c65fa055c0/releases/654bcddb5cad2d22b9e00caf/img/frame-60@2x.png"
					/>
					<p className="prefers-within">
						<span className="text-wrapper">
							Prefers within {userData.distance}
							<select
								value={userData.distance}
								// onChange={handleDistanceChange} //update to set item to what it needs to be set to
							>
								<option value="1 Mile">1 Mile</option>
								<option value="5 Miles">5 Miles</option>
								<option value="10 Miles">10 Miles</option>
							</select>
						</span>
					</p>
				</div>
				<div className="overlap-4">
					<img
						className="frame-5"
						alt="Frame"
						src="https://cdn.animaapp.com/projects/654bcd0c2b1a72c65fa055c0/releases/654bcddb5cad2d22b9e00caf/img/frame-54@2x.png"
					/>
					<div className="smartphone-signal" />
					<p className="novice">
						<span className="text-wrapper">
							{userData.skillLevel}
						</span>
					</p>
				</div>
				<div className="group-wrapper">
					<div className="group">
						<div className="overlap-group-2">
							<img
								className="vector"
								alt="Vector"
								src="https://cdn.animaapp.com/projects/654bcd0c2b1a72c65fa055c0/releases/654bcddb5cad2d22b9e00caf/img/vector-13@2x.png"
							/>
							<p className="basketball-tennis">
								<span className="text-wrapper">
									{userData.sport}
								</span>
							</p>
						</div>
					</div>
				</div>
				<div className="overlap-5">
					<p className="michael-li">
						<span className="span">{userData.name}</span>
					</p>

					<button
						className="image-button"
						onClick={handleButtonClick}>
						<img
							className="frame-6"
							alt="Frame"
							src="https://cdn.animaapp.com/projects/654bcd0c2b1a72c65fa055c0/releases/654bcddb5cad2d22b9e00caf/img/frame-62@2x.png"
						/>
					</button>
				</div>
				<NavbarSettings></NavbarSettings>
			</div>
		</div>
	);
};

export default SettingsScreen;
