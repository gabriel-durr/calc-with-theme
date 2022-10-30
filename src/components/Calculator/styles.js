import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: flex-end;
	position: relative;
	padding: 20px;
	width: 500px;
	height: 600px;
	background-color: rgba(85, 120, 185, 0.7);
	-webkit-backdrop-filter: blur(18px);
	backdrop-filter: blur(18px);
	border: 1px solid rgba(255, 255, 255, 0.25);
	border-radius: 10px;
`;

export const SubContainer = styled.div`
	display: flex;
	justify-content: center;
	width: 100%;
	gap: 30px;
	padding: 30px;
`;

export const NumbersContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 10.2px;
	justify-items: center;
`;

export const OthersOperators = styled.div`
	display: flex;
	flex-direction: column;
	gap: 10px;
`;
