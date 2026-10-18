# Accord Paints

Marketing and product-catalogue website for Accord Paints, built with React 19, Vite and Tailwind CSS 4, and deployed on Vercel.

## Getting started

```bash 
npm install
npm run dev      # start the dev server
npm run build    # production build into dist/
npm run preview  # serve the production build locally
npm run lint     # run Oxlint
```

## Project structure

```
src/
  App.jsx                  # shell: routing (home / product), smooth section scrolling, toast
  index.css                # Tailwind import + design tokens (@theme: cream, forest, terracotta…)
  landing/                 # home page sections
    Hero, Spaces, RoyaleSpotlight, Products, Colours (wall visualiser),
    Calculator (how it works + paint calculator), Inspiration, Dealer (find / become a dealer)
  product/
    ProductPage.jsx        # one template for every product (Accord Royale is the demo page)
    content.js             # application steps, FAQs, Royale gallery and shades
  components/
    layout/Header.jsx, layout/Footer.jsx, WallPreview.jsx, Toast.jsx
  data/
    products.js            # the 6 demo products + categories
    colours.js             # demo shade families (replace with Accord's shade card)
  lib/routing.js
public/images/
  products/cutout/         # real Accord pack photos with the background removed
  rooms/                   # room/lifestyle images (AI-generated, no packaging shown)
  brand/accord-logo.png    # the real accord logo
design/                    # concept mockup and source images (not shipped)
```

## Routing

- `/` home page
- `/products/<id>` product page, e.g. `/products/accord-royale` (old `#accord-royale` links still work)

`vercel.json` rewrites every path to `index.html` so these URLs work on direct load.

## Content notes

- Prices are intentionally not shown (the brand sells through dealers).
- Colour names and hex values in `data/colours.js` are placeholders for the real shade card.
- The "Find a dealer" search and dealership enquiry only show a confirmation in this demo.
