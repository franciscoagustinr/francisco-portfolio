import React, { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export function Francisco(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/F-model.glb");
  const { actions } = useAnimations(animations, group);
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Cube008_0" position={[0, 1.041, 0]} scale={0.411}>
          <group name="hair001" position={[-0.021, 0.106, -0.023]}>
            <mesh
              name="Object_0002"
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
          name="lentes"
          position={[0.021, 1.663, 0.512]}
          rotation={[-1.572, 0.002, 1.638]}
          scale={[0.045, 0.047, 0.045]}
        >
          <group
            name="Collada_visual_scene_group"
            rotation={[Math.PI / 2, 0, 0]}
          >
            <group name="RootNode">
              <group
                name="Default_Camera"
                position={[14.988, 23.68, 57.689]}
                rotation={[-0.335, 0.081, 0.028]}
              >
                <group name="Default_Camera_0-camera" />
              </group>
              <group name="megane55_03" position={[10.014, 0.418, -0.027]}>
                <mesh
                  name="a_A06"
                  castShadow
                  receiveShadow
                  geometry={nodes.a_A06.geometry}
                  material={materials.daz__A06}
                />
                <mesh
                  name="a_B05"
                  castShadow
                  receiveShadow
                  geometry={nodes.a_B05.geometry}
                  material={materials.daz__B05}
                />
                <mesh
                  name="a_E04"
                  castShadow
                  receiveShadow
                  geometry={nodes.a_E04.geometry}
                  material={materials.daz__E04}
                />
                <mesh
                  name="a_E08"
                  castShadow
                  receiveShadow
                  geometry={nodes.a_E08.geometry}
                  material={materials.daz__E08}
                />
                <mesh
                  name="a_F05"
                  castShadow
                  receiveShadow
                  geometry={nodes.a_F05.geometry}
                  material={materials.daz__F05}
                />
                <mesh
                  name="a_F05001"
                  castShadow
                  receiveShadow
                  geometry={nodes.a_F05001.geometry}
                  material={materials.daz__F05}
                />
                <mesh
                  name="a_I05"
                  castShadow
                  receiveShadow
                  geometry={nodes.a_I05.geometry}
                  material={materials.daz__I05}
                />
              </group>
            </group>
          </group>
        </group>
        <mesh
          name="nose"
          geometry={nodes.nose.geometry}
          material={materials.piel}
          position={[0.016, 1.783, 0.465]}
          rotation={[-1.072, -0.769, 1.27]}
          scale={-0.044}
        />
        <group name="MouseEar_MouseEar_0" />
        <group
          name="chinese_hat"
          position={[0.023, 2.545, -0.031]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={1.98}
        >
          <group name="root004">
            <group name="GLTF_SceneRootNode004" rotation={[Math.PI / 2, 0, 0]}>
              <group name="Hut_0">
                <mesh
                  name="Object_4"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_4.geometry}
                  material={materials.Cylinder_BAKED}
                  position={[-0.016, -0.103, -0.026]}
                  rotation={[-0.16, -0.011, 0.019]}
                  scale={1.147}
                />
                <mesh
                  name="Object_5"
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
          </group>
        </group>
        <group
          name="gorra"
          position={[-0.012, 2.316, 0.085]}
          rotation={[2.892, 0.024, -3.141]}
          scale={0}
        >
          <mesh
            name="Mesh208"
            castShadow
            receiveShadow
            geometry={nodes.Mesh208.geometry}
            material={materials.dbl_Layer0_001}
          />
          <mesh
            name="Mesh208_1"
            castShadow
            receiveShadow
            geometry={nodes.Mesh208_1.geometry}
            material={materials.dbl_Layer0_002}
          />
          <mesh
            name="Mesh208_2"
            castShadow
            receiveShadow
            geometry={nodes.Mesh208_2.geometry}
            material={materials.dbl_Layer0_003}
          />
          <mesh
            name="Mesh208_3"
            castShadow
            receiveShadow
            geometry={nodes.Mesh208_3.geometry}
            material={materials.dbl_Layer0_004}
          />
          <mesh
            name="Mesh208_4"
            castShadow
            receiveShadow
            geometry={nodes.Mesh208_4.geometry}
            material={materials.dbl_Layer0_005}
          />
          <mesh
            name="Mesh208_5"
            castShadow
            receiveShadow
            geometry={nodes.Mesh208_5.geometry}
            material={materials.dbl_Layer0_006}
          />
          <mesh
            name="Mesh208_6"
            castShadow
            receiveShadow
            geometry={nodes.Mesh208_6.geometry}
            material={materials.dbl_Layer0_007}
          />
        </group>
        <group
          name="mickey_hat"
          position={[-0.006, 2.12, 0.009]}
          rotation={[-1.789, 0.02, -1.616]}
          scale={0.481}
        >
          <group
            name="871d8bd58d4e448caed836612aa663f4fbx"
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.01}
          >
            <group name="RootNode001">
              <group
                name="Cylinder005"
                position={[0, 104.609, 87.029]}
                rotation={[-0.008, 0, 0]}
              >
                <mesh
                  name="Cylinder005_Material001_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Cylinder005_Material001_0.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group name="Sphere005" position={[0, 41.205, 0.581]}>
                <mesh
                  name="Sphere005_Material001_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Sphere005_Material001_0.geometry}
                  material={materials["Material.001"]}
                />
              </group>
            </group>
          </group>
        </group>
        <group
          name="shark_hat"
          position={[-0.063, 1.456, -0.08]}
          rotation={[-1.272, 0.066, -0.076]}
          scale={4.281}
        >
          <group name="same_capfbx" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
            <group name="RootNode002">
              <group name="same" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                <mesh
                  name="same_same_0"
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
        </group>
        <group
          name="oktopus_hat"
          position={[0.222, 2.506, 0.153]}
          rotation={[-1.41, 0.38, -0.132]}
          scale={0.136}
        >
          <group
            name="1d255a8705124ced831aa3e96f0f3c42fbx"
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.01}
          >
            <group name="RootNode003">
              <group name="Sphere" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                <group
                  name="Sphere001"
                  position={[0, -0.8, -0.5]}
                  rotation={[0.175, 0, 0]}
                  scale={[0.49, 1, 0.376]}
                >
                  <mesh
                    name="Sphere001_Material001_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Sphere001_Material001_0.geometry}
                    material={materials["Material.002"]}
                  />
                  <mesh
                    name="Sphere001_Material003_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Sphere001_Material003_0.geometry}
                    material={materials["Material.003"]}
                  />
                </group>
                <group
                  name="Sphere002"
                  position={[0.8, 0, -0.5]}
                  rotation={[0, 0.175, Math.PI / 2]}
                  scale={[0.49, 1, 0.376]}
                >
                  <mesh
                    name="Sphere002_Material001_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Sphere002_Material001_0.geometry}
                    material={materials["Material.002"]}
                  />
                  <mesh
                    name="Sphere002_Material003_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Sphere002_Material003_0.geometry}
                    material={materials["Material.003"]}
                  />
                </group>
                <group
                  name="Sphere003"
                  position={[0, 0.8, -0.5]}
                  rotation={[-0.175, 0, -Math.PI]}
                  scale={[0.49, 1, 0.376]}
                >
                  <mesh
                    name="Sphere003_Material001_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Sphere003_Material001_0.geometry}
                    material={materials["Material.002"]}
                  />
                  <mesh
                    name="Sphere003_Material003_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Sphere003_Material003_0.geometry}
                    material={materials["Material.003"]}
                  />
                </group>
                <group
                  name="Sphere004"
                  position={[-0.8, 0, -0.5]}
                  rotation={[0, -0.175, -Math.PI / 2]}
                  scale={[0.49, 1, 0.376]}
                >
                  <mesh
                    name="Sphere004_Material001_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Sphere004_Material001_0.geometry}
                    material={materials["Material.002"]}
                  />
                  <mesh
                    name="Sphere004_Material003_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Sphere004_Material003_0.geometry}
                    material={materials["Material.003"]}
                  />
                </group>
                <group
                  name="Sphere006"
                  position={[0.6, -0.6, -0.5]}
                  rotation={[0.124, 0.123, 0.778]}
                  scale={[0.49, 1, 0.376]}
                >
                  <mesh
                    name="Sphere005_Material001_0001"
                    castShadow
                    receiveShadow
                    geometry={nodes.Sphere005_Material001_0001.geometry}
                    material={materials["Material.002"]}
                  />
                  <mesh
                    name="Sphere005_Material003_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Sphere005_Material003_0.geometry}
                    material={materials["Material.003"]}
                  />
                </group>
                <group
                  name="Sphere007"
                  position={[0.6, 0.6, -0.5]}
                  rotation={[-0.124, 0.123, 2.364]}
                  scale={[0.49, 1, 0.376]}
                >
                  <mesh
                    name="Sphere006_Material001_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Sphere006_Material001_0.geometry}
                    material={materials["Material.002"]}
                  />
                  <mesh
                    name="Sphere006_Material003_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Sphere006_Material003_0.geometry}
                    material={materials["Material.003"]}
                  />
                </group>
                <group
                  name="Sphere008"
                  position={[-0.6, 0.6, -0.5]}
                  rotation={[-0.112, -0.134, -2.272]}
                  scale={[0.49, 1, 0.376]}
                >
                  <mesh
                    name="Sphere007_Material001_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Sphere007_Material001_0.geometry}
                    material={materials["Material.002"]}
                  />
                  <mesh
                    name="Sphere007_Material003_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Sphere007_Material003_0.geometry}
                    material={materials["Material.003"]}
                  />
                </group>
                <group
                  name="Sphere009"
                  position={[-0.6, -0.6, -0.5]}
                  rotation={[0.124, -0.123, -0.778]}
                  scale={[0.49, 1, 0.376]}
                >
                  <mesh
                    name="Sphere008_Material001_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Sphere008_Material001_0.geometry}
                    material={materials["Material.002"]}
                  />
                  <mesh
                    name="Sphere008_Material003_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Sphere008_Material003_0.geometry}
                    material={materials["Material.003"]}
                  />
                </group>
                <group
                  name="Sphere010"
                  position={[0.356, -0.819, 0.234]}
                  rotation={[1.456, 0, 0]}
                  scale={0.165}
                >
                  <mesh
                    name="Sphere009_Material002_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Sphere009_Material002_0.geometry}
                    material={materials["Material.005"]}
                  />
                </group>
                <mesh
                  name="Sphere_Material001_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.Sphere_Material001_0.geometry}
                  material={materials["Material.002"]}
                />
                <group
                  name="Torus001"
                  position={[0, -0.976, 0.13]}
                  rotation={[1.236, 0, 0]}
                  scale={0.081}
                >
                  <mesh
                    name="Torus_Material002_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Torus_Material002_0.geometry}
                    material={materials["Material.005"]}
                  />
                </group>
              </group>
            </group>
          </group>
        </group>
        <group
          name="Sketchfab_model"
          position={[-0.001, 2.539, -0.08]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={3.133}
        >
          <group name="Root">
            <group name="CowboyHat" />
          </group>
        </group>
        <group
          name="Sketchfab_model001"
          position={[-0.009, 2.275, 0.021]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={0.818}
        >
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="Circle001_3">
                <mesh
                  name="Object_6"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_6.geometry}
                  material={materials["Material.009"]}
                  position={[-0.008, -0.075, 0.041]}
                  scale={1.033}
                />
              </group>
              <group name="Circle_2">
                <mesh
                  name="Object_4001"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_4001.geometry}
                  material={materials["Material.008"]}
                  position={[-0.008, -0.075, 0.041]}
                  scale={1.033}
                />
              </group>
            </group>
          </group>
        </group>
        <group
          name="Torus"
          position={[1.037, 1.528, 1.106]}
          rotation={[2.784, 0.086, -1.551]}
          scale={-0.373}
        />
        <mesh
          name="piercing_nariz"
          castShadow
          receiveShadow
          geometry={nodes.piercing_nariz.geometry}
          material={materials.piercing}
          position={[-0.011, 1.76, 0.473]}
          rotation={[-2.863, 0.841, -2.097]}
          scale={0.01}
        />
        <mesh
          name="aro_der_1"
          castShadow
          receiveShadow
          geometry={nodes.aro_der_1.geometry}
          material={materials["piercing.001"]}
          position={[0.445, 1.647, -0.065]}
          rotation={[2.117, 0.003, 1.53]}
          scale={0.039}
        />
        <mesh
          name="aro_der_2"
          castShadow
          receiveShadow
          geometry={nodes.aro_der_2.geometry}
          material={materials["piercing.002"]}
          position={[0.495, 1.644, -0.064]}
          rotation={[2.124, 0.003, 1.53]}
          scale={0.039}
        />
        <mesh
          name="bolita_aro"
          castShadow
          receiveShadow
          geometry={nodes.bolita_aro.geometry}
          material={materials["piercing.002"]}
          position={[0.497, 1.614, 0.018]}
          rotation={[-3.012, -0.3, -0.922]}
          scale={0.02}
        />
        <mesh
          name="bolita_aro_2"
          castShadow
          receiveShadow
          geometry={nodes.bolita_aro_2.geometry}
          material={materials["piercing.003"]}
          position={[0.503, 1.626, -0.034]}
          rotation={[2.971, -0.162, -0.775]}
          scale={0.02}
        />
        <mesh
          name="aro_izq"
          castShadow
          receiveShadow
          geometry={nodes.aro_izq.geometry}
          material={materials["piercing.004"]}
          position={[-0.469, 1.636, -0.078]}
          rotation={[2.117, 0.003, 1.53]}
          scale={0.039}
        />
        <mesh
          name="chiva"
          castShadow
          receiveShadow
          geometry={nodes.chiva.geometry}
          material={materials["Material.004"]}
          position={[-0.117, 1.544, 0.377]}
          rotation={[-0.142, 0.018, 0.012]}
          scale={0.066}
        />
        <mesh
          name="bigote"
          castShadow
          receiveShadow
          geometry={nodes.bigote.geometry}
          material={materials["moustache.004"]}
          position={[-0.084, 1.703, 0.462]}
          scale={-0.024}
        />
        <mesh
          name="ojo_derecho"
          castShadow
          receiveShadow
          geometry={nodes.ojo_derecho.geometry}
          material={materials.eyes}
          position={[0.195, 1.799, 0.249]}
          rotation={[0, 0, -Math.PI]}
          scale={[-0.14, -0.14, -0.1]}
        />
        <mesh
          name="ojo_izquierdo"
          castShadow
          receiveShadow
          geometry={nodes.ojo_izquierdo.geometry}
          material={materials["eyes.001"]}
          position={[-0.216, 1.814, 0.277]}
          rotation={[0, 0, -Math.PI]}
          scale={[-0.137, -0.137, -0.097]}
        />
        <mesh
          name="iris_izquierdo"
          castShadow
          receiveShadow
          geometry={nodes.iris_izquierdo.geometry}
          material={materials["pulp.001"]}
          morphTargetDictionary={nodes.iris_izquierdo.morphTargetDictionary}
          morphTargetInfluences={nodes.iris_izquierdo.morphTargetInfluences}
          position={[-0.201, 1.819, 0.361]}
          rotation={[-Math.PI, 0, 3.107]}
          scale={[0.055, 0.085, 0.041]}
        />
        <mesh
          name="iris_derecho"
          castShadow
          receiveShadow
          geometry={nodes.iris_derecho.geometry}
          material={materials["pulp.003"]}
          position={[0.19, 1.817, 0.368]}
          rotation={[-Math.PI, 0.087, -Math.PI]}
          scale={[0.055, 0.085, 0.041]}
        />
        <mesh
          name="ceja_izquierda"
          castShadow
          receiveShadow
          geometry={nodes.ceja_izquierda.geometry}
          material={materials.eyebrown}
          position={[-0.23, 2.004, 0.385]}
          rotation={[1.014, -0.262, 1.895]}
          scale={[-0.02, -0.03, -0.021]}
        />
        <mesh
          name="ceja_derecha"
          castShadow
          receiveShadow
          geometry={nodes.ceja_derecha.geometry}
          material={materials.eyebrown}
          position={[0.204, 2, 0.399]}
          rotation={[1.977, -0.018, -1.786]}
          scale={[-0.02, -0.03, -0.021]}
        />
        <group name="Cube008_0002" position={[0, 1.041, 0]} scale={0.411}>
          <mesh
            name="Object_4002"
            castShadow
            receiveShadow
            geometry={nodes.Object_4002.geometry}
            material={materials["Material.006"]}
            position={[-0.021, 0.106, -0.023]}
          />
        </group>
        <group name="Cube008_0003" position={[0, 1.041, 0]} scale={0.411}>
          <mesh
            name="Object_4003"
            castShadow
            receiveShadow
            geometry={nodes.Object_4003.geometry}
            material={materials["Material.007"]}
            position={[-0.023, 0.116, 0.001]}
            scale={[1.025, 1, 1.07]}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/F-model.glb");
