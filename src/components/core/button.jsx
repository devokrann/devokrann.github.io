import React from "react";

// styles
import "../../styles/buttons.scss";

export default function ButtonDev({ children, className }) {
	return (
		<button className={"Button " + (className && className)}>
			{children}
		</button>
	);
}
