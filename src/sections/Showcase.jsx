import React from 'react'
import {Canvas} from "@react-three/fiber"
import {OrbitControls} from "@react-three/drei"
import {Bloom, EffectComposer, ToneMapping} from "@react-three/postprocessing"
import Scene from '/src/components/Scene.jsx';
import TitleHeader from "../components/TitleHeader.jsx";

const Showcase = () => {

    return (
        <section id="showcase" className="w-full md:mt-40 mt-20 section-padding xl:px-0">
            <div className="w-full max-h-full md:px-20 px-5">
                <TitleHeader title="Our Work"/>
            </div>
            <div className="w-full h-[80vh] md:h-[90vh] mt-16 md:mt-10">
                <Canvas flat camera={{fov:25}}>
                    <OrbitControls enableZoom={false}/>
                    <ambientLight/>
                    <Scene/>
                    <EffectComposer>
                        <Bloom
                            mipmapBlur
                            intensity={3.0}
                            luminanceThreshold={0} //Raise to mask out darker areas
                            luminanceSmoothing={0} //smoothness of luminance threshold, range [0,1]
                        />
                        {/* <ToneMapping adaptive/> */}
                    </EffectComposer>

                </Canvas>
            </div>
        </section>


    )
}

export default Showcase