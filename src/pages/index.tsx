import { GetStaticProps } from "next";
import Image from "next/image";
import { useState } from "react";
import { ArrowSquareOut } from 'phosphor-react'

import { Header } from "../components/Header";
import planetsJSON from '../data/planets.json'
import { ButtonsContainer, Container, Content, PlanetContainer, PlanetDescription, Source } from "../styles/pages/home";


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

export default function Home ({ planets = [] }: HomeProps) {
  const [currentPlanetName, setCurrentPlanetName] = useState('Mercury')
  const [planet, setPlanet] = useState<Planet>(planets[0])

  function handleSelectPlanet (chosenPlanet: string) {
    setCurrentPlanetName(chosenPlanet)
  }

  return (
    <>
      <Header planets={planets} onSelectPlanet={handleSelectPlanet} />
      <Container>
        <Content>
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
                <button>
                  <span>01</span>
                  OVERVIEW
                </button>
                <button>
                  <span>02</span>
                  INTERNAL
                  STRUCTURE</button>
                <button>
                  <span>03</span>
                  SURFACE
                  GEOLOGY</button>
              </ButtonsContainer>
            </PlanetDescription>

          </PlanetContainer>

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
