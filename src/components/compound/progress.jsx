import React from "react";

// styles
import "../../styles/progress.scss";

export default function ProgressDev({ width }) {
	return (
		<div className="ProgressDev flex-start flex h-1 w-full overflow-hidden font-sans text-xs font-medium">
			<div
				className="ProgressInnerDev flex h-full items-baseline justify-center overflow-hidden break-all"
				style={{ width: width + "%" }}
			></div>
		</div>
	);
}
