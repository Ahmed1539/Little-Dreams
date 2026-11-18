import React from 'react';
// 1. Import the exact filenames including .png
import balletGirlImg from '../assets/ballet-girl-look.png';
import balletGirlImg2 from '../assets/girl-look-cutout(2).png';
import balletGirlImg3 from '../assets/Girl-in-tringe.png';
import BoyImg1 from '../assets/boy1.png';
import BoyImg2 from '../assets/boy2.png';

// 2. Map each look ID to its specific image
const LOOK_IMAGES = {
  '01': balletGirlImg,
  '02': BoyImg1,
  '03': balletGirlImg2,
  '04': BoyImg2,
  '05': balletGirlImg3,
};

export default function ModelAvatar({ 
  look, 
  isActive, 
  onSelectHotspot, 
  onOpenItemModal
}) {
  // Pick the specific image by look.id, or use look.model.image if provided
  const modelImage = LOOK_IMAGES[look.id] || look.model?.image || balletGirlImg;

  // Helper to trigger item details when clicking any garment area
  const handleItemClick = (e, spotId) => {
    e.stopPropagation();
    if (!isActive) return;
    
    onSelectHotspot(spotId);
    const correspondingItem =
      look.items.find((i) => Number(i.num) === Number(spotId)) || look.items[0];
      
    if (onOpenItemModal && correspondingItem) {
      onOpenItemModal(correspondingItem);
    }
  };

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-end select-none">
      {/* Main Model Image Container */}
      <div className="relative z-10 w-64 sm:w-72 h-[380px] sm:h-[410px] flex items-center justify-center">
        <div 
          className="relative w-full h-full flex items-center justify-center transition-transform duration-300 ease-out pointer-events-none"
          style={{
            transform: isActive ? 'scale(1.03)' : 'scale(0.96)'
          }}
        >
          {/* Ambient ground shadow beneath shoes */}
          <div 
            className="absolute bottom-3 w-44 h-8 rounded-full bg-black/25 filter blur-md -z-10"
            style={{ left: '22%' }}
          />

          {/* Specific 2K Model Image for this Look */}
          <img 
            src={modelImage} 
            alt={look.name || `Look ${look.id}`}
            className="w-full h-full object-contain filter drop-shadow-2xl transition-transform duration-200"
            style={{
              filter: 'drop-shadow(0 20px 30px rgba(0,0,0,0.25)) contrast(1.04) brightness(1.02)'
            }}
          />
        </div>

        {/* INVISIBLE CLICKABLE GARMENT ZONES */}
        {isActive && look.model?.hotspots?.map((spot) => {
          const isPants = Number(spot.id) === 2;
          return (
            <button
              key={spot.id}
              type="button"
              onClick={(e) => handleItemClick(e, spot.id)}
              style={{
                top: isPants ? '68%' : spot.top,
                left: spot.left,
              }}
              className={`absolute -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-transparent cursor-pointer focus:outline-none ${
                isPants
                  ? 'w-28 h-28 z-30' // Larger, non-overlapping lower hitbox for pants
                  : 'w-28 h-24 z-20' // Upper torso hitbox for jacket/top
              }`}
              aria-label={`Inspect ${spot.label}`}
            />
          );
        })}
      </div>
    </div>
  );
}