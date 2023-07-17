const specialties = {
	design: [
		{
			specialty: "web design",
			tools: [
				{ tool: "figma", variants: null, proficiency: 60 },
				{ tool: "dreamweaver", variants: null, proficiency: 90 },
				{ tool: "xd", variants: null, proficiency: 55 },
			],
		},
		{
			specialty: "graphic design",
			tools: [
				{ tool: "photoshop", variants: null, proficiency: 55 },
				{ tool: "illustrator", variants: null, proficiency: 60 },
			],
		},
	],
	development: [
		{
			specialty: "web development",
			tools: [
				{
					tool: "html",
					variants: null,
					proficiency: 96,
				},
				{
					tool: "css",
					variants: [
						{
							variant: "sass",
							subvariants: null,
						},
						{
							variant: "bootstrap",
							subvariants: null,
						},
						{
							variant: "tailwind",
							subvariants: null,
						},
					],
					proficiency: 90,
				},
				{
					tool: "javascript",
					variants: [
						{
							variant: "react",
							subvariants: ["next", "remix"],
						},
					],
					proficiency: 84,
				},
				{
					tool: "javascript",
					variants: [
						{
							variant: "node",
							subvariants: ["express"],
						},
					],
					proficiency: 70,
				},
				{
					tool: "sql",
					variants: [
						{
							variant: "mysql",
							subvariants: null,
						},
						{
							variant: "postgresql",
							subvariants: null,
						},
					],
					proficiency: 72,
				},
				{
					tool: "java",
					variants: [
						{
							variant: "spring",
							subvariants: ["spring boot"],
						},
					],
					proficiency: 58,
				},
			],
		},
	],
	sourceControl: [
		{ specialty: "git", tools: [{ tool: "github", proficiency: 63 }] },
	],
	linguistics: [
		{ specialty: "english", variants: null, proficiency: "fluent" },
		{ specialty: "swahili", variants: null, proficiency: "proficient" },
	],
};

export default specialties;
