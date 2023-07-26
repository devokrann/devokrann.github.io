import React from "react";
import { Link } from "react-router-dom";

// icons
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";

function NavFooter({ prev, next }) {
	return (
		<nav className="absolute left-[10vh] bottom-[5vh] flex items-center justify-between">
			<ul className="flex items-center gap-3">
				<li>
					{prev && (
						<Link
							to={prev}
							className="flex items-center text-xs uppercase gap-1"
						>
							<IconArrowLeft /> <span>Prev</span>
						</Link>
					)}
				</li>
				<li>
					{next && (
						<Link
							to={next}
							className="flex items-center text-xs uppercase gap-1
						flex-row-reverse"
						>
							<IconArrowRight /> <span>Next</span>
						</Link>
					)}
				</li>
			</ul>
		</nav>
	);
}

export default NavFooter;
