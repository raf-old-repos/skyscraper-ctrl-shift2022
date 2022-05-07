import {
  Scroll,
  useScroll,
  Image
} from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import { useLocation } from "wouter";
import { MainText } from "../components/MainText";
import Earth from "../models/Earth";
import EmpireTrust from "../models/EmpireTrustNew";

import CityScene from "../models/Scene-draco";
import VideoText from "../models/VideoText";

type HomeSceneProps = {};

const HomeScene: React.FC<HomeSceneProps> = (props) => {
  const { width: w, height: h } = useThree((state) => state.viewport);

  const [_, setLocation] = useLocation();



  const textRef = useRef<any>();
  const sceneRef = useRef<any>();
  const hyperClickRef = useRef<any>();

  const scroll = useScroll();

  // FIX SCALES
  const textScales = {
    x: w / 3.8,
    y: 4,
    z: 0,
  };

  useFrame((state) => {
    const t = state.clock.getElapsedTime();


    const r1 = scroll.range(0 / 4, 1 / 4);
    const r2 = scroll.range(1 / 4, 6);
    const r3 = scroll.visible(4 / 5, 1 / 5);

    // move sceneRef down with scroll
    sceneRef.current.rotation.x = r1 * 0.5;
    sceneRef.current.position.y = r1 * 16;

    if (r1 > 0.12) {
      textRef.current.scale.x = r1 * 4;
      textRef.current.scale.y = r1 * 4;
      textRef.current.scale.z = r1 * 4;
    }
  });

  return (
    <>
      <Scroll>
        <group ref={sceneRef} position={[0, -h * 0.1, -10]}>
          <fog attach="fog" args={["#cc7b32", 12, 100]} />
          <spotLight intensity={2} position={[0, h * 3, -15]} />
          <CityScene position={[0, -h * 0.4, -10]} rotation={[-0.001, 0, 0]} />
        </group>

        <ambientLight intensity={1} />

        <group ref={textRef} position={[-w / 50, h * 0.115, -50]}>
          <MainText
            scale={[textScales.x / 30, textScales.y / 30, 0]}
            color={"#000000"}
          >
            Skyscrapers.
          </MainText>
        </group>
        <group>
          <ambientLight intensity={2} />
          <spotLight
            position={[0, 25, 0]}
            angle={0.3}
            penumbra={1}
            intensity={2.5}
            castShadow
            shadow-mapSize={[2048, 2048]}
            color={"#591cdd"}
          />
          <spotLight
            position={[0, -15, 0]}
            angle={1}
            penumbra={1}
            intensity={2.5}
            castShadow
            shadow-mapSize={[2048, 2048]}
            color={"#591cdd"}
          />

          <EmpireTrust position={[0, -10, 0]} />
          <group>
            <MainText
              maxWidth={40}
              color={"#000000"}
              position={[2, -6, -10]}
              scale={[textScales.x / 30, textScales.y / 30, 0]}
            >
              A website about skyscrapers & their impact on humankind, the
              planet, and the future.
            </MainText>
          </group>
        </group>

        <group>
          <ambientLight intensity={2} />

          <Earth position={[2, -15, 0]} scale={0.01} />

          <MainText
            maxWidth={40}
            color={"#000000"}
            position={[-2, -15, -10]}
            scale={[textScales.x / 30, textScales.y / 30, 0]}
          >
            Our planet won't be the same without skyscrapers. Nor will it last
            forever.
          </MainText>

          <group>
            <MainText
              maxWidth={40}
              color={"#000000"}
              position={[0, -18, -10]}
              scale={[textScales.x / 30, textScales.y / 30, 0]}
            >
              Explore.
            </MainText>
            <spotLight
              position={[-1, -15, 0]}
              angle={1}
              penumbra={1}
              intensity={2.5}
              castShadow
              color={"#591cdd"}
            />
            <group
              ref={hyperClickRef}
              onClick={() => {
                setLocation("/about");
              }}
            >
              <spotLight
                angle={0.25}
                penumbra={0.5}
                position={[-2, -15, 0]}
                castShadow
              />
              <VideoText
                customText="About"
                position={[-2, -20, 0]}
                scale={0.2}
                customFontPath={"/DelaGothicOne-Regular.ttf"}
              />
            </group>
            <group
              onClick={() => {
                setLocation("/learn");
              }}
            >
              <spotLight
                angle={0.25}
                penumbra={0.5}
                position={[-2, -15, 0]}
                castShadow
              />
              <VideoText
                customText="Learn"
                position={[2, -20, 0]}
                scale={0.2}
                customFontPath={"/DelaGothicOne-Regular.ttf"}
              />
            </group>
          </group>
        </group>
      </Scroll>
    </>
  );
};

export default HomeScene;
