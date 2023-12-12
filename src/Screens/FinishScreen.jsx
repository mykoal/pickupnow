import React, { useState, useEffect } from "react";
import ReactStars from "react-rating-stars-component";
import { NavbarPlay } from "../Components/NavbarPlay";
import { useNavigate } from "react-router-dom";
import { getValue } from "@testing-library/user-event/dist/utils";

const FinishScreen = () => {
	const [ratingLight, setRatingLight] = useState(0);
	const [ratingLines, setRatingLines] = useState(0);
	const [ratingSurface, setRatingSurface] = useState(0);
	const [ratingNet, setRatingNet] = useState(0);
	const courtRatings =
		JSON.parse(localStorage.getItem("pottruck_Condition")) || {};

	const handleLightRating = (newRating) => {
		courtRatings.night_lighting = newRating;
		localStorage.setItem(
			"pottruck_Condition",
			JSON.stringify(courtRatings)
		);
		setRatingLight(newRating);
	};

	const handleLinesRating = (newRating) => {
		courtRatings.court_lines = newRating;
		localStorage.setItem(
			"pottruck_Condition",
			JSON.stringify(courtRatings)
		);
		setRatingLines(newRating);
	};

	const handleSurfaceRating = (newRating) => {
		courtRatings.court_surface = newRating;
		localStorage.setItem(
			"pottruck_Condition",
			JSON.stringify(courtRatings)
		);
		setRatingSurface(newRating);
	};

	const handleNetRating = (newRating) => {
		courtRatings.court_net = newRating;
		localStorage.setItem(
			"pottruck_Condition",
			JSON.stringify(courtRatings)
		);
		setRatingNet(newRating);
	};

	let navigate = useNavigate();
	const navigateToCreateQueue = () => {
		console.log(
			"Navigating to CreateQueueScreen with courtName:",
			"Markwood Playground"
		);
		navigate("/create_queue", {
			state: { courtName: "Pottruck Gymaniusm" },
		}); // '/create_queue' is the path to your new screen
	};
	const navigateToQueueScreen = () => {
		console.log(
			"Navigating to QueueScreen with courtName:",
			"Pottruck Gymaniusm"
		);
		navigate("/queue", { state: { courtName: "Markwood Playground" } }); // '/create_queue' is the path to your new screen
	};

	const navigateToHome = () => {
		navigate("/home");
	};

	return (
		<div className="bg-white flex flex-row justify-center w-full">
			<div className="bg-white w-[394px] h-[852px] relative">
				<div className="absolute w-[300px] top-[94px] left-[13px] [font-family:Gabarito] font-bold text-black text-[35px] tracking-[0] leading-[normal]">
					Finished Game
				</div>
				<div className="absolute w-[354px] h-[61px] top-[165px] left-[19px] bg-[#f3fbef] rounded-[15px] border-2 border-solid border-[#0f6e42]">
					<p className="absolute w-[333px] h-[54px] top-[5px] left-[7px] [font-family:Gabarito] font-normal text-black text-[18px] text-center tracking-[0] leading-[normal]">
						Thank you for playing! Please clear the court for the
						next group in queue.
					</p>
				</div>

				<div className="absolute w-[267px] h-[39px] top-[643px] left-[70px] rounded-[20px]">
					<div
						className="absolute w-[255px] h-[40px] top-0 left-0 bg-[#0f6e42] transition-all duration-300 hover:bg-[#06492a] px-[8px] py-[5px] rounded-[20px] border-2 border-solid border-[#053f24] [font-family:Gabarito] font-normal text-[#f3fbef] text-[20px] text-center tracking-[0] leading-[normal]"
						onClick={navigateToHome}>
						Return to Home Screen
					</div>
				</div>

				<div className="absolute w-[332px] top-[300px] left-[32px] [font-family:Gabarito] font-bold text-black text-[20px] text-center tracking-[0] leading-[normal]">
					<span className="text-[#0f6e42]">Please Review: </span>
					Pottruck Gymnasium
				</div>

				<p className="absolute w-[354px] h-[23px] top-[530px] left-[20px] [font-family:Gabarito] font-normal text-[#0000004a] text-[15px] text-center tracking-[0] leading-[normal]">
					Your Reviews Help Create a More Informed Experience for
					Everyone!
				</p>

				<div className="absolute w-[354px] h-[190px] top-[335px] left-[20px]">
					<div className="absolute w-[354px] h-[49px] top-0 left-0 bg-[#f3fbef] rounded-[15px_15px_0px_0px] border-2 border-solid border-[#0f6e42]" />
					<div className="absolute w-[332px] h-[40px] top-[12px] left-[11px] [font-family:Gabarito] font-normal text-black text-[20px] tracking-[0] leading-[normal]">
						Night Lighting:
					</div>
					<div className="top-[141px] rounded-[0px_0px_15px_15px] absolute w-[354px] h-[49px] left-0 bg-[#f3fbef] border-2 border-solid border-[#0f6e42]" />
					<div className="top-[153px] absolute w-[332px] h-[40px] left-[11px] [font-family:Gabarito] font-normal text-black text-[20px] tracking-[0] leading-[normal]">
						Court Net:
					</div>
					<div className="top-[94px] absolute w-[354px] h-[49px] left-0 bg-[#f3fbef] border-2 border-solid border-[#0f6e42]" />
					<div className="top-[106px] absolute w-[332px] h-[40px] left-[11px] [font-family:Gabarito] font-normal text-black text-[20px] tracking-[0] leading-[normal]">
						Court surface:
					</div>
					<div className="top-[47px] absolute w-[354px] h-[49px] left-0 bg-[#f3fbef] border-2 border-solid border-[#0f6e42]" />
					<div className="top-[59px] absolute w-[332px] h-[40px] left-[11px] [font-family:Gabarito] font-normal text-black text-[20px] tracking-[0] leading-[normal]">
						Court lines:
					</div>
					<div className="top-[5px] absolute w-[150px] h-[23px] left-[195px]">
						<ReactStars
							count={5}
							size={26}
							isHalf={true}
							color="#D6E3D0"
							activeColor="#FEC700"
							onChange={handleLightRating}
						/>
					</div>

					<div className="top-[51px] absolute w-[150px] h-[23px] left-[195px]">
						<ReactStars
							count={5}
							size={26}
							isHalf={true}
							color="#D6E3D0"
							activeColor="#FEC700"
							onChange={handleLinesRating}
						/>
					</div>
					<div className="top-[99px] absolute w-[150px] h-[23px] left-[195px]">
						<ReactStars
							count={5}
							size={26}
							isHalf={true}
							color="#D6E3D0"
							activeColor="#FEC700"
							onChange={handleSurfaceRating}
						/>
					</div>
					<div className="top-[145px] absolute w-[140px] h-[23px] left-[195px]">
						<ReactStars
							count={5}
							size={26}
							isHalf={true}
							color="#D6E3D0"
							activeColor="#FEC700"
							onChange={handleNetRating}
						/>
					</div>

					<div className="top-[12px] absolute w-[32px] h-[40px] left-[152px] [font-family:Gabarito] font-bold text-black text-[20px] text-center tracking-[0] leading-[normal]">
						{ratingLight}
					</div>
					<div className="top-[59px] absolute w-[32px] h-[40px] left-[152px] [font-family:Gabarito] font-bold text-black text-[20px] text-center tracking-[0] leading-[normal]">
						{ratingLines}
					</div>
					<div className="top-[106px] absolute w-[32px] h-[40px] left-[152px] [font-family:Gabarito] font-bold text-black text-[20px] text-center tracking-[0] leading-[normal]">
						{ratingSurface}
					</div>
					<div className="top-[153px] absolute w-[32px] h-[40px] left-[152px] [font-family:Gabarito] font-bold text-black text-[20px] text-center tracking-[0] leading-[normal]">
						{ratingNet}
					</div>
				</div>

				<NavbarPlay></NavbarPlay>
			</div>
		</div>
	);
};

export default FinishScreen;
