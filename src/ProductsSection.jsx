import React, { useState } from 'react';
import {
  Award,
  ChevronRight,
  Eye,
  ArrowRight,
  X,
} from 'lucide-react';
import { ACCORD_PRODUCTS } from './data/products';

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
                  onClick={() => onOpenProductDetail(prod)}
                  className="h-44 w-auto object-contain drop-shadow-md transition-transform duration-500 group-hover:scale-105 cursor-pointer"
                />

                {/* Quick View Hover Pill */}
                <button
                  onClick={() => setSelectedQuickView(prod)}
                  className="absolute bottom-3 bg-white/95 hover:bg-white text-[#142333] text-[11px] font-semibold px-3 py-1.5 rounded-full shadow-md border border-slate-200 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1.5 cursor-pointer"
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
                <h3
                  onClick={() => onOpenProductDetail(prod)}
                  className="font-bold text-base text-[#142333] leading-snug group-hover:text-[#1B5153] transition-colors cursor-pointer"
                >
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
                    className="text-xs font-semibold text-slate-600 hover:text-[#1B5153] transition-colors py-1.5 px-2 cursor-pointer"
                  >
                    View Specs
                  </button>

                  <button
                    onClick={() => onOpenProductDetail(prod)}
                    className="bg-[#1B5153] hover:bg-[#133C3E] text-white text-xs font-semibold px-3.5 py-1.5 rounded-full shadow-xs transition-all active:scale-95 flex items-center gap-1 cursor-pointer"
                  >
                    <span>Product Page</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
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
              <button
                onClick={() => {
                  const prod = selectedQuickView;
                  setSelectedQuickView(null);
                  onOpenProductDetail(prod);
                }}
                className="flex-1 bg-[#1B5153] hover:bg-[#133C3E] text-white text-xs font-semibold py-2.5 rounded-full transition-all text-center flex items-center justify-center gap-1.5 shadow-md cursor-pointer"
              >
                <span>Open Full Product Page</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => {
                  onTriggerToast(`Inquiry sent for ${selectedQuickView.name}. An Accord Paints dealer will contact you.`);
                  setSelectedQuickView(null);
                }}
                className="bg-slate-100 hover:bg-slate-200 text-[#142333] text-xs font-semibold px-4 py-2.5 rounded-full transition-colors cursor-pointer"
              >
                Inquire
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
