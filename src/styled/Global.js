import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`

* {
    padding:0;
    margin:0;
    box-sizing: border-box;
}

body {
    font-family: "Poppins", sans-serif;
    background: linear-gradient(180deg,#f7bb97, #dd5e89);
    background-attachment: fixed;
    height: 100vh;
    width: 100vw;
}

`;