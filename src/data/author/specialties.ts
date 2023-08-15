const specialties = {
	design: [
		{
			specialty: "web design",
			tools: [
				{ tool: "dreamweaver", variants: null, proficiency: 90 },
				{ tool: "figma", variants: null, proficiency: 62 },
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
							proficiency: 88,
						},
						{
							variant: "tailwind",
							subvariants: null,
							proficiency: 84,
						},
						{
							variant: "bootstrap",
							subvariants: null,
							proficiency: 80,
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
							proficiency: 82,
						},
						{
							variant: "node",
							subvariants: ["express"],
							proficiency: 78,
						},
					],
					proficiency: 84,
				},
				{
					tool: "sql",
					variants: [
						{
							variant: "mysql",
							subvariants: null,
							proficiency: 68,
						},
						{
							variant: "postgresql",
							subvariants: null,
							proficiency: 64,
						},
					],
					proficiency: 72,
				},
				{
					tool: "java",
					variants: [
						{
							variant: "spring boot",
							subvariants: ["spring boot"],
							proficiency: 58,
						},
					],
					proficiency: 58,
				},
			],
		},
	],
	sourceControl: [
		{
			specialty: "source control",
			tools: [
				{
					tool: "git",
					variants: [
						{
							variant: "github",
							subvariants: null,
							proficiency: 68,
						},
					],
					proficiency: 70,
				},
			],
		},
	],
	linguistics: [
		{ specialty: "english", variants: null, proficiency: "fluent" },
		{ specialty: "swahili", variants: null, proficiency: "proficient" },
	],
};

export default specialties;
