import React from 'react';
import { Component } from "./Component";
import { useNavigate } from 'react-router-dom';

const PlayScreen = () => {
  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white overflow-hidden w-[393px] h-[852px] relative">
        <div className="absolute w-[329px] h-[247px] top-[213px] left-[32px] bg-cover bg-[50%_50%]">
          <Component className="!absolute !left-[229px] !top-[193px]" />
          <Component className="!absolute !left-[301px] !top-[124px]" polygon="polygon-1-2.svg" />
          <Component className="!absolute !left-[153px] !top-[124px]" polygon="polygon-1-3.svg" />
          <Component className="!absolute !left-[23px] !top-[64px]" polygon="polygon-1-4.svg" />
        </div>
        <div className="absolute w-[360px] h-[60px] top-[124px] left-[17px]">
          <div className="absolute w-[230px] h-[55px] top-[5px] left-0 bg-[#f3fbef] rounded-[15px] border-2 border-solid border-[#8db580]" />
          <div className="absolute w-[332px] top-[19px] left-[16px] [font-family:'Gabarito-Regular',Helvetica] font-normal text-black text-[20px] tracking-[0] leading-[normal]">
            Search
          </div>
          <div className="absolute w-[55px] top-0 left-[240px] [font-family:'Gabarito-Regular',Helvetica] font-normal text-black text-[20px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
            Sport
          </div>
          <div className="absolute w-[55px] top-0 left-[305px] [font-family:'Gabarito-Regular',Helvetica] font-normal text-black text-[20px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
            Filter
          </div>
          <img className="absolute w-[30px] h-[30px] top-[25px] left-[253px]" alt="Frame" src="frame.svg" />
          <img className="absolute w-[30px] h-[30px] top-[25px] left-[318px]" alt="Frame" src="image.svg" />
        </div>
        <div className="absolute w-[393px] h-[67px] top-0 left-0 bg-[#f3fbef]">
          <img
            className="absolute w-[171px] h-[38px] top-[14px] left-[13px] object-cover"
            alt="Logo long"
            src="logo-long-1.png"
          />
        </div>
        <div className="absolute w-[393px] h-[98px] top-[754px] left-px bg-[#0f6e42]">
          <img className="absolute w-[67px] h-[67px] top-[15px] left-[300px]" alt="Frame" src="frame-2.svg" />
          <div className="absolute w-[58px] h-[58px] top-[20px] left-[166px]">
            <div className="relative w-[54px] h-[54px] top-px left-[2px] bg-[#f3fbef] rounded-[27.14px]">
              <img className="absolute w-[48px] h-[48px] top-[3px] left-[3px]" alt="Vector" src="vector.svg" />
            </div>
          </div>
          <img className="absolute w-[67px] h-[67px] top-[15px] left-[23px]" alt="Frame" src="frame-3.svg" />
        </div>
        <div className="absolute w-[311px] top-[486px] left-[35px] [font-family:'Gabarito-Bold',Helvetica] font-bold text-black text-[20px] tracking-[0] leading-[normal] whitespace-nowrap">
          Saved Courts:
        </div>
        <img
          className="top-[539px] absolute w-[20px] h-[20px] left-[332px] object-cover"
          alt=""
          src="image-19.png"
        />
        <img
          className="top-[588px] absolute w-[20px] h-[20px] left-[332px] object-cover"
          alt=""
          src="image-20.png"
        />
        <div className="absolute w-[253px] h-[40px] top-[528px] left-[35px] [font-family:'Gabarito-Regular',Helvetica] font-normal text-black text-[20px] tracking-[0] leading-[normal]">
          Markwood Playground
        </div>
        <div className="absolute w-[253px] h-[40px] top-[577px] left-[35px] [font-family:'Gabarito-Regular',Helvetica] font-normal text-black text-[20px] tracking-[0] leading-[normal]">
          Potruck Gymnasium
        </div>
        <img className="top-[525px] absolute w-[329px] h-px left-[32px] object-cover" alt="Line" src="line-1.svg" />
        <img className="top-[574px] absolute w-[329px] h-px left-[32px] object-cover" alt="Line" src="line-2.svg" />
      </div>
    </div>
  );
};

export default PlayScreen;
