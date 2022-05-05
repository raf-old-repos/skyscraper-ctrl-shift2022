import { useRef, useState } from "react";
import { useScroll, Image } from "@react-three/drei";
import * as THREE from "three"
import useStore from "../stores/useStore"
import { useFrame } from "@react-three/fiber";
type TileItemProps = {
    index: number;
    position: [number, number, number]
    scale: any
    color: THREE.Color
};

const TileItem: React.FC<TileItemProps> = (props) => {
    const ref = useRef<any>()
    const scroll = useScroll()
    const { urls, clicked, setClicked } = {
        urls: useStore((state) => state.urls),
        clicked: useStore((state) => state.clicked),
        setClicked: useStore((state) => state.setClicked)
    }



    const [hovered, setHovered] = useState(false)
    const click = () => setClicked(props.index === clicked ? null : props.index)
    const over = () => setHovered(true)
    const out = () => setHovered(false)

    useFrame((state, delta) => {

        // FINE TUNE, from https://codesandbox.io/s/horizontal-tiles-l4klb?file=/src/App.js:684-1685
        const y = scroll.curve(props.index / urls.length - 1.5 / urls.length, 4 / urls.length)
        ref.current.material.scale[1] = ref.current.scale.y = THREE.MathUtils.damp(ref.current.scale.y, clicked === props.index ? 5 : 4 + y, 8, delta)
        ref.current.material.scale[0] = ref.current.scale.x = THREE.MathUtils.damp(ref.current.scale.x, clicked === props.index ? 4.7 : props.scale[0], 6, delta)
        if (clicked !== null && props.index < clicked) ref.current.position.x = THREE.MathUtils.damp(ref.current.position.x, props.position[0] - 2, 6, delta)
        if (clicked !== null && props.index > clicked) ref.current.position.x = THREE.MathUtils.damp(ref.current.position.x, props.position[0] + 2, 6, delta)
        if (clicked === null || clicked === props.index) ref.current.position.x = THREE.MathUtils.damp(ref.current.position.x, props.position[0], 6, delta)
        ref.current.material.grayscale = THREE.MathUtils.damp(ref.current.material.grayscale, hovered || clicked === props.index ? 0 : Math.max(0, 1 - y), 6, delta)
        ref.current.material.color.lerp(props.color.set(hovered || clicked === props.index ? 'white' : '#aaa'), hovered ? 0.3 : 0.1)
    })


    return (
    

        <Image url={""} ref={ref} {...props} position={props.position} scale={props.scale} onClick={click} onPointerOver={over} onPointerOut={out} />
        
    );
};

export default TileItem;
