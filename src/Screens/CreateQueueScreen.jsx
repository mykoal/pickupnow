import React, { useState, useEffect } from "react";
import { NavbarPlay } from "../Components/NavbarPlay";
import { addToQueue, initializeQueue } from "../queueService";
import { useLocation, useNavigate } from "react-router-dom";

const CreateQueueScreen = () => {
	const SkillButtons = () => (
		<div>
			<button
				className={`${
					skillLevels === "Level1"
						? "absolute w-[97px] h-[49px] top-[413px] left-[30px] bg-[#aad396] rounded-[20px] border-2 border-solid border-[#8db580] hover:bg-[#aad396] active:bg-[#aad396] focus:bg-[#aad396]"
						: "absolute w-[97px] h-[49px] top-[413px] left-[30px] bg-[#f3fbef] rounded-[20px] border-2 border-solid border-[#8db580] hover:bg-[#aad396] active:bg-[#aad396] focus:bg-[#aad396]"
				}`}
				onClick={(event) => handleSkillLevelChange(event, "Level1")}>
				<img
					className="absolute w-[40px] h-[40px] top-[6px] left-[26px]"
					alt="Level1"
					src="https://c.animaapp.com/HQ5f18LY/img/frame-3.svg"
				/>
			</button>
			<button
				className={`${
					skillLevels === "Level2"
						? "absolute w-[97px] h-[49px] top-[413px] left-[150px] bg-[#aad396] rounded-[20px] border-2 border-solid border-[#8db580] hover:bg-[#aad396] active:bg-[#aad396] focus:bg-[#aad396]"
						: "absolute w-[97px] h-[49px] top-[413px] left-[150px] bg-[#f3fbef] rounded-[20px] border-2 border-solid border-[#8db580] hover:bg-[#aad396] active:bg-[#aad396] focus:bg-[#aad396]"
				}`}
				onClick={(event) => handleSkillLevelChange(event, "Level2")}>
				<img
					className="absolute w-[40px] h-[40px] top-[3px] left-[24px]"
					alt="Level2"
					src="https://c.animaapp.com/HQ5f18LY/img/frame-2.svg"
				/>
			</button>
			<button
				className={`${
					skillLevels === "Level3"
						? "absolute w-[97px] h-[49px] top-[413px] left-[270px] bg-[#aad396] rounded-[20px] border-2 border-solid border-[#8db580] hover:bg-[#aad396] active:bg-[#aad396] focus:bg-[#aad396]"
						: "absolute w-[97px] h-[49px] top-[413px] left-[270px] bg-[#f3fbef] rounded-[20px] border-2 border-solid border-[#8db580] hover:bg-[#aad396] active:bg-[#aad396] focus:bg-[#aad396]"
				}`}
				onClick={(event) => handleSkillLevelChange(event, "Level3")}>
				<img
					className="absolute w-[40px] h-[40px] top-[3px] left-[27px]"
					alt="Level3"
					src="https://c.animaapp.com/HQ5f18LY/img/frame-1.svg"
				/>
			</button>
		</div>
	);

	const CourtIcon = ({ className, alt, isSelected }) => (
		<div>
			<img
				className={className}
				alt={alt}
				src={`${
					isSelected
						? "https://c.animaapp.com/HQ5f18LY/img/group-6@2x.png"
						: "https://c.animaapp.com/HQ5f18LY/img/group-7@2x.png"
				}`}
			/>
		</div>
	);

	let location = useLocation();
	// When you first get the court name
	localStorage.setItem("courtName", location.state);

	// In CreateQueueScreen
	let courtName = localStorage.getItem("courtName");

	const [selectedCourt, setSelectedCourt] = useState("");
	const [skillLevels, setSkillLevels] = useState("");
	const [language, setPreferredLanguage] = useState("");
	let navigate = useNavigate();

	const navigateToQueueTest = () => {
		navigate("/x"); // '/create_queue' is the path to your new screen
	};

	const navigateToQueueScreen = () => {
		navigate("/queue"); // '/create_queue' is the path to your new screen
	};

	const handleCourtChange = (court) => {
		setSelectedCourt(court);
	};

	const handleSkillLevelChange = (event, level) => {
		event.preventDefault();
		setSkillLevels(level);
	};

	const handleLanguageChange = (e) => {
		const newLangauge = e.target.value;
		setPreferredLanguage(newLangauge);
	};
	const handleSubmit = (e) => {
		e.preventDefault();

		console.log("Form submitted:", {
			selectedCourt,
			skillLevels,
			language,
			courtName,
		});
		navigateToQueueTest();
		// For example, you can make an API call here or update state in a parent component.
	};

	return (
		<div className="bg-white flex flex-row justify-center w-full">
			<div className="bg-white overflow-hidden w-[393px] h-[852px] relative">
				<div className="absolute w-[291px] h-[49px] top-[114px] left-[53px]">
					<div className="absolute w-[269px] h-[49px] top-0 left-[13px] [font-family:'Gabarito',Helvetica] font-bold text-black text-[20px] text-center tracking-[0] leading-[normal]">
						Join A Queue:
					</div>
				</div>
				<NavbarPlay></NavbarPlay>

				<form
					id="createQueue"
					className="relative"
					onSubmit={handleSubmit}>
					{/* Court Selection - Radio Buttons */}
					<div className="absolute w-[337px] h-[155px] top-[197px] left-[27px] bg-[#f3fbef] rounded-[15px] border-2 border-solid border-[#0f6e42]">
						<label className="court-radio">
							<input
								className="absolute w-[30px] h-[30px] top-[70px] left-[50px]"
								type="radio"
								name="court"
								value="CourtA"
								checked={selectedCourt === "CourtA"}
								onChange={() => handleCourtChange("CourtA")}
								required
							/>
							<CourtIcon
								className="absolute w-[48px] h-[48px] top-[10px] left-[42px]"
								alt="CourtA"
								isSelected={selectedCourt === "CourtA"}
							/>

							<p className="absolute top-[110px] left-[40px] [font-family:'Gabarito',Helvetica]">
								Court A
							</p>
						</label>
						<label className="court-radio">
							<input
								className="absolute w-[30px] h-[30px] top-[70px] left-[239px]"
								type="radio"
								name="court"
								value="CourtC"
								checked={selectedCourt === "CourtC"}
								onChange={() => handleCourtChange("CourtC")}
							/>
							<CourtIcon
								className="absolute w-[48px] h-[48px] top-[10px] left-[231px]"
								alt="CourtC"
								isSelected={selectedCourt === "CourtC"}
							/>
							<p className="absolute top-[110px] left-[229px] [font-family:'Gabarito',Helvetica]">
								Court C
							</p>
						</label>
						<label className="court-radio">
							<input
								className="absolute w-[30px] h-[30px] top-[70px] left-[152px]"
								type="radio"
								name="court"
								value="CourtB"
								checked={selectedCourt === "CourtB"}
								onChange={() => handleCourtChange("CourtB")}
							/>
							<CourtIcon
								className="absolute w-[48px] h-[48px] top-[10px] left-[143px]"
								alt="CourtB"
								isSelected={selectedCourt === "CourtB"}
							/>
							<p className="absolute top-[110px] left-[133px] [font-family:'Gabarito',Helvetica]">
								Court B
							</p>
						</label>
						{/* Repeat similar labels and inputs for CourtB and CourtC */}
					</div>

					{/* Skill Level Selection - Checkboxes */}
					<p className="absolute w-[319px] top-[381px] left-[30px] [font-family:'Gabarito',Helvetica] font-normal text-black text-[20px] tracking-[0] leading-[normal] whitespace-nowrap">
						Preferred Skill Level For Teammate
					</p>
					<SkillButtons></SkillButtons>

					{/* Language Selection - Dropdown */}
					<div>
						<div className="absolute w-[334px] top-[491px] left-[29px] [font-family:'Gabarito',Helvetica] font-normal text-black text-[20px] tracking-[0] leading-[normal] whitespace-nowrap ">
							Preferred Languages For Teammate
						</div>
						<div>
							<select
								className="text-center absolute w-[337px] h-[49px] top-[523px] left-[29px] bg-[#f3fbef] rounded-[20px] border-2 border-solid border-[#8db580] [font-family:Gabarito]"
								value={language} // Add this line
								onChange={handleLanguageChange}>
								<option value="English">English</option>
								<option value="Spanish">Spanish</option>
								<option value="Mandarin">Mandarin</option>
							</select>
						</div>
					</div>

					{/* Submit Button */}
					<div className="absolute w-[295px] h-[39px] top-[602px] left-[52px] rounded-[20px]">
						<div className="absolute w-[295px] h-[39px] top-0 left-0 bg-[#0f6e42] rounded-[20px]" />
						<div className="absolute w-[295px] h-[39px] top-0 left-0 bg-[#0f6e42] rounded-[20px]" />
						<button
							type="submit"
							className="absolute w-[291px] top-[6px] left-[4px] [font-family:'Gabarito',Helvetica] font-normal text-[#f3fbef] text-[20px] text-center tracking-[0] leading-[normal]">
							JOIN QUEUE
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default CreateQueueScreen;
