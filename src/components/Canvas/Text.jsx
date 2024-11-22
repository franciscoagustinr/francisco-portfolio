/* eslint-disable react-hooks/rules-of-hooks */
import React, { useCallback, useMemo, useState } from "react";
import { Text } from "@react-three/drei";
import { useMousePosition } from "../../utilities/mousePosition";

export const TextTitle = () => {
  const FONT_SIZE = 2.8;
  const BASE_SPACING = FONT_SIZE * 0.45; // Espaciado base para letras de ancho medio
  const mousePosition = useMousePosition();

  // Mantenemos un estado de colores separado para cada palabra
  const [franciscoColors, setFranciscoColors] = useState(
    Array("FRANCISCO".length).fill("black")
  );
  const [agustinColors, setAgustinColors] = useState(
    Array("AGUSTIN".length).fill("black")
  );

  const letterSpacingMap = useMemo(
    () => ({
      i: BASE_SPACING * 0.73,
      I: BASE_SPACING * 0.7,
      F: BASE_SPACING * 0.95,
      S: BASE_SPACING * 0.95,
      C: BASE_SPACING * 0.75,
      secondC: BASE_SPACING * 1,
      secondI: BASE_SPACING * 1,
      T: BASE_SPACING * 0.67,
      R: BASE_SPACING * 0.99,
    }),
    [BASE_SPACING]
  );

  const letterColors = useMemo(
    () => ({
      F: "#FFE484",
      R: "#FFAA79",
      A: "#B4FAFA",
      a: "#B4FAFA",
      N: "#FF787D",
      C: "#EFB1ED",
      I: "#FFE484",
      i: "#FFE484",
      S: "#B4FAFA",
      secondC: "#FF787D",
      O: "#EFB1ED",
      secondI: "#FFE484",
      G: "#FFAA79",
      U: "#FFE484",
      T: "#FFAA79",
      //F: "#FFD449", // Más fuerte que #FFE484
      //R: "#FF7745", // Más fuerte que #FFAA79
      //A: "#6FF2F2", // Más fuerte que #B4FAFA
      //N: "#FF3B41", // Más fuerte que #FF787D
      //C: "#E16FE5", // Más fuerte que #EFB1ED
      //I: "#FFD449", // Más fuerte que #FFE484
      //S: "#6FF2F2", // Más fuerte que #B4FAFA
      //secondC: "#FF3B41", // Más fuerte que #FF787D
      //O: "#E16FE5", // Más fuerte que #EFB1ED
      //secondI: "#FFD449", // Más fuerte que #FFE484
      //G: "#FF7745", // Más fuerte que #FFAA79
      //U: "#FFD449", // Más fuerte que #FFE484
      //T: "#FF7745", // Más fuerte que #FFAA79
    }),
    []
  );

  // Función general para manejar hover en una palabra específica
  const handlePointerOver = useCallback((index, color, setColors) => {
    setColors((prevColors) =>
      prevColors.map((c, i) => (i === index ? color : c))
    );
  }, []);

  const handlePointerOut = useCallback((index, setColors) => {
    setColors((prevColors) =>
      prevColors.map((c, i) => (i === index ? "black" : c))
    );
  }, []);

  // Generador de texto reutilizable
  const generateTextElements = useCallback(
    (text, colors, setColors) => {
      let xPosition = 0;
      const letterCount = {};

      return text.split("").map((letter, index) => {
        letterCount[letter] = (letterCount[letter] || 0) + 1;
        const isSecondC = letter === "C" && letterCount[letter] === 2;
        const isSecondI = letter === "I" && letterCount[letter] === 2;

        const letterSpacing = isSecondC
          ? letterSpacingMap.secondC
          : isSecondI
          ? letterSpacingMap.secondI
          : letterSpacingMap[letter] || BASE_SPACING;

        const color = isSecondC
          ? letterColors.secondC
          : isSecondI
          ? letterColors.secondI
          : letterColors[letter] || undefined;

        const element = (
          <Text
            key={index}
            position={[xPosition, 1.65, -2]}
            lineHeight={0.9}
            fontSize={FONT_SIZE}
            letterSpacing={-0.025}
            color={colors[index]}
            font="./fonts/Anton-Regular.ttf"
            // fillOpacity={0.2}
            fillOpacity={colors[index] !== "black" ? 1 : 0.2}
            rotation={[
              0, 0, 0,
              // letter === "R" || letter === "N" ? Math.PI * 1 : 0,
              // letter === "i" ? Math.PI * 1 : 0,
            ]}
            onPointerOver={() => handlePointerOver(index, color, setColors)}
            onPointerOut={() => handlePointerOut(index, setColors)}
            // onPointerOver={(e) => {
            //   handlePointerOver(index, color, setColors);
            //   e.object.scale.set(1, 1, 1); // Hover effect: scaling
            //   e.object.rotation.z = index % 2 === 0 ? 0.2 : -0.2; // Rotation on hover
            //   e.object.fillOpacity = 1;
            //   e.object.position.z = -1.9;
            // }}
            // onPointerLeave={(e) => {
            //   handlePointerOut(index, setColors);
            //   e.object.scale.set(1, 1, 1); // Reset scale
            //   e.object.rotation.z = 0; // Reset rotation
            //   e.object.fillOpacity = 0.2;
            //   e.object.position.z = -2;
            //   e.object.rotation.z =
            //     letter === "i" || letter === "S" ? Math.PI * 1 : 0;
            // }}
          >
            {letter}
          </Text>
        );

        xPosition += letterSpacing;
        return element;
      });
    },
    [
      BASE_SPACING,
      FONT_SIZE,
      letterColors,
      letterSpacingMap,
      handlePointerOver,
      handlePointerOut,
    ]
  );

  return (
    <>
      <group
        position={[
          ((mousePosition.x / window.innerWidth) * 2) / 8,
          (-(mousePosition.y / window.innerHeight) * 2) / 8,
          0,
        ]}
      >
        <mesh position={[-5.5, -0.3, 0]} scale={1.2}>
          {generateTextElements(
            "FRANCISCO",
            franciscoColors,
            setFranciscoColors
          )}
        </mesh>
        <mesh position={[-4.2, -3.6, 0]} scale={1.2}>
          {generateTextElements("AGUSTIN", agustinColors, setAgustinColors)}
        </mesh>
      </group>
    </>
  );
};