import React from "react";

// data
import { person } from "../../data/person";

export default function Welcome() {
	return (
		<main
			id="Welcome"
			className="min-h-screen flex flex-col justify-center"
		>
			<div className="container mx-auto px-36 flex flex-col">
				<span className="absolute ShadowText w-6/12 uppercase">
					Who I Am
				</span>
				<div className="flex flex-col gap-6 w-7/12">
					<h1 className="uppercase text-6xl font-bold">
						<span className="TextPrimary">{person.name.fname}</span>{" "}
						{person.name.mname}
					</h1>
					<p>
						Highly organized and detail-oriented with a drive to
						exceed expectations. Reliable with a good work ethic and
						the ability to quickly adapt to new tasks and
						environments. Responsible with good judgment, time
						management, and a flexible schedule. Looking to join the
						workforce and gain real-world experience.
					</p>
				</div>
			</div>
			<span className="absolute right-0 bottom-0 w-[70vh]">
				<img
					src="../../../public/images/kevon.svg"
					alt="author"
					width="100%"
				/>
			</span>
		</main>
	);
}
