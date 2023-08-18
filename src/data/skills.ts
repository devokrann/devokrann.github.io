import {
	IconBrandAdobe,
	IconBrandCss3,
	IconBrandFigma,
	IconBrandGit,
	IconBrandHtml5,
	IconBrandMysql,
	IconBrandNodejs,
	IconBrandReact,
	IconCoffee,
} from "@tabler/icons-react";

// data
import specialties from "./author/specialties";

const skills = [
	{
		icon: IconBrandHtml5,
		skill: specialties.development[0].tools[0].tool,
		proficiency: specialties.development[0].tools[0].proficiency,
	},
	{
		icon: IconBrandCss3,
		skill: specialties.development[0].tools[1].variants[0].variant,
		proficiency:
			specialties.development[0].tools[1].variants[0].proficiency,
	},
	{
		icon: IconBrandCss3,
		skill: specialties.development[0].tools[1].variants[1].variant,
		proficiency:
			specialties.development[0].tools[1].variants[1].proficiency,
	},
	{
		icon: IconBrandReact,
		skill: specialties.development[0].tools[2].variants[0].variant,
		proficiency:
			specialties.development[0].tools[2].variants[0].proficiency,
	},
	{
		icon: IconBrandNodejs,
		skill: specialties.development[0].tools[2].variants[1].variant,
		proficiency:
			specialties.development[0].tools[2].variants[1].proficiency,
	},
	{
		icon: IconBrandMysql,
		skill: specialties.development[0].tools[3].variants[0].variant,
		proficiency:
			specialties.development[0].tools[3].variants[0].proficiency,
	},
	{
		icon: IconBrandGit,
		skill: specialties.sourceControl[0].tools[0].tool,
		proficiency:
			specialties.sourceControl[0].tools[0].variants[0].proficiency,
	},
	{
		icon: IconCoffee,
		skill: specialties.development[0].tools[4].variants[0].variant,
		proficiency:
			specialties.development[0].tools[4].variants[0].proficiency,
	},
	{
		icon: IconBrandAdobe,
		skill: specialties.design[0].tools[0].tool,
		proficiency: specialties.design[0].tools[0].proficiency,
	},
	{
		icon: IconBrandFigma,
		skill: specialties.design[0].tools[1].tool,
		proficiency: specialties.design[0].tools[1].proficiency,
	},
	{
		icon: IconBrandAdobe,
		skill: specialties.design[1].tools[1].tool,
		proficiency: specialties.design[1].tools[1].proficiency,
	},
	{
		icon: IconBrandAdobe,
		skill: specialties.design[1].tools[0].tool,
		proficiency: specialties.design[1].tools[0].proficiency,
	},
];

export default skills;
