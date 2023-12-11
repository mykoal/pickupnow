import React from "react";
import { useNavigate } from "react-router-dom";

export const NavbarSettings = () => {
	let navigate = useNavigate();
	const navigateToPlay = () => {
		navigate("/play"); // '/play' is the path to your new screen
	};
	const navigateToHome = () => {
		navigate("/home"); // '/' is the path to home
	};
	const navigateToSettings = () => {
		navigate("/settings"); // '/' is the path to home
	};

	return (
		<div className="Navbar">
			<div className="absolute w-[393px] h-[67px] top-0 left-0 bg-[#f3fbef]">
				<img
					className="absolute w-[171px] h-[38px] top-[14px] left-[13px] object-cover"
					alt="Logo long"
					src="https://c.animaapp.com/q1G78Bfk/img/logo-long-1@2x.png"
				/>
			</div>
			<div className="absolute w-[393px] h-[98px] top-[754px] left-px bg-[#0f6e42]">
				<img
					className="absolute w-[67px] h-[67px] top-[15px] left-[300px] hover:brightness-75"
					alt="Settings-Icon"
					src="https://c.animaapp.com/VbJ8MAbM/img/frame-5.svg"
					onClick={navigateToSettings}
				/>
				<img
					className="absolute w-[58px] h-[58px] top-[20px] left-[166px] hover:brightness-75"
					alt="Frame"
					src="https://c.animaapp.com/VbJ8MAbM/img/frame.svg"
					onClick={navigateToPlay}
				/>
				<img
					className="absolute w-[67px] h-[67px] top-[15px] left-[23px] hover:brightness-75"
					alt="Home-Icon"
					src="https://c.animaapp.com/q1G78Bfk/img/frame-2.svg"
					onClick={navigateToHome}
				/>
			</div>
		</div>
	);
};
