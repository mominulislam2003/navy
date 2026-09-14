# Bangladesh Navy Website Portal

A modern, responsive, and sleek web portal designed for the Bangladesh Navy. This project features a high-performance React frontend built with Vite, showcasing the Navy's fleet, operations, and news with premium aesthetics and tactical animations.

## ⚓ Features

*   **Tactical Preloader**: A sleek initial loading screen featuring the official Bangladesh Navy crest, bilingual motto ("In War and Peace Invincible at Sea" / "শান্তিতে সংগ্রামে সমুদ্রে দুর্জয়"), and a radar sweep progress animation.
*   **Modern Aesthetics**: Glassmorphism design elements, deep navy blue and gold color palette, and premium typography.
*   **Interactive Animations**: 
    *   Dynamic top scroll progress bar.
    *   Subtle radar grids and scanline overlays in the hero section.
    *   Animated scroll indicators and hover-elevated cards with glowing borders.
    *   Metallic shimmer effects on primary buttons.
*   **Bilingual Header**: Navigation bar featuring both English and Bengali branding.
*   **Fleet Showcase**: Grid-based presentation of naval assets including Frigates, Submarines, Helicopters, and Patrol Aircraft.
*   **Responsive Design**: Fully optimized for mobile, tablet, and desktop viewing.

## 🛠️ Tech Stack

*   **Frontend Framework**: React 18
*   **Build Tool**: Vite
*   **Styling**: Vanilla CSS (Custom properties, CSS Grid/Flexbox, Keyframe Animations)
*   **Language**: TypeScript / TSX

## 🚀 Getting Started

### Prerequisites

*   Node.js (v16 or higher recommended)
*   npm (or yarn/pnpm)

### Installation

1.  **Clone the repository or navigate to the project directory:**
    ```bash
    cd path/to/project
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Start the development server:**
    ```bash
    npm run dev
    ```

4.  **View the application:**
    Open your browser and navigate to `http://localhost:5173/` (or the port provided in your terminal).

## 📂 Project Structure

```
.
├── index.html          # Main HTML entry point
├── package.json        # Project metadata and scripts
├── vite.config.ts      # Vite configuration
├── public/
│   └── images/         # Static assets (Navy crest, fleet imagery, backgrounds)
└── src/
    ├── App.tsx         # Main application component containing UI and Preloader
    ├── main.css        # Global styles and tactical animation definitions
    ├── main.tsx        # React root rendering
    └── vite-env.d.ts   # TypeScript declarations for Vite
```

## 📜 Acknowledgements

Designed to reflect the honor, distinction, and capability of the Bangladesh Navy.
