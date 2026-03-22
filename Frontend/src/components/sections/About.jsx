import React from 'react';
import { motion } from 'framer-motion';
import { siteData } from '../../data/content';

const About = () => {
  return (
    <section id="about" className="section-container relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand/5 blur-[100px] rounded-full" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-2 mb-4">
            <div className="w-1.5 h-1.5 bg-brand rounded-full animate-pulse" />
            <span className="text-xs font-bold tracking-widest uppercase text-brand">The Story</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black mb-6 leading-tight">
            More than just <span className="text-white/40 italic">code</span>.
          </h2>
          <p className="text-zinc-500 text-base md:text-lg leading-relaxed mb-8">
            {siteData.about.description}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {siteData.about.highlights.map((item, i) => (
              <div key={i} className="p-4 glass-card border-white/5 bg-white/5 hover:border-brand/20 transition-all">
                <h4 className="font-bold text-white text-sm mb-1">{item.title}</h4>
                <p className="text-xs text-zinc-500 leading-normal">{item.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative aspect-square max-w-md mx-auto"
        >
          {/* Decorative Rings */}
          <div className="absolute inset-0 border-2 border-brand/20 rounded-full animate-[spin_20s_linear_infinite]" />
          <div className="absolute inset-4 border border-teal-500/10 rounded-full animate-[spin_15s_linear_infinite_reverse]" />

          <div className="absolute inset-8 glass rounded-full overflow-hidden flex items-center justify-center bg-gradient-to-br from-brand/10 to-transparent">
            <div className="text-center">
              <span className="text-6xl font-black text-brand-light">5+</span>
              <p className="text-zinc-500 text-xs font-bold tracking-widest uppercase mt-2">Years of Tech</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
