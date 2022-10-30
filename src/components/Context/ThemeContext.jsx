import {createContext, useState} from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {
	const [switchTheme, setSwitchTheme] = useState(false);
	const typeTheme = switchTheme ? "dark" : "light";
	const theme = switchTheme ? "var(--dark)" : "var(--light)";

	function useColorMode(firstValue, secondValue) {
		if (typeTheme === "dark") {
			return firstValue;
		}
		return secondValue;
	}

	function alternateTheme() {
		setSwitchTheme(!switchTheme);
	}

	return (
		<ThemeContext.Provider
			value={{alternateTheme, useColorMode, theme, typeTheme}}>
			{children}
		</ThemeContext.Provider>
	);
};
