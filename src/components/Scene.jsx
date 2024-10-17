import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Avatar } from "./Avatar";
import {
  Center,
  ContactShadows,
  Environment,
  Float,
  MeshTransmissionMaterial,
  OrbitControls,
  PresentationControls,
  RenderTexture,
  Text3D,
} from "@react-three/drei";

export const Scene = () => {
  return (
    <Canvas dpr={[1.5, 2]} className="bg-[rgb(53,190,214)]">
      <Suspense fallback={null}>
        <ambientLight intensity={1} position={[0, 0, 0]} />
        <pointLight intensity={1} position={[0, 0, 0]} />
        <Environment preset="warehouse" />
        {/* <OrbitControls /> */}
        <Float
          speed={3}
          rotationIntensity={0.2}
          floatIntensity={1}
          floatingRange={[1, 1.5]}
        >
          <PresentationControls
            config={{ mass: 1, tension: 500 }}
            snap={{ mass: 4, tension: 1500 }}
            rotation={[0, 0, 0]}
            azimuth={[-1, Math.PI / 2]}
            cursor={false}
          >
            <Avatar />
          </PresentationControls>
        </Float>
        <ContactShadows
          position={[0, -1.4, 0]}
          opacity={0.75}
          scale={10}
          blur={3}
          far={4}
        />
      </Suspense>
    </Canvas>
  );
};
