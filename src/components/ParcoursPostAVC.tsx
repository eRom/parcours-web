"use client";

import { useState, useCallback } from "react";
import Scene3D from "@/components/Scene3D";
import StationDetails from "@/components/StationDetails";
import { timelineSteps, TimelineStep } from "@/data/timeline";

export default function ParcoursPostAVC() {
  const [selectedStation, setSelectedStation] = useState<TimelineStep | null>(
    null
  );
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [currentStationIndex, setCurrentStationIndex] = useState(0);

  const handleStationClick = useCallback((step: TimelineStep) => {
    setSelectedStation(step);
    setIsDetailsOpen(true);
    setCurrentStationIndex(step.id - 1);
  }, []);

  const handleCloseDetails = useCallback(() => {
    setIsDetailsOpen(false);
  }, []);

  const handleNavigate = useCallback(
    (direction: "prev" | "next") => {
      const newIndex =
        direction === "prev"
          ? Math.max(0, currentStationIndex - 1)
          : Math.min(timelineSteps.length - 1, currentStationIndex + 1);

      setCurrentStationIndex(newIndex);
      setSelectedStation(timelineSteps[newIndex]);
    },
    [currentStationIndex]
  );

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Main 3D Scene */}
      <Scene3D />

      {/* Station Details Overlay */}
      <StationDetails
        step={selectedStation}
        isOpen={isDetailsOpen}
        onClose={handleCloseDetails}
        onNavigate={handleNavigate}
        currentIndex={currentStationIndex}
        totalSteps={timelineSteps.length}
      />

      {/* UI Overlay */}
      <div className="absolute top-0 right-0 left-0 z-10 p-6">
        <div className="flex items-start justify-between">
          {/* Title */}
          <div>
            <h1 className="mb-2 text-3xl font-bold text-white">
              Parcours Post-AVC
            </h1>
            <p className="text-lg text-gray-300">
              Mon parcours de récupération en immersion 3D
            </p>
          </div>

          {/* Instructions */}
          <div className="max-w-xs text-right text-sm text-gray-400">
            <p className="mb-2">
              Cliquez sur une station pour voir les détails
            </p>
            <p>Utilisez la souris pour naviguer dans l'espace 3D</p>
          </div>
        </div>
      </div>

      {/* Timeline Navigation */}
      <div className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 transform">
        <div className="flex space-x-2 rounded-full border border-cyan-500/30 bg-black/50 px-4 py-2 backdrop-blur-sm">
          {timelineSteps.map((step, index) => (
            <button
              key={step.id}
              onClick={() => handleStationClick(step)}
              className={`h-3 w-3 rounded-full transition-all duration-200 ${
                index === currentStationIndex ? "scale-125" : "hover:scale-110"
              }`}
              style={{ backgroundColor: step.color }}
              title={step.title}
            />
          ))}
        </div>
      </div>

      {/* Phase Legend */}
      <div className="absolute right-6 bottom-6 z-10">
        <div className="rounded-lg border border-cyan-500/30 bg-black/50 px-4 py-3 backdrop-blur-sm">
          <h3 className="mb-2 text-sm font-medium text-white">Phases</h3>
          <div className="space-y-1 text-xs">
            <div className="flex items-center space-x-2">
              <div className="bg-magenta-500 h-2 w-2 rounded-full" />
              <span className="text-gray-300">Soins Intensifs</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="h-2 w-2 rounded-full bg-cyan-500" />
              <span className="text-gray-300">Rééducation Intensive</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="h-2 w-2 rounded-full bg-yellow-500" />
              <span className="text-gray-300">Hôpital de Jour</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
