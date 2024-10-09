import React from "react";
import { Canvas } from "@react-three/fiber";
import { Pepe } from "./Pepe";
import { Environment, OrbitControls } from "@react-three/drei";

export const Scene = () => {
  return (
    <Canvas className="min-h-[100vh] bg-[white]">
      <ambientLight intensity={2} position={[0, 0, 0]} />
      <pointLight intensity={10} />
      <Environment preset="city" />
      <OrbitControls />
      <Pepe />
    </Canvas>
  );
};
