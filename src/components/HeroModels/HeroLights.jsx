import React from 'react'

const HeroLights = () => {
    return (
        <>
            <spotLight
                position={[1,10,6]}
                intensity={100}
                angle={45}
                penumbra={20}
                color="white"
            />
        </>
    )
}
export default HeroLights
