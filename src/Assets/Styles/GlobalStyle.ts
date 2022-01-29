import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
    }
    body{
        font-family: 'Noto Sans KR', sans-serif;
    }
    li{
        list-style-type: none;
    }
    a{
        text-decoration:none;
        color:inherit;
    }
`;

export default GlobalStyle;
