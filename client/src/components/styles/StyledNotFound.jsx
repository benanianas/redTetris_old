import styled from "styled-components";

export const NotFoundWrapper = styled.section`
	width: 100vw;
	height: 80vh;
	background: #151a49;
	display: flex;
	align-items: center;
	flex-direction: column;
	justify-content: center;
`;

export const LottieWrapper = styled.div`
	max-width: 1200px;
`;

export const HomeButton = styled.button`
	color: #da38a9;
	box-sizing: border-box;
	margin: 3rem 0;
	padding: 20px;
	min-height: 30px;
	border-radius: 20px;
	border: 8px solid;
	background: none;
	font-family: Pixel, Arial, Helvetica, sans-serif;
	font-size: 1.2rem;
	outline: none;
	cursor: pointer;
	transition 0.7s ; 
    
    &&:hover {
		transform: scale(1.2);
		transition: 1.5s in-out;
	}
`;
