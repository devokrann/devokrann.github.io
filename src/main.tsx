import React from "react";
import ReactDOM from "react-dom/client";

// app
import App from "./views";

// styles
import "./styles/global.scss";

// ui
import { MantineProvider } from "@mantine/core";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<MantineProvider
			theme={{
				colors: {
					primary: [
						"#ffeede",
						"#fcd1b4",
						"#f6b588",
						"#f1975a",
						"#ed792c",
						"#d36013",
						"#a54b0e",
						"#773509",
						"#491f02",
						"#1e0800",
					],
				},
				primaryColor: "primary",
				colorScheme: "light",
			}}
		>
			<App />
		</MantineProvider>
	</React.StrictMode>
);

// npm run deploy
