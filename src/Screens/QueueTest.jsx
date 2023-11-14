// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { NavbarPlay } from "../Components/NavbarPlay";

// const QueueTest = () => {
// 	let navigate = useNavigate();
// 	const navigateToPlay = () => {
// 		navigate("/play"); // the other button actions need to be added in (join a team, leave)
// 	};
// 	const leaveQueue = () => {
// 		// Add functionality to leave the queue here
// 	};

// 	// Function to calculate the position of the circle in the queue visualization
// 	const calculateCirclePosition = (totalPositions, yourPosition) => {
// 		const percentage = (yourPosition / totalPositions) * 100;
// 		return percentage + "%";
// 	};

// 	return (
// 		<div className="bg-white flex flex-row justify-center w-full">
// 			<div className="bg-white overflow-hidden w-[393px] h-[852px] relative">
// 				<div className="absolute w-[164px] top-[104px] left-[17px] [font-family:'Gabarito-Bold',Helvetica] font-bold text-black text-[20px] tracking-[0] leading-[normal] whitespace-nowrap">
// 					Current Queue
// 				</div>
// 				<div className="absolute w-[211px] top-[366px] left-[29px] [font-family:'Gabarito-Regular',Helvetica] font-normal text-black text-[20px] tracking-[0] leading-[normal] whitespace-nowrap">
// 					Complex — Court #
// 				</div>
// 				<div className="absolute w-[293px] h-[203px] top-[155px] left-[50px]">
// 					<div className="absolute w-[293px] h-[198px] top-[5px] left-0 bg-[#f3fbef] rounded-[14px] border-2 border-solid border-[#8db580]" />
// 					<div className="absolute w-[109px] top-0 left-[92px] [font-family:'Gabarito-Bold',Helvetica] font-bold text-black text-[128px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
// 						#
// 					</div>
// 					<div className="absolute w-[203px] top-[137px] left-[45px] [font-family:'Gabarito-Bold',Helvetica] font-bold text-black text-[20px] text-center tracking-[0] leading-[normal]">
// 						Position in Queue
// 					</div>
// 					<p className="absolute w-[203px] top-[167px] left-[45px] [font-family:'Gabarito-Regular',Helvetica] font-normal text-black text-[12px] text-center tracking-[0] leading-[normal]">
// 						Estimated Wait Time: (#*30) Minutes
// 					</p>
// 				</div>
// 				<div className="absolute w-[26px] h-[272px] top-[416px] left-[29px] bg-[#0f6e42] rounded-[20px]" />
// 				<div className="w-[339px] h-[2px]">
// 					<div className="absolute w-[339px] h-[4px] top-[397px] left-[25px] bg-[#0f6e42] rounded-[20px]" />
// 				</div>
// 				<div className="absolute w-[139px] top-[416px] left-[69px] [font-family:'Gabarito-Regular',Helvetica] font-normal text-[#0f6e42] text-[20px] tracking-[0] leading-[normal] underline">
// 					Now Playing
// 				</div>
// 				<div className="absolute w-[93px] top-[484px] left-[69px] [font-family:'Gabarito-Regular',Helvetica] font-normal text-[#0f6e42] text-[20px] tracking-[0] leading-[normal] underline">
// 					Next Up
// 				</div>
// 				<div className="absolute w-[306px] top-[446px] left-[69px] [font-family:'Gabarito-Regular',Helvetica] font-normal text-black text-[20px] tracking-[0] leading-[normal] whitespace-nowrap">
// 					User1 &amp; User2
// 				</div>
// 				<div className="absolute w-[306px] h-[30px] top-[515px] left-[69px]">
// 					<div className="absolute w-[306px] top-[2px] left-0 [font-family:'Gabarito-Regular',Helvetica] font-normal text-black text-[20px] tracking-[0] leading-[normal] whitespace-nowrap">
// 						User3 &amp; [OPEN SPOT]
// 					</div>
// 					<div className="absolute w-[95px] h-[30px] top-0 left-[210px] bg-[#0f6e42] rounded-[5px]" />
// 					<div className="absolute w-[88px] top-[2px] left-[210px] [font-family:'Gabarito-Regular',Helvetica] font-normal text-[#f3fbef] text-[20px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
// 						JOIN
// 					</div>
// 				</div>
// 				<div className="absolute w-[306px] h-[30px] top-[554px] left-[69px]">
// 					<p className="absolute w-[306px] top-[2px] left-0 [font-family:'Gabarito-Regular',Helvetica] font-normal text-transparent text-[20px] tracking-[0] leading-[normal] whitespace-nowrap">
// 						<span className="text-[#0f6e42]">YOU</span>
// 						<span className="text-black"> &amp; User4</span>
// 					</p>
// 					<div className="absolute w-[95px] h-[30px] top-0 left-[125px] bg-[#0f6e42] rounded-[5px]" />
// 					<div className="absolute w-[89px] top-[2px] left-[125px] [font-family:'Gabarito-Regular',Helvetica] font-normal text-[#f3fbef] text-[20px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
// 						LEAVE
// 					</div>
// 				</div>

// 				<NavbarPlay></NavbarPlay>
// 			</div>
// 		</div>
// 	);
// };

// export default QueueTest;
// ^^ commented out old code for this file

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { NavbarPlay } from "../Components/NavbarPlay";
import { thisUser } from "../App.js";
import { addToQueue } from "../App.js";
import { removeFromQueue } from "../App.js";

const QueueTest = () => {
	// Get the queue data from local storage
	const queueData = JSON.parse(localStorage.getItem("courtQueue")) || {};

	// Get the queue for "Rockwood A"
	const rockwoodAQueue = queueData["Rockwood A"] || [];

	// Get the first two people in the queue
	const firstPerson = rockwoodAQueue[0] ? rockwoodAQueue[0].name : "No one";
	const secondPerson = rockwoodAQueue[1] ? rockwoodAQueue[1].name : "No one";
	const thirdPerson = rockwoodAQueue[2] ? rockwoodAQueue[2].name : "No one";
	const fourthPerson = rockwoodAQueue[3]
		? rockwoodAQueue[3].name
		: "Open Slot";
	const fifthPerson = rockwoodAQueue[4]
		? rockwoodAQueue[4].name
		: "Open Slot";
	const sixthPerson = rockwoodAQueue[5]
		? rockwoodAQueue[5].name
		: "Open Slot";

	// State variables for the slot and the button
	const [slot, setSlot] = useState("Michael Li");
	const [isButtonClicked, setIsButtonClicked] = useState(false);

	// Function to join or leave the slot
	const toggleSlot = () => {
		if (isButtonClicked) {
			// If the button has been clicked, revert to the old state
			setSlot("Michael Li");
			addToQueue("Rockwood A", thisUser);
			setIsButtonClicked(false);
		} else {
			// If the button hasn't been clicked, join the slot
			setSlot("[Open Slot]");
			setIsButtonClicked(true);
			removeFromQueue("Rockwood A", thisUser);
		}
	};

	let navigate = useNavigate();
	const navigateToPlay = () => {
		navigate("/play"); // the other button actions need to be added in (join a team, leave)console.log(rockwoodAQueue);
	};

	// Function to calculate the position of the circle in the queue visualization
	const calculateCirclePosition = (totalPositions, yourPosition) => {
		const percentage = (yourPosition / totalPositions) * 100;
		return percentage + "%";
	};

	return (
		<div className="bg-white flex flex-row justify-center w-full">
			<div className="bg-white overflow-hidden w-[393px] h-[852px] relative">
				<div className="absolute w-[164px] top-[100px] left-[13px] [font-family:'Gabarito',Helvetica] font-bold text-[27px] text-[black] tracking-[0] leading-[normal] whitespace-nowrap">
					Current Queues
				</div>
				<div className="absolute w-[354px] h-[160px] top-[135px] left-[19px] bg-[#f3fbef] rounded-[15px] border border-solid border-[#8db580]">
					<p className="absolute w-[332px] top-[10px] left-[10px] [font-family:'Gabarito',Helvetica] font-normal text-[black] text-[15px] text-center tracking-[0] leading-[normal]">
						You are currently
					</p>
					<p className="absolute w-[332px] top-[40px] left-[10px] [font-family:'Gabarito',Helvetica] font-bold text-[black] text-[60px] text-center tracking-[0] leading-[normal]">
						{isButtonClicked ? "not" : "2nd"}
					</p>
					<p className="absolute w-[332px] bottom-[10px] left-[10px] [font-family:'Gabarito',Helvetica] font-normal text-[black] text-[15px] text-center tracking-[0] leading-[normal]">
						in the court Queue
					</p>
				</div>
				<div className="absolute w-[15px] h-[400px] top-[310px] left-[19px] bg-[#0f6e42] rounded-[5px]">
					{/* SVG for the adjusted queue visualization */}
					<svg height="400" width="15">
						<circle
							cx="7.5"
							cy={calculateCirclePosition(10, 5)} // Replace 10 with the total number of positions in the queue and 5 with current positon of player
							r="8"
							fill="#f3fbef"
						/>
					</svg>
				</div>
				<div className="absolute w-[320px] h-[400px] top-[310px] left-[50px] bg-[#f3fbef] rounded-[15px] border border-solid border-[#8db580]">
					<div className="absolute w-[393px] h-[67px] top-[0px] left-[10px] text-[20px] text-[#0f6e42] [font-family:'Gabarito',Helvetica] font-bold">
						Now Playing
					</div>
					<div className="absolute w-[393px] h-[67px] top-[25px] left-[10px] text-[20px] text-[black] [font-family:'Gabarito',Helvetica] font-normal">
						{firstPerson} & {secondPerson}
					</div>
					<div className="absolute w-[393px] h-[67px] top-[85px] left-[10px] text-[20px] text-[#0f6e42] [font-family:'Gabarito',Helvetica] font-bold">
						Up Next
					</div>
					<div className="absolute w-[393px] h-[67px] top-[110px] left-[10px] text-[20px] text-[black] [font-family:'Gabarito',Helvetica] font-normal">
						<b>{slot} & [Open Spot]</b>
						<button
							className="bg-[#0f6e42] text-[#f3fbef] text-[20px] rounded-[5px] px-[10px] py-[5px] ml-[10px]"
							onClick={toggleSlot}>
							{isButtonClicked ? "Join" : "Leave"}
						</button>
					</div>
				</div>
				<NavbarPlay></NavbarPlay>
			</div>
		</div>
	);
};

export default QueueTest;
