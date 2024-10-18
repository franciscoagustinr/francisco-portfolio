import React, { useEffect, useRef, useState } from "react";
import { Html, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useHats } from "./Hats";
import ConfettiExplosion from "react-confetti-explosion";
import { useSpring, animated } from "@react-spring/three";

export function Francisco(props) {
  const { nodes, materials } = useGLTF("/F-model7.glb");
  const objectRef = useRef();
  const [currentHatIndex, setCurrentHatIndex] = useState(0);
  const [isExploding, setIsExploding] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [isShaking, setIsShaking] = useState(false);
  const influences = objectRef?.current?.morphTargetInfluences;
  const [isBlinking, setIsBlinking] = useState(false);
  const blinkStartTime = useRef(0);
  const BLINK_DURATION = 0.15; // Duración de cierre y apertura de ojos
  const BLINK_INTERVAL = useRef(Math.random() * 5 + 3); // Tiempo entre parpadeos
  const hats = useHats(nodes, materials);
  const hatNames = Object.keys(hats); // Obtener los nombres de los sombreros

  const handleAvatarClick = () => {
    setCurrentHatIndex((prevIndex) => (prevIndex + 1) % hatNames.length);

    setIsExploding(true);
    setClicked(true);
    influences[0] = 1;
    influences[1] = 1;
    setTimeout(() => {
      setIsExploding(false);
      setClicked(false);
    }, 800);
    setTimeout(() => {
      influences[0] = 0;
      influences[1] = 0;
    }, 800);
  };

  const { scale, position, rotation } = useSpring({
    scale: clicked ? [0.95, 0.95, 0.95] : [1, 1, 1],
    position: clicked ? [0, 0, -0.5] : [0, 0, 0],
    // rotation: clicked ? [-0.18, 0, 0] : [0, 0, 0],
    rotation: clicked
      ? [-0.18, 0, 0]
      : // : isShaking
        // ? [0, 0.2, 0] // TODO: hacer la animación de sacudida de cabeza
        [0, 0, 0],
    config: { tension: 250, friction: 14 },
    onRest: () => {
      if (clicked) {
        setClicked(false); // Resetear clic después de la animación
        setIsShaking(true); // Iniciar sacudida de cabeza
        setTimeout(() => setIsShaking(false), 1000); // Detener sacudida después de 1 segundo
      }
    },
  });

  useEffect(() => {
    document.body.style.cursor = hovered ? "pointer" : "auto";
  }, [hovered]);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (clicked) return;
    if (objectRef.current) {
      // Si el parpadeo ha comenzado
      if (isBlinking) {
        const elapsedBlinkTime = time - blinkStartTime.current;

        if (elapsedBlinkTime < BLINK_DURATION) {
          // Fase de cierre de ojos
          const blinkProgress = elapsedBlinkTime / BLINK_DURATION;
          influences[0] = Math.sin(Math.PI * blinkProgress); // Suaviza el cierre
          influences[1] = Math.sin(Math.PI * blinkProgress);
        } else {
          // Parpadeo terminado, restablecer influencias y programar el siguiente parpadeo
          influences[0] = 0;
          influences[1] = 0;
          setIsBlinking(false);
          BLINK_INTERVAL.current = Math.random() * 5 + 3; // Próximo parpadeo entre 3 y 8 segundos
        }
      } else if (time - blinkStartTime.current > BLINK_INTERVAL.current) {
        // Comienza un nuevo parpadeo
        setIsBlinking(true);
        blinkStartTime.current = time;
      }
    }
  });

  return (
    <animated.group scale={scale} position={position} rotation={rotation}>
      <group
        {...props}
        dispose={null}
        onClick={handleAvatarClick}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        {hats[hatNames[currentHatIndex]]}
        {isExploding && (
          <Html position={[0, 2.5, 0]}>
            <div className="absolute !inset-0">
              <ConfettiExplosion
                force={0.2}
                particleCount={40}
                width={600}
                duration={1500}
              />
            </div>
          </Html>
        )}
        <group name="avatar-skin" position={[0, 1.041, 0]} scale={0.411}>
          <group position={[-0.021, 0.106, -0.023]}>
            <mesh
              ref={objectRef}
              name="Object_0002"
              castShadow
              receiveShadow
              geometry={nodes.Object_0002.geometry}
              material={materials.piel}
              morphTargetDictionary={nodes.Object_0002.morphTargetDictionary}
              morphTargetInfluences={nodes.Object_0002.morphTargetInfluences}
            />
            <mesh
              name="Object_0002_1"
              castShadow
              receiveShadow
              geometry={nodes.Object_0002_1.geometry}
              material={materials.dientes}
              morphTargetDictionary={nodes.Object_0002_1.morphTargetDictionary}
              morphTargetInfluences={nodes.Object_0002_1.morphTargetInfluences}
            />
            <mesh
              name="Object_0002_2"
              castShadow
              receiveShadow
              geometry={nodes.Object_0002_2.geometry}
              material={materials.Lengua}
              morphTargetDictionary={nodes.Object_0002_2.morphTargetDictionary}
              morphTargetInfluences={nodes.Object_0002_2.morphTargetInfluences}
            />
            <mesh
              name="Object_0002_3"
              castShadow
              receiveShadow
              geometry={nodes.Object_0002_3.geometry}
              material={materials["piel.oscura"]}
              morphTargetDictionary={nodes.Object_0002_3.morphTargetDictionary}
              morphTargetInfluences={nodes.Object_0002_3.morphTargetInfluences}
            />
          </group>
        </group>
        <group
          name="glasses"
          position={[0.021, 1.663, 0.512]}
          rotation={[-1.572, 0.002, 1.638]}
          scale={[0.045, 0.047, 0.045]}
        >
          <group rotation={[Math.PI / 2, 0, 0]}>
            <group position={[10.014, 0.418, -0.027]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.a_A06.geometry}
                material={materials.daz__A06}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.a_B05.geometry}
                material={materials.daz__B05}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.a_E04.geometry}
                material={materials.daz__E04}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.a_E08.geometry}
                material={materials.daz__E08}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.a_F05.geometry}
                material={materials.daz__F05}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.a_F05001.geometry}
                material={materials.daz__F05}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.a_I05.geometry}
                material={materials.daz__I05}
              />
            </group>
          </group>
        </group>
        <mesh
          name="nose"
          castShadow
          receiveShadow
          geometry={nodes.nose.geometry}
          material={materials.piel}
          position={[0.016, 1.783, 0.465]}
          rotation={[-1.072, -0.769, 1.27]}
          scale={-0.044}
        />
        <group
          position={[-0.012, 2.316, 0.085]}
          rotation={[2.892, 0.024, -3.141]}
          scale={0}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh208.geometry}
            material={materials.dbl_Layer0_001}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh208_1.geometry}
            material={materials.dbl_Layer0_002}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh208_2.geometry}
            material={materials.dbl_Layer0_003}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh208_3.geometry}
            material={materials.dbl_Layer0_004}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh208_4.geometry}
            material={materials.dbl_Layer0_005}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh208_5.geometry}
            material={materials.dbl_Layer0_006}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh208_6.geometry}
            material={materials.dbl_Layer0_007}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.piercing_nariz.geometry}
          material={materials.piercing}
          position={[-0.011, 1.76, 0.473]}
          rotation={[-2.863, 0.841, -2.097]}
          scale={0.01}
        >
          <meshStandardMaterial
            attach="material"
            metalness={1}
            roughness={0.3}
            color="silver"
          />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.aro_der_1.geometry}
          material={materials["piercing.001"]}
          position={[0.445, 1.647, -0.065]}
          rotation={[2.117, 0.003, 1.53]}
          scale={0.039}
        >
          <meshStandardMaterial
            attach="material"
            metalness={1}
            roughness={0.3}
            color="silver"
          />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.aro_der_2.geometry}
          material={materials["piercing.002"]}
          position={[0.495, 1.644, -0.064]}
          rotation={[2.124, 0.003, 1.53]}
          scale={0.039}
        >
          <meshStandardMaterial
            attach="material"
            metalness={1}
            roughness={0.3}
            color="silver"
          />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.bolita_aro.geometry}
          material={materials["piercing.002"]}
          position={[0.497, 1.614, 0.018]}
          rotation={[-3.012, -0.3, -0.922]}
          scale={0.02}
        >
          <meshStandardMaterial
            attach="material"
            metalness={1}
            roughness={0.3}
            color="silver"
          />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.bolita_aro_2.geometry}
          material={materials["piercing.003"]}
          position={[0.503, 1.626, -0.034]}
          rotation={[2.971, -0.162, -0.775]}
          scale={0.02}
        >
          <meshStandardMaterial
            attach="material"
            metalness={1}
            roughness={0.3}
            color="silver"
          />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.aro_izq.geometry}
          material={materials["piercing.004"]}
          position={[-0.469, 1.636, -0.078]}
          rotation={[2.117, 0.003, 1.53]}
          scale={0.039}
        >
          <meshStandardMaterial
            attach="material"
            metalness={1}
            roughness={0.3}
            color="silver"
          />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chiva.geometry}
          material={materials["Material.004"]}
          position={[-0.117, 1.544, 0.377]}
          rotation={[-0.142, 0.018, 0.012]}
          scale={0.066}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.bigote.geometry}
          material={materials["moustache.004"]}
          position={[-0.084, 1.703, 0.462]}
          scale={-0.024}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.ojo_derecho.geometry}
          material={materials.eyes}
          position={[0.195, 1.799, 0.249]}
          rotation={[0, 0, -Math.PI]}
          scale={[-0.14, -0.14, -0.1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.ojo_izquierdo.geometry}
          material={materials["eyes.001"]}
          position={[-0.216, 1.814, 0.277]}
          rotation={[0, 0, -Math.PI]}
          scale={[-0.137, -0.137, -0.097]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.iris_izquierdo.geometry}
          material={materials["pulp.001"]}
          position={[-0.201, 1.819, 0.361]}
          rotation={[-Math.PI, 0, 3.107]}
          scale={[0.055, 0.085, 0.041]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.iris_derecho.geometry}
          material={materials["pulp.003"]}
          position={[0.19, 1.817, 0.368]}
          rotation={[-Math.PI, 0.087, -Math.PI]}
          scale={[0.055, 0.085, 0.041]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.ceja_izquierda.geometry}
          material={materials.eyebrown}
          position={[-0.23, 2.004, 0.385]}
          rotation={[1.014, -0.262, 1.895]}
          scale={[-0.02, -0.03, -0.021]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.ceja_derecha.geometry}
          material={materials.eyebrown}
          position={[0.204, 2, 0.399]}
          rotation={[1.977, -0.018, -1.786]}
          scale={[-0.02, -0.03, -0.021]}
        />

        <group name="hair" position={[0, 1.041, 0]} scale={0.411}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_4003.geometry}
            material={materials["Material.007"]}
            position={[-0.023, 0.116, 0.001]}
            scale={[1.025, 1, 1.07]}
          />
        </group>
      </group>
    </animated.group>
  );
}

useGLTF.preload("/F-model7.glb");
