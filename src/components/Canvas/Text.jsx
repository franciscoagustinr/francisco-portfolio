/* eslint-disable react-hooks/rules-of-hooks */
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { Text } from '@react-three/drei';
import { useMousePosition } from '../../utils/mousePosition';
import gsap from 'gsap';
import { usePreloader } from '../../stores/usePreloader';

export const TextTitle = () => {
  const mousePosition = useMousePosition();
  const FONT_SIZE = 2.8;
  const BASE_SPACING = FONT_SIZE * 0.45;
  const titleRef = useRef(null);
  const FranciscoRef = useRef(null);
  const AgustinRef = useRef(null);
  const isLoading = usePreloader((state) => state.isLoading);
  const isMobile = window.innerWidth < 768;
  const isTablet = window.innerWidth >= 768 && window.innerWidth < 1024;
  const franciscoPosition = isMobile
    ? [-2.01, 0.3, 0]
    : isTablet
      ? [-4, -0.3, 0]
      : [-5.5, -0.3, 0];
  const agustinPosition = isMobile
    ? [-1.5, -2.3, 0]
    : isTablet
      ? [-2.9, -3.6, 0]
      : [-4.2, -3.6, 0];
  const textScale = isMobile ? 0.4 : isTablet ? 0.8 : 1.2;

  const [franciscoColors, setFranciscoColors] = useState(
    Array('FRANCISCO'.length).fill('black')
  );
  const [agustinColors, setAgustinColors] = useState(
    Array('AGUSTIN'.length).fill('black')
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
      F: '#FFE484',
      R: '#FFAA79',
      A: '#B4FAFA',
      a: '#B4FAFA',
      N: '#FF787D',
      C: '#EFB1ED',
      I: '#FFE484',
      i: '#FFE484',
      S: '#B4FAFA',
      secondC: '#FF787D',
      O: '#EFB1ED',
      secondI: '#FFE484',
      G: '#FFAA79',
      U: '#FFE484',
      T: '#FFAA79',
    }),
    []
  );

  const handlePointerOver = useCallback((index, color, setColors) => {
    setColors((prevColors) =>
      prevColors.map((c, i) => (i === index ? color : c))
    );
  }, []);

  const handlePointerOut = useCallback((index, setColors) => {
    setColors((prevColors) =>
      prevColors.map((c, i) => (i === index ? 'black' : c))
    );
  }, []);

  const generateTextElements = useCallback(
    (text, colors, setColors) => {
      let xPosition = 0;
      const letterCount = {};

      return text.split('').map((letter, index) => {
        letterCount[letter] = (letterCount[letter] || 0) + 1;
        const isSecondC = letter === 'C' && letterCount[letter] === 2;
        const isSecondI = letter === 'I' && letterCount[letter] === 2;

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
            fillOpacity={colors[index] !== 'black' ? 1 : 0.2}
            rotation={[0, 0, 0]}
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
      letterSpacingMap,
      BASE_SPACING,
      letterColors,
      FONT_SIZE,
      handlePointerOver,
      handlePointerOut,
    ]
  );

  useEffect(() => {
    if (isLoading) return;
    const tl = gsap.timeline({ delay: 0 });
    tl.fromTo(
      FranciscoRef.current.rotation,
      { x: 3, y: 1, z: 1, duration: 0.2, ease: 'power3.in', delay: 0 },
      { x: 0, y: 0, z: 0 }
    );

    tl.fromTo(
      AgustinRef.current.rotation,
      { x: -3, y: 1, z: -1, duration: 0.2, ease: 'power3.in', delay: 0 },
      { x: 0, y: 0, z: 0 }
    );
  }, [isLoading]);

  return (
    <>
      <group
        ref={titleRef}
        position={
          isMobile
            ? [0.13, 0, 0]
            : isTablet
              ? [0.25, 0, 0]
              : [
                  (-(mousePosition.x / window.innerWidth) * 2) / 8,
                  ((mousePosition.y / window.innerHeight) * 2) / 8,
                  0,
                ]
        }
      >
        <mesh position={franciscoPosition} scale={textScale} ref={FranciscoRef}>
          {generateTextElements(
            'FRANCISCO',
            franciscoColors,
            setFranciscoColors
          )}
        </mesh>
        <mesh position={agustinPosition} scale={textScale} ref={AgustinRef}>
          {generateTextElements('AGUSTIN', agustinColors, setAgustinColors)}
        </mesh>
      </group>
    </>
  );
};
