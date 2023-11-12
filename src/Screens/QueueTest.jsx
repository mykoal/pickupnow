import React from 'react';
import { useNavigate } from 'react-router-dom';
import { NavbarPlay } from "../Components/NavbarPlay";

const QueueTest = () => {
    let navigate = useNavigate();
    const navigateToPlay = () => {
      navigate('/play'); // the other button actions need to be added in (join a team, leave)
    };
    const leaveQueue = () => {
      // Add functionality to leave the queue here
    };
  
    // Function to calculate the position of the circle in the queue visualization
    const calculateCirclePosition = (totalPositions, yourPosition) => {
      const percentage = (yourPosition / totalPositions) * 100;
      return percentage + '%';
    };

  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white overflow-hidden w-[393px] h-[852px] relative">
        <div className="absolute w-[164px] top-[104px] left-[17px] [font-family:'Gabarito-Bold',Helvetica] font-bold text-black text-[20px] tracking-[0] leading-[normal] whitespace-nowrap">
          Current Queue
        </div>
        <div className="absolute w-[211px] top-[366px] left-[29px] [font-family:'Gabarito-Regular',Helvetica] font-normal text-black text-[20px] tracking-[0] leading-[normal] whitespace-nowrap">
          Complex — Court #
        </div>
        <div className="absolute w-[293px] h-[203px] top-[155px] left-[50px]">
          <div className="absolute w-[293px] h-[198px] top-[5px] left-0 bg-[#f3fbef] rounded-[14px] border-2 border-solid border-[#8db580]" />
          <div className="absolute w-[109px] top-0 left-[92px] [font-family:'Gabarito-Bold',Helvetica] font-bold text-black text-[128px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
            #
          </div>
          <div className="absolute w-[203px] top-[137px] left-[45px] [font-family:'Gabarito-Bold',Helvetica] font-bold text-black text-[20px] text-center tracking-[0] leading-[normal]">
            Position in Queue
          </div>
          <p className="absolute w-[203px] top-[167px] left-[45px] [font-family:'Gabarito-Regular',Helvetica] font-normal text-black text-[12px] text-center tracking-[0] leading-[normal]">
            Estimated Wait Time: (#*30) Minutes
          </p>
        </div>
        <div className="absolute w-[26px] h-[272px] top-[416px] left-[29px] bg-[#0f6e42] rounded-[20px]" />
        <div className='w-[339px] h-[2px]'>
            <div className='absolute w-[339px] h-[4px] top-[397px] left-[25px] bg-[#0f6e42] rounded-[20px]'/>
        </div>
        <div className="absolute w-[139px] top-[416px] left-[69px] [font-family:'Gabarito-Regular',Helvetica] font-normal text-[#0f6e42] text-[20px] tracking-[0] leading-[normal] underline">
          Now Playing
        </div>
        <div className="absolute w-[93px] top-[484px] left-[69px] [font-family:'Gabarito-Regular',Helvetica] font-normal text-[#0f6e42] text-[20px] tracking-[0] leading-[normal] underline">
          Next Up
        </div>
        <div className="absolute w-[306px] top-[446px] left-[69px] [font-family:'Gabarito-Regular',Helvetica] font-normal text-black text-[20px] tracking-[0] leading-[normal] whitespace-nowrap">
          User1 &amp; User2
        </div>
        <div className="absolute w-[306px] h-[30px] top-[515px] left-[69px]">
          <div className="absolute w-[306px] top-[2px] left-0 [font-family:'Gabarito-Regular',Helvetica] font-normal text-black text-[20px] tracking-[0] leading-[normal] whitespace-nowrap">
            User3 &amp; [OPEN SPOT]
          </div>
          <div className="absolute w-[95px] h-[30px] top-0 left-[210px] bg-[#0f6e42] rounded-[5px]" />
          <div className="absolute w-[88px] top-[2px] left-[210px] [font-family:'Gabarito-Regular',Helvetica] font-normal text-[#f3fbef] text-[20px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
            JOIN
          </div>
        </div>
        <div className="absolute w-[306px] h-[30px] top-[554px] left-[69px]">
          <p className="absolute w-[306px] top-[2px] left-0 [font-family:'Gabarito-Regular',Helvetica] font-normal text-transparent text-[20px] tracking-[0] leading-[normal] whitespace-nowrap">
            <span className="text-[#0f6e42]">YOU</span>
            <span className="text-black"> &amp; User4</span>
          </p>
          <div className="absolute w-[95px] h-[30px] top-0 left-[125px] bg-[#0f6e42] rounded-[5px]" />
          <div className="absolute w-[89px] top-[2px] left-[125px] [font-family:'Gabarito-Regular',Helvetica] font-normal text-[#f3fbef] text-[20px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
            LEAVE
          </div>
        </div>



        <NavbarPlay></NavbarPlay>
      </div>
    </div>
  );
};

export default QueueTest;
