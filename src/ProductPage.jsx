import React, { useState } from 'react';
import {
  ChevronRight,
  ChevronDown,
  Check,
  Sparkles,
  Camera,
  Play,
  X,
  Droplets,
  Layers,
  ShieldCheck,
  SlidersHorizontal,
  ArrowRight,
  Upload,
} from 'lucide-react';

// ==========================================
// PALETTE DATA MATCHING PRODUCT PAGE DESIGN
// ==========================================

const ROYALE_PALETTES = [
  {
    id: 'forest-mist',
    name: 'Forest Mist',
    code: '#0AA6BB',
    hex: '#256666',
    wallTint: 'rgba(37, 102, 102, 0.45)',
    description: 'Deep botanical teal with calming, grounded undertones.',
  },
  {
    id: 'golden-hour',
    name: 'Golden Hour',
    code: '#FK9CF0',
    hex: '#D99B38',
    wallTint: 'rgba(217, 155, 56, 0.38)',
    description: 'Sunlit ochre warmth that brings effortless joy to living spaces.',
  },
  {
    id: 'terracotta-dream',
    name: 'Terracotta Dream',
    code: '#BG3660',
    hex: '#BE5C45',
    wallTint: 'rgba(190, 92, 69, 0.42)',
    description: 'Earthy artisanal clay inspired by sun-baked Mediterranean villas.',
  },
  {
    id: 'calm-sea',
    name: 'Calm Sea',
    code: '#2B5B60',
    hex: '#35696E',
    wallTint: 'rgba(53, 105, 110, 0.40)',
    description: 'Tranquil coastal slate designed for restful bedrooms and studies.',
  },
  {
    id: 'delicate-sand',
    name: 'Delicate Sand',
    code: '#E3B76B',
    hex: '#E5DAC8',
    wallTint: 'rgba(229, 218, 200, 0.35)',
    description: 'Soft mineral warmth that pairs seamlessly with natural wood.',
  },
];

// Laurel Wreath Architectural Digest Badge
const LaurelWreathBadge = () => (
  <div className="inline-flex items-center gap-2 bg-[#FAF7F0] border border-[#E9DFCF] px-3 py-1.5 rounded-full shadow-2xs">
    <svg viewBox="0 0 36 36" fill="none" className="w-6 h-6 shrink-0">
      <path
        d="M12 7C12 11 9.5 14 6 15.5M12 13.5C11 17 8 20 4.5 21.5M13 19.5C11 23 8 25.5 5 27M15.5 25.5C13 28 9.5 29.5 7 30.5"
        stroke="#C08A3E"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M24 7C24 11 26.5 14 30 15.5M24 13.5C25 17 28 20 31.5 21.5M23 19.5C25 23 28 25.5 31 27M20.5 25.5C23 28 26.5 29.5 29 30.5"
        stroke="#C08A3E"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <circle cx="18" cy="18" r="2.5" fill="#C08A3E" />
    </svg>
    <div className="text-left">
      <div className="text-[9px] font-bold tracking-widest uppercase text-[#A87428] leading-none">
        Architectural Digest
      </div>
      <div className="text-[11px] font-serif-editorial font-bold text-[#8C5D1E] tracking-tight leading-tight">
        Top Choice
      </div>
    </div>
  </div>
);

// Organic Brush Stroke Swatch Badge
const SwatchBrushBadge = ({ color, name, code }) => (
  <div className="relative select-none pointer-events-none">
    <svg
      viewBox="0 0 170 95"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-36 sm:w-44 h-auto drop-shadow-lg"
    >
      {/* Background painted stroke */}
      <path
        d="M18 32C42 16 102 12 154 20C164 22 158 46 145 50C116 59 62 76 28 80C14 81 8 56 18 32Z"
        fill={color}
      />
      <path
        d="M30 48C58 38 112 35 152 46"
        stroke={color}
        strokeWidth="16"
        strokeLinecap="round"
        opacity="0.95"
      />
      <path
        d="M12 38C32 24 82 20 128 28"
        stroke={color}
        strokeWidth="8"
        strokeLinecap="round"
        strokeDasharray="65 12"
      />
    </svg>
    <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-3 -mt-1">
      <span className="text-xs sm:text-[13px] font-bold leading-tight drop-shadow-sm font-sans">
        {name}
      </span>
      <span className="text-[10px] font-medium opacity-90 drop-shadow-sm tracking-wider mt-0.5">
        ({code})
      </span>
    </div>
  </div>
);

export default function ProductPage({ onNavigateHome, onLaunchVisualizer }) {
  const [activePalette, setActivePalette] = useState(ROYALE_PALETTES[0]);
  const [activeMediaIndex, setActiveMediaIndex] = useState(0);
  const [selectedCanSize, setSelectedCanSize] = useState('1 Gallon');
  const [filmModalOpen, setFilmModalOpen] = useState(false);
  const [visualizerModalOpen, setVisualizerModalOpen] = useState(false);
  const [expandedAccordion, setExpandedAccordion] = useState(0); // 0 = Formula, 1 = Coverage, 2 = Craft
  const [toastMessage, setToastMessage] = useState(null);

  const triggerToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((prev) => (prev === msg ? null : prev));
    }, 3000);
  };

  // 3 gallery items
  const galleryItems = [
    {
      type: 'image',
      thumb: '/images/accord_room_arches.jpg',
      label: 'Room Arches',
      alt: 'Luxury interior archway hall in Accord Royale matte',
    },
    {
      type: 'image',
      thumb: '/images/accord_matte_texture.jpg',
      label: 'Velvet Sheen',
      alt: 'Macro velvet matte tactile paint drape',
    },
    {
      type: 'video',
      thumb:
        'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=600&q=80',
      label: 'Play the Film',
      alt: 'Video showcase preview',
    },
  ];

  return (
    <div className="w-full bg-[#FAF9F5] text-[#142333]">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#142333] text-white px-4 py-3 rounded-2xl shadow-2xl border border-white/15 flex items-center gap-3 text-sm animate-bounce">
          <span
            className="w-3.5 h-3.5 rounded-full shrink-0 border border-white/40"
            style={{ backgroundColor: activePalette.hex }}
          />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* ==========================================
          BREADCRUMBS
      ========================================== */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pt-5 pb-3">
        <nav className="flex items-center gap-2 text-xs text-slate-500 font-medium">
          <button
            onClick={onNavigateHome}
            className="hover:text-[#1B5153] transition-colors"
          >
            Home
          </button>
          <span>/</span>
          <span className="hover:text-[#1B5153] cursor-pointer">
            Luxury Collections
          </span>
          <span>/</span>
          <span className="hover:text-[#1B5153] cursor-pointer">
            Interior Matte
          </span>
          <span>/</span>
          <span className="text-[#142333] font-semibold">
            Accord Royale Matte
          </span>
        </nav>
      </div>

      {/* ==========================================
          HERO PRODUCT SECTION (2 COLUMNS)
      ========================================== */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pt-3 pb-14 sm:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* LEFT COLUMN: Main Hero Photo + Brush Badge + 3 Thumbnails */}
          <div className="lg:col-span-6 flex flex-col gap-4">
            {/* Main Stage Image Container */}
            <div className="relative rounded-[28px] overflow-hidden bg-[#ECE8DE] border border-slate-200/80 shadow-lg aspect-square group">
              {/* Active Image Display */}
              {activeMediaIndex === 0 ? (
                <img
                  src="/images/accord_royale_pedestal.jpg"
                  alt="Accord Royale Luxury Paint Can on Travertine Pedestal"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-102"
                />
              ) : activeMediaIndex === 1 ? (
                <img
                  src="/images/accord_room_arches.jpg"
                  alt="Accord Royale Arched Hallway"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-102"
                />
              ) : (
                <img
                  src="/images/accord_matte_texture.jpg"
                  alt="Accord Royale Matte Silk Texture"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-102"
                />
              )}

              {/* Dynamic Wall Color Wash Overlay (gentle tint on wall background) */}
              <div
                className="absolute inset-0 mix-blend-multiply transition-colors duration-700 pointer-events-none opacity-25"
                style={{ backgroundColor: activePalette.hex }}
              />

              {/* Overlapping Organic Swatch Badge in Bottom-Left */}
              <div className="absolute -bottom-2 -left-3 sm:-bottom-1 sm:-left-2 z-20">
                <SwatchBrushBadge
                  color={activePalette.hex}
                  name={activePalette.name}
                  code={activePalette.code}
                />
              </div>

              {/* Reset to main can view button if viewing gallery thumbnail */}
              {activeMediaIndex !== 0 && (
                <button
                  onClick={() => setActiveMediaIndex(0)}
                  className="absolute top-4 right-4 bg-white/90 hover:bg-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-md text-[#142333] transition-all"
                >
                  View Product Can
                </button>
              )}
            </div>

            {/* 3 Gallery Thumbnails */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 mt-1">
              {/* Thumbnail 1: Arched Hallway */}
              <button
                onClick={() => setActiveMediaIndex(1)}
                className={`relative rounded-2xl overflow-hidden aspect-square border-2 transition-all ${
                  activeMediaIndex === 1
                    ? 'border-[#1B5153] shadow-md scale-102'
                    : 'border-transparent hover:border-slate-300 opacity-90 hover:opacity-100'
                }`}
              >
                <img
                  src="/images/accord_room_arches.jpg"
                  alt="Room Arches"
                  className="w-full h-full object-cover"
                />
              </button>

              {/* Thumbnail 2: Velvet Texture Drape */}
              <button
                onClick={() => setActiveMediaIndex(2)}
                className={`relative rounded-2xl overflow-hidden aspect-square border-2 transition-all ${
                  activeMediaIndex === 2
                    ? 'border-[#1B5153] shadow-md scale-102'
                    : 'border-transparent hover:border-slate-300 opacity-90 hover:opacity-100'
                }`}
              >
                <img
                  src="/images/accord_matte_texture.jpg"
                  alt="Velvet Texture"
                  className="w-full h-full object-cover"
                />
              </button>

              {/* Thumbnail 3: Video with Play Icon */}
              <button
                onClick={() => setFilmModalOpen(true)}
                className="relative rounded-2xl overflow-hidden aspect-square border-2 border-transparent hover:border-[#1B5153] group shadow-xs transition-all"
              >
                <img
                  src="https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=600&q=80"
                  alt="Play the Film preview"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors flex flex-col items-center justify-center text-white">
                  <div className="w-9 h-9 rounded-full bg-white/90 text-[#142333] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Play className="w-4 h-4 fill-current ml-0.5" />
                  </div>
                  <span className="text-[11px] font-semibold mt-1.5 drop-shadow">
                    Play the Film
                  </span>
                </div>
              </button>
            </div>
          </div>

          {/* RIGHT COLUMN: Editorial Story, Laurels, Description & Order */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Header Eyebrow Row + AD Top Choice Badge */}
            <div className="flex items-center justify-between gap-4 mb-3">
              <span className="text-xs sm:text-[13px] font-bold tracking-widest uppercase text-slate-500">
                The Luxury Collection
              </span>
              <LaurelWreathBadge />
            </div>

            {/* Product Title */}
            <h1 className="font-serif-editorial text-4xl sm:text-5xl lg:text-[54px] font-bold text-[#142333] leading-[1.08] tracking-tight">
              Accord Royale
            </h1>

            {/* Subtitle */}
            <h2 className="text-xl sm:text-2xl font-serif-editorial text-slate-700 italic mt-1 font-medium">
              Premium Interior Matte
            </h2>

            {/* Editorial Story Paras matching Mockup */}
            <div className="mt-5 space-y-4 text-slate-600 text-sm sm:text-[15px] leading-relaxed">
              <p>
                Transform your home with a velvety, light-absorbing canvas.
                Crafted with our signature ultra-dense pigments, Accord Royale
                Matte goes on with a flawless, brushstroke-free finish.
              </p>
              <p>
                Formulated as a paint-and-primer in one with natural, low-VOC
                minerals, it delivers peerless durability and a washable finish
                that preserves the quiet, soulful beauty of your spaces.
              </p>
            </div>

            {/* Size & Finish Selector */}
            <div className="mt-7 pt-5 border-t border-slate-200">
              <div className="flex items-center justify-between text-xs font-semibold text-slate-700 mb-2.5">
                <span>Select Volume</span>
                <span className="text-slate-500">Ultra-Velvet Matte (3% Sheen)</span>
              </div>
              <div className="grid grid-cols-3 gap-2.5">
                {[
                  { size: '100ml Sample', price: 'Free' },
                  { size: '1 Gallon', price: '$112' },
                  { size: '5 Gallons', price: '$495' },
                ].map((item) => (
                  <button
                    key={item.size}
                    onClick={() => setSelectedCanSize(item.size)}
                    className={`py-2.5 px-3 rounded-2xl border text-left transition-all ${
                      selectedCanSize === item.size
                        ? 'border-[#1B5153] bg-[#E4EEEE]/50 text-[#142333] shadow-xs'
                        : 'border-slate-200 bg-white hover:border-slate-300 text-slate-600'
                    }`}
                  >
                    <div className="text-xs font-bold">{item.size}</div>
                    <div className="text-[11px] text-slate-500 font-medium">
                      {item.price}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-6 flex flex-wrap items-center gap-3.5">
              <button
                onClick={() =>
                  triggerToast(
                    `Added 1x Accord Royale (${activePalette.name}, ${selectedCanSize}) to Cart!`
                  )
                }
                className="flex-1 bg-[#1B5153] hover:bg-[#133C3E] text-white font-semibold text-xs sm:text-sm py-3.5 px-6 rounded-full shadow-md hover:shadow-lg transition-all active:scale-95 text-center"
              >
                Order {selectedCanSize}
              </button>
              <button
                onClick={() =>
                  triggerToast(
                    `Peel-and-stick color sample chip for "${activePalette.name}" ordered!`
                  )
                }
                className="bg-transparent hover:bg-slate-900/5 text-[#142333] font-semibold text-xs sm:text-sm py-3.5 px-6 rounded-full border border-slate-400 transition-all active:scale-95 whitespace-nowrap"
              >
                Order Free Swatch
              </button>
            </div>

            {/* Quick Guarantees */}
            <div className="mt-5 flex items-center justify-between text-[11.5px] text-slate-500 px-1">
              <span className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-[#1B5153]" />
                Zero-VOC & Odorless
              </span>
              <span className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-[#1B5153]" />
                Guaranteed One-Coat
              </span>
              <span className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-[#1B5153]" />
                Scrub & Washable
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          THE PALETTE SECTION
      ========================================== */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-10 sm:py-14 border-t border-slate-200">
        <h2 className="font-serif-editorial text-3xl sm:text-4xl font-bold text-[#142333] mb-8">
          The Palette
        </h2>

        {/* 5 Round Swatches matching Mockup */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-6 sm:gap-8">
          {ROYALE_PALETTES.map((item) => {
            const isActive = activePalette.id === item.id;
            return (
              <div
                key={item.id}
                onClick={() => {
                  setActivePalette(item);
                  triggerToast(`Selected "${item.name}" for Accord Royale`);
                }}
                className="group flex flex-col items-center text-center cursor-pointer"
              >
                {/* Circular Swatch */}
                <div
                  className={`w-24 h-24 sm:w-28 sm:h-28 rounded-full transition-all duration-300 relative flex items-center justify-center shadow-md ${
                    isActive
                      ? 'ring-3 ring-[#1B5153] ring-offset-4 ring-offset-[#FAF9F5] scale-105'
                      : 'hover:scale-105 hover:shadow-lg'
                  }`}
                  style={{ backgroundColor: item.hex }}
                >
                  {/* "Active" pill inside the circle matching mockup */}
                  {isActive && (
                    <span className="bg-white/90 backdrop-blur-xs text-[#142333] text-[11px] font-bold px-3 py-1 rounded-full shadow-sm">
                      Active
                    </span>
                  )}
                </div>

                {/* Name & Code */}
                <h3 className="font-bold text-sm sm:text-[15px] text-[#142333] mt-3.5">
                  {item.name}
                </h3>
                <p className="text-[11px] font-medium text-slate-500 uppercase tracking-wider mt-0.5">
                  ({item.code})
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* ==========================================
          DESIGNER PAIRINGS — CURATED COLOR STORIES
      ========================================== */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-10 sm:py-14 border-t border-slate-200">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Text */}
          <div className="lg:col-span-5">
            <h2 className="font-serif-editorial text-3xl sm:text-4xl font-bold text-[#142333] leading-[1.14]">
              Designer Pairings
              <br />
              <span className="text-slate-700 font-normal">
                Curated Color Stories
              </span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2.5 max-w-sm">
              Let our designer palettes guide your vision. Balanced mineral undertones
              engineered to harmonize naturally in ambient light.
            </p>
          </div>

          {/* Right Trios matching Mockup */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Story 1 */}
            <div
              onClick={() =>
                triggerToast(
                  'Palette Trio applied: Forest Mist + Delicate Sand + Terracotta Dream'
                )
              }
              className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-2xs hover:shadow-md transition-all cursor-pointer group"
            >
              {/* Overlapping Swatch Discs */}
              <div className="flex items-center -space-x-3 mb-4">
                <div
                  className="w-12 h-12 rounded-full border-2 border-white shadow-sm transition-transform group-hover:scale-105"
                  style={{ backgroundColor: '#256666' }}
                />
                <div
                  className="w-12 h-12 rounded-full border-2 border-white shadow-sm transition-transform group-hover:scale-105"
                  style={{ backgroundColor: '#E5DAC8' }}
                />
                <div
                  className="w-12 h-12 rounded-full border-2 border-white shadow-sm transition-transform group-hover:scale-105"
                  style={{ backgroundColor: '#BE5C45' }}
                />
              </div>
              <h4 className="font-bold text-xs sm:text-[13px] text-[#142333] leading-snug">
                Forest Mist + Delicate Sand
                <br />+ Terracotta Dream
              </h4>
              <p className="text-[11px] text-slate-500 mt-1">
                Earthy & Botanical Haven
              </p>
            </div>

            {/* Story 2 */}
            <div
              onClick={() =>
                triggerToast(
                  'Palette Trio applied: Forest Mist + Golden Hour + Terracotta Dream'
                )
              }
              className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-2xs hover:shadow-md transition-all cursor-pointer group"
            >
              {/* Overlapping Swatch Discs */}
              <div className="flex items-center -space-x-3 mb-4">
                <div
                  className="w-12 h-12 rounded-full border-2 border-white shadow-sm transition-transform group-hover:scale-105"
                  style={{ backgroundColor: '#256666' }}
                />
                <div
                  className="w-12 h-12 rounded-full border-2 border-white shadow-sm transition-transform group-hover:scale-105"
                  style={{ backgroundColor: '#E5DAC8' }}
                />
                <div
                  className="w-12 h-12 rounded-full border-2 border-white shadow-sm transition-transform group-hover:scale-105"
                  style={{ backgroundColor: '#D99B38' }}
                />
              </div>
              <h4 className="font-bold text-xs sm:text-[13px] text-[#142333] leading-snug">
                Forest Mist + Golden Hour
                <br />+ Terracotta Dream
              </h4>
              <p className="text-[11px] text-slate-500 mt-1">
                Sunlit Architectural Contrast
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          VISUALIZER STUDIO CARD
      ========================================== */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-10 sm:py-14">
        <div className="bg-[#EFECE3] rounded-3xl overflow-hidden border border-[#DFDACB] shadow-sm p-4 sm:p-6 lg:p-7">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Living Room Scene Photo with Dynamic Active Color Tint */}
            <div className="lg:col-span-7 relative rounded-2xl overflow-hidden aspect-[16/10] shadow-md group">
              <img
                src="/images/accord_visualizer_room.jpg"
                alt="Visualizer Studio Room Preview"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
              />
              {/* Dynamic Wall Color Wash matching Active Swatch */}
              <div
                className="absolute inset-0 mix-blend-multiply transition-colors duration-700 pointer-events-none"
                style={{
                  backgroundColor: activePalette.hex,
                  opacity: 0.38,
                }}
              />
              {/* Swatch Pill Badge on Wall */}
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-xs px-3 py-1.5 rounded-full shadow-md flex items-center gap-2">
                <span
                  className="w-3 h-3 rounded-full border border-black/10"
                  style={{ backgroundColor: activePalette.hex }}
                />
                <span className="text-xs font-semibold text-[#142333]">
                  {activePalette.name} on Wall
                </span>
              </div>
            </div>

            {/* Right Card Copy & CTA */}
            <div className="lg:col-span-5 flex flex-col justify-center px-2">
              <h3 className="font-serif-editorial text-3xl sm:text-4xl font-bold text-[#142333]">
                Visualizer Studio
              </h3>
              <h4 className="font-serif-editorial text-xl sm:text-2xl text-slate-700 mt-1">
                Preview the Artistry
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 mt-3 leading-relaxed">
                Visualize {activePalette.name} in your own space instantly with AR.
                Experience how natural morning and evening light shifts the velvety
                depth of Accord Royale Matte.
              </p>
              <div className="mt-6">
                <button
                  onClick={() => {
                    if (onLaunchVisualizer) {
                      onLaunchVisualizer();
                    } else {
                      setVisualizerModalOpen(true);
                    }
                  }}
                  className="inline-flex items-center gap-2 bg-transparent hover:bg-[#1B5153] hover:text-white text-[#142333] font-semibold text-xs sm:text-sm px-6 py-3 rounded-full border border-slate-700 hover:border-[#1B5153] transition-all duration-200 active:scale-95 shadow-2xs"
                >
                  <Camera className="w-4 h-4" />
                  Launch Visualizer
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          THE SCIENCE OF MATTE — SPECIFICATIONS & PERFORMANCE
      ========================================== */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-10 sm:py-14 border-t border-slate-200">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Heading */}
          <div className="lg:col-span-5">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
              The Science of Matte
            </span>
            <h2 className="font-serif-editorial text-3xl sm:text-4xl font-bold text-[#142333] leading-[1.12] mt-1">
              Specifications &
              <br />
              Performance
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-3 max-w-sm leading-relaxed">
              Every can of Accord Royale is precision-milled with micro-ceramic
              particles for ultra-flat light diffusion and lifetime color richness.
            </p>
          </div>

          {/* Right Accordions matching Mockup */}
          <div className="lg:col-span-7 space-y-3">
            {[
              {
                title: 'The Natural Formula',
                subtitle: '(Zero-VOC, bio-based & eco-credentials)',
                content:
                  'Crafted with plant-based binders and pure mineral pigments. Free of hazardous air pollutants (HAPs), alkylphenol ethoxylates (APEOs), and formaldehyde. Emits near-zero emissions (< 2 g/L VOC) for immediate, odor-free room occupancy.',
              },
              {
                title: 'The Coverage & Wear',
                subtitle: '(Single-coat hiding & scrub-resistance)',
                content:
                  'Covers 400–450 sq. ft. per gallon with unyielding opaque hiding. Micro-ceramic beads lock pigment in place, delivering ASTM D2486 Class 1 scrub-resistance—wipe away smudges with a damp microfiber cloth without burnishing.',
              },
              {
                title: 'The Application Craft',
                subtitle: '(Tools, preparation, & coverage advice)',
                content:
                  'Optimized for 3/8" woven microfiber rollers or synthetic angled sash brushes. Integrated high-adhesion primer bonds seamlessly to fresh drywall or previously painted walls without bleed-through. Recoat in 2 hours.',
              },
            ].map((acc, idx) => {
              const isExpanded = expandedAccordion === idx;
              return (
                <div
                  key={acc.title}
                  className="border-b border-slate-300 pb-3.5 transition-colors"
                >
                  <button
                    onClick={() =>
                      setExpandedAccordion(isExpanded ? -1 : idx)
                    }
                    className="w-full flex items-center justify-between text-left py-2 group"
                  >
                    <span className="text-xs sm:text-[14px] font-bold text-[#142333] group-hover:text-[#1B5153] transition-colors">
                      {acc.title}{' '}
                      <span className="font-normal text-slate-500">
                        {acc.subtitle}
                      </span>
                    </span>
                    <span className="text-xl font-light text-slate-400 group-hover:text-[#1B5153] transition-transform duration-200">
                      {isExpanded ? '−' : '+'}
                    </span>
                  </button>

                  {isExpanded && (
                    <div className="pt-2 pb-2 text-xs sm:text-[13.5px] text-slate-600 leading-relaxed animate-in fade-in duration-200">
                      {acc.content}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ==========================================
          TRANSFORMATIONS & REALIZED SPACES
      ========================================== */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-12 sm:py-16 border-t border-slate-200">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Title */}
          <div className="lg:col-span-5">
            <h2 className="font-serif-editorial text-3xl sm:text-4xl font-bold text-[#142333] leading-[1.12]">
              Transformations
              <br />
              & Realized Spaces
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2.5 max-w-sm">
              Explore spaces brought to life with Accord Royale Matte by
              interior designers and discerning homeowners.
            </p>
          </div>

          {/* Right 3 Thumbnail Cards matching Mockup */}
          <div className="lg:col-span-7 grid grid-cols-3 gap-3 sm:gap-4">
            {/* Card 1: Before */}
            <div className="group relative rounded-2xl overflow-hidden aspect-[4/3] bg-slate-200 shadow-sm border border-slate-200">
              <img
                src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80"
                alt="Before renovation"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-108"
                style={{ filter: 'grayscale(70%) contrast(0.9)' }}
              />
              <span className="absolute bottom-2.5 left-2.5 bg-black/60 backdrop-blur-xs text-white text-[10.5px] font-semibold px-2 py-0.5 rounded-md">
                Before
              </span>
            </div>

            {/* Card 2: After (Interior Room with Dark Pine / Forest Mist wall) */}
            <div className="group relative rounded-2xl overflow-hidden aspect-[4/3] bg-slate-200 shadow-sm border border-slate-200">
              <img
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=600&q=80"
                alt="After renovation interior"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-108"
              />
              <div
                className="absolute inset-0 opacity-25 mix-blend-multiply pointer-events-none"
                style={{ backgroundColor: activePalette.hex }}
              />
              <span className="absolute bottom-2.5 left-2.5 bg-[#1B5153]/85 backdrop-blur-xs text-white text-[10.5px] font-semibold px-2 py-0.5 rounded-md">
                After
              </span>
            </div>

            {/* Card 3: After (Craftsman Home exterior / interior) */}
            <div className="group relative rounded-2xl overflow-hidden aspect-[4/3] bg-slate-200 shadow-sm border border-slate-200">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80"
                alt="Finished architectural home"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-108"
              />
              <span className="absolute bottom-2.5 left-2.5 bg-[#1B5153]/85 backdrop-blur-xs text-white text-[10.5px] font-semibold px-2 py-0.5 rounded-md">
                After
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          VIDEO LIGHTBOX MODAL ("Play the Film")
      ========================================== */}
      {filmModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#142333] rounded-3xl max-w-2xl w-full p-6 text-white relative shadow-2xl border border-white/20 animate-in zoom-in-95 duration-200">
            <button
              onClick={() => setFilmModalOpen(false)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white"
            >
              <X className="w-4 h-4" />
            </button>
            <div className="text-xs font-bold uppercase tracking-wider text-[#EAB849] mb-1">
              Short Film
            </div>
            <h3 className="font-serif-editorial text-2xl font-bold">
              The Making of Accord Royale
            </h3>
            <p className="text-xs text-slate-300 mt-1 mb-4">
              Step inside our artisanal pigment lab to discover the secret behind
              velvety, brushstroke-free architectural matte.
            </p>

            {/* Simulated cinematic player */}
            <div className="relative rounded-2xl overflow-hidden aspect-video bg-black flex items-center justify-center border border-white/10">
              <img
                src="/images/accord_room_arches.jpg"
                alt="Film Poster"
                className="w-full h-full object-cover opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-white text-[#142333] flex items-center justify-center shadow-2xl mb-2 hover:scale-110 transition-transform cursor-pointer">
                  <Play className="w-7 h-7 fill-current ml-1" />
                </div>
                <span className="text-xs font-semibold tracking-wide">
                  Click to Stream in 4K HDR (1:45)
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          INTERACTIVE AR / VISUALIZER MODAL
      ========================================== */}
      {visualizerModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/75 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#FAF9F5] rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative">
            <button
              onClick={() => setVisualizerModalOpen(false)}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-200/70 hover:bg-slate-200 flex items-center justify-center text-slate-600"
            >
              <X className="w-4 h-4" />
            </button>
            <span className="text-xs font-bold uppercase tracking-wider text-[#1B5153]">
              AR Studio Camera
            </span>
            <h3 className="font-serif-editorial text-2xl font-bold text-[#142333] mt-1">
              Visualize {activePalette.name} on Your Walls
            </h3>
            <p className="text-xs text-slate-600 mt-1">
              Upload a snapshot of your room to test Accord Royale Matte with
              real-time ambient lighting simulation.
            </p>

            <div className="my-5 relative rounded-2xl overflow-hidden aspect-video border-2 border-dashed border-[#1B5153]/40 bg-[#E4EEEE]/40 flex flex-col items-center justify-center p-6 text-center cursor-pointer hover:border-[#1B5153] transition-colors">
              <Upload className="w-8 h-8 text-[#1B5153] mb-2" />
              <span className="text-xs font-bold text-[#142333]">
                Drop room photo or take camera snap
              </span>
              <span className="text-[11px] text-slate-500 mt-0.5">
                Instant AR wall segmentation
              </span>
            </div>

            <div className="flex items-center justify-between pt-2">
              <div className="flex items-center gap-2">
                <span
                  className="w-4 h-4 rounded-full border border-black/10"
                  style={{ backgroundColor: activePalette.hex }}
                />
                <span className="text-xs font-semibold text-[#142333]">
                  {activePalette.name} ({activePalette.code})
                </span>
              </div>
              <button
                onClick={() => {
                  setVisualizerModalOpen(false);
                  triggerToast(`AR preview generated for ${activePalette.name}!`);
                }}
                className="bg-[#1B5153] hover:bg-[#133C3E] text-white text-xs font-semibold px-5 py-2.5 rounded-full"
              >
                Apply Sample Wall
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
