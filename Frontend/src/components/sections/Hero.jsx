import React from 'react';
import { motion } from 'framer-motion';
import { MousePointer2, Sparkles, Terminal } from 'lucide-react';
import { Link } from 'react-router-dom';
import { siteData } from '../../data/content';
import heroImg from '../../assets/hero.png';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-24 pb-12">
      {/* Dynamic Background Elements */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-brand/10 rounded-full blur-[100px] animate-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-72 h-72 bg-teal-500/5 rounded-full blur-[100px] animate-pulse delay-700" />
      
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="section-container relative z-10 flex flex-col items-center text-center"
      >
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass border-brand/20 mb-6 hover:bg-brand/5 transition-colors cursor-default"
        >
          <Sparkles size={14} className="text-brand animate-pulse" />
          <span className="text-xs font-bold text-brand-light tracking-widest uppercase">Available for projects</span>
        </motion.div>

        <motion.div variants={itemVariants} className="relative">
          <h1 className="text-5xl md:text-8xl font-black mb-4 leading-none tracking-tighter">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand via-brand-light to-teal-300 glow-text inline-block hover:scale-[1.01] transition-transform duration-500">Aryan</span>
          </h1>
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-zinc-400 max-w-2xl mb-10 font-medium leading-relaxed"
        >
          {siteData.hero.description}
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <Link to="/mywork">
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="btn btn-primary px-6 py-3 text-base shadow-lg"
            >
              Explore My Work
              <motion.span
                animate={{ x: [0, 3, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="ml-2"
              >
                →
              </motion.span>
            </motion.button>
          </Link>

          <Link to="/contact">
            <motion.button 
              whileHover={{ x: 3 }}
              className="btn btn-ghost px-6 py-3 text-base flex items-center gap-2"
            >
              <MousePointer2 size={18} />
              <span className="font-semibold text-white">Let's Talk</span>
            </motion.button>
          </Link>
        </motion.div>

        {/* Professional Preview Area */}
        <motion.div
           variants={itemVariants}
           className="mt-16 relative w-full max-w-lg aspect-[3/4] md:aspect-square glass rounded-[2rem] border-white/5 overflow-hidden group shadow-2xl flex flex-col pt-4"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-brand/5 to-transparent opacity-50" />
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay" />
          
          <img 
            src={heroImg} 
            alt="Aryan Pathak" 
            className="w-full h-full object-cover object-top grayscale-[30%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" 
          />

          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-background via-background/40 to-transparent flex items-end justify-center pb-8 p-6">
             <div className="flex flex-col items-center gap-2">
                <div className="flex gap-2">
                  {[1, 2, 3].map((i) => (
                    <motion.div
                      key={i}
                      animate={{ scaleY: [1, 1.5, 1], opacity: [0.3, 0.6, 0.3] }}
                      transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                      className="w-1 h-8 bg-brand rounded-full"
                    />
                  ))}
                </div>
                <p className="font-heading font-medium tracking-[0.2em] uppercase text-[10px] text-zinc-500">System Architect</p>
             </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
