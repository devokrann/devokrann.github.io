import { createStyles, Flex } from "@mantine/core";
import React from "react";

const useStyles = createStyles((theme) => ({
	root: {
		display: "flex",
		flexDirection: "column",
		gap: theme.spacing.xl,
		marginBottom: theme.spacing.xl,
	},
}));

export default function ContentMain({ heading, children }: any) {
	const { classes } = useStyles();
	return (
		<Flex
			direction={"column"}
			align={{ base: "center", sm: "start" }}
			className={classes.root}
		>
			<h1>{heading}</h1>
			{children}
		</Flex>
	);
}
