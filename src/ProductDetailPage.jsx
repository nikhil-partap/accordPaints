import React, { useState } from 'react';
import {
  ArrowLeft,
  ShieldCheck,
  Sparkles,
  Droplets,
  Award,
  Clock,
  CheckCircle2,
  Share2,
  FileText,
  Calculator,
  PhoneCall,
  Star,
} from 'lucide-react';

export default function ProductDetailPage({ product, onBackToHome, onSelectColor }) {
  const currentProduct = product || {
    id: 'luxury-semi-gloss',
    name: 'Luxury Semi Gloss Emulsion',
    series: 'Platinum Series',
    category: 'Interior & Exterior Wall Protection',
    isFlagship: true,
    tagline: 'Refined soft sheen finish with 10-year surface durability',
    sheen: 'Semi-Gloss (35-45% Gloss)',
    coverage: '140 – 160 sq.ft per Litre',
    dryingTime: '30 mins (Touch), 4 hrs (Recoat)',
    dilution: '40-50% with clean water',
    packSizes: ['1 L', '4 L', '10 L', '20 L'],
    image: '/images/products/luxury-semi-gloss-emulsion.jpg',
  };

  const [selectedPack, setSelectedPack] = useState('4 L');
  const [roomArea, setRoomArea] = useState(350);
  const [activeTab, setActiveTab] = useState('specs'); // 'specs' | 'application' | 'finishes' | 'safety'
  const [quoteSubmitted, setQuoteSubmitted] = useState(false);
  const [toast, setToast] = useState(null);

  const triggerToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(null), 3000);
  };

  // 1 Litre covers ~150 sq ft in 2 coats
  const litersNeeded = Math.ceil((roomArea * 2) / 150);

  const packSizes = [
    { size: '1 L', desc: 'Touch-ups & Small Accents', price: '₹480' },
    { size: '4 L', desc: 'Single Room (12x12 ft)', price: '₹1,820', popular: true },
    { size: '10 L', desc: 'Master Suite & Hallway', price: '₹4,350' },
    { size: '20 L', desc: 'Full Home / Contractor Pack', price: '₹8,200' },
  ];

  const techSpecs = [
    { label: 'Product Code', value: currentProduct.id === 'luxury-semi-gloss' ? 'AP-PLT-9941' : `AP-${(currentProduct.id || 'PROD').toUpperCase().slice(0, 8)}` },
    { label: 'Base Resin', value: '100% Pure Acrylic Copolymer' },
    { label: 'Sheen Level', value: currentProduct.sheen || 'Semi-Gloss (35 - 45% at 60° angle)' },
    { label: 'Coverage (2 Coats)', value: currentProduct.coverage || '140 – 160 sq.ft per Litre' },
    { label: 'Touch Dry Time', value: currentProduct.dryingTime ? currentProduct.dryingTime.split(',')[0] : '25 – 35 minutes @ 30°C' },
    { label: 'Recoat Interval', value: currentProduct.dryingTime && currentProduct.dryingTime.includes('Recoat') ? currentProduct.dryingTime.split(',')[1] : '3 – 4 hours' },
    { label: 'VOC Content', value: '< 12 g/L (Ultra Low VOC Eco-Standard)' },
    { label: 'Washability', value: 'Class 1 Scrub Resistance (> 10,000 scrubs)' },
    { label: 'Dilution Ratio', value: currentProduct.dilution || '40% – 50% clean municipal water' },
    { label: 'Flash Point', value: 'Non-Flammable (Water-based)' },
    { label: 'Recommended Undercoat', value: 'Accord Water Thinnable Cement Primer' },
    { label: 'Warranty', value: currentProduct.series?.includes('Platinum') ? '10-Year Film Integrity & Peel Guarantee' : '7-Year Film Integrity & Peel Guarantee' },
  ];

  const suggestedPalettes = [
    { name: 'Forest Mist', hex: '#256666', code: '#0AA6BB' },
    { name: 'Golden Hour', hex: '#EAB849', code: '#FK9CF0' },
    { name: 'Terracotta Dream', hex: '#BE5C45', code: '#BG3660' },
    { name: 'Deep Pine', hex: '#182C49', code: '#B41020' },
  ];

  return (
    <div className="min-h-screen bg-[#FAF9F5] text-[#142333] font-sans selection:bg-[#1B5153] selection:text-white">
      {/* Toast Notification */}
      {toast && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#142333] text-white px-5 py-3 rounded-2xl shadow-2xl border border-white/20 flex items-center gap-3 text-sm animate-bounce">
          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>{toast}</span>
        </div>
      )}

      {/* Top Banner Navigation */}
      <div className="sticky top-0 z-40 bg-[#FAF9F5]/90 backdrop-blur-md border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-3.5 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={onBackToHome}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#142333] hover:text-[#1B5153] transition-colors py-1.5 px-3 rounded-full hover:bg-slate-200/50 cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Landing Page</span>
            </button>
            <div className="h-4 w-px bg-slate-300 hidden sm:block" />
            <img
              src="/images/brand/accord-logo-mockup.png"
              alt="Accord Paints"
              onClick={onBackToHome}
              className="h-6 w-auto cursor-pointer hover:opacity-80 transition-opacity hidden sm:block"
            />
          </div>

          <div className="flex items-center gap-3">
            <span className="hidden sm:inline-block text-xs font-semibold px-3 py-1 rounded-full bg-[#E4EEEE] text-[#1B5153]">
              {currentProduct.series || 'Platinum Series'} • {currentProduct.isFlagship ? 'Flagship Demo' : 'Official Product'}
            </span>
            <button
              onClick={() => {
                if (navigator.clipboard) {
                  navigator.clipboard.writeText(window.location.href);
                  triggerToast('Product link copied to clipboard!');
                }
              }}
              className="w-8 h-8 rounded-full border border-slate-300 flex items-center justify-center text-slate-600 hover:bg-white transition-colors cursor-pointer"
              title="Share Product"
            >
              <Share2 className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Product Showcase Section */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-8 sm:py-12">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-slate-500 mb-6">
          <button onClick={onBackToHome} className="hover:underline cursor-pointer">Home</button>
          <span>/</span>
          <button onClick={onBackToHome} className="hover:underline cursor-pointer">Products</button>
          <span>/</span>
          <span>{currentProduct.category || 'Emulsion Paints'}</span>
          <span>/</span>
          <span className="text-[#142333] font-semibold">{currentProduct.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Product Imagery & Badges */}
          <div className="lg:col-span-6 space-y-6">
            {/* Primary Large Image Frame */}
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-b from-white via-slate-50 to-[#E4EEEE]/50 border border-slate-200 shadow-xl p-8 sm:p-12 flex items-center justify-center group">
              {/* Decorative Subtle Radial Glow */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(27,81,83,0.08),transparent_70%)] pointer-events-none" />

              {/* Series Badge Floating Top-Left */}
              <div className="absolute top-5 left-5 bg-[#1B5153] text-white text-[11px] font-bold tracking-wider uppercase px-3 py-1 rounded-full shadow-md flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-amber-300" />
                {currentProduct.series || 'Platinum Series'}
              </div>

              {/* Eco Star Badge Top-Right */}
              <div className="absolute top-5 right-5 bg-white/90 backdrop-blur-md border border-slate-200 text-[#142333] text-[11px] font-bold px-3 py-1 rounded-full shadow-sm flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-[#1B5153]" />
                Zero-VOC Safe
              </div>

              {/* Bucket Photo with Realistic Drop Shadow & Hover Zoom */}
              <img
                src={currentProduct.image || "/images/products/luxury-semi-gloss-emulsion.jpg"}
                alt={currentProduct.name}
                className="w-full max-w-[340px] sm:max-w-[400px] h-auto object-contain drop-shadow-[0_20px_35px_rgba(15,23,42,0.25)] transition-transform duration-500 group-hover:scale-105"
              />

              {/* Bottom Subtle Sheen Strip */}
              <div className="absolute bottom-4 inset-x-8 bg-white/80 backdrop-blur-md rounded-2xl p-2.5 border border-white/60 flex items-center justify-between text-xs text-slate-700">
                <span className="font-semibold text-[#142333]">Sheen Level:</span>
                <span className="text-[#1B5153] font-bold">{currentProduct.sheen || 'Semi-Gloss (40% Soft Luster)'}</span>
                <span className="text-[11px] text-slate-500">Washable Finish</span>
              </div>
            </div>

            {/* 4 Feature Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { icon: ShieldCheck, title: '10-Yr Guarantee', sub: 'Peel-proof film' },
                { icon: Droplets, title: 'Washable Class 1', sub: '>10,000 scrubs' },
                { icon: Sparkles, title: 'Anti-Bacterial', sub: 'Silver-ion shield' },
                { icon: Clock, title: 'Fast Recoat', sub: '3-4 hrs dry' },
              ].map((feat, idx) => {
                const Icon = feat.icon;
                return (
                  <div
                    key={idx}
                    className="bg-white rounded-2xl p-3.5 border border-slate-100 shadow-xs flex flex-col items-center text-center hover:border-[#1B5153]/30 transition-colors"
                  >
                    <div className="w-8 h-8 rounded-full bg-[#E4EEEE] text-[#1B5153] flex items-center justify-center mb-1.5">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="text-xs font-bold text-[#142333]">{feat.title}</div>
                    <div className="text-[10.5px] text-slate-500 mt-0.5">{feat.sub}</div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Product Info, Size Selector, Calculator & Action */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-bold tracking-wider uppercase text-[#1B5153] bg-[#E4EEEE] px-2.5 py-0.5 rounded-md">
                  Premium Architectural Paint
                </span>
                <div className="flex items-center text-amber-500 text-xs gap-1 ml-auto">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  <span className="font-bold text-slate-800">4.9</span>
                  <span className="text-slate-400">(148 reviews)</span>
                </div>
              </div>

              <h1 className="font-serif-editorial text-3xl sm:text-4xl font-bold text-[#142333] leading-tight">
                {currentProduct.name}
              </h1>
              <p className="mt-1 text-xs sm:text-sm font-semibold text-slate-500">
                {currentProduct.series || 'Platinum Series'} • {currentProduct.category || 'Interior & Exterior Wall Protection'}
              </p>

              <p className="mt-3.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                {currentProduct.tagline || 'Engineered with high-grade pure acrylic resin and anti-bacterial agents, Accord’s flagship Luxury Semi Gloss delivers an opulent pearl luster finish. Highly washable and fortified against scuffs, stains, and moisture in busy households and architect-designed spaces.'}
              </p>
            </div>

            {/* Pack Size Selector */}
            <div className="border-t border-slate-200/80 pt-5">
              <div className="flex items-center justify-between mb-2.5">
                <span className="text-xs font-bold text-[#142333] uppercase tracking-wider">
                  Select Pack Size:
                </span>
                <span className="text-xs text-slate-500">
                  Selected: <strong className="text-[#1B5153]">{selectedPack}</strong>
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {packSizes.map((pack) => (
                  <button
                    key={pack.size}
                    onClick={() => {
                      setSelectedPack(pack.size);
                      triggerToast(`Selected ${pack.size} pack size`);
                    }}
                    className={`relative p-3 rounded-2xl border text-left transition-all ${
                      selectedPack === pack.size
                        ? 'border-[#1B5153] bg-[#E4EEEE]/40 ring-2 ring-[#1B5153] shadow-xs'
                        : 'border-slate-200 bg-white hover:border-slate-300'
                    }`}
                  >
                    {pack.popular && (
                      <span className="absolute -top-2 right-2 bg-amber-500 text-white text-[9.5px] font-bold px-1.5 py-0.2 rounded-full">
                        Popular
                      </span>
                    )}
                    <div className="font-bold text-sm text-[#142333]">{pack.size}</div>
                    <div className="text-[10px] text-slate-500 leading-tight mt-0.5">{pack.desc}</div>
                    <div className="font-semibold text-xs text-[#1B5153] mt-2">{pack.price}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Interactive Paint Quantity Calculator Card */}
            <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200 shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <Calculator className="w-4 h-4 text-[#1B5153]" />
                <h3 className="font-bold text-xs sm:text-sm text-[#142333]">
                  Accord Smart Paint Coverage Estimator
                </h3>
              </div>

              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-xs text-slate-600 mb-1">
                    <span>Total Carpet Wall Area:</span>
                    <span className="font-bold text-[#142333]">{roomArea} sq.ft</span>
                  </div>
                  <input
                    type="range"
                    min="100"
                    max="2000"
                    step="50"
                    value={roomArea}
                    onChange={(e) => setRoomArea(Number(e.target.value))}
                    className="w-full accent-[#1B5153] cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-slate-400 mt-0.5">
                    <span>100 sq.ft (Small Accent)</span>
                    <span>1,000 sq.ft (2BHK)</span>
                    <span>2,000 sq.ft (Villa)</span>
                  </div>
                </div>

                <div className="bg-[#FAF9F5] rounded-xl p-3 flex items-center justify-between border border-slate-100">
                  <div>
                    <div className="text-[11px] text-slate-500">Estimated Requirement (2 Coats):</div>
                    <div className="font-bold text-base text-[#1B5153]">
                      Approx. {litersNeeded} Litres Needed
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      triggerToast(`Applied estimate: ${litersNeeded}L required for ${roomArea} sq.ft`);
                    }}
                    className="bg-[#1B5153] hover:bg-[#133C3E] text-white text-xs font-semibold px-3 py-1.5 rounded-full transition-colors"
                  >
                    Apply Estimate
                  </button>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                onClick={() => {
                  triggerToast('Quote requested! An Accord Paints technical dealer will contact you.');
                  setQuoteSubmitted(true);
                }}
                className="flex-1 bg-[#1B5153] hover:bg-[#133C3E] text-white font-semibold text-xs sm:text-sm py-3 px-6 rounded-full shadow-md hover:shadow-lg transition-all active:scale-95 flex items-center justify-center gap-2"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Request Dealer Quote & Samples</span>
              </button>

              <button
                onClick={() => {
                  triggerToast('Downloading Accord Luxury Semi Gloss Technical Data Sheet (PDF)...');
                }}
                className="bg-transparent hover:bg-slate-100 text-[#142333] font-semibold text-xs sm:text-sm py-3 px-5 rounded-full border border-slate-300 transition-colors flex items-center justify-center gap-1.5"
              >
                <FileText className="w-4 h-4 text-slate-500" />
                <span>Download TDS</span>
              </button>
            </div>

            {/* Popular Matching Color Shades */}
            <div className="border-t border-slate-200/80 pt-5">
              <span className="text-xs font-bold text-[#142333] uppercase tracking-wider block mb-2.5">
                Recommended 2026 Color Tints for this Base:
              </span>
              <div className="flex items-center gap-3">
                {suggestedPalettes.map((pal) => (
                  <button
                    key={pal.name}
                    onClick={() => {
                      triggerToast(`Selected ${pal.name} (${pal.code}) tint`);
                      if (onSelectColor) onSelectColor(pal);
                    }}
                    className="group flex flex-col items-center gap-1.5 text-center focus:outline-none"
                    title={`Tint with ${pal.name}`}
                  >
                    <div
                      className="w-10 h-10 rounded-full shadow-md group-hover:scale-110 transition-transform ring-2 ring-white border border-slate-300"
                      style={{ backgroundColor: pal.hex }}
                    />
                    <span className="text-[10px] font-semibold text-slate-700 group-hover:text-[#1B5153]">
                      {pal.name}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Tabbed Technical Specifications & Application Guides */}
        <div className="mt-14 border-t border-slate-200 pt-10">
          <div className="flex border-b border-slate-200 gap-4 sm:gap-8 overflow-x-auto no-scrollbar">
            {[
              { id: 'specs', label: 'Technical Specifications' },
              { id: 'application', label: 'Application & Wall Prep' },
              { id: 'finishes', label: 'Finish Comparison' },
              { id: 'safety', label: 'Health & Environmental' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`pb-3 font-semibold text-xs sm:text-sm border-b-2 whitespace-nowrap transition-colors ${
                  activeTab === tab.id
                    ? 'border-[#1B5153] text-[#1B5153]'
                    : 'border-transparent text-slate-500 hover:text-slate-800'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="pt-6">
            {activeTab === 'specs' && (
              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs">
                <h3 className="font-bold text-sm sm:text-base text-[#142333] mb-4">
                  Accord Paints Platinum Technical Data
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {techSpecs.map((item, idx) => (
                    <div key={idx} className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                      <div className="text-[11px] font-medium text-slate-500">{item.label}</div>
                      <div className="text-xs sm:text-[13px] font-bold text-[#142333] mt-0.5">
                        {item.value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'application' && (
              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-4">
                <h3 className="font-bold text-sm sm:text-base text-[#142333]">
                  Step-by-Step Professional Application Guide
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                    <span className="w-6 h-6 rounded-full bg-[#1B5153] text-white text-xs font-bold flex items-center justify-center mb-2">
                      1
                    </span>
                    <h4 className="font-bold text-xs sm:text-sm text-[#142333]">Surface Preparation</h4>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      Sand surface with emery paper 180 to remove loose paint, chalk, and dirt. Ensure masonry is completely cured and dry (moisture content below 10%).
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                    <span className="w-6 h-6 rounded-full bg-[#1B5153] text-white text-xs font-bold flex items-center justify-center mb-2">
                      2
                    </span>
                    <h4 className="font-bold text-xs sm:text-sm text-[#142333]">Primer Application</h4>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      Apply 1 coat of Accord Water Thinnable Cement Primer diluted 1:1 with clean water. Allow 4 hours to dry thoroughly before putty or topcoat.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                    <span className="w-6 h-6 rounded-full bg-[#1B5153] text-white text-xs font-bold flex items-center justify-center mb-2">
                      3
                    </span>
                    <h4 className="font-bold text-xs sm:text-sm text-[#142333]">Topcoat Emulsion</h4>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      Dilute Accord Luxury Semi Gloss with 40-50% water. Apply 2 uniform coats using a high-density roller or nylon bristle brush with 4 hours recoat time.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'finishes' && (
              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs">
                <h3 className="font-bold text-sm sm:text-base text-[#142333] mb-3">
                  Accord Paints Sheen & Finish Spectrum
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
                  {[
                    { name: 'Dead Matte', sheen: '0 - 5%', desc: 'Absorbs all light, hides plaster bumps, zero glare.' },
                    { name: 'Eggshell', sheen: '10 - 20%', desc: 'Velvety sheen with balanced scrub resistance.' },
                    { name: 'Semi-Gloss (This Product)', sheen: '35 - 45%', desc: 'Lustrous, radiant soft shine, highest scrub durability, stain repellent.' },
                    { name: 'High Gloss', sheen: '70%+', desc: 'Mirror-like reflection, primarily for metal trim and cabinetry.' },
                  ].map((f, idx) => (
                    <div
                      key={idx}
                      className={`p-3.5 rounded-xl border text-left ${
                        idx === 2 ? 'border-[#1B5153] bg-[#E4EEEE]/30 ring-1 ring-[#1B5153]' : 'border-slate-100 bg-slate-50'
                      }`}
                    >
                      <div className="text-xs font-bold text-[#142333]">{f.name}</div>
                      <div className="text-[11px] font-semibold text-[#1B5153] mt-0.5">{f.sheen}</div>
                      <div className="text-[11px] text-slate-600 mt-1 leading-relaxed">{f.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'safety' && (
              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-3">
                <h3 className="font-bold text-sm sm:text-base text-[#142333]">
                  Eco-Certified & Family Safe Standards
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Accord Paints formulation is 100% free of heavy metals (Lead, Mercury, Chromium, Arsenic).
                  Compliant with VOC standards (&lt;12 g/L). Emits virtually zero odor during and after drying,
                  making it safe for children’s nurseries, healthcare spaces, and inhabited homes.
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="text-[11px] font-semibold bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full border border-emerald-200">
                    Lead-Free Certified
                  </span>
                  <span className="text-[11px] font-semibold bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full border border-emerald-200">
                    Zero Formaldehyde
                  </span>
                  <span className="text-[11px] font-semibold bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full border border-emerald-200">
                    Non-Toxic Waterborne Matrix
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Bottom Back To Landing Page Banner */}
        <div className="mt-12 bg-gradient-to-r from-[#1B5153] to-[#142333] rounded-3xl p-6 sm:p-8 text-white flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl">
          <div>
            <h3 className="font-serif-editorial text-xl sm:text-2xl font-bold">
              Looking for our full color palettes?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              Explore 2026 trending swatches, room visualizer, and before/after transformations.
            </p>
          </div>
          <button
            onClick={onBackToHome}
            className="bg-white hover:bg-slate-100 text-[#142333] font-semibold text-xs sm:text-sm px-6 py-2.5 rounded-full transition-all active:scale-95 shrink-0"
          >
            Back to Landing Page
          </button>
        </div>
      </div>
    </div>
  );
}
