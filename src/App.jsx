import React, { useState, useEffect, useRef } from 'react';
import {
  ChevronDown,
  ChevronRight,
  Leaf,
  Palette,
  Sparkles,
  Droplets,
  HeartHandshake,
  X,
  Menu,
  Upload,
  MoveHorizontal,
  ShieldCheck,
  ArrowRight,
} from 'lucide-react';
import ProductPage from './ProductPage.jsx';
import ProductsSection from './ProductsSection';
import ProductDetailPage from './ProductDetailPage';
import { ACCORD_PRODUCTS, getProductById } from './data/products';

const Instagram = ({ className = 'w-3.5 h-3.5' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const Youtube = ({ className = 'w-3.5 h-3.5' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
    <path d="m10 15 5-3-5-3z" fill="currentColor" />
  </svg>
);

const Facebook = ({ className = 'w-3.5 h-3.5' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

// ==========================================
// CUSTOM HOOKS FOR SMOOTH SCROLL & PARALLAX
// ==========================================

function useScrollMetrics() {
  const [scrollY, setScrollY] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let ticking = false;
    const updateScroll = () => {
      const currentScrollY = window.scrollY;
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      setScrollY(currentScrollY);
      setScrollProgress(maxScroll > 0 ? (currentScrollY / maxScroll) * 100 : 0);
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScroll);
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    updateScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return { scrollY, scrollProgress };
}

function Reveal({
  children,
  delay = 0,
  direction = 'up',
  className = '',
  threshold = 0.14,
}) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold, rootMargin: '0px 0px -40px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  const getTransform = () => {
    if (isVisible) return 'translate3d(0, 0, 0) scale(1)';
    switch (direction) {
      case 'up':
        return 'translate3d(0, 36px, 0) scale(0.985)';
      case 'down':
        return 'translate3d(0, -36px, 0) scale(0.985)';
      case 'left':
        return 'translate3d(40px, 0, 0) scale(0.985)';
      case 'right':
        return 'translate3d(-40px, 0, 0) scale(0.985)';
      default:
        return 'translate3d(0, 28px, 0)';
    }
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: getTransform(),
        transition: `opacity 0.85s cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms, transform 0.85s cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms`,
        willChange: 'opacity, transform',
      }}
    >
      {children}
    </div>
  );
}

// ==========================================
// CUSTOM SVG ILLUSTRATIONS & LOGOS
// ==========================================

const AccordLogo = ({ className = 'w-8 h-8' }) => (
  <svg
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Red/Coral Left Ribbon */}
    <path
      d="M23.5 5L8 40H16.5L27.5 14L23.5 5Z"
      fill="#E04F44"
    />
    {/* Green Top Accent */}
    <path
      d="M23.5 5L29 17.5L33 11L26.5 5H23.5Z"
      fill="#389E56"
    />
    {/* Golden Yellow Right Diagonal */}
    <path
      d="M26 11L39.5 40H31L21.5 19.5L26 11Z"
      fill="#F3B738"
    />
    {/* Blue Crossbar Swoop */}
    <path
      d="M14.5 29.5L33.5 24.5L36.5 31.5L11.5 36.5L14.5 29.5Z"
      fill="#2D85C5"
    />
  </svg>
);

const QuizCanAndBrushIllustration = () => (
  <svg
    viewBox="0 0 200 165"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-36 sm:w-44 h-auto select-none drop-shadow-md"
  >
    {/* Floor Paint Splatters */}
    <ellipse cx="95" cy="144" rx="72" ry="12" fill="#D5E3E3" />
    <path
      d="M28 138C18 135 15 128 25 126C35 124 46 132 52 136C42 140 34 140 28 138Z"
      fill="#D97254"
    />
    <circle cx="18" cy="120" r="3.5" fill="#D97254" />
    <circle cx="42" cy="148" r="4" fill="#2A6F71" />
    <path
      d="M52 145C68 140 92 142 108 147C92 152 65 151 52 145Z"
      fill="#E8B647"
    />
    <circle cx="158" cy="144" r="5" fill="#D97254" />
    <circle cx="168" cy="134" r="3" fill="#1B5153" />

    {/* Paint Can Tilted Slightly */}
    <g transform="rotate(-4 86 90)">
      {/* Bail Handle */}
      <path
        d="M36 56C16 74 18 112 42 122"
        stroke="#64748B"
        strokeWidth="2.5"
        fill="none"
      />
      {/* Cylinder */}
      <path
        d="M40 42H124L119 134C119 140 101 145 82 145C63 145 45 140 45 134L40 42Z"
        fill="#F8FAFC"
        stroke="#475569"
        strokeWidth="2"
      />
      {/* Terracotta & Teal Swirl on Can */}
      <path
        d="M42 66C66 58 98 62 122 68L119 124C96 132 66 132 45 124L42 66Z"
        fill="#E2E8F0"
      />
      <path
        d="M43 85C62 75 78 95 120 82L119 126C95 133 65 133 45 126L43 85Z"
        fill="#D97254"
        opacity="0.85"
      />
      {/* Dark Teal Label */}
      <rect
        x="55"
        y="66"
        width="54"
        height="44"
        rx="4"
        fill="#1B5153"
        stroke="#0F172A"
        strokeWidth="1.5"
      />
      <text
        x="82"
        y="86"
        textAnchor="middle"
        fill="#FFFFFF"
        fontFamily="Plus Jakarta Sans, sans-serif"
        fontWeight="700"
        fontSize="10.5"
      >
        Accord
      </text>
      <text
        x="82"
        y="99"
        textAnchor="middle"
        fill="#E2E8F0"
        fontFamily="Plus Jakarta Sans, sans-serif"
        fontWeight="600"
        fontSize="9.5"
      >
        Paints
      </text>

      {/* Top Rim & Orange Paint Inside */}
      <ellipse
        cx="82"
        cy="42"
        rx="42"
        ry="9"
        fill="#E2E8F0"
        stroke="#475569"
        strokeWidth="2"
      />
      <ellipse cx="82" cy="42" rx="36" ry="6" fill="#D97254" />
      {/* Paint Drip over Rim */}
      <path
        d="M48 45C52 58 58 64 62 55C65 49 69 59 73 59C77 59 79 48 84 48"
        fill="#D97254"
      />
    </g>

    {/* Wooden Paintbrush Standing on Right */}
    <g transform="rotate(8 136 88)">
      {/* Wooden Handle */}
      <path
        d="M130 22C130 16 139 16 139 22L144 82H125L130 22Z"
        fill="#C87D4B"
        stroke="#334155"
        strokeWidth="2"
      />
      <circle cx="134.5" cy="27" r="2" fill="#334155" />
      {/* Metal Ferrule */}
      <rect
        x="122"
        y="82"
        width="25"
        height="16"
        rx="2"
        fill="#CBD5E1"
        stroke="#334155"
        strokeWidth="2"
      />
      <line x1="124" y1="87" x2="145" y2="87" stroke="#64748B" strokeWidth="1.5" />
      {/* Bristles */}
      <path
        d="M122 98H147L151 134C140 137 128 137 118 134L122 98Z"
        fill="#243B53"
        stroke="#334155"
        strokeWidth="2"
      />
      {/* Wet Teal/Gold Paint Tip on Bristles */}
      <path
        d="M120 118C128 114 140 116 149 118L151 134C140 137 128 137 118 134L120 118Z"
        fill="#2A6F71"
      />
      <path
        d="M118 128C128 125 140 126 150 128L151 134C140 137 128 137 118 134L118 128Z"
        fill="#E8B647"
      />
    </g>
  </svg>
);

// ==========================================
// DATA DEFINITIONS MATCHING THE IMAGE
// ==========================================

const TRENDING_PALETTES = [
  {
    id: 'forest-mist',
    name: 'Forest Mist',
    code: '#0AA6BB',
    swatchHex: '#256666',
    roomWallHex: '#256666',
    description: 'Deep botanical teal with calming, grounded undertones.',
    roomImage:
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'golden-hour',
    name: 'Golden Hour',
    code: '#FK9CF0',
    swatchHex: '#EAB849',
    roomWallHex: '#EAB849',
    description: 'Sunlit ochre warmth that brings effortless joy to living spaces.',
    roomImage:
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'terracotta-dream',
    name: 'Terracotta Dream',
    code: '#BG3660',
    swatchHex: '#BE5C45',
    roomWallHex: '#BE5C45',
    description: 'Earthy artisanal clay inspired by sun-baked Mediterranean villas.',
    roomImage:
      'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'deep-pine',
    name: 'Deep Pine',
    code: '#B4 1020',
    swatchHex: '#182C49',
    roomWallHex: '#182C49',
    description: 'Architectural midnight navy for dramatic, cozy statement walls.',
    roomImage:
      'https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'calm-sea',
    name: 'Calm Sea',
    code: '#2B5B60',
    swatchHex: '#35696E',
    roomWallHex: '#35696E',
    description: 'Tranquil coastal slate designed for restful bedrooms and studies.',
    roomImage:
      'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'sandstone',
    name: 'Sandstone',
    code: '#E3B76B',
    swatchHex: '#DFB66C',
    roomWallHex: '#DFB66C',
    description: 'Soft mineral warmth that pairs seamlessly with natural wood.',
    roomImage:
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80',
  },
];

const VISUALIZER_SCENES = [
  {
    id: 'open-suite',
    label: 'Open Bedroom & Kitchen',
    image:
      'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=85',
    pins: [
      {
        id: 'pin-1',
        name: 'Calm Sea',
        color: '#29585C',
        top: '29%',
        left: '24%',
        wallTint: 'rgba(41, 88, 92, 0.28)',
      },
      {
        id: 'pin-2',
        name: 'Sandstone',
        color: '#EAB95C',
        top: '26%',
        left: '72%',
        wallTint: 'rgba(234, 185, 92, 0.24)',
      },
      {
        id: 'pin-3',
        name: 'Sandstone',
        color: '#C8B8A2',
        top: '62%',
        left: '44%',
        wallTint: 'rgba(200, 184, 162, 0.22)',
      },
    ],
  },
  {
    id: 'nordic-lounge',
    label: 'Sunlit Nordic Lounge',
    image:
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=85',
    pins: [
      {
        id: 'pin-4',
        name: 'Forest Mist',
        color: '#256666',
        top: '32%',
        left: '28%',
        wallTint: 'rgba(37, 102, 102, 0.28)',
      },
      {
        id: 'pin-5',
        name: 'Golden Hour',
        color: '#EAB849',
        top: '48%',
        left: '66%',
        wallTint: 'rgba(234, 184, 73, 0.25)',
      },
    ],
  },
  {
    id: 'modern-dining',
    label: 'Warm Terracotta Loft',
    image:
      'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=85',
    pins: [
      {
        id: 'pin-6',
        name: 'Terracotta Dream',
        color: '#BE5C45',
        top: '28%',
        left: '36%',
        wallTint: 'rgba(190, 92, 69, 0.30)',
      },
      {
        id: 'pin-7',
        name: 'Deep Pine',
        color: '#182C49',
        top: '56%',
        left: '70%',
        wallTint: 'rgba(24, 44, 73, 0.30)',
      },
    ],
  },
];

const TRANSFORMATIONS = [
  {
    id: 'diy-calm-sea',
    title: 'DIY-generateral transformations',
    subtitle: 'combinations used Calm Sea',
    swatch: '#234F5B',
    beforeImage:
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80',
    afterImage:
      'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=800&q=80',
    beforeFilter: 'grayscale(85%) brightness(1.06) contrast(0.88)',
    afterTint: 'rgba(27, 75, 86, 0.32)',
  },
  {
    id: 'diy-golden-hour',
    title: 'DIY professional transformations',
    subtitle: 'combinations used Golden Hour',
    swatch: '#EAB849',
    beforeImage:
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80',
    afterImage:
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80',
    beforeFilter: 'sepia(25%) saturate(75%) brightness(0.96)',
    afterTint: 'rgba(218, 156, 68, 0.18)',
  },
  {
    id: 'pro-deep-ocean',
    title: 'Professional transformations',
    subtitle: 'combinations used Deep Ocean',
    swatch: '#2B4263',
    beforeImage:
      'https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=800&q=80',
    afterImage:
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    beforeFilter: 'sepia(35%) saturate(70%) brightness(1.02)',
    afterTint: 'rgba(29, 53, 87, 0.28)',
  },
];

// ==========================================
// INTERACTIVE BEFORE / AFTER CARD COMPONENT
// ==========================================

function BeforeAfterCard({ item }) {
  const [splitPos, setSplitPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const handleMove = (clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(12, Math.min(clientX - rect.left, rect.width - 12));
    setSplitPos((x / rect.width) * 100);
  };

  return (
    <div className="group flex flex-col">
      <div
        ref={containerRef}
        onMouseDown={() => setIsDragging(true)}
        onMouseUp={() => setIsDragging(false)}
        onMouseLeave={() => setIsDragging(false)}
        onMouseMove={(e) => {
          if (isDragging) handleMove(e.clientX);
        }}
        onTouchMove={(e) => {
          if (e.touches[0]) handleMove(e.touches[0].clientX);
        }}
        onClick={(e) => handleMove(e.clientX)}
        className="relative h-56 sm:h-60 w-full rounded-2xl overflow-hidden shadow-md border border-slate-200/80 cursor-ew-resize select-none bg-slate-100"
      >
        {/* AFTER IMAGE (Full Background) */}
        <img
          src={item.afterImage}
          alt={`${item.title} After`}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          draggable={false}
        />
        <div
          className="absolute inset-0 pointer-events-none mix-blend-multiply"
          style={{ backgroundColor: item.afterTint }}
        />

        {/* BEFORE IMAGE (Clipped Left Half) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - splitPos}% 0 0)` }}
        >
          <img
            src={item.beforeImage}
            alt={`${item.title} Before`}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            style={{ filter: item.beforeFilter }}
            draggable={false}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        </div>

        {/* Bottom Gradient for Labels */}
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/60 via-black/20 to-transparent pointer-events-none" />

        {/* Vertical White Split Line + Drag Handle */}
        <div
          className="absolute top-0 bottom-0 w-[2.5px] bg-white shadow-[0_0_10px_rgba(0,0,0,0.4)] z-10 pointer-events-none"
          style={{ left: `${splitPos}%` }}
        >
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-7 h-7 rounded-full bg-white/95 text-[#142333] shadow-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <MoveHorizontal className="w-3.5 h-3.5" />
          </div>
        </div>

        {/* Before & After Corner Labels matching mockup */}
        <span className="absolute bottom-2.5 left-3.5 text-white font-semibold text-xs tracking-wide drop-shadow">
          Before
        </span>
        <span
          className="absolute bottom-2.5 text-white font-semibold text-xs tracking-wide drop-shadow transition-all duration-75"
          style={{ left: `calc(${splitPos}% + 10px)` }}
        >
          After
        </span>
      </div>

      {/* Caption below card */}
      <div className="mt-3.5 flex items-start justify-between gap-2">
        <div>
          <h4 className="font-bold text-[#142333] text-sm sm:text-[15px] leading-snug">
            {item.title === 'Professional transformations' ? (
              <>
                <span className="font-bold">Professional transformations</span>{' '}
                <span className="font-normal text-slate-600">used</span>
              </>
            ) : (
              item.title
            )}
          </h4>
          <p className="text-xs sm:text-[13px] text-slate-600 mt-0.5 flex items-center gap-1.5">
            <span
              className="inline-block w-2.5 h-2.5 rounded-full border border-black/10"
              style={{ backgroundColor: item.swatch }}
            />
            {item.subtitle}
          </p>
        </div>
        <button
          onClick={() => setSplitPos(splitPos === 50 ? 20 : splitPos === 20 ? 80 : 50)}
          className="text-[11px] text-[#1B5153] font-medium hover:underline shrink-0 mt-0.5"
          title="Toggle split view"
        >
          Compare
        </button>
      </div>
    </div>
  );
}

// ==========================================
// ROUTE PARSER HELPER
// ==========================================

function parseRouteFromLocation() {
  const path = window.location.pathname.toLowerCase();
  const hash = window.location.hash.toLowerCase();
  const search = window.location.search.toLowerCase();

  const isRoyaleRoute = hash.includes('royale') || path.includes('royale');
  const isProductRoute =
    isRoyaleRoute ||
    path.startsWith('/product') ||
    path.startsWith('/products') ||
    path.startsWith('/all-products') ||
    hash.startsWith('#product') ||
    hash.startsWith('#products') ||
    hash.startsWith('#product-detail') ||
    hash.startsWith('#all-products') ||
    search.includes('view=product') ||
    search.includes('page=product');

  let prod = null;
  if (isRoyaleRoute) {
    prod = { id: 'accord-royale', name: 'Accord Royale Matte' };
  } else if (isProductRoute) {
    const pathParts = path.split('/').filter(Boolean);
    if (pathParts.length > 1 && pathParts[1] && pathParts[1] !== 'detail') {
      prod = getProductById(pathParts[1]);
    }
    if (!prod && hash.includes('/')) {
      const hashId = hash.split('/')[1];
      if (hashId) prod = getProductById(hashId);
    } else if (!prod && hash.includes('=')) {
      const hashId = hash.split('=')[1];
      if (hashId) prod = getProductById(hashId);
    }
    if (!prod) {
      prod = ACCORD_PRODUCTS[0];
    }
  }

  return { isProduct: isProductRoute, product: prod, isRoyale: isRoyaleRoute };
}

// ==========================================
// MAIN APPLICATION COMPONENT
// ==========================================

export default function App() {
  const { scrollY, scrollProgress } = useScrollMetrics();

  const initialRoute = parseRouteFromLocation();
  // Active view: 'home' | 'product' | 'royale'
  const [currentView, setCurrentView] = useState(
    initialRoute.isProduct ? (initialRoute.isRoyale ? 'royale' : 'product') : 'home'
  );
  const [selectedProduct, setSelectedProduct] = useState(initialRoute.product);

  const navigateToProduct = (prod = null) => {
    const targetProduct = prod || ACCORD_PRODUCTS[0];
    setSelectedProduct(targetProduct);
    if (targetProduct?.id === 'accord-royale') {
      setCurrentView('royale');
      window.history.pushState({ view: 'royale' }, '', '#accord-royale');
    } else {
      setCurrentView('product');
      const targetHash = targetProduct?.id ? `#product/${targetProduct.id}` : '#product';
      window.history.pushState({ view: 'product', prodId: targetProduct?.id }, '', targetHash);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToHome = () => {
    setSelectedProduct(null);
    setCurrentView('home');
    window.history.pushState({ view: 'home' }, '', window.location.pathname === '/' ? '#' : '/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const syncRoute = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash === '#home') {
        setCurrentView('home');
        setSelectedProduct(null);
        return;
      }
      const route = parseRouteFromLocation();
      if (route.isProduct) {
        if (route.isRoyale) {
          setCurrentView('royale');
        } else {
          setCurrentView('product');
        }
        setSelectedProduct(route.product);
      } else {
        setCurrentView('home');
      }
    };

    window.addEventListener('hashchange', syncRoute);
    window.addEventListener('popstate', syncRoute);
    return () => {
      window.removeEventListener('hashchange', syncRoute);
      window.removeEventListener('popstate', syncRoute);
    };
  }, []);

  // Mobile menu open state
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  // Interactive Hero wall tint state
  const [heroWallColor, setHeroWallColor] = useState('#BC5B45');

  // Header dropdown
  const [productsOpen, setProductsOpen] = useState(false);

  // Visualizer App state
  const [activeSceneIndex, setActiveSceneIndex] = useState(0);
  const [activePinId, setActivePinId] = useState('pin-1');

  // Modals & Toast
  const [quizOpen, setQuizOpen] = useState(false);
  const [quizStep, setQuizStep] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState({});
  const [shareModalOpen, setShareModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  // Newsletter state
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const currentScene = VISUALIZER_SCENES[activeSceneIndex];
  const activePin =
    currentScene.pins.find((p) => p.id === activePinId) || currentScene.pins[0];

  const triggerToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((prev) => (prev === msg ? null : prev));
    }, 3200);
  };

  const handleCopyHex = (item) => {
    setHeroWallColor(item.swatchHex);
    if (navigator.clipboard) {
      navigator.clipboard.writeText(item.swatchHex).catch(() => {});
    }
    triggerToast(
      `Applied "${item.name}" (${item.code}) to Hero room preview!`
    );
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  if (currentView === 'royale' || (currentView === 'product' && selectedProduct?.id === 'accord-royale')) {
    return (
      <ProductPage
        onNavigateHome={navigateToHome}
        onLaunchVisualizer={() => {
          navigateToHome();
          setTimeout(() => scrollToSection('visualizer'), 250);
        }}
      />
    );
  }

  if (currentView === 'product') {
    return (
      <ProductDetailPage
        product={selectedProduct}
        onBackToHome={navigateToHome}
        onSelectProduct={(newProd) => navigateToProduct(newProd)}
        onSelectColor={(item) => {
          setHeroWallColor(item.hex);
          setHeroWallName(item.name);
          triggerToast(`Applied "${item.name}" to room preview!`);
        }}
      />
    );
  }

  return (
    <div className="min-h-screen bg-[#FAF9F5] font-sans text-[#142333] selection:bg-[#1B5153] selection:text-white flex flex-col w-full overflow-x-hidden">
      {/* Top Multi-Color Paint Stroke Scroll Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1.5 z-50 bg-slate-900/5 overflow-hidden">
        <div
          className="h-full transition-all duration-150 ease-out"
          style={{
            width: `${scrollProgress}%`,
            background:
              'linear-gradient(90deg, #1B5153 0%, #256666 30%, #EAB849 60%, #BE5C45 85%, #182C49 100%)',
          }}
        />
      </div>

      {/* Floating Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#142333] text-white px-5 py-3 rounded-2xl shadow-2xl border border-white/20 flex items-center gap-3 text-sm animate-bounce">
          <div
            className="w-3.5 h-3.5 rounded-full shrink-0 border border-white/40"
            style={{ backgroundColor: heroWallColor }}
          />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Persistent Floating Quick Access Pill */}
      <div className="fixed bottom-5 left-5 z-40">
        <button
          onClick={() => navigateToProduct()}
          className="bg-[#0D4A52] hover:bg-[#09393F] text-white text-xs sm:text-sm font-semibold px-4 py-2.5 rounded-full shadow-xl hover:shadow-2xl border border-white/20 flex items-center gap-2 transition-all hover:scale-105 active:scale-95 cursor-pointer backdrop-blur-md"
        >
          <span className="w-2 h-2 rounded-full bg-amber-300 animate-pulse" />
          <span>★ View Product Page</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* ==========================================
          1. STICKY HEADER / NAVIGATION BAR
      ========================================== */}
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          scrollY > 30
            ? 'bg-[#FAF9F5]/90 backdrop-blur-md shadow-xs py-3.5'
            : 'bg-[#FAF9F5] py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 flex items-center justify-between gap-4">
          {/* Brand Logo */}
          <a
            href="#top"
            onClick={(e) => {
              if (currentView !== 'home') {
                e.preventDefault();
                navigateToHome();
              }
            }}
            className="flex items-center gap-2.5 group focus:outline-none"
          >
            <img
              src="/images/brand/accord-logo-mockup.png"
              alt="Accord Paints"
              className="h-7 sm:h-8 w-auto object-contain"
            />
          </a>

          {/* Desktop Center Nav Links */}
          <nav className="hidden md:flex items-center gap-7 text-[13.5px] font-medium text-slate-700">
            <div
              className="relative"
              onMouseEnter={() => setProductsOpen(true)}
              onMouseLeave={() => setProductsOpen(false)}
            >
              <button
                onClick={() => {
                  setProductsOpen(false);
                  navigateToProduct();
                }}
                className="flex items-center gap-1 hover:text-[#0D4A52] transition-colors py-1 cursor-pointer font-semibold text-[#0D4A52]"
              >
                <span>Products</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    productsOpen ? 'rotate-180 text-[#0D4A52]' : ''
                  }`}
                />
              </button>

              {/* Dropdown Menu */}
              {productsOpen && (
                <div className="absolute top-full left-0 pt-2 w-72 z-50">
                  <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-2.5 grid gap-1">
                    {/* Flagship Product Showcase Button */}
                    <button
                      onClick={() => {
                        setProductsOpen(false);
                        navigateToProduct();
                      }}
                      className="w-full text-left bg-gradient-to-r from-[#0D4A52] to-[#182C49] text-white p-3 rounded-xl hover:shadow-md transition-all group cursor-pointer"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-amber-300">
                          ★ Flagship Product Page
                        </span>
                        <ChevronRight className="w-3.5 h-3.5 text-white/80 group-hover:translate-x-0.5 transition-transform" />
                      </div>
                      <div className="text-xs font-bold text-white mt-0.5">
                        Luxury Semi Gloss Emulsion
                      </div>
                      <div className="text-[10px] text-slate-200 mt-0.5 leading-tight">
                        View full specifications, pack sizing & coverage calculator →
                      </div>
                    </button>

                    <div className="h-px bg-slate-100 my-0.5" />

                    {[
                      {
                        title: 'Accord Royale Matte',
                        desc: 'Imperial velvet architectural matte',
                        dot: '#C08A3E',
                        action: () =>
                          navigateToProduct({
                            id: 'accord-royale',
                            name: 'Accord Royale Matte',
                          }),
                      },
                      {
                        title: 'Interior Paints',
                        desc: 'Zero-VOC luxury semi-gloss & matte',
                        dot: '#256666',
                        action: () => navigateToProduct(),
                      },
                      {
                        title: 'Exterior WeatherShield',
                        desc: 'Extreme rainfall & UV defense',
                        dot: '#182C49',
                        action: () =>
                          navigateToProduct(getProductById('exterior-emulsion')),
                      },
                      {
                        title: 'Metallica Designer Luster',
                        desc: 'Shimmering metallic radiance',
                        dot: '#EAB849',
                        action: () =>
                          navigateToProduct(getProductById('metallica-luster-paint')),
                      },
                      {
                        title: 'All Product Collections',
                        desc: 'Browse entire 9-product catalog',
                        dot: '#BE5C45',
                        action: () => {
                          scrollToSection('products');
                        },
                      },
                    ].map((prod) => (
                      <button
                        key={prod.title}
                        onClick={() => {
                          setProductsOpen(false);
                          prod.action();
                        }}
                        className="flex items-start gap-2.5 p-2 rounded-xl hover:bg-slate-50 text-left transition-colors group cursor-pointer"
                      >
                        <span
                          className="w-2.5 h-2.5 rounded-full mt-1.5 shrink-0"
                          style={{ backgroundColor: prod.dot }}
                        />
                        <div>
                          <div className="text-xs font-semibold text-[#142333] group-hover:text-[#0D4A52] transition-colors">
                            {prod.title}
                          </div>
                          <div className="text-[11px] text-slate-500">
                            {prod.desc}
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <button
              onClick={() => scrollToSection('products')}
              className="hover:text-[#0D4A52] transition-colors cursor-pointer"
            >
              Catalog & Colors
            </button>
            <button
              onClick={() => scrollToSection('visualizer')}
              className="hover:text-[#0D4A52] transition-colors cursor-pointer"
            >
              Visualizer
            </button>
            <button
              onClick={() =>
                triggerToast('Store Locator: 140+ Accord Paint Studios open near you!')
              }
              className="hover:text-[#0D4A52] transition-colors cursor-pointer"
            >
              Find a Store
            </button>
            <button
              onClick={() => scrollToSection('transformations')}
              className="hover:text-[#0D4A52] transition-colors cursor-pointer"
            >
              Transformations
            </button>
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Direct Product Page Button */}
            <button
              onClick={() => navigateToProduct()}
              className="bg-[#E4EEEE] hover:bg-[#d5e4e4] text-[#0D4A52] text-xs sm:text-[13px] font-bold px-3.5 sm:px-4 py-2 rounded-full transition-all flex items-center gap-1.5 cursor-pointer shadow-xs active:scale-95"
            >
              <span>Product Page</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            {/* Visualizer App Button */}
            <button
              onClick={() => scrollToSection('visualizer')}
              className="hidden sm:inline-flex bg-[#0D4A52] hover:bg-[#09393F] text-white text-xs sm:text-[13.5px] font-semibold px-5 sm:px-6 py-2 sm:py-2.5 rounded-full shadow-sm hover:shadow transition-all duration-200 active:scale-95 cursor-pointer"
            >
              Visualizer App
            </button>

            {/* Mobile Hamburger Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-xl text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#FAF9F5] border-b border-slate-200 px-5 py-4 space-y-3 animate-fadeIn">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                navigateToProduct();
              }}
              className="w-full text-left bg-gradient-to-r from-[#0D4A52] to-[#182C49] text-white p-3.5 rounded-2xl shadow-sm flex items-center justify-between"
            >
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-amber-300">
                  ★ Flagship Product Page
                </span>
                <div className="text-sm font-bold mt-0.5">
                  Luxury Semi Gloss Emulsion
                </div>
                <div className="text-[11px] text-slate-200 mt-0.5">
                  View specs, sizes, prices & coverage calculator →
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-white/80 shrink-0" />
            </button>

            <div className="grid grid-cols-2 gap-2 pt-1">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  scrollToSection('products');
                }}
                className="bg-white border border-slate-200/80 p-2.5 rounded-xl text-left hover:bg-slate-50"
              >
                <div className="text-xs font-bold text-[#142333]">All Products</div>
                <div className="text-[10px] text-slate-500">9 Paint Collections</div>
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  scrollToSection('visualizer');
                }}
                className="bg-white border border-slate-200/80 p-2.5 rounded-xl text-left hover:bg-slate-50"
              >
                <div className="text-xs font-bold text-[#142333]">Visualizer App</div>
                <div className="text-[10px] text-slate-500">Preview on walls</div>
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  scrollToSection('transformations');
                }}
                className="bg-white border border-slate-200/80 p-2.5 rounded-xl text-left hover:bg-slate-50"
              >
                <div className="text-xs font-bold text-[#142333]">Transformations</div>
                <div className="text-[10px] text-slate-500">Before & After</div>
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  triggerToast('Store Locator: 140+ Accord Studios open near you!');
                }}
                className="bg-white border border-slate-200/80 p-2.5 rounded-xl text-left hover:bg-slate-50"
              >
                <div className="text-xs font-bold text-[#142333]">Find a Store</div>
                <div className="text-[10px] text-slate-500">Dealer locator</div>
              </button>
            </div>
          </div>
        )}
      </header>

      <main>

      {/* ==========================================
          2. HERO SECTION
      ========================================== */}
      <section
        id="top"
        className="w-full pt-4 pb-14 sm:pb-20 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            {/* Left Editorial Column */}
            <div className="lg:col-span-6 z-10">
              <Reveal direction="up" delay={50}>
                <h1 className="font-serif-editorial text-4xl sm:text-5xl lg:text-[52px] font-bold text-[#142333] leading-[1.12] tracking-tight">
                  Color Your World,
                  <br />
                  Agreeably.
                </h1>
              </Reveal>

              <Reveal direction="up" delay={140}>
                <p className="mt-4 text-slate-600 text-sm sm:text-[15px] leading-relaxed max-w-md">
                  Express your unique style with Accord Paints. High-coverage,
                  eco-friendly, and durable paints designed to make your home
                  feel like you.
                </p>
              </Reveal>

              {/* CTA Buttons */}
              <Reveal direction="up" delay={220}>
                <div className="mt-7 flex flex-wrap items-center gap-3.5">
                  <button
                    onClick={() => scrollToSection('products')}
                    className="bg-[#0D4A52] hover:bg-[#09393F] text-white font-semibold text-xs sm:text-sm px-7 py-3 rounded-full shadow-md hover:shadow-lg transition-all duration-200 active:scale-95 cursor-pointer"
                  >
                    Explore Our Palette
                  </button>
                  <button
                    onClick={() => scrollToSection('visualizer')}
                    className="bg-transparent hover:bg-slate-100/70 text-[#0D4A52] font-semibold text-xs sm:text-sm px-7 py-3 rounded-full border border-[#0D4A52] transition-all duration-200 active:scale-95 cursor-pointer"
                  >
                    Try Visualizer
                  </button>
                </div>

                {/* Direct Demo link to Flagship Product Page */}
                <div className="mt-4 flex items-center gap-2 text-xs text-slate-600">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
                  <span className="font-medium">Flagship Demo:</span>
                  <button
                    onClick={() => navigateToProduct()}
                    className="text-[#0D4A52] hover:text-[#09393F] font-semibold underline underline-offset-2 flex items-center gap-1 group cursor-pointer"
                  >
                    <span>View Luxury Semi Gloss product page</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              </Reveal>

              {/* 3 Feature Trust Badges */}
              <Reveal direction="up" delay={300}>
                <div className="mt-9 pt-1 flex flex-wrap items-center gap-6 sm:gap-7">
                  <div className="flex items-center gap-2">
                    <Leaf className="w-4 h-4 text-[#142333] shrink-0 stroke-[1.8]" />
                    <span className="text-[11px] sm:text-xs text-slate-700 font-medium leading-tight">
                      Low VOC /
                      <br />
                      Eco-friendly
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Palette className="w-4 h-4 text-[#142333] shrink-0 stroke-[1.8]" />
                    <span className="text-[11px] sm:text-xs text-slate-700 font-medium leading-tight">
                      Rich, Long-
                      <br />
                      Lasting Color
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#142333] shrink-0 stroke-[1.8]" />
                    <span className="text-[11px] sm:text-xs text-slate-700 font-medium leading-tight">
                      100% Satisfaction
                      <br />
                      Guarantee
                    </span>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Right Column: Room Showcase with Painterly Brush Strokes & Paint Can */}
            <div className="lg:col-span-6 relative flex items-center justify-center py-4 px-2 sm:px-4">
              <Reveal
                direction="left"
                delay={150}
                className="relative w-full max-w-[530px] flex items-center justify-center group"
              >
                {/* Authentic Mockup Visual with Painterly Acrylic Strokes, Living Room & Accord Paint Tin */}
                <img
                  src="/images/brand/hero-mockup-transparent~2.png"
                  alt="Accord Paints Designer Living Room and Color Palette"
                  className="w-full h-auto object-contain select-none transition-transform duration-500 hover:scale-[1.015]"
                  draggable={false}
                />

                {/* Interactive Clickable Area & Visual Badge on Paint Can */}
                <div
                  onClick={() => navigateToProduct()}
                  title="Click to view Flagship Product Details"
                  className="absolute bottom-2 right-4 w-36 sm:w-44 h-40 sm:h-48 cursor-pointer rounded-2xl flex items-end justify-center pb-2 z-20 group/can"
                >
                  <div className="bg-white/95 hover:bg-white text-[#142333] hover:text-[#0D4A52] px-3.5 py-1.5 rounded-full shadow-lg border border-white/90 flex items-center gap-2 text-xs font-bold transition-all duration-300 hover:scale-105 active:scale-95">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span>View Product Page</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#0D4A52] group-hover/can:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          SIGNATURE PAINT COLLECTIONS & FLAGSHIP SPOTLIGHT
      ========================================== */}
      <ProductsSection
        onOpenProductDetail={(prod) => navigateToProduct(prod)}
        onTriggerToast={triggerToast}
      />


      {/* ==========================================
          4. VISUALIZER APP & VALUE PROPOSITION
      ========================================== */}
      <section
        id="visualizer"
        className="w-full py-10 sm:py-14"
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Left Column: Interactive Visualizer App Showcase Card */}
            <Reveal direction="up" className="lg:col-span-7">
              <div className="relative rounded-[24px] overflow-hidden shadow-xl border border-slate-200/80 aspect-[16/10.5] bg-slate-900 group">
                {/* Room Scene Image */}
                <img
                  src={currentScene.image}
                  alt={currentScene.label}
                  className="w-full h-full object-cover transition-all duration-700"
                />

                {/* Active Pin Wall Tint Overlay */}
                {activePin && (
                  <div
                    className="absolute inset-0 transition-colors duration-500 pointer-events-none"
                    style={{ backgroundColor: activePin.wallTint }}
                  />
                )}

                {/* Bottom Subtle Dark Vignette for Text Legibility */}
                <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/75 via-black/30 to-transparent pointer-events-none" />

                {/* Floating Interactive Color Tag Pills on Walls/Furniture */}
                {currentScene.pins.map((pin) => {
                  const isSelected = activePin?.id === pin.id;
                  return (
                    <button
                      key={pin.id}
                      onClick={() => {
                        setActivePinId(pin.id);
                        triggerToast(`Visualizer: Highlighting "${pin.name}"`);
                      }}
                      style={{ top: pin.top, left: pin.left }}
                      className={`absolute z-20 -translate-x-1/2 -translate-y-1/2 bg-white/95 hover:bg-white text-[#142333] px-3 py-1.5 rounded-full shadow-lg flex items-center gap-2 transition-all duration-300 ${
                        isSelected
                          ? 'ring-2 ring-[#1B5153] scale-105'
                          : 'hover:scale-105 opacity-95'
                      }`}
                    >
                      <span
                        className="w-3.5 h-3.5 rounded-full shrink-0 border border-black/10"
                        style={{ backgroundColor: pin.color }}
                      />
                      <span className="text-xs font-semibold whitespace-nowrap">
                        {pin.name}
                      </span>
                    </button>
                  );
                })}

                {/* Decorative Extra Anchor Circle near Bed (Matching Mockup) */}
                <div
                  className="absolute bottom-[19%] left-[31%] w-4 h-4 rounded-full bg-white/40 border-2 border-white shadow-md pointer-events-none animate-pulse"
                />

                {/* Bottom-Left Overlay Title & Subtitle */}
                <div className="absolute bottom-4 left-5 z-20 text-white">
                  <h3 className="font-bold text-lg sm:text-xl leading-tight">
                    Visualizer App
                  </h3>
                  <p className="text-xs sm:text-[13px] text-white/85 mt-0.5">
                    See it in your room before you paint
                  </p>
                </div>

                {/* Bottom-Right Pagination Dots (Switches Room Scenes!) */}
                <div className="absolute bottom-5 right-5 z-20 flex items-center gap-2">
                  {VISUALIZER_SCENES.map((scene, idx) => (
                    <button
                      key={scene.id}
                      onClick={() => {
                        setActiveSceneIndex(idx);
                        setActivePinId(VISUALIZER_SCENES[idx].pins[0].id);
                      }}
                      aria-label={`Switch to ${scene.label}`}
                      className={`w-2.5 h-2.5 rounded-full transition-all ${
                        activeSceneIndex === idx
                          ? 'bg-[#1B5153] ring-2 ring-white scale-110'
                          : 'bg-white/80 hover:bg-white'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Right Column: Value Proposition */}
            <div className="lg:col-span-5">
              <Reveal direction="up" delay={100}>
                <h2 className="font-serif-editorial text-3xl sm:text-4xl font-bold text-[#142333] mb-6">
                  Value Proposition
                </h2>
              </Reveal>

              <div className="space-y-5">
                {/* Item 1: Washable & Durable */}
                <Reveal direction="up" delay={180}>
                  <div className="flex items-start gap-4 group">
                    <div className="w-11 h-11 rounded-full bg-[#E4EEEE] text-[#1B5153] flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110">
                      <Sparkles className="w-5 h-5 stroke-[1.8]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-sm sm:text-[15px] text-[#142333]">
                        Washable & Durable
                      </h3>
                      <p className="text-xs sm:text-[13.5px] text-slate-600 leading-relaxed mt-0.5">
                        Paints made for busy homes—easy to wipe clean and built
                        for busy homes.
                      </p>
                    </div>
                  </div>
                </Reveal>

                {/* Item 2: Zero VOC & Odorless */}
                <Reveal direction="up" delay={260}>
                  <div className="flex items-start gap-4 group">
                    <div className="w-11 h-11 rounded-full bg-[#E4EEEE] text-[#1B5153] flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110">
                      <Droplets className="w-5 h-5 stroke-[1.8]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-sm sm:text-[15px] text-[#142333]">
                        Zero VOC & Odorless
                      </h3>
                      <p className="text-xs sm:text-[13.5px] text-slate-600 leading-relaxed mt-0.5">
                        Breathe easy, safe for families and pets.
                      </p>
                    </div>
                  </div>
                </Reveal>

                {/* Item 3: Guaranteed One-Coat Coverage */}
                <Reveal direction="up" delay={340}>
                  <div className="flex items-start gap-4 group">
                    <div className="w-11 h-11 rounded-full bg-[#E4EEEE] text-[#1B5153] flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110">
                      <HeartHandshake className="w-5 h-5 stroke-[1.8]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-sm sm:text-[15px] text-[#142333]">
                        Guaranteed One-Coat Coverage
                      </h3>
                      <p className="text-xs sm:text-[13.5px] text-slate-600 leading-relaxed mt-0.5">
                        Save time, effort, and money.
                      </p>
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          5. TRANSFORMATIONS WE LOVE
      ========================================== */}
      <section
        id="transformations"
        className="w-full py-12 sm:py-16"
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <Reveal direction="up">
            <h2 className="font-serif-editorial text-3xl sm:text-4xl font-bold text-[#142333] text-center mb-9">
              Transformations We Love
            </h2>
          </Reveal>

          {/* 3 Interactive Before / After Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TRANSFORMATIONS.map((item, idx) => (
              <Reveal key={item.id} direction="up" delay={idx * 120}>
                <BeforeAfterCard item={item} />
              </Reveal>
            ))}
          </div>

          {/* Centered CTA Button */}
          <Reveal direction="up" delay={250} className="mt-9 text-center">
            <button
              onClick={() => setShareModalOpen(true)}
              className="bg-[#1B5153] hover:bg-[#133C3E] text-white font-semibold text-xs sm:text-[13.5px] px-7 py-3 rounded-full shadow-md hover:shadow-lg transition-all duration-200 active:scale-95"
            >
              Show Us Your Space (#AccordPaints)
            </button>
          </Reveal>
        </div>
      </section>

      {/* ==========================================
          6. THE SELECTOR TOOL — PAINT FINDER QUIZ
      ========================================== */}
      <section className="w-full pt-6 pb-16 sm:pb-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Heading Block */}
            <Reveal direction="up" className="lg:col-span-5">
              <p className="text-xs sm:text-[13.5px] font-medium text-slate-600 mb-1.5">
                The Selector Tool
              </p>
              <h2 className="font-serif-editorial text-3xl sm:text-4xl font-bold text-[#142333] leading-[1.14]">
                Find Your
                <br />
                Perfect Match
              </h2>
            </Reveal>

            {/* Right Soft Powder-Teal Quiz Card */}
            <Reveal direction="up" delay={140} className="lg:col-span-7">
              <div className="bg-[#E4EEEE] rounded-[24px] p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-6 shadow-xs border border-[#D5E4E4]">
                {/* Custom SVG Paint Can & Brush Illustration */}
                <div className="shrink-0 animate-float-slow">
                  <QuizCanAndBrushIllustration />
                </div>

                {/* Card Copy & CTA */}
                <div className="text-center sm:text-left">
                  <h3 className="font-serif-editorial text-xl sm:text-2xl font-bold text-[#142333]">
                    Paint Finder Quiz
                  </h3>
                  <p className="text-xs sm:text-[13.5px] text-slate-600 leading-relaxed mt-1.5 max-w-sm">
                    Unsure where to start? Take our 2-minute quiz to find your
                    ideal color palette.
                  </p>
                  <button
                    onClick={() => {
                      setQuizStep(0);
                      setQuizOpen(true);
                    }}
                    className="mt-4 bg-[#1B5153] hover:bg-[#133C3E] text-white font-semibold text-xs sm:text-[13px] px-5 py-2.5 rounded-full shadow-xs hover:shadow transition-all duration-200 active:scale-95"
                  >
                    Take the Paint Quiz
                  </button>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
      </main>

      {/* ==========================================
          7. FOOTER (DEEP MIDNIGHT NAVY)
      ========================================== */}
      <footer className="w-full bg-[#162637] text-white pt-14 pb-8 relative overflow-hidden mt-auto">

        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
          <div className="grid grid-cols-2 sm:grid-cols-6 lg:grid-cols-12 gap-8 pb-10 border-b border-white/10">
            {/* Col 1: Brand & Socials */}
            <div className="col-span-2 sm:col-span-3 lg:col-span-3">
              <div className="flex items-center gap-2.5">
                <AccordLogo className="w-7 h-7" />
                <span className="font-bold text-base tracking-tight text-white">
                  Accord <span className="font-normal text-slate-300">Paints</span>
                </span>
              </div>
              <p className="mt-3 text-xs sm:text-[13px] text-slate-300 leading-relaxed">
                Color Your World,
                <br />
                Agreeably.
              </p>

              {/* Social Icons */}
              <div className="mt-4 flex items-center gap-3 text-slate-300">
                <a
                  href="#instagram"
                  onClick={(e) => {
                    e.preventDefault();
                    triggerToast('Following @AccordPaints on Instagram');
                  }}
                  aria-label="Instagram"
                  className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                >
                  <Instagram className="w-3.5 h-3.5" />
                </a>
                <a
                  href="#pinterest"
                  onClick={(e) => {
                    e.preventDefault();
                    triggerToast('Following @AccordPaints on Pinterest');
                  }}
                  aria-label="Pinterest"
                  className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors text-xs font-bold"
                >
                  P
                </a>
                <a
                  href="#youtube"
                  onClick={(e) => {
                    e.preventDefault();
                    triggerToast('Subscribed to Accord Paints Tutorials');
                  }}
                  aria-label="YouTube"
                  className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                >
                  <Youtube className="w-3.5 h-3.5" />
                </a>
                <a
                  href="#facebook"
                  onClick={(e) => {
                    e.preventDefault();
                    triggerToast('Liked Accord Paints on Facebook');
                  }}
                  aria-label="Facebook"
                  className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                >
                  <Facebook className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Col 2: Products */}
            <div className="col-span-1 sm:col-span-1 lg:col-span-2">
              <h4 className="font-bold text-xs sm:text-[13px] text-white mb-3">
                Products
              </h4>
              <ul className="space-y-2 text-xs text-slate-300">
                <li>
                  <button
                    onClick={() =>
                      navigateToProduct({
                        id: 'accord-royale',
                        name: 'Accord Royale Matte',
                      })
                    }
                    className="text-[#EAB849] hover:underline font-semibold flex items-center gap-1.5 cursor-pointer text-left"
                  >
                    <span>Accord Royale Matte</span>
                    <span className="text-[9px] bg-[#C08A3E]/40 px-1.5 py-0.2 rounded text-white uppercase">
                      Top
                    </span>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => navigateToProduct()}
                    className="hover:text-amber-300 font-semibold transition-colors flex items-center gap-1.5 cursor-pointer text-left"
                  >
                    <span>Flagship Semi-Gloss ★</span>
                    <span className="text-[9.5px] bg-amber-400/20 text-amber-300 px-1.5 py-0.2 rounded-full font-bold">New</span>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => navigateToProduct()}
                    className="hover:text-white transition-colors cursor-pointer text-left"
                  >
                    Interior Luxury Emulsion
                  </button>
                </li>
                <li>
                  <button
                    onClick={() =>
                      navigateToProduct({
                        id: 'exterior-emulsion',
                        name: 'Exterior WeatherShield Emulsion',
                        series: 'Gold Series',
                        category: 'Exterior Wall Care',
                        tagline: 'Extreme weather, UV and heavy rainfall protection',
                        sheen: 'Eggshell Weather-Proof',
                        coverage: '110 - 130 sq.ft / Litre',
                        dryingTime: '45 mins (Touch), 4-6 hrs (Recoat)',
                        dilution: '40% with clean water',
                        packSizes: ['1 L', '4 L', '10 L', '20 L'],
                        image: '/images/products/exterior-emulsion.jpg',
                      })
                    }
                    className="hover:text-white transition-colors cursor-pointer text-left"
                  >
                    Exterior WeatherShield
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('products')}
                    className="hover:text-white transition-colors cursor-pointer text-left"
                  >
                    Primers & Base Coats
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('products')}
                    className="text-[#0AA6BB] hover:underline transition-colors cursor-pointer text-left"
                  >
                    Browse All Catalog →
                  </button>
                </li>
              </ul>
            </div>

            {/* Col 3: Resources */}
            <div className="col-span-1 sm:col-span-1 lg:col-span-2">
              <h4 className="font-bold text-xs sm:text-[13px] text-white mb-3">
                Resources
              </h4>
              <ul className="space-y-2 text-xs text-slate-300">
                {['Inspiration', 'Paint Calculator', 'Safety Data'].map(
                  (link) => (
                    <li key={link}>
                      <button
                        onClick={() => scrollToSection('visualizer')}
                        className="hover:text-white transition-colors"
                      >
                        {link}
                      </button>
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* Col 4: Company */}
            <div className="col-span-2 sm:col-span-1 lg:col-span-1">
              <h4 className="font-bold text-xs sm:text-[13px] text-white mb-3">
                Company
              </h4>
              <ul className="space-y-2 text-xs text-slate-300">
                {['About Us', 'Careers', 'Contact', 'Press'].map((link) => (
                  <li key={link}>
                    <button
                      onClick={() =>
                        triggerToast(`Opening Accord Paints ${link}`)
                      }
                      className="hover:text-white transition-colors"
                    >
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 5: Newsletter Subscribe */}
            <div className="col-span-2 sm:col-span-6 lg:col-span-4">
              <h4 className="font-bold text-xs sm:text-[13.5px] text-white leading-snug mb-3">
                Subscribe to get design tips and
                <br />
                exclusive offers
              </h4>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  if (email.trim()) {
                    setSubscribed(true);
                    setEmail('');
                    triggerToast('Welcome! Check your inbox for 15% off samples.');
                  }
                }}
                className="flex items-center bg-white rounded-full p-1 pl-4 shadow-inner max-w-xs"
              >
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={
                    subscribed ? 'Subscribed! Thank you' : 'Email'
                  }
                  className="w-full bg-transparent text-xs text-slate-800 placeholder-slate-400 focus:outline-none"
                />
                <button
                  type="submit"
                  className="bg-[#1B5153] hover:bg-[#133C3E] text-white text-xs font-semibold px-4 py-2 rounded-full shrink-0 transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          {/* Bottom Copyright Row */}
          <div className="pt-5 flex flex-wrap items-center justify-center gap-4 text-[11px] text-slate-400">
            <span>Copyright © 2026 Accord Paints.</span>
            <button
              onClick={() => triggerToast('Privacy Policy')}
              className="hover:text-slate-200 transition-colors"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => triggerToast('Terms Policy')}
              className="hover:text-slate-200 transition-colors"
            >
              Terms Policy
            </button>
          </div>
        </div>
      </footer>

      {/* ==========================================
          INTERACTIVE PAINT FINDER QUIZ MODAL
      ========================================== */}
      {quizOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#FAF9F5] rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative animate-in fade-in zoom-in-95 duration-200">
            <button
              onClick={() => setQuizOpen(false)}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-200/70 hover:bg-slate-200 flex items-center justify-center text-slate-600"
            >
              <X className="w-4 h-4" />
            </button>

            {quizStep === 0 && (
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#1B5153]">
                  Step 1 of 2 • Room Type
                </span>
                <h3 className="font-serif-editorial text-2xl font-bold text-[#142333] mt-1">
                  Which space are you refreshing?
                </h3>
                <div className="grid grid-cols-2 gap-3 mt-5">
                  {[
                    'Living Room',
                    'Bedroom Sanctuary',
                    'Kitchen & Dining',
                    'Home Exterior',
                  ].map((room) => (
                    <button
                      key={room}
                      onClick={() => {
                        setQuizAnswers({ ...quizAnswers, room });
                        setQuizStep(1);
                      }}
                      className="p-4 rounded-2xl border border-slate-200 bg-white hover:border-[#1B5153] hover:bg-[#E4EEEE]/40 text-left font-semibold text-sm text-[#142333] transition-all"
                    >
                      {room}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {quizStep === 1 && (
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#1B5153]">
                  Step 2 of 2 • Mood & Lighting
                </span>
                <h3 className="font-serif-editorial text-2xl font-bold text-[#142333] mt-1">
                  How do you want the space to feel?
                </h3>
                <div className="grid grid-cols-2 gap-3 mt-5">
                  {[
                    { mood: 'Calm & Botanical', match: TRENDING_PALETTES[0] },
                    { mood: 'Sunlit & Uplifting', match: TRENDING_PALETTES[1] },
                    { mood: 'Cozy & Earthy', match: TRENDING_PALETTES[2] },
                    { mood: 'Bold & Dramatic', match: TRENDING_PALETTES[3] },
                  ].map((choice) => (
                    <button
                      key={choice.mood}
                      onClick={() => {
                        setQuizAnswers({
                          ...quizAnswers,
                          mood: choice.mood,
                          match: choice.match,
                        });
                        setQuizStep(2);
                      }}
                      className="p-4 rounded-2xl border border-slate-200 bg-white hover:border-[#1B5153] hover:bg-[#E4EEEE]/40 text-left transition-all flex items-center gap-3"
                    >
                      <span
                        className="w-6 h-6 rounded-full shrink-0"
                        style={{ backgroundColor: choice.match.swatchHex }}
                      />
                      <span className="font-semibold text-sm text-[#142333]">
                        {choice.mood}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {quizStep === 2 && quizAnswers.match && (
              <div className="text-center">
                <span className="text-xs font-bold uppercase tracking-wider text-[#1B5153]">
                  Your Personalized Match
                </span>
                <h3 className="font-serif-editorial text-2xl font-bold text-[#142333] mt-1">
                  We Recommend {quizAnswers.match.name}
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Ideal for your {quizAnswers.room} ({quizAnswers.mood})
                </p>

                <div className="my-5 mx-auto max-w-xs bg-white rounded-2xl p-3 shadow-md border border-slate-100">
                  <div
                    className="h-24 rounded-xl w-full mb-3"
                    style={{ backgroundColor: quizAnswers.match.swatchHex }}
                  />
                  <div className="font-bold text-base text-[#142333]">
                    {quizAnswers.match.name} ({quizAnswers.match.code})
                  </div>
                  <p className="text-xs text-slate-600 mt-1">
                    {quizAnswers.match.description}
                  </p>
                </div>

                <div className="flex justify-center gap-3">
                  <button
                    onClick={() => {
                      handleCopyHex(quizAnswers.match);
                      setQuizOpen(false);
                      scrollToSection('top');
                    }}
                    className="bg-[#1B5153] hover:bg-[#133C3E] text-white text-xs font-semibold px-6 py-2.5 rounded-full"
                  >
                    Preview on Hero Room Wall
                  </button>
                  <button
                    onClick={() => setQuizStep(0)}
                    className="text-xs font-semibold text-slate-600 hover:text-[#142333] px-4 py-2.5"
                  >
                    Retake Quiz
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ==========================================
          COMMUNITY SHARE MODAL (#AccordPaints)
      ========================================== */}
      {shareModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#FAF9F5] rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative">
            <button
              onClick={() => setShareModalOpen(false)}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-200/70 hover:bg-slate-200 flex items-center justify-center text-slate-600"
            >
              <X className="w-4 h-4" />
            </button>
            <h3 className="font-serif-editorial text-2xl font-bold text-[#142333]">
              Share Your Transformation
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1.5">
              Tag <span className="font-semibold text-[#1B5153]">#AccordPaints</span> or upload your before & after room photo for a chance to be featured and win a $250 paint voucher.
            </p>
            <div
              onClick={() => {
                setShareModalOpen(false);
                triggerToast('Photo uploader ready! Thanks for sharing with #AccordPaints.');
              }}
              className="mt-5 border-2 border-dashed border-[#1B5153]/40 hover:border-[#1B5153] bg-[#E4EEEE]/50 rounded-2xl p-8 text-center cursor-pointer transition-colors"
            >
              <Upload className="w-7 h-7 text-[#1B5153] mx-auto mb-2" />
              <div className="text-xs font-semibold text-[#142333]">
                Click to select Before & After photos
              </div>
              <div className="text-[11px] text-slate-500 mt-0.5">
                JPG or PNG up to 10MB
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
