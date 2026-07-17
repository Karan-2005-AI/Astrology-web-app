import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useRef } from "react";

function Planet({ color, size, position, speed }) {
  const mesh = useRef();

  useFrame(() => {
    if (mesh.current) {
      mesh.current.rotation.y += 0.01;

      const t = Date.now() * 0.001 * speed;

      mesh.current.position.x =
        Math.cos(t) * position;

      mesh.current.position.z =
        Math.sin(t) * position;
    }
  });

  return (
    <mesh ref={mesh}>
      <sphereGeometry args={[size, 32, 32]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
}

function Sun() {
  return (
    <mesh>
      <sphereGeometry args={[1.2, 64, 64]} />
      <meshStandardMaterial
        emissive="#ffcc33"
        emissiveIntensity={2}
        color="#ffaa00"
      />
    </mesh>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={1.5} />

      <pointLight position={[0, 0, 0]} intensity={80} />

      <Sun />

      <Planet
        color="#4fc3f7"
        size={0.25}
        position={3}
        speed={0.6}
      />

      <Planet
        color="#8bc34a"
        size={0.35}
        position={5}
        speed={0.35}
      />

      <Planet
        color="#ff7043"
        size={0.45}
        position={7}
        speed={0.2}
      />

      <OrbitControls
        enableZoom={false}
        autoRotate
        autoRotateSpeed={0.3}
      />
    </>
  );
}

export default function PlanetSystem() {
  return (
    <div className="w-full h-[500px]">
      <Canvas camera={{ position: [0, 6, 12] }}>
        <Scene />
      </Canvas>
    </div>
  );
}