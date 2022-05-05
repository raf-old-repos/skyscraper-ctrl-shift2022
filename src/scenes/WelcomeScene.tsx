import { Scroll, ScrollControls, Text } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import TileItem from "../components/TileItem";
import useStore from "../stores/useStore";

type WelcomeSceneProps = {};

const WelcomeScene: React.FC<WelcomeSceneProps> = (props) => {

    const { width: w, height: h } = useThree((state) => state.viewport)
    const adjust = w + 0.10

    const urls = useStore((state) => state.urls)
    return (
        <ScrollControls damping={10} pages={((w - adjust + urls.length * adjust) / w) / 3} horizontal>
            <Scroll>
                <Text scale={[w * 0.3, w * 0.3, 0]}
                    font="/DelaGothicOne-Regular.ttf"
                    position={[-w / 3.5, h * 0.12, 0]}
                    color="#000000">
                    Navigator
                </Text>
                {urls.map((item, idx) => <TileItem path={item.path} key={idx} index={idx} position={[(idx * adjust) / 8, 0, 0]} scale={[0.7, 4, 1]} url={item.image} />)}
            </Scroll>
        </ScrollControls>
    )
}

export default WelcomeScene;