import React from "react";
import { Pin } from "../Components/Pin";
import { NavbarPlay } from "../Components/NavbarPlay";
import { useNavigate } from "react-router-dom";

const PlayScreen = () => {
	let navigate = useNavigate();
	const navigateToMarkwood = () => {
		navigate("/markwood"); // '/markwood' is the path to your new screen
	};

  return (
		<div className="bg-white flex flex-row justify-center w-full">
			<div className="bg-white overflow-hidden w-[393px] h-[852px] relative">
				<div className="absolute w-[329px] h-[247px] top-[213px] left-[32px] bg-[url(./map.png)] bg-cover bg-[50%_50%]">
					<Pin className="!absolute !left-[229px] !top-[193px]" />
					<Pin className="!absolute !left-[301px] !top-[124px]" />
					<Pin className="!absolute !left-[153px] !top-[124px]" />
					<Pin className="!absolute !left-[23px] !top-[64px]" />
				</div>
				<div className="absolute w-[360px] h-[60px] top-[124px] left-[17px]">
					<div className="absolute w-[230px] h-[55px] top-[5px] left-0 bg-[#f3fbef] rounded-[15px] border-2 border-solid border-[#8db580]" />
					<div className="absolute w-[332px] top-[19px] left-[16px] [font-family:'Gabarito',Helvetica] font-normal text-black text-[20px] tracking-[0] leading-[normal]">
						Search
					</div>
					<div className="absolute w-[55px] top-0 left-[240px] [font-family:'Gabarito',Helvetica] font-normal text-black text-[20px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
						Sport
					</div>
					<div className="absolute w-[55px] top-0 left-[305px] [font-family:'Gabarito',Helvetica] font-normal text-black text-[20px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
						Filter
					</div>
					<img
						className="absolute w-[30px] h-[30px] top-[25px] left-[253px]"
						alt="Frame"
						src="https://c.animaapp.com/q1G78Bfk/img/frame-1.svg"
					/>
					<img
						className="absolute w-[30px] h-[30px] top-[25px] left-[318px]"
						alt="Frame"
						src="https://c.animaapp.com/q1G78Bfk/img/frame.svg"
					/>
				</div>
				<NavbarPlay></NavbarPlay>
				<div className="absolute w-[311px] top-[486px] left-[35px] [font-family:'Gabarito',Helvetica] font-bold text-black text-[20px] tracking-[0] leading-[normal] whitespace-nowrap">
					Saved Courts:
				</div>
				<img
					className="top-[539px] absolute w-[20px] h-[20px] left-[332px] object-cover"
					alt="Stuff"
					src="https://c.animaapp.com/q1G78Bfk/img/image-19@2x.png"
				/>
				<img
					className="top-[588px] absolute w-[20px] h-[20px] left-[332px] object-cover"
					alt="Stuff"
					src="https://c.animaapp.com/q1G78Bfk/img/image-19@2x.png"
				/>
				<p className="absolute w-[253px] h-[40px] top-[536px] left-[35px] [font-family:'Gabarito',Helvetica] font-normal text-black text-[20px] tracking-[0] leading-[normal]"
          onClick={navigateToMarkwood}>
					Markwood Playground
				</p>
				<div className="absolute w-[253px] h-[40px] top-[585px] left-[35px] [font-family:'Gabarito',Helvetica] font-normal text-black text-[20px] tracking-[0] leading-[normal]">
					Potruck Gymnasium
				</div>
				<img
					className="top-[525px] absolute w-[329px] h-px left-[32px] object-cover"
					alt="Line"
					src="https://c.animaapp.com/q1G78Bfk/img/line-1.svg"
				/>
				<img
					className="top-[573px] absolute w-[329px] h-px left-[32px] object-cover"
					alt="Line"
					src="https://c.animaapp.com/q1G78Bfk/img/line-1.svg"
				/>
			</div>
		</div>
	);
};

export default PlayScreen;
