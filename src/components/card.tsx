import { Card, Image, Text } from "@mantine/core";

interface typeCustom {
	services: { icon: string; service: string; body: string };
}

export default function CompCard({ services }: typeCustom) {
	return (
		<Card shadow="xs">
			<Card.Section>{services.icon}</Card.Section>

			<Text weight={500} size="lg" mt="md">
				{services.service}
			</Text>

			<Text mt="xs" color="dimmed" size="sm">
				{services.body}
			</Text>
		</Card>
	);
}
