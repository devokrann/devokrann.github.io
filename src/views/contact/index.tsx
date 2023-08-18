// ui
import { Blockquote, Container, Grid } from "@mantine/core";

// components
import Main from "../../components/main";
import ContentMain from "../../components/contentMain";
import SocialContact from "../../components/social/socialContact";

// data
import contact from "../../data/contact";
import ContactMain from "../../components/contact/contactMain";

export default function Contact() {
	return (
		<div>
			<Main>
				<Container>
					<ContentMain heading={"Get in Touch"}>
						<Grid align="center" w={"100%"}>
							<Grid.Col xs={12} md={6} p={"md"}>
								<Blockquote cite={"- Kevon"} mb={"lg"}>
									I'm always open to discuss new projects and
									talk about new things. Reach out so together
									we can help make the web a better place.
								</Blockquote>
								<SocialContact data={contact} />
							</Grid.Col>
							<Grid.Col xs={12} md={6} p={"md"}>
								<ContactMain />
							</Grid.Col>
						</Grid>
					</ContentMain>
				</Container>
			</Main>
			<aside></aside>
		</div>
	);
}
