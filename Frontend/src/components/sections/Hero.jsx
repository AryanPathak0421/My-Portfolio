import React from 'react';
import { motion } from 'framer-motion';
import { MousePointer2, Sparkles, Terminal, Github, Trophy, Gamepad2, Code2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { siteData } from '../../data/content';

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
        className="section-container w-full relative z-10 flex flex-col items-center text-center"
      >
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass border-brand/20 mb-6 hover:bg-brand/5 transition-colors cursor-default"
        >
          <Sparkles size={14} className="text-brand animate-pulse" />
          <span className="text-xs font-bold text-brand-light tracking-widest uppercase">Available for projects</span>
        </motion.div>

        <motion.div variants={itemVariants} className="relative">
          <h1 className="text-5xl md:text-8xl font-black mb-4 leading-[1.1] tracking-[-0.03em]">
            Hi, I'm <span className="text-gradient glow-text italic font-serif inline-block hover:scale-[1.02] transition-transform duration-500 origin-left">Aryan</span>
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
          <Link to="/myworks">
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

        {/* Preview Area Wrapper — code card + floating coding/game badges, full width */}
        <div className="mt-16 relative w-full flex justify-center">

          {/* Floating Badge: GitHub repos (top-left) */}
          <motion.a
            href="https://github.com/AryanPathak0421"
            target="_blank"
            rel="noopener noreferrer"
            variants={itemVariants}
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            whileHover={{ scale: 1.05 }}
            className="hidden lg:flex absolute left-0 top-4 items-center gap-0 xl:gap-3 glass p-3 xl:px-5 xl:py-3 rounded-2xl border-white/10 shadow-xl hover:border-brand/30 transition-colors"
          >
            <div className="p-1 xl:p-2 rounded-xl bg-white/5 text-zinc-300">
              <Github size={18} />
            </div>
            <div className="hidden xl:block">
              <p className="text-sm font-bold text-white leading-none mb-1">15+ Repos</p>
              <p className="text-[10px] text-zinc-500 uppercase tracking-wider font-bold">On GitHub</p>
            </div>
          </motion.a>

          {/* Floating Badge: Projects shipped (bottom-left) */}
          <motion.div
            variants={itemVariants}
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            whileHover={{ scale: 1.05 }}
            className="hidden lg:flex absolute left-4 bottom-8 items-center gap-0 xl:gap-3 glass p-3 xl:px-5 xl:py-3 rounded-2xl border-white/10 shadow-xl hover:border-brand/30 transition-colors"
          >
            <div className="p-1 xl:p-2 rounded-xl bg-amber-500/10 text-amber-400">
              <Trophy size={18} />
            </div>
            <div className="hidden xl:block">
              <p className="text-sm font-bold text-white leading-none mb-1">15+ Projects</p>
              <p className="text-[10px] text-zinc-500 uppercase tracking-wider font-bold">Shipped Live</p>
            </div>
          </motion.div>

          {/* Floating Badge: Play a game (top-right) */}
          <motion.div
            variants={itemVariants}
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
          >
            <Link to="/play">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="hidden lg:flex absolute right-0 top-4 items-center gap-0 xl:gap-3 glass p-3 xl:px-5 xl:py-3 rounded-2xl border-white/10 shadow-xl hover:border-brand/30 transition-colors cursor-pointer"
              >
                <div className="p-1 xl:p-2 rounded-xl bg-brand/10 text-brand">
                  <Gamepad2 size={18} />
                </div>
                <div className="hidden xl:block">
                  <p className="text-sm font-bold text-white leading-none mb-1">Play a Game</p>
                  <p className="text-[10px] text-zinc-500 uppercase tracking-wider font-bold">Tic-Tac-Toe & More</p>
                </div>
              </motion.div>
            </Link>
          </motion.div>

          {/* Floating Badge: Full-stack + AI (bottom-right) */}
          <motion.div
            variants={itemVariants}
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
            whileHover={{ scale: 1.05 }}
            className="hidden lg:flex absolute right-4 bottom-8 items-center gap-0 xl:gap-3 glass p-3 xl:px-5 xl:py-3 rounded-2xl border-white/10 shadow-xl hover:border-brand/30 transition-colors"
          >
            <div className="p-1 xl:p-2 rounded-xl bg-emerald-500/10 text-emerald-400">
              <Code2 size={18} />
            </div>
            <div className="hidden xl:block">
              <p className="text-sm font-bold text-white leading-none mb-1">Full-Stack + AI</p>
              <p className="text-[10px] text-zinc-500 uppercase tracking-wider font-bold">Always Shipping</p>
            </div>
          </motion.div>

        {/* Professional Preview Area — Code Editor Card */}
        <motion.div
           variants={itemVariants}
           whileHover={{ y: -10, rotateX: 5, rotateY: -5 }}
           transition={{ type: "spring", stiffness: 300, damping: 20 }}
           className="relative w-full max-w-2xl xl:max-w-3xl glass rounded-[2rem] border-white/10 overflow-hidden group shadow-[0_20px_50px_rgba(0,0,0,0.5)] perspective-1000 text-left"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-brand/10 to-transparent opacity-50 z-0 pointer-events-none" />
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay z-0 pointer-events-none" />

          {/* Window Bar */}
          <div className="relative z-10 flex items-center gap-2 px-5 py-4 border-b border-white/5 bg-white/[0.02]">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/70" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
              <div className="w-3 h-3 rounded-full bg-emerald-500/70" />
            </div>
            <div className="flex items-center gap-2 mx-auto text-zinc-500 text-xs font-mono">
              <Terminal size={13} />
              <span>aryan.dev</span>
            </div>
          </div>

          {/* Code Body */}
          <div className="relative z-10 p-6 md:p-8 font-mono text-sm md:text-base leading-loose">
            <p><span className="text-purple-400">const</span> <span className="text-brand-light">developer</span> <span className="text-zinc-500">=</span> <span className="text-zinc-500">{'{'}</span></p>
            <p className="pl-6"><span className="text-sky-300">name</span><span className="text-zinc-500">:</span> <span className="text-emerald-400">'Aryan Pathak'</span><span className="text-zinc-500">,</span></p>
            <p className="pl-6"><span className="text-sky-300">role</span><span className="text-zinc-500">:</span> <span className="text-emerald-400">'Full-Stack Engineer'</span><span className="text-zinc-500">,</span></p>
            <p className="pl-6"><span className="text-sky-300">focus</span><span className="text-zinc-500">:</span> <span className="text-emerald-400">'AI Engineering'</span><span className="text-zinc-500">,</span></p>
            <p className="pl-6">
              <span className="text-sky-300">stack</span><span className="text-zinc-500">:</span> <span className="text-zinc-500">[</span>
              <span className="text-emerald-400">'React'</span><span className="text-zinc-500">,</span> <span className="text-emerald-400">'Node'</span><span className="text-zinc-500">,</span> <span className="text-emerald-400">'Python'</span>
              <span className="text-zinc-500">],</span>
            </p>
            <p className="pl-6"><span className="text-sky-300">available</span><span className="text-zinc-500">:</span> <span className="text-amber-400">true</span><span className="text-zinc-500">,</span></p>
            <p><span className="text-zinc-500">{'};'}</span></p>
            <p className="mt-2">
              <span className="text-purple-400">console</span><span className="text-zinc-500">.</span><span className="text-sky-300">log</span><span className="text-zinc-500">(</span><span className="text-emerald-400">`Hi, I'm ${'{'}developer.name{'}'}`</span><span className="text-zinc-500">);</span>
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="inline-block w-2 h-4 bg-brand ml-1 translate-y-0.5"
              />
            </p>
          </div>

          {/* Status Bar */}
          <div className="relative z-10 flex items-center justify-between px-6 py-4 border-t border-white/5 bg-white/[0.02]">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[11px] font-bold uppercase tracking-widest text-zinc-400">Available for projects</span>
            </div>
            <div className="flex gap-1.5">
              {[1, 2, 3].map((i) => (
                <motion.div
                  key={i}
                  animate={{ scaleY: [1, 2, 1], opacity: [0.4, 1, 0.4] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2, ease: "easeInOut" }}
                  className="w-1 h-4 bg-brand rounded-full"
                />
              ))}
            </div>
          </div>
        </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
