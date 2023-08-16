import {
	IconCertificate,
	IconCode,
	IconCpu,
	IconSchool,
} from "@tabler/icons-react";
import qualifications from "./author/qualifications";
import experience from "./author/experience";

const history = {
	education: [
		{
			icon: IconSchool,
			title: qualifications.degrees.bachelors[0].qualification,
			field: qualifications.degrees.bachelors[0].field,
			poi: qualifications.degrees.bachelors[0].poi,
			period: qualifications.degrees.bachelors[0].period,
		},
		{
			icon: IconCertificate,
			title: qualifications.certificates.academic.traditional[1]
				.qualification,
			field: qualifications.certificates.academic.traditional[1].field,
			poi: qualifications.certificates.academic.traditional[1].poi,
			period: qualifications.certificates.academic.traditional[1].period,
		},
		{
			icon: IconCertificate,
			title: qualifications.certificates.academic.traditional[0]
				.qualification,
			field: qualifications.certificates.academic.traditional[0].field,
			poi: qualifications.certificates.academic.traditional[0].poi,
			period: qualifications.certificates.academic.traditional[0].period,
		},
	],
	work: [
		{
			icon: IconCode,
			title: experience[1].position,
			field: experience[1].field,
			poi: experience[1].pow,
			period: experience[1].period,
		},
		{
			icon: IconCpu,
			title: experience[0].position,
			field: experience[0].field,
			poi: experience[0].pow,
			period: experience[0].period,
		},
	],
};

export default history;
