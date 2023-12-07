import React, { useState, useEffect } from "react";
import { NavbarHome } from "../Components/NavbarHome";
import { useNavigate } from "react-router-dom";

export const MainScreen = () => {
	let currentPos = localStorage.getItem("currentPos"); //true if you are in a queue
	const [currentQueueName, setCurrentQueueName] = useState("NONE");

	let navigate = useNavigate();
	const navigateToPlay = () => {
		navigate("/play"); // '/play' is the path to your new screen
	};
	const navigateToHome = () => {
		navigate("/"); // '/' is the path to home
	};
	const navigateToSettings = () => {
		navigate("/settings"); // '/settings' is the path to your settings screen
	};
	const navigateToQueue = () => {
		if (localStorage.getItem("currentQueue") == "markwoodA") {
			navigate("/markwood_A");
		} else if (localStorage.getItem("currentQueue") == "markwoodB") {
			navigate("/markwood_B");
		} else {
			navigate("/pottruck_queue");
		}
	};

	return (
		<div className="bg-white flex flex-row justify-center w-full">
			<div className="bg-white overflow-hidden w-[393px] h-[852px] relative">
				<div className="absolute w-[183px] top-[94px] left-[13px] [font-family:Gabarito] font-bold text-black text-[35px] tracking-[0] leading-[normal]">
					Hi Michael!
				</div>

				{currentPos != -1 && (
					<div className="absolute w-[293px] h-[206px] top-[300px] left-[50px]">
						<div className="absolute w-[293px] top-0 left-0 [font-family:Gabarito] font-bold text-black text-[20px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
							Current Queues
						</div>
						<div className="absolute w-[293px] h-[235px] top-[28px] left-0 bg-[#f3fbef] rounded-[14px] border-2 border-solid border-[#0f6e42]" />
						<div className="absolute w-[109px] top-[20px] left-[92px] [font-family:Gabarito] font-bold text-black text-[128px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
							{currentPos != -1 ? currentPos : "?"}
						</div>
						<div className="absolute w-[203px] top-[157px] left-[45px] [font-family:Gabarito] font-bold text-black text-[20px] text-center tracking-[0] leading-[normal]">
							{currentPos != -1
								? (currentPos - 1) * 30 + " Mins Wait"
								: "Not in Queue"}
							{localStorage.getItem("currentQueue") ==
								"markwoodA" && " at Markwood Court A"}
							{localStorage.getItem("currentQueue") ==
								"markwoodB" && " at Markwood Court B"}
							{localStorage.getItem("currentQueue") ==
								"pottruckA" && " at Pottruck Court A"}
						</div>
						<div
							className="absolute pt-[7px] bg-[#0f6e42] rounded-[20px] hover:bg-[#06492a] w-[206px] h-[39px] top-[215px] left-[45px] [font-family:Gabarito] font-regular text-[#f3fbef] text-[20px] text-center tracking-[0] leading-[normal]"
							onClick={navigateToQueue}>
							Go To Queue
						</div>
					</div>
				)}
				{currentPos == -1 && (
					<div className="absolute w-[353px] h-[98px] top-[400px] left-[19px] bg-[#f3fbef] rounded-[14px] border-2 border-solid border-[#0f6e42]">
						<div className="absolute w-[353px] top-[-30px] left-0 [font-family:Gabarito] font-bold text-black text-[20px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
							Current Queues
						</div>
						<div
							className="absolute w-[209px] h-[39px] top-[49px] left-[73px] rounded-[5px]"
							onClick={navigateToPlay}>
							<div className="absolute pt-[7px] bg-[#0f6e42] rounded-[20px] hover:bg-[#06492a] w-[206px] h-[39px] top-0 left-[2px] [font-family:Gabarito] font-regular text-[#f3fbef] text-[20px] text-center tracking-[0] leading-[normal]">
								Find A Court
							</div>
						</div>
						<p className="absolute w-[332px] top-[13px] left-[10px] [font-family:Gabarito] font-normal text-black text-[20px] text-center tracking-[0] leading-[normal]">
							You aren’t in any queue right now
						</p>
					</div>
				)}
				<NavbarHome></NavbarHome>
			</div>
		</div>
	);
};
