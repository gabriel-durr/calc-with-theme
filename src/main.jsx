import React from "react";
import ReactDOM from "react-dom/client";
import {GlobalStyle} from "./styles/global";
import App from "./App";
import {ThemeProvider} from "./components/Context/ThemeContext";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<GlobalStyle />
		<ThemeProvider>
			<App />
		</ThemeProvider>
	</React.StrictMode>
);
