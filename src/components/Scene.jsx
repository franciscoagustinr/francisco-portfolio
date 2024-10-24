import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Avatar } from "./Avatar";
import {
  Center,
  ContactShadows,
  Environment,
  Float,
  PresentationControls,
} from "@react-three/drei";
import { TextTitle } from "./Text";

export const Scene = () => {
  return (
    <Canvas dpr={[1.5, 2]} className="bg-[rgb(53,190,214)]">
      <Suspense fallback={null}>
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
          floatIntensity={1}
          floatingRange={[1, 1.2]}
        >
          <PresentationControls
            config={{ mass: 1, tension: 500 }}
            snap={{ mass: 4, tension: 1500 }}
            rotation={[0, 0, 0]}
            azimuth={[-1, Math.PI / 2]}
            cursor={false}
          >
            <Center position={[0, -1, 1]}>
              <Avatar />
            </Center>
          </PresentationControls>
        </Float>

        <TextTitle />
      </Suspense>
    </Canvas>
  );
};
