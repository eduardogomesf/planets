import { styled } from "..";

export const PlanetFooterContentContainer = styled('div', {
    marginTop: '6rem',
    width: '100%',
    padding: '0 2rem',
    gap: '2rem',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    '@media (min-width: 768px) and (max-width: 1080px)': {
        gap: '0.75rem'
    }

})

export const PlanetFooterContentCard = styled('div', {
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
    },

    '@media (min-width: 768px) and (max-width: 1080px)': {
        span: {
            fontSize: '0.5rem'
        },

        strong: {
            fontSize: '1.5rem'
        }
    }

})