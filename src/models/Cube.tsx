// Model example

import { MeshProps, useFrame } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";

import * as THREE from "three";

interface CubeProps extends MeshProps {
  color: [string, string];
}

const Cube: React.FC<CubeProps> = (props = { color: ["orange", "blue"] }) => {
  const ref = useRef<THREE.Mesh>();

  const [clicked, setClicked] = useState<Boolean>(false);
  const [hovered, setHovered] = useState<Boolean>(false);

  const [video] = useState(() =>
    Object.assign(document.createElement("video"), {
      src: "splashy_video.mp4",
      autoPlay: true,
      loop: true,
      muted: true,
    })
  );

  useEffect(() => void video.play(), [video]);

  useFrame(() => {
    if (ref.current) {
      if (hovered) {
        ref.current.rotation.x += 0.04;
        ref.current.rotation.y += 0.04;
        ref.current.rotation.z += 0.04;
      } else {
        ref.current.rotation.x += 0.01;
        ref.current.rotation.y += 0.01;
      }
    }
  });

  return (
    <mesh
      {...props}
      ref={ref}
      onClick={() => {
        setClicked(!clicked);
      }}
      onPointerOver={() => {
        setHovered(true);
      }}
      onPointerOut={() => {
        setHovered(false);
      }}
      scale={clicked ? [2, 2, 2] : [1.5, 1.5, 1.5]}
      rotation={[0, 0, 0]}
    >
      <boxGeometry />
      <meshBasicMaterial color={hovered ? props.color[0] : props.color[1]} />
    </mesh>
  );
};

export default Cube;
