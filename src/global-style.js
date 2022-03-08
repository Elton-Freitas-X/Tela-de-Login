import { createGlobalStyle } from "styled-components";

const globalStyle = createGlobalStyle`

    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    body {
        padding: 0;
        margin: 0;
        height: 100%;
        width: 100%;
        background-color: #121214;
        color: #fff;
    }
`

export default globalStyle;