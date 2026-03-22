import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, ExternalLink, ChevronRight } from 'lucide-react';
import { siteData } from '../../data/content';

const Experience = () => {
  return (
    <section id="experience" className="section-container relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-brand/5 blur-[120px] rounded-full translate-x-1/2 translate-y-1/2" />
      
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-1.5 h-1.5 bg-brand rounded-full animate-pulse" />
          <span className="text-xs font-bold tracking-widest uppercase text-brand">Professional Journey</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-black mb-4 leading-tight">
          Work <span className="text-white/40 italic">Experience</span>.
        </h2>
      </div>

      <div className="relative">
        {/* Vertical Timeline Line (Desktop) */}
        <div className="absolute left-[17px] top-0 bottom-0 w-[1.5px] bg-gradient-to-b from-brand via-zinc-800 to-transparent hidden md:block" />

        <div className="space-y-8">
          {siteData.experience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative pl-0 md:pl-16 group"
            >
              {/* Timeline Dot (Desktop) */}
              <div className="absolute left-0 top-1.5 w-9 h-9 bg-surface border-2 border-zinc-900 rounded-lg hidden md:flex items-center justify-center text-brand group-hover:bg-brand group-hover:text-white transition-all duration-500 z-10">
                <Briefcase size={16} />
              </div>

              <div className="glass-card p-6 bg-surface/20 hover:bg-surface/40 border-white/5 hover:border-brand/20 transition-all duration-500">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-brand transition-colors">
                      {exp.role}
                    </h3>
                    <div className="flex flex-wrap items-center gap-3 mt-1.5 text-zinc-500">
                      <span className="flex items-center gap-1.5 font-semibold text-xs text-brand-light">
                        <Briefcase size={14} />
                        {exp.company}
                      </span>
                      <span className="flex items-center gap-1.5 text-[11px] font-medium tracking-wide">
                        <Calendar size={14} />
                        {exp.period}
                      </span>
                    </div>
                  </div>
                  
                  {exp.period.includes('Present') && (
                    <div className="self-start px-3 py-1 rounded-full bg-brand/10 border border-brand/20 text-brand text-[10px] font-black tracking-widest uppercase">
                      ACTIVE
                    </div>
                  )}
                </div>

                <p className="text-zinc-500 text-sm md:text-base leading-relaxed mb-4">
                  {exp.description}
                </p>

                <div className="flex items-center gap-2">
                  <div className="h-[1px] flex-grow bg-white/5 group-hover:bg-brand/10 transition-all" />
                  <ChevronRight size={16} className="text-zinc-700 group-hover:text-brand transition-all group-hover:translate-x-1" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;