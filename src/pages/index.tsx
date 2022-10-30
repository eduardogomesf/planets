import { GetStaticProps } from "next";
import { useState } from "react";

import { Header } from "../components/Header";
import planetsJSON from '../data/planets.json'


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
  const [currentPlanet, setCurrentPlanet] = useState('Mercury')

  return (
    <>
      <Header planets={planets} onSelectPlanet={setCurrentPlanet} />
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
