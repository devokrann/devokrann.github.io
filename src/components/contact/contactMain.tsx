import React, { useState } from "react";
import {
	TextInput,
	Textarea,
	SimpleGrid,
	Group,
	Button,
	Loader,
	Flex,
} from "@mantine/core";
import { useForm } from "@mantine/form";

// api
import emailjs from "emailjs-com";

export default function ContactMain() {
	const [submitted, setSubmitted] = useState(false);

	const form = useForm({
		initialValues: {
			name: "",
			email: "",
			subject: "",
			message: "",
		},
		validate: {
			name: (value) =>
				value.trim().length > 2
					? null
					: "Name with at least 3 characters",
			email: (value) =>
				/^\S+@\S+$/.test(value) ? null : "Invalid Email",
			subject: (value) =>
				value.trim().length > 2
					? null
					: "Subject with at least 3 characters",
			message: (value) =>
				value.trim().length > 2 ? null : "Message too short",
		},
	});

	const handleSubmit = async (event) => {
		event.preventDefault();

		form.validate();

		if (form.isValid()) {
			setSubmitted(!submitted);

			// await emailjs
			// 	.sendForm(
			// 		"contact_form",
			// 		"contact_form",
			// 		event.target,
			// 		"L0fxLHlUqAgwXsBD8"
			// 	)
			// 	.then(
			// 		(result) => {
			// 			console.log(result.text);
			// 			alert("Message sent. Kevon will be in touch.");
			// 			form.reset();
			// 			setSubmitted(false);
			// 		},
			// 		(error) => {
			// 			console.log(error.text);
			// 		}
			// 	);
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			<SimpleGrid
				cols={2}
				mt="xl"
				breakpoints={[{ maxWidth: "sm", cols: 1 }]}
			>
				<TextInput
					label="Name"
					placeholder="Your name"
					name="name"
					variant="filled"
					{...form.getInputProps("name")}
				/>
				<TextInput
					label="Email"
					placeholder="Your email"
					name="email"
					variant="filled"
					{...form.getInputProps("email")}
				/>
			</SimpleGrid>

			<TextInput
				label="Subject"
				placeholder="Subject"
				mt="md"
				name="subject"
				variant="filled"
				{...form.getInputProps("subject")}
			/>
			<Textarea
				mt="md"
				label="Message"
				placeholder="Your message"
				maxRows={8}
				minRows={3}
				autosize
				name="message"
				variant="filled"
				{...form.getInputProps("message")}
			/>

			<Group position="center" mt="xl">
				<Button type="submit" fullWidth disabled={submitted}>
					{submitted ? (
						<Flex align={"center"} gap={"md"}>
							<span>Sending</span> <Loader size={"sm"} />
						</Flex>
					) : (
						"Send"
					)}
				</Button>
			</Group>
		</form>
	);
}
