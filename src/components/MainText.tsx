import { Text } from "@react-three/drei";
import { ReactChildren } from "react";

type MainTextProps = {
  children: string;
  color: string;
  font?: string;
  scale: [number, number, number];
  maxWidth?: number;
  [key: string]: any;
};
const MainText: React.FC<MainTextProps> = ({
  children,
  scale,
  color,
  font = "/DelaGothicOne-Regular.ttf",
  maxWidth = 12,
  ...rest
}) => {
  return (
    <Text fontSize={4} font={font} scale={scale} color={color}  maxWidth={maxWidth} {...rest}>
      {children}
    </Text>
  );
};

export { MainText };
