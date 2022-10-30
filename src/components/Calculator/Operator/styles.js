import styled from "styled-components";

export const Container = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 2rem;
	width: 90px;
	height: 90px;
	background-color: red;
	cursor: pointer;
	color: #fff;
	transition: filter 0.2s ease;
	&:hover {
		filter: brightness(0.8);
	}

	&:active {
		border: 4px inset #330000;
	}
`;
