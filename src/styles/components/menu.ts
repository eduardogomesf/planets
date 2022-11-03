import { styled } from ".."

export const MenuContainer = styled('div', {
    width: '100%',
    margin: '2.5rem auto',
    padding: '0 2rem',

    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '1.25rem',
})

export const MenuOption = styled('button', {
    width: '100%',
    height: '2.875rem',
    marginBottom: '1.25rem',

    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',

    background: 'transparent',
    color: '$white',
    border: 'none',
    borderBottom: '1px solid rgba(255, 255, 255, 0.2)',

    fontSize: '0.9375rem',
    fontWeight: 700,
    lineHeight: '25px',
    letterSpacing: '1.36364px',
    textTransform: 'uppercase',


    cursor: 'pointer',

    div: {
        display: 'flex',
        alignItems: 'flex-start',
        gap: '1rem'
    },

    svg: {
        opacity: 0.7
    },

    '&:hover': {
        svg: {
            opacity: 1,
        }
    }
})

export const Circle = styled('div', {
    height: '1.25rem',
    width: '1.25rem',
    borderRadius: '50%',

    variants: {
        bgColor: {
            'Mercury': {
                backgroundColor: '$light-blue',
            },
            'Venus': {
                backgroundColor: '$light-orange',
            },
            'Earth': {
                backgroundColor: '$purple',
            },
            'Mars': {
                backgroundColor: '$dark-orange',
            },
            'Jupiter': {
                backgroundColor: '$light-red',
            },
            'Saturn': {
                backgroundColor: '$orange',
            },
            'Uranus': {
                backgroundColor: '$cyan',
            },
            'Neptune': {
                backgroundColor: '$blue',
            }
        }
    }

})