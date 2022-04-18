import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { EffectComposer, Bloom, Vignette } from "@react-three/postprocessing";
import React, { Suspense } from "react";
import { PositionalAudio } from "@react-three/drei";
import Cube from "../models/Cube";
import VideoText from "../models/VideoText";

import "../App.css";

type DemoProps = {};

const DemoPage: React.FC<DemoProps> = (props) => {
  return <>
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
          <ambientLight intensity={3} />
          <spotLight position={[0, 10, 10]} angle={0.15} penumbra={1} />
          <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} />
          <pointLight position={[-10, -10, -10]} />
          <group>
            <VideoText customFontPath="/DelaGothicOne-Regular.ttf" customText="In Construction" position={[0, 5, -6]} />
            <PositionalAudio
              autoplay
              loop
              distance={50}
              position={[0, 5, -6]}
              url="/sound.mp3"
            />
            <Cube position={[2, 0, 0]} color={["yellow", "blue"]} />
            <Cube position={[6, 0, 0]} color={["yellow", "red"]} />
            <Cube position={[-2, 0, 0]} color={["yellow", "purple"]} />
            <Cube position={[-6, 0, 0]} color={["yellow", "green"]} />
          </group>
          <EffectComposer>
            <Bloom luminanceThreshold={0} luminanceSmoothing={5} height={300} />

            <Vignette eskil={false} offset={0.1} darkness={1.1} />
          </EffectComposer>
        </Suspense>
      </Canvas>

  </>;
};

export default DemoPage;