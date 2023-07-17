import { person } from "./person";

export const dataAbout = {
	details: [
		{
			title: "born",
			value:
				person.dob.day + " " + person.dob.month + " " + person.dob.year,
		},
		{ title: "degree", value: person.qualifications.education[0] },
		{
			title: "languages",
			value:
				person.expertise.linguistics[0] +
				", " +
				person.expertise.linguistics[1],
		},
		{
			title: "expertise",
			value:
				person.expertise.design[1] +
				", " +
				person.expertise.development[0],
		},
		{ title: "freelance", value: "available" },
	],
	skills: [
		{ name: "html", aptitude: "96" },
		{
			name: "css",
			specialization: ["sass", "less", "bootstrap", "tailwind"],
			aptitude: "89",
		},
		{
			name: "javascript",
			specialization: ["react", "node", "express"],
			aptitude: "84",
		},
		{
			name: "sql",
			specialization: ["mysql", "postgresql"],
			aptitude: "81",
		},
		{ name: "java", aptitude: "70" },
		{ name: "c / c ++", aptitude: "59" },
		{ name: "git", specialization: ["github"], aptitude: "67" },
		{ name: "photoshop", aptitude: "73" },
		{ name: "illustrator", aptitude: "85" },
		{ name: "dreamweaver", aptitude: "93" },
	],
};
