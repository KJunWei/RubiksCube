import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

const COLORS = ["white", "yellow", "blue", "green", "red", "orange"];

const CubePiece = ({ position, quaternion }) => {
  return (
    <mesh position={position} quaternion={quaternion}>
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

const RubiksCube = ({ position, quaternion }) => {
  const cubeSize = 3;
  const offset = (cubeSize - 1) / 2;
  const pieces = [];
  for (let x = 0; x < position.length; x++) {
    pieces.push(
      <CubePiece
        key={`${position[x][0]}-${position[x][1]}-${position[x][2]}`}
        position={[position[x][0] - offset, position[x][1] - offset, position[x][2] - offset]}
        quaternion={quaternion[x]}
      />
    );
  }


  return <group>{pieces}</group>;
};

const App = () => {
  const [position, setPosition] = useState([[0, 0, 0], [0, 0, 1], [0, 0, 2], [0, 1, 0], [0, 1, 1], [0, 1, 2], [0, 2, 0], [0, 2, 1], [0, 2, 2], [1, 0, 0], [1, 0, 1], [1, 0, 2], [1, 1, 0], [1, 1, 1], [1, 1, 2], [1, 2, 0], [1, 2, 1], [1, 2, 2], [2, 0, 0], [2, 0, 1], [2, 0, 2], [2, 1, 0], [2, 1, 1], [2, 1, 2], [2, 2, 0], [2, 2, 1], [2, 2, 2]]);
  const [quaternion, setQuaternion] = useState(new Array(27).fill(new THREE.Quaternion()));

  const rotateTopFace = () => {
    const updatedPosition = [...position]; // Create a copy of the array
    const updatedQuaternion = [...quaternion];
    const rotate_quaternion = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), - Math.PI / 2); // Rotation around the Z-axis

    for (let i = 0; i < updatedPosition.length; i++) {
      if (updatedPosition[i][1] === 2) {
        if (updatedPosition[i][0] === 0 && updatedPosition[i][2] === 0) {
          updatedPosition[i][0] = 2;
          updatedPosition[i][2] = 0;
        } else if (updatedPosition[i][0] === 1 && updatedPosition[i][2] === 0) {
          updatedPosition[i][0] = 2;
          updatedPosition[i][2] = 1;
        } else if (updatedPosition[i][0] === 2 && updatedPosition[i][2] === 0) {
          updatedPosition[i][0] = 2;
          updatedPosition[i][2] = 2;
        } else if (updatedPosition[i][0] === 0 && updatedPosition[i][2] === 1) {
          updatedPosition[i][0] = 1;
          updatedPosition[i][2] = 0;
        } else if (updatedPosition[i][0] === 1 && updatedPosition[i][2] === 1) {
          updatedPosition[i][0] = 1;
          updatedPosition[i][2] = 1;
        } else if (updatedPosition[i][0] === 2 && updatedPosition[i][2] === 1) {
          updatedPosition[i][0] = 1;
          updatedPosition[i][2] = 2;
        } else if (updatedPosition[i][0] === 0 && updatedPosition[i][2] === 2) {
          updatedPosition[i][0] = 0;
          updatedPosition[i][2] = 0;
        } else if (updatedPosition[i][0] === 1 && updatedPosition[i][2] === 2) {
          updatedPosition[i][0] = 0;
          updatedPosition[i][2] = 1;
        } else if (updatedPosition[i][0] === 2 && updatedPosition[i][2] === 2) {
          updatedPosition[i][0] = 0;
          updatedPosition[i][2] = 2;
        }
        updatedQuaternion[i] = rotate_quaternion.clone().multiply(updatedQuaternion[i]);
      } 
    }
    setPosition(updatedPosition); // Update the state
    setQuaternion(updatedQuaternion); // Update the state
  };

  const rotateBottomFace = () => {
    const updatedPosition = [...position]; // Create a copy of the array
    const updatedQuaternion = [...quaternion];
    const rotate_quaternion = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), - Math.PI / 2); // Rotation around the Z-axis

    for (let i = 0; i < updatedPosition.length; i++) {
      if (updatedPosition[i][1] === 0) {
        if (updatedPosition[i][0] === 0 && updatedPosition[i][2] === 0) {
          updatedPosition[i][0] = 2;
          updatedPosition[i][2] = 0;
        } else if (updatedPosition[i][0] === 1 && updatedPosition[i][2] === 0) {
          updatedPosition[i][0] = 2;
          updatedPosition[i][2] = 1;
        } else if (updatedPosition[i][0] === 2 && updatedPosition[i][2] === 0) {
          updatedPosition[i][0] = 2;
          updatedPosition[i][2] = 2;
        } else if (updatedPosition[i][0] === 0 && updatedPosition[i][2] === 1) {
          updatedPosition[i][0] = 1;
          updatedPosition[i][2] = 0;
        } else if (updatedPosition[i][0] === 1 && updatedPosition[i][2] === 1) {
          updatedPosition[i][0] = 1;
          updatedPosition[i][2] = 1;
        } else if (updatedPosition[i][0] === 2 && updatedPosition[i][2] === 1) {
          updatedPosition[i][0] = 1;
          updatedPosition[i][2] = 2;
        } else if (updatedPosition[i][0] === 0 && updatedPosition[i][2] === 2) {
          updatedPosition[i][0] = 0;
          updatedPosition[i][2] = 0;
        } else if (updatedPosition[i][0] === 1 && updatedPosition[i][2] === 2) {
          updatedPosition[i][0] = 0;
          updatedPosition[i][2] = 1;
        } else if (updatedPosition[i][0] === 2 && updatedPosition[i][2] === 2) {
          updatedPosition[i][0] = 0;
          updatedPosition[i][2] = 2;
        }
        updatedQuaternion[i] = rotate_quaternion.clone().multiply(updatedQuaternion[i]);
      } 
    }
    setPosition(updatedPosition); // Update the state
    setQuaternion(updatedQuaternion); // Update the state
  };

  const rotateRightFace = () => {
    const updatedPosition = [...position]; // Create a copy of the array
    const updatedQuaternion = [...quaternion];
    const rotate_quaternion = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(1, 0, 0), Math.PI / 2); // Rotation around the Z-axis

    for (let i = 0; i < updatedPosition.length; i++) {
      if (updatedPosition[i][0] === 2) {
        if (updatedPosition[i][1] === 0 && updatedPosition[i][2] === 0) {
          updatedPosition[i][1] = 2;
          updatedPosition[i][2] = 0;
        } else if (updatedPosition[i][1] === 1 && updatedPosition[i][2] === 0) {
          updatedPosition[i][1] = 2;
          updatedPosition[i][2] = 1;
        } else if (updatedPosition[i][1] === 2 && updatedPosition[i][2] === 0) {
          updatedPosition[i][1] = 2;
          updatedPosition[i][2] = 2;
        } else if (updatedPosition[i][1] === 0 && updatedPosition[i][2] === 1) {
          updatedPosition[i][1] = 1;
          updatedPosition[i][2] = 0;
        } else if (updatedPosition[i][1] === 1 && updatedPosition[i][2] === 1) {
          updatedPosition[i][1] = 1;
          updatedPosition[i][2] = 1;
        } else if (updatedPosition[i][1] === 2 && updatedPosition[i][2] === 1) {
          updatedPosition[i][1] = 1;
          updatedPosition[i][2] = 2;
        } else if (updatedPosition[i][1] === 0 && updatedPosition[i][2] === 2) {
          updatedPosition[i][1] = 0;
          updatedPosition[i][2] = 0;
        } else if (updatedPosition[i][1] === 1 && updatedPosition[i][2] === 2) {
          updatedPosition[i][1] = 0;
          updatedPosition[i][2] = 1;
        } else if (updatedPosition[i][1] === 2 && updatedPosition[i][2] === 2) {
          updatedPosition[i][1] = 0;
          updatedPosition[i][2] = 2;
        }
        updatedQuaternion[i] = rotate_quaternion.clone().multiply(updatedQuaternion[i]);
      } 
    }
    setPosition(updatedPosition); // Update the state
    setQuaternion(updatedQuaternion); // Update the state
  };

  const rotateLeftFace = () => {
    const updatedPosition = [...position]; // Create a copy of the array
    const updatedQuaternion = [...quaternion];
    const rotate_quaternion = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(1, 0, 0), - Math.PI / 2); // Rotation around the Z-axis

    for (let i = 0; i < updatedPosition.length; i++) {
      if (updatedPosition[i][0] === 0) {
        if (updatedPosition[i][1] === 0 && updatedPosition[i][2] === 0) {
          updatedPosition[i][1] = 0;
          updatedPosition[i][2] = 2;
        } else if (updatedPosition[i][1] === 1 && updatedPosition[i][2] === 0) {
          updatedPosition[i][1] = 0;
          updatedPosition[i][2] = 1;
        } else if (updatedPosition[i][1] === 2 && updatedPosition[i][2] === 0) {
          updatedPosition[i][1] = 0;
          updatedPosition[i][2] = 0;
        } else if (updatedPosition[i][1] === 0 && updatedPosition[i][2] === 1) {
          updatedPosition[i][1] = 1;
          updatedPosition[i][2] = 2;
        } else if (updatedPosition[i][1] === 1 && updatedPosition[i][2] === 1) {
          updatedPosition[i][1] = 1;
          updatedPosition[i][2] = 1;
        } else if (updatedPosition[i][1] === 2 && updatedPosition[i][2] === 1) {
          updatedPosition[i][1] = 1;
          updatedPosition[i][2] = 0;
        } else if (updatedPosition[i][1] === 0 && updatedPosition[i][2] === 2) {
          updatedPosition[i][1] = 2;
          updatedPosition[i][2] = 2;
        } else if (updatedPosition[i][1] === 1 && updatedPosition[i][2] === 2) {
          updatedPosition[i][1] = 2;
          updatedPosition[i][2] = 1;
        } else if (updatedPosition[i][1] === 2 && updatedPosition[i][2] === 2) {
          updatedPosition[i][1] = 2;
          updatedPosition[i][2] = 0;
        }
        updatedQuaternion[i] = rotate_quaternion.clone().multiply(updatedQuaternion[i]);
      } 
    }
    setPosition(updatedPosition); // Update the state
    setQuaternion(updatedQuaternion); // Update the state
  };

  const rotateBackFace = () => {
    const updatedPosition = [...position]; // Create a copy of the array
    const updatedQuaternion = [...quaternion];
    const rotate_quaternion = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 0, 1), - Math.PI / 2); // Rotation around the Z-axis

    for (let i = 0; i < updatedPosition.length; i++) {
      if (updatedPosition[i][2] === 0) {
        if (updatedPosition[i][0] === 0 && updatedPosition[i][1] === 0) {
          updatedPosition[i][0] = 0;
          updatedPosition[i][1] = 2;
        } else if (updatedPosition[i][0] === 1 && updatedPosition[i][1] === 0) {
          updatedPosition[i][0] = 0;
          updatedPosition[i][1] = 1;
        } else if (updatedPosition[i][0] === 2 && updatedPosition[i][1] === 0) {
          updatedPosition[i][0] = 0;
          updatedPosition[i][1] = 0;
        } else if (updatedPosition[i][0] === 0 && updatedPosition[i][1] === 1) {
          updatedPosition[i][0] = 1;
          updatedPosition[i][1] = 2;
        } else if (updatedPosition[i][0] === 1 && updatedPosition[i][1] === 1) {
          updatedPosition[i][0] = 1;
          updatedPosition[i][1] = 1;
        } else if (updatedPosition[i][0] === 2 && updatedPosition[i][1] === 1) {
          updatedPosition[i][0] = 1;
          updatedPosition[i][1] = 0;
        } else if (updatedPosition[i][0] === 0 && updatedPosition[i][1] === 2) {
          updatedPosition[i][0] = 2;
          updatedPosition[i][1] = 2;
        } else if (updatedPosition[i][0] === 1 && updatedPosition[i][1] === 2) {
          updatedPosition[i][0] = 2;
          updatedPosition[i][1] = 1;
        } else if (updatedPosition[i][0] === 2 && updatedPosition[i][1] === 2) {
          updatedPosition[i][0] = 2;
          updatedPosition[i][1] = 0;
        }
        updatedQuaternion[i] = rotate_quaternion.clone().multiply(updatedQuaternion[i]);
      } 
    }
    setPosition(updatedPosition); // Update the state
    setQuaternion(updatedQuaternion); // Update the state
  };

  const rotateFrontFace = () => {
    const updatedPosition = [...position]; // Create a copy of the array
    const updatedQuaternion = [...quaternion];
    const rotate_quaternion = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 0, 1), - Math.PI / 2); // Rotation around the Z-axis

    for (let i = 0; i < updatedPosition.length; i++) {
      if (updatedPosition[i][2] === 2) {
        if (updatedPosition[i][0] === 0 && updatedPosition[i][1] === 0) {
          updatedPosition[i][0] = 0;
          updatedPosition[i][1] = 2;
        } else if (updatedPosition[i][0] === 1 && updatedPosition[i][1] === 0) {
          updatedPosition[i][0] = 0;
          updatedPosition[i][1] = 1;
        } else if (updatedPosition[i][0] === 2 && updatedPosition[i][1] === 0) {
          updatedPosition[i][0] = 0;
          updatedPosition[i][1] = 0;
        } else if (updatedPosition[i][0] === 0 && updatedPosition[i][1] === 1) {
          updatedPosition[i][0] = 1;
          updatedPosition[i][1] = 2;
        } else if (updatedPosition[i][0] === 1 && updatedPosition[i][1] === 1) {
          updatedPosition[i][0] = 1;
          updatedPosition[i][1] = 1;
        } else if (updatedPosition[i][0] === 2 && updatedPosition[i][1] === 1) {
          updatedPosition[i][0] = 1;
          updatedPosition[i][1] = 0;
        } else if (updatedPosition[i][0] === 0 && updatedPosition[i][1] === 2) {
          updatedPosition[i][0] = 2;
          updatedPosition[i][1] = 2;
        } else if (updatedPosition[i][0] === 1 && updatedPosition[i][1] === 2) {
          updatedPosition[i][0] = 2;
          updatedPosition[i][1] = 1;
        } else if (updatedPosition[i][0] === 2 && updatedPosition[i][1] === 2) {
          updatedPosition[i][0] = 2;
          updatedPosition[i][1] = 0;
        }
        updatedQuaternion[i] = rotate_quaternion.clone().multiply(updatedQuaternion[i]);
      } 
    }
    setPosition(updatedPosition); // Update the state
    setQuaternion(updatedQuaternion); // Update the state
  };

  return (
    <div>
      <Canvas camera={{ position: [5, 5, 5] }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <RubiksCube position={position} quaternion={quaternion}/>
        <OrbitControls />
      </Canvas>

      <button
        onClick={rotateTopFace}
        style={{ position: "absolute", top: "20px", left: "320px", padding: "10px" }}
      >
        Rotate Top Face
      </button>
      <button
        onClick={rotateBottomFace}
        style={{ position: "absolute", top: "60px", left: "320px", padding: "10px" }}
      >
        Rotate Bottom Face
      </button>
      <button
        onClick={rotateRightFace}
        style={{ position: "absolute", top: "100px", left: "320px", padding: "10px" }}
      >
        Rotate Right Face
      </button>
      <button
        onClick={rotateLeftFace}
        style={{ position: "absolute", top: "140px", left: "320px", padding: "10px" }}
      >
        Rotate Left Face
      </button>
      <button
        onClick={rotateBackFace}
        style={{ position: "absolute", top: "180px", left: "320px", padding: "10px" }}
      >
        Rotate Back Face
      </button>
      <button
        onClick={rotateFrontFace}
        style={{ position: "absolute", top: "220px", left: "320px", padding: "10px" }}
      >
        Rotate Front Face
      </button>
    </div>
  );
};

export default App;
