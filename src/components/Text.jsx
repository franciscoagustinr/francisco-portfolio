import React from "react";
import { Text } from "@react-three/drei";

export const TextTitle = () => {
  return (
    <>
      <Text
        position={[0, 1.3, -1]}
        fontSize={2.1}
        letterSpacing={-0.025}
        color="black"
        font="./fonts/Anton-Regular.ttf"
        fillOpacity={0.4}
      >
        FRANCISCO
      </Text>
      <Text
        position={[0, -0.7, -1]}
        fontSize={2.1}
        letterSpacing={-0.025}
        color="black"
        font="./fonts/Anton-Regular.ttf"
        fillOpacity={0.4}
      >
        AGUSTIN
      </Text>
    </>
  );
};
