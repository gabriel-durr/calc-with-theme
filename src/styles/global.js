import {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`


* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}


html {
    @media (max-width: 1080px) {
        font-size: 93.75%; // 15px
    }
    @media (max-width: 720px) {
        font-size: 87.5%; // 14px
    }
}

body {
    /* cor da página e font mais nitida */
    -webkit-font-smothing: antialiased;
}


:root {
	--dark: #020202;
	--light: #f3f3f3;
	--gray900: #0f0f0f;
	--white900: rgba(255, 255, 255, 0.724);
    --white800: rgba(255, 255, 255, 1);
    --whiteblue900: rgba(229,246,253,1);
    --whiteblue800: rgba(252,254,254,1);
    --whiteblue800: rgba(253,242,217,1);
	--darkblue900: #0276aa;
}

button {
    cursor: pointer;
}

[disabled] {
    opacity: 0.6;
    cursor: not-allowed;
}

`;
