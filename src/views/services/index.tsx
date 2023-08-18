// ui
import { Container, Grid } from "@mantine/core";

// components
import Main from "../../components/main";
import ContentMain from "../../components/contentMain";
import CardServices from "../../components/cards/cardServices";

//data
import services from "../../data/services";

export default function Services() {
	return (
		<div>
			<Main>
				<Container>
					<ContentMain heading={"Services"}>
						<Grid justify="center">
							{services.map((service, key) => (
								<Grid.Col xs={12} sm={6} md={4} key={key}>
									<CardServices
										icon={service.icon}
										service={service.service}
										description={service.description}
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
