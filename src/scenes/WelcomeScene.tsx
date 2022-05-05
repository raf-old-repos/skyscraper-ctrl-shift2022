import { ScrollControls } from "@react-three/drei";

type WelcomeSceneProps = {};

const WelcomeScene: React.FC<WelcomeSceneProps> = (props) => {
    return (
        <ScrollControls damping={3} pages={4} horizontal>
            
        </ScrollControls>
    )
}

export default WelcomeScene;