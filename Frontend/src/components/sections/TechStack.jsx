import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { siteData } from '../../data/content';
import {
  Layers,
  Database,
  Cpu,
  Globe,
  Terminal,
  Workflow,
  LayoutGrid
} from 'lucide-react';

const categories = [
  { name: 'All', icon: <LayoutGrid size={16} />, color: 'text-zinc-300', glow: 'shadow-white/10' },
  { name: 'Languages', icon: <Terminal size={16} />, color: 'text-brand', glow: 'shadow-brand/20' },
  { name: 'Frontend', icon: <Globe size={16} />, color: 'text-indigo-400', glow: 'shadow-indigo-500/20' },
  { name: 'Backend', icon: <Layers size={16} />, color: 'text-emerald-400', glow: 'shadow-emerald-500/20' },
  { name: 'Database', icon: <Database size={16} />, color: 'text-amber-400', glow: 'shadow-amber-500/20' },
  { name: 'AI/ML', icon: <Cpu size={16} />, color: 'text-purple-400', glow: 'shadow-purple-500/20' },
  { name: 'Workflow & Tools', icon: <Workflow size={16} />, color: 'text-rose-400', glow: 'shadow-rose-500/20' },
];

const TechStack = () => {
  const [active, setActive] = useState('All');

  const filtered = useMemo(() => {
    if (active === 'All') return siteData.techStack;
    return siteData.techStack.filter(t => t.category === active);
  }, [active]);

  const activeCat = categories.find(c => c.name === active);

  return (
    <section id="tech" className="py-8 md:py-12 relative overflow-hidden bg-surface/10">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.05)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="section-container relative z-10">
        <div className="text-center mb-10">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-3 py-1 rounded-full glass border-brand/20 mb-3"
          >
            <span className="text-[10px] font-bold tracking-widest uppercase text-brand">Expertise</span>
          </motion.div>
          <h2 className="text-3xl md:text-5xl font-black mb-4">Technical <span className="text-brand italic font-serif">Arsenal</span></h2>
          <p className="text-zinc-500 max-w-xl mx-auto text-base font-medium">
            {siteData.techStack.length}+ technologies I use to build professional-grade systems — pick a category to explore.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {categories.map((cat) => {
            const count = cat.name === 'All'
              ? siteData.techStack.length
              : siteData.techStack.filter(t => t.category === cat.name).length;
            const isActive = active === cat.name;
            return (
              <button
                key={cat.name}
                onClick={() => setActive(cat.name)}
                className={`relative flex items-center gap-2 px-4 py-2.5 rounded-full border text-sm font-bold tracking-tight transition-colors duration-300 ${
                  isActive
                    ? 'text-white border-brand/40 bg-brand/10'
                    : 'text-zinc-500 border-white/10 bg-white/[0.02] hover:text-zinc-300 hover:border-white/20'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="tech-tab-glow"
                    className="absolute inset-0 rounded-full bg-brand/10 border border-brand/30"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <span className={`relative z-10 flex items-center gap-2 ${isActive ? 'text-brand' : cat.color}`}>
                  {cat.icon}
                </span>
                <span className="relative z-10">{cat.name}</span>
                <span className={`relative z-10 text-[10px] font-black px-1.5 py-0.5 rounded-full ${isActive ? 'bg-brand text-background' : 'bg-white/5 text-zinc-500'}`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Filtered Tech Grid */}
        <motion.div
          layout
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((tech) => (
              <motion.div
                key={tech.name}
                layout
                initial={{ opacity: 0, scale: 0.85, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.85, y: -10 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -6, scale: 1.04 }}
                className={`group relative glass-card p-5 flex flex-col items-center text-center gap-3 bg-white/[0.02] hover:bg-white/[0.05] border-white/10 hover:border-brand/30 transition-colors duration-300 hover:shadow-lg ${activeCat?.glow || ''}`}
              >
                <div className="w-12 h-12 rounded-2xl bg-white/5 p-2.5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-inner">
                  {tech.icon ? (
                    <img src={tech.icon} alt={tech.name} className="w-full h-full object-contain drop-shadow-md" />
                  ) : (
                    <Layers size={20} className="text-brand" />
                  )}
                </div>
                <span className="text-xs md:text-sm font-bold text-zinc-300 group-hover:text-white tracking-tight leading-tight transition-colors">
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;
