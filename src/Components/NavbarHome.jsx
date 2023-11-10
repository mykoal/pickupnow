import React from "react";
import { useNavigate } from "react-router-dom";

export const NavbarHome = () => {
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
		<div class="Navbar">
			<div className="absolute w-[393px] h-[67px] top-0 left-0 bg-[#f3fbef]">
				<img
					className="absolute w-[171px] h-[38px] top-[14px] left-[13px] object-cover"
					alt="Logo long"
					src="https://c.animaapp.com/Yiudwmn6/img/logo-long-1@2x.png"
				/>
			</div>
			<div className="absolute w-[393px] h-[98px] top-[754px] left-px bg-[#0f6e42]">
				<img
					className="absolute w-[58px] h-[58px] top-[20px] left-[166px]"
					alt="Play-Icon"
					src="https://c.animaapp.com/Yiudwmn6/img/frame.svg"
					onClick={navigateToPlay}
				/>
				<img
					className="absolute w-[67px] h-[67px] top-[15px] left-[300px]"
					alt="Settings-Icon"
					src="https://c.animaapp.com/Yiudwmn6/img/frame-4.svg"
					onClick={navigateToSettings}
				/>
				<div className="absolute w-[67px] h-[67px] top-[15px] left-[23px] bg-[url(https://c.animaapp.com/Yiudwmn6/img/frame-3.svg)] bg-[100%_100%]">
					<img
						className="absolute w-[67px] h-[67px] top-0 left-0"
						alt="Home-Icon-2"
						src="https://c.animaapp.com/Yiudwmn6/img/frame-3.svg"
						onClick={navigateToHome}
					/>

					<img
						className="absolute w-[67px] h-[67px] top-0 left-0"
						alt="Home-Icon"
						src="https://c.animaapp.com/Yiudwmn6/img/frame-1.svg"
						onClick={navigateToHome}
					/>
				</div>
			</div>
		</div>
	);
};
