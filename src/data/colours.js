// Demo shade palette. Names and hex values are illustrative — swap in Accord's real shade card.
export const COLOUR_FAMILIES = [
  {
    id: 'warm',
    label: 'Warm & earthy',
    shades: [
      { name: 'Terracotta Dream', hex: '#B65F42' },
      { name: 'Haldi Gold', hex: '#D9A441' },
      { name: 'Chai Latte', hex: '#C9A27E' },
      { name: 'Jaipur Rose', hex: '#D98C7E' },
      { name: 'Sindoor Red', hex: '#9E3B2F' },
      { name: 'Sandstone', hex: '#E0C9A6' },
    ],
  },
  {
    id: 'greens',
    label: 'Greens',
    shades: [
      { name: 'Sage Veil', hex: '#9AAE97' },
      { name: 'Tulsi Leaf', hex: '#6F8F5E' },
      { name: 'Forest Mist', hex: '#2F6563' },
      { name: 'Pistachio', hex: '#C5D3A8' },
      { name: 'Banyan', hex: '#465C45' },
      { name: 'Mint Lassi', hex: '#D7E6D5' },
    ],
  },
  {
    id: 'blues',
    label: 'Blues',
    shades: [
      { name: 'Monsoon Sky', hex: '#8FA9BD' },
      { name: 'Indigo Night', hex: '#2E3F5C' },
      { name: 'Calm Sea', hex: '#4D7A7C' },
      { name: 'Peacock', hex: '#1E6F7A' },
      { name: 'Powder Blue', hex: '#C9D8E3' },
      { name: 'Blue Pottery', hex: '#3E6D9C' },
    ],
  },
  {
    id: 'neutrals',
    label: 'Neutrals',
    shades: [
      { name: 'Ivory Silk', hex: '#F1EADB' },
      { name: 'Cotton White', hex: '#F6F3EC' },
      { name: 'Pebble Grey', hex: '#B9B4AA' },
      { name: 'Warm Linen', hex: '#E5DACA' },
      { name: 'Charcoal', hex: '#4A4A48' },
      { name: 'Mushroom', hex: '#A79A8A' },
    ],
  },
];

export const ALL_SHADES = COLOUR_FAMILIES.flatMap((f) => f.shades);
