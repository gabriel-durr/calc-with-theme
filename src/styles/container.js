import styled from "styled-components";

export const Box = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	flex-direction: column;
	padding-top: 2rem;
	width: 100vw;
	height: 100vh;
	color: ${({theme}) => theme};
	background-image: url("/nazare.jpg");
	background-size: linear-gradient(0deg, #5578b9, #dde4f1), url("/nazare.jpg");
	background-blend-mode: luminosity;

	background-color: ${({useColorMode}) =>
		useColorMode("var(--white900)", "var(--gray900)")};
`;
