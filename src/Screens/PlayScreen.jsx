import React from "react";
import { Pin } from "../Components/Pin";
import { NavbarPlay } from "../Components/NavbarPlay";
import { useNavigate } from "react-router-dom";

const PlayScreen = () => {
	let navigate = useNavigate();
	const navigateToMarkwood = () => {
		navigate("/markwood"); // '/markwood' is the path to your new screen
	};
	const navigateToPotruck = () => {
		navigate("/pottruck"); // '/potruck' is the path to your new screen
	};
	const navigateToSamson = () => {
		navigate("/samson"); // '/potruck' is the path to your new screen
	};
	const navigateToPalestra = () => {
		navigate("/palestra"); // '/potruck' is the path to your new screen
	};
	const navigateToHome = () => {
		navigate("/"); // '/potruck' is the path to your new screen
	};

	return (
		<div className="bg-white flex flex-row justify-center w-full">
			<div className="bg-white overflow-hidden w-[393px] h-[852px] relative">
				<div className="absolute w-[329px] h-[247px] top-[233px] left-[32px] bg-[url(./map.png)] bg-cover bg-[50%_50%]">
					<div
						className="!absolute !left-[229px] !top-[193px]"
						onClick={navigateToMarkwood}
						title="Markwood Courts">
						<Pin />
					</div>
					<div
						className="!absolute !left-[301px] !top-[124px]"
						onClick={navigateToSamson}
						title="Samson Courts">
						<Pin />
					</div>
					<div
						className="!absolute !left-[153px] !top-[124px]"
						onClick={navigateToPalestra}
						title="The Palestra">
						<Pin />
					</div>
					<div
						className="!absolute !left-[23px] !top-[64px]"
						onClick={navigateToPotruck}
						title="Potruck Gymnasium">
						<Pin />
					</div>
				</div>
				<div className="absolute w-[200px] top-[94px] left-[13px] [font-family:Gabarito] font-bold text-black text-[35px] tracking-[0] leading-[normal]">
					Find A Court
				</div>
				<div className="absolute w-[360px] h-[60px] top-[154px] left-[17px]">
					<div className="absolute w-[220px] h-[55px] top-[5px] left-3 bg-[#f3fbef] rounded-[15px] border-2 border-solid border-[#8db580]" />
					<div className="absolute w-[332px] top-[19px] left-[24px] [font-family:'Gabarito',Helvetica] font-normal text-slate-300	 text-[20px] tracking-[0] leading-[normal]">
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
				<div className="absolute w-[311px] top-[506px] left-[35px] [font-family:'Gabarito',Helvetica] font-bold text-black text-[20px] tracking-[0] leading-[normal] whitespace-nowrap">
					Saved Complexes:
				</div>
				<img
					className="top-[559px] absolute w-[20px] h-[20px] left-[332px] object-cover"
					src="https://c.animaapp.com/q1G78Bfk/img/image-19@2x.png"
				/>
				<img
					className="top-[608px] absolute w-[20px] h-[20px] left-[332px] object-cover"
					src="https://c.animaapp.com/q1G78Bfk/img/image-19@2x.png"
				/>
				<p
					className="absolute w-[253px] h-[40px] top-[556px] left-[35px] [font-family:'Gabarito',Helvetica] font-normal text-black text-[20px] tracking-[0] leading-[normal]"
					onClick={navigateToMarkwood}>
					Markwood Playground
				</p>
				<p
					className="absolute w-[253px] h-[40px] top-[605px] left-[35px] [font-family:'Gabarito',Helvetica] font-normal text-black text-[20px] tracking-[0] leading-[normal]"
					onClick={navigateToPotruck}>
					Potruck Gymnasium
				</p>
				<img
					className="top-[545px] absolute w-[329px] h-px left-[32px] object-cover"
					alt="Line"
					src="https://c.animaapp.com/q1G78Bfk/img/line-1.svg"
				/>
				<img
					className="top-[593px] absolute w-[329px] h-px left-[32px] object-cover"
					alt="Line"
					src="https://c.animaapp.com/q1G78Bfk/img/line-1.svg"
				/>
				<div
					className="absolute w-[38px] h-[38px] top-[94px] left-[327px] bg-[url(./backarrow.svg)] hover:brightness-75"
					onClick={navigateToHome}></div>
			</div>
		</div>
	);
};

export default PlayScreen;
