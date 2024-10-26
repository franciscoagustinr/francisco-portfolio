import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";

import {
  Center,
  ContactShadows,
  Environment,
  Float,
  Preload,
  PresentationControls,
} from "@react-three/drei";
import { TextTitle } from "./Text";
import { Francisco } from "./francisco";

export const Scene = () => {
  return (
    <Canvas dpr={[1.5, 2]} className="bg-[rgb(53,190,214)]">
      <Suspense fallback={null}>
        <Preload all />
        <ambientLight intensity={1} position={[0, 0, 0]} />
        <Environment preset="warehouse" />
        <ContactShadows
          position={[0, -1.55, 0]}
          opacity={0.75}
          scale={10}
          blur={3}
          far={4}
        />
        <Float
          speed={5}
          rotationIntensity={0.2}
          floatIntensity={0.9}
          floatingRange={[1, 1.2]}
        >
          <PresentationControls
            config={{ mass: 1, tension: 500 }}
            snap={{ mass: 4, tension: 1500 }}
            rotation={[0, 0, 0]}
            azimuth={[-0.2, 0.2]}
            cursor={false}
          >
            <Center position={[0.2, -1, 1]}>
              <mesh position={[-0.2, -4, 0]}>
                <Francisco scale={1.5} />
              </mesh>
            </Center>
          </PresentationControls>
        </Float>
        <TextTitle />
      </Suspense>
    </Canvas>
  );
};
