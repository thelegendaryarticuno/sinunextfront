import { Canvas } from "@react-three/fiber";
import { useRef, useState } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import { OrbitControls, RoundedBox } from "@react-three/drei";
import * as THREE from "three";

const IDCard = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const [isFlipped, setIsFlipped] = useState(false);

  // Load textures for front and back
  const frontTexture = useLoader(TextureLoader, "/id-card-front.png");
  const backTexture = useLoader(TextureLoader, "/id-card-back.png");

  // Handle card rotation animation
  useFrame((state, delta) => {
    if (!meshRef.current) return;

    const targetRotation = isFlipped ? Math.PI : 0;
    meshRef.current.rotation.y +=
      (targetRotation - meshRef.current.rotation.y) * 0.1;
  });

  return (
    <mesh
      ref={meshRef}
      onClick={() => setIsFlipped(!isFlipped)}
      scale={[2.8, 4, 0.1]} // Adjusted to match ID card dimensions from idcard.tsx
    >
      <RoundedBox args={[1, 1, 0.1]} radius={0.05} smoothness={4}>
        <meshStandardMaterial
          attach="material"
          map={isFlipped ? backTexture : frontTexture}
          metalness={0.1}
          roughness={0.5}
          side={THREE.DoubleSide}
        />
      </RoundedBox>
    </mesh>
  );
};

const VirtualIDCard = () => {
  return (
    <div style={{ width: "100vw", height: "100vh", backgroundColor: "white" }}>
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <color attach="background" args={["white"]} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <IDCard />
        <OrbitControls enableZoom={true} minDistance={3} maxDistance={10} />
      </Canvas>
    </div>
  );
};

export default VirtualIDCard;
