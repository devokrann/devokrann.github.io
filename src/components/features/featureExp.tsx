import { createStyles, Text, SimpleGrid, Container, rem } from "@mantine/core";
import { IconCertificate, IconSchool } from "@tabler/icons-react";

const useStyles = createStyles((theme) => ({
	feature: {
		position: "relative",
		paddingTop: theme.spacing.xl,
		paddingLeft: theme.spacing.xl,
	},

	overlay: {
		position: "absolute",
		height: rem(100),
		width: rem(160),
		top: 0,
		left: 0,
		backgroundColor: theme.fn.variant({
			variant: "light",
			color: theme.primaryColor,
		}).background,
		zIndex: 1,
	},

	content: {
		position: "relative",
		zIndex: 2,
	},

	icon: {
		color: theme.fn.variant({ variant: "light", color: theme.primaryColor })
			.color,
	},

	title: {
		color: theme.colorScheme === "dark" ? theme.white : theme.black,
	},

	field: {
		fontWeight: 500,
		fontSize: theme.fontSizes.sm,
	},
}));

interface FeatureProps extends React.ComponentPropsWithoutRef<"div"> {
	icon: React.FC<any>;
	title: string;
	field: string;
	poi: string;
	period: string;
}

function Feature({
	icon: Icon,
	title,
	field,
	poi,
	period,
	className,
	...others
}: FeatureProps) {
	const { classes, cx } = useStyles();

	return (
		<div className={cx(classes.feature, className)} {...others}>
			<div className={classes.overlay} />

			<div className={classes.content}>
				<Icon size={rem(38)} className={classes.icon} stroke={1.5} />
				<Text fw={700} fz="lg" mb="xs" mt={5} className={classes.title}>
					{title}{" "}
					<span className={classes.field}>
						{field && "[" + field + "]"}
					</span>
				</Text>
				<Text c="dimmed" fz="sm" mb="xs">
					{poi}
				</Text>
				<Text c="dimmed" fz={"xs"}>
					{period}
				</Text>
			</div>
		</div>
	);
}

interface typeFeatureExp {
	data: any;
}

export default function FeatureExp({ data }: typeFeatureExp) {
	const items = data.map((item) => <Feature {...item} key={item.title} />);

	return (
		<Container mt={30} mb={30} size="lg">
			<SimpleGrid
				cols={1}
				spacing={"xl"}
				breakpoints={[{ maxWidth: "sm", cols: 1 }]}
			>
				{items}
			</SimpleGrid>
		</Container>
	);
}
