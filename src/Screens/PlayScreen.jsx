import React, { useState } from "react";
import { Pin } from "../Components/Pin";
import { NavbarPlay } from "../Components/NavbarPlay";
import { useNavigate } from "react-router-dom";


const PlayScreen = () => {
	const courts = ["Markwood", "Pottruck", "Palestra", "Samson"];
	let navigate = useNavigate();
	const [searchQuery, setSearchQuery] = useState('');
    const [filteredCourts, setFilteredCourts] = useState([]);
	const [isFocused, setIsFocused] = useState(false);

	const navigateToHandler = (e, court) => {
		navigate("/" + court.toLowerCase());
		e.preventDefault();
	}
	const navigateToMarkwood = () => {
		navigate("/markwood"); // '/markwood' is the path to your new screen
	};
	const navigateToPottruck = () => {
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
    // Function to handle search input changes
    const handleSearchChange = (event) => {
        const query = event.target.value;
        setSearchQuery(query);

        // Filter the courts based on the search query
        const filtered = courts.filter(court => court.toLowerCase().includes(query.toLowerCase()));
        setFilteredCourts(filtered);
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
					}}					className="w-[220px] h-[55px] bg-[#f3fbef] rounded-[15px] border-2 border-solid border-[#8db580] p-2"
				/>

{isFocused && searchQuery && (
	<div className="results-container">       
	 {filteredCourts.map((court, index) => {
            return (
                <div key={index} className="search-result" onClick={(e) => { navigateToHandler(e, court) 
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
				<div className="absolute w-[311px] top-[506px] left-[35px] [font-family:Gabarito] font-bold text-black text-[20px] tracking-[0] leading-[normal] whitespace-nowrap">
					Saved Complexes:
				</div>
)}
{!isFocused && (
    <>
				<img
					className="top-[559px] absolute w-[20px] h-[20px] left-[332px] object-cover z-[999]"
					src="https://c.animaapp.com/q1G78Bfk/img/image-19@2x.png"
				/>
				<img
					className="top-[608px] absolute w-[20px] h-[20px] left-[332px] object-cover z-[999]"
					src="https://c.animaapp.com/q1G78Bfk/img/image-19@2x.png"
				/>
				<p
					className="absolute w-[329px] h-[40px] rounded-[15px] hover:bg-[#f4f4f4] top-[549px] left-[28px] pt-[5px] pl-[7px] [font-family:Gabarito] font-normal text-black text-[20px] tracking-[0] leading-[normal]"
					onClick={navigateToMarkwood}>
					Markwood Playground
				</p>
				<p
					className="absolute w-[329px] h-[40px] rounded-[15px] hover:bg-[#f4f4f4] top-[598px] left-[28px] pt-[5px] pl-[7px] [font-family:Gabarito] font-normal text-black text-[20px] tracking-[0] leading-[normal]"
					onClick={navigateToPottruck}>
					Pottruck Gymnasium
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
				</>
)}
				<div
					className="absolute w-[38px] h-[38px] top-[94px] left-[327px] bg-[url(./backarrow.svg)] hover:brightness-75"
					onClick={navigateToHome}></div>

			</div>
		</div>


	);
};

export default PlayScreen;
