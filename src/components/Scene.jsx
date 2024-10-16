import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Avatar } from "./Avatar";
import { Environment, OrbitControls } from "@react-three/drei";

export const Scene = () => {
  return (
    <Canvas className="bg-[rgb(53,190,214)]">
      <Suspense fallback={null}>
        <ambientLight intensity={1} position={[0, 0, 0]} />
        <pointLight intensity={1} position={[0, 0, 0]} />
        <Environment preset="warehouse" />
        <OrbitControls />
        <Avatar />
      </Suspense>
    </Canvas>
  );
};
