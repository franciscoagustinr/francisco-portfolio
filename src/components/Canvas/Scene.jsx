import React, { Suspense, useEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";

import { Center, ContactShadows, Environment, Float } from "@react-three/drei";
import { TextTitle } from "./Text";
import { Francisco } from "./francisco";
import { SplineModels } from "./spline";
import { usePreloader } from "../../stores/usePreloader";

export const Scene = () => {
  const [time, setTime] = useState(0);
  const isLoading = usePreloader((state) => state.isLoading);

  useEffect(() => {
    const intervalScrollReaction = setInterval(() => {
      setTime((prevTime) => prevTime + 0.05);
    }, 16);
    return () => clearInterval(intervalScrollReaction);
  }, []);

  return (
    // <Canvas dpr={[1.5, 2]} className="bg-[rgb(53,190,214)] ">
    <Canvas dpr={[1.5, 2]} className="">
      <Suspense fallback={null}>
        <ambientLight intensity={1} position={[0, 0, 0]} />
        <Environment preset="warehouse" />
        {/* <mesh scale={1}>
          <SplineModels />
        </mesh> */}
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
            <mesh position={[-0.2, -4.3, 0]} scale={1.7}>
              <Francisco />
            </mesh>
          </Center>
        </Float>
        {!isLoading && (
          <>
            <mesh
              position={[0, 0, -2]}
              scale={1.45}
              // rotation-x={-Math.PI / 2}
            >
              <TextTitle />
            </mesh>
          </>
        )}
      </Suspense>
    </Canvas>
  );
};
