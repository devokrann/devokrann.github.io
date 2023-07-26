import React from "react";

// icons
import {
	EnvelopeOpenIcon,
	DevicePhoneMobileIcon,
	MapPinIcon,
	GlobeAltIcon,
} from "@heroicons/react/24/solid";

import { IconBrandLinkedin, IconBrandGithub } from "@tabler/icons-react";
import ButtonDev from "../../components/core/button";
import NavFooter from "../../components/compound/NavFooter";

export default function Contact() {
	function handleClick() {
		alert("Message delivered.");
	}

	return (
		<main id="Portfolio" className="MainDev md:items-center">
			<div className="container mx-auto">
				<span className="ShadowText">Contact</span>
				<div className="flex flex-col items-center gap-6">
					<h1>
						Get In <span className="TextPrimary">Touch</span>
					</h1>
					<p className="lg:w-8/12">
						Want to know more?{" "}
						<span className="TextPrimary font-bold">Kevon</span>{" "}
						would be happy to hear from you. Feel free to drop him a
						line.
					</p>
				</div>
				<div className="grid grid-cols-1 lg:grid-cols-2 text-start items-center lg:items-start gap-6 w-full">
					<div className="flex flex-col items-center gap-6">
						<div className="w-full flex flex-col gap-6">
							<ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
								<li className="flex flex-col items-center lg:flex-row BackgroundSecondary text-white p-6 gap-6">
									<span className="lg:w-3/12 flex items-center justify-center">
										<MapPinIcon width={20} height={20} />
									</span>
									<div className="flex flex-col items-center gap-1 lg:w-9/12">
										<span className="border-b border-white/10 w-6/12 text-center">
											Location
										</span>
										<a
											href="https://www.bing.com/maps/?cp=-1.265201%7E36.804788&lvl=17.6"
											target="blank"
										>
											Westlands, Nairobi KE
										</a>
									</div>
								</li>
								<li className="flex flex-col items-center lg:flex-row BackgroundSecondary text-white p-6 gap-6">
									<span className="lg:w-3/12 flex items-center justify-center">
										<DevicePhoneMobileIcon
											width={20}
											height={20}
										/>
									</span>
									<div className="flex flex-col items-center gap-1 lg:w-9/12">
										<span className="border-b border-white/10 w-6/12 text-center">
											Phone
										</span>
										<a href="tel:+254703510701">
											+ 254 703 510-701
										</a>
									</div>
								</li>
							</ul>
							<div className="flex flex-col items-center lg:flex-row BackgroundSecondary text-white p-6 gap-6">
								<span className="lg:w-3/12 flex items-center justify-center">
									<EnvelopeOpenIcon width={20} height={20} />
								</span>
								<div className="flex flex-col items-center gap-1 lg:w-9/12">
									<span className="border-b border-white/10 w-6/12 text-center">
										Email
									</span>
									<a href="mailto:kevon.kibochi@outlook.com">
										kevon.kibochi@outlook.com
									</a>
								</div>
							</div>
						</div>
						<ul className="flex gap-6">
							<li>
								<a
									href="http://linkedin.com/in/kevon-kibochi"
									target="blank"
								>
									<IconBrandLinkedin />
								</a>
							</li>
							<li>
								<a
									href="http://github.com/devokrann"
									target="blank"
								>
									<IconBrandGithub />
								</a>
							</li>
						</ul>
					</div>
					<div className="flex flex-col gap-6">
						<form
							className="flex flex-col gap-3"
							onSubmit={handleClick}
						>
							<label htmlFor="">
								<input
									required
									className="w-full BackgroundSecondary text-white rounded-0 border-0 px-6 py-3"
									type="text"
									name=""
									id=""
									placeholder="Name"
								/>
							</label>
							<label htmlFor="">
								<input
									required
									className="w-full BackgroundSecondary text-white rounded-0 border-0 px-6 py-3"
									type="email"
									name=""
									id=""
									placeholder="Email"
								/>
							</label>
							<label htmlFor="">
								<textarea
									required
									className="w-full BackgroundSecondary text-white rounded-0 border-0 px-6 py-3"
									name=""
									id=""
									rows="5"
									placeholder="Message"
								></textarea>
							</label>
							<input
								type="submit"
								value="Send"
								className="Button font-bold"
							/>
						</form>
					</div>
				</div>
			</div>
			<NavFooter prev="/portfolio" />
		</main>
	);
}
