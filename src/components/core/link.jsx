import React from "react";

// styles
import "../../styles/links.scss";

export default function LinkDev({ path, children }) {
	return (
		<a href={path} className="Link">
			{children}
		</a>
	);
}
