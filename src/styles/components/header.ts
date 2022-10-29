import styled from "styled-components";

export const HeaderContainer = styled.header`
    width: 100%;
    height: 5.3125rem;
    padding: 2rem;

    display: flex;
    align-items: center;
    justify-content: space-between;

    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    
    > strong {
        font-weight: 400;
        font-size: 1.75rem;
        line-height: 36px;
        letter-spacing: -1.05px;
        text-transform: uppercase;
        font-family: 'Antonio', sans-serif;
    }
`

export const HeaderNav = styled.ul`
    display: flex;
    align-items: center;
    gap: 2rem;

    list-style: none;

     > li {
        font-family: 'League Spartan', sans-serif;
        font-weight: 700;
        font-size: 0.6875rem;
        line-height: 25px;
        letter-spacing: 1px;
        text-transform: uppercase;

        color: ${({ theme }) => theme.colors.white};

        opacity: 0.75;

        cursor: pointer;

        &:hover {
            opacity: 1;
            transition: opacity 0.2s;
        }
    }
`