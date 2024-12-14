import React, { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';

import { Center, ContactShadows, Environment, Float } from '@react-three/drei';
import { TextTitle } from './Text';
import { Francisco } from './Francisco';
import { usePreloader } from '../../stores/usePreloader';

export const Scene = ({ setDialogText }) => {
  const [time, setTime] = useState(0);
  const isLoading = usePreloader((state) => state.isLoading);

  const meshResponsivePosition =
    window.innerWidth >= 4000 ? [0, 0, 0] : [-0.2, -4.3, 0];
  const meshResponsiveScale = window.innerWidth >= 4000 ? 2 : 1.7;

  useEffect(() => {
    const intervalScrollReaction = setInterval(() => {
      setTime((prevTime) => prevTime + 0.05);
    }, 16);
    return () => clearInterval(intervalScrollReaction);
  }, []);

  return (
    <Canvas dpr={[1.5, 2]}>
      <Suspense fallback={null}>
        <ambientLight intensity={1} position={[0, 0, 0]} />
        <Environment preset="warehouse" />
        <ContactShadows
          position={[0, -1.55, 0.15]}
          opacity={0.35}
          scale={4}
          blur={6}
          far={10}
        />
        <Float
          speed={5}
          rotationIntensity={0.2}
          floatIntensity={0.9}
          floatingRange={[1, 1.1]}
        >
          <Center position={[0, -1.2, 1]} rotation={[0, 0, 0]}>
            <mesh position={meshResponsivePosition} scale={meshResponsiveScale}>
              <Francisco setDialogText={setDialogText} />
            </mesh>
          </Center>
        </Float>
        {!isLoading && (
          <>
            <mesh position={[0, 0, -2]} scale={1.45}>
              <TextTitle />
            </mesh>
          </>
        )}
      </Suspense>
    </Canvas>
  );
};
