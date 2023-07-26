import React from "react";

// data
import data from "../../data";

// assets
import author from "../../assets/images/author.svg";
import NavFooter from "../../components/compound/NavFooter";

export default function Welcome() {
	return (
		<>
			<main id="Welcome" className="MainDev lg:items-center">
				<div className="container mx-auto md:text-start md:items-start">
					<span className="ShadowText">Who I Am</span>
					<div className="flex flex-col gap-6">
						<h1>
							<span className="TextPrimary">
								{data.credentials.name.first}
							</span>{" "}
							{data.credentials.name.middle}
						</h1>
						<p className="md:w-6/12 lg:w-7/12">
							Highly organized and detail-oriented with a drive to
							exceed expectations. Reliable with a good work ethic
							and the ability to quickly adapt to new tasks and
							environments. Responsible with good judgment, time
							management, and a flexible schedule. Looking to join
							the workforce and gain real-world experience.
						</p>
					</div>
				</div>
				<span className="absolute right-0 bottom-0 AuthorImage w-full md:w-7/12 lg:w-6/12 xl:w-5/12">
					<img src={author} alt="author" width="100%" />
				</span>
				<NavFooter next="/about" />
			</main>
		</>
	);
}
