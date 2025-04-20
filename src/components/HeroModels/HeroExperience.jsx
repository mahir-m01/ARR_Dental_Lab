import React from 'react'
import { Canvas } from "@react-three/fiber";
import {OrbitControls} from "@react-three/drei";
import {useMediaQuery} from 'react-responsive'
import {Mandible} from "./Mandible.jsx";
import HeroLights from "./HeroLights.jsx";


const HeroExperience = () => {
    const isTablet = useMediaQuery({query : '(max-width: 1024px)'});
    const isPhone = useMediaQuery({query : '(max-width: 768px)'});
    return (

        <Canvas camera = {{position: [0,0,15], fov:70}}>
            <OrbitControls
                enablePan={false}
                enableZoom={false}
                // enableZoom={!isTablet}
                maxDistance={20}
                minDistance={5}
                minPolarAngle={Math.PI / 5}
                maxPolarAngle={Math.PI / 2}

            />
            <HeroLights/>
            <group
                scale={isPhone ? 0.7 : 1}
                position={[0,-3.5,0]}
                rotation={[0,-Math.PI /4,0]}
            >
                <Mandible/>
            </group>

        </Canvas>
    )
}
export default HeroExperience
