import { createGlobalStyle } from "styled-components";

import backgroundStars from '../assets/background-stars.svg'

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
        background:  ${({ theme }) => `url(${backgroundStars.src}) no-repeat , ${theme.colors["dark-blue"]}`};
        color: ${({ theme }) => theme.colors.white};
        -webkit-font-smoothing: antialiased;
    }

    body, input, button, textarea {
        font: 400 '0.875rem' 'League Spartan', sans-serif;
    }
     
    h1, h2, h3, h4 {
        color: ${({ theme }) => theme.colors.white};
    }

    h1 {
        font: 400 5rem 'Antonio', sans-serif; 
        line-height: 103px;
    }

    h2 {
        font: 400 2.5rem 'Antonio', sans-serif; 
        line-height: 52px;
        letter-spacing: -1.5px;
    }

    h3 {
        font: 400 0.75rem 'League Spartan', sans-serif; 
        line-height: 25px;
        letter-spacing: 2.6px;
    }

    h4 {
        font: 400 0.6875rem 'League Spartan', sans-serif; 
        line-height: 25px;
        letter-spacing: 1px;
    }


`