import React from 'react';
import { motion } from 'framer-motion';
import { Camera } from 'lucide-react';
import { siteData } from '../../data/content';

const Gallery = () => {
  return (
    <section id="gallery" className="section-container relative overflow-hidden">
      <div className="absolute top-0 left-0 w-72 h-72 bg-brand/5 blur-[120px] rounded-full -translate-x-1/2 -translate-y-1/2" />

      <div className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-1.5 h-1.5 bg-brand rounded-full animate-pulse" />
          <span className="text-xs font-bold tracking-widest uppercase text-brand">Moments</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-black mb-4 leading-tight">
          Gallery <span className="text-white/40 italic font-serif">& Talks</span>.
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {siteData.gallery.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass-card p-2 bg-surface/20 hover:bg-surface/40 border-white/5 hover:border-brand/20 transition-all duration-500 group overflow-hidden"
          >
            <div className="aspect-[4/3] rounded-xl overflow-hidden relative">
              <img
                src={item.image}
                alt={item.caption}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
                <span className="flex items-center gap-1.5 text-white text-xs font-semibold">
                  <Camera size={14} />
                  {item.caption}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
