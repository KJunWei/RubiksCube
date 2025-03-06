import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

const CubePiece = ({ position }) => {
  return (
    <mesh position={position}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="white" />
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
        pieces.push(<CubePiece key={`${x}-${y}-${z}`} position={[x - offset, y - offset, z - offset]} />);
      }
    }
  }

  return <>{pieces}</>;
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
