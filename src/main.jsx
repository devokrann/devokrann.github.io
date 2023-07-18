import React from "react";
import ReactDOM from "react-dom/client";

// utils
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// styles
import "./styles/index.scss";

// pages
import Home from "./pages";
import About from "./pages/about";
import Contact from "./pages/contact";
import Portfolio from "./pages/portfolio";
import Resume from "./pages/resume";
import Welcome from "./pages/welcome";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<Router>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/portfolio" element={<Portfolio />} />
				<Route path="/resume" element={<Resume />} />
				<Route path="/welcome" element={<Welcome />} />
				{/* <Route path="*" element={<NotFound/>}/> */}
			</Routes>
		</Router>
	</React.StrictMode>
);
