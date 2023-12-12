import React, { useState } from "react";
import Icon from "@mdi/react";
import { mdiBasketball, mdiTennisBall } from "@mdi/js";
import { Pin } from "../Components/Pin";
import { NavbarPlay } from "../Components/NavbarPlay";
import { useNavigate } from "react-router-dom";

const PlayScreen = () => {
	const savedCourts = JSON.parse(localStorage.getItem("saved_Courts"));
	const courts = [
		{ name: "Markwood Playground", sport: "Basketball", distance: 10 },
		{ name: "Pottruck Gymnasium", sport: "Basketball", distance: 5 },
		{ name: "Samson Courts", sport: "Tennis", distance: 3 },
		{ name: "The Palestra", sport: "Pickleball", distance: 7 },
	];
	const [searchQuery, setSearchQuery] = useState("");
	const [filteredCourts, setFilteredCourts] = useState([]);
	const [isFocused, setIsFocused] = useState(false);
	const [isOpen, setIsOpen] = useState(false);
	const [selectedSport, setSelectedSport] = useState("");
	const [sortedCourts, setSortedCourts] = useState(
		courts.sort((a, b) => a.distance - b.distance)
	);

	const Court = ({ name, sport, distance }) => (
		<div
			className="hover:bg-[#cfe5c7] w-[200px] h-[55px] ml-[5px] mt-[5px] bg-[#f3fbef] rounded-[15px] border-2 border-solid border-[#8db580] p-2"
			onClick={(e) => {
				navigateToHandler(e, name);
			}}>
			<div className="flex flex-row">
				{sport == "Basketball" && (
					<Icon
						path={mdiBasketball}
						size={1}
						color="#0f6e42"
						className="flex-none"
					/>
				)}
				{sport == "Tennis" && (
					<Icon
						path={mdiTennisBall}
						size={1}
						color="#0f6e42"
						className="flex-none"
					/>
				)}
				{sport == "Pickleball" && (
					<dive className="flex-none w-[20px] h-[20px] bg-[url(./PickleBall.png)] bg-cover mt-[3px] ml-[3px]" />
				)}

				<p className="flex-1 text-center pl-[10px] mt-[8px]">
					<b>{name}</b>
				</p>
			</div>

			<p className="text-[10px]">{distance} miles</p>
			<br></br>
		</div>
	);

	let navigate = useNavigate();
	const navigateToHandler = (e, court) => {
		if (court == "Markwood Playground") {
			navigate("/markwood");
		} else if (court == "Pottruck Gymnasium") {
			navigate("/pottruck");
		} else if (court == "Samson Courts") {
			navigate("/samson");
		} else {
			navigate("/palestra");
		}
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
		navigate("/" + court.toLowerCase());
	};

	const toggleModal = () => setIsOpen(!isOpen);

	const handleSportChange = (e) => {
		setSelectedSport(e.target.value);
		if (e.target.value === "") {
			const filteredCourts = courts;
			setSortedCourts(
				filteredCourts.sort((a, b) => a.distance - b.distance)
			);
		} else {
			const filteredCourts = courts.filter(
				(court) => court.sport == e.target.value
			);
			setSortedCourts(
				filteredCourts.sort((a, b) => a.distance - b.distance)
			);
		}
	};

	// Function to handle search input changes
	const handleSearchChange = (event) => {
		setIsOpen(false);
		const query = event.target.value;
		setSearchQuery(query);

		// Filter the courts based on the search query
		const filtered = courts.filter((court) =>
			court.name.toLowerCase().includes(query.toLowerCase())
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
							className="!absolute !left-[229px] !top-[193px] hover:scale-110 hover:-translate-y-1 transition-transform duration-300 group"
							onClick={navigateToMarkwood}
							title="Markwood Courts">
							<span className="hidden group-hover:block absolute -translate-y-10 text-xs bg-white px-2 py-1 rounded-md text-center -translate-x-1/2 left-1/2">Markwood Courts</span>
							<Pin />
						</div>
						<div
							className="!absolute !left-[301px] !top-[124px] hover:scale-110 hover:-translate-y-1 transition-transform duration-300 group"
							onClick={navigateToSamson}
							title="Samson Courts">
							<span className="hidden group-hover:block absolute -translate-y-10 text-xs bg-white px-2 py-1 rounded-md text-center -translate-x-1/2 -left-full">Samson Courts</span>
							<Pin />
						</div>
						<div
							className="!absolute !left-[153px] !top-[124px] hover:scale-110 hover:-translate-y-1 transition-transform duration-300 group"
							onClick={navigateToPalestra}
							title="The Palestra">
							<span className="hidden group-hover:block absolute -translate-y-10 text-xs bg-white px-2 py-1 rounded-md text-center -translate-x-1/2 left-1/2">The Palestra</span>
							<Pin />
						</div>
						<div
							className="!absolute !left-[23px] !top-[64px] hover:scale-110 hover:-translate-y-1 transition-transform duration-300 group"
							onClick={navigateToPottruck}
							title="Potruck Gymnasium">
							<span className="hidden group-hover:block absolute -translate-y-10 text-xs bg-white px-2 py-1 rounded-md text-center">Potruck Gymnasium</span>
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
											navigateToHandler(e, court.name);
										}}>
										<b>{court.name}</b>&nbsp;&nbsp;
										{court.distance} miles
									</div>
								);
							})}
						</div>
					)}
					<div className="[font-family:Gabarito] font-regular text-black text-[15px] tracking-[0] leading-[normal] whitespace-nowrap">
						<button
							onClick={toggleModal}
							className="absolute top-0 left-[230px] bg-[#0f6e42] border-2 border-solid border-[#053f24] rounded-[10px] hover:bg-[#06492a] text-white text-[18px] p-2 mt-[5px]">
							Sort & Filter
						</button>
						{isOpen && !isFocused && (
							<div className="ml-[140px]">
								<select
									value={selectedSport}
									onChange={handleSportChange}
									className="ml-[90px] mb-[7px]  mt-[2px] text-[15px]  text-center  bg-[#0f6e42] border-2 border-solid border-[#053f24] rounded-[10px] hover:bg-[#06492a] text-white p-1">
									<option value="">All Sports</option>
									<option key="Basketball" value="Basketball">
										Basketball
									</option>
									<option key="Tennis" value="Tennis">
										Tennis
									</option>
									<option key="Pickleball" value="Pickleball">
										Pickleball
									</option>
								</select>
								{sortedCourts.map((court) => (
									<Court
										name={court.name}
										sport={court.sport}
										distance={court.distance}
									/>
								))}
							</div>
						)}
					</div>
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
