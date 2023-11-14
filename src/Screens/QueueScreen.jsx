import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { NavbarPlay } from "../Components/NavbarPlay";
import { thisUser } from '../App.js';
import { addToQueue } from '../App.js';
import { removeFromQueue } from '../App.js';
const QueueScreen = () => {
// Get the queue data from local storage
const queueData = JSON.parse(localStorage.getItem("courtQueue")) || {};


// Get the queue for "Rockwood A"
const rockwoodAQueue = queueData["Rockwood A"] || [];


// Get the first two people in the queue
const firstPerson = rockwoodAQueue[0] ? rockwoodAQueue[0].name : "No one";
const secondPerson = rockwoodAQueue[1] ? rockwoodAQueue[1].name : "No one";
const thirdPerson = rockwoodAQueue[2] ? rockwoodAQueue[2].name : "No one";
const fourthPerson = rockwoodAQueue[3] ? rockwoodAQueue[3].name : "Open Slot";
const fifthPerson = rockwoodAQueue[4] ? rockwoodAQueue[4].name : "Open Slot";
const sixthPerson = rockwoodAQueue[5] ? rockwoodAQueue[5].name : "Open Slot";

// State variables for the slot and the button
const [slot, setSlot] = useState("Open Slot");
const [isButtonClicked, setIsButtonClicked] = useState(false);

// Function to join or leave the slot
const toggleSlot = () => {
  if (isButtonClicked) {
    // If the button has been clicked, revert to the old state
    setSlot("Open Slot");
    addToQueue("Rockwood A", thisUser);
    setIsButtonClicked(false);

  } else {
    // If the button hasn't been clicked, join the slot
    setSlot(fourthPerson);
    setIsButtonClicked(true);
    removeFromQueue("Rockwood A", thisUser);
  }
};

  let navigate = useNavigate();
  const navigateToPlay = () => {
    navigate('/play'); // the other button actions need to be added in (join a team, leave)console.log(rockwoodAQueue);
  };

  // Function to calculate the position of the circle in the queue visualization
  const calculateCirclePosition = (totalPositions, yourPosition) => {
    const percentage = (yourPosition / totalPositions) * 100;
    return percentage + '%';
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
          {isButtonClicked ? "2nd" : "not"}
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
            {thirdPerson} & {slot}
            <button className="bg-[#0f6e42] text-[#f3fbef] text-[20px] rounded-[5px] px-[10px] py-[5px] ml-[10px]" onClick={toggleSlot}>
             {isButtonClicked ? "Leave" : "Join"}
             </button>
          </div>
          <div className="absolute w-[393px] h-[67px] top-[210px] left-[10px] text-[20px] text-[black] [font-family:'Gabarito',Helvetica] font-normal">
            {fifthPerson} & {sixthPerson}
          </div>
        </div>
        <NavbarPlay></NavbarPlay>
      </div>
    </div>
  );
};

export default QueueScreen;
