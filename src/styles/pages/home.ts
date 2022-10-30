import { styled } from "..";

export const Container = styled('main', {
    width: '100%'
})

export const Content = styled('div', {
    margin: '7.875rem auto 0',

    maxWidth: '69.375rem',
    width: '100%'
})

export const PlanetContainer = styled('div', {
    maxWidth: '58.75rem',
    width: '100%',
    margin: '0 auto',

    display: 'flex',
    alignItems: 'center',
    gap: '18.75rem',
})

export const PlanetDescription = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',

    maxWidth: '21.875rem',

    '> p': {
        fontWeight: 400,
        fontSize: '0.875rem',
        lineHeight: '25px',

        color: '$white',
    },
})

export const Source = styled('div', {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',

    span: {
        fontSize: '0.875rem',
        lineHeight: '25px',

        color: '$white',
        opacity: 0.5
    },

    a: {
        fontWeight: 700,
        fontSize: '0.875rem',
        lineHeight: '25px',
        textDecoration: 'underline',

        color: '$white',
        opacity: 0.5,

        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',

        '&:hover': {
            opacity: 1,
            transition: 'opacity 0.2s',
        }
    },

})

export const ButtonsContainer = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',

    '> button': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',

        height: '3rem',

        background: 'transparent',
        border: '1px solid rgba(255, 255, 255, 0.2)',

        fontWeight: 700,
        fontSize: '0.75rem',
        lineHeight: '25px',
        letterSpacing: '2.57143px',
        textTransform: 'uppercase',

        color: '$white',

        cursor: 'pointer',

        span: {
            margin: '0 28px',
            opacity: 0.5
        },

        '&:hover': {
            background: '$light-blue',
            transition: 'background 0.2s',
        }
    }
})