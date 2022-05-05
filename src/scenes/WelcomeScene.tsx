import { Scroll, ScrollControls } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import TileItem from "../components/TileItem";
import useStore from "../stores/useStore";

type WelcomeSceneProps = {};

const WelcomeScene: React.FC<WelcomeSceneProps> = (props) => {

    const { width: w} = useThree((state) => state.viewport)
    const adjust = w + 0.15

    const urls = useStore((state) => state.urls)
    return (
        <ScrollControls damping={10} pages={(w - adjust + urls.length * adjust) / w} horizontal>
            <Scroll>
                {urls.map((url, idx) => <TileItem key={idx} index={idx} position={[idx * adjust, 0, 0]} scale={undefined}  url={url} />)}
            </Scroll>

        </ScrollControls>
    )
}

export default WelcomeScene;