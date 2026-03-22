import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Calendar, BookOpen } from 'lucide-react';
import { siteData } from '../../data/content';

const Education = () => {
  return (
    <section id="education" className="section-container relative">
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-brand/5 blur-[120px] rounded-full -translate-y-1/2" />
      
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-1.5 h-1.5 bg-brand rounded-full animate-pulse" />
          <span className="text-xs font-bold tracking-widest uppercase text-brand">Academic Journey</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-black mb-4 leading-tight">
          Education & <span className="text-white/40 italic">Achievements</span>.
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {siteData.education.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group relative glass-card p-6 bg-surface/20 hover:bg-surface/40 transition-all duration-500 border-white/5 hover:border-brand/20"
          >
            {/* Decoration */}
            <div className="absolute top-2 right-2 p-2 opacity-5 group-hover:opacity-60 group-hover:text-brand transition-all duration-500">
              <GraduationCap size={32} />
            </div>

            <div className="flex flex-col h-full">
              <div className="flex items-center gap-2 text-brand font-mono text-xs mb-3">
                <Calendar size={12} />
                <span>{edu.period}</span>
              </div>

              <h3 className="text-xl font-bold mb-1.5 group-hover:text-brand transition-colors leading-tight">
                {edu.degree}
              </h3>
              
              <p className="text-zinc-500 text-sm font-medium mb-4 flex items-center gap-1.5">
                <BookOpen size={14} className="text-zinc-600" />
                {edu.institution}
              </p>

              <div className="mt-auto pt-4 border-t border-white/5 flex items-center justify-between">
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-wider text-zinc-600 font-bold mb-0.5">Score</span>
                  <span className="text-lg font-black text-white">{edu.score}</span>
                </div>
                {edu.details && (
                   <div className="max-w-[120px] text-right">
                     <p className="text-[10px] text-zinc-500 leading-tight italic">
                       {edu.details}
                     </p>
                   </div>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Extra Achievements */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-8 p-6 glass-card bg-brand/5 border-brand/10 flex flex-col md:flex-row items-center gap-6"
      >
        <div className="p-3 bg-brand/10 rounded-xl text-brand">
          <Award size={36} />
        </div>
        <div>
          <h4 className="text-lg font-bold mb-1 text-white">Certifications & Exams</h4>
          <p className="text-sm text-zinc-500 max-w-4xl">
            Certified training from <span className="text-brand font-medium">NSDC (Govt. of India)</span> in Python. 
            Successfully qualified <span className="text-white font-medium">JEE, VITEEE, and CUET (2023)</span>.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default Education;