import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { NavbarPlay } from "../Components/NavbarPlay.jsx";
//import { thisUser } from "../App.js";
// import { addToQueue } from "../App.js";
// import { removeFromQueue } from "../App.js";

const CourtAQueue = () => {
	//-------------------------UPDATED------------------------------
	//--------------------------------------------------------------
	let currentQueue = JSON.parse(localStorage.getItem("markwoodA"));

	let currentPos = localStorage.getItem("currentPos"); //true if you are in a queue

	const currentUser = JSON.parse(localStorage.getItem("currentUser"));
	//--------------------------------------------------------------
	//--------------------------------------------------------------

	//TODO

	// implement join end of queue if option is available
	// implement joining first group if all queues are empty

	//----

	// Get the queue data from local storage
	const queueData = JSON.parse(localStorage.getItem("courtQueue")) || {};

	// Get the queue for "Rockwood A"
	const rockwoodAQueue = queueData["Rockwood A"] || [];

	// State variables for the slot and the button
	const [slot, setSlot] = useState("Michael Li");
	const [isButtonClicked, setIsButtonClicked] = useState(
		localStorage.getItem("currentQueue") == "markwoodA"
	);

	// Function to join or leave the slot
	const group2_button = () => {
		if (!isButtonClicked) {
			// If the button has been clicked, add currentUser to group2, set currentPos to 2
			let temp = currentQueue.group2;
			temp.push(currentUser);
			currentQueue.group2 = temp;
			localStorage.setItem("markwoodA", JSON.stringify(currentQueue));
			currentPos = 2;
			localStorage.setItem("currentPos", currentPos);
			localStorage.setItem("currentQueue", "markwoodA");
			setIsButtonClicked(true);
		} else {
			let temp = currentQueue.group2;
			temp.pop();
			currentQueue.group2 = temp;
			localStorage.setItem("markwoodA", JSON.stringify(currentQueue));
			currentPos = -1;
			localStorage.setItem("currentPos", currentPos);
			localStorage.setItem("currentQueue", "NONE");

			setIsButtonClicked(false);
		}
	};

	const group3_button = () => {
		if (!isButtonClicked) {
			// If the button has been clicked, add currentUser to group2, set currentPos to 2
			let temp = currentQueue.group3;
			temp.push(currentUser);
			currentQueue.group3 = temp;
			localStorage.setItem("markwoodA", JSON.stringify(currentQueue));
			currentPos = 3;
			localStorage.setItem("currentPos", currentPos);
			localStorage.setItem("currentQueue", "markwoodA");
			setIsButtonClicked(true);
		} else {
			let temp = currentQueue.group3;
			temp.pop();
			currentQueue.group3 = temp;
			localStorage.setItem("markwoodA", JSON.stringify(currentQueue));
			currentPos = -1;
			localStorage.setItem("currentPos", currentPos);
			localStorage.setItem("currentQueue", "NONE");

			setIsButtonClicked(false);
		}
	};

	const group4_button = () => {
		if (!isButtonClicked) {
			// If the button has been clicked, add currentUser to group2, set currentPos to 2
			let temp = currentQueue.group4;
			temp.push(currentUser);
			currentQueue.group4 = temp;
			localStorage.setItem("markwoodA", JSON.stringify(currentQueue));
			currentPos = 4;
			localStorage.setItem("currentPos", currentPos);
			localStorage.setItem("currentQueue", "markwoodA");
			setIsButtonClicked(true);
		} else {
			let temp = currentQueue.group4;
			temp.pop();
			currentQueue.group4 = temp;
			localStorage.setItem("markwoodA", JSON.stringify(currentQueue));
			currentPos = -1;
			localStorage.setItem("currentPos", currentPos);
			localStorage.setItem("currentQueue", "NONE");
			setIsButtonClicked(false);
		}
	};

	const group5_button = () => {
		if (!isButtonClicked) {
			// If the button has been clicked, add currentUser to group2, set currentPos to 2
			let temp = currentQueue.group5;
			temp.push(currentUser);
			currentQueue.group5 = temp;
			localStorage.setItem("markwoodA", JSON.stringify(currentQueue));
			currentPos = 5;
			localStorage.setItem("currentPos", currentPos);
			localStorage.setItem("currentQueue", "markwoodA");
			setIsButtonClicked(true);
		} else {
			let temp = currentQueue.group5;
			temp.pop();
			currentQueue.group5 = temp;
			localStorage.setItem("markwoodA", JSON.stringify(currentQueue));
			currentPos = -1;
			localStorage.setItem("currentPos", currentPos);
			localStorage.setItem("currentQueue", "NONE");
			setIsButtonClicked(false);
		}
	};

	let navigate = useNavigate();
	const navigateToMarkwood = () => {
		navigate("/markwood"); // the other button actions need to be added in (join a team, leave)console.log(rockwoodAQueue);
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
					onClick={navigateToMarkwood}></div>
				<div className="absolute w-[255px] top-[383px] left-[29px] [font-family:Gabarito] font-normal text-black text-[20px] tracking-[0] leading-[normal] whitespace-nowrap">
					Markwood — Court A
				</div>

				{/* Leave button */}
				{currentPos == 2 && (
					<div className="absolute w-[81px] h-[30px] top-[383px] left-[285px] rounded-[20px]">
						<button
							className="absolute w-[81px] h-[30px] bg-[#0f6e42] border-2 border-solid border-[#053f24] hover:bg-[#06492a] h-[30px] rounded-[20px] top-0 left-0 [font-family:Gabarito] font-normal text-[#f3fbef] text-[20px] text-center tracking-[0] leading-[normal] whitespace-nowrap"
							onClick={group2_button}>
							{isButtonClicked ? "Leave" : "Join"}
						</button>
					</div>
				)}
				{currentPos == 3 && (
					<div className="absolute w-[81px] h-[30px] top-[383px] left-[285px] rounded-[20px]">
						<button
							className="absolute w-[81px] h-[30px] bg-[#0f6e42] border-2 border-solid border-[#053f24] hover:bg-[#06492a] h-[30px] rounded-[20px] top-0 left-0 [font-family:Gabarito] font-normal text-[#f3fbef] text-[20px] text-center tracking-[0] leading-[normal] whitespace-nowrap"
							onClick={group3_button}>
							{isButtonClicked ? "Leave" : "Join"}
						</button>
					</div>
				)}
				{currentPos == 4 && (
					<div className="absolute w-[81px] h-[30px] top-[383px] left-[285px] rounded-[20px]">
						<button
							className="absolute w-[81px] h-[30px] bg-[#0f6e42] border-2 border-solid border-[#053f24] hover:bg-[#06492a] h-[30px] rounded-[20px] top-0 left-0 [font-family:Gabarito] font-normal text-[#f3fbef] text-[20px] text-center tracking-[0] leading-[normal] whitespace-nowrap"
							onClick={group4_button}>
							{isButtonClicked ? "Leave" : "Join"}
						</button>
					</div>
				)}
				{currentPos == 5 && (
					<div className="absolute w-[81px] h-[30px] top-[383px] left-[285px] rounded-[20px]">
						<button
							className="absolute w-[81px] h-[30px] bg-[#0f6e42] border-2 border-solid border-[#053f24] hover:bg-[#06492a] h-[30px] rounded-[20px] top-0 left-0 [font-family:Gabarito] font-normal text-[#f3fbef] text-[20px] text-center tracking-[0] leading-[normal] whitespace-nowrap"
							onClick={group5_button}>
							{isButtonClicked ? "Leave" : "Join"}
						</button>
					</div>
				)}

				{/* Queue status and position section */}
				<div className="absolute w-[293px] h-[206px] top-[157px] left-[50px]">
					<div className="absolute w-[293px] h-[198px] top-[8px] left-0 bg-[#f3fbef] rounded-[14px] border-2 border-solid border-[#0f6e42]" />
					<div className="absolute w-[109px] top-0 left-[92px] [font-family:Gabarito] font-bold text-black text-[128px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
						{currentPos != -1 ? currentPos : "?"}
					</div>
					<div className="absolute w-[203px] top-[137px] left-[45px] [font-family:Gabarito] font-bold text-black text-[20px] text-center tracking-[0] leading-[normal]">
						{currentPos != -1
							? (currentPos - 1) * 30 + " Mins Wait"
							: "Not in Queue"}
					</div>

					<p className="absolute w-[203px] top-[167px] left-[45px] [font-family:Gabarito] font-normal text-black text-[12px] text-center tracking-[0] leading-[normal]">
						{isButtonClicked
							? "Click “Leave” to leave queue"
							: "Click “Join” or “Join End of Queue”"}
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
				{/* if user is not in queue and the queue is not full group 2 button*/}
				{currentPos == -1 && currentQueue.group2.length < 10 && (
					<div className="absolute w-[81px] h-[30px] top-[496px] left-[284px] rounded-[20px]">
						<button
							className="absolute w-[81px] h-[30px] bg-[#0f6e42] border-2 border-solid border-[#053f24] hover:bg-[#06492a] h-[30px] rounded-[20px] top-0 left-0 [font-family:Gabarito] font-normal text-[#f3fbef] text-[20px] text-center tracking-[0] leading-[normal] whitespace-nowrap"
							onClick={group2_button}>
							{isButtonClicked ? "Leave" : "Join"}
						</button>
					</div>
				)}
				{/* if user is in group 2 */}
				{currentPos == 2 && (
					<div className="absolute w-[81px] h-[30px] top-[496px] left-[284px] rounded-[20px]">
						<svg
							className="absolute w-[65px] h-[50px] top-[-11px] left-[-92px]"
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
						<div className="absolute w-[124px] top-[0px] left-[-42px] [font-family:Gabarito] font-bold text-[#0f6e42] text-[20px] text-right tracking-[0] leading-[normal]">
							Your Position
						</div>
					</div>
				)}
				{/* if group 2 full */}
				{currentPos == -1 && currentQueue.group2.length == 10 && (
					<div className="absolute w-[81px] h-[30px] top-[496px] left-[283px] rounded-[20px]">
						<div className="absolute w-[81px] bg-[#a6a6a6] h-[30px] rounded-[20px] pt-[2px] top-0 left-0 [font-family:Gabarito] font-normal text-[#f3fbef] text-[20px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
							FULL
						</div>
					</div>
				)}

				<div className="w-[137px] top-[550px] left-[72px] [font-family:Gabarito] font-normal absolute text-black text-[20px] tracking-[0] leading-[normal] whitespace-nowrap">
					Group 3
				</div>
				{/* if user is not in queue and the queue is not full group 3 button */}
				{currentPos == -1 && currentQueue.group3.length < 10 && (
					<div className="absolute w-[81px] h-[30px] top-[548px] left-[284px] rounded-[20px]">
						<button
							className="absolute w-[81px] h-[30px] bg-[#0f6e42] border-2 border-solid border-[#053f24] hover:bg-[#06492a] h-[30px] rounded-[20px] top-0 left-0 [font-family:Gabarito] font-normal text-[#f3fbef] text-[20px] text-center tracking-[0] leading-[normal] whitespace-nowrap"
							onClick={group3_button}>
							{isButtonClicked ? "Leave" : "Join"}
						</button>
					</div>
				)}
				{/* if user is in group 3 */}
				{currentPos == 3 && (
					<div className="absolute w-[81px] h-[30px] top-[548px] left-[284px] rounded-[20px]">
						<svg
							className="absolute w-[65px] h-[50px] top-[-11px] left-[-92px]"
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
						<div className="absolute w-[124px] top-[0px] left-[-42px] [font-family:Gabarito] font-bold text-[#0f6e42] text-[20px] text-right tracking-[0] leading-[normal]">
							Your Position
						</div>
					</div>
				)}
				{/* if group 3 full */}
				{currentPos == -1 && currentQueue.group3.length == 10 && (
					<div className="absolute w-[81px] h-[30px] top-[548px] left-[283px] rounded-[20px]">
						<div className="absolute w-[81px] bg-[#a6a6a6] h-[30px] rounded-[20px] pt-[2px] top-0 left-0 [font-family:Gabarito] font-normal text-[#f3fbef] text-[20px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
							FULL
						</div>
					</div>
				)}

				<div className="w-[137px] top-[600px] left-[72px] [font-family:Gabarito] font-normal absolute text-black text-[20px] tracking-[0] leading-[normal] whitespace-nowrap">
					Group 4
				</div>
				{/* if user is not in queue and the queue is not full group 4 button */}
				{currentPos == -1 && currentQueue.group4.length < 10 && (
					<div className="absolute w-[81px] h-[30px] top-[598px] left-[284px] rounded-[20px]">
						<button
							className="absolute w-[81px] h-[30px] bg-[#0f6e42] border-2 border-solid border-[#053f24] hover:bg-[#06492a] h-[30px] rounded-[20px] top-0 left-0 [font-family:Gabarito] font-normal text-[#f3fbef] text-[20px] text-center tracking-[0] leading-[normal] whitespace-nowrap"
							onClick={group4_button}>
							{isButtonClicked ? "Leave" : "Join"}
						</button>
					</div>
				)}
				{/* if user is in group 5 */}
				{currentPos == 4 && (
					<div className="absolute w-[81px] h-[30px] top-[598px] left-[284px] rounded-[20px]">
						<svg
							className="absolute w-[65px] h-[50px] top-[-11px] left-[-92px]"
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
						<div className="absolute w-[124px] top-[0px] left-[-42px] [font-family:Gabarito] font-bold text-[#0f6e42] text-[20px] text-right tracking-[0] leading-[normal]">
							Your Position
						</div>
					</div>
				)}
				{/* if group 4 full */}
				{currentPos == -1 && currentQueue.group4.length == 10 && (
					<div className="absolute w-[81px] h-[30px] top-[598px] left-[283px] rounded-[20px]">
						<div className="absolute w-[81px] bg-[#a6a6a6] h-[30px] rounded-[20px] pt-[2px] top-0 left-0 [font-family:Gabarito] font-normal text-[#f3fbef] text-[20px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
							FULL
						</div>
					</div>
				)}

				<div className="w-[137px] top-[650px] left-[72px] [font-family:Gabarito] font-normal absolute text-black text-[20px] tracking-[0] leading-[normal] whitespace-nowrap">
					Group 5
				</div>
				{/* if user is not in queue and the queue is not full group 5 button */}
				{currentPos == -1 && currentQueue.group5.length < 10 && (
					<div className="absolute w-[81px] h-[30px] top-[646px] left-[284px] rounded-[20px]">
						<button
							className="absolute w-[81px] h-[30px] bg-[#0f6e42] border-2 border-solid border-[#053f24] hover:bg-[#06492a] h-[30px] rounded-[20px] top-0 left-0 [font-family:Gabarito] font-normal text-[#f3fbef] text-[20px] text-center tracking-[0] leading-[normal] whitespace-nowrap"
							onClick={group5_button}>
							{isButtonClicked ? "Leave" : "Join"}
						</button>
					</div>
				)}
				{/* if user is in group 5 */}
				{currentPos == 5 && (
					<div className="absolute w-[81px] h-[30px] top-[646px] left-[284px] rounded-[20px]">
						<svg
							className="absolute w-[65px] h-[50px] top-[-11px] left-[-92px]"
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
						<div className="absolute w-[124px] top-[0px] left-[-42px] [font-family:Gabarito] font-bold text-[#0f6e42] text-[20px] text-right tracking-[0] leading-[normal]">
							Your Position
						</div>
					</div>
				)}
				{/* if group 5 full */}
				{currentPos == -1 && currentQueue.group5.length == 10 && (
					<div className="absolute w-[81px] h-[30px] top-[646px] left-[283px] rounded-[20px]">
						<div className="absolute w-[81px] bg-[#a6a6a6] h-[30px] rounded-[20px] pt-[2px] top-0 left-0 [font-family:Gabarito] font-normal text-[#f3fbef] text-[20px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
							FULL
						</div>
					</div>
				)}

				{/* {currentPos ==-1 && currentQueue.group2.length < 10 &&
          <button className="absolute w-[81px] h-[30px] bg-[#0f6e42] border-2 border-solid border-[#053f24] hover:bg-[#06492a] h-[30px] rounded-[20px] top-0 left-0 [font-family:Gabarito] font-normal text-[#f3fbef] text-[20px] text-center tracking-[0] leading-[normal] whitespace-nowrap" onClick={toggleSlot}>
             {isButtonClicked ? "Leave" : "Join"} {isButtonClicked && localStorage.setItem("currentPos",1)}
          </button>
        } */}

				{/* <div className="absolute w-[81px] h-[30px] top-[496px] left-[284px] rounded-[20px]">
					<div className="absolute w-[81px] h-[30px] bg-[#0f6e42] border-2 border-solid border-[#053f24] hover:bg-[#06492a] h-[30px] rounded-[20px] top-0 left-0 [font-family:Gabarito] font-normal text-[#f3fbef] text-[20px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
						Join
					</div>
				</div> */}

				{/* <div className="absolute w-[81px] h-[30px] top-[548px] left-[284px] rounded-[20px]">
					<div className="absolute w-[81px] h-[30px] bg-[#0f6e42] border-2 border-solid border-[#053f24] hover:bg-[#06492a] h-[30px] rounded-[20px] top-0 left-0 [font-family:Gabarito] font-normal text-[#f3fbef] text-[20px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
						Join
					</div>
				</div> */}

				{/* <div className="absolute w-[81px] h-[30px] top-[598px] left-[283px] rounded-[20px]">
				 	<div className="absolute w-[81px] bg-[#a6a6a6] h-[30px] rounded-[20px] pt-[2px] top-0 left-0 [font-family:Gabarito] font-normal text-[#f3fbef] text-[20px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
				 		FULL
				 	</div>
				 </div>

				 <div className="absolute w-[81px] h-[30px] top-[646px] left-[283px] rounded-[20px]">
				 	<div className="absolute w-[81px] h-[30px] bg-[#0f6e42] border-2 border-solid border-[#053f24] hover:bg-[#06492a] h-[30px] rounded-[20px] top-0 left-0 [font-family:Gabarito] font-normal text-[#f3fbef] text-[20px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
				 		Join
				 	</div>
				 </div> */}
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
