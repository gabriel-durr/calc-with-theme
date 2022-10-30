import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	justify-content: center;
	position: absolute;
	top: 2%;
	align-items: center;
	border-radius: 5px;
	width: 90%;
	height: 100px;
	font-size: 1.5rem;
	background: rgba(0, 0, 0, 0.9);
	-webkit-backdrop-filter: blur(8px);
	backdrop-filter: blur(8px);
	border: 1px solid rgba(0, 0, 0, 0.45);

	color: ${({mode, useColorMode}) =>
		mode
			? "#40d30b"
			: useColorMode("var(--whiteblue800)", "var(--whiteblue700)")};
`;
