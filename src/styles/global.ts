import { globalCss } from ".";

import backgroundStars from '../assets/background-stars.svg'

export const GlobalStyles = globalCss({
    '*': {
        padding: 0,
        margin: 0,
        boxSizing: 'border-box'
    },

    ':focus': {
        outline: 0,
    },

    body: {
        background: `url(${backgroundStars.src}) no-repeat , $dark-blue`,
        color: '$white',
        '-webkit-font-smoothing': 'antialiased',
    },

    'body, input, button, textarea': {
        font: "400 0.875rem 'League Spartan', sans-serif",
    },

    'h1, h2, h3, h4': {
        color: '$white',
    },

    h1: {
        font: "400 5rem 'Antonio', sans-serif",
        linHeight: '103px',
    },

    h2: {
        font: "400 2.5rem 'Antonio', sans-serif",
        lineHeight: '52px',
        letterSpacing: '-1.5px',
    },

    h3: {
        font: "400 0.75rem 'League Spartan', sans-serif",
        lineHeight: '25px',
        letterSpacing: '2.6px',
    },

    h4: {
        font: "400 0.6875rem 'League Spartan', sans-serif",
        lineHeight: '25px',
        letterSpacing: '1px',
    },
})