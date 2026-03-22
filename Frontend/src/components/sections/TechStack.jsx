import React from 'react';
import { motion } from 'framer-motion';
import { siteData } from '../../data/content';
import {
  Code2,
  Database,
  Layers,
  Cpu,
  Globe,
  Terminal,
  Smartphone,
  Workflow
} from 'lucide-react';

const categories = [
  { name: 'Languages', icon: <Terminal size={20} />, color: 'text-brand' },
  { name: 'Frontend', icon: <Globe size={20} />, color: 'text-indigo-400' },
  { name: 'Backend', icon: <Layers size={20} />, color: 'text-emerald-400' },
  { name: 'Database', icon: <Database size={20} />, color: 'text-amber-400' },
  { name: 'AI/ML', icon: <Cpu size={20} />, color: 'text-purple-400' },
  { name: 'Workflow & Tools', icon: <Workflow size={20} />, color: 'text-rose-400' },
];

const TechStack = () => {
  return (
    <section id="tech" className="py-8 md:py-12 relative overflow-hidden bg-surface/10">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.03)_0%,transparent_70%)] pointer-events-none" />

      <div className="section-container relative z-10">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-3 py-1 rounded-full glass border-brand/20 mb-3"
          >
            <span className="text-[10px] font-bold tracking-widest uppercase text-brand">Expertise</span>
          </motion.div>
          <h2 className="text-3xl md:text-5xl font-black mb-4">Technical <span className="text-brand">Arsenal</span></h2>
          <p className="text-zinc-500 max-w-xl mx-auto text-base font-medium">
            Software, frameworks, and tools I use to build professional-grade systems.
          </p>
        </div>

        {/* Marquee Effect - Enhanced */}
        <div className="mb-12 relative group">
          <div className="flex gap-4 overflow-hidden pointer-events-none select-none relative py-4">
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

            <motion.div
              animate={{ x: [0, -1500] }}
              transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
              className="flex gap-6 whitespace-nowrap"
            >
              {[...siteData.techStack, ...siteData.techStack, ...siteData.techStack].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 px-5 py-2.5 glass rounded-2xl border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-colors"
                >
                  <div className="w-6 h-6 rounded-lg bg-brand/10 p-1 flex items-center justify-center">
                    {item.icon ? (
                      <img src={item.icon} alt={item.name} className="w-full h-full object-contain" />
                    ) : (
                      <Layers size={14} className="text-brand" />
                    )}
                  </div>
                  <span className="text-base font-bold text-zinc-300 tracking-tight">{item.name}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              viewport={{ once: true }}
              className="glass-card p-5 group border-white/5 bg-white/[0.01] hover:bg-white/[0.03]"
            >
              <div className={`p-2.5 rounded-xl bg-white/5 inline-flex mb-4 transition-transform group-hover:scale-105 ${cat.color}`}>
                {cat.icon}
              </div>
              <h3 className="text-lg font-bold mb-3">{cat.name}</h3>
              <div className="flex flex-wrap gap-1.5">
                {siteData.techStack
                  .filter(tech => tech.category === cat.name)
                  .map((tech, j) => (
                    <span
                      key={j}
                      className="flex items-center gap-1.5 px-2 py-1 rounded-md bg-white/5 border border-white/5 text-[10px] font-bold text-zinc-500 hover:text-white hover:border-brand/30 transition-all cursor-default"
                    >
                      {tech.icon && (
                        <img src={tech.icon} alt={tech.name} className="w-3 h-3 object-contain" />
                      )}
                      {tech.name}
                    </span>
                  ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
