import { Canvas } from "@react-three/fiber";

type PageProps = {};

const Page: React.FC<PageProps> = (props) => {
  return (
    <>
      <Canvas
        orthographic
        camera={{ zoom: 150 }}
        gl={{
          alpha: false,
          antialias: true,
          stencil: true,
          depth: true,
        }}
        dpr={[1, 1.5]}
      >
        {props.children}
      </Canvas>
    </>
  );
};

export default Page;
