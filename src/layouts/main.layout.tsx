import React from "react";
import NavBar from "../components/NavBar";
import "../styles/styles.css";

import { Scroll } from "@react-three/drei";

type MainProps = {};

const MainLayout: React.FC<MainProps> = (props) => {
 
  return (
    <>
      <Scroll html>
        <NavBar mainLogo="/Logo.png" />

      </Scroll>
      {props.children}
    </>
  );
};

export default MainLayout;
