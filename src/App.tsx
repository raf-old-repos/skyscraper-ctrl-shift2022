import "./App.css";

import { Route, Router } from "wouter";
import HomePage from "./pages/HomePage";
import LearnPage from "./pages/LearnPage";
import DemoPage from "./pages/DemoPage";
import { Canvas } from "@react-three/fiber";
import { ScrollControls } from "@react-three/drei";

function App() {
  return (
    <>
      <Router>
        <Route path="/">
          <Canvas
            orthographic
            camera={{ zoom: 80 }}
            gl={{
              alpha: false,
              antialias: false,
              stencil: false,
              depth: false,
            }}
            dpr={[1, 1.5]}
          >
            <color attach="background" args={["#f0f0f0"]} />

            <HomePage />
          </Canvas>
        </Route>
        <Route path="/learn">
          <LearnPage />
        </Route>
      </Router>
    </>
  );
}

export default App;
