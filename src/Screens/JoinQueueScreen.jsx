import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { NavbarPlay } from "../Components/NavbarPlay.jsx";
import { thisUser } from "../App.js";
import { addToQueue } from "../App.js";
import { removeFromQueue } from "../App.js";

const JoinQueueScreen = () => {
	let navigate = useNavigate();
	const navigateToMarkwood = () => {
		navigate("/markwood"); // '/potruck' is the path to your new screen
	};
	const navigateToQueue = () => {
		navigate("/xx"); // '/potruck' is the path to your new screen
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
				<div className="absolute w-[333px] h-[136px] top-[208px] left-[30px] bg-[#f3fbef] rounded-[15px] border-2 border-solid border-[#0f6e42]">
					<div className="w-[279px] top-[8px] absolute left-[19px] [font-family:'Gabarito-Bold',Helvetica] font-bold text-black text-[20px] tracking-[0] leading-[normal] whitespace-nowrap">
						Court A:
					</div>
					<div className="absolute w-[289px] h-[75px] top-[52px] left-[21px]">
						<div className="top-[5px] absolute w-[227px] h-[40px] left-0 [font-family:'Gabarito-Regular',Helvetica] font-normal text-black text-[20px] tracking-[0] leading-[normal]">
							Team 2
						</div>
						<div className="top-[40px] absolute w-[227px] h-[40px] left-0 [font-family:'Gabarito-Regular',Helvetica] font-normal text-black text-[20px] tracking-[0] leading-[normal]">
							Team 4
						</div>
						<div
							className="absolute py-[2px] bg-[#0f6e42] rounded-[20px] hover:bg-[#06492a] w-[76px] top-[4px] left-[210px] [font-family:'Gabarito-Regular',Helvetica] font-normal text-[#f3fbef] text-[20px] text-center tracking-[0] leading-[normal] whitespace-nowrap"
							onClick={navigateToQueue}>
							Join
						</div>
						<div
							className="absolute py-[2px] bg-[#0f6e42] rounded-[20px] hover:bg-[#06492a] w-[76px] top-[39px] left-[210px] [font-family:'Gabarito-Regular',Helvetica] font-normal text-[#f3fbef] text-[20px] text-center tracking-[0] leading-[normal] whitespace-nowrap"
							onClick={navigateToQueue}>
							Join
						</div>
					</div>
					<img
						className="w-[292px] top-[47px] absolute h-px left-[16px] object-cover"
						alt="Line"
						src="https://c.animaapp.com/q1G78Bfk/img/line-1.svg"
					/>
				</div>
				<div className="absolute w-[332px] h-[100px] top-[481px] left-[31px] bg-[#f3fbef] rounded-[15px] border-2 border-solid border-[#0f6e42]">
					<div className="w-[275px] top-[6px] absolute left-[19px] [font-family:'Gabarito-Bold',Helvetica] font-bold text-black text-[20px] tracking-[0] leading-[normal] whitespace-nowrap">
						Court C:
					</div>
					<div className="absolute w-[288px] h-[40px] top-[50px] left-[21px]">
						<div className="absolute w-[223px] h-[40px] top-[5px] left-0 [font-family:'Gabarito-Regular',Helvetica] font-normal text-black text-[20px] tracking-[0] leading-[normal]">
							Team 1
						</div>
						<div
							className="absolute py-[2px] bg-[#0f6e42] rounded-[20px] hover:bg-[#06492a] w-[76px] top-[4px] left-[209px] [font-family:'Gabarito-Regular',Helvetica] font-normal text-[#f3fbef] text-[20px] text-center tracking-[0] leading-[normal] whitespace-nowrap"
							onClick={navigateToQueue}>
							Join
						</div>
					</div>
					<img
						className="w-[291px] top-[45px] absolute h-px left-[16px] object-cover"
						alt="Line"
						src="https://c.animaapp.com/q1G78Bfk/img/line-1.svg"
					/>
				</div>
				<div className="absolute w-[333px] h-[100px] top-[363px] left-[30px] bg-[#f3fbef] rounded-[15px] border-2 border-solid border-[#0f6e42]">
					<div className="w-[276px] top-[9px] absolute left-[19px] [font-family:'Gabarito-Bold',Helvetica] font-bold text-black text-[20px] tracking-[0] leading-[normal] whitespace-nowrap">
						Court B:
					</div>
					<div className="absolute w-[224px] h-[40px] top-[56px] left-[19px] [font-family:'Gabarito-Regular',Helvetica] font-normal text-black text-[20px] tracking-[0] leading-[normal]">
						No Queues
					</div>
					<img
						className="w-[292px] top-[48px] absolute h-px left-[16px] object-cover"
						alt="Line"
						src="https://c.animaapp.com/q1G78Bfk/img/line-1.svg"
					/>
				</div>
				<NavbarPlay></NavbarPlay>
				<div className="absolute w-[319px] top-[162px] left-[37px] [font-family:'Gabarito-Bold',Helvetica] font-bold text-black text-[20px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
					Open Queues
				</div>
			</div>
		</div>
	);
};

export default JoinQueueScreen;
