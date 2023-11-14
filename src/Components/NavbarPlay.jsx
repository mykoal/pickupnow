import React from "react";
import { useNavigate } from "react-router-dom";

export const NavbarPlay = () => {
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
			<div className="absolute w-[393px] h-[67px] top-0 left-0 bg-[#f3fbef]">
				<img
					className="absolute w-[171px] h-[38px] top-[14px] left-[13px] object-cover"
					alt="Logo long"
					src="https://c.animaapp.com/q1G78Bfk/img/logo-long-1@2x.png"
				/>
			</div>
			<div className="absolute w-[393px] h-[98px] top-[754px] left-px bg-[#0f6e42]">
				<img
					className="absolute w-[67px] h-[67px] top-[15px] left-[300px]"
					alt="Settings-Icon"
					src="https://c.animaapp.com/q1G78Bfk/img/frame-3.svg"
					onClick={navigateToSettings}
				/>
				<div className="absolute w-[58px] h-[58px] top-[20px] left-[166px]">
					<div className="relative w-[54px] h-[54px] top-px left-[2px] bg-[#f3fbef] rounded-[27.14px]">
						<img
							className="absolute w-[48px] h-[48px] top-[3px] left-[3px]"
							alt="Play-Icon"
							src="https://c.animaapp.com/q1G78Bfk/img/vector.svg"
							onClick={navigateToPlay}
						/>
					</div>
				</div>
				<img
					className="absolute w-[67px] h-[67px] top-[15px] left-[23px]"
					alt="Home-Icon"
					src="https://c.animaapp.com/q1G78Bfk/img/frame-2.svg"
					onClick={navigateToHome}
				/>
			</div>
		</div>
	);
};
