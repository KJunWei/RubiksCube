import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

const COLORS = ["white", "yellow", "blue", "green", "red", "orange"];

const CubePiece = ({ position }) => {
  return (
    <mesh position={position}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial attach="material-0" color="red" />
      <meshStandardMaterial attach="material-1" color="orange" />
      <meshStandardMaterial attach="material-2" color="white" />
      <meshStandardMaterial attach="material-3" color="yellow" />
      <meshStandardMaterial attach="material-4" color="blue" />
      <meshStandardMaterial attach="material-5" color="green" />
    </mesh>
  );
};

const RubiksCube = () => {
  const cubeSize = 3;
  const offset = (cubeSize - 1) / 2;
  const pieces = [];

  for (let x = 0; x < cubeSize; x++) {
    for (let y = 0; y < cubeSize; y++) {
      for (let z = 0; z < cubeSize; z++) {
        pieces.push(
          <CubePiece
            key={`${x}-${y}-${z}`}
            position={[x - offset, y - offset, z - offset]}
          />
        );
      }
    }
  }

  return <group>{pieces}</group>;
};

const App = () => {
  return (
    <Canvas camera={{ position: [5, 5, 5] }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <RubiksCube />
      <OrbitControls />
    </Canvas>
  );
};

export default App;
