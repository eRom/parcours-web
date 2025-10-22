"use client";

import { useState, useEffect } from "react";
import { TimelineStep } from "@/data/timeline";
import { phaseLabels } from "@/data/timeline";

interface StationDetailsProps {
  step: TimelineStep | null;
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (direction: "prev" | "next") => void;
  currentIndex: number;
  totalSteps: number;
}

export default function StationDetails({
  step,
  isOpen,
  onClose,
  onNavigate,
  currentIndex,
  totalSteps,
}: StationDetailsProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
    } else {
      const timer = setTimeout(() => setIsVisible(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!step || !isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-50 transition-all duration-300 ${
        isOpen ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Content Panel */}
      <div
        className={`absolute top-0 right-0 h-full w-full max-w-md transform border-l border-cyan-500/30 bg-linear-to-b from-black/90 to-gray-900/90 backdrop-blur-lg transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="border-b border-cyan-500/30 p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div
                className="h-4 w-4 rounded-full"
                style={{ backgroundColor: step.color }}
              />
              <span className="text-sm text-gray-400">
                Étape {step.id} / {totalSteps}
              </span>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 transition-colors hover:text-white"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-6 p-6">
          {/* Date */}
          <div>
            <h3 className="mb-2 text-xs tracking-wider text-gray-400 uppercase">
              Date
            </h3>
            <p className="text-lg font-medium text-white">{step.date}</p>
          </div>

          {/* Title */}
          <div>
            <h3 className="mb-2 text-xs tracking-wider text-gray-400 uppercase">
              Événement
            </h3>
            <h2 className="text-2xl font-bold text-white">{step.title}</h2>
          </div>

          {/* Phase */}
          <div>
            <h3 className="mb-2 text-xs tracking-wider text-gray-400 uppercase">
              Phase
            </h3>
            <div className="flex items-center space-x-2">
              <div
                className="h-3 w-3 rounded-full"
                style={{ backgroundColor: step.color }}
              />
              <span className="font-medium text-white">
                {phaseLabels[step.phase]}
              </span>
            </div>
          </div>

          {/* Establishment */}
          <div>
            <h3 className="mb-2 text-xs tracking-wider text-gray-400 uppercase">
              Établissement
            </h3>
            <p className="text-white">{step.establishment}</p>
          </div>

          {/* Description */}
          <div>
            <h3 className="mb-2 text-xs tracking-wider text-gray-400 uppercase">
              Description
            </h3>
            <p className="leading-relaxed text-gray-300">{step.description}</p>
          </div>

          {/* Media Placeholder */}
          <div className="rounded-lg border border-gray-700/50 bg-gray-800/50 p-4">
            <div className="text-center text-gray-400">
              <svg
                className="mx-auto mb-2 h-8 w-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <p className="text-sm">Média à venir</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="absolute right-0 bottom-0 left-0 border-t border-cyan-500/30 p-6">
          <div className="flex justify-between">
            <button
              onClick={() => onNavigate("prev")}
              disabled={currentIndex === 0}
              className="flex items-center space-x-2 rounded-lg bg-gray-800/50 px-4 py-2 transition-colors hover:bg-gray-700/50 disabled:cursor-not-allowed disabled:opacity-50"
            >
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              <span className="text-white">Précédent</span>
            </button>

            <button
              onClick={() => onNavigate("next")}
              disabled={currentIndex === totalSteps - 1}
              className="flex items-center space-x-2 rounded-lg bg-gray-800/50 px-4 py-2 transition-colors hover:bg-gray-700/50 disabled:cursor-not-allowed disabled:opacity-50"
            >
              <span className="text-white">Suivant</span>
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
