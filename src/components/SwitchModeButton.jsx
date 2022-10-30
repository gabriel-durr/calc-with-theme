import {useContext} from "react";
import {ThemeContext} from "./Context/ThemeContext";

export const SwitchModeButton = () => {
	const {alternateTheme, useColorMode} = useContext(ThemeContext);

	return (
		<button
			style={{
				width: "120px",
				height: "60px",
				border: "0.0938rem dotted",
				borderRadius: "20px",
				cursor: "pointer",
				position: "absolute",
				right: "5%",
				boxShadow: useColorMode(
					"1.5px 10.5px 32px 0.5px #62d8ff",
					"1.5px 10.5px 32px 0.5px #ea9b47"
				),
				color: useColorMode("var(--darkblue900)", "var(--gray900)"),
			}}
			onClick={alternateTheme}>
			Switch Mode {useColorMode("🌙", "🌞")}
		</button>
	);
};
