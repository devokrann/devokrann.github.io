import React from "react";

// components
import SlabDev from "../components/compound/slab";

// icons
import {
	SparklesIcon,
	UserIcon,
	WrenchScrewdriverIcon,
	DocumentTextIcon,
	PresentationChartLineIcon,
	ChatBubbleLeftRightIcon,
	EnvelopeOpenIcon,
} from "@heroicons/react/24/solid";

// utils
import ReactTyped from "react-typed";

// data
import data from "../data/index";

export default function Home() {
	return (
		<main id="Home" className="MainDev items-center">
			<div className="container mx-auto">
				<div className="flex flex-col items-center">
					<h1>
						<span className="TextPrimary">
							{data.credentials.name.first}
						</span>{" "}
						{data.credentials.name.middle}
					</h1>
					<p>
						Hello, I do{" "}
						<span className="TextPrimary font-semibold capitalize">
							<ReactTyped
								strings={data.specialties.design
									.map((item) => item.specialty)
									.concat(
										data.specialties.development.map(
											(item) => item.specialty
										)
									)}
								typeSpeed={50}
								backSpeed={25}
								loop
							/>
						</span>
					</p>
				</div>
				<div className="flex flex-col items-center gap-3">
					<ul className="grid grid-cols-2 gap-8 md:grid-cols-3 md:gap-12 lg:grid-cols-6 lg:gap-16">
						<li>
							<SlabDev path="welcome">
								<SparklesIcon width={20} height={20} />
								Welcome
							</SlabDev>
						</li>
						<li>
							<SlabDev path="about">
								<UserIcon width={20} height={20} />
								About
							</SlabDev>
						</li>
						<li>
							<SlabDev path="services">
								<WrenchScrewdriverIcon width={20} height={20} />
								Services
							</SlabDev>
						</li>
						<li>
							<SlabDev path="resume">
								<DocumentTextIcon width={20} height={20} />
								Resume
							</SlabDev>
						</li>
						<li>
							<SlabDev path="portfolio">
								<PresentationChartLineIcon
									width={20}
									height={20}
								/>
								Portfolio
							</SlabDev>
						</li>
						<li>
							<SlabDev path="contact">
								<EnvelopeOpenIcon width={20} height={20} />
								Contact
							</SlabDev>
						</li>
					</ul>
				</div>
			</div>
		</main>
	);
}
