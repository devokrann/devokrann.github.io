import React from "react";
import {
	createStyles,
	ThemeIcon,
	Progress,
	Text,
	Group,
	Badge,
	Paper,
	rem,
} from "@mantine/core";
import { IconSwimming } from "@tabler/icons-react";

const ICON_SIZE = rem(60);

const useStyles = createStyles((theme) => ({
	card: {
		position: "relative",
		overflow: "visible",
		padding: theme.spacing.xl,
		paddingTop: `calc(${theme.spacing.xl} * 1.5 + ${ICON_SIZE} / 3)`,
	},

	icon: {
		position: "absolute",
		top: `calc(-${ICON_SIZE} / 3)`,
		left: `calc(50% - ${ICON_SIZE} / 2)`,
		backgroundColor: theme.colors.primary[3],
	},

	title: {
		fontFamily: `Greycliff CF, ${theme.fontFamily}`,
		lineHeight: 1,
	},
}));

interface typeCardSkills {
	icon: any;
	skill: string;
	proficiency: number;
}

export function CardSkills({ icon, skill, proficiency }: typeCardSkills) {
	const { classes } = useStyles();

	return (
		<Paper
			radius="md"
			withBorder
			className={classes.card}
			mt={`calc(${ICON_SIZE} / 3)`}
		>
			<ThemeIcon
				className={classes.icon}
				size={ICON_SIZE}
				radius={ICON_SIZE}
			>
				{React.createElement(icon, { size: 36, stroke: 1.5 })}
			</ThemeIcon>

			<Text
				ta="center"
				fw={700}
				className={classes.title}
				sx={{ textTransform: "uppercase" }}
			>
				{skill}
			</Text>
			<Text c="dimmed" ta="center" fz="sm">
				{/* <p>
					{subSkills &&
						subSkills.map((item, key) => item.variant + ",")}
				</p> */}
			</Text>

			<Group position="apart" mt="xs">
				<Text fz="sm" color="dimmed">
					Proficiency
				</Text>
				<Text fz="sm" color="dimmed">
					{proficiency + "%"}
				</Text>
			</Group>

			<Progress value={proficiency} mt={5} color={"#f1975a"} size={2} />

			{/* <Group position="apart" mt="md">
				<Text fz="sm">20 / 36 km</Text>
				<Badge size="sm">4 days left</Badge>
			</Group> */}
		</Paper>
	);
}
