import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// views
import Home from "./home";
import Services from "./services";
import Skills from "./skills";
import Experience from "./experience";
import Contact from "./contact";

// components
import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";

// data
import linksNavbar from "../data/linksNavbar";

// ui
import { Flex } from "@mantine/core";

export default function App() {
	return (
		<>
			<Router>
				<Flex
					direction={"column"}
					justify={"space-between"}
					mih={"100vh"}
				>
					<Navbar links={linksNavbar} />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/services" element={<Services />} />
						<Route path="/skills" element={<Skills />} />
						<Route path="/experience" element={<Experience />} />
						<Route path="/contact" element={<Contact />} />
					</Routes>
					<Footer />
				</Flex>
			</Router>
		</>
	);
}
