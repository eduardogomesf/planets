import { styled } from ".."

export const HeaderContainer = styled('header', {
    width: '100%',
    padding: '1.5rem',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    borderBottom: '1px solid rgba(255, 255, 255, 0.2)',

    '> strong': {
        fontWeight: 400,
        fontSize: '1.75rem',
        lineHeight: '36px',
        letterSpacing: '-1.05px',
        textTransform: 'uppercase',
        fontFamily: "'Antonio', sans-serif",
    }
})

export const HeaderNav = styled('div', {
    display: 'flex',
    alignItems: 'center',
    gap: '2rem',

    listStyle: 'none',

    '> button': {
        fontFamily: "'League Spartan', sans serif",
        fontWeight: 700,
        fontSize: '0.6875rem',
        lineHeight: '25px',
        letterSpacing: '1px',
        textTransform: 'uppercase',

        color: '$white',
        border: 'none',
        background: 'transparent',

        opacity: 0.75,

        cursor: 'pointer',

        '&:hover': {
            opacity: 1,
            transition: 'opacity 0.2s',
        }
    }
})