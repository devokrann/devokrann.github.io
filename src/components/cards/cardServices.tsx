import React from "react";
import { Card, Text, createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
	card: {
		transition: ".5s all ease",
		height: "100%",

		"&:hover": {
			transform: "scale(1.05)",
			color: theme.colors.primary[3],
		},
	},
	cardIcon: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		padding: theme.spacing.xl,
	},
	cardHeader: {
		color: theme.colors.primary[3],
	},
}));

interface typeCustom {
	icon: any;
	service: string;
	description: string;
}

export default function CardServices({
	icon,
	service,
	description,
}: typeCustom) {
	const { classes } = useStyles();
	return (
		<Card shadow="xs" className={classes.card}>
			<Card.Section className={classes.cardIcon}>
				{React.createElement(icon, { size: 36 })}
			</Card.Section>

			<Text weight={500} size="lg" mt="md" className={classes.cardHeader}>
				{service}
			</Text>

			<Text mt="xs" color="dimmed" size="sm">
				{description}
			</Text>
		</Card>
	);
}
