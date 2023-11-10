import React from "react";

export const Pin = ({ className }) => {
	return (
		<div className={`w-[17px] h-[40px] ${className}`}>
			<div className="relative h-[30px] top-[3px]">
				<img
					className="absolute w-[4px] h-[17px] top-[13px] left-[6px]"
					alt="Polygon"
					src="https://c.animaapp.com/q1G78Bfk/img/polygon-1-4.svg"
				/>
				<div className="absolute w-[17px] h-[17px] top-0 left-0 bg-[#f92b2b] rounded-[8.5px]" />
			</div>
		</div>
	);
};
