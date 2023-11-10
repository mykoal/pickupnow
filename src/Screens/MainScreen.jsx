import React from "react";
import { Navbar } from "../Components/Navbar";
import { useNavigate } from "react-router-dom";

export const MainScreen = () => {
	let navigate = useNavigate();
	const navigateToPlay = () => {
		navigate("/play"); // '/play' is the path to your new screen
	};
	const navigateToHome = () => {
		navigate("/"); // '/' is the path to home
	};
	const navigateToProfile = () => {
		navigate("/profile"); // '/' is the path to home
	};
	return (
		<div className="bg-white flex flex-row justify-center w-full">
			<div className="bg-white overflow-hidden w-[393px] h-[852px] relative">
				<div className="absolute w-[183px] top-[94px] left-[13px] [font-family:'Gabarito',Helvetica] font-normal text-black text-[35px] tracking-[0] leading-[normal]">
					Hi Michael!
				</div>
				<div className="absolute w-[164px] top-[160px] left-[13px] [font-family:'Gabarito',Helvetica] font-bold text-black text-[20px] tracking-[0] leading-[normal] whitespace-nowrap">
					Current Queues
				</div>
				<div className="absolute w-[354px] h-[98px] top-[192px] left-[19px] bg-[#f3fbef] rounded-[15px] border border-solid border-[#8db580]">
					<div
						className="absolute w-[209px] h-[39px] top-[49px] left-[73px] rounded-[5px]"
						onClick={navigateToPlay}>
						<div className="absolute w-[209px] h-[39px] top-0 left-0 bg-[#0f6e42] rounded-[5px]" />
						<div className="absolute w-[206px] h-[30px] top-[8px] left-[2px] [font-family:'Gabarito',Helvetica] font-bold text-[#f3fbef] text-[20px] text-center tracking-[0] leading-[normal]">
							Play Now
						</div>
					</div>
					<p className="absolute w-[332px] top-[13px] left-[10px] [font-family:'Gabarito',Helvetica] font-normal text-black text-[20px] text-center tracking-[0] leading-[normal]">
						You aren’t in any queue right now
					</p>
				</div>
				<Navbar></Navbar>
			</div>
		</div>
	);
};
