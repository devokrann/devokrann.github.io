import React from "react";
import { person } from "../data/person";
import SlabDev from "../components/compound/slab";
import {
	SparklesIcon,
	UserIcon,
	WrenchScrewdriverIcon,
	DocumentTextIcon,
	PresentationChartLineIcon,
	ChatBubbleLeftRightIcon,
	EnvelopeOpenIcon,
} from "@heroicons/react/24/solid";
import ReactTyped from "react-typed";

export default function Home() {
	return (
		<main
			id="Home"
			className="min-h-screen flex flex-col gap-24 items-center justify-center"
		>
			<div className="flex flex-col items-center gap-1">
				<h1 className="uppercase text-5xl font-bold">
					<span className="TextPrimary">{person.name.fname}</span>{" "}
					{person.name.mname}
				</h1>
				<p className="text-lg">
					Hello, I do{" "}
					<span className="TextPrimary font-semibold text-xl capitalize">
						<ReactTyped
							strings={person.expertise.design.concat(
								person.expertise.development
							)}
							typeSpeed={50}
							backSpeed={25}
							loop
						/>
					</span>
				</p>
			</div>
			<div className="flex flex-col items-center gap-1">
				<div className="grid grid-cols-4 gap-8">
					<SlabDev path="welcome">
						<SparklesIcon width={20} height={20} />
						Welcome
					</SlabDev>
					<SlabDev path="about">
						<UserIcon width={20} height={20} />
						About
					</SlabDev>
					<SlabDev path="services">
						<WrenchScrewdriverIcon width={20} height={20} />
						Services
					</SlabDev>
					<SlabDev path="resume">
						<DocumentTextIcon width={20} height={20} />
						Resume
					</SlabDev>
				</div>
				<div className="grid grid-cols-3 gap-8">
					<SlabDev path="portfolio">
						<PresentationChartLineIcon width={20} height={20} />
						Portfolio
					</SlabDev>
					<SlabDev path="testimonials">
						<ChatBubbleLeftRightIcon width={20} height={20} />
						Testimonials
					</SlabDev>
					<SlabDev path="contact">
						<EnvelopeOpenIcon width={20} height={20} />
						Contact
					</SlabDev>
				</div>
			</div>
		</main>
	);
}
