import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { NavbarPlay } from "../Components/NavbarPlay.jsx";
import { thisUser } from "../App.js";
import { addToQueue } from "../App.js";
import { removeFromQueue } from "../App.js";

const CourtAQueue = () => {
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
	const navigateToHome = () => {
		navigate("/"); // the other button actions need to be added in (join a team, leave)console.log(rockwoodAQueue);
	};

	// Function to calculate the position of the circle in the queue visualization
	const calculateCirclePosition = (totalPositions, yourPosition) => {
		const percentage = (yourPosition / totalPositions) * 100;
		return percentage + "%";
	};

	return (
		<div className="bg-white flex flex-row justify-center w-full">
			<div className="bg-white overflow-hidden w-[393px] h-[852px] relative">
				<div className="absolute w-[300px] top-[94px] left-[13px] [font-family:Gabarito] font-bold text-black text-[35px] tracking-[0] leading-[normal]">
					Join Queue
				</div>
				<div
					className="absolute w-[38px] h-[38px] top-[94px] left-[327px] bg-[url(./backarrow.svg)] hover:brightness-75"
					onClick={navigateToPlay}></div>
				<div className="absolute w-[255px] top-[383px] left-[29px] [font-family:Gabarito] font-normal text-black text-[20px] tracking-[0] leading-[normal] whitespace-nowrap">
					Markwood — Court A
				</div>

				{/* code that would show once joined a queue */}
				{/* <div className="absolute w-[85px] h-[34px] top-[380px] left-[280px] pt-[2px] bg-[#0f6e42] hover:bg-[#06492a] rounded-[20px] border-2 border-solid border-[#053f24] [font-family:Gabarito] font-normal text-[#f3fbef] text-[20px] text-center tracking-[0] leading-[normal] whitespace-nowrap"
				onClick={navigateToHome}>
					Leave
				</div>
				<div className="absolute w-[293px] h-[206px] top-[157px] left-[50px]">
					<div className="absolute w-[293px] h-[198px] top-[8px] left-0 bg-[#f3fbef] rounded-[14px] border-2 border-solid border-[#0f6e42]" />
					<div className="absolute w-[109px] top-0 left-[92px] [font-family:Gabarito] font-bold text-black text-[128px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
						2
					</div>
					<div className="absolute w-[203px] top-[137px] left-[45px] [font-family:Gabarito] font-bold text-black text-[20px] text-center tracking-[0] leading-[normal]">
						Position in Queue
					</div>
					<p className="absolute w-[203px] top-[167px] left-[45px] [font-family:Gabarito] font-normal text-black text-[12px] text-center tracking-[0] leading-[normal]">
						Estimated Wait Time: 30 Minutes
					</p>
				</div>
				<div className="absolute w-[294px] h-[50px] top-[489px] left-[72px]">
					<div className="w-[132px] top-[11px] left-0 [font-family:Gabarito] font-bold text-[#0f6e42] absolute text-[20px] tracking-[0] leading-[normal] whitespace-nowrap">
						Group 2
					</div>
					<svg
						className="absolute w-[65px] h-[50px] top-0 left-[119px]"
						width="65"
						height="50"
						viewBox="0 0 65 50"
						fill="none"
						xmlns="http://www.w3.org/2000/svg">
						<path
							d="M27.0834 14.7087V23.042L51.2417 23.042L51.3229 27.2295L27.0834 27.2295V35.542L13.5417 25.1253L27.0834 14.7087Z"
							fill="#0F6E42"
						/>
					</svg>
					<div className="absolute w-[124px] top-[11px] left-[170px] [font-family:Gabarito] font-bold text-[#0f6e42] text-[20px] text-right tracking-[0] leading-[normal]">
						Your Position
					</div>
				</div> */}
				<div className="absolute w-[293px] h-[206px] top-[157px] left-[50px]">
					<div className="absolute w-[293px] h-[198px] top-[8px] left-0 bg-[#f3fbef] rounded-[14px] border-2 border-solid border-[#0f6e42]" />
					<div className="absolute w-[109px] top-0 left-[92px] [font-family:Gabarito] font-bold text-black text-[128px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
						?
					</div>
					<div className="absolute w-[203px] top-[137px] left-[45px] [font-family:Gabarito] font-bold text-black text-[20px] text-center tracking-[0] leading-[normal]">
						Not in Queue
					</div>
					<p className="absolute w-[203px] top-[167px] left-[45px] [font-family:Gabarito] font-normal text-black text-[12px] text-center tracking-[0] leading-[normal]">
						Click “Join” or “Join End of Queue”
					</p>
				</div>
				<div className="w-[26px] h-[238px] top-[445px] left-[29px] bg-[#8db580] border-2 border-solid border-[#0f6e42] absolute rounded-[20px]" />
				<div className="w-[339px] h-[2px] top-[425px] left-[27px] bg-[#0f6e42] absolute rounded-[20px]" />
				<div className="absolute w-[294px] h-[50px] top-[439px] left-[72px]">
					<div className="w-[132px] top-[11px] left-0 [font-family:Gabarito] font-bold absolute text-black text-[20px] tracking-[0] leading-[normal] whitespace-nowrap">
						Group 1
					</div>

					<svg
						className="absolute w-[65px] h-[50px] top-0 left-[119px]"
						width="65"
						height="50"
						viewBox="0 0 65 50"
						fill="none"
						xmlns="http://www.w3.org/2000/svg">
						<path
							d="M27.0834 14.7087V23.042L51.2417 23.042L51.3229 27.2295L27.0834 27.2295V35.542L13.5417 25.1253L27.0834 14.7087Z"
							fill="#0F6E42"
						/>
					</svg>

					<div className="absolute w-[124px] top-[11px] left-[170px] [font-family:Gabarito] font-bold text-[#0f6e42] text-[20px] text-right tracking-[0] leading-[normal]">
						Now Playing
					</div>
				</div>
				<div className="w-[132px] top-[500px] left-[72px] [font-family:Gabarito] font-normal absolute text-black text-[20px] tracking-[0] leading-[normal] whitespace-nowrap">
					Group 2
				</div>
				<div className="w-[137px] top-[550px] left-[72px] [font-family:Gabarito] font-normal absolute text-black text-[20px] tracking-[0] leading-[normal] whitespace-nowrap">
					Group 3
				</div>
				<div className="w-[137px] top-[600px] left-[72px] [font-family:Gabarito] font-normal absolute text-black text-[20px] tracking-[0] leading-[normal] whitespace-nowrap">
					Group 4
				</div>
				<div className="w-[137px] top-[650px] left-[72px] [font-family:Gabarito] font-normal absolute text-black text-[20px] tracking-[0] leading-[normal] whitespace-nowrap">
					Group 5
				</div>
				<div className="absolute w-[81px] h-[30px] top-[496px] left-[284px] rounded-[20px]">
					<div className="absolute w-[81px] h-[30px] bg-[#0f6e42] border-2 border-solid border-[#053f24] hover:bg-[#06492a] h-[30px] rounded-[20px] top-0 left-0 [font-family:Gabarito] font-normal text-[#f3fbef] text-[20px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
						Join
					</div>
				</div>
				<div className="absolute w-[81px] h-[30px] top-[548px] left-[284px] rounded-[20px]">
					<div className="absolute w-[81px] h-[30px] bg-[#0f6e42] border-2 border-solid border-[#053f24] hover:bg-[#06492a] h-[30px] rounded-[20px] top-0 left-0 [font-family:Gabarito] font-normal text-[#f3fbef] text-[20px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
						Join
					</div>
				</div>
				<div className="absolute w-[81px] h-[30px] top-[598px] left-[283px] rounded-[20px]">
					<div className="absolute w-[81px] bg-[#a6a6a6] h-[30px] rounded-[20px] pt-[2px] top-0 left-0 [font-family:Gabarito] font-normal text-[#f3fbef] text-[20px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
						FULL
					</div>
				</div>
				<div className="absolute w-[81px] h-[30px] top-[646px] left-[283px] rounded-[20px]">
					<div className="absolute w-[81px] h-[30px] bg-[#0f6e42] border-2 border-solid border-[#053f24] hover:bg-[#06492a] h-[30px] rounded-[20px] top-0 left-0 [font-family:Gabarito] font-normal text-[#f3fbef] text-[20px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
						Join
					</div>
				</div>
				<div className="absolute w-[210px] h-[30px] top-[707px] left-[92px] rounded-[20px]">
					<div className="w-[210px] bg-[#a6a6a6] absolute h-[30px] top-0 left-0 rounded-[20px]" />
					<div className="absolute w-[197px] top-[2px] left-[5px] [font-family:Gabarito] font-normal text-white text-[20px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
						Join End of Queue
					</div>
				</div>
				<p className="absolute w-[194px] h-[23px] top-[683px] left-[100px] [font-family:Gabarito] font-normal text-[#0000004a] text-[15px] text-center tracking-[0] leading-[normal]">
					Max of 5 Teams In Queue
				</p>
				<NavbarPlay></NavbarPlay>
			</div>
		</div>
	);
};

export default CourtAQueue;
