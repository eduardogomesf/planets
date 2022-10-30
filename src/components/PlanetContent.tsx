import { ArrowSquareOut } from "phosphor-react";
import Image from "next/image";
import { ContentType, Planet } from "../pages";
import { PlanetContainer, PlanetDescription, Source, ButtonsContainer, ContentButton, ImageContainer } from "../styles/components/planetContent";

type PlanetContentProps = {
    contentType: ContentType
    onSelectContentType: (contentType: ContentType) => void
    planet: Planet
}

export function PlanetContent ({ contentType, onSelectContentType, planet }: PlanetContentProps) {
    return (
        <PlanetContainer>
            <ImageContainer>
                <Image
                    src={contentType === "structure" ? planet.images.internal : planet.images.planet}
                    width={290}
                    height={290}
                    alt=""
                />
                {contentType === "geology" && <Image src={planet.images.geology} height={199} width={163} alt="" className="geology-image" />}
            </ImageContainer>

            <PlanetDescription>
                <div className="content-text">
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

                </div>

                <ButtonsContainer>
                    <ContentButton
                        bgColorOnHover={planet.name as any}
                        isActive={contentType === 'overview' ? planet.name as any : "inactive"}
                        onClick={() => onSelectContentType("overview")}
                    >
                        <span>01</span>
                        OVERVIEW
                    </ContentButton>

                    <ContentButton
                        bgColorOnHover={planet.name as any}
                        isActive={contentType === 'structure' ? planet.name as any : "inactive"}
                        onClick={() => onSelectContentType("structure")}
                    >
                        <span>02</span>
                        INTERNAL
                        STRUCTURE
                    </ContentButton>

                    <ContentButton
                        bgColorOnHover={planet.name as any}
                        isActive={contentType === 'geology' ? planet.name as any : "inactive"}
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