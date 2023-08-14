import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
	main: {
		fontFamily: theme.fontFamily,
		position: "relative",
	},
}));

export default function Main({ children }: any) {
	const { classes } = useStyles();

	return <main className={classes.main}>{children}</main>;
}
