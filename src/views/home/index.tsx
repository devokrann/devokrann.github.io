// ui
import { Center, Container, createStyles, Flex } from "@mantine/core";

// components
import Main from "../../components/main";

// utils
import ReactTyped from "react-typed";

// data
import specialties from "../../data/author/specialties";

// images
import author from "../../assets/images/author.svg";

const useStyles = createStyles((theme) => ({
	heading: {},
	greeting: {
		fontSize: theme.fontSizes.xl,
		fontWeight: "normal",
	},
	name: {
		color: theme.colors.primary[3],
		fontWeight: 800,
		fontSize: "36pt",
	},
	expertise: {
		color: theme.colors.primary[3],
		fontWeight: 500,
		fontSize: theme.fontSizes.xl,
		textTransform: "capitalize",
	},
	author: {
		padding: "3pt",
		border: `2px solid black`,
	},
}));

export default function Home() {
	const { classes } = useStyles();

	return (
		<div>
			<Main>
				<Container>
					<Flex
						direction={{ base: "column", sm: "row" }}
						align={"center"}
						justify={{ base: "center", sm: "space-between" }}
						gap={"md"}
					>
						<Flex
							direction={"column"}
							align={{ base: "center", sm: "start" }}
						>
							<h1 className={classes.heading}>
								<span className={classes.greeting}>
									Hello, I'm
									<br />
								</span>{" "}
								<span className={classes.name}>
									Kevon Kibochi
								</span>
							</h1>
							<p>
								I do{" "}
								<ReactTyped
									className={classes.expertise}
									strings={specialties.design
										.map((item) => item.specialty)
										.concat(
											specialties.development.map(
												(item) => item.specialty
											)
										)
										.concat(
											specialties.sourceControl.map(
												(item) => item.specialty
											)
										)}
									loop={true}
									loopCount={3}
									typeSpeed={50}
									backSpeed={10}
									backDelay={1500}
									cursorChar=" _"
								></ReactTyped>
							</p>
						</Flex>
						<Center miw={{ base: "25vw", sm: "15vw" }} mb={"xl"}>
							<img
								className={classes.author}
								src={author}
								alt="Kevon"
								width={"100%"}
							/>
						</Center>
					</Flex>
				</Container>
			</Main>
			{/* <aside></aside> */}
		</div>
	);
}
