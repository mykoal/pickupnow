import React, { useState } from "react";
import { Pin } from "../Components/Pin";
import { NavbarPlay } from "../Components/NavbarPlay";
import { useNavigate } from "react-router-dom";

const PlayScreen = () => {
	const savedCourts = JSON.parse(localStorage.getItem("saved_Courts"));
	const courts = ["Markwood", "Pottruck", "Palestra", "Samson"];
	const [searchQuery, setSearchQuery] = useState("");
	const [filteredCourts, setFilteredCourts] = useState([]);
	const [isFocused, setIsFocused] = useState(false);

	let navigate = useNavigate();
	const navigateToHandler = (e, court) => {
		navigate("/" + court.toLowerCase());
		e.preventDefault();
	};
	const navigateToMarkwood = () => {
		navigate("/markwood"); // '/markwood' is the path to your new screen
	};
	const navigateToPottruck = () => {
		navigate("/pottruck"); // '/potruck' is the path to your new screen
	};
	const navigateToSamson = () => {
		navigate("/samson");
	};
	const navigateToPalestra = () => {
		navigate("/palestra");
	};
	const navigateToHome = () => {
		navigate("/home");
	};

	const navigateToCourt = (court) => {
		if (court == "markwood") {
			navigate("/markwood");
		} else if (court == "pottruck") {
			navigate("/pottruck");
		} else if (court == "samson") {
			navigate("/samson");
		} else {
			navigate("/palestra");
		}
	};

	// Function to handle search input changes
	const handleSearchChange = (event) => {
		const query = event.target.value;
		setSearchQuery(query);

		// Filter the courts based on the search query
		const filtered = courts.filter((court) =>
			court.toLowerCase().includes(query.toLowerCase())
		);
		setFilteredCourts(filtered);
	};

	const handleUnsave = (court) => {
		if (court == "markwood") {
			savedCourts.markwood = false;
			localStorage.setItem("saved_Courts", JSON.stringify(savedCourts));
		} else if (court == "pottruck") {
			savedCourts.pottruck = false;
			localStorage.setItem("saved_Courts", JSON.stringify(savedCourts));
		} else if (court == "samson") {
			savedCourts.samson = false;
			localStorage.setItem("saved_Courts", JSON.stringify(savedCourts));
		} else {
			savedCourts.palestra = false;
			localStorage.setItem("saved_Courts", JSON.stringify(savedCourts));
		}
		window.location.reload(false);
	};

	return (
		<div className="bg-white flex flex-row justify-center w-full">
			<div className="bg-white overflow-hidden w-[393px] h-[852px] relative">
				{!isFocused && (
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
							onClick={navigateToPottruck}
							title="Potruck Gymnasium">
							<Pin />
						</div>
					</div>
				)}
				<div className="absolute w-[200px] top-[94px] left-[13px] [font-family:Gabarito] font-bold text-black text-[35px] tracking-[0] leading-[normal]">
					Find A Court
				</div>
				<div className="absolute w-[360px] h-[60px] top-[154px] left-[17px]">
					<input
						type="text"
						placeholder="Search here..."
						value={searchQuery}
						onChange={handleSearchChange}
						onFocus={() => setIsFocused(true)}
						onBlur={() => {
							setTimeout(() => setIsFocused(false), 200);
						}}
						className="placeholder:text-[#0000004a] [font-family:Gabarito] hover:bg-[#cfe5c7] w-[200px] h-[55px] ml-[15px] bg-[#f3fbef] rounded-[15px] border-2 border-solid border-[#8db580] p-2"
					/>

					{isFocused && searchQuery && (
						<div className="results-container">
							{filteredCourts.map((court, index) => {
								return (
									<div
										key={index}
										className="search-result"
										onClick={(e) => {
											navigateToHandler(e, court);
										}}>
										{court}
									</div>
								);
							})}
						</div>
					)}
					<div className="absolute w-[55px] top-0 left-[240px] [font-family:Gabarito] font-normal text-black text-[20px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
						Sport
					</div>
					<div className="absolute w-[55px] top-0 left-[305px] [font-family:Gabarito] font-normal text-black text-[20px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
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

				{!isFocused && (
					<span>
						<div className="absolute w-[311px] top-[506px] left-[35px] [font-family:Gabarito] font-bold text-black text-[20px] tracking-[0] leading-[normal] whitespace-nowrap">
							Saved Complexes:
						</div>

						<img
							className="top-[545px] absolute w-[329px] left-[32px] object-cover"
							alt="Line"
							src="https://c.animaapp.com/q1G78Bfk/img/line-1.svg"
						/>
					</span>
				)}

				{!isFocused && (
					<ul className="absolute w-[329px] top-[549px] left-[32px]">
						{Object.keys(savedCourts).map((court) => {
							if (savedCourts[court]) {
								let courtName = "";
								switch (court) {
									case "markwood":
										courtName = "Markwood Playground";
										break;
									case "pottruck":
										courtName = "Pottruck Gymnasium";
										break;
									case "samson":
										courtName = "Samson Courts";
										break;
									case "palestra":
										courtName = "The Palestra";
										break;
									default:
										courtName = court;
								}
								return (
									<li key={court}>
										<div className="flex">
											<p
												className="w-[329px] h-[40px] rounded-[15px] hover:bg-[#f4f4f4] left-[32px] pt-[5px] pl-[7px] [font-family:Gabarito] font-normal text-black text-[20px]"
												onClick={() =>
													navigateToCourt(court)
												}>
												{courtName}
											</p>
											<img
												className="hover:w-[23px] hover:h-[23px] w-[20px] h-[20px] left-[200px] mt-[8px] object-cover z-[999]"
												alt="save"
												onClick={() =>
													handleUnsave(court)
												}
												src="https://c.animaapp.com/q1G78Bfk/img/image-19@2x.png"
											/>
										</div>
										<img
											className="w-[329px] left-[32px] my-[5px] object-cover"
											alt="Line"
											src="https://c.animaapp.com/q1G78Bfk/img/line-1.svg"
										/>
									</li>
								);
							}
						})}
					</ul>
				)}
				<div
					className="absolute w-[38px] h-[38px] top-[94px] left-[327px] bg-[url(./backarrow.svg)] hover:brightness-75"
					onClick={navigateToHome}></div>
			</div>
		</div>
	);
};

export default PlayScreen;
