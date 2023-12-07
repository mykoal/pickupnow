import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { NavbarPlay } from "../Components/NavbarPlay.jsx";
import { thisUser } from "../App.js";
import { addToQueue } from "../App.js";
import { removeFromQueue } from "../App.js";

const PottruckQueue = () => {
	//-------------------------UPDATED------------------------------
	//--------------------------------------------------------------
	let currentQueue = JSON.parse(localStorage.getItem("pottruckA"));

	let currentPos = localStorage.getItem("currentPos"); //true if you are in a queue

	const currentUser = JSON.parse(localStorage.getItem("currentUser"));
	//--------------------------------------------------------------
	//--------------------------------------------------------------

	const [isJoinButtonClicked, setIsJoinButtonClicked] = useState(
		localStorage.getItem("currentQueue") == "pottruckA"
	);

	const [startedGame, setStartedGame] = useState(false);

	// Function to join or leave the slot
	const join_button = () => {
		if (!isJoinButtonClicked) {
			// If the button has been clicked, add currentUser to group2, set currentPos to 2
			let temp = currentQueue.group4;
			temp.push(currentUser);
			currentQueue.group4 = temp;
			localStorage.setItem("pottruckA", JSON.stringify(currentQueue));
			currentPos = 1;
			localStorage.setItem("currentPos", currentPos);
			localStorage.setItem("currentQueue", "pottruckA");
			setIsJoinButtonClicked(true);
		} else {
			let temp = currentQueue.group2;
			temp.pop();
			currentQueue.group2 = temp;
			localStorage.setItem("pottruckA", JSON.stringify(currentQueue));
			currentPos = -1;
			localStorage.setItem("currentPos", currentPos);
			localStorage.setItem("currentQueue", "NONE");

			setIsJoinButtonClicked(false);
		}
	};

	function toggleStart() {
		setStartedGame((started) => !started);
	}

	let navigate = useNavigate();
	const navigateToPottruck = () => {
		navigate("/Pottruck"); // the other button actions need to be added in (join a team, leave)console.log(rockwoodAQueue);
	};

	const navigateToFinish = () => {
		currentPos = -1;
		localStorage.setItem("currentPos", currentPos);
		localStorage.setItem("currentQueue", "NONE");
		navigate("/finish"); // the other button actions need to be added in (join a team, leave)console.log(rockwoodAQueue);
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
					onClick={navigateToPottruck}></div>
				<div className="absolute w-[255px] top-[383px] left-[29px] [font-family:Gabarito] font-normal text-black text-[20px] tracking-[0] leading-[normal] whitespace-nowrap">
					Pottruck — Court A
				</div>

				{/* code that will show when join end of queue is clicked */}
				{!startedGame && isJoinButtonClicked && (
					<div
						className="absolute w-[85px] h-[34px] top-[380px] left-[280px] pt-[2px] bg-[#0f6e42] hover:bg-[#06492a] rounded-[20px] border-2 border-solid border-[#053f24] [font-family:Gabarito] font-normal text-[#f3fbef] text-[20px] text-center tracking-[0] leading-[normal] whitespace-nowrap"
						onClick={toggleStart}>
						Start
					</div>
				)}
				{startedGame && (
					<div
						className="absolute w-[85px] h-[34px] top-[380px] left-[280px] pt-[2px] bg-[#ED7C7C] hover:bg-[#C84F4F] rounded-[20px] border-2 border-solid border-[#541010] [font-family:Gabarito] font-normal text-[#f3fbef] text-[20px] text-center tracking-[0] leading-[normal] whitespace-nowrap"
						onClick={navigateToFinish}>
						Finish
					</div>
				)}
				{isJoinButtonClicked && (
					<div>
						<div className="w-[26px] h-[238px] top-[445px] left-[29px] bg-[#8db580] border-2 border-solid border-[#0f6e42] absolute rounded-[20px]" />
						<div className="absolute w-[294px] h-[50px] top-[439px] left-[72px]">
							<div className="w-[132px] top-[11px] left-0 [font-family:Gabarito] font-bold absolute text-[#0f6e42] text-[20px] tracking-[0] leading-[normal] whitespace-nowrap">
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
								Your Turn
							</div>
						</div>

						<div className="absolute w-[210px] h-[30px] top-[707px] left-[92px] rounded-[20px]">
							<div className="absolute w-[210px] bg-[#a6a6a6] absolute h-[30px] rounded-[20px] pt-[2px] top-0 left-0 [font-family:Gabarito] font-normal text-white text-[20px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
								Join End of Queue
							</div>
						</div>
					</div>
				)}

				<div className="absolute w-[293px] h-[206px] top-[157px] left-[50px]">
					<div className="absolute w-[293px] h-[198px] top-[8px] left-0 bg-[#f3fbef] rounded-[14px] border-2 border-solid border-[#0f6e42]" />

					{currentPos == 1 && (
						<div>
							<div className="absolute w-[109px] top-0 left-[92px] [font-family:Gabarito] font-bold text-[#0f6e42] text-[128px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
								1
							</div>
							<div className="absolute w-[203px] top-[137px] left-[45px] [font-family:Gabarito] font-bold text-[#0f6e42] text-[20px] text-center tracking-[0] leading-[normal]">
								Time to Play!
							</div>
						</div>
					)}

					{currentPos != 1 && (
						<div>
							<div className="absolute w-[109px] top-0 left-[92px] [font-family:Gabarito] font-bold text-black text-[128px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
								?
							</div>
							<div className="absolute w-[203px] top-[137px] left-[45px] [font-family:Gabarito] font-bold text-black text-[20px] text-center tracking-[0] leading-[normal]">
								"Not in Queue"
							</div>
						</div>
					)}

					<p className="absolute w-[203px] top-[167px] left-[45px] [font-family:Gabarito] font-normal text-black text-[12px] text-center tracking-[0] leading-[normal]">
						{isJoinButtonClicked
							? "Once you have enough players in your team. Click “Start” to start playing."
							: "Click “Join” or “Join End of Queue”"}
					</p>
				</div>
				<div className="w-[339px] h-[2px] top-[425px] left-[27px] bg-[#0f6e42] absolute rounded-[20px]" />

				{!isJoinButtonClicked && (
					<div>
						<p className="absolute w-[248px] top-[450px] left-[72px] [font-family:Gabarito] font-bold text-[#0f6e42] text-[20px] text-center tracking-[0] leading-[normal]">
							Queue Empty <br />
							Click “Join End of Queue” <br />
							To Begin the Queue
						</p>
						<div className="absolute w-[210px] h-[30px] top-[707px] left-[92px] rounded-[20px]">
							<div
								className="absolute w-[210px] bg-[#0f6e42] hover:bg-[#06492a] border-2 border-solid border-[#053f24] absolute h-[30px] rounded-[20px] top-0 left-0 [font-family:Gabarito] font-normal text-white text-[20px] text-center tracking-[0] leading-[normal] whitespace-nowrap"
								onClick={join_button}>
								Join End of Queue
							</div>
						</div>
					</div>
				)}
				<p className="absolute w-[194px] h-[23px] top-[683px] left-[100px] [font-family:Gabarito] font-normal text-[#0000004a] text-[15px] text-center tracking-[0] leading-[normal]">
					Max of 5 Teams In Queue
				</p>
				<NavbarPlay></NavbarPlay>
			</div>
		</div>
	);
};

export default PottruckQueue;
