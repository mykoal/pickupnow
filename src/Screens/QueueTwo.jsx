import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { NavbarPlay } from "../Components/NavbarPlay";
import { thisUser } from "../App.js";
import { addToQueue } from "../App.js";
import { removeFromQueue } from "../App.js";

const QueueTwo = () => {
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
					Current Queue
				</div>
				<div
					className="absolute w-[38px] h-[38px] top-[94px] left-[327px] bg-[url(./backarrow.svg)] hover:brightness-75"
					onClick={navigateToHome}></div>
				<div className="absolute w-[211px] top-[394px] left-[29px] [font-family:'Gabarito-Regular',Helvetica] font-normal text-black text-[20px] tracking-[0] leading-[normal] whitespace-nowrap">
					Complex — Court #
				</div>
				<div className="absolute w-[293px] h-[206px] top-[168px] left-[50px]">
					<div className="absolute w-[293px] h-[198px] top-[8px] left-0 bg-[#f3fbef] rounded-[14px] border-2 border-solid border-[#0f6e42]" />
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
				<div className="w-[26px] h-[241px] top-[456px] left-[29px] bg-[#8db580] border-2 border-solid border-[#0f6e42] absolute rounded-[20px]" />
				<div className="w-[339px] h-[2px] top-[436px] left-[27px] bg-[#0f6e42] absolute rounded-[20px]" />
				<div className="absolute w-[151px] top-[511px] left-[214px] [font-family:'Gabarito-Regular',Helvetica] font-normal text-[#0f6e42] text-[20px] text-right tracking-[0] leading-[normal]">
					&lt;-- Your Position
				</div>
				<div className="absolute w-[132px] top-[461px] left-[72px] [font-family:'Gabarito-Regular',Helvetica] font-normal text-black text-[20px] tracking-[0] leading-[normal] whitespace-nowrap">
					User1 &amp; User2
				</div>
				<p className="absolute w-[132px] top-[511px] left-[72px] [font-family:'Gabarito-Regular',Helvetica] font-normal text-transparent text-[20px] tracking-[0] leading-[normal] whitespace-nowrap">
					<span className="text-black">User3 &amp; </span>
					<span className="text-[#0f6e42]">YOU</span>
				</p>
				<div className="absolute w-[137px] top-[611px] left-[72px] [font-family:'Gabarito-Regular',Helvetica] font-normal text-black text-[20px] tracking-[0] leading-[normal] whitespace-nowrap">
					User6
				</div>
				<div className="absolute w-[137px] top-[661px] left-[72px] [font-family:'Gabarito-Regular',Helvetica] font-normal text-black text-[20px] tracking-[0] leading-[normal] whitespace-nowrap">
					User7 &amp; User8
				</div>
				<div className="absolute w-[137px] top-[561px] left-[72px] [font-family:'Gabarito-Regular',Helvetica] font-normal text-black text-[20px] tracking-[0] leading-[normal] whitespace-nowrap">
					User4 &amp; User5
				</div>
				<NavbarPlay></NavbarPlay>
				<div className="absolute w-[152px] top-[461px] left-[214px] [font-family:'Gabarito-Regular',Helvetica] font-normal text-[#0f6e42] text-[20px] text-right tracking-[0] leading-[normal]">
					&lt;-- Now Playing
				</div>
				<div className="absolute w-[81px] h-[30px] top-[392px] left-[284px] rounded-[20px]">
					<div
						className="absolute py-[4px] bg-[#0f6e42] rounded-[20px] hover:bg-[#06492a] w-[76px] top-[2px] left-[2px] [font-family:'Gabarito-Regular',Helvetica] font-normal text-[#f3fbef] text-[20px] text-center tracking-[0] leading-[normal] whitespace-nowrap"
						onClick={navigateToHome}>
						Leave
					</div>
				</div>
			</div>
		</div>
	);
};

export default QueueTwo;
