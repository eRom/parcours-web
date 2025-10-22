"use client";

import { useRef, useEffect } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { CameraControls } from "@react-three/drei";
import { Vector3 } from "three";

interface CameraControllerProps {
  targetStation?: number;
  onStationReached?: (stationIndex: number) => void;
}

export default function CameraController({
  targetStation,
  onStationReached,
}: CameraControllerProps) {
  const controlsRef = useRef<CameraControls>(null);
  const { camera } = useThree();

  useEffect(() => {
    if (targetStation !== undefined && controlsRef.current) {
      const stationPositions = [
        [-8, 2, 5],
        [-6, 2, 5],
        [-4, 2, 5],
        [-2, 2, 5],
        [0, 2, 5],
        [2, 2, 5],
        [4, 2, 5],
        [6, 2, 5],
        [8, 2, 5],
        [10, 2, 5],
      ];

      const targetPosition = stationPositions[targetStation];
      if (targetPosition) {
        controlsRef.current.setLookAt(
          targetPosition[0] + 3,
          targetPosition[1] + 2,
          targetPosition[2] + 3,
          targetPosition[0],
          targetPosition[1],
          targetPosition[2],
          true
        );

        // Callback when animation completes
        setTimeout(() => {
          onStationReached?.(targetStation);
        }, 2000);
      }
    }
  }, [targetStation, onStationReached]);

  useFrame((state, delta) => {
    // Smooth camera movement
    if (controlsRef.current) {
      controlsRef.current.update(delta);
    }
  });

  return <CameraControls ref={controlsRef} camera={camera} makeDefault />;
}
