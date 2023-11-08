import React from "react";
import { useNavigate } from 'react-router-dom';


export const MainScreen = () => {
	let navigate = useNavigate();
	const navigateToPlay = () => {
	  navigate('/play'); // '/play' is the path to your new screen
	};
	return (
		<div className="bg-white flex flex-row justify-center w-full">
			<div className="bg-white overflow-hidden w-[393px] h-[852px] relative">
				<div className="absolute w-[183px] top-[94px] left-[13px] [font-family:'Gabarito',Helvetica] font-normal text-black text-[35px] tracking-[0] leading-[normal]">
					Hi Michael!
				</div>
				<div className="absolute w-[164px] top-[160px] left-[13px] [font-family:'Gabarito',Helvetica] font-bold text-black text-[20px] tracking-[0] leading-[normal] whitespace-nowrap">
					Current Queues
				</div>
				<div className="absolute w-[354px] h-[98px] top-[192px] left-[19px] bg-[#f3fbef] rounded-[15px] border border-solid border-[#8db580]">
					<div className="absolute w-[209px] h-[39px] top-[49px] left-[73px] rounded-[5px]"
					onClick={navigateToPlay} >
						<div className="absolute w-[209px] h-[39px] top-0 left-0 bg-[#0f6e42] rounded-[5px]" />
						<div className="absolute w-[206px] h-[30px] top-[8px] left-[2px] [font-family:'Gabarito',Helvetica] font-bold text-[#f3fbef] text-[20px] text-center tracking-[0] leading-[normal]">
							Play Now
						</div>
					</div>
					<p className="absolute w-[332px] top-[13px] left-[10px] [font-family:'Gabarito',Helvetica] font-normal text-black text-[20px] text-center tracking-[0] leading-[normal]">
						You aren’t in any queue right now
					</p>
				</div>
				<div className="absolute w-[393px] h-[67px] top-0 left-0 bg-[#f3fbef]">
					<img
						className="absolute w-[171px] h-[38px] top-[14px] left-[13px] object-cover"
						alt="Logo long"
						src="https://c.animaapp.com/Yiudwmn6/img/logo-long-1@2x.png"
					/>
				</div>
				<div className="absolute w-[393px] h-[98px] top-[754px] left-px bg-[#0f6e42]">
					<img
						className="absolute w-[58px] h-[58px] top-[20px] left-[166px]"
						alt="Frame"
						src="https://c.animaapp.com/Yiudwmn6/img/frame.svg"
					/>
					<img
						className="absolute w-[67px] h-[67px] top-[15px] left-[300px]"
						alt="Frame"
						src="https://c.animaapp.com/Yiudwmn6/img/frame-4.svg"
					/>
					<div className="absolute w-[67px] h-[67px] top-[15px] left-[23px] bg-[url(https://c.animaapp.com/Yiudwmn6/img/frame-3.svg)] bg-[100%_100%]">
						<img
							className="absolute w-[67px] h-[67px] top-0 left-0"
							alt="Frame"
							src="https://c.animaapp.com/Yiudwmn6/img/frame-3.svg"
						/>
						<img
							className="absolute w-[67px] h-[67px] top-0 left-0"
							alt="Frame"
							src="https://c.animaapp.com/Yiudwmn6/img/frame-1.svg"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};
