import React, { useState } from "react";
import ReactStars from "react-rating-stars-component";

import { NavbarPlay } from "../Components/NavbarPlay";
import { useNavigate } from "react-router-dom";

export const Markwood = () => {
	const courtRatings = JSON.parse(localStorage.getItem("markwood_Condition"));
	const savedCourts = JSON.parse(localStorage.getItem("saved_Courts"));

	const [saved, setSaved] = useState(savedCourts.markwood);

	const save_button = () => {
		if (!saved) {
			savedCourts.markwood = true;
			localStorage.setItem("saved_Courts", JSON.stringify(savedCourts));
			setSaved(true);
		} else {
			savedCourts.markwood = false;
			localStorage.setItem("saved_Courts", JSON.stringify(savedCourts));
			setSaved(false);
		}
		window.location.reload(false);
	};
	let navigate = useNavigate();

	const navigateToPlay = () => {
		navigate("/play"); // '/potruck' is the path to your new screen
	};
	const navigateToCourtA = () => {
		navigate("/markwood_A"); // '/potruck' is the path to your new screen
	};
	const navigateToCourtB = () => {
		navigate("/markwood_B"); // '/potruck' is the path to your new screen
	};

	const currentQueue = localStorage.getItem("currentQueue");

	return (
		<div className="bg-white flex flex-row justify-center w-full">
			<div className="bg-white w-[394px] h-[852px] relative">
				<div className="absolute w-[300px] top-[94px] left-[13px] [font-family:Gabarito] font-bold text-black text-[35px] tracking-[0] leading-[normal]">
					Markwood
				</div>
				{!saved && (
					<img
						className="absolute hover:w-[25px] hover:h-[31px] hover:top-[101px] w-[23px] h-[29px] top-[102px] left-[190px]"
						alt="Bookmark empty"
						onClick={save_button}
						src="https://c.animaapp.com/cpXmVuHv/img/bookmark-empty@2x.png"
					/>
				)}

				{saved && (
					<img
						className="absolute hover:w-[25px] hover:h-[31px] hover:top-[101px] w-[23px] h-[29px] top-[102px] left-[190px]"
						alt="Bookmark filled"
						onClick={save_button}
						src="https://c.animaapp.com/cpXmVuHv/img/vector.svg"
					/>
				)}
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
						Court Surface:
					</div>
					<div className="top-[47px] absolute w-[354px] h-[49px] left-0 bg-[#f3fbef] border-2 border-solid border-[#0F6E42]" />
					<div className="top-[58px] absolute w-[332px] h-[40px] left-[11px] [font-family:Gabarito] font-normal font-normal text-black text-[20px] tracking-[0] leading-[normal]">
						Court Lines:
					</div>
					<div className="top-[5px] absolute w-[140px] h-[23px] left-[195px]">
						<ReactStars
							count={5}
							size={26}
							isHalf={true}
							color="#D6E3D0"
							activeColor="#FEC700"
							edit={false}
							value={courtRatings.night_lighting}
						/>
					</div>
					<div className="top-[51px] absolute w-[140px] h-[23px] left-[195px]">
						<ReactStars
							count={5}
							size={26}
							isHalf={true}
							color="#D6E3D0"
							activeColor="#FEC700"
							edit={false}
							value={courtRatings.court_lines}
						/>
					</div>
					<div className="top-[99px] absolute w-[140px] h-[23px] left-[195px]">
						<ReactStars
							count={5}
							size={26}
							isHalf={true}
							color="#D6E3D0"
							activeColor="#FEC700"
							edit={false}
							value={courtRatings.court_surface}
						/>
					</div>
					<div className="top-[149px] absolute w-[140px] h-[23px] left-[195px]">
						<ReactStars
							count={5}
							size={26}
							isHalf={true}
							color="#D6E3D0"
							activeColor="#FEC700"
							edit={false}
							value={courtRatings.court_net}
						/>
					</div>

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
					<p className="absolute w-[370px] h-[23px] top-[195px] left-[-5px] [font-family:Gabarito] font-normal text-[#0000004a] text-[15px] text-center tracking-[0] leading-[normal]">
						Based on your previous or other users' reviews. You can
						review this complex every time you finish a game here.
					</p>
				</div>

				<div className="absolute w-[311px] top-[425px] left-[40px] [font-family:Gabarito] font-bold text-black text-[20px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
					Select a Court
				</div>

				<div className="absolute w-[295px] h-[39px] top-[439px] left-[48px] rounded-[20px]">
					{currentQueue != "NONE" && currentQueue != "markwoodA" ? (
						<div className="absolute w-[295px] h-[39px] top-[20px] pt-[5px] text-white text-center absolute [font-family:Gabarito] font-normal text-[20px] tracking-[0] leading-[normal] bg-[#a6a6a6] border-2 border-solid border-[#f3fbef] rounded-[20px] ">
							Leave Current Queue to View
						</div>
					) : (
						<div
							className="absolute w-[295px] h-[39px] top-[20px] pt-[5px] text-white text-center absolute [font-family:Gabarito] font-normal text-[20px] tracking-[0] leading-[normal] bg-[#0f6e42] border-2 border-solid border-[#053f24] rounded-[20px] hover:bg-[#06492a]"
							onClick={navigateToCourtA}>
							Court A
						</div>
					)}
				</div>

				<div className="absolute w-[295px] h-[39px] top-[500px] left-[49px] rounded-[20px]">
					{currentQueue != "NONE" && currentQueue != "markwoodB" ? (
						<div className="absolute w-[295px] h-[39px] top-[20px] pt-[5px] text-white text-center absolute [font-family:Gabarito] font-normal text-[20px] tracking-[0] leading-[normal] bg-[#a6a6a6] border-2 border-solid border-[#f3fbef] rounded-[20px] ">
							Leave Current Queue to View
						</div>
					) : (
						<div
							className="absolute w-[295px] h-[39px] top-[20px] pt-[5px] text-white text-center absolute [font-family:Gabarito] font-normal text-[20px] tracking-[0] leading-[normal] bg-[#0f6e42] border-2 border-solid border-[#053f24] rounded-[20px] hover:bg-[#06492a]"
							onClick={navigateToCourtB}>
							Court B
						</div>
					)}
				</div>
				<NavbarPlay></NavbarPlay>
			</div>
		</div>
	);
};
