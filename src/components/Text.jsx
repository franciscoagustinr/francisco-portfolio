import React from "react";
import { Text } from "@react-three/drei";

export const TextTitle = () => {
  return (
    <>
      <Text
        position={[0, 1.4, -1]}
        fontSize={2.4}
        letterSpacing={-0.025}
        color="black"
        font="./fonts/Anton-Regular.ttf"
        fillOpacity={0.4}
      >
        FRANCISCO
      </Text>
      <Text
        position={[0, -0.8, -1]}
        fontSize={2.4}
        letterSpacing={-0.025}
        color="black"
        font="./fonts/Anton-Regular.ttf"
        fillOpacity={0.4}
      >
        AGUSTIN
      </Text>
      <Text
        position={[-3.1, 2.67, -1]}
        fontSize={0.4}
        letterSpacing={0.01}
        color="#FFFFFF"
        font="./fonts/PlaywritePE-VariableFont.ttf"
        fillOpacity={1}
        rotation={[0, 0, 0]}
      >
        freelance dev
      </Text>
    </>
  );
};
