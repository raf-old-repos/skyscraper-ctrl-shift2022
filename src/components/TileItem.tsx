import { useRef, useState } from "react";
import { useScroll, Image, Text } from "@react-three/drei";
import * as THREE from "three"
import useStore from "../stores/useStore"
import { useFrame } from "@react-three/fiber";
import { Link, useLocation } from "wouter";
type TileItemProps = {
    index: number;
    position: [number, number, number]
    scale: any
    color?: THREE.Color
    url: string
    path: string
};

const TileItem: React.FC<TileItemProps> = ({ index, position, scale, path, color = new THREE.Color(), url, ...rest }) => {
    const ref = useRef<any>()
    const scroll = useScroll()
    const { urls, clicked, setClicked } = {
        urls: useStore((state) => state.urls),
        clicked: useStore((state) => state.clicked),
        setClicked: useStore((state) => state.setClicked)
    }



    const [hovered, setHovered] = useState(false)
    const click = () => setClicked(index === clicked ? null : index)
    const over = () => setHovered(true)
    const out = () => setHovered(false)

    useFrame((state, delta) => {

        // FINE TUNE, from https://codesandbox.io/s/horizontal-tiles-l4klb?file=/src/App.js:684-1685
        const y = scroll.curve(index / urls.length - 1.5 / urls.length, 4 / urls.length)
        ref.current.material.scale[1] = ref.current.scale.y = THREE.MathUtils.damp(ref.current.scale.y, clicked === index ? 5 : 4 + y, 8, delta)
        ref.current.material.scale[0] = ref.current.scale.x = THREE.MathUtils.damp(ref.current.scale.x, clicked === index ? 4.7 : scale[0], 6, delta)
        if (clicked !== null && index < clicked) ref.current.position.x = THREE.MathUtils.damp(ref.current.position.x, position[0] - 2, 6, delta)
        if (clicked !== null && index > clicked) ref.current.position.x = THREE.MathUtils.damp(ref.current.position.x, position[0] + 2, 6, delta)
        if (clicked === null || clicked === index) ref.current.position.x = THREE.MathUtils.damp(ref.current.position.x, position[0], 6, delta)
        ref.current.material.grayscale = THREE.MathUtils.damp(ref.current.material.grayscale, hovered || clicked === index ? 0 : Math.max(0, 1 - y), 6, delta)
        ref.current.material.color.lerp(color.set(hovered || clicked === index ? 'white' : '#aaa'), hovered ? 0.3 : 0.1)
    })


    return (
        <Image ref={ref} {...rest} url={url} position={position} scale={scale} onClick={() => {
            click()
            // const [_, setLocation] = useLocation();
            // setLocation(`/${path}`)
        }} onPointerOver={over} onPointerOut={out} >
            <Link to={`/${path}`}>
                <Text>
                    {path}
                </Text>
            </Link>

        </Image>


    );
};

export default TileItem;
