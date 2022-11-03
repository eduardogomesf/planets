import { styled } from "..";

export const BurgerContainer = styled('button', {
    width: '2rem',
    height: '2rem',

    background: 'none',
    border: 'none',

    display: 'none',

    position: 'fixed',
    top: '1.5rem',
    right: '1.5rem',

    cursor: 'pointer',

    div: {
        width: '2rem',
        height: '0.25rem',

        borderRadius: 10,

        backgroundColor: '$white',

        transition: 'all 0.3s linear',

        transformOrigin: '1px',
    },

    variants: {
        isOpen: {
            open: {
                'div:nth-child(1)': {
                    transform: 'rotate(45deg)'
                },

                'div:nth-child(2)': {
                    transform: 'translateX(100%)',
                    opacity: 0,
                },

                'div:nth-child(3)': {
                    transform: 'rotate(-45deg)'
                },
            },
            closed: {
                div: {
                    opacity: 0.7,
                },

                'div:nth-child(1)': {
                    transform: 'rotate(0)'
                },

                'div:nth-child(2)': {
                    transform: 'translateX(0)',
                    opacity: 0.7,
                },

                'div:nth-child(3)': {
                    transform: 'rotate(0)'
                },
            }
        },
    },

    '@media (max-width: 768px)': {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around',
    }
})