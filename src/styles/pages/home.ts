import { styled } from "..";

export const Container = styled('div', {
    width: '100%'
})

export const Content = styled('main', {
    margin: '7rem auto 2rem',

    maxWidth: '69.375rem',
    width: '100%',

    '@media (max-width: 768px)': {
        marginTop: '6rem',
    }
})

export const ContentTypeContainer = styled('div', {
    padding: '1rem 1.5rem 0',
    borderBottom: '1px solid rgba(255, 255, 255, 0.2)',

    display: 'none',

    '@media (max-width: 768px)': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: "space-between",
    },
})

export const ContentTypeButton = styled('button', {
    border: 'none',
    borderBottom: '4px solid transparent',
    paddingBottom: '1rem',
    height: '2rem',

    background: 'transparent',
    color: '$white',

    textTransform: 'uppercase',
    fontWeight: 700,

    cursor: 'pointer',

    variants: {
        isActive: {
            active: {
                opacity: 1,
            },
            unactive: {
                opacity: 0.5,
            }
        },

        borderBottomColorOnActive: {
            'unactive': {
                backgroundColor: 'transparent'
            },
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
    },



    '&:hover': {
        opacity: 1,
        transition: 'opacity 0.2s'
    }
})

