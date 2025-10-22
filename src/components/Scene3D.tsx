"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, Stars } from "@react-three/drei";
import { Suspense } from "react";
import Timeline3D from "./Timeline3D";
import CameraController from "./CameraController";

export default function Scene3D() {
  return (
    <div className="h-screen w-full bg-black">
      <Canvas
        camera={{
          position: [0, 5, 15],
          fov: 60,
          near: 0.1,
          far: 1000,
        }}
        gl={{
          antialias: true,
          alpha: false,
          powerPreference: "high-performance",
        }}
      >
        <Suspense fallback={null}>
          {/* Lighting */}
          <ambientLight intensity={0.2} />
          <directionalLight
            position={[10, 10, 5]}
            intensity={1}
            castShadow
            shadow-mapSize-width={2048}
            shadow-mapSize-height={2048}
          />
          <pointLight position={[0, 10, 0]} intensity={0.5} color="#00f5ff" />
          <pointLight position={[10, 0, 10]} intensity={0.3} color="#ff00ff" />
          <pointLight
            position={[-10, 0, -10]}
            intensity={0.3}
            color="#ffff00"
          />

          {/* Environment */}
          <Environment preset="night" />

          {/* Stars */}
          <Stars
            radius={100}
            depth={50}
            count={5000}
            factor={4}
            saturation={0}
            fade
            speed={1}
          />

          {/* Fog for atmosphere */}
          <fog attach="fog" args={["#000000", 20, 100]} />

          {/* 3D Scene */}
          <Timeline3D />

          {/* Camera Controls */}
          <CameraController />

          {/* Orbit Controls */}
          <OrbitControls
            enablePan={true}
            enableZoom={true}
            enableRotate={true}
            minDistance={5}
            maxDistance={50}
            minPolarAngle={Math.PI / 6}
            maxPolarAngle={Math.PI - Math.PI / 6}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
