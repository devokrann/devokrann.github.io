export default specialties = {
	design: [
		{
			specialty: "web",
			tools: [
				{ tool: "figma", proficiency: 60 },
				{ tool: "dreamweaver", proficiency: 90 },
				{ tool: "xd", proficiency: 55 },
			],
		},
		{
			specialty: "graphic",
			tools: [
				{ tool: "photoshop", proficiency: 55 },
				{ tool: "illustrator", proficiency: 60 },
			],
		},
	],
	development: [
		{
			specialty: "web",
			languages: {
				frontend: [
					{ language: "html", proficiency: 96 },
					{
						language: "css",
						frameworks: ["sass", "bootstrap", "tailwind"],
						proficiency: 90,
					},
					{
						language: "javascript",
						frameworks: {
							framework: "react",
							subFrameworks: ["next", "remix"],
						},
						proficiency: 84,
					},
				],
				backend: [
					{
						language: "javascript",
						frameworks: {
							framework: "node",
							subFrameworks: ["express"],
						},
						proficiency: 70,
					},
					{
						language: "sql",
						dialects: ["mysql", "postgresql"],
						proficiency: 72,
					},
					{
						language: "java",
						frameworks: [
							{
								framework: "spring",
								subFramework: ["spring boot"],
							},
						],
						proficiency: 58,
					},
				],
			},
		},
	],
	linguistics: [
		{ language: "english", proficiency: "fluent" },
		{ language: "swahili", proficiency: "proficient" },
	],
};
