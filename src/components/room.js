import React, { Component, Suspense } from "react";
import { Canvas } from '@react-three/fiber'
import { Loader, OrbitControls } from "@react-three/drei";
import Model from './three/Exhibit';
import Lights from './three/lights';

function Room(){

/*const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0xffff00 } );
const mesh = new THREE.Mesh( geometry, material );
scene.add( mesh );*/
    return(
        <>
        <Canvas 
            colorManagement
            shadowMap
            camera={{position: [10,5,-20], fov:35}}
        >

            <OrbitControls/>
            <Lights/>
            <Suspense fallback={null}>
                <Model/>
            </Suspense>

        </Canvas>
        </>
    );   
}

export default Room;


/*
<mesh>
    <boxBufferGeometry attach='geometry' args={[1,1,1]}/>
     <meshStandardMaterial attach='material'/>
/mesh>
            */