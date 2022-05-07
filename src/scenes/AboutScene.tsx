import { Image, Scroll } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { MainText } from "../components/MainText";
import Earth from "../models/Earth";

type AboutSceneProps = {};

const AboutScene: React.FC<AboutSceneProps> = (props) => {
  const { width: w, height: h } = useThree((state) => state.viewport);

  const textScales = {
    x: w / 3.8,
    y: 4,
    z: 0,
  };
  return (
    <>
    <Scroll>
        
  
      <group>
        <MainText
          scale={[textScales.x / 30, textScales.y / 30, 0]}
          color={"#000000"}
            position={[0, 2, 0]}
        >
          About Us
        </MainText>
        <group>
            <MainText position={[-3, 0, 0]} scale={[textScales.x / 40, textScales.y / 40, 0]}
          color={"#000000"}>
              Paulien
          </MainText>
          <Image position={[-3, 1, 0]} url={"/images/paulien.jpg"} />
          <MainText position={[-3, -1, 0]} maxWidth={60} scale={[textScales.x / 60, textScales.y / 60, 0]}
          color={"#000000"}>
             I love running, playing with my cat fluffy, and watching movies with my best friend ;)
          </MainText>
        </group>
        <group>
            <Earth position={[0, -0.3, 0]} scale={0.007} />
        </group>
        <group>
            <MainText position={[3, 0, 0]} scale={[textScales.x / 40, textScales.y / 40, 0]}
          color={"#000000"}>
              Rafayel
          </MainText>
          <Image position={[3, 1, 0]} url={"/images/rafayel.jpg"} />
          <MainText position={[3, -1, 0]} maxWidth={60} scale={[textScales.x / 60, textScales.y / 60, 0]}
          color={"#000000"}>
             I love programming, math, and anything in between.
          </MainText>
          
        </group>
      </group>
      </Scroll>
    </>
  );
};

export default AboutScene;
