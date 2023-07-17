import React from "react";

// core
import LinkDev from "../core/link";

// data
import { dataNavList } from "../../data/sample";

export default function NavDev({ data = dataNavList }) {
	return (
		<nav className="Nav">
			<ul className="List">
				{data.map((item, key) => (
					<li key={key} className="ListItem">
						<LinkDev path={item.path}>{item.link}</LinkDev>
					</li>
				))}
			</ul>
		</nav>
	);
}
