import { HeaderContainer, HeaderNav } from "../styles/components/header";

export function Header () {
    return (
        <HeaderContainer>
            <strong>THE PLANETS</strong>

            <HeaderNav>
                <li>Mercury</li>
                <li>Venus</li>
                <li>Earth</li>
                <li>Mars</li>
                <li>Jupiter</li>
                <li>Saturn</li>
                <li>Uranus</li>
                <li>Neptune</li>
            </HeaderNav>
        </HeaderContainer>
    )
}