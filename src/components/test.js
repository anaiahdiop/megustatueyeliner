import React, { Component, Suspense } from "react";
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from "@react-three/drei";
import Model from './three/VanityBox';
import Lights from './three/lights';

function Test(){


/*const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0xffff00 } );
const mesh = new THREE.Mesh( geometry, material );
scene.add( mesh );*/
    return(
        <Canvas>

            <OrbitControls/>
            <Lights/>
            <Suspense fallback={null}>
                <Model/>
            </Suspense>

        </Canvas>
    );   
}

export default Test;


/*
<mesh>
    <boxBufferGeometry attach='geometry' args={[1,1,1]}/>
     <meshStandardMaterial attach='material'/>
/mesh>
            */