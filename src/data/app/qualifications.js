const qualifications = {
	certificates: {
		academic: {
			traditional: [
				{
					qualification:
						"Kenya Certificate of Primary Education (KCPE)",
					field: null,
					doi: { month: 11, year: 2014 },
					period: {
						from: { month: 1, year: 2013 },
						to: { month: 11, year: 2014 },
					},
					poi: "Lizar School",
				},
				{
					qualification:
						"Kenya Certificate of Secondary Education (KCSE)",
					field: null,
					doi: { month: 11, year: 2018 },
					period: {
						from: { month: 1, year: 2015 },
						to: { month: 11, year: 2018 },
					},
					poi: "Consolata School",
				},
			],
			online: [
				{
					qualification: "Online",
					field: null,
					doi: { month: 11, year: 2014 },
					poi: null,
				},
			],
		},
		extracurricular: [
			{
				qualification: "Extra",
				field: null,
				doi: { month: 11, year: 2014 },
				poi: null,
			},
		],
	},
	degrees: {
		bachelors: [
			{
				qualification: "Bachelor of Science",
				field: "Computer Science",
				doi: { month: 9, year: 2023 },
				period: {
					from: { month: 9, year: 2019 },
					to: { month: 4, year: 2023 },
				},
				poi: "Tharaka University",
			},
		],
	},
};

export default qualifications;
