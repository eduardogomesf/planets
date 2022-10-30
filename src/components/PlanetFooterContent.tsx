import { Planet } from "../pages"
import { PlanetFooterContentCard, PlanetFooterContentContainer } from "../styles/components/planetFooterContent"

type PlanetFooterContentProps = {
    planet: Planet
}

export function PlanetFooterContent ({ planet }: PlanetFooterContentProps) {
    return (
        <PlanetFooterContentContainer>
            <PlanetFooterContentCard>
                <span>ROTATION TIME</span>
                <strong>{planet.rotation}</strong>
            </PlanetFooterContentCard>

            <PlanetFooterContentCard>
                <span>REVOLUTION TIME</span>
                <strong>{planet.revolution}</strong>
            </PlanetFooterContentCard>

            <PlanetFooterContentCard>
                <span>RADIUS</span>
                <strong>{planet.radius}</strong>
            </PlanetFooterContentCard>

            <PlanetFooterContentCard>
                <span>AVERAGE TEMP</span>
                <strong>{planet.temperature}</strong>
            </PlanetFooterContentCard>
        </PlanetFooterContentContainer>
    )

}