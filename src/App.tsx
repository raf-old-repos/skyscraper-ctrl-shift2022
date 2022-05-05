import "./App.css";

import { Route, Router } from "wouter";
import HomePage from "./pages/HomePage";
import LearnPage from "./pages/LearnPage";
import DemoPage from "./pages/DemoPage";
import { Canvas } from "@react-three/fiber";
import { ScrollControls } from "@react-three/drei";
import Routes from "./components/Routes";
import { AiFillHome } from "react-icons/ai";
import { BiBookBookmark } from "react-icons/bi";
import { BsBuilding } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { NavBarItem } from "./types/components";
import NavBar from "./components/NavBar";
import { Suspense } from "react";

function App() {
  

  return (
    <>
      {/* <Canvas
        orthographic
        camera={{ zoom: 80 }}
        gl={{
          alpha: false,
          antialias: false,
          stencil: false,
          depth: false,
        }}
        dpr={[1, 1.5]}
      > */}
      {/* <color attach="background" args={["#f0f0f0"]} /> */}
      <Suspense fallback={<div>Loading...</div>}>
        <Routes
          routes={[
            { path: "/", component: HomePage },
            { path: "/learn", component: LearnPage },
            { path: "/demo", component: DemoPage },
            // { path: "/about", component: AboutPage }
          ]}
        ></Routes>
      </Suspense>

      {/* </Canvas> */}
    </>
  );
}

export default App;
