import React from 'react'
import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import { Bloom, EffectComposer } from "@react-three/postprocessing"
import { useMediaQuery } from 'react-responsive'

import Scene from '/src/components/Scene.jsx'
import TitleHeader from "../components/TitleHeader.jsx"
import Button from "../components/Button.jsx"

const Showcase = () => {
    const isTablet = useMediaQuery({ query: '(max-width: 1024px)' })

    return (
        <section id="showcase" className="w-full md:mt-40 mt-20 section-padding xl:px-0 scroll-mt-38">
            <div className="w-full max-h-full md:px-20 px-5">
                <TitleHeader title="Our Work" />
            </div>
            <div className="w-full h-[60vh] md:h-[80vh] lg:h-[100vh] mt-0 mb-0">
                <Canvas flat camera={{ fov: 25 }}>
                    {!isTablet && (
                        <OrbitControls
                            enableZoom={false}
                            enablePan={true}
                            enableRotate={true}
                        />
                    )}
                    <ambientLight />
                    <Scene />
                    <EffectComposer>
                        <Bloom
                            mipmapBlur
                            intensity={3.0}
                            luminanceThreshold={0}
                            luminanceSmoothing={0}
                        />
                    </EffectComposer>
                </Canvas>
            </div>
            <div className="w-full flex justify-center mt-10">
                <Button
                    className="md:w-80 md:h-16 w-60 h-12"
                    id="button"
                    text="View More"
                    arrow={false}
                    href="/gallery"
                />
            </div>
        </section>
    )
}

export default Showcase