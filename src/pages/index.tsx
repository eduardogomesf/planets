import { GetStaticProps } from "next";
import { useState } from "react";
import axios from 'axios'

import { Header } from "../components/Header";

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

export default function Home ({ planets }: HomeProps) {
  const [currentPlanet, setCurrentPlanet] = useState('Mercury')

  return (
    <>
      <Header planets={planets} onSelectPlanet={setCurrentPlanet} />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await axios.get('http://localhost:3000/api/planets')

  const { planets = [] } = response.data

  return {
    props: {
      planets,
    },
    revalidate: 60 * 60 * 2 // 2 hours
  }
}
