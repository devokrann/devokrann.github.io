import React from "react";

// icons
import {
	EnvelopeOpenIcon,
	DevicePhoneMobileIcon,
	MapPinIcon,
	GlobeAltIcon,
} from "@heroicons/react/24/solid";

export default function Contact() {
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
				<div className="flex flex-col lg:flex-row text-start items-center lg:items-start gap-6 w-full">
					<div className="w-full md:w-9/12 lg:w-4/12 flex flex-col gap-6">
						<ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-6">
							<li className="flex flex-col items-center lg:flex-row BackgroundSecondary text-white p-6 gap-6">
								<span>
									<EnvelopeOpenIcon width={20} height={20} />
								</span>
								<div className="flex flex-col items-center gap-1">
									<span className="border-b border-white/10 w-6/12 text-center">
										Email
									</span>
									<a href="mailto:kevon.kibochi@outlook.com">
										kevon.kibochi@outlook.com
									</a>
								</div>
							</li>
							<li className="flex flex-col items-center lg:flex-row BackgroundSecondary text-white p-6 gap-6">
								<span>
									<DevicePhoneMobileIcon
										width={20}
										height={20}
									/>
								</span>
								<div className="flex flex-col items-center gap-1">
									<span className="border-b border-white/10 w-6/12 text-center">
										Phone
									</span>
									<a href="tel:+254703510701">
										+ 254 703 510-701
									</a>
								</div>
							</li>
							<li className="flex flex-col items-center lg:flex-row BackgroundSecondary text-white p-6 gap-6">
								<span>
									<MapPinIcon width={20} height={20} />
								</span>
								<div className="flex flex-col items-center gap-1">
									<span className="border-b border-white/10 w-6/12 text-center">
										Location
									</span>
									<a href="#">Westlands, Nairobi KE</a>
								</div>
							</li>
							<li className="flex flex-col items-center lg:flex-row BackgroundSecondary text-white p-6 gap-6">
								<span>
									<GlobeAltIcon width={20} height={20} />
								</span>
								<div className="flex flex-col items-center gap-1">
									<span className="border-b border-white/10 w-6/12 text-center">
										LinkedIn
									</span>
									<a href="mailto:kevon.kibochi@outlook.com">
										kevon.kibochi@outlook.com
									</a>
								</div>
							</li>
						</ul>
					</div>
					<div className="w-full lg:w-8/12 flex flex-col gap-6"></div>
				</div>
			</div>
		</main>
	);
}
