import {PainelValue} from "./PainelValue";
import {useState} from "react";
import {Operator} from "./Operator";
import {
	Container,
	SubContainer,
	NumbersContainer,
	OthersOperators,
} from "./styles";

export const Calculator = () => {
	const [value, setValue] = useState([]);
	const [colorResult, setColorResult] = useState(false);

	function handleOperator(op) {
		if (
			typeof op !== "number" &&
			typeof value[value.length - 1] !== "number"
		)
			return;
		setValue(prevValue => [...prevValue, op]);
		setColorResult(false);
	}

	function handleClear() {
		setValue([]);
		setColorResult(false);
	}

	function handleResult() {
		const verifyOperators = value.some(
			currentValue => typeof currentValue !== "number"
		);

		if (!value || value.length < 3 || !verifyOperators) return;
		const valueCopy = [...value];

		const result = eval(valueCopy.toString().replace(/\,/g, ""));

		setValue([result]);
		setColorResult(true);
	}

	return (
		<Container>
			<PainelValue value={value} colorResult={colorResult} />
			<SubContainer>
				<NumbersContainer>
					<Operator addOperator={handleOperator} op={1} />
					<Operator addOperator={handleOperator} op={2} />
					<Operator addOperator={handleOperator} op={3} />
					<Operator addOperator={handleOperator} op={4} />
					<Operator addOperator={handleOperator} op={5} />
					<Operator addOperator={handleOperator} op={6} />
					<Operator addOperator={handleOperator} op={7} />
					<Operator addOperator={handleOperator} op={8} />
					<Operator addOperator={handleOperator} op={9} />
					<Operator addOperator={handleOperator} op={0} />
					<Operator addOperator={handleResult} op="=" />
					<Operator addOperator={handleClear} op="c" />
				</NumbersContainer>

				<OthersOperators>
					<Operator addOperator={handleOperator} op="+" />
					<Operator addOperator={handleOperator} op="-" />
					<Operator addOperator={handleOperator} op="*" />
					<Operator addOperator={handleOperator} op="/" />
				</OthersOperators>
			</SubContainer>
		</Container>
	);
};
