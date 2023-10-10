"use client";

import { Canvas } from "@react-three/fiber";

export default function page() {
  return (
    <div>
      <Canvas>
        <pointLight position={[10, 10, 10]} />
        <mesh>
          <sphereGeometry />
          <meshStandardMaterial color="hotpink" />
        </mesh>
        <mesh
          visible
          userData={{ hello: "world" }}
          position={[1, 2, 3]}
          rotation={[Math.PI / 2, 0, 0]}
        >
          <sphereGeometry args={[1, 16, 16]} />
          <meshStandardMaterial color="hotpink" transparent />
        </mesh>
      </Canvas>
    </div>
  );
}
