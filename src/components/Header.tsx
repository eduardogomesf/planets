import { Planet } from "../pages";
import { HeaderContainer, HeaderNav } from "../styles/components/header";
import { Burger } from "./Burger";

type HeaderProps = {
    planets: Planet[]
    onSelectPlanet: (planetName: string) => void
    isOpen: boolean
    toggleMenu: () => void
}

export function Header ({ planets, onSelectPlanet, isOpen, toggleMenu }: HeaderProps) {
    return (
        <HeaderContainer>
            <strong>THE PLANETS</strong>

            <HeaderNav>
                {planets.map(planet => (
                    <button
                        key={planet.name}
                        onClick={() => onSelectPlanet(planet.name)}
                    >
                        {planet.name}
                    </button>
                ))}
            </HeaderNav>

            <Burger isOpen={isOpen} toggleMenu={() => toggleMenu()} />
        </HeaderContainer>
    )
}