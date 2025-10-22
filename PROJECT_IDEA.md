Je souhaite une **expérience Desktop immersive** qui valorise l’effet “whaooo”, tout en gardant l’information lisible et structurée sur mon parcours post-AVC.

# Concept d’App Web “Parcours Post-AVC” en 3D

## 1. Expérience visuelle globale

- **Scène 3D immersive** : chaque étape est représentée par une “station” sur un chemin 3D dynamique (type timeline flottante ou pont lumineux dans l’espace)
- **Transitions animées** : lorsqu’on navigue, la caméra vole, pivote, zoome d’une étape à une autre (effet “whaooo”, façon portfolio interactif ou jeu vidéo narratif)
- **Ambiance visuelle forte** : effets de lumière néon, ombres douces, matériaux brillants, typographie impactante

## 2. Lecture des étapes

- **Stations claires** : chaque étape/événement majeur est une “borne” sur ce chemin. Hover ou clic fait apparaître détails, texte, photos, explications.
- **Possibilité d’inclure du contenu multimédia** : photos, extraits audio/vidéo, témoignage vocal, documents médicaux stylisés

## 3. Structure technique

- **Frontend Next.js** (SSR ou client-only selon besoins)
- **Intégration avec [React Three Fiber](https://docs.pmnd.rs/react-three-fiber/getting-started/introduction)** pour la partie 3D, [Drei](https://github.com/pmndrs/drei) pour les aides visuelles (orbit controls, transitions), effet neon avec shaders custom ou plugins existants
- **Réglage de la navigation** : scroll, drag ou clic sur timeline 3D ; modale ou panneau latéral pour détails

## 4. Inspirations visuelles

- Portfolios 3D modernes ([threejs.org/examples](https://threejs.org/examples/))
- Presentations type “Journey” (voir le portfolio [Louis Ansa](https://louisansa.com/)), “The Ocean Cleanup” (3D parallax storyline)
- Scènes façon “Cyberpunk neon road” (reflets, néons, surfaces ultra clean, effet pro)

## 5. Premiers steps à réaliser

### a) Prototype minimal

- Création d’une scène 3D de base (React Three Fiber)
- Mise en place d’un chemin/timeline horizontal ou spatial avec 10-12 “stations” (tes étapes)
- Navigation de caméra fluide entre chaque station (effet fly to)
- Ajout de typographie “glowy” et arrière-plan sombre/brillant

### b) Progression

- Ajout de détails étape par étape, media, transitions personnalisées
- Test design sur Mac écran Retina, gestion des tailles de police et effets

## Recommandations

- **Commence par setup Next.js + React Three Fiber**
- Fais une structure simple : timeline ou chemin 3D, chaque étape comme une sphère/borne stylée
- Ajoute navigation caméra pour le côté “whaooo”
- Vérifie la lisibilité du texte (typographie neon, contraste, taille)
- Peaufine au fur et à mesure

## Parcours

**Timeline consolidée :**

1. **15 janvier 2025, 18h** - AVC à domicile (événement déclencheur)
2. **Janvier 2025** - 1ère opération (nom l'opé 1)
3. **Janvier 2025** - 2 semaines en soins intensifs (CHU Laennec, Nantes)
4. **Janvier 2025** - 2ème opération (nom l'opé 2)
5. **Janvier 2025** - 3ème opération (nom l'opé 3)
6. **Fin janvier 2025** - 1 semaine en hospitalisation classique
7. **7 février 2025** - Entrée au MPR Saint-Jacques (UCL - 24h/7j)
8. **21 février 2025** - 4ème opération (nom l'opé 4)
9. **15 juin 2025** - Passage en hôpital de jour (MPR Saint-Jacques)
10. **21 novembre 2025** - Sortie prévue

**Observations pour la visualisation :**

- Période totale : ~10 mois
- 4 opérations distinctes à nommer/documenter
- 3 phases majeures : Soins intensifs → Rééducation intensive (UCL) → Hôpital de jour
- 2 établissements principaux : CHU Laennec → MPR Saint-Jacques
