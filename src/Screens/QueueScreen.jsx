import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { NavbarPlay } from "../Components/NavbarPlay";
import { removeFromQueue } from '../queueService';


const QueueScreen = () => {
  let { selectedCourt } = useParams();
  let navigate = useNavigate();
  const navigateToPlay = () => {
    navigate('/play'); // the other button actions need to be added in (join a team, leave)
  };
  const [queue, setQueue] = useState([]);

    useEffect(() => {
        const queueData = JSON.parse(localStorage.getItem('courtQueue')) || {};
        if (queueData[selectedCourt]) {
            setQueue(queueData[selectedCourt].items);
        }
    }, [selectedCourt]); // Assuming selectedCourt is available
    const playerId = localStorage.getItem('userId'); // Get the player's ID from local storage
    const leaveQueue = () => {
        // Assuming you have the player's ID
        removeFromQueue(selectedCourt, playerId);
        // Update the queue state as needed
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
            #5
          </p>
          <p className="absolute w-[332px] bottom-[10px] left-[10px] [font-family:'Gabarito',Helvetica] font-normal text-[black] text-[15px] text-center tracking-[0] leading-[normal]">
            In the court Queue 
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
            Aria & Max 
          </div> 
          <div className="absolute w-[393px] h-[67px] top-[85px] left-[10px] text-[20px] text-[#0f6e42] [font-family:'Gabarito',Helvetica] font-bold">
            Up Next
          </div>
          <div className="absolute w-[393px] h-[67px] top-[110px] left-[10px] text-[20px] text-[black] [font-family:'Gabarito',Helvetica] font-normal">
            Ricky and [Open Slot]
            <button className="bg-[#0f6e42] text-[#f3fbef] text-[20px] rounded-[5px] px-[10px] py-[5px] ml-[10px]" onClick={navigateToPlay}>
              Join
            </button>
          </div>
          <div className="absolute w-[393px] h-[67px] top-[210px] left-[10px] text-[20px] text-[black] [font-family:'Gabarito',Helvetica] font-normal">
            YOU & Xue
            <button className="bg-[#0f6e42] text-[#f3fbef] text-[20px] rounded-[5px] px-[10px] py-[5px] ml-[10px]" onClick={leaveQueue}>
              Leave Queue
            </button>
          </div>
        </div>
        <NavbarPlay></NavbarPlay>
      </div>
    </div>
  );
};

export default QueueScreen;
