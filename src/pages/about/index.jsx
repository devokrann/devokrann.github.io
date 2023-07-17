import React from "react";

// icons
import { ChatBubbleBottomCenterTextIcon } from "@heroicons/react/24/solid";

// components
import ProgressDev from "../../components/compound/progress";

// data
import data from "../../data";

// assets
import author from "../../assets/images/author.svg";

export default function About() {
	return (
		<main id="About" className="MainDev">
			<div className="container relative mx-auto flex flex-col gap-12">
				<span className="text-center ShadowText">Kevon</span>
				<div className="flex flex-col items-center gap-6 w-full">
					<h1>
						About <span className="TextPrimary">Me</span>
					</h1>
					<p>
						Kevon is a recent campus graduate with a passion for web
						development. He made websites for friends and family and
						hired himself out as a freelancer. He hopes to channel
						that enthusiasm in a full time role.
					</p>
				</div>
				{/* <div className="flex gap-24">
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
								src={author}
								alt="author"
								width={"100%"}
							/>
						</div>
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
							{data.specialties.development[0].tools.map(
								(item, key) => (
									<li
										key={key}
										className="flex flex-col gap-1"
									>
										{item.tool}
										{item.variants && (
											<span>
												(
												{item.variants.map(
													(subItem) =>
														subItem.variant +
														(item.variants.findIndex(
															(index) =>
																index == subItem
														) !==
															item.variants
																.length -
																1 && ",")
												)}
												)
											</span>
										)}
										<ProgressDev width={item.proficiency} />
									</li>
								)
							)}
						</ul>
					</div>
				</div> */}
			</div>
		</main>
	);
}
