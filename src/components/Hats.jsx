import { useFBX } from "@react-three/drei";
import React, { useMemo } from "react";

export const ChineseHat = ({ nodes, materials }) => (
  <>
    <group
      position={[0.023, 2.545, -0.031]}
      rotation={[-Math.PI / 2, 0, 0]}
      scale={1.98}
    >
      <group rotation={[Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_4.geometry}
          material={materials.Cylinder_BAKED}
          position={[-0.016, -0.103, -0.026]}
          rotation={[-0.16, -0.011, 0.019]}
          scale={1.147}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_5.geometry}
          material={materials.Cylinder_BAKED}
          position={[-0.017, -0.211, 0.04]}
          rotation={[-0.087, -0.035, 0.006]}
          scale={1.73}
        />
      </group>
    </group>
  </>
);

export const MickeyHat = ({ nodes, materials }) => (
  <>
    <group
      position={[-0.006, 2.12, 0.009]}
      rotation={[-1.789, 0.02, -1.616]}
      scale={0.481}
    >
      <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere005_Material001_0.geometry}
          material={materials["Material.001"]}
          position={[0, 41.205, 0.581]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder005_Material001_0.geometry}
          material={materials["Material.001"]}
          position={[15, 70, 92]}
          scale={1.05}
        />
      </group>
    </group>
  </>
);

export const SharkHat = ({ nodes, materials }) => (
  <>
    <group
      position={[-0.063, 1.456, -0.08]}
      rotation={[-1.272, 0.066, -0.076]}
      scale={4.281}
    >
      <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.same_same_0.geometry}
            material={materials.same}
            position={[-0.005, 0.041, -0.018]}
            rotation={[0.213, 0.05, -0.033]}
            scale={0.979}
          />
        </group>
      </group>
    </group>
  </>
);

export const OktopusHat = ({ nodes, materials }) => (
  <>
    <group
      position={[0.222, 2.506, 0.153]}
      rotation={[-1.41, 0.38, -0.132]}
      scale={0.136}
    >
      <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <group
            position={[0, -0.8, -0.5]}
            rotation={[0.175, 0, 0]}
            scale={[0.49, 1, 0.376]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Sphere001_Material001_0.geometry}
              material={materials["Material.002"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Sphere001_Material003_0.geometry}
              material={materials["Material.003"]}
            />
          </group>
          <group
            position={[0.8, 0, -0.5]}
            rotation={[0, 0.175, Math.PI / 2]}
            scale={[0.49, 1, 0.376]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Sphere002_Material001_0.geometry}
              material={materials["Material.002"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Sphere002_Material003_0.geometry}
              material={materials["Material.003"]}
            />
          </group>
          <group
            position={[0, 0.8, -0.5]}
            rotation={[-0.175, 0, -Math.PI]}
            scale={[0.49, 1, 0.376]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Sphere003_Material001_0.geometry}
              material={materials["Material.002"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Sphere003_Material003_0.geometry}
              material={materials["Material.003"]}
            />
          </group>
          <group
            position={[-0.8, 0, -0.5]}
            rotation={[0, -0.175, -Math.PI / 2]}
            scale={[0.49, 1, 0.376]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Sphere004_Material001_0.geometry}
              material={materials["Material.002"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Sphere004_Material003_0.geometry}
              material={materials["Material.003"]}
            />
          </group>
          <group
            position={[0.6, -0.6, -0.5]}
            rotation={[0.124, 0.123, 0.778]}
            scale={[0.49, 1, 0.376]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Sphere005_Material001_0001.geometry}
              material={materials["Material.002"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Sphere005_Material003_0.geometry}
              material={materials["Material.003"]}
            />
          </group>
          <group
            position={[0.6, 0.6, -0.5]}
            rotation={[-0.124, 0.123, 2.364]}
            scale={[0.49, 1, 0.376]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Sphere006_Material001_0.geometry}
              material={materials["Material.002"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Sphere006_Material003_0.geometry}
              material={materials["Material.003"]}
            />
          </group>
          <group
            position={[-0.6, 0.6, -0.5]}
            rotation={[-0.112, -0.134, -2.272]}
            scale={[0.49, 1, 0.376]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Sphere007_Material001_0.geometry}
              material={materials["Material.002"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Sphere007_Material003_0.geometry}
              material={materials["Material.003"]}
            />
          </group>
          <group
            position={[-0.6, -0.6, -0.5]}
            rotation={[0.124, -0.123, -0.778]}
            scale={[0.49, 1, 0.376]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Sphere008_Material001_0.geometry}
              material={materials["Material.002"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Sphere008_Material003_0.geometry}
              material={materials["Material.003"]}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Sphere_Material001_0.geometry}
            material={materials["Material.002"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Sphere009_Material002_0.geometry}
            material={materials["Material.005"]}
            position={[0.356, -0.819, 0.234]}
            rotation={[1.456, 0, 0]}
            scale={0.165}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Torus_Material002_0.geometry}
            material={materials["Material.005"]}
            position={[0, -0.976, 0.13]}
            rotation={[1.236, 0, 0]}
            scale={0.081}
          />
        </group>
      </group>
    </group>
  </>
);

export const CowboyHat = ({ nodes, materials }) => (
  <>
    <group
      position={[-0.009, 2.275, 0.021]}
      rotation={[-Math.PI / 2, 0, 0]}
      scale={0.818}
    >
      <group rotation={[Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_6.geometry}
          material={materials["Material.009"]}
          position={[-0.008, -0.075, 0.041]}
          scale={1.033}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_4001.geometry}
          material={materials["Material.008"]}
          position={[-0.008, -0.075, 0.041]}
          scale={1.033}
        />
      </group>
    </group>
  </>
);

export const BatmanHat = () => {
  const batmanHat = useFBX("./batman-hat.fbx");
  return (
    <>
      <primitive
        object={batmanHat}
        dispose={null}
        scale={0.00045}
        position={[0, 2.035, 0.13]}
        rotation={[-0.1, 3.2, 0]}
      />
    </>
  );
};

export const useHats = (nodes, materials) => {
  return useMemo(
    () => ({
      NoneHat: null,
      ChineseHat: <ChineseHat nodes={nodes} materials={materials} />,
      MickeyHat: <MickeyHat nodes={nodes} materials={materials} />,
      SharkHat: <SharkHat nodes={nodes} materials={materials} />,
      OktopusHat: <OktopusHat nodes={nodes} materials={materials} />,
      CowboyHat: <CowboyHat nodes={nodes} materials={materials} />,
      BatmanHat: <BatmanHat />,
    }),
    [nodes, materials]
  );
};
