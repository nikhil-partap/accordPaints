// Product-page copy shared across products. General painting guidance, not product-specific claims.

export const ROYALE_GALLERY = [
  { src: '/images/accord_royale_pedestal.jpg', alt: 'Accord Royale Matte tin on a stone pedestal' },
  { src: '/images/accord_room_arches.jpg', alt: 'Arched hallway finished in a deep teal matte' },
  { src: '/images/accord_matte_texture.jpg', alt: 'Close-up of the velvet matte finish' },
  { src: '/images/accord_visualizer_room.jpg', alt: 'Living room with a teal feature wall' },
];

export const ROYALE_SHADES = [
  { name: 'Forest Mist', hex: '#2F6563' },
  { name: 'Sage Veil', hex: '#9AAE97' },
  { name: 'Terracotta Dream', hex: '#B65F42' },
  { name: 'Haldi Gold', hex: '#D9A441' },
  { name: 'Calm Sea', hex: '#4D7A7C' },
  { name: 'Indigo Night', hex: '#2E3F5C' },
  { name: 'Warm Linen', hex: '#E5DACA' },
  { name: 'Jaipur Rose', hex: '#D98C7E' },
];

const WALL_PREP = {
  title: 'Prepare the surface',
  body: 'Make sure the wall is clean, dry and free of loose paint, dust and fungus. Fill cracks and sand smooth.',
};

export const APPLICATION = {
  interior: [
    WALL_PREP,
    { title: 'Prime first', body: 'Apply one coat of Accord Water Thinnable Cement Primer on new plaster or patchy walls for even colour.' },
    { title: 'Apply two coats', body: 'Thin as recommended, stir well and apply two coats with a good roller or brush, leaving the recoat time between coats.' },
  ],
  exterior: [
    WALL_PREP,
    { title: 'Seal with exterior primer', body: 'Apply Accord Exterior Wall Primer Deep Seal to bind the surface and resist alkali and damp.' },
    { title: 'Apply two coats', body: 'Paint in dry weather, avoiding harsh midday sun and rain for a few hours after application.' },
  ],
  primer: [
    WALL_PREP,
    { title: 'Let fresh plaster cure', body: 'New cement plaster should be allowed to cure fully before priming.' },
    { title: 'Apply one even coat', body: 'Thin as recommended and apply one even coat. Let it dry fully before your finish coats.' },
  ],
};

export const FAQS = {
  interior: [
    { q: 'How many coats do I need?', a: 'Two coats over a primed wall give the most even, long-lasting colour. One coat can be enough when repainting in the same shade.' },
    { q: 'Can I get any shade I like?', a: 'Yes. Pick a shade from the Accord shade card and your dealer will tint the paint for you.' },
    { q: 'Do I need a primer?', a: 'On new plaster, patchy walls or a big colour change, yes. A primer helps the finish coat look even and last longer.' },
    { q: 'Where can I buy it?', a: 'Use Find a dealer to locate your nearest Accord dealer, who can also confirm price and stock.' },
  ],
  exterior: [
    { q: 'When is the best time to paint outside?', a: 'In dry weather. Avoid painting just before rain or in harsh midday sun.' },
    { q: 'Do I need a primer on exterior walls?', a: 'Yes. An exterior primer seals the surface and helps the topcoat resist damp and weather.' },
    { q: 'Can I get any shade I like?', a: 'Yes. Your dealer can tint the paint to a shade from the Accord shade card.' },
    { q: 'Where can I buy it?', a: 'Use Find a dealer to locate your nearest Accord dealer.' },
  ],
  primer: [
    { q: 'Why use a primer?', a: 'Primer seals the surface so your finish coats go on evenly, use less paint and last longer.' },
    { q: 'Interior or exterior primer?', a: 'Use the Water Thinnable Cement Primer indoors and the Exterior Wall Primer Deep Seal on outside walls.' },
    { q: 'How long before I can paint over it?', a: 'Let the primer dry fully as per the pack instructions before applying your finish coats.' },
    { q: 'Where can I buy it?', a: 'Use Find a dealer to locate your nearest Accord dealer.' },
  ],
};
