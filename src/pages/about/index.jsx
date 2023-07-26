import React from "react";

// icons
import { ChatBubbleBottomCenterTextIcon } from "@heroicons/react/24/solid";

// components
import ProgressDev from "../../components/compound/progress";

// data
import data from "../../data/index";

// assets
import author from "../../assets/images/author.svg";
import NavFooter from "../../components/compound/NavFooter";

export default function About() {
	return (
		<main id="About" className="MainDev md:items-center">
			<div className="container mx-auto md:items-start">
				<span className="ShadowText">
					Kevon <span className="invisible md:visible">Kibochi</span>
				</span>
				<div className="flex flex-col items-center gap-6 w-full">
					<h1>
						About <span className="TextPrimary">Me</span>
					</h1>
					<p className="lg:w-8/12">
						<span className="TextPrimary font-bold">Kevon</span> is
						a recent campus graduate with a passion for web
						development. He made websites for friends and family and
						hired himself out as a freelancer. He hopes to channel
						that enthusiasm in a full time role.
					</p>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
					<div className="flex flex-col gap-6">
						<div className="flex flex-col items-center md:items-end gap-6 md:text-end xl:flex-row xl:items-start">
							<p className="flex flex-col items-center md:items-end">
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
								className="border-4 border-black p-1 md:w-8/12 lg:w-7/12 xl:w-5/12"
								src={author}
								alt="author"
							/>
						</div>
					</div>
					<div className="flex flex-col gap-6">
						<div className="flex flex-col gap-3">
							<div className="flex items-center gap-4">
								<h2 className="text-2xl">Skills</h2>
								<span className="flex flex-col w-full gap-1">
									<hr className="w-3/12 BorderSecondary" />
									<hr className="w-2/12 BorderPrimary" />
								</span>
							</div>
							<ul className="grid grid-cols-1 xl:grid-cols-2 gap-3 text-start text-sm uppercase">
								{data.specialties.development[0].tools
									.concat(data.specialties.design[0].tools)
									.map((item, key) => (
										<li
											key={key}
											className="flex flex-col gap-1"
										>
											<div className="flex gap-1">
												<span className="font-bold">
													{item.tool}
												</span>
												{item.variants && (
													<span>
														(
														{item.variants.map(
															(subItem) =>
																subItem.variant +
																(item.variants.findIndex(
																	(index) =>
																		index ===
																		subItem
																) ===
																item.variants
																	.length -
																	1
																	? ""
																	: ", ")
														)}
														)
													</span>
												)}
											</div>
											<ProgressDev
												width={item.proficiency}
											/>
										</li>
									))}
							</ul>
						</div>
						<div className="uppercase text-start text-sm">
							<ul className="flex flex-col gap-1 w-full">
								<li>
									<span className="font-bold">
										Languages:{" "}
									</span>{" "}
									{data.specialties.linguistics.map(
										(item) =>
											item.specialty +
											(data.specialties.linguistics.findIndex(
												(index) => index === item
											) ===
											data.specialties.linguistics
												.length -
												1
												? ""
												: ", ")
									)}
								</li>
								<li>
									<span className="font-bold">
										Qualifications:{" "}
									</span>{" "}
									{data.qualifications.degrees.bachelors.map(
										(item) =>
											item.degree +
											" " +
											"(" +
											item.field +
											")" +
											(data.qualifications.degrees.bachelors.findIndex(
												(index) => index === item
											) ===
											data.qualifications.degrees
												.bachelors.length -
												1
												? ""
												: ", ")
									)}
								</li>
								<li>
									<span className="font-bold">
										Specialties:{" "}
									</span>{" "}
									{data.specialties.design
										.concat(
											data.specialties.development.concat(
												data.specialties.sourceControl
											)
										)
										.map(
											(item) =>
												item.specialty +
												(data.specialties.design
													.concat(
														data.specialties.development.concat(
															data.specialties
																.sourceControl
														)
													)
													.findIndex(
														(index) =>
															index === item
													) ===
												data.specialties.design.concat(
													data.specialties.development.concat(
														data.specialties
															.sourceControl
													)
												).length -
													1
													? ""
													: ", ")
										)}
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<NavFooter prev="/welcome" next="/resume" />
		</main>
	);
}
