import { GetStaticProps } from "next";
import { useEffect, useState } from "react";

import { Header } from "../components/Header";
import { Menu } from "../components/Menu";
import { PlanetContent } from "../components/PlanetContent";
import { PlanetFooterContent } from "../components/PlanetFooterContent";
import planetsJSON from '../data/planets.json'
import { Container, Content, ContentTypeButton, ContentTypeContainer } from "../styles/pages/home";


export type Planet = {
  name: string;
  overview: {
    content: string;
    source: string;
  };
  structure: {
    content: string;
    source: string;
  };
  geology: {
    content: string;
    source: string;
  };
  rotation: string;
  revolution: string;
  radius: string;
  temperature: string;
  images: {
    planet: string;
    internal: string;
    geology: string;
  };
}

type HomeProps = {
  planets: Planet[]
}

export type ContentType = 'overview' | 'structure' | 'geology'

export default function Home ({ planets = [] }: HomeProps) {
  const [currentPlanetName, setCurrentPlanetName] = useState('Mercury')
  const [planet, setPlanet] = useState<Planet>(planets[0])
  const [contentType, setContentType] = useState<ContentType>('overview')
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const initialPlanet = planets.find(planet => planet.name === currentPlanetName)
    setPlanet(initialPlanet!)
  }, [planets])

  useEffect(() => {
    setContentType('overview')
  }, [planet])

  function handleSelectPlanet (chosenPlanet: string) {
    setCurrentPlanetName(chosenPlanet)

    const planetByName = planets.find(planet => planet.name === chosenPlanet)

    if (planetByName) {
      setPlanet(planetByName)
    }
  }

  function handleSelectContentType (contentType: ContentType) {
    setContentType(contentType)
  }

  function handleSelectPlanetInMenu (chosenPlanet: string) {
    handleSelectPlanet(chosenPlanet)
    setIsOpen(false)
  }

  return (
    <>
      <Header
        planets={planets}
        onSelectPlanet={handleSelectPlanet}
        isOpen={isOpen}
        toggleMenu={() => setIsOpen(!isOpen)}
      />

      {isOpen ? (
        <Menu
          onOptionClick={handleSelectPlanetInMenu}
          planets={planets}
        />
      ) : (
        <>
          <ContentTypeContainer>
            <ContentTypeButton
              isActive={contentType === 'overview' ? 'active' : 'unactive'}
              borderBottomColorOnActive={contentType === 'overview' ? planet.name as any : 'unactive'}
              onClick={() => setContentType('overview')}
            >
              OVERVIEW
            </ContentTypeButton>
            <ContentTypeButton
              isActive={contentType === 'structure' ? 'active' : 'unactive'}
              borderBottomColorOnActive={contentType === 'structure' ? planet.name as any : 'unactive'}
              onClick={() => setContentType('structure')}
            >
              STRUCTURE
            </ContentTypeButton>
            <ContentTypeButton
              isActive={contentType === 'geology' ? 'active' : 'unactive'}
              borderBottomColorOnActive={contentType === 'geology' ? planet.name as any : 'unactive'}
              onClick={() => setContentType('geology')}
            >
              SURFACE
            </ContentTypeButton>
          </ContentTypeContainer >

          <Container>
            <Content>
              <PlanetContent
                contentType={contentType}
                planet={planet}
                onSelectContentType={handleSelectContentType}
              />

              <PlanetFooterContent planet={planet} />
            </Content>
          </Container>
        </>
      )
      }
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      planets: planetsJSON,
    },
    revalidate: 60 * 60 * 2 // 2 hours
  }
}
