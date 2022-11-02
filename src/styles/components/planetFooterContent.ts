import { styled } from "..";

export const PlanetFooterContentContainer = styled('div', {
    marginTop: '6rem',
    width: '100%',
    padding: '0 2rem',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '2rem',

    '@media (min-width: 768px) and (max-width: 1080px)': {
        gap: '0.75rem'
    },

    '@media (max-width: 768px)': {
        margin: '2.25rem auto 0',
        maxWidth: "21.1875rem",
        padding: '0',

        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '0.5rem',
    },
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
            fontSize: '0.75rem'
        },

        strong: {
            fontSize: '1.5rem'
        }
    },

    '@media (max-width: 768px)': {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flex: 0,

        // height: '4rem',
        padding: '0.75rem 3rem',

        span: {
            fontSize: '0.75rem'
        },

        strong: {
            fontSize: '1.25rem'
        }
    },

})