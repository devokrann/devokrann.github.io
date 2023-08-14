import { createStyles, Container, Group, ActionIcon, rem } from "@mantine/core";
import {
	IconBrandLinkedin,
	IconBrandGithub,
	IconBrandBehance,
	IconBrandDribbble,
	IconBrandLeetcode,
} from "@tabler/icons-react";

const useStyles = createStyles((theme) => ({
	footer: {
		// marginTop: rem(120),
		borderTop: `${rem(1)} solid ${
			theme.colorScheme === "dark"
				? theme.colors.dark[5]
				: theme.colors.gray[2]
		}`,
	},

	inner: {
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		paddingTop: theme.spacing.xl,
		paddingBottom: theme.spacing.xl,

		[theme.fn.smallerThan("xs")]: {
			flexDirection: "column",
		},
	},

	links: {
		[theme.fn.smallerThan("xs")]: {
			marginTop: theme.spacing.md,
		},
	},

	linksFooter: {
		color: theme.colors.primary[4],
		textDecoration: "none",
		fontFamily: theme.fontFamily,
		fontWeight: 500,
		fontSize: theme.fontSizes.sm,

		"&:hover": {
			color: theme.colors.gray[6],
		},
	},
}));

export function Footer() {
	const { classes } = useStyles();

	return (
		<footer className={classes.footer}>
			<Container className={classes.inner}>
				<Group
					spacing={0}
					className={classes.links}
					position="right"
					noWrap
				>
					<ActionIcon size="lg">
						<IconBrandLinkedin size="1.05rem" stroke={1.5} />
					</ActionIcon>
					<ActionIcon size="lg">
						<IconBrandGithub size="1.05rem" stroke={1.5} />
					</ActionIcon>
					<ActionIcon size="lg">
						<IconBrandBehance size="1.05rem" stroke={1.5} />
					</ActionIcon>
					<ActionIcon size="lg">
						<IconBrandDribbble size="1.05rem" stroke={1.5} />
					</ActionIcon>
					<ActionIcon size="lg">
						<IconBrandLeetcode size="1.05rem" stroke={1.5} />
					</ActionIcon>
				</Group>
				<a
					href="mailto:kevon.kibochi@outlook.com"
					className={classes.linksFooter}
				>
					kevon.kibochi@outlook.com
				</a>
			</Container>
		</footer>
	);
}
