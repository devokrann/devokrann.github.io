// ui
import { Container, Grid, Text, createStyles } from "@mantine/core";

// components
import Main from "../../components/main";
import ContentMain from "../../components/contentMain";
import FeatureExp from "../../components/features/featureExp";
import history from "../../data/history";

const useStyles = createStyles((theme) => ({
	heading: {
		borderBottom: `1px solid ${theme.colors.gray[2]}`,
	},
}));

export default function History() {
	const { classes } = useStyles();
	return (
		<div>
			<Main>
				<Container>
					<ContentMain heading={"History"}>
						<Grid>
							<Grid.Col span={6}>
								<Text
									fw={700}
									fz={"xl"}
									className={classes.heading}
								>
									Education
								</Text>
								<FeatureExp data={history.education} />
							</Grid.Col>
							<Grid.Col span={6}>
								<Text
									fw={700}
									fz={"xl"}
									className={classes.heading}
								>
									Experience
								</Text>
								<FeatureExp data={history.work} />
							</Grid.Col>
						</Grid>
					</ContentMain>
				</Container>
			</Main>
			<aside></aside>
		</div>
	);
}
