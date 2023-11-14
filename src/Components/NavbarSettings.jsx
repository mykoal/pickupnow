import React from "react";
import { useNavigate } from "react-router-dom";

export const NavbarSettings = () => {
	let navigate = useNavigate();
	const navigateToPlay = () => {
		navigate("/play"); // '/play' is the path to your new screen
	};
	const navigateToHome = () => {
		navigate("/"); // '/' is the path to home
	};
	const navigateToSettings = () => {
		navigate("/settings"); // '/' is the path to home
	};

	return (
		<div className="Navbar">
			<div className="logo-long-wrapper">
				<img
					className="logo-long"
					alt="Logo long"
					src="https://cdn.animaapp.com/projects/654bcd0c2b1a72c65fa055c0/releases/654bcd39bb999b9d6dfbb389/img/logo-long-1-1@2x.png"
				/>
			</div>
			<div className="overlap-6">
				<img
					className="frame-7"
					alt="Play-Icon"
					src="https://cdn.animaapp.com/projects/654bcd0c2b1a72c65fa055c0/releases/654bcddb5cad2d22b9e00caf/img/frame-1@2x.png"
					onClick={navigateToPlay}
				/>
				<img
					className="frame-8"
					alt="Settings-Icon"
					src="https://cdn.animaapp.com/projects/654bcd0c2b1a72c65fa055c0/releases/654bcddb5cad2d22b9e00caf/img/frame-50@2x.png"
					onClick={navigateToSettings}
				/>
				<img
					className="frame-9"
					alt="Home-Icon"
					src="https://cdn.animaapp.com/projects/654bcd0c2b1a72c65fa055c0/releases/654bcd39bb999b9d6dfbb389/img/frame-2@2x.png"
					onClick={navigateToHome}
				/>
			</div>
		</div>
	);
};
