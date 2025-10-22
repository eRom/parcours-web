"use client";

import { useRef, useState } from "react";
import { useFrame, ThreeElements } from "@react-three/fiber";
import { Mesh, Vector3 } from "three";
import { Text } from "@react-three/drei";
import { TimelineStep } from "@/data/timeline";

interface StationProps {
  step: TimelineStep;
  onClick?: (step: TimelineStep) => void;
}

export default function Station({ step, onClick }: StationProps) {
  const meshRef = useRef<Mesh>(null);
  const [hovered, setHovered] = useState(false);
  const [active, setActive] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      // Floating animation
      meshRef.current.position.y =
        step.position.y + Math.sin(state.clock.elapsedTime + step.id) * 0.2;

      // Scale animation on hover
      const targetScale = hovered ? 1.2 : 1;
      meshRef.current.scale.lerp(
        new Vector3(targetScale, targetScale, targetScale),
        0.1
      );

      // Rotation
      meshRef.current.rotation.y += 0.01;
    }
  });

  const handleClick = () => {
    setActive(!active);
    onClick?.(step);
  };

  return (
    <group position={[step.position.x, step.position.y, step.position.z]}>
      {/* Main Station Sphere */}
      <mesh
        ref={meshRef}
        onClick={handleClick}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        castShadow
        receiveShadow
      >
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial
          color={step.color}
          emissive={step.color}
          emissiveIntensity={hovered ? 0.5 : 0.2}
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>

      {/* Station Label */}
      <Text
        position={[0, 1.5, 0]}
        fontSize={0.3}
        color={step.color}
        anchorX="center"
        anchorY="middle"
        maxWidth={3}
        textAlign="center"
      >
        {step.title}
      </Text>

      {/* Date Label */}
      <Text
        position={[0, 1.2, 0]}
        fontSize={0.2}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
        maxWidth={4}
        textAlign="center"
      >
        {step.date}
      </Text>

      {/* Phase Indicator */}
      <mesh position={[0, -0.8, 0]}>
        <cylinderGeometry args={[0.1, 0.1, 0.3, 8]} />
        <meshStandardMaterial
          color={step.color}
          emissive={step.color}
          emissiveIntensity={0.3}
        />
      </mesh>
    </group>
  );
}
