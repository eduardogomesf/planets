import { styled } from ".."

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
    gap: '2.4375rem',

    maxWidth: '21.875rem',

    'div.content-text': {
        display: 'flex',
        flexDirection: 'column',
        gap: "1.5rem",

        '> p': {
            fontWeight: 400,
            fontSize: '0.875rem',
            lineHeight: '25px',

            color: '$white',
        },
    },

})

export const ImageContainer = styled('div', {
    width: '18.125rem',
    height: "18.125rem",

    position: 'relative',

    '.geology-image': {
        position: 'absolute',
        left: 64,
        top: 226
    }
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
})

export const ContentButton = styled('button', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',

    height: '3rem',

    '&:hover': {
        transition: 'background 0.2s',
    },

    variants: {
        isActive: {
            inactive: {
                backgroundColor: 'transparent',
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
        },
        bgColorOnHover: {
            'Mercury': {
                '&:hover': {
                    backgroundColor: '$light-blue',
                }
            },
            'Venus': {
                '&:hover': {
                    backgroundColor: '$light-orange',
                }
            },
            'Earth': {
                '&:hover': {
                    backgroundColor: '$purple',
                }
            },
            'Mars': {
                '&:hover': {
                    backgroundColor: '$dark-orange',
                }
            },
            'Jupiter': {
                '&:hover': {
                    backgroundColor: '$light-red',
                }
            },
            'Saturn': {
                '&:hover': {
                    backgroundColor: '$orange',
                }
            },
            'Uranus': {
                '&:hover': {
                    backgroundColor: '$cyan',
                }
            },
            'Neptune': {
                '&:hover': {
                    backgroundColor: '$blue',
                }
            }
        }
    },

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

})