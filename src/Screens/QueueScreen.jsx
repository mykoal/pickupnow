import React from 'react';
import { useNavigate } from 'react-router-dom';
import { NavbarPlay } from "../Components/NavbarPlay";


const QueueScreen = () => {
  let navigate = useNavigate();

  const leaveQueue = () => {
    navigate('/play'); // UPDATE
  };
  const joinQueue = () => {
    navigate('/play'); // UPDATE
  };
  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white overflow-hidden w-[393px] h-[852px] relative">
        <div className="absolute w-[164px] top-[160px] left-[13px] [font-family:'Gabarito',Helvetica] font-bold text-[27px] text-[black] tracking-[0] leading-[normal] whitespace-nowrap">
          Current Queues
        </div>
        <div className="absolute w-[354px] h-[98px] top-[192px] left-[19px] bg-[#f3fbef] rounded-[15px] border border-solid border-[#8db580]">
          <p className="absolute w-[332px] top-[13px] left-[10px] [font-family:'Gabarito',Helvetica] font-normal text-[black] text-[20px] text-center tracking-[0] leading-[normal]">
            Your position in the queue: #5
          </p>
        </div>
        <div className="absolute w-[354px] h-[280px] top-[310px] left-[19px] bg-[#f3fbef] rounded-[15px] border border-solid border-[#8db580]">
          <div className="absolute w-[393px] h-[67px] top-[10px] left-[10px] text-[25px] text-[#0f6e42] [font-family:'Gabarito',Helvetica] font-bold">
            Now Playing
          </div>
          <div className="absolute w-[393px] h-[67px] top-[60px] left-[10px] text-[20px] text-[black] [font-family:'Gabarito',Helvetica] font-normal">
            Aria & Max
          </div>
          <div className="absolute w-[393px] h-[67px] top-[110px] left-[10px] text-[25px] text-[#0f6e42] [font-family:'Gabarito',Helvetica] font-bold">
            Next Up
          </div>
          <div className="absolute w-[393px] h-[67px] top-[160px] left-[10px] text-[20px] text-[black] [font-family:'Gabarito',Helvetica] font-normal">
            Ricky and [Open Slot]
            <button className="bg-[#0f6e42] text-[#f3fbef] text-[20px] rounded-[5px] px-[10px] py-[5px] ml-[10px]" onClick={joinQueue}>
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
        <div className="absolute w-[393px] h-[67px] top-0 left-0 bg-[#f3fbef]">
          <img
            className="absolute w-[171px] h-[38px] top-[14px] left-[13px] object-cover"
            alt="Logo long"
            src="https://c.animaapp.com/Yiudwmn6/img/logo-long-1@2x.png"
          />
        </div>
        <NavbarPlay></NavbarPlay>
      </div>
    </div>
  );
};
export default QueueScreen;
