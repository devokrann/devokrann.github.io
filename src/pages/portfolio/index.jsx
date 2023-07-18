import React from "react";

// icons
import {
	ArchiveBoxIcon,
	StopCircleIcon,
	DocumentArrowDownIcon,
} from "@heroicons/react/24/solid";
import data from "../../data";

export default function Portfolio() {
	return (
		<main id="Portfolio" className="MainDev md:items-center">
			<div className="container mx-auto">
				<span className="ShadowText">Portfolio</span>
				<div className="flex flex-col items-center gap-6">
					<h1>
						My <span className="TextPrimary">Works</span>
					</h1>
					<p className="lg:w-8/12">
						Take a look at some of his most recent works in
						illustration and graphic design. A projects list that
						will soon grow.
					</p>
				</div>
				<div className="grid grid-cols-1 lg:grid-cols-2 text-start gap-6 w-full">
					<div className="BackgroundSecondary text-white">
						<div className="flex items-center gap-4 border-b border-white/10 p-3">
							<h2 className="text-2xl">Design</h2>
							<span className="flex flex-col w-full gap-1">
								<hr className="w-3/12 border-white" />
								<hr className="w-2/12 BorderPrimary" />
							</span>
						</div>
						<ul className="p-3 py-6 sm:px-6 flex flex-col">
							{data.portfolio.design.web.map((item, key) => (
								<li
									key={key}
									className="border-b border-white/10 py-6 first:pt-0 last:pb-0 last:border-b-0"
								>
									<a
										href={item.path}
										className="flex flex-col gap-3"
									>
										<div className="flex items-center gap-3">
											<DocumentArrowDownIcon
												width={20}
												height={20}
											/>
											<h2 className="capitalize">
												{item.name}
											</h2>
										</div>
										<p className="text-white/60">
											{item.description}
										</p>
										<div className="flex items-center gap-3">
											<span className="flex items-center gap-1">
												<StopCircleIcon
													width={20}
													height={20}
												/>
												Done with{" "}
												<span className="capitalize">
													{item.tool}
												</span>
											</span>
										</div>
									</a>
								</li>
							))}
						</ul>
					</div>
					<div className="BackgroundSecondary text-white">
						<div className="flex items-center gap-4 border-b border-white/10 p-3">
							<h2 className="text-2xl">Development</h2>
							<span className="flex flex-col w-full gap-1">
								<hr className="w-3/12 border-white" />
								<hr className="w-2/12 BorderPrimary" />
							</span>
						</div>
						<ul className="p-3 py-6 sm:px-6 flex flex-col">
							{data.portfolio.development.web.map((item, key) => (
								<li
									key={key}
									className="border-b border-white/10 py-6 first:pt-0 last:pb-0 last:border-b-0"
								>
									<a
										href={item.path}
										className="flex flex-col gap-3"
									>
										<div className="flex items-center gap-3">
											<ArchiveBoxIcon
												width={20}
												height={20}
											/>
											<h2 className="capitalize">
												{item.name}
											</h2>
										</div>
										<p className="text-white/60">
											{item.description}
										</p>
										<div className="flex items-center gap-3">
											<span className="flex items-center gap-1">
												<StopCircleIcon
													width={20}
													height={20}
												/>
												Done with{" "}
												<span className="capitalize">
													{item.tool}
												</span>
											</span>
										</div>
									</a>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</main>
	);
}
