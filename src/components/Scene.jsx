import React, { useRef } from 'react'
import {useTexture} from "@react-three/drei"
import * as THREE from "three"
import { useFrame } from '@react-three/fiber'
const Scene = () => {
    const tex = useTexture("/public/images/ARR_Temp.png")
    const frame = useRef(null)
    useFrame((state,delta)=>{
        frame.current.rotation.y += delta * 0.5
    })
    return (
        <group rotation={[0,1.4,0.3]}>
            <mesh ref={frame}>
                <cylinderGeometry args={[1,1,1,4,4,true]}/>
                {/*Try using 4 pics in Frame and change the values to 4,4*/}
                <meshStandardMaterial map={tex} transparent side={THREE.DoubleSide}/>
            </mesh>
        </group>
    )
}

export default Scene