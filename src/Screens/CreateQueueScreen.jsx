import React from "react";
import { NavbarPlay } from "../Components/NavbarPlay";

export const CreateQueueScreen = () => {
  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white overflow-hidden w-[393px] h-[852px] relative">
        <div className="absolute w-[295px] h-[39px] top-[602px] left-[52px] rounded-[20px]">
          <div className="absolute w-[295px] h-[39px] top-0 left-0 bg-[#0f6e42] rounded-[20px]" />
          <div className="absolute w-[295px] h-[39px] top-0 left-0 bg-[#0f6e42] rounded-[20px]" />
          <div className="absolute w-[291px] top-[6px] left-[4px] [font-family:'Gabarito-Regular',Helvetica] font-normal text-[#f3fbef] text-[20px] text-center tracking-[0] leading-[normal]">
            CREATE QUEUE
          </div>
        </div>
        <div className="absolute w-[393px] h-[67px] top-0 left-0 bg-[#f3fbef]">
          <img
            className="absolute w-[171px] h-[38px] top-[14px] left-[13px] object-cover"
            alt="Logo long"
            src="logo-long-1.png"
          />
        </div>

        <div className="absolute w-[337px] h-[155px] top-[197px] left-[27px] bg-[#f3fbef] rounded-[15px] border-2 border-solid border-[#0f6e42]">
          <img className="absolute w-[48px] h-[48px] top-[39px] left-[143px]" alt="Group" src="group-7.png" />
          <img className="absolute w-[48px] h-[48px] top-[39px] left-[231px]" alt="Group" src="group-8.png" />
          <div className="absolute w-[76px] h-[84px] top-[39px] left-[42px]">
            <img className="absolute w-[48px] h-[48px] top-0 left-[13px]" alt="Group" src="group-6.png" />
            <div className="top-[61px] left-0 text-[#0f6e42] absolute w-[74px] [font-family:'Gabarito-Regular',Helvetica] font-normal text-[20px] tracking-[0] leading-[normal] whitespace-nowrap">
              Court A
            </div>
          </div>
          <div className="top-[99px] left-[130px] text-[#d7e3d1] absolute w-[74px] [font-family:'Gabarito-Regular',Helvetica] font-normal text-[20px] tracking-[0] leading-[normal] whitespace-nowrap">
            Court B
          </div>
          <div className="top-[99px] left-[218px] text-[#d7e3d1] absolute w-[74px] [font-family:'Gabarito-Regular',Helvetica] font-normal text-[20px] tracking-[0] leading-[normal] whitespace-nowrap">
            Court C
          </div>
        </div>
        <p className="absolute w-[319px] top-[381px] left-[30px] [font-family:'Gabarito-Regular',Helvetica] font-normal text-black text-[20px] tracking-[0] leading-[normal] whitespace-nowrap">
          Preferred Skill Level For Teammate
        </p>
        <div className="absolute w-[97px] h-[49px] top-[413px] left-[30px] bg-[#f3fbef] rounded-[20px] border-2 border-solid border-[#8db580]">
          <img className="absolute w-[40px] h-[40px] top-[6px] left-[26px]" alt="Frame" src="frame-4.svg" />
        </div>
        <div className="absolute w-[97px] h-[49px] top-[413px] left-[150px] bg-[#f3fbef] rounded-[20px] border-2 border-solid border-[#8db580]">
          <img className="absolute w-[40px] h-[40px] top-[3px] left-[24px]" alt="Frame" src="frame-5.svg" />
        </div>
        <div className="absolute w-[97px] h-[49px] top-[413px] left-[270px] bg-[#f3fbef] rounded-[20px] border-2 border-solid border-[#8db580]">
          <img className="absolute w-[40px] h-[40px] top-[3px] left-[27px]" alt="Frame" src="frame-2.svg" />
        </div>
        <div className="absolute w-[334px] top-[491px] left-[29px] [font-family:'Gabarito-Regular',Helvetica] font-normal text-black text-[20px] tracking-[0] leading-[normal] whitespace-nowrap">
          Preferred Languages For Teammate
        </div>
        <div className="absolute w-[337px] h-[49px] top-[523px] left-[29px] bg-[#f3fbef] rounded-[20px] border-2 border-solid border-[#8db580]">
          <img className="absolute w-[43px] h-[43px] top-px left-0" alt="Frame" src="frame-3.svg" />
          <div className="absolute w-[281px] top-[10px] left-[43px] [font-family:'Gabarito-Regular',Helvetica] font-normal text-[#d7e3d1] text-[20px] tracking-[0] leading-[normal] whitespace-nowrap">
            Pick All That Apply
          </div>
        </div>
        <div className="absolute w-[228px] top-[143px] left-[36px] [font-family:'Gabarito-Bold',Helvetica] font-bold text-black text-[20px] tracking-[0] leading-[normal] whitespace-nowrap">
          Creating your Queue:
        </div>
        <NavbarPlay></NavbarPlay>
      </div>
    </div>
  );
};
