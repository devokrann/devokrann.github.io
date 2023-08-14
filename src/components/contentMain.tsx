import React from "react";

export default function ContentMain({ heading, children }: any) {
	return (
		<>
			<h1>{heading}</h1>
			{children}
		</>
	);
}
