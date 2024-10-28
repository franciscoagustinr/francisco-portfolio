import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export function SplineModels(props) {
  const { nodes, materials } = useGLTF("./spline.gltf");
  const splineModelsRef = useRef();

  useFrame((state) => {
    const { pointer } = state;
    const cursorX = pointer.x; // X normalizado entre -1 y 1
    const cursorY = pointer.y; // Y normalizado entre -1 y 1
    if (splineModelsRef.current) {
      splineModelsRef.current.position.x = cursorX * -0.05; // Movimiento en el eje X
      splineModelsRef.current.position.y = cursorY * -0.05; // Movimiento en el eje Y

      // Rotación en los ejes X e Y basada en cursorX y cursorY
      splineModelsRef.current.rotation.x = cursorY * 0.01;
      splineModelsRef.current.rotation.y = cursorX * 0.01;
      splineModelsRef.current.rotation.z = cursorX * 0.01;
    }
  });

  return (
    <group dispose={null}>
      <group ref={splineModelsRef} scale={0.0075}>
        <mesh
          geometry={nodes.Torus_5.geometry}
          material={nodes.Torus_5.material}
          position={[83.065, 258.105, 0]}
          rotation={[-0.446, -0.664, 0]}
          scale={1.2}
        >
          <meshStandardMaterial
            attach="material"
            metalness={1}
            roughness={0.5}
            color="#f2bac9"
          />
        </mesh>
        <mesh
          geometry={nodes.Torus_5.geometry}
          material={nodes.Torus_5.material}
          position={[524, -110, 0]}
          rotation={[8, -0.664, 0]}
          scale={1}
        >
          <meshStandardMaterial
            attach="material"
            metalness={1}
            roughness={0.5}
            color="#f2bac9"
          />
        </mesh>
        <mesh
          geometry={nodes.Torus_5.geometry}
          material={nodes.Torus_5.material}
          position={[-383.065, 258, 0]}
          rotation={[2, 7, 0]}
          scale={0.8}
        >
          <meshStandardMaterial
            attach="material"
            metalness={1}
            roughness={0.5}
            color="#ef798a"
          />
        </mesh>
        <mesh
          geometry={nodes.Torus_5.geometry}
          material={nodes.Torus_5.material}
          position={[200, -208, 0]}
          rotation={[-2, 7, 0]}
          scale={1.5}
        >
          <meshStandardMaterial
            attach="material"
            metalness={1}
            roughness={0.5}
            color="#5aa9e6"
          />
        </mesh>
        <mesh
          geometry={nodes.Torus_4.geometry}
          material={nodes.Torus_4.material}
          position={[-235.412, -208.355, 0]}
          rotation={[-0.446, -0.664, 0]}
          scale={1}
        >
          <meshStandardMaterial
            attach="material"
            metalness={1}
            roughness={0.5}
            color="#f2bac9"
          />
        </mesh>
        <mesh
          geometry={nodes.Torus_4.geometry}
          material={nodes.Torus_4.material}
          position={[-640, -80, 0]}
          rotation={[0.446, 0, 0]}
          scale={1.3}
        >
          <meshStandardMaterial
            attach="material"
            metalness={1}
            roughness={0.5}
            color="#f2bac9"
          />
        </mesh>
        <mesh
          geometry={nodes.Torus_3.geometry}
          material={nodes.Torus_3.material}
          position={[290, -124.129, 30]}
          scale={0.3}
        >
          <meshStandardMaterial
            attach="material"
            metalness={1}
            roughness={1}
            color="#b8b8ff"
          />
        </mesh>
        <mesh
          geometry={nodes.Torus_3.geometry}
          material={nodes.Torus_3.material}
          position={[550, 140, 10]}
          scale={0.3}
        >
          <meshStandardMaterial
            attach="material"
            metalness={1}
            roughness={1}
            color="#c3e58c"
          />
        </mesh>
        <mesh
          geometry={nodes.Torus_3.geometry}
          material={nodes.Torus_3.material}
          position={[-390, 124.129, 30]}
          rotation={[0, -9.4, 0]}
          scale={0.3}
        >
          <meshStandardMaterial
            attach="material"
            metalness={1}
            roughness={1}
            color="#7bcdd9"
          />
        </mesh>
        <mesh
          geometry={nodes.Star_3.geometry}
          material={nodes.Star_3.material}
          position={[-390, 63.316, 0]}
          rotation={[0, 0, -0.198]}
          scale={1.1}
        >
          <meshStandardMaterial
            attach="material"
            metalness={1}
            roughness={1}
            color="#ffff64"
          />
        </mesh>
        <mesh
          geometry={nodes.Star_2.geometry}
          material={nodes.Star_2.material}
          position={[465, 231.586, 0]}
          rotation={[0, 0, -1]}
          scale={1.4}
        >
          {" "}
          <meshStandardMaterial
            attach="material"
            metalness={1}
            roughness={1}
            color="#ffff64"
          />
        </mesh>

        <mesh
          geometry={nodes.Sphere_4.geometry}
          material={nodes.Sphere_4.material}
          position={[365.2, 0.034, 0]}
        >
          <meshStandardMaterial
            attach="material"
            metalness={1}
            roughness={1}
            color="#7fdca5"
          />
        </mesh>
        <mesh
          geometry={nodes.Sphere_4.geometry}
          material={nodes.Sphere_4.material}
          position={[-365.2, -90, 0]}
          scale={0.9}
        >
          <meshStandardMaterial
            attach="material"
            metalness={1}
            roughness={1}
            color="#c7b5ff"
          />
        </mesh>

        <mesh
          geometry={nodes.Torus.geometry}
          material={nodes.Torus.material}
          position={[380, 139.02, -0.328]}
          rotation={[0, 0, 2.88]}
        >
          <meshStandardMaterial
            attach="material"
            metalness={1}
            roughness={1}
            color="#ffddcc"
          />
        </mesh>
        <mesh
          geometry={nodes.Helix_3.geometry}
          material={nodes.Helix_3.material}
          position={[-440, -30, -100]}
          rotation={[0, 0, -0.9]}
          scale={1.3}
        >
          <meshStandardMaterial
            attach="material"
            metalness={1}
            roughness={1}
            color="#bed096"
          />
        </mesh>
        <mesh
          geometry={nodes.Helix_3.geometry}
          material={nodes.Helix_3.material}
          position={[-60, -340, -100]}
          rotation={[0, 10, -0.9]}
          scale={1.3}
        >
          <meshStandardMaterial
            attach="material"
            metalness={1}
            roughness={1}
            color="#eea2c1"
          />
        </mesh>
        <mesh
          geometry={nodes.Helix_3.geometry}
          material={nodes.Helix_3.material}
          position={[-700, 140, -100]}
          rotation={[-7, 10, -1.2]}
          scale={1.2}
        >
          <meshStandardMaterial
            attach="material"
            metalness={1}
            roughness={1}
            color="#eea2c1"
          />
        </mesh>
        <mesh
          geometry={nodes.Helix_2.geometry}
          material={nodes.Helix_2.material}
          position={[300, 140, -226]}
          rotation={[0, 0, -0.904]}
          scale={2}
        >
          {" "}
          <meshStandardMaterial
            attach="material"
            metalness={1}
            roughness={1}
            color="#fbf8cc"
          />
        </mesh>
        <mesh
          geometry={nodes.Helix.geometry}
          material={nodes.Helix.material}
          position={[450, -40, -32]}
          rotation={[0, 0, -0.7]}
          scale={1.1}
        >
          <meshStandardMaterial
            attach="material"
            metalness={1}
            roughness={1}
            color="#ef798a"
          />
        </mesh>
      </group>
    </group>
  );
}

useGLTF.preload("/spline.gltf");
