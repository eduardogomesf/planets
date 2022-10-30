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
            <Image
                src={contentType === "structure" ? planet.images.internal : planet.images.planet}
                width={290}
                height={290}
                alt=""
            />

            <PlanetDescription>
                <h1>{planet.name}</h1>

                <p>
                    {planet[contentType].content}
                </p>

                <Source>
                    <span>Source :</span>
                    <a
                        href={planet[contentType].source}
                        target={"_blank"}
                        rel="noreferrer"
                    >
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
                        isActive={contentType === 'structure' ? "active" : "inactive"}
                        onClick={() => onSelectContentType("structure")}
                    >
                        <span>02</span>
                        INTERNAL
                        STRUCTURE
                    </ContentButton>

                    <ContentButton
                        isActive={contentType === 'geology' ? "active" : "inactive"}
                        onClick={() => onSelectContentType("geology")}
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