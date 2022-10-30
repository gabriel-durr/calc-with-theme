import {useContext} from "react";
import {ThemeContext} from "./Context/ThemeContext";
import {Box} from "./../styles/container";

export const Container = ({children}) => {
	const {theme, useColorMode} = useContext(ThemeContext);

	return (
		<Box theme={theme} useColorMode={useColorMode}>
			{children}
		</Box>
	);
};
