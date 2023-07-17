import React from "react";

import { ChatBubbleBottomCenterTextIcon } from "@heroicons/react/24/solid";
import { dataAbout } from "../../data/about";
import ProgressDev from "../../components/compound/progress";

export default function About() {
	return (
		<main id="About" className="min-h-screen flex flex-col">
			<div className="container mx-auto px-36 py-24 flex flex-col gap-12">
				<span className="absolute left-36 top-10 ShadowText text-center w-7/12 uppercase">
					Kevon
				</span>
				<div className="flex flex-col items-center text-center gap-6 w-8/12">
					<h1 className="uppercase text-6xl font-bold">
						About <span className="TextPrimary">Me</span>
					</h1>
					<p>
						Kevon is a recent campus graduate with a passion for web
						development. He made websites for friends and family and
						hired himself out as a freelancer. He hopes to channel
						that enthusiasm in a full time role.
					</p>
				</div>
				<div className="flex gap-24">
					<div className="w-5/12 flex flex-col gap-6">
						<div className="grid grid-cols-2 items-center gap-6 text-end">
							<p className="flex flex-col items-end">
								<span className="TextPrimary">
									<ChatBubbleBottomCenterTextIcon
										width={64}
										height={64}
										className="transform"
									/>
								</span>
								" I'm a passionate designer who has been
								specialising in web design & development,
								although I have experience in graphic design,
								branding and print projects. "
							</p>
							<img
								className="border-4 border-black p-1"
								src="../../../public/images/kevon.svg"
								alt=""
							/>
						</div>
						<ul>
							{dataAbout.details.map((item, key) => (
								<li
									key={key}
									className="uppercase py-1 text-sm"
								>
									<span className="font-bold">
										{item.title}:{" "}
									</span>
									{item.value}
								</li>
							))}
						</ul>
					</div>
					<div className="w-7/12 flex flex-col gap-2">
						<div className="flex items-center gap-4">
							<h2 className="text-2xl">Skills</h2>
							<span className="flex flex-col w-full gap-1">
								<hr className="w-3/12 BorderSecondary" />
								<hr className="w-2/12 BorderPrimary" />
							</span>
						</div>
						<ul>
							{dataAbout.skills.map((skill, key) => (
								<li key={key} className="flex flex-col gap-1">
									{skill.name}{" "}
									{skill.specialization && (
										<span>
											(
											{skill.specialization.map(
												(spec, key) =>
													spec +
													(skill.specialization.findIndex(
														(spec) => spec
													) !==
														skill.specialization
															.length -
															1 && ", ")
											)}
											)
										</span>
									)}
									<ProgressDev width={skill.aptitude} />
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</main>
	);
}
