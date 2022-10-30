import { ArrowSquareOut } from "phosphor-react";
import Image from "next/image";
import { ContentType, Planet } from "../pages";
import { PlanetContainer, PlanetDescription, Source, ButtonsContainer, ContentButton } from "../styles/components/planetContent";

type PlanetContentProps = {
    contentType: ContentType
    onSelectContentType: (contentType: ContentType) => void
    planet: Planet
}

export function PlanetContent ({ contentType, onSelectContentType, planet }: PlanetContentProps) {
    return (
        <PlanetContainer>
            <Image src={planet.images.planet} width={290} height={290} alt="" />

            <PlanetDescription>
                <h1>MERCURY</h1>

                <p>
                    Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Suns planets. Mercury is one of four terrestrial planets in the Solar System, and is a rocky body like Earth.
                </p>

                <Source>
                    <span>Source :</span>
                    <a href="">
                        Wikipedia {' '}
                        <ArrowSquareOut size={16} weight="fill" />
                    </a>
                </Source>

                <ButtonsContainer>
                    <ContentButton
                        isActive={contentType === 'overview' ? "active" : "inactive"}
                        onClick={() => onSelectContentType("overview")}
                    >
                        <span>01</span>
                        OVERVIEW
                    </ContentButton>

                    <ContentButton
                        isActive={contentType === 'internal_structure' ? "active" : "inactive"}
                        onClick={() => onSelectContentType("internal_structure")}
                    >
                        <span>02</span>
                        INTERNAL
                        STRUCTURE
                    </ContentButton>

                    <ContentButton
                        isActive={contentType === 'surface_geology' ? "active" : "inactive"}
                        onClick={() => onSelectContentType("surface_geology")}
                    >
                        <span>03</span>
                        SURFACE
                        GEOLOGY
                    </ContentButton>
                </ButtonsContainer>
            </PlanetDescription>

        </PlanetContainer>
    )
}