import {useContext} from "react";
import {ThemeContext} from "./../../Context/ThemeContext";
import {Container} from "./styles";

export const PainelValue = ({value, colorResult}) => {
	const {useColorMode} = useContext(ThemeContext);

	return (
		<Container mode={colorResult} useColorMode={useColorMode}>
			{value}
		</Container>
	);
};
