import { Scroll, Text } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import Cube from "../models/Cube";

type HomeSceneProps = {};

const HomeScene: React.FC<HomeSceneProps> = (props) => {
  const { width: w, height: h } = useThree((state) => state.viewport);

  const itemRef = useRef<any>();
  console.log("Hello");

  // FIX SCALES
  const textScales = {
    x: 4,
    y: 4,
    z: 4,
  };

  return (
    <>
      <Scroll>
        <ambientLight intensity={0.5} />
        <Text
          scale={[textScales.x * 1.1, textScales.y * 1.1, textScales.z]}
          font="/DelaGothicOne-Regular.ttf"
          position={[-w / 4, h * 0.225, 0]}
          color="#000000"
        >
          Introduction
        </Text>
        <Text
          fontSize={2}
          scale={[textScales.x / 25, textScales.y / 25, textScales.z]}
          font="/DelaGothicOne-Regular.ttf"
          position={[-w / 4, -h * 0.15, 0]}
          maxWidth={w * 1.9}
          lineHeight={0.9}
        >
          Amid the changing climate, it is becoming more desirable to construct
          buildings and skyscrapers that have a reduced carbon footprint. Since
          many cities still rely primarily on carbon-heavy energy, designers are
          focussing on reducing the energy consumption of individual buildings.
          This includes passive design strategies, which takes advantage of the
          surrounding environment without using energy, and active design.
          Efficiency of building systems and using renewable energy like solar
          power are parts of active design
        </Text>
        <group ref={itemRef} position={[w / 5, -h * 0.15, 0]}>
          <Text>Demo, change with actual model</Text>
          <Cube color={["yellow", "blue"]} />
        </group>
        <Text
          scale={[textScales.x * 1.1, textScales.y * 1.1, textScales.z]}
          font="/DelaGothicOne-Regular.ttf"
          position={[w / 4, -h * 0.7, 0]}
          color="#000000"
          maxWidth={0.9}
        >
          Bosco Verticale &nbsp; “The vertical forest”
        </Text>
        <Text
          fontSize={2}
          scale={[textScales.x / 25, textScales.y / 25, textScales.z]}
          font="/DelaGothicOne-Regular.ttf"
          position={[w / 4, -h * 1.05, 0]}
          maxWidth={w * 1.9}
          lineHeight={0.9}
        >
          This pair of residential building towers, constructed in Milan in
          2014, is now an iconic example for green buildings around the world.
          The plants and trees on the facade absorbs pollution, reduces the
          temperature in and around the building, and harbours numerous species
          of birds and insects.
        </Text>
        <group ref={itemRef} position={[-w / 5, -h * 1.05, 0]}>
          <Text>Demo, change with actual model</Text>
          <Cube color={["yellow", "blue"]} />
        </group>
      </Scroll>
    </>
  );
};

export default HomeScene;
