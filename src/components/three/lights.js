import React from 'react'

const Lights = () => {

    return(
        <>
            <ambientLight intensity={.4}/>
            <directionalLight
                castShadow
                position={[10,20,10]}
                intensity={0}
                shadowMapWidth={1024}
                shadowMapHeight={1024}
                shadowCameraFar={50}
                shadowCameraLeft={-10}
                shadowCameraRight={10}
                shadowCameraTop={10}
                shadowCameraBottom={-10}
            />
            <pointLight position={[0,50,0]} intensity={1}/>

        </>
    )
}

export default Lights