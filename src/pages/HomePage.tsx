import { ScrollControls } from "@react-three/drei";
import { useThree } from "@react-three/fiber";

import React from "react";


import Page from "../components/Page";
import MainLayout from "../layouts/main.layout";

import HomeScene from "../scenes/HomeScene";

import "../styles/styles.css";


type HomeProps = {};

const HomePage: React.FC<HomeProps> = (props) => {
  const h = window.innerHeight
  let adjust = h
  if ( h > 800) {
    adjust = h * 0.165
  }


  return (
    <>
      <Page>
        <color attach="background" args={["#dce0bc"]} />
        <ScrollControls damping={10} pages={adjust / 38} eps={2}>
          <MainLayout>

            <HomeScene />
          </MainLayout>
        </ScrollControls> 

      </Page>
    </>
  );
};

export default HomePage;
