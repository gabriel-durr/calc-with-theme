import {Container} from "./styles";

export const Operator = ({op, addOperator}) => {
	return <Container onClick={() => addOperator(op)}>{op}</Container>;
};
