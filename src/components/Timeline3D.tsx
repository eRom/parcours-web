"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Mesh, Vector3, CatmullRomCurve3 } from "three";
import Station from "./Station";
import { timelineSteps } from "@/data/timeline";

export default function Timeline3D() {
  const pathRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (pathRef.current) {
      // Subtle rotation for the timeline path
      pathRef.current.rotation.y = state.clock.elapsedTime * 0.1;
    }
  });

  return (
    <group>
      {/* Timeline Path */}
      <mesh ref={pathRef}>
        <tubeGeometry
          args={[
            new CatmullRomCurve3(
              timelineSteps.map(
                (step) =>
                  new Vector3(step.position.x, step.position.y, step.position.z)
              )
            ),
            100,
            0.1,
            8,
            false,
          ]}
        />
        <meshStandardMaterial
          color="#00f5ff"
          emissive="#00f5ff"
          emissiveIntensity={0.3}
          transparent
          opacity={0.8}
        />
      </mesh>

      {/* Stations */}
      {timelineSteps.map((step) => (
        <Station key={step.id} step={step} />
      ))}
    </group>
  );
}
