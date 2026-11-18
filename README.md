# Little Dreams — 3D Circular Lookbook Hero Section (React + Tailwind)

An ultra-modern, high-fidelity 3D hero section for **Little Dreams**, featuring an interactive 3D turntable carousel, automatic circular rotation, dynamic Blue theming for boys vs. signature Magenta theming for girls, interactive hotspot markers, and a live synchronized lookbook with bundle discount calculations.

---

## ✨ Features

1. **3D Circular Turntable Carousel (`Carousel3D.jsx`)**:
   - 6 styled looks arranged in true 3D circular space (`perspective: 1200px`, `transform-style: preserve-3d`).
   - Active front model elevated on a soft bevelled pedestal block with realistic ambient ground lighting and cast shadow.
   - Circular depth-of-field: flanking models dynamically scale down, blur, and reduce opacity.
   - **Interactive 3D Mouse Parallax**: Move your cursor over the stage to gently tilt the camera perspective in pitch and yaw.
   - **Touch & Drag**: Supports touch swipe and drag to smoothly spin the carousel.
   - **Direct Selection**: Click on any background model to immediately rotate them to the front.

2. **Dynamic Blue Color Theme for Boys**:
   - **Boy Looks (e.g. Look 02 Leo "The Urban Playmaker", Look 04 Noah, Look 06 Ethan)**:
     - Background smoothly transitions to a soft, arctic sky blue gradient (`#e0f2fe` -> `#b2dcf8`).
     - Navbar shifts to a deep midnight navy (`#0c2b4d`).
     - Accents, CTA buttons, and badges shift to electric royal blue (`#0f3a68`) and cyan.
     - Playful boy doodles appear: hand-drawn paper airplane with dashed trail and starry constellations.
     - Outfits update to boy explorer jackets, indigo tapered chinos, and navy cloud runners.
   - **Girl Looks (e.g. Look 01 Emma "The Everyday Edit", Look 03 Sophia, Look 05 Mia)**:
     - Background transitions back to the signature berry rose palette (`#fce8f0` -> `#f7c5d9`).
     - Deep berry magenta header, rose clouds, and floating butterflies.

3. **Automatic Continuous Selection ("Goes in Circle Automatic")**:
   - Seamless 4.5-second auto-advancement loop cycling through all looks continuously.
   - Animated SVG / CSS progress bar at the bottom showing time elapsed in the active cycle.
   - Interactive playback controls: Play/Pause toggle (`⏸` / `▶`), previous look (`←`), next look (`→`), and direct numbered pills (`01` through `06`).

4. **Interactive Hotspots on 3D Model**:
   - Numbered pins (1: Top, 2: Pants, 3: Shoes) with pulsating rings hover directly on the active character.
   - Clicking a pin spotlights the corresponding item in the right sidebar.

5. **Right-Side Lookbook Panel ("In this look")**:
   - Hand-drawn crown doodle with "NEW" and heart doodle.
   - Item cards with product images, badges (Organic Cotton, Stretch Twill, Easy Velcro), prices, and quick-add `+` buttons.
   - Bundle calculation: automatic 10% bundle discount applied with crossed-out original price.
   - "Add full look to bag →" CTA with live bag badge counter and animated toast notifications.

---

## 📁 Project Structure

```text
little-dreams-hero/
├── index.html                 # Vite HTML entry point
├── preview.html               # Self-contained zero-install browser preview
├── package.json               # React 18, Vite & Tailwind configuration
├── vite.config.js             # Vite React plugin setup
├── tailwind.config.js         # Tailwind theme & typography tokens
├── src/
│   ├── main.jsx               # React DOM root mounting
│   ├── App.jsx                # Main application coordinator & state engine
│   ├── index.css              # Custom 3D perspective & typography styles
│   ├── data/
│   │   └── looksData.js       # 6 styled looks with gender themes & metadata
│   └── components/
│       ├── Navbar.jsx         # Header with brand logo, nav links & bag badge
│       ├── Carousel3D.jsx     # 3D circular cylinder carousel & parallax stage
│       ├── ModelAvatar.jsx    # Vector character models with outfits & hotspots
│       ├── ProductSidebar.jsx # Right sidebar with items & bundle calculation
│       ├── BottomControls.jsx # Pagination strip, progress bar & play controls
│       └── DoodleBackground.jsx# Multi-plane floating hand-drawn clouds & stars
```

---

## 🚀 How to Run

### Option 1: Instant Browser Preview (Zero Setup)
Simply open `preview.html` in any web browser (Chrome, Edge, Firefox, Safari).

### Option 2: Run with Vite & React
```bash
# Navigate to the project directory
cd C:\Users\fg\.gemini\antigravity\scratch\little-dreams-hero

# Install dependencies
npm install

# Start development server
npm run dev
```
Open `http://localhost:5173` in your browser.
