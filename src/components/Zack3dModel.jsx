'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, useFBX, Environment } from '@react-three/drei'
import { Suspense, useEffect, useRef } from 'react'
import * as THREE from "three"

function CharacterModel() {
    const fbx = useFBX('models/zack-Waving.fbx');
    const mixer = useRef();
    const modelRef = useRef();

    useEffect(() => {
        if (fbx && fbx.animations && fbx.animations.length > 0) {
            mixer.current = new THREE.AnimationMixer(fbx);

            const action = mixer.current.clipAction(fbx.animations[0]);

            action.setLoop(THREE.LoopRepeat);

            action.play();

            console.log("Animation loaded and playing: ", fbx.animations.map(anim => anim.name));
        }
        return () => {
            if (mixer.current) {
                mixer.current.stopAllAction();
            }
        }
    }, [fbx]);

    useFrame((state, delta) => {
        if(mixer.current) {
            mixer.current.update(delta);
        }
    })

    return (
        <primitive
            ref={modelRef} 
            object={fbx}
            scale={0.05}
            position={[0, -3, 0]}
            rotation={[0, 0, 0]}
        />
    );
}

function LoadingFallback() {
    return (
        <mesh>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color="gray" />
        </mesh>
    )
}

export default function ZackCicakModel() {
    return (
        <div className='w-48 mx-auto my-3'>
            <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
                <ambientLight intensity={0.5} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
                <pointLight position={[-10, -10, -10]}/>

                <Suspense fallback={<LoadingFallback />}>
                    <CharacterModel />
                    <Environment preset="studio" />
                </Suspense>

                <OrbitControls
                    enableZoom={false}
                    enablePan={false}
                    // autoRotate
                    // autoRotateSpeed={2}
                />
            </Canvas>
        </div>
    )
}