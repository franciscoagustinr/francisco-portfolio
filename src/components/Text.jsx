/* eslint-disable react-hooks/rules-of-hooks */
import React, { useCallback, useMemo, useState } from "react";
import { Text } from "@react-three/drei";

// export const TextTitle = () => {
//   const FONT_SIZE = 2.8;
//   const BASE_SPACING = FONT_SIZE * 0.45; // Espaciado base para letras de ancho medio
//   const [colors, setColors] = useState(Array(9).fill("black"));

//   const letterSpacingMap = useMemo(
//     () => ({
//       I: BASE_SPACING * 0.7,
//       F: BASE_SPACING * 0.9,
//       S: BASE_SPACING * 0.95,
//       C: BASE_SPACING * 0.7,
//       secondC: BASE_SPACING * 1,
//     }),
//     [BASE_SPACING]
//   );

//   const letterColors = useMemo(
//     () => ({
//       F: "#FFE484",
//       R: "#FFAA79",
//       A: "#B4FAFA",
//       N: "#FF787D",
//       C: "#EFB1ED",
//       I: "#FFE484",
//       S: "#B4FAFA",
//       secondC: "#FF787D",
//       O: "#EFB1ED",
//     }),
//     []
//   );

//   // Memoizamos las funciones de hover
//   const handlePointerOver = useCallback((index, color) => {
//     setColors((prevColors) =>
//       prevColors.map((c, i) => (i === index ? color : c))
//     );
//   }, []);

//   const handlePointerOut = useCallback((index) => {
//     setColors((prevColors) =>
//       prevColors.map((c, i) => (i === index ? "black" : c))
//     );
//   }, []);

//   const generateTextElements = useCallback(
//     (text) => {
//       let xPosition = 0;
//       const letterCount = {};

//       return text.split("").map((letter, index) => {
//         letterCount[letter] = (letterCount[letter] || 0) + 1;
//         const isSecondC = letter === "C" && letterCount[letter] === 2;

//         const letterSpacing = isSecondC
//           ? letterSpacingMap.secondC
//           : letterSpacingMap[letter] || BASE_SPACING;
//         const color = isSecondC
//           ? letterColors.secondC
//           : letterColors[letter] || "black";

//         const element = (
//           <Text
//             key={index}
//             position={[xPosition, 1.65, -2]}
//             lineHeight={0.9}
//             fontSize={FONT_SIZE}
//             letterSpacing={-0.025}
//             color={colors[index]} // Usar el color específico de cada letra
//             font="./fonts/Anton-Regular.ttf"
//             fillOpacity={colors[index] !== "black" ? 1 : 0.4}
//             onPointerOver={() => handlePointerOver(index, color)}
//             onPointerOut={() => handlePointerOut(index)}
//           >
//             {letter}
//           </Text>
//         );

//         xPosition += letterSpacing;
//         return element;
//       });
//     },
//     [
//       colors,
//       letterColors,
//       letterSpacingMap,
//       BASE_SPACING,
//       handlePointerOver,
//       handlePointerOut,
//     ]
//   );

//   return (
//     <>
//       {/* <Text
//         position={[0, 1.65, -2]}
//         fontSize={2.8}
//         letterSpacing={-0.025}
//         color="black"
//         font="./fonts/Anton-Regular.ttf"
//         fillOpacity={0.4}
//         onPointerOver={() => console.log("over")}
//       >
//         FRANCISCO
//       </Text> */}
//       <mesh position={[-4.2, 0, 0]}>{generateTextElements("FRANCISCO")}</mesh>
//       <mesh position={[-3.4, -2.5, 0]}>{generateTextElements("AGUSTIN")}</mesh>

//       {/* <Text
//         position={[0, -1, -2]}
//         fontSize={2.8}
//         letterSpacing={-0.025}
//         color="black"
//         font="./fonts/Anton-Regular.ttf"
//         fillOpacity={0.4}
//       >
//         AGUSTIN
//       </Text> */}
//       {/* <Text
//         position={[-3.1, 2.67, -1]}
//         fontSize={0.4}
//         letterSpacing={0.01}
//         color="#FFFFFF"
//         font="./fonts/PlaywritePE-VariableFont.ttf"
//         fillOpacity={1}
//         rotation={[0, 0, 0]}
//       >
//         freelance dev
//       </Text> */}
//     </>
//   );
// };

export const TextTitle = () => {
  const FONT_SIZE = 2.8;
  const BASE_SPACING = FONT_SIZE * 0.45; // Espaciado base para letras de ancho medio

  // Mantenemos un estado de colores separado para cada palabra
  const [franciscoColors, setFranciscoColors] = useState(
    Array("FRANCISCO".length).fill("black")
  );
  const [agustinColors, setAgustinColors] = useState(
    Array("AGUSTIN".length).fill("black")
  );

  const letterSpacingMap = useMemo(
    () => ({
      I: BASE_SPACING * 0.7,
      F: BASE_SPACING * 0.9,
      S: BASE_SPACING * 0.95,
      C: BASE_SPACING * 0.7,
      secondC: BASE_SPACING * 1,
      secondI: BASE_SPACING * 1,
      T: BASE_SPACING * 0.67,
    }),
    [BASE_SPACING]
  );

  const letterColors = useMemo(
    () => ({
      F: "#FFE484",
      R: "#FFAA79",
      A: "#B4FAFA",
      N: "#FF787D",
      C: "#EFB1ED",
      I: "#FFE484",
      S: "#B4FAFA",
      secondC: "#FF787D",
      O: "#EFB1ED",
      secondI: "#FFE484",
      G: "#FFAA79",
      U: "#FFE484",
      T: "#FFAA79",
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
          : letterColors[letter] || "black";

        const element = (
          <Text
            key={index}
            position={[xPosition, 1.65, -2]}
            lineHeight={0.9}
            fontSize={FONT_SIZE}
            letterSpacing={-0.025}
            color={colors[index]} // Usar el color específico de cada letra
            font="./fonts/Anton-Regular.ttf"
            fillOpacity={colors[index] !== "black" ? 1 : 0.2}
            onPointerOver={() => handlePointerOver(index, color, setColors)}
            onPointerOut={() => handlePointerOut(index, setColors)}
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
      <mesh position={[-5.5, -0.3, 0]} scale={1.2}>
        {generateTextElements("FRANCISCO", franciscoColors, setFranciscoColors)}
      </mesh>
      <mesh position={[-4.2, -3.6, 0]} scale={1.2}>
        {generateTextElements("AGUSTIN", agustinColors, setAgustinColors)}
      </mesh>
      {/* <Text
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
      </Text> */}
    </>
  );
};
