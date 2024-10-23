import { useLoader } from "@react-three/fiber";
import React, { useEffect, useMemo } from "react";
import * as THREE from "three";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { Water } from "three/examples/jsm/objects/Water.js";

const Nature: React.FC = () => {
  const [
    birch3,
    birch4,
    berry1,
    ctree3,
    ctree5,
    grass2,
    grass,
    rock1,
    rock5,
    willow2,
    willow5,
    log,
    riverRock,
    waterfall
  ] = useLoader(FBXLoader, [
    "./textures/nature/BirchTree_3.fbx",
    "./textures/nature/BirchTree_4.fbx",
    "./textures/nature/BushBerries_1.fbx",
    "./textures/nature/CommonTree_3.fbx",
    "./textures/nature/CommonTree_5.fbx",
    "./textures/nature/Grass_2.fbx",
    "./textures/nature/Grass.fbx",
    "./textures/nature/Rock_1.fbx",
    "./textures/nature/Rock_5.fbx",
    "./textures/nature/Willow_2.fbx",
    "./textures/nature/Willow_5.fbx",
    "./textures/nature/WoodLog_Moss.fbx",
    "./textures/nature/river_rock.fbx",
    "./textures/nature/waterfall.fbx",
  ]);
  const tree = useLoader(GLTFLoader, './textures/nature/tree.glb')
  const sea = useLoader(GLTFLoader, "./textures/nature/sea.glb");
  const waterfall2 = useLoader(GLTFLoader, "./textures/nature/waterfall_diorama.glb");

  tree.scene.scale.setScalar(1.5);
  tree.scene.traverse((o: any) => {
    o.castShadow = true;
    o.receiveShadow = true;
  });
  tree.scene.scale.setScalar(1.5);
  tree.scene.traverse((o: any) => {
    o.castShadow = true;
    o.receiveShadow = true;
  });
  tree.scene.scale.setScalar(1.5);
  tree.scene.traverse((o: any) => {
    o.castShadow = true;
    o.receiveShadow = true;
  });
  grass2.scale.setScalar(0.05);
  grass2.traverse((o: any) => {
    o.castShadow = true;
    o.receiveShadow = true;
  });
  grass.scale.setScalar(0.05);
  grass.traverse((o: any) => {
    o.castShadow = true;
    o.receiveShadow = true;
  });
  rock1.scale.setScalar(0.2);
  rock1.traverse((o: any) => {
    o.castShadow = true;
    o.receiveShadow = true;
  });
  rock5.scale.setScalar(0.2);
  rock5.traverse((o: any) => {
    o.castShadow = true;
    o.receiveShadow = true;
  });
  tree.scene.scale.setScalar(1.5);
  tree.scene.traverse((o: any) => {
    o.castShadow = true;
    o.receiveShadow = true;
  });
  tree.scene.scale.setScalar(1.5);
  tree.scene.traverse((o: any) => {
    o.castShadow = true;
    o.receiveShadow = true;
  });
  log.scale.setScalar(0.1);
  log.traverse((o: any) => {
    o.castShadow = true;
    o.receiveShadow = true;
  });
  tree.scene.scale.setScalar(1.5);
  tree.scene.traverse((o: any) => {
    o.castShadow = true;
    o.receiveShadow = true;
  });
  tree.scene.scale.setScalar(1.5);
  tree.scene.traverse((o: any) => {
    o.castShadow = true;
    o.receiveShadow = true;
  });

  const objects: JSX.Element[] = [];

  const createTrees = useMemo(() => {
    for (let i = 0; i < 130; i++) {
      const idx: number = Math.floor(Math.random() * 1) + 1;
      const pos = new THREE.Vector3(
        Math.ceil(Math.random() * 650) * (Math.round(Math.random()) ? 1 : -1),
        0,
        Math.ceil(Math.random() * 650) * (Math.round(Math.random()) ? 1 : -1)
      );

      const obj = (
        <primitive
          key={i}
          position={pos}
          object={
            idx === 1
              ? tree.scene.clone()
              : idx === 2
              ? tree.scene.clone()
              : idx === 3
              ? tree.scene.clone()
              : idx === 4
              ? tree.scene.clone()
              : idx === 5
              ? tree.scene.clone()
              : idx === 6
              ? grass2.clone()
              : idx === 7
              ? grass.clone()
              : idx === 8
              ? rock1.clone()
              : idx === 9
              ? rock5.clone()
              : idx === 10
              ? tree.scene.clone()
              : idx === 11
              ? tree.scene.clone()
              : log.clone()
          }
        />
      );

      objects.push(obj);
    }
  }, []);

  return (
    <>
      <group>
        {objects.map((obj: JSX.Element) => {
          return obj;
        })}
      </group>
      {/* <group>
        <primitive scale={2} position={[0, 3, 0]} object={sea.scene} />
        <primitive object={rock5} scale={0.2} position={[25, 0, 0]} />
        <primitive object={rock5.clone()} scale={0.2} position={[25, 0, 20]} />
      </group> */}
      <group position={[-10, 0, 200]} rotation-y={-Math.PI / 0.95}>
        <primitive
          object={waterfall2.scene}
          scale={0.5}
          position={[0, -60, 0]}
        />
        <group position={[10, 0, -7]}>
          <primitive object={sea.scene} scale={1.5} position={[8, 2, 60]} />
          <primitive object={sea.scene} scale={1.5} position={[0, 2, 60]} />
          <primitive object={rock1.clone()} position={[8, 2, 85]} />
          <primitive
            object={rock5.clone()}
            position={[0, 0, 85]}
            rotation-y={Math.PI / 3}
          />
          <primitive
            object={rock5.clone()}
            position={[-12, 0, 85]}
            scale={0.25}
            rotation-y={-Math.PI / 60}
          />
          <primitive
            object={rock1.clone()}
            rotation-y={Math.PI / 4}
            position={[-22, 0, 85]}
            scale={0.25}
          />
          <primitive
            object={rock5.clone()}
            rotation-y={Math.PI / 4}
            position={[-23, 0, 75]}
            scale={0.25}
          />
          <primitive
            object={rock5.clone()}
            rotation-y={Math.PI / 2}
            position={[-22, 0, 60]}
            scale={0.2}
          />
          <primitive
            object={rock1.clone()}
            rotation-y={Math.PI / 2}
            position={[-22, 0, 50]}
            scale={0.40}
          />
          <primitive object={rock5.clone()} position={[18, 0, 85]} />
          <primitive
            object={rock5.clone()}
            position={[24, 0, 78]}
            rotation-x={Math.PI / 3}
          />

          <primitive object={rock1.clone()} position={[20, 0, 75]} />
          <primitive
            object={rock1.clone()}
            position={[20, 0, 68]}
            rotation-y={Math.PI / 3}
          />
          <primitive
            object={rock5.clone()}
            position={[20, 0, 55]}
            rotation-x={Math.PI / 2}
          />
          <primitive
            object={rock1.clone()}
            position={[22, 0, 52]}
            rotation-y={Math.PI / 3}
          />
          <primitive
            object={rock1.clone()}
            position={[20, 0, 40]}
            rotation-x={Math.PI / 2}
          />
        </group>
      </group>
    </>
  );
};

export default Nature;
