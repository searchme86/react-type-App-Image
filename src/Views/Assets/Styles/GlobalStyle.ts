import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    html, body,  *{
        margin:0; padding:0; box-sizing:border-box;
    }
    a{ text-decoration:none;}
    ul, li{ list-style:none;}
    fieldset { border: 1px solid #c0c0c0; margin: 0 2px; padding: 0.35em 0.625em 0.75em; }
    legend { border: 0;  padding: 0;  }
    textarea { overflow: auto; }
    optgroup { font-weight: bold; }
    table { border-collapse: collapse; border-spacing: 0; }
    td, th { padding: 0; }
    main,nav,footer{display:block; width:100%;}
`;

export default GlobalStyle;
