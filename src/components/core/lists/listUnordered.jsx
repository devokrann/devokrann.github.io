import React from "react";

// styles
import "../../../styles/lists.scss";

// data
import { dataList } from "../../../data/sample";

export default function ListDevUnordered({ data = dataList }) {
	return (
		<ul className="List">
			{data.map((item, key) => (
				<li key={key} className="ListItem">
					{item}
				</li>
			))}
		</ul>
	);
}
