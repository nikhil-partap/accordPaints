// The demo catalogue: Accord Royale (flagship) plus five real Accord products.
// `image` for real products is a background-removed cut-out of the actual pack photo.

export const CATEGORIES = [
  { id: 'interior', label: 'Interior walls', blurb: 'Rich, washable finishes for every room.', image: '/images/rooms/interior-bedroom.webp' },
  { id: 'exterior', label: 'Exterior walls', blurb: 'Weather, UV and monsoon protection.', image: '/images/rooms/exterior-house.webp' },
  { id: 'primer', label: 'Primers & prep', blurb: 'The base coat that makes paint last.', image: '/images/rooms/primer-wall.webp' },
];

export const ACCORD_PRODUCTS = [
  {
    "id": "accord-royale",
    "name": "Accord Royale Matte",
    "series": "Imperial Series",
    "category": "interior",
    "tagline": "Imperial velvet architectural matte with deep optical richness",
    "sheen": "Imperial Dead Matte (<3% Gloss)",
    "coverage": "140 - 170 sq.ft / Litre",
    "dryingTime": "20 mins (Touch), 3 hrs (Recoat)",
    "dilution": "40-45% with clean water",
    "packSizes": [
      "1 L",
      "4 L",
      "10 L",
      "20 L"
    ],
    "image": "/images/accord_royale_pedestal.jpg",
    "features": [
      "Velvety smooth non-reflective finish",
      "Ultra-dense pigment dispersion",
      "Washable & burnish resistant",
      "Low VOC, breathable finish"
    ],
    "idealFor": "Luxury salons, art spaces, master bedrooms, and dining galleries",
    "panel": "#E9E4D6",
    "photo": true,
    "isFlagship": true
  },
  {
    "id": "luxury-semi-gloss",
    "name": "Luxury Semi Gloss Emulsion",
    "series": "Platinum Series",
    "category": "interior",
    "tagline": "Refined soft sheen finish built for lasting durability",
    "sheen": "Semi-Gloss (35-45% Gloss)",
    "coverage": "140 - 160 sq.ft / Litre",
    "dryingTime": "30 mins (Touch), 4 hrs (Recoat)",
    "dilution": "40-50% with clean water",
    "packSizes": [
      "1 L",
      "4 L",
      "10 L",
      "20 L"
    ],
    "image": "/images/products/cutout/luxury-semi-gloss-emulsion.webp",
    "features": [
      "Stain resistant & washable",
      "Anti-fungal & anti-bacterial barrier",
      "Ultra low VOC & odorless formula",
      "Advanced pure acrylic resin"
    ],
    "idealFor": "Living rooms, master suites, corridors, and premium accent spaces",
    "panel": "#F2E3DF",
    "isFlagship": false
  },
  {
    "id": "premium-luxury-emulsion",
    "name": "Premium Luxury Emulsion",
    "series": "Gold Series",
    "category": "interior",
    "tagline": "Silky smooth rich matte finish with superior opacity",
    "sheen": "Soft Matte (10-15% Gloss)",
    "coverage": "130 - 150 sq.ft / Litre",
    "dryingTime": "30 mins (Touch), 4 hrs (Recoat)",
    "dilution": "40% with clean water",
    "packSizes": [
      "1 L",
      "4 L",
      "10 L",
      "20 L"
    ],
    "image": "/images/products/cutout/premium-luxury-emulsion.webp",
    "features": [
      "Silky smooth matte elegance",
      "High opacity single-coat coverage",
      "Long-lasting pigment stability",
      "Easy washability"
    ],
    "idealFor": "Bedrooms, dining rooms, ceilings, and modern interiors",
    "panel": "#F1E1EA",
    "isFlagship": false
  },
  {
    "id": "exterior-emulsion",
    "name": "Exterior WeatherShield Emulsion",
    "series": "Gold Series",
    "category": "exterior",
    "tagline": "Extreme weather, UV and heavy rainfall protection",
    "sheen": "Eggshell Weather-Proof",
    "coverage": "110 - 130 sq.ft / Litre",
    "dryingTime": "45 mins (Touch), 4-6 hrs (Recoat)",
    "dilution": "40% with clean water",
    "packSizes": [
      "1 L",
      "4 L",
      "10 L",
      "20 L"
    ],
    "image": "/images/products/cutout/exterior-emulsion.webp",
    "features": [
      "Anti-algal and anti-fungal defense",
      "UV cross-linking polymer technology",
      "Resists peeling, chalking & fading",
      "Long-lasting exterior protection"
    ],
    "idealFor": "Building facades, exterior walls, boundary fences, and balconies",
    "panel": "#E6EEDB",
    "isFlagship": false
  },
  {
    "id": "water-thinnable-cement-primer",
    "name": "Water Thinnable Cement Primer",
    "series": "Gold Series Primer",
    "category": "primer",
    "tagline": "High-adhesion sealer for fresh cement plaster & masonry",
    "sheen": "Dead Flat Base",
    "coverage": "120 - 140 sq.ft / Litre",
    "dryingTime": "30 mins (Touch), 4 hrs (Recoat)",
    "dilution": "80-100% with water",
    "packSizes": [
      "1 L",
      "4 L",
      "10 L",
      "20 L"
    ],
    "image": "/images/products/cutout/water-thinnable-cement-primer.webp",
    "features": [
      "Excellent alkali & efflorescence resistance",
      "Seals porous surfaces uniformly",
      "Increases topcoat coverage by 25%",
      "Quick drying interior formula"
    ],
    "idealFor": "Interior fresh plaster, drywall, and primed concrete",
    "panel": "#F3E6DA",
    "isFlagship": false
  },
  {
    "id": "exterior-wall-primer",
    "name": "Exterior Wall Primer Deep Seal",
    "series": "Gold Series Primer",
    "category": "primer",
    "tagline": "Weatherproof alkali-resistant deep penetrating exterior base coat",
    "sheen": "Penetrating Matte Base",
    "coverage": "100 - 120 sq.ft / Litre",
    "dryingTime": "45 mins (Touch), 4-6 hrs (Recoat)",
    "dilution": "100% with water",
    "packSizes": [
      "1 L",
      "4 L",
      "10 L",
      "20 L"
    ],
    "image": "/images/products/cutout/exterior-wall-primer.webp",
    "features": [
      "Deep penetrating acrylic formulation",
      "Resists harsh efflorescence and moisture",
      "Anchor bond for exterior emulsions",
      "Prevents patchy discoloration"
    ],
    "idealFor": "New and repainted exterior cement surfaces",
    "panel": "#E6E4F2",
    "isFlagship": false
  }
];

export const getProductById = (id) =>
  ACCORD_PRODUCTS.find((p) => p.id === String(id || '').toLowerCase().trim()) || ACCORD_PRODUCTS[0];

export const productsIn = (category) => ACCORD_PRODUCTS.filter((p) => p.category === category);
