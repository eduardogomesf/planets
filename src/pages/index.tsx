import { GetStaticProps } from "next";
import { useState } from "react";

import { Header } from "../components/Header";
import { PlanetContent } from "../components/PlanetContent";
import planetsJSON from '../data/planets.json'
import { Container, Content } from "../styles/pages/home";


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

export type ContentType = 'overview' | 'internal_structure' | 'surface_geology'

export default function Home ({ planets = [] }: HomeProps) {
  const [currentPlanetName, setCurrentPlanetName] = useState('Mercury')
  const [planet, setPlanet] = useState<Planet>(planets[0])
  const [contentType, setContentType] = useState<ContentType>('overview')

  function handleSelectPlanet (chosenPlanet: string) {
    setCurrentPlanetName(chosenPlanet)
  }

  function handleSelectContentType (contentType: ContentType) {
    setContentType(contentType)
  }

  return (
    <>
      <Header planets={planets} onSelectPlanet={handleSelectPlanet} />
      <Container>
        <Content>
          <PlanetContent
            contentType={contentType}
            planet={planet}
            onSelectContentType={handleSelectContentType}
          />

        </Content>
      </Container>
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
