import React from "react";

export default function ProgressDev({ width }) {
	return (
		<div className="Progress flex-start flex h-1.5 w-full overflow-hidden rounded-sm bg-blue-gray-50 font-sans text-xs font-medium">
			<div
				className="ProgressBar flex h-full items-baseline justify-center overflow-hidden break-all bg-pink-500 text-white"
				style={{ width: width + "%" }}
			></div>
		</div>
	);
}
