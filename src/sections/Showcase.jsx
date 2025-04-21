import React from 'react'
import {Canvas} from "@react-three/fiber"
import {OrbitControls} from "@react-three/drei"
import {Bloom, EffectComposer, ToneMapping} from "@react-three/postprocessing"
import Scene from '/src/components/Scene.jsx';
import TitleHeader from "../components/TitleHeader.jsx";
import Button from "../components/Button.jsx";

const Showcase = () => {

    return (
        <section id="showcase" className="w-full md:mt-40 mt-20 section-padding xl:px-0
        scroll-mt-28">
            <div className="w-full max-h-full md:px-20 px-5">
                <TitleHeader title="Our Work"/>
            </div>
            <div className="w-full h-[60vh] md:h-[100vh] lg:h-[120vh] mt-0 mb-0">
                <Canvas flat camera={{ fov: 25 }}>
                    <OrbitControls enableZoom={false} />
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
                />
            </div>
        </section>


    )
}

export default Showcase