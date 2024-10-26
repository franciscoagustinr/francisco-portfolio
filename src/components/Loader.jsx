import { useProgress } from "@react-three/drei";
import React from "react";

export const Loader = () => {
  const { progress } = useProgress();

  return <div>{progress} % loaded</div>;
};
