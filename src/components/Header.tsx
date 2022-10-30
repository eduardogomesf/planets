import { Planet } from "../pages";
import { HeaderContainer, HeaderNav } from "../styles/components/header";

type HeaderProps = {
    planets: Planet[]
    onSelectPlanet: (planetName: string) => void
}

export function Header ({ planets, onSelectPlanet }: HeaderProps) {
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
        </HeaderContainer>
    )
}