import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";

import { Center, ContactShadows, Environment, Float } from "@react-three/drei";
import { TextTitle } from "./Text";
import { Francisco } from "./francisco";
import { SplineModels } from "./spline";

export const Scene = () => {
  return (
    // <Canvas dpr={[1.5, 2]} className="bg-[rgb(53,190,214)] ">
    <Canvas dpr={[1.5, 2]} className=" ">
      <Suspense fallback={null}>
        <ambientLight intensity={1} position={[0, 0, 0]} />
        <Environment preset="warehouse" />
        {/* <mesh scale={1}>
          <SplineModels />
        </mesh> */}
        <ContactShadows
          position={[0, -1.55, 0.15]}
          opacity={0.35}
          scale={4}
          blur={6}
          far={10}
        />
        <Float
          speed={5}
          rotationIntensity={0.2}
          floatIntensity={0.9}
          floatingRange={[1, 1.1]}
        >
          {/* <PresentationControls
            config={{ mass: 1, tension: 500 }}
            snap={{ mass: 4, tension: 1500 }}
            rotation={[0, 0, 0]}
            azimuth={[-0.2, 0.2]}
            cursor={false}
          > */}
          {/* <Center
            position={[isPopUpOpen ? -4.2 : 0, -1.2, isPopUpOpen ? 0.08 : 1]}
            rotation={[-0.01, isPopUpOpen ? 1.4 : 0, isPopUpOpen ? -0.13 : 0]}
          > */}
          <Center position={[0, -1.2, 1]} rotation={[0, 0, 0]}>
            <mesh position={[-0.2, -4.3, 0]} scale={1.7}>
              {/* <mesh position={[-0.2, -4.5, 0]} scale={1.9}> */}
              <Francisco />
            </mesh>
          </Center>
          {/* </PresentationControls> */}
        </Float>
        <TextTitle />
        {/* <Html occlude="blending" position={[-8.5, 2.8, -2]}>
          <div className="flex flex-col items-center">
            <div className="flex">
              {Array.from("FRANCISCO").map((letter, index) => (
                <span
                  key={index}
                  className={`font-GiantBoss text-[16rem] tracking-tight text-center leading-[13rem] transition-all duration-100 hover:scale-150 text-transparent stroke-black
                    ${index % 2 === 0 ? "hover:rotate-6" : "hover:-rotate-12"}
                    ${
                      [
                        "hover:text-[#f7d65f]",
                        "hover:text-[#e18754]",
                        "hover:text-[#54f0f0]",
                        "hover:text-[#db7c45]",
                        "hover:text-[#ef4d53]",
                        "hover:text-[#dd5ad9]",
                        "hover:text-[#d97e4a]",
                        "hover:text-[#eecb4b]",
                      ][index % 7]
                    }`}
                  style={{
                    WebkitTextStroke: "3px #1b1b1b", // Define el borde del texto
                  }}
                >
                  {letter}
                </span>
              ))}
            </div>
            <div className="flex">
              {Array.from("AGUSTIN").map((letter, index) => (
                <span
                  key={index}
                  className={`font-GiantBoss text-[16rem] tracking-tight text-center leading-[13rem] transition-all duration-100 hover:scale-150 
                    ${index % 2 === 0 ? "hover:rotate-6" : "hover:-rotate-12"}
                    ${
                      [
                        "hover:text-[#f7d65f]",
                        "hover:text-[#e18754]",
                        "hover:text-[#54f0f0]",
                        "hover:text-[#db7c45]",
                        "hover:text-[#ef4d53]",
                        "hover:text-[#dd5ad9]",
                        "hover:text-[#d97e4a]",
                        "hover:text-[#eecb4b]",
                      ][index % 7]
                    }`}
                >
                  {letter}
                </span>
              ))}
            </div>
          </div>
        </Html> */}
      </Suspense>
    </Canvas>
  );
};
