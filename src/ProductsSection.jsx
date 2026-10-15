import React, { useState } from 'react';
import {
  Sparkles,
  ShieldCheck,
  Award,
  ChevronRight,
  Eye,
  CheckCircle2,
  Droplets,
  ArrowRight,
  X,
  FileText,
} from 'lucide-react';

export const ACCORD_PRODUCTS = [
  {
    id: 'luxury-semi-gloss',
    name: 'Luxury Semi Gloss Emulsion',
    series: 'Platinum Series',
    category: 'Interior & Exterior',
    categoryTab: 'interior',
    isFlagship: true,
    tagline: 'Refined soft sheen finish with 10-year surface durability',
    sheen: 'Semi-Gloss (35-45% Gloss)',
    coverage: '140 - 160 sq.ft / Litre',
    dryingTime: '30 mins (Touch), 4 hrs (Recoat)',
    dilution: '40-50% with clean water',
    packSizes: ['1 L', '4 L', '10 L', '20 L'],
    image: '/images/products/luxury-semi-gloss-emulsion.jpg',
    features: [
      'Stain resistant & 100% washable',
      'Anti-fungal & anti-bacterial barrier',
      'Ultra low VOC & odorless formula',
      'Advanced pure acrylic resin',
    ],
    idealFor: 'Living rooms, master suites, corridors, and premium accent spaces',
  },
  {
    id: 'premium-luxury-emulsion',
    name: 'Premium Luxury Emulsion',
    series: 'Gold Series',
    category: 'Interior & Exterior',
    categoryTab: 'interior',
    tagline: 'Silky smooth rich matte finish with superior opacity',
    sheen: 'Soft Matte (10-15% Gloss)',
    coverage: '130 - 150 sq.ft / Litre',
    dryingTime: '30 mins (Touch), 4 hrs (Recoat)',
    dilution: '40% with clean water',
    packSizes: ['1 L', '4 L', '10 L', '20 L'],
    image: '/images/products/premium-luxury-emulsion.jpg',
    features: [
      'Silky smooth matte elegance',
      'High opacity single-coat coverage',
      'Long-lasting pigment stability',
      'Easy washability',
    ],
    idealFor: 'Bedrooms, dining rooms, ceilings, and modern interiors',
  },
  {
    id: 'exterior-emulsion',
    name: 'Exterior WeatherShield Emulsion',
    series: 'Gold Series',
    category: 'Exterior Wall Care',
    categoryTab: 'exterior',
    tagline: 'Extreme weather, UV and heavy rainfall protection',
    sheen: 'Eggshell Weather-Proof',
    coverage: '110 - 130 sq.ft / Litre',
    dryingTime: '45 mins (Touch), 4-6 hrs (Recoat)',
    dilution: '40% with clean water',
    packSizes: ['1 L', '4 L', '10 L', '20 L'],
    image: '/images/products/exterior-emulsion.jpg',
    features: [
      'Anti-algal and anti-fungal defense',
      'UV cross-linking polymer technology',
      'Resists peeling, chalking & fading',
      '7-Year exterior performance warranty',
    ],
    idealFor: 'Building facades, exterior walls, boundary fences, and balconies',
  },
  {
    id: 'metallica-luster-paint',
    name: 'Metallica Designer Luster Paint',
    series: 'Specialty Collection',
    category: 'Specialty & Metallic',
    categoryTab: 'specialty',
    tagline: 'Shimmering metallic radiance for luxury accent walls',
    sheen: 'High Luster Metallic',
    coverage: '100 - 120 sq.ft / Litre',
    dryingTime: '1 hr (Touch), 6 hrs (Recoat)',
    dilution: 'Ready to use / up to 10% water',
    packSizes: ['500 ml', '1 L', '4 L'],
    image: '/images/products/metallica-luster-paint.jpg',
    features: [
      'Rich metallic micro-pearl pigments',
      'Creates dazzling feature walls',
      'Water-thinnable & eco-safe',
      'Resistant to household stains',
    ],
    idealFor: 'Accent feature walls, niches, pillars, and ceiling medallions',
  },
  {
    id: 'waterproof-cement-paint',
    name: 'Titanium Plus Waterproof Cement Paint',
    series: 'Titanium Plus Heavy Duty',
    category: 'Exterior Masonry',
    categoryTab: 'exterior',
    tagline: 'Heavy-duty 20 Kg waterproof cementitious exterior barrier',
    sheen: 'Mineral Matte Masonry',
    coverage: '50 - 60 sq.ft / Kg (2 coats)',
    dryingTime: 'Water mist curing 2-3 times',
    dilution: '1:1 by weight with water',
    packSizes: ['5 Kg', '20 Kg'],
    image: '/images/products/waterproof-cement-paint.jpg',
    features: [
      'Deep masonry penetration bond',
      'Superior waterproofing resistance',
      'Does not require primer on fresh plaster',
      'Economical heavy-duty protection',
    ],
    idealFor: 'Exterior plaster, cement blocks, brickwork, and boundary walls',
  },
  {
    id: 'texture-coatings-designer',
    name: 'Rustic & Perlina Texture Coatings',
    series: 'Architectural Series',
    category: 'Textured Finishes',
    categoryTab: 'specialty',
    tagline: '25 Kg heavy-bodied artistic wall textures (Rustic, Perlina & Superfine)',
    sheen: 'Sculpted Mineral Texture',
    coverage: '8 - 12 sq.ft / Kg depending on roller pattern',
    dryingTime: '24 hrs full cure',
    dilution: 'Ready to apply with texture roller or trowel',
    packSizes: ['25 Kg Drum'],
    image: '/images/products/texture-coatings-designer.jpg',
    features: [
      'Hides wall imperfections & hairline cracks',
      'High impact & scratch resistance',
      'Wide variety of customized patterns',
      'Flexible acrylic polymer matrix',
    ],
    idealFor: 'Hotel lobbies, executive offices, exterior highlights, and villas',
  },
  {
    id: 'water-thinnable-cement-primer',
    name: 'Water Thinnable Cement Primer',
    series: 'Gold Series Primer',
    category: 'Primers & Base Coats',
    categoryTab: 'primers',
    tagline: 'High-adhesion sealer for fresh cement plaster & masonry',
    sheen: 'Dead Flat Base',
    coverage: '120 - 140 sq.ft / Litre',
    dryingTime: '30 mins (Touch), 4 hrs (Recoat)',
    dilution: '80-100% with water',
    packSizes: ['1 L', '4 L', '10 L', '20 L'],
    image: '/images/products/water-thinnable-cement-primer.jpg',
    features: [
      'Excellent alkali & efflorescence resistance',
      'Seals porous surfaces uniformly',
      'Increases topcoat coverage by 25%',
      'Quick drying interior formula',
    ],
    idealFor: 'Interior fresh plaster, drywall, and primed concrete',
  },
  {
    id: 'exterior-wall-primer',
    name: 'Exterior Wall Primer Deep Seal',
    series: 'Gold Series Primer',
    category: 'Primers & Base Coats',
    categoryTab: 'primers',
    tagline: 'Weatherproof alkali-resistant deep penetrating exterior base coat',
    sheen: 'Penetrating Matte Base',
    coverage: '100 - 120 sq.ft / Litre',
    dryingTime: '45 mins (Touch), 4-6 hrs (Recoat)',
    dilution: '100% with water',
    packSizes: ['1 L', '4 L', '10 L', '20 L'],
    image: '/images/products/exterior-wall-primer.jpg',
    features: [
      'Deep penetrating acrylic formulation',
      'Resists harsh efflorescence and moisture',
      'Anchor bond for exterior emulsions',
      'Prevents patchy discoloration',
    ],
    idealFor: 'New and repainted exterior cement surfaces',
  },
  {
    id: 'wood-filler',
    name: 'Accord Wood Care Filler',
    series: 'Wood Care Series',
    category: 'Surface Prep',
    categoryTab: 'primers',
    tagline: 'Quick drying sandable wood grain & knot defect filler',
    sheen: 'Natural Wood Sandable',
    coverage: 'Subject to crack/knot depth',
    dryingTime: '2 hrs before sanding',
    dilution: 'Ready to use paste',
    packSizes: ['500 g', '1 Kg'],
    image: '/images/products/wood-filler.jpg',
    features: [
      'Does not shrink or crack upon drying',
      'Takes stains, varnishes & paints evenly',
      'Smooth easy sanding finish',
      'Non-flammable water based',
    ],
    idealFor: 'Doors, windows, wooden furniture, and cabinetry prep',
  },
];

export default function ProductsSection({ onOpenProductDetail, onTriggerToast }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedQuickView, setSelectedQuickView] = useState(null);

  const categories = [
    { id: 'all', label: 'All Products (9)' },
    { id: 'interior', label: 'Luxury Interior' },
    { id: 'exterior', label: 'Exterior All-Weather' },
    { id: 'specialty', label: 'Specialty & Textures' },
    { id: 'primers', label: 'Primers & Prep' },
  ];

  const filteredProducts =
    activeCategory === 'all'
      ? ACCORD_PRODUCTS
      : ACCORD_PRODUCTS.filter((p) => p.categoryTab === activeCategory);

  const flagshipProduct = ACCORD_PRODUCTS[0];

  return (
    <section id="products" className="w-full py-14 sm:py-20 relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section Heading Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-[#1B5153]" />
              <span className="text-xs font-bold tracking-wider uppercase text-[#1B5153]">
                Formulated For Longevity • Crafted For Beauty
              </span>
            </div>
            <h2 className="font-serif-editorial text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#142333] leading-tight">
              Signature Paint Collections
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 max-w-xl leading-relaxed">
              Explore Accord’s complete architectural coatings portfolio—from zero-VOC luxury
              interior enamels to high-durability exterior weather barriers and decorative textures.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`text-xs font-semibold px-4 py-2 rounded-full whitespace-nowrap transition-all ${
                  activeCategory === cat.id
                    ? 'bg-[#1B5153] text-white shadow-xs'
                    : 'bg-white border border-slate-200 text-slate-600 hover:border-slate-300 hover:bg-slate-50'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Flagship Product Showcase Banner */}
        <div className="mb-12 bg-gradient-to-br from-[#162637] via-[#1B3547] to-[#12222E] rounded-3xl overflow-hidden text-white shadow-xl border border-slate-800 relative">
          {/* Subtle Background Glow */}
          <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-[radial-gradient(circle_at_70%_50%,rgba(27,81,83,0.4),transparent_70%)] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-10 lg:p-12 relative z-10">
            {/* Left Copy */}
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 bg-[#E4EEEE]/15 backdrop-blur-md border border-white/20 px-3.5 py-1 rounded-full text-xs font-bold text-amber-300">
                <Award className="w-3.5 h-3.5" />
                <span>Flagship Product of the Year</span>
              </div>

              <h3 className="font-serif-editorial text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">
                Luxury Semi Gloss Emulsion
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-xl">
                The crown jewel of our Platinum Series. Engineered with 100% pure acrylic copolymer
                and active Teflon barrier protection. Offers a luminous 40% pearl luster, Class 1
                washability, and a 10-year crack & peel warranty.
              </p>

              {/* 3 Metric Pills */}
              <div className="grid grid-cols-3 gap-3 pt-2 max-w-lg">
                <div className="bg-white/10 rounded-2xl p-3 border border-white/10">
                  <div className="text-[10.5px] text-slate-300">Sheen Index</div>
                  <div className="text-xs sm:text-sm font-bold text-white mt-0.5">35-45% Semi-Gloss</div>
                </div>
                <div className="bg-white/10 rounded-2xl p-3 border border-white/10">
                  <div className="text-[10.5px] text-slate-300">Coverage (2 Coats)</div>
                  <div className="text-xs sm:text-sm font-bold text-white mt-0.5">140-160 sq.ft/L</div>
                </div>
                <div className="bg-white/10 rounded-2xl p-3 border border-white/10">
                  <div className="text-[10.5px] text-slate-300">Film Warranty</div>
                  <div className="text-xs sm:text-sm font-bold text-amber-300 mt-0.5">10 Years</div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-3 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => onOpenProductDetail(flagshipProduct)}
                  className="bg-[#0AA6BB] hover:bg-[#088b9c] text-white font-semibold text-xs sm:text-sm px-6 py-3 rounded-full shadow-lg hover:shadow-cyan-500/25 transition-all active:scale-95 flex items-center gap-2"
                >
                  <span>Explore Flagship Product Page</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => setSelectedQuickView(flagshipProduct)}
                  className="bg-white/10 hover:bg-white/20 text-white font-semibold text-xs sm:text-sm px-5 py-3 rounded-full border border-white/20 transition-all flex items-center gap-1.5"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Quick Specifications</span>
                </button>
              </div>
            </div>

            {/* Right Product Image Visual */}
            <div className="lg:col-span-5 flex justify-center relative">
              <div className="relative group cursor-pointer" onClick={() => onOpenProductDetail(flagshipProduct)}>
                {/* Floating Glow */}
                <div className="w-56 h-56 rounded-full bg-cyan-400/20 blur-3xl absolute inset-0 m-auto pointer-events-none" />

                <img
                  src={flagshipProduct.image}
                  alt={flagshipProduct.name}
                  className="w-64 sm:w-80 h-auto object-contain drop-shadow-[0_25px_35px_rgba(0,0,0,0.5)] transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute -bottom-2 inset-x-4 bg-white/90 backdrop-blur-md text-[#142333] rounded-2xl p-2.5 shadow-lg flex items-center justify-between text-xs border border-white/80">
                  <span className="font-bold">Platinum Series 20L Bucket</span>
                  <span className="text-[#1B5153] font-semibold text-[11px]">Click to view details →</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((prod) => (
            <div
              key={prod.id}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col group"
            >
              {/* Card Image Area with Series Badge */}
              <div className="relative p-6 bg-gradient-to-b from-[#F8FAFC] to-[#F1F5F9] flex items-center justify-center min-h-[220px] overflow-hidden">
                <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-[#142333] border border-slate-200 text-[10.5px] font-bold px-2.5 py-0.5 rounded-full shadow-xs">
                  {prod.series}
                </span>

                {prod.isFlagship && (
                  <span className="absolute top-4 right-4 bg-amber-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-xs">
                    Flagship
                  </span>
                )}

                <img
                  src={prod.image}
                  alt={prod.name}
                  className="h-44 w-auto object-contain drop-shadow-md transition-transform duration-500 group-hover:scale-105"
                />

                {/* Quick View Hover Pill */}
                <button
                  onClick={() => setSelectedQuickView(prod)}
                  className="absolute bottom-3 bg-white/95 hover:bg-white text-[#142333] text-[11px] font-semibold px-3 py-1.5 rounded-full shadow-md border border-slate-200 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1.5"
                >
                  <Eye className="w-3.5 h-3.5 text-[#1B5153]" />
                  <span>Quick Specs</span>
                </button>
              </div>

              {/* Card Body */}
              <div className="p-5 flex flex-col flex-1">
                <div className="text-[11px] font-semibold text-[#1B5153] uppercase tracking-wider mb-1">
                  {prod.category}
                </div>
                <h3 className="font-bold text-base text-[#142333] leading-snug group-hover:text-[#1B5153] transition-colors">
                  {prod.name}
                </h3>
                <p className="mt-1 text-xs text-slate-500 leading-relaxed line-clamp-2">
                  {prod.tagline}
                </p>

                {/* Key Spec Badges */}
                <div className="mt-4 pt-3 border-t border-slate-100 grid grid-cols-2 gap-2 text-[11px]">
                  <div>
                    <span className="text-slate-400 block">Sheen:</span>
                    <span className="font-semibold text-slate-700">{prod.sheen.split('(')[0]}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block">Coverage:</span>
                    <span className="font-semibold text-slate-700">{prod.coverage}</span>
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
                  <button
                    onClick={() => setSelectedQuickView(prod)}
                    className="text-xs font-semibold text-slate-600 hover:text-[#1B5153] transition-colors py-1.5 px-2"
                  >
                    View Specs
                  </button>

                  {prod.isFlagship ? (
                    <button
                      onClick={() => onOpenProductDetail(prod)}
                      className="bg-[#1B5153] hover:bg-[#133C3E] text-white text-xs font-semibold px-4 py-2 rounded-full shadow-xs transition-all active:scale-95 flex items-center gap-1"
                    >
                      <span>Product Page</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  ) : (
                    <button
                      onClick={() => {
                        onTriggerToast(`Selected ${prod.name} for dealer inquiry.`);
                        setSelectedQuickView(prod);
                      }}
                      className="bg-slate-100 hover:bg-slate-200 text-[#142333] text-xs font-semibold px-3.5 py-2 rounded-full transition-colors flex items-center gap-1"
                    >
                      <span>Inquire</span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Specs Modal */}
      {selectedQuickView && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="bg-[#FAF9F5] rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedQuickView(null)}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-200/80 hover:bg-slate-200 flex items-center justify-center text-slate-600"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-4 mb-4">
              <img
                src={selectedQuickView.image}
                alt={selectedQuickView.name}
                className="w-20 h-20 object-contain drop-shadow"
              />
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#1B5153] bg-[#E4EEEE] px-2 py-0.5 rounded">
                  {selectedQuickView.series}
                </span>
                <h3 className="font-serif-editorial text-xl font-bold text-[#142333] mt-1">
                  {selectedQuickView.name}
                </h3>
                <p className="text-xs text-slate-500">{selectedQuickView.category}</p>
              </div>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed mb-4">
              {selectedQuickView.tagline}
            </p>

            <div className="space-y-2 mb-5">
              <h4 className="text-xs font-bold text-[#142333] uppercase tracking-wider">
                Key Specifications:
              </h4>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="p-2.5 bg-white rounded-xl border border-slate-100">
                  <div className="text-slate-400 text-[10.5px]">Sheen Finish</div>
                  <div className="font-bold text-slate-800">{selectedQuickView.sheen}</div>
                </div>
                <div className="p-2.5 bg-white rounded-xl border border-slate-100">
                  <div className="text-slate-400 text-[10.5px]">Coverage</div>
                  <div className="font-bold text-slate-800">{selectedQuickView.coverage}</div>
                </div>
                <div className="p-2.5 bg-white rounded-xl border border-slate-100">
                  <div className="text-slate-400 text-[10.5px]">Drying Time</div>
                  <div className="font-bold text-slate-800">{selectedQuickView.dryingTime}</div>
                </div>
                <div className="p-2.5 bg-white rounded-xl border border-slate-100">
                  <div className="text-slate-400 text-[10.5px]">Water Dilution</div>
                  <div className="font-bold text-slate-800">{selectedQuickView.dilution}</div>
                </div>
              </div>
            </div>

            <div className="mb-5">
              <h4 className="text-xs font-bold text-[#142333] uppercase tracking-wider mb-2">
                Available Packaging:
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedQuickView.packSizes.map((sz) => (
                  <span
                    key={sz}
                    className="text-xs font-semibold px-3 py-1 bg-white border border-slate-200 rounded-full text-slate-700"
                  >
                    {sz}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex gap-3">
              {selectedQuickView.isFlagship ? (
                <button
                  onClick={() => {
                    const prod = selectedQuickView;
                    setSelectedQuickView(null);
                    onOpenProductDetail(prod);
                  }}
                  className="flex-1 bg-[#1B5153] hover:bg-[#133C3E] text-white text-xs font-semibold py-2.5 rounded-full transition-all text-center"
                >
                  Go to Flagship Product Page →
                </button>
              ) : (
                <button
                  onClick={() => {
                    onTriggerToast(`Inquiry sent for ${selectedQuickView.name}. We will contact you soon!`);
                    setSelectedQuickView(null);
                  }}
                  className="flex-1 bg-[#1B5153] hover:bg-[#133C3E] text-white text-xs font-semibold py-2.5 rounded-full transition-all text-center"
                >
                  Request Dealer Quote
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
