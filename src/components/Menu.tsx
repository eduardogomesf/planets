import { CaretRight } from "phosphor-react"
import { Planet } from "../pages"
import { MenuOption, MenuContainer, Circle } from "../styles/components/menu"

type MenuProps = {
    planets: Planet[]
    onOptionClick: (planet: string) => void
}

export function Menu ({ planets, onOptionClick }: MenuProps) {
    return (
        <MenuContainer>
            {planets.map(planet => (
                <MenuOption
                    key={planet.name}
                    onClick={() => onOptionClick(planet.name)}
                >
                    <div>
                        <Circle bgColor={planet.name as any} />
                        {planet.name}
                    </div>
                    <CaretRight width={14} height={14} />
                </MenuOption>
            ))}
        </MenuContainer>
    )
}