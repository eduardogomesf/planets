import { styled } from ".."

export const PlanetContainer = styled('div', {
    maxWidth: '58.75rem',
    width: '100%',
    margin: '0 auto',

    display: 'flex',
    alignItems: 'center',
    gap: '18.75rem',

    '@media (min-width: 768px) and (max-width: 1080px)': {
        flexDirection: 'column',
        justifyContent: 'center',
        gap: '8.125rem',
    },


    '@media (max-width: 768px)': {
        flexDirection: 'column',
        justifyContent: 'center',
        gap: '3rem',
    },
})

export const PlanetDescription = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    gap: '2.4375rem',

    'div.content-text': {
        display: 'flex',
        flexDirection: 'column',
        gap: "1.5rem",
        maxWidth: "21.1875rem",

        '> p': {
            fontWeight: 400,
            fontSize: '0.875rem',
            lineHeight: '25px',

            color: '$white',
        },
    },

    '@media (min-width: 768px) and (max-width: 1080px)': {
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        gap: '4.3125rem',

        'div.content-text': {
            '> h1': {
                fontSize: '3rem',
            },

            '> p': {
                fontSize: '1rem'
            }
        }
    },

    '@media (max-width: 768px)': {

        'div.content-text': {
            padding: '0',

            alignItems: 'center',

            '> h1': {
                fontSize: '2.5rem',
            },

            '> p': {
                fontSize: '1rem'
            }
        }
    },

})

export const ImageContainer = styled('div', {
    display: 'flex',
    align: 'center',
    justifyContent: 'center',
    flexDirection: 'column',

    '.geology-image': {
        display: 'block',
        margin: '-30% auto',
    },


    '@media (max-width: 768px)': {
        '> img': {
            width: 154,
            height: 154,
        }
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

    '@media (min-width: 768px) and (max-width: 1080px)': {
        span: {
            fontSize: '0.75rem',
        },

        a: {
            fontSize: '0.75rem',
        }
    },

    '@media (max-width: 768px)': {
        span: {
            fontSize: '0.75rem',
        },

        a: {
            fontSize: '0.75rem',
        }
    },

})

export const ButtonsContainer = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',

    '@media (min-width: 768px) and (max-width: 1080px)': {
        maxWidth: '17.5625rem',
        width: '100%'
    },

    '@media (max-width: 768px)': {
        display: 'none'
    },
})

export const ContentButton = styled('button', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',

    height: '3rem',
    padding: '0 1.75rem',

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
        marginRight: '1.75rem',
        opacity: 0.5
    },

    '@media (min-width: 768px) and (max-width: 1080px)': {
        fontSize: '0.5625rem',

        span: {
            marginRight: '1rem',
        },
    }

})