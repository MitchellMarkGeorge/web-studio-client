import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Fira Code';
        src: url('/fonts/Fira_Code/woff2/FiraCode-Light.woff2') format('woff2'),
            url("/fonts/Fira_Code/woff/FiraCode-Light.woff") format("woff");
        font-weight: 300;
        font-style: normal;
    }

    @font-face {
        font-family: 'Fira Code';
        src: url('/fonts/Fira_Code/woff2/FiraCode-Regular.woff2') format('woff2'),
            url("/fonts/Fira_Code/woff/FiraCode-Regular.woff") format("woff");
        font-weight: 400;
        font-style: normal;
    }

    @font-face {
        font-family: 'Fira Code';
        src: url('/fonts/Fira_Code/woff2/FiraCode-Medium.woff2') format('woff2'),
            url("/fonts/Fira_Code/woff/FiraCode-Medium.woff") format("woff");
        font-weight: 500;
        font-style: normal;
    }

    @font-face {
        font-family: 'Fira Code';
        src: url('/fonts/Fira_Code/woff2/FiraCode-SemiBold.woff2') format('woff2'),
            url("/fonts/Fira_Code/woff/FiraCode-SemiBold.woff") format("woff");
        font-weight: 600;
        font-style: normal;
    }

    @font-face {
        font-family: 'Fira Code';
        src: url('/fonts/Fira_Code/woff2/FiraCode-Bold.woff2') format('woff2'),
            url("/fonts/Fira_Code/woff/FiraCode-Bold.woff") format("woff");
        font-weight: 700;
        font-style: normal;
    }

    @font-face {
        font-family: 'Fira Code VF';
        src: url('/fonts/Fira_Code/woff2/FiraCode-VF.woff2') format('woff2-variations'),
            url('/fonts/Fira_Code/woff/FiraCode-VF.woff') format('woff-variations');
        font-weight: 300 700;
        font-style: normal;
    }

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-variant-ligatures: contextual; // allow ligarutes
    }
    html, body, #root {
        width: 100%;
        height: 100%;
        // might try and include in sf pro font itself instead of using this
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif !important;
  letter-spacing: normal !important;
    }
`;
