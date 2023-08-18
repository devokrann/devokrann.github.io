// ui
import { Container, Grid } from "@mantine/core";

// components
import Main from "../../components/main";
import ContentMain from "../../components/contentMain";
import { CardSkills } from "../../components/cards/cardSkills";

// data
import skills from "../../data/skills";

export default function Skills() {
	return (
		<div>
			<Main>
				<Container>
					<ContentMain heading={"Skills"}>
						<Grid>
							{skills.map((item, key) => (
								<Grid.Col xs={12} sm={6} md={4} key={key}>
									<CardSkills
										icon={item.icon}
										skill={item.skill}
										proficiency={item.proficiency}
									/>
								</Grid.Col>
							))}
						</Grid>
					</ContentMain>
				</Container>
			</Main>
			<aside></aside>
		</div>
	);
}
