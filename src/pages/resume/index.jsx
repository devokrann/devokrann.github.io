import React from "react";

// data
import data from "../../data";

// icons
import { DocumentTextIcon } from "@heroicons/react/24/solid";

export default function Resume() {
	return (
		<main id="Resume" className="MainDev md:items-center">
			<div className="container mx-auto">
				<span className="ShadowText">Resume</span>
				<div className="flex flex-col items-center gap-6">
					<h1>
						My <span className="TextPrimary">History</span>
					</h1>
					<p className="lg:w-8/12">
						Brouse through a timeline of events in his world about
						where he's been, where he is now and where he's going.
					</p>
				</div>
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full">
					<div className="w-full BackgroundSecondary text-white">
						<div className="flex items-center gap-4 border-b border-white/10 p-3">
							<h2 className="text-2xl">Education</h2>
							<span className="flex flex-col w-full gap-1">
								<hr className="w-3/12 border-white" />
								<hr className="w-2/12 BorderPrimary" />
							</span>
						</div>
						<ul className="px-3 sm:px-6 py-6 flex flex-col gap-3 text-start">
							{data.qualifications.certificates.academic.traditional
								.concat(data.qualifications.degrees.bachelors)
								.map((item, key) => (
									<li
										key={key}
										className=" flex items-center gap-4 sm:gap-6"
									>
										<span className="flex items-center justify-center p-2 bg-white/10">
											<DocumentTextIcon
												width={20}
												height={20}
												className="text-white/60"
											/>
										</span>
										<ul className="flex flex-col">
											<li>
												{item.qualification +
													(item.field
														? " in " + item.field
														: "")}
											</li>
											<li className="text-sm text-white/60">
												{item.period.from.month +
													"/" +
													item.period.from.year +
													" - " +
													(item.period.to.month +
														"/" +
														item.period.to.year)}
											</li>
											<li className="text-xs TextPrimary">
												{item.poi}
											</li>
										</ul>
									</li>
								))}
						</ul>
					</div>
					<div className="w-full BackgroundSecondary text-white">
						<div className="flex items-center gap-4 border-b border-white/10 p-3">
							<h2 className="text-2xl">Experience</h2>
							<span className="flex flex-col w-full gap-1">
								<hr className="w-3/12 border-white" />
								<hr className="w-2/12 BorderPrimary" />
							</span>
						</div>
						<ul className="px-3 sm:px-6 py-6 flex flex-col gap-3 text-start">
							{data.experience.map((item, key) => (
								<li
									key={key}
									className=" flex items-center gap-4 sm:gap-6"
								>
									<span className="flex items-center justify-center p-2 bg-white/10">
										<DocumentTextIcon
											width={20}
											height={20}
											className="text-white/60"
										/>
									</span>
									<ul className="flex flex-col">
										<li>
											{item.position +
												(item.field
													? " in " + item.field
													: "")}
										</li>
										<li className="text-sm text-white/60">
											{item.period.from.month +
												"/" +
												item.period.from.year +
												" - " +
												(item.period.to.month +
													"/" +
													item.period.to.year)}
										</li>
										<li className="text-xs TextPrimary">
											{item.pow}
										</li>
									</ul>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</main>
	);
}
