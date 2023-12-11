import React, { useState, useEffect } from "react";
import { NavbarSettings } from "../Components/NavbarSettings";
import { useNavigate } from "react-router-dom";

const EditScreen = () => {
	const [age, setAge] = useState("");
	const [languages, setLanguages] = useState([]);
	const [location, setLocation] = useState("");
	const [skillLevel, setSkillLevel] = useState("");
	const [sports, setSports] = useState([]);

	const user = JSON.parse(localStorage.getItem("currentUser"));

	const SkillButtons = () => (
		<div className="flex flex row">
			<button
				className={`${
					skillLevel === "Level1"
						? "basis-1/3 h-[49px]  mr-[5px] bg-[#aad396] rounded-[20px] border-2 border-solid border-[#0f6e42] hover:bg-[#78af5f] active:bg-[#78af5f] focus:bg-[#78af5f]"
						: "basis-1/3 h-[49px] mr-[5px] bg-[#F2FBEF] rounded-[20px] border-2 border-solid border-[#0f6e42] hover:bg-[#cfe5c7] active:bg-[#cfe5c7] focus:bg-[#cfe5c7]"
				}`}
				onClick={(event) => handleSkillLevelChange(event, "Level1")}>
				<img
					className=" w-[40px] h-[40px] ml-[35px] "
					alt="Level1"
					src="https://c.animaapp.com/HQ5f18LY/img/frame-3.svg"
				/>
			</button>
			<button
				className={`${
					skillLevel === "Level2"
						? "basis-1/3 h-[49px]  mr-[5px] bg-[#aad396] rounded-[20px] border-2 border-solid border-[#0f6e42] hover:bg-[#78af5f] active:bg-[#78af5f] focus:bg-[#78af5f]"
						: "basis-1/3 h-[49px]  mr-[5px] bg-[#F2FBEF] rounded-[20px] border-2 border-solid border-[#0f6e42] hover:bg-[#cfe5c7] active:bg-[#cfe5c7] focus:bg-[#cfe5c7]"
				}`}
				onClick={(event) => handleSkillLevelChange(event, "Level2")}>
				<img
					className=" w-[40px] h-[40px]  ml-[35px]"
					alt="Level2"
					src="https://c.animaapp.com/HQ5f18LY/img/frame-2.svg"
				/>
			</button>
			<button
				className={`${
					skillLevel === "Level3"
						? "basis-1/3 h-[49px] mr-[5px] bg-[#aad396] rounded-[20px] border-2 border-solid border-[#0f6e42] hover:bg-[#78af5f] active:bg-[#78af5f] focus:bg-[#78af5f]"
						: "basis-1/3 h-[49px] mr-[5px] bg-[#F2FBEF] rounded-[20px] border-2 border-solid border-[#0f6e42] hover:bg-[#cfe5c7] active:bg-[#cfe5c7] focus:bg-[#cfe5c7]"
				}`}
				onClick={(event) => handleSkillLevelChange(event, "Level3")}>
				<img
					className="w-[40px] h-[40px]  ml-[35px]"
					alt="Level3"
					src="https://c.animaapp.com/HQ5f18LY/img/frame-1.svg"
				/>
			</button>
		</div>
	);

	const handleAgeChange = (event) => {
		setAge(event.target.value);
	};

	const handleLanguageChange = (event) => {
		const { value } = event.target;
		if (languages.includes(value)) {
			setLanguages(languages.filter((language) => language !== value));
		} else {
			setLanguages([...languages, value]);
		}
	};

	const handleSportsChange = (event) => {
		const { value } = event.target;
		if (sports.includes(value)) {
			setSports(sports.filter((sport) => sport !== value));
		} else {
			setSports([...sports, value]);
		}
	};

	const handleLocationChange = (event) => {
		setLocation(event.target.value);
	};

	const handleSkillLevelChange = (event, level) => {
		event.preventDefault();
		if (skillLevel != level) {
			setSkillLevel(level);
		} else {
			setSkillLevel("NONE");
		}
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		user.age = age;
		user.language = JSON.stringify(languages);
		user.sport = JSON.stringify(sports);
		user.level = skillLevel;
		user.location = location;
		localStorage.setItem("currentUser", JSON.stringify(user));
		navigate("/settings");
	};

	let navigate = useNavigate();
	const navigateToSettings = () => {
		navigate("/settings");
	};

	return (
		<div className="bg-white flex flex-row justify-center w-full">
			<div className="bg-white overflow-hidden w-[393px] h-[852px] relative">
				<NavbarSettings></NavbarSettings>
				<div className="absolute w-[300px] top-[94px] left-[13px] [font-family:Gabarito] font-bold text-black text-[35px] tracking-[0] leading-[normal]">
					Update Profile
				</div>
				<div
					className="absolute w-[38px] h-[38px] top-[94px] left-[327px] bg-[url(./backarrow.svg)] hover:brightness-75"
					onClick={navigateToSettings}></div>
				<form
					onSubmit={handleSubmit}
					className="absolute top-[168px] left-[28px] font-[Gabarito] text-[20px]">
					<label htmlFor="age">
						<b>Age:</b>
					</label>
					<br />
					<select
						required
						selected
						id="age"
						name="age"
						value={age}
						onChange={handleAgeChange}
						className="w-[354px] h-[50px] px-[8px] bg-[#F2FBEF] rounded-[15px] invalid:text-[#0000004a] text-[#0f6e42] border-2 border-solid border-[#0f6e42] hover:bg-[#cfe5c7] ">
						<option value="">Please choose an age range</option>
						<option value="18+">18+</option>
						<option value="25+">25+</option>
						<option value="35+">35+</option>
						<option value="45+">45+</option>
						<option value="55+">55+</option>
					</select>
					<br />
					<br />
					<label htmlFor="languages">
						<b>Preferred Languages:</b>
					</label>
					<br />

					<div className="flex flex-row w-[360px]">
						<div
							className={`${
								languages.includes("English")
									? "basis-1/3 mr-[5px] pt-[5px] h-[50px] bg-[#aad396] rounded-[20px] border-2 border-solid border-[#0f6e42] hover:bg-[#78af5f]"
									: "basis-1/3 mr-[5px] pt-[5px] h-[50px] bg-[#F2FBEF] rounded-[20px] border-2 border-solid border-[#0f6e42] hover:bg-[#cfe5c7]"
							}`}>
							<input
								type="checkbox"
								id="English"
								name="languages"
								value="English"
								checked={languages.includes("English")}
								onChange={handleLanguageChange}
								className="absolute accent-[#0f6e42] ml-[9px] mt-[10px]"
							/>
							<label
								htmlFor="English"
								className="pl-[25px] pr-[15px] py-[15px] text-center ">
								English
							</label>
						</div>

						<div
							className={`${
								languages.includes("Spanish")
									? "basis-1/3 mr-[5px] pt-[5px] h-[50px] bg-[#aad396] rounded-[20px] border-2 border-solid border-[#0f6e42] hover:bg-[#78af5f]"
									: "basis-1/3 mr-[5px] pt-[5px] h-[50px] bg-[#F2FBEF] rounded-[20px] border-2 border-solid border-[#0f6e42] hover:bg-[#cfe5c7]"
							}`}>
							<input
								type="checkbox"
								id="Spanish"
								name="languages"
								value="Spanish"
								checked={languages.includes("Spanish")}
								onChange={handleLanguageChange}
								className="absolute accent-[#0f6e42] ml-[9px] mt-[10px]"
							/>
							<label
								htmlFor="Spanish"
								className="pl-[25px] pr-[15px] py-[15px] text-center ">
								Spanish
							</label>
						</div>

						<div
							className={`${
								languages.includes("Mandarin")
									? "basis-1/3 mr-[5px] pt-[5px] h-[50px] bg-[#aad396] rounded-[20px] border-2 border-solid border-[#0f6e42] hover:bg-[#78af5f]"
									: "basis-1/3 mr-[5px] pt-[5px] h-[50px] bg-[#F2FBEF] rounded-[20px] border-2 border-solid border-[#0f6e42] hover:bg-[#cfe5c7]"
							}`}>
							<input
								type="checkbox"
								id="Mandarin"
								name="languages"
								value="Mandarin"
								checked={languages.includes("Mandarin")}
								onChange={handleLanguageChange}
								className="absolute accent-[#0f6e42] ml-[9px] mt-[10px]"
							/>
							<label
								htmlFor="Mandarin"
								className="pl-[25px] pr-[15px] py-[15px] text-center ">
								Mandarin
							</label>
						</div>
					</div>

					<br />

					<label htmlFor="location">
						<b>Location:</b>
					</label>
					<br />
					<input
						placeholder="Input your location"
						type="text"
						id="location"
						name="location"
						value={location}
						onChange={handleLocationChange}
						className="placeholder:text-[#0000004a] w-[354px] h-[50px] px-[8px] bg-[#F2FBEF] rounded-[15px]  text-[#0f6e42] border-2 border-solid border-[#0f6e42] "
					/>
					<br />
					<br />

					<label htmlFor="sports">
						<b>Sports:</b>
					</label>
					<div className="flex flex-row w-[360px]">
						<div
							className={`${
								sports.includes("Basketball")
									? "basis-1/3 mr-[5px] pt-[5px] h-[50px] bg-[#aad396] rounded-[20px] border-2 border-solid border-[#0f6e42] hover:bg-[#78af5f]"
									: "basis-1/3 mr-[5px] pt-[5px] h-[50px] bg-[#F2FBEF] rounded-[20px] border-2 border-solid border-[#0f6e42] hover:bg-[#cfe5c7]"
							}`}>
							<input
								type="checkbox"
								id="Basketball"
								name="sports"
								value="Basketball"
								checked={sports.includes("Basketball")}
								onChange={handleSportsChange}
								className="absolute accent-[#0f6e42] ml-[9px] mt-[10px]"
							/>
							<label
								htmlFor="Basketball"
								className="pl-[25px] pr-[10px] py-[15px] text-center ">
								Basketball
							</label>
						</div>

						<div
							className={`${
								sports.includes("Tennis")
									? "basis-1/3 mr-[5px] pt-[5px] h-[50px] bg-[#aad396] rounded-[20px] border-2 border-solid border-[#0f6e42] hover:bg-[#78af5f]"
									: "basis-1/3 mr-[5px] pt-[5px] h-[50px] bg-[#F2FBEF] rounded-[20px] border-2 border-solid border-[#0f6e42] hover:bg-[#cfe5c7]"
							}`}>
							<input
								type="checkbox"
								id="Tennis"
								name="sports"
								value="Tennis"
								checked={sports.includes("Tennis")}
								onChange={handleSportsChange}
								className="absolute accent-[#0f6e42] ml-[9px] mt-[10px]"
							/>
							<label
								htmlFor="Tennis"
								className="pl-[25px] pr-[15px] py-[15px] text-center ">
								Tennis
							</label>
						</div>

						<div
							className={`${
								sports.includes("Pickleball")
									? "basis-1/3 mr-[5px] pt-[5px] h-[50px] bg-[#aad396] rounded-[20px] border-2 border-solid border-[#0f6e42] hover:bg-[#78af5f]"
									: "basis-1/3 mr-[5px] pt-[5px] h-[50px] bg-[#F2FBEF] rounded-[20px] border-2 border-solid border-[#0f6e42] hover:bg-[#cfe5c7]"
							}`}>
							<input
								type="checkbox"
								id="Pickleball"
								name="sports"
								value="Pickleball"
								checked={sports.includes("Pickleball")}
								onChange={handleSportsChange}
								className="absolute accent-[#0f6e42] ml-[9px] mt-[10px]"
							/>
							<label
								htmlFor="Pickleball"
								className="pl-[25px] pr-[10px] py-[15px] text-center ">
								Pickleball
							</label>
						</div>
					</div>
					<br />

					<label htmlFor="skillLevel">
						<b>Skill Level:</b>
					</label>
					<SkillButtons></SkillButtons>

					<button
						type="submit"
						className="w-[280px] h-[39px] mt-[20px] ml-[30px] text-white text-center [font-Gabarito] font-normal text-[20px] tracking-[0] leading-[normal] bg-[#0f6e42] border-2 border-solid border-[#053f24] rounded-[20px] hover:bg-[#06492a]">
						Submit
					</button>
				</form>
			</div>
		</div>
	);
};

export default EditScreen;
