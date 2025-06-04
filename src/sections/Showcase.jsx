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
                <Canvas
                    flat
                    camera={{ fov: 25 }}
                    dpr={[1, 1.5]} // Limit pixel density for better performance
                    performance={{ min: 0.8 }} // Higher min performance threshold
                    gl={{
                        powerPreference: "high-performance",
                        antialias: false, // Disable for better scroll performance
                        stencil: false,
                        depth: true
                    }}
                >
                    {!isTablet && (
                        <OrbitControls
                            enableZoom={false}
                            enablePan={true}
                            enableRotate={true}
                            enableDamping={true}
                            dampingFactor={0.03} // Reduced for smoother performance
                            rotateSpeed={0.5} // Slower rotation = less GPU work
                            maxPolarAngle={Math.PI * 0.75} // Limit vertical rotation
                            minPolarAngle={Math.PI * 0.25}
                        />
                    )}
                    <ambientLight intensity={0.9} />
                    <Scene />
                    <EffectComposer>
                        <Bloom
                            mipmapBlur
                            intensity={3.0}
                            luminanceThreshold={0.1}
                            luminanceSmoothing={0.1}
                            levels={6} // Reduce bloom quality levels
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