import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    :focus {
        outline: 0;
    }

    body {
        background: ${({ theme }) => theme.colors["dark-blue"]};
        -webkit-font-smoothing: antialiased;
    }

    body, input, button, textarea {
        font: 400 '0.875rem' 'League Spartan', sans-serif;
    }


`