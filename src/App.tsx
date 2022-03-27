import { Suspense } from "react";
import "./App.css";
import { Canvas } from "@react-three/fiber";
import HomePage from "./components/HomePage";
import Cube from "./models/Cube";
import { EffectComposer, Bloom, Vignette } from "@react-three/postprocessing";
import VideoText from "./models/VideoText";
import { OrbitControls, PositionalAudio } from "@react-three/drei";

function App() {
  return (
    <>
      <Canvas
        gl={{ alpha: false }}
        camera={{ fov: 75, near: 0.1, far: 500, position: [0, 0, 10] }}
      >
        <color attach="background" args={["black"]} />
        <fog attach="fog" args={["grey", 15, 20]} />
        <Suspense fallback={null}>
          <OrbitControls
            enableDamping
            enableRotate
            enableZoom={false}
            enablePan
          />
          <ambientLight intensity={2} />
          <spotLight position={[0, 10, 10]} angle={0.15} penumbra={1} />
          <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} />
          <pointLight position={[-10, -10, -10]} />
          <group>
            <VideoText position={[0, 5, -6]} />
            <PositionalAudio
              autoplay
              loop
              distance={50}
              position={[0, 5, -6]}
              url="/sound.mp3"
            />
            <Cube position={[2, 0, 0]} color={["orange", "blue"]} />
            <Cube position={[6, 0, 0]} color={["coral", "red"]} />
            <Cube position={[-2, 0, 0]} color={["hotpink", "purple"]} />
            <Cube position={[-6, 0, 0]} color={["yellow", "green"]} />
          </group>
          <EffectComposer>
            <Bloom luminanceThreshold={0} luminanceSmoothing={5} height={300} />

            <Vignette eskil={false} offset={0.1} darkness={1.1} />
          </EffectComposer>
        </Suspense>
      </Canvas>
    </>
  );
}

export default App;
