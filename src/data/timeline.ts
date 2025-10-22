export interface TimelineStep {
  id: number;
  date: string;
  title: string;
  description: string;
  phase: "soins-intensifs" | "reeducation-intensive" | "hopital-jour";
  establishment: string;
  position: { x: number; y: number; z: number };
  color: string;
}

export const timelineSteps: TimelineStep[] = [
  {
    id: 1,
    date: "15 janvier 2025, 18h",
    title: "AVC à domicile",
    description:
      "Événement déclencheur - AVC survenu à domicile nécessitant une intervention d'urgence.",
    phase: "soins-intensifs",
    establishment: "Domicile",
    position: { x: -8, y: 0, z: 0 },
    color: "#ff00ff", // Magenta
  },
  {
    id: 2,
    date: "Janvier 2025",
    title: "1ère opération",
    description:
      "Première intervention chirurgicale d'urgence pour traiter les conséquences de l'AVC.",
    phase: "soins-intensifs",
    establishment: "CHU Laennec",
    position: { x: -6, y: 0, z: 0 },
    color: "#00f5ff", // Cyan
  },
  {
    id: 3,
    date: "Janvier 2025",
    title: "Soins intensifs",
    description:
      "Deux semaines en soins intensifs au CHU Laennec à Nantes pour stabilisation et surveillance.",
    phase: "soins-intensifs",
    establishment: "CHU Laennec",
    position: { x: -4, y: 0, z: 0 },
    color: "#ffff00", // Jaune
  },
  {
    id: 4,
    date: "Janvier 2025",
    title: "2ème opération",
    description:
      "Deuxième intervention chirurgicale pour poursuivre le traitement.",
    phase: "soins-intensifs",
    establishment: "CHU Laennec",
    position: { x: -2, y: 0, z: 0 },
    color: "#00f5ff", // Cyan
  },
  {
    id: 5,
    date: "Janvier 2025",
    title: "3ème opération",
    description:
      "Troisième intervention chirurgicale pour finaliser les soins d'urgence.",
    phase: "soins-intensifs",
    establishment: "CHU Laennec",
    position: { x: 0, y: 0, z: 0 },
    color: "#00f5ff", // Cyan
  },
  {
    id: 6,
    date: "Fin janvier 2025",
    title: "Hospitalisation classique",
    description:
      "Une semaine en hospitalisation classique pour récupération post-opératoire.",
    phase: "soins-intensifs",
    establishment: "CHU Laennec",
    position: { x: 2, y: 0, z: 0 },
    color: "#ffff00", // Jaune
  },
  {
    id: 7,
    date: "7 février 2025",
    title: "Entrée MPR Saint-Jacques",
    description:
      "Entrée au MPR Saint-Jacques (UCL) pour rééducation intensive 24h/7j.",
    phase: "reeducation-intensive",
    establishment: "MPR Saint-Jacques",
    position: { x: 4, y: 0, z: 0 },
    color: "#ff00ff", // Magenta
  },
  {
    id: 8,
    date: "21 février 2025",
    title: "4ème opération",
    description:
      "Quatrième intervention chirurgicale pendant la phase de rééducation.",
    phase: "reeducation-intensive",
    establishment: "MPR Saint-Jacques",
    position: { x: 6, y: 0, z: 0 },
    color: "#00f5ff", // Cyan
  },
  {
    id: 9,
    date: "15 juin 2025",
    title: "Hôpital de jour",
    description:
      "Passage en hôpital de jour au MPR Saint-Jacques pour rééducation en ambulatoire.",
    phase: "hopital-jour",
    establishment: "MPR Saint-Jacques",
    position: { x: 8, y: 0, z: 0 },
    color: "#ffff00", // Jaune
  },
  {
    id: 10,
    date: "21 novembre 2025",
    title: "Sortie prévue",
    description:
      "Sortie prévue du programme de rééducation - Retour à domicile avec suivi ambulatoire.",
    phase: "hopital-jour",
    establishment: "Domicile",
    position: { x: 10, y: 0, z: 0 },
    color: "#ff00ff", // Magenta
  },
];

export const phaseColors = {
  "soins-intensifs": "#ff00ff",
  "reeducation-intensive": "#00f5ff",
  "hopital-jour": "#ffff00",
};

export const phaseLabels = {
  "soins-intensifs": "Soins Intensifs",
  "reeducation-intensive": "Rééducation Intensive",
  "hopital-jour": "Hôpital de Jour",
};
