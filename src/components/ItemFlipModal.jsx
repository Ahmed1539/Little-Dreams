import React, { useState, useRef, useEffect } from 'react';

export default function ItemFlipModal({ 
  item, 
  lookItems = [], // Pass currentLook.items here
  lookTheme, 
  onClose, 
  onAddToCart 
}) {
  const [activeItem, setActiveItem] = useState(item);
  const [isFlipped, setIsFlipped] = useState(false);
  const [selectedSize, setSelectedSize] = useState('6Y');
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const touchStartX = useRef(null);

  // Update activeItem whenever a new item (jacket or pants) is clicked
  useEffect(() => {
    setActiveItem(item);
    setIsFlipped(false);
  }, [item]);

  if (!activeItem) return null;

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: -y * 12, y: x * 15 });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const diff = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(diff) > 40) {
      setIsFlipped(diff < 0);
    }
    touchStartX.current = null;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-md transition-opacity duration-300">
      <div className="absolute inset-0" onClick={onClose} />

      <div 
        className="relative z-10 w-full max-w-[350px] sm:max-w-4xl bg-white rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden border border-slate-100 flex flex-col md:flex-row max-h-[85vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close Inspection Modal"
          className="absolute top-2.5 right-2.5 sm:top-4 sm:right-4 z-30 w-7 h-7 sm:w-10 sm:h-10 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-all duration-200 shadow-sm"
        >
          <svg className="w-3.5 h-3.5 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* LEFT: 3D FLIP ITEM STAGE */}
        <div 
          className="w-full md:w-1/2 p-3 sm:p-6 md:p-8 flex flex-col items-center justify-between bg-gradient-to-br from-slate-50 via-slate-100/60 to-slate-200/50 border-b md:border-b-0 md:border-r border-slate-100 relative select-none"
          style={{ perspective: '1200px' }}
        >
          {/* Item Switcher Pills (Shows Jacket vs Pants when look has 2+ items) */}
          {lookItems.length > 1 && (
            <div className="w-full flex items-center gap-1.5 pr-9 sm:pr-0 mb-2">
              {lookItems.map((piece) => {
                const isSelected = piece.id === activeItem.id;
                return (
                  <button
                    key={piece.id}
                    onClick={() => {
                      setActiveItem(piece);
                      setIsFlipped(false);
                    }}
                    className={`flex-1 py-1 px-2 rounded-lg text-[10px] sm:text-xs font-bold truncate border transition-all ${
                      isSelected
                        ? 'bg-slate-900 text-white border-slate-900 shadow-sm'
                        : 'bg-white/80 text-slate-600 border-slate-200 hover:bg-white'
                    }`}
                  >
                    {piece.num}. {piece.name}
                  </button>
                );
              })}
            </div>
          )}

          {/* Top Pill Controls: Front / Back Toggle */}
          <div className={`w-full flex items-center justify-between ${lookItems.length <= 1 ? 'pr-9 sm:pr-0' : ''} mb-1.5 sm:mb-4`}>
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-400">
              3D Inspector (Swipe ↔)
            </span>
            <div className="flex items-center gap-0.5 sm:gap-1 bg-white p-0.5 sm:p-1 rounded-full shadow-sm border border-slate-200/80">
              <button
                onClick={() => setIsFlipped(false)}
                className={`px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-bold transition-all duration-300 ${
                  !isFlipped ? 'bg-slate-900 text-white shadow' : 'text-slate-500 hover:text-slate-900'
                }`}
              >
                Front
              </button>
              <button
                onClick={() => setIsFlipped(true)}
                className={`px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-bold transition-all duration-300 ${
                  isFlipped ? 'bg-slate-900 text-white shadow' : 'text-slate-500 hover:text-slate-900'
                }`}
              >
                Back
              </button>
            </div>
          </div>

          {/* 3D Flip Card */}
          <div 
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            className="relative w-full max-w-[210px] sm:max-w-[320px] h-[165px] sm:h-[320px] md:h-[350px] flex items-center justify-center cursor-pointer my-0.5 touch-pan-y"
            style={{ perspective: '1000px' }}
            onClick={() => setIsFlipped(!isFlipped)}
            title="Swipe or click to flip front/back"
          >
            <div
              className="relative w-full h-full rounded-xl sm:rounded-2xl transition-transform duration-700 ease-out shadow-md"
              style={{
                transformStyle: 'preserve-3d',
                transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y + (isFlipped ? 180 : 0)}deg)`
              }}
            >
              {/* FRONT CARD FACE */}
              <div 
                className="absolute inset-0 w-full h-full rounded-xl sm:rounded-2xl bg-white p-2.5 sm:p-4 flex flex-col items-center justify-center border border-slate-200/80 shadow-sm"
                style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}
              >
                <div className="absolute top-2 left-2 sm:top-3 sm:left-3 px-1.5 sm:px-2 py-0.5 rounded-full bg-slate-900 text-white text-[8px] sm:text-[10px] font-bold uppercase tracking-wider">
                  Front
                </div>
                
                <div className="w-full h-28 sm:h-48 md:h-56 flex items-center justify-center overflow-hidden rounded-lg sm:rounded-xl bg-slate-50/50">
                  {activeItem.frontImage || activeItem.image ? (
                    <img 
                      src={activeItem.frontImage || activeItem.image} 
                      alt={`${activeItem.name} Front`} 
                      className="w-full h-full object-contain filter drop-shadow-sm transition-transform duration-500 hover:scale-105 pointer-events-none"
                    />
                  ) : null}
                </div>

                <div className="w-full hidden sm:flex items-center justify-around text-[11px] font-semibold text-slate-500 bg-slate-50 py-1.5 sm:py-2 rounded-xl border border-slate-100 mt-3">
                  <span className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    {activeItem.frontBadge1 || "Front Silhouette"}
                  </span>
                  <span>•</span>
                  <span>{activeItem.frontBadge2 || "Soft Texture"}</span>
                </div>
              </div>

              {/* BACK CARD FACE */}
              <div 
                className="absolute inset-0 w-full h-full rounded-xl sm:rounded-2xl bg-white p-2.5 sm:p-4 flex flex-col items-center justify-center border border-slate-200/80 shadow-sm"
                style={{
                  backfaceVisibility: 'hidden',
                  WebkitBackfaceVisibility: 'hidden',
                  transform: 'rotateY(180deg)'
                }}
              >
                <div className="absolute top-2 left-2 sm:top-3 sm:left-3 px-1.5 sm:px-2 py-0.5 rounded-full bg-slate-700 text-white text-[8px] sm:text-[10px] font-bold uppercase tracking-wider">
                  Back
                </div>

                <div className="w-full h-28 sm:h-48 md:h-56 flex items-center justify-center overflow-hidden rounded-lg sm:rounded-xl bg-slate-50/50">
                  {activeItem.backImage ? (
                    <img 
                      src={activeItem.backImage} 
                      alt={`${activeItem.name} Back`} 
                      className="w-full h-full object-contain filter drop-shadow-sm transition-transform duration-500 hover:scale-105 pointer-events-none"
                    />
                  ) : (
                    <img 
                      src={activeItem.image} 
                      alt={`${activeItem.name} Back`} 
                      className="w-full h-full object-contain filter drop-shadow-sm scale-x-[-1] pointer-events-none"
                    />
                  )}
                </div>

                <div className="w-full hidden sm:flex items-center justify-around text-[11px] font-semibold text-slate-500 bg-slate-50 py-1.5 sm:py-2 rounded-xl border border-slate-100 mt-3">
                  <span className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
                    {activeItem.backBadge1 || "Back Tailoring"}
                  </span>
                  <span>•</span>
                  <span>{activeItem.backBadge2 || "Elastic Waistband"}</span>
                </div>
              </div>
            </div>
          </div>

          <button
            onClick={() => setIsFlipped(!isFlipped)}
            className="mt-1.5 sm:mt-3 text-[10px] sm:text-xs font-bold text-slate-600 hover:text-slate-900 flex items-center gap-1.5 bg-white px-2.5 sm:px-4 py-1 sm:py-2 rounded-full border border-slate-200 shadow-sm hover:shadow transition-all group"
          >
            <svg className="w-3 h-3 sm:w-4 sm:h-4 group-hover:rotate-180 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            <span>{isFlipped ? "Swipe/Click to View Front" : "Swipe/Click to View Back"}</span>
          </button>
        </div>

        {/* RIGHT: SPECIFICATIONS, FIT & CART ACTION */}
        <div className="w-full md:w-1/2 p-3.5 sm:p-6 md:p-8 flex flex-col justify-between overflow-y-auto">
          <div>
            <div className="flex items-center justify-between">
              <span className="text-[9px] sm:text-xs font-bold tracking-widest text-slate-400 uppercase">
                {activeItem.brand || "LITTLE DREAMS"}
              </span>
              <span className="text-[9px] sm:text-xs px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                In Stock
              </span>
            </div>

            <h2 className="text-lg sm:text-2xl font-extrabold text-slate-900 font-serif mt-0.5 sm:mt-1 leading-tight">
              {activeItem.name}
            </h2>

            <div className="flex items-baseline gap-2 sm:gap-3 mt-0.5 sm:mt-2">
              <span className="text-lg sm:text-2xl font-black text-slate-900">
                ${activeItem.price.toFixed(2)}
              </span>
              <span className="text-[10px] sm:text-xs text-slate-400 font-medium">
                Free Shipping
              </span>
            </div>

            <p className="mt-1.5 sm:mt-4 text-[11px] sm:text-sm text-slate-600 leading-snug sm:leading-relaxed line-clamp-2 sm:line-clamp-none">
              {activeItem.description || "Designed with soft premium fabrics tailored for comfort, movement, and durability for growing little dreamers."}
            </p>

            {/* Size Selector */}
            <div className="mt-2.5 sm:mt-6">
              <div className="flex items-center justify-between text-[11px] sm:text-xs font-bold text-slate-700 mb-1 sm:mb-2">
                <span>Select Size</span>
                <span className="text-slate-400 font-semibold cursor-pointer hover:underline text-[10px] sm:text-[11px]">Size Guide</span>
              </div>
              <div className="flex items-center gap-1 sm:gap-2">
                {['4Y', '6Y', '8Y', '10Y', '12Y'].map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`flex-1 py-1 sm:py-2 text-[11px] sm:text-xs font-bold rounded-lg sm:rounded-xl border transition-all duration-200 ${
                      selectedSize === size
                        ? 'bg-slate-900 text-white border-slate-900 shadow-sm'
                        : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Material & Care */}
            <div className="mt-2.5 sm:mt-5 text-[10px] sm:text-xs text-slate-500 space-y-0.5 sm:space-y-1">
              <div><strong className="text-slate-700">Material:</strong> {activeItem.material || "100% Organic Cotton"}</div>
              <div className="hidden sm:block"><strong className="text-slate-700">Care:</strong> Machine wash cold gentle</div>
            </div>
          </div>

          {/* Add To Bag CTA Button */}
          <div className="pt-2.5 sm:pt-6 mt-2.5 sm:mt-6 border-t border-slate-100">
            <button
              onClick={() => {
                onAddToCart(activeItem);
                onClose();
              }}
              className="w-full py-2.5 sm:py-4 rounded-xl text-white font-bold text-xs sm:text-sm tracking-wide flex items-center justify-center gap-2 sm:gap-3 transition-all duration-300 shadow-md hover:shadow-xl active:scale-[0.98]"
              style={{
                backgroundColor: lookTheme?.buttonBg || '#6d1338',
                boxShadow: `0 10px 25px -5px ${lookTheme?.glowColor || 'rgba(0,0,0,0.1)'}`
              }}
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              <span>Add to Bag • ${activeItem.price.toFixed(2)} ({selectedSize})</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}