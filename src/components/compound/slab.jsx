import React from "react";

// styles
import "../../styles/slabs.scss";

export default function SlabDev({ children, path = "#" }) {
	return (
		<a
			className="Slab rounded-full w-[125px] h-[125px] flex flex-col items-center justify-center gap-1"
			href={path}
		>
			{children}
		</a>
	);
}
