import { Canvas } from "@react-three/fiber";

type PageProps = {};

const Page: React.FC<PageProps> = (props) => {
  return (
    <>
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
        {props.children}
      </Canvas>
    </>
  );
};

export default Page;
