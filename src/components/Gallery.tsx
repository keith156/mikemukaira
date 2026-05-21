import { motion } from 'motion/react';

const galleryItems = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1545638167-333eec1823eb?auto=format&fit=crop&q=80&w=800&h=1000',
    caption: 'MARIYAM HERITAGE — 7-STOREY BLOCK',
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=800&h=600',
    caption: 'COORDINATION BY HAND — DESK TO DRAWING',
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800&h=1200',
    caption: 'LUXURY RESIDENCE — FULL MEP',
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=800&h=1400',
    caption: 'ESTATE LAYOUT — 12 PLOTS COORDINATED',
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800&h=1000',
    caption: 'MULTI-SCREEN DRAWING PRODUCTION',
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800&h=700',
    caption: 'MODERN INTERIOR REFURBISHMENT',
  },
];

export function Gallery() {
  return (
    <section id="gallery" className="py-32 relative bg-white/[0.01]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-16"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm mb-6 tracking-wide uppercase font-medium">
            Gallery
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight">
            Visual Highlights
          </h2>
          <p className="text-white/50 mt-4 max-w-xl mx-auto font-light">
            A curated masonry gallery showcasing architectural renders, layouts, and construction models.
          </p>
        </motion.div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: (index % 3) * 0.1 }}
              className="relative rounded-2xl overflow-hidden group break-inside-avoid shadow-lg mb-6"
            >
              <img
                src={item.src}
                alt={item.caption}
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 flex items-end">
                <p className="text-white text-sm font-bold tracking-widest uppercase leading-snug drop-shadow-md">
                  {item.caption}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
