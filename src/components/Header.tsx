import { useState } from "react";
import { Planet } from "../pages";
import { HeaderContainer, HeaderNav } from "../styles/components/header";
import { MenuButton } from "./MenuButton";

type HeaderProps = {
    planets: Planet[]
    onSelectPlanet: (planetName: string) => void
}

export function Header ({ planets, onSelectPlanet }: HeaderProps) {
    const [isOpen, setIsOpen] = useState(false)

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

            <MenuButton isOpen={isOpen} toggleMenu={() => setIsOpen(!isOpen)} />
        </HeaderContainer>
    )
}