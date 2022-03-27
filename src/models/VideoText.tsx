import { Text } from "@react-three/drei";
import { MeshProps } from "@react-three/fiber";
import { useEffect, useState } from "react";
import * as THREE from "three";

interface VideoTextProps extends MeshProps {}

const VideoText: React.FC<VideoTextProps> = (props) => {
  const [video] = useState(() =>
    Object.assign(document.createElement("video"), {
      src: "splashy_video.mp4",
      autoPlay: true,
      loop: true,
      muted: true,
    })
  );
  // Based off react drei example
  useEffect(() => void video.play(), [video]);
  return (
    <Text
      font="/DelaGothicOne-Regular.ttf"
      fontSize={5}
      letterSpacing={-0.05}
      {...props}
    >
      In Construction
      <meshBasicMaterial toneMapped={false}>
        <videoTexture
          attach="map"
          args={[video]}
          encoding={THREE.sRGBEncoding}
        />
      </meshBasicMaterial>
    </Text>
  );
};

export default VideoText;
