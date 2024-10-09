import React from "react";
import { Francisco } from "./francisco";

export const Pepe = () => {
  return (
    <mesh position={[0, -2, 2]}>
      {/* <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="orange" /> */}
      <Francisco args={[10, 10, 10]} />
    </mesh>
  );
};
