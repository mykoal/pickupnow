import React, { useState, useEffect } from "react";
import { NavbarSettings } from "../Components/NavbarSettings";
import { useNavigate } from "react-router-dom";
import ProfileIcon from "../Components/ProfileIcon";

const SettingsScreen = () => {
	// Set initial state based on local storage or default values
	// const storedUserData = JSON.parse(localStorage.getItem("userData")) || {};
	// const [name, setName] = useState(storedUserData.name || "");
	// const [distance, setDistance] = useState(
	// 	storedUserData.distance || "1 Mile"
	// );
	// const [age, setAge] = useState(storedUserData.age || "");
	// const [location, setLocation] = useState(storedUserData.location || "");
	// const [sport, setSport] = useState(storedUserData.sports || "");
	// const [skillLevel, setSkillLevel] = useState(storedUserData.level || "");

	const userData = JSON.parse(localStorage.getItem("currentUser"));
	var sportsParsed = userData.sport.replace(/[^\w\s\'\, ]/g, "");
	var sports = sportsParsed.replace(/[, ]/g, ", ");
	var langParsed = userData.language.replace(/[^\w\s\'\, ]/g, "");
	var languages = langParsed.replace(/[, ]/g, ", ");

	// const handleDistanceChange = (e) => {
	// 	const newDistance = e.target.value;
	// 	setDistance(newDistance);
	// 	localStorage.setItem("distance", newDistance); // Store the new distance in local storage
	// };

	let navigate = useNavigate();
	const navigateToEdit = () => {
		navigate("/settings/edit");
	};
	const navigateToHome = () => {
		navigate("/home");
	};

	return (
		<div className="bg-white flex flex-row justify-center w-full">
			<div className="bg-white overflow-hidden w-[393px] h-[852px] relative">
				<NavbarSettings></NavbarSettings>
				<div className="absolute w-[300px] top-[94px] left-[13px] [font-family:Gabarito] font-bold text-black text-[35px] tracking-[0] leading-[normal]">
					Your Profile
				</div>
				<div
					className="absolute w-[38px] h-[38px] top-[94px] left-[327px] bg-[url(./backarrow.svg)] hover:brightness-75"
					onClick={navigateToHome}></div>
				<div className="absolute w-[216px] h-[197px] top-[209px] left-[89px] bg-[#0f6e42] rounded-[30px]">
					<ProfileIcon
						className="absolute w-[160px] h-[160px] top-[18px] left-[28px]"
						fillColor="#F2FBEF"
					/>
				</div>
				<div className="absolute w-[300px] h-[40px] top-[419px] left-[65px]">
					<div className="absolute w-[263px] h-[40px] top-0 left-0 [font-family:Gabarito] font-bold text-black text-[28px] text-center tracking-[0] leading-[normal]">
						{userData.name}
					</div>
					{/* <div className="absolute w-[38px] h-[38px] top-[2px] left-[262px] bg-[#f3fbef] rounded-[10px] border-2 border-solid border-[#0f6e42] hover:bg-[#2e9b68]" /> */}
					<img
						className="absolute w-[38px] h-[38px] top-0 left-[265px]  bg-[#f3fbef] rounded-[10px] border-2 border-solid border-[#0f6e42] hover:brightness-75"
						alt="Edit"
						src="https://c.animaapp.com/VbJ8MAbM/img/frame-2.svg"
						onClick={navigateToEdit}
					/>
				</div>
				<div className="absolute w-[90px] h-[50px] top-[473px] left-[23px] bg-[#f3fbef] rounded-[15px_0px_0px_0px] border-2 border-solid border-[#0f6e42]">
					<div className="absolute w-[37px] h-[40px] top-[10px] left-[41px] [font-family:Gabarito] font-normal text-black text-[20px] text-center tracking-[0] leading-[normal]">
						{userData.age}
					</div>
					<img
						className="absolute w-[24px] h-[23px] top-[10px] left-[15px]"
						alt="Age"
						src="https://c.animaapp.com/VbJ8MAbM/img/vector-3.svg"
					/>
				</div>
				<div className="absolute w-[255px] h-[50px] top-[473px] left-[113px] bg-[#f3fbef] rounded-[0px_15px_0px_0px] border-t-2 [border-top-style:solid] border-r-2 [border-right-style:solid] border-b-2 [border-bottom-style:solid] border-[#0f6e42]">
					<img
						className="absolute w-[26px] h-[25px] top-[11px] left-[12px]"
						alt="Skill"
						src="https://c.animaapp.com/HQ5f18LY/img/frame-1.svg"
					/>
					<div className="absolute w-[210px] h-[40px] top-[10px] left-[47px] [font-family:Gabarito] font-normal text-black text-[20px] tracking-[0] leading-[normal]">
						{userData.level == "Level1" && "Novice"}
						{userData.level == "Level2" && "Intermediate"}
						{userData.level == "Level3" && "Advance"}
					</div>
				</div>
				<div className="absolute w-[345px] h-[50px] top-[523px] left-[23px] bg-[#f3fbef] border-r-2 [border-right-style:solid] border-b-2 [border-bottom-style:solid] border-l-2 [border-left-style:solid] border-[#0f6e42]">
					<img
						className="absolute w-[16px] h-[23px] top-[11px] left-[18px]"
						alt="Location"
						src="https://c.animaapp.com/VbJ8MAbM/img/vector-2.svg"
					/>
					<div className="absolute w-[299px] h-[42px] top-[10px] left-[47px] [font-family:Gabarito] font-normal text-black text-[20px] tracking-[0] leading-[normal]">
						{userData.location}
					</div>
				</div>
				<div className="absolute w-[345px] h-[50px] top-[573px] left-[23px] bg-[#f3fbef] border-r-2 [border-right-style:solid] border-b-2 [border-bottom-style:solid] border-l-2 [border-left-style:solid] border-[#0f6e42]">
					<div className="absolute w-[299px] h-[42px] top-[10px] left-[47px] [font-family:Gabarito] font-normal text-black text-[20px] tracking-[0] leading-[normal]">
						{sports}
					</div>
					<img
						className="absolute w-[23px] h-[23px] top-[11px] left-[15px]"
						alt="Sports"
						src="https://c.animaapp.com/VbJ8MAbM/img/vector-1.svg"
					/>
				</div>
				<div className="absolute w-[345px] h-[50px] top-[623px] left-[23px] bg-[#f3fbef] rounded-[0px_0px_15px_15px] border-r-2 [border-right-style:solid] border-b-2 [border-bottom-style:solid] border-l-2 [border-left-style:solid] border-[#0f6e42]">
					<div className="absolute w-[299px] h-[42px] top-[10px] left-[47px] [font-family:Gabarito] font-normal text-black text-[20px] tracking-[0] leading-[normal]">
						{languages}
					</div>
					<img
						className="absolute w-[22px] h-[22px] top-[11px] left-[15px]"
						alt="Language"
						src="https://c.animaapp.com/VbJ8MAbM/img/frame-1.svg"
					/>
				</div>
			</div>
		</div>
	);
};

export default SettingsScreen;
