import React from "react";
import { NavbarPlay } from "../Components/NavbarPlay";
import { useNavigate } from "react-router-dom";

const Pottruck = () => {
	const courtRatings = JSON.parse(localStorage.getItem("pottruck_Condition"));

	let navigate = useNavigate();
	const navigateToCreateQueue = () => {
		console.log(
			"Navigating to CreateQueueScreen with courtName:",
			"Markwood Playground"
		);
		navigate("/create_queue", {
			state: { courtName: "Pottruck Gymaniusm" },
		}); // '/create_queue' is the path to your new screen
	};
	const navigateToQueueScreen = () => {
		console.log(
			"Navigating to QueueScreen with courtName:",
			"Pottruck Gymaniusm"
		);
		navigate("/queue", { state: { courtName: "Markwood Playground" } }); // '/create_queue' is the path to your new screen
	};

	const navigateToPlay = () => {
		console.log(courtRatings["court_net"]);
		navigate("/play");
	};

	const navigateToPottruckQueue = () => {
		navigate("/pottruck_queue");
	};

	return (
		<div className="bg-white flex flex-row justify-center w-full">
			<div className="bg-white w-[394px] h-[852px] relative">
				<div className="absolute w-[300px] top-[94px] left-[13px] [font-family:Gabarito] font-bold text-black text-[35px] tracking-[0] leading-[normal]">
					Pottruck
				</div>
				<div
					className="absolute w-[38px] h-[38px] top-[94px] left-[327px] bg-[url(./backarrow.svg)] hover:brightness-75"
					onClick={navigateToPlay}></div>
				<div className="w-[332px] top-[150px] left-[33px] text-center absolute [font-family:Gabarito] font-bold font-bold text-black text-[20px] tracking-[0] leading-[normal]">
					Complex Conditions
				</div>
				<div className="absolute w-[354px] h-[190px] top-[180px] left-[21px]">
					<div className="top-0 rounded-[15px_15px_0px_0px] absolute w-[354px] h-[49px] left-0 bg-[#f3fbef] border-2 border-solid border-[#0F6E42]" />
					<div className="absolute w-[332px] h-[40px] top-[12px] left-[11px] [font-family:Gabarito] font-normal font-normal text-black text-[20px] tracking-[0] leading-[normal]">
						Night Lighting:
					</div>

					<div className="top-[141px] rounded-[0px_0px_15px_15px] absolute w-[354px] h-[49px] left-0 bg-[#f3fbef] border-2 border-solid border-[#0F6E42]" />
					<div className="top-[155px] absolute w-[332px] h-[40px] left-[11px] [font-family:Gabarito] font-normal font-normal text-black text-[20px] tracking-[0] leading-[normal]">
						Court Net:
					</div>
					<div className="top-[94px] absolute w-[354px] h-[49px] left-0 bg-[#f3fbef] border-2 border-solid border-[#0F6E42]" />
					<div className="top-[107px] absolute w-[332px] h-[40px] left-[11px] [font-family:Gabarito] font-normal font-normal text-black text-[20px] tracking-[0] leading-[normal]">
						Court surface:
					</div>
					<div className="top-[47px] absolute w-[354px] h-[49px] left-0 bg-[#f3fbef] border-2 border-solid border-[#0F6E42]" />
					<div className="top-[58px] absolute w-[332px] h-[40px] left-[11px] [font-family:Gabarito] font-normal font-normal text-black text-[20px] tracking-[0] leading-[normal]">
						Court lines:
					</div>
					<img
						className="w-[131px] h-[23px] top-[10px] absolute left-[195px]"
						alt="Group"
						src="https://c.animaapp.com/hlTEJy6F/img/group-1@2x.png"
					/>
					<img
						className="w-[131px] h-[23px] top-[56px] absolute left-[195px]"
						alt="Group"
						src="https://c.animaapp.com/hlTEJy6F/img/group-2@2x.png"
					/>
					<img
						className="w-[131px] h-[24px] top-[154px] absolute left-[195px]"
						alt="Group"
						src="https://c.animaapp.com/hlTEJy6F/img/group-4@2x.png"
					/>
					<img
						className="w-[104px] h-[24px] top-[104px] absolute left-[195px]"
						alt="Group"
						src="https://c.animaapp.com/hlTEJy6F/img/group-3@2x.png"
					/>
					<img
						className="absolute w-[23px] h-[23px] top-[105px] left-[303px]"
						alt="Star"
						src="https://c.animaapp.com/hlTEJy6F/img/star-5.svg"
					/>

					<div className="top-[12px] absolute w-[32px] h-[40px] left-[152px] [font-family:Gabarito] font-bold font-bold text-black text-[20px] text-center tracking-[0] leading-[normal]">
						{courtRatings["night_lighting"]}
					</div>
					<div className="top-[58px] absolute w-[32px] h-[40px] left-[152px] [font-family:Gabarito] font-bold font-bold text-black text-[20px] text-center tracking-[0] leading-[normal]">
						{courtRatings["court_lines"]}
					</div>
					<div className="top-[107px] absolute w-[32px] h-[40px] left-[152px] [font-family:Gabarito] font-bold font-bold text-black text-[20px] text-center tracking-[0] leading-[normal]">
						{courtRatings["court_surface"]}
					</div>
					<div className="top-[155px] absolute w-[32px] h-[40px] left-[152px] [font-family:Gabarito] font-bold font-bold text-black text-[20px] text-center tracking-[0] leading-[normal]">
						{courtRatings["court_net"]}
					</div>
					<p className="absolute w-[354px] h-[23px] top-[195px] left-0 [font-family:Gabarito] font-normal text-[#0000004a] text-[15px] text-center tracking-[0] leading-[normal]">
						Based on user reviews. You will be able to review this
						complex after you have finished a game here.
					</p>
				</div>

				<div className="absolute w-[311px] top-[425px] left-[40px] [font-family:Gabarito] font-bold text-black text-[20px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
					Select a Court
				</div>
				<div className="absolute w-[295px] h-[39px] top-[439px] left-[48px] rounded-[20px]">
					<div
						className="absolute w-[295px] h-[39px] top-[20px] pt-[5px] text-white text-center absolute [font-family:'Gabarito-Regular',Helvetica] font-normal text-[20px] tracking-[0] leading-[normal] bg-[#0f6e42] border-2 border-solid border-[#053f24] rounded-[20px] hover:bg-[#06492a]"
						onClick={navigateToPottruckQueue}>
						Court A
					</div>
				</div>

				<NavbarPlay></NavbarPlay>
			</div>
		</div>
	);
};

export default Pottruck;
