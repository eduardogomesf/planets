import { styled } from "..";

export const PlanetFooterContentContainer = styled('div', {
    marginTop: '10rem',
    width: '100%',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'

})

export const PlanetFooterContentCard = styled('div', {
    maxWidth: '15.9375rem',
    width: '100%',
    height: '8rem',
    padding: '1.25rem',

    border: '1px solid rgba(255, 255, 255, 0.2)',

    span: {
        display: 'block',

        fontFamily: '"League Spartan", sans-serif',
        textTransform: "uppercase",
        fontWeight: 700,
        fontSize: "0.6875rem",
        lineHeight: '25px',
        letterSpacing: '1px',

        opacity: 0.5,
        color: '$white'
    },

    strong: {
        fontFamily: 'Antonio, sans-serif',
        fontSize: '2.5rem',
        fontWeight: '400',
        lineHeight: '52px',
        letterSpacing: '-1.5px',
        textTransform: 'uppercase',

        color: '$white'
    }

})