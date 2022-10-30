import {Calculator} from "./components/Calculator";
import {Container} from "./components/Container";
import {SwitchModeButton} from "./components/SwitchModeButton";

const App = () => {
	return (
		<Container>
			<SwitchModeButton />
			<Calculator />
		</Container>
	);
};

export default App;
