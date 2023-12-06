import React from "react";
import { NavbarPlay } from "../Components/NavbarPlay";
import { useNavigate } from "react-router-dom";

const FinishScreen = () => {
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
		navigate("/play");
	};

	const navigateToPottruckQueue = () => {
		navigate("/pottruck_queue");
	};

	return (
		<div className="bg-white flex flex-row justify-center w-full">
			<div className="bg-white w-[394px] h-[852px] relative">
				<div className="absolute w-[300px] top-[94px] left-[13px] [font-family:Gabarito] font-bold text-black text-[35px] tracking-[0] leading-[normal]">
					Finished Game
				</div>
				<div className="absolute w-[354px] h-[61px] top-[165px] left-[19px] bg-[#f3fbef] rounded-[15px] border-2 border-solid border-[#0f6e42]">
					<p className="absolute w-[333px] h-[54px] top-[5px] left-[7px] [font-family:'Gabarito-Regular',Helvetica] font-normal text-black text-[18px] text-center tracking-[0] leading-[normal]">
						Thank you for playing! Please clear the court for the
						next group in queue.
					</p>
				</div>

				<div className="absolute w-[267px] h-[39px] top-[643px] left-[63px] rounded-[20px]">
					<div className="absolute w-[267px] h-[39px] top-0 left-0 bg-[#0f6e42] rounded-[20px] border-2 border-solid border-[#053f24]" />
					<div className="absolute w-[225px] h-[30px] top-[4px] left-[21px] [font-family:'Gabarito-Regular',Helvetica] font-normal text-[#f3fbef] text-[20px] text-center tracking-[0] leading-[normal]">
						Return to Home Screen
					</div>
				</div>
				<p className="absolute w-[264px] h-[23px] top-[547px] left-[65px] [font-family:'Gabarito-Regular',Helvetica] font-normal text-[#0000004a] text-[15px] text-center tracking-[0] leading-[normal]">
					Your Reviews Help Create a More Informed Experience for
					Everyone!
				</p>

				<div className="absolute w-[332px] top-[293px] left-[32px] [font-family:'Gabarito',Helvetica] font-bold text-black text-[20px] text-center tracking-[0] leading-[normal]">
					Review Complex Conditions
				</div>

				<div className="absolute w-[354px] h-[190px] top-[335px] left-[20px]">
					<div className="absolute w-[354px] h-[49px] top-0 left-0 bg-[#f3fbef] rounded-[5px_5px_0px_0px] border-2 border-solid border-[#0f6e42]" />
					<div className="absolute w-[332px] h-[40px] top-px left-[11px] [font-family:'Gabarito',Helvetica] font-normal text-black text-[20px] tracking-[0] leading-[normal]">
						Night Lighting:
					</div>
					<div className="absolute w-[332px] h-[40px] top-px left-[11px] [font-family:'Gabarito',Helvetica] font-normal text-black text-[20px] tracking-[0] leading-[normal]">
						Night Lighting:
					</div>
					<div className="top-[4px] absolute w-[32px] h-[40px] left-[152px] [font-family:'Gabarito',Helvetica] font-bold text-black text-[20px] text-center tracking-[0] leading-[normal]">
						#
					</div>
					<div className="top-[141px] rounded-[0px_0px_5px_5px] absolute w-[354px] h-[49px] left-0 bg-[#f3fbef] border-2 border-solid border-[#0f6e42]" />
					<div className="top-[149px] absolute w-[332px] h-[40px] left-[11px] [font-family:'Gabarito',Helvetica] font-normal text-black text-[20px] tracking-[0] leading-[normal]">
						Court Net:
					</div>
					<div className="top-[94px] absolute w-[354px] h-[49px] left-0 bg-[#f3fbef] border-2 border-solid border-[#0f6e42]" />
					<div className="top-[101px] absolute w-[332px] h-[40px] left-[11px] [font-family:'Gabarito',Helvetica] font-normal text-black text-[20px] tracking-[0] leading-[normal]">
						Court surface:
					</div>
					<div className="top-[47px] absolute w-[354px] h-[49px] left-0 bg-[#f3fbef] border-2 border-solid border-[#0f6e42]" />
					<div className="top-[50px] absolute w-[332px] h-[40px] left-[11px] [font-family:'Gabarito',Helvetica] font-normal text-black text-[20px] tracking-[0] leading-[normal]">
						Court lines:
					</div>
					<img
						className="top-[10px] absolute w-[131px] h-[23px] left-[195px]"
						alt="Group"
						src="https://c.animaapp.com/YZn4B8Kl/img/group-1@2x.png"
					/>
					<div className="top-[56px] absolute w-[131px] h-[23px] left-[195px]">
						<img
							className="left-0 absolute w-[131px] h-[23px] top-0"
							alt="Group"
							src="https://c.animaapp.com/YZn4B8Kl/img/group-1@2x.png"
						/>
					</div>
					<div className="top-[154px] absolute w-[131px] h-[23px] left-[195px]">
						<img
							className="left-0 absolute w-[131px] h-[23px] top-0"
							alt="Group"
							src="https://c.animaapp.com/YZn4B8Kl/img/group-1@2x.png"
						/>
					</div>
					<div className="top-[104px] absolute w-[131px] h-[23px] left-[195px]">
						<img
							className="left-0 absolute w-[131px] h-[23px] top-0"
							alt="Group"
							src="https://c.animaapp.com/YZn4B8Kl/img/group-1@2x.png"
						/>
					</div>
					<div className="top-[51px] absolute w-[32px] h-[40px] left-[152px] [font-family:'Gabarito',Helvetica] font-bold text-black text-[20px] text-center tracking-[0] leading-[normal]">
						#
					</div>
					<div className="top-[98px] absolute w-[32px] h-[40px] left-[152px] [font-family:'Gabarito',Helvetica] font-bold text-black text-[20px] text-center tracking-[0] leading-[normal]">
						#
					</div>
					<div className="top-[145px] absolute w-[32px] h-[40px] left-[152px] [font-family:'Gabarito',Helvetica] font-bold text-black text-[20px] text-center tracking-[0] leading-[normal]">
						#
					</div>
				</div>

				<NavbarPlay></NavbarPlay>
			</div>
		</div>
	);
};

export default FinishScreen;
