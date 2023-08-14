// ui
import { Container, Grid } from "@mantine/core";

// components
import Main from "../../components/main";
import ContentMain from "../../components/contentMain";
import CompCard from "../../components/card";

//data
import services from "../../data/services";

export default function Services() {
	return (
		<div>
			<Main>
				<Container>
					<ContentMain heading={"Services"}>
						<Grid>{services.map((item) => {})}</Grid>
					</ContentMain>
				</Container>
			</Main>
			<aside></aside>
		</div>
	);
}
