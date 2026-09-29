import React from 'react';
import Layout from '../components/common/Layout';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Education from '../components/sections/Education';
import Experience from '../components/sections/Experience';
import TechStack from '../components/sections/TechStack';
import Gallery from '../components/sections/Gallery';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Mail, MapPin, Zap, Trophy } from 'lucide-react';
import { Link } from 'react-router-dom';
import { siteData } from '../data/content';

const HomePage = () => {
    return (
        <Layout>
            <Hero />

            <About />

            <Education />

            <Experience />

            <TechStack />

            <Gallery />

            {/* Featured Works Teaser */}
            <section className="section-container pt-8 pb-12">
                <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-8">
                    <div className="max-w-xl">
                        <h2 className="text-3xl md:text-5xl font-black mb-4">Innovative <span className="text-brand italic font-serif">Projects</span>.</h2>
                        <p className="text-zinc-500 text-base">
                            A glimpse into my work across AI engineering and full-stack development.
                        </p>
                    </div>
                    <Link to="/myworks" className="group flex items-center gap-2 text-brand font-bold text-base mb-2">
                        View All Projects
                        <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {siteData.projects.slice(0, 2).map((project, i) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, scale: 0.98 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="group relative glass-card p-3 bg-surface/20 overflow-hidden hover:border-brand/20 transition-all"
                        >
                            <div className="aspect-video rounded-lg overflow-hidden mb-4">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>
                            <div className="flex justify-between items-start px-2 pb-2">
                                <div>
                                    <span className="text-brand font-mono text-[10px] mb-1 block uppercase tracking-wider font-bold">{project.category}</span>
                                    <h3 className="text-xl font-bold">{project.title}</h3>
                                </div>
                                <div className="p-2 rounded-lg glass border-white/5 group-hover:bg-brand group-hover:text-white transition-all">
                                    <ArrowRight size={18} />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <section className="section-container py-12 md:py-20">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative glass-card overflow-hidden bg-gradient-to-br from-brand/10 via-surface/40 to-indigo-500/5 border-brand/10 p-10 md:p-16"
                >
                    {/* Decorative background */}
                    <div className="absolute top-0 right-0 w-96 h-96 bg-brand/10 blur-[120px] rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-72 h-72 bg-indigo-500/10 blur-[120px] rounded-full -translate-x-1/3 translate-y-1/3 pointer-events-none" />
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808010_1px,transparent_1px),linear-gradient(to_bottom,#80808010_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

                    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                        {/* Left: Copy + CTAs */}
                        <div className="lg:col-span-7 text-center lg:text-left">
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass border-brand/20 mb-6">
                                <Sparkles size={14} className="text-brand animate-pulse" />
                                <span className="text-xs font-bold text-brand-light tracking-widest uppercase">Open to opportunities</span>
                            </div>

                            <h2 className="text-3xl md:text-6xl font-black mb-6 leading-tight">
                                Let's build something <span className="text-brand italic font-serif">worth shipping</span>.
                            </h2>
                            <p className="text-zinc-500 max-w-xl mx-auto lg:mx-0 mb-8 text-base md:text-lg font-medium">
                                Have an idea, an internship role, or a project in mind? I reply fast and I'm always up for a good technical challenge.
                            </p>

                            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-8">
                                <Link to="/contact">
                                    <motion.button
                                        whileHover={{ scale: 1.03 }}
                                        whileTap={{ scale: 0.97 }}
                                        className="btn btn-primary px-7 py-3 text-base shadow-lg"
                                    >
                                        Let's Talk
                                        <ArrowRight size={18} className="ml-2" />
                                    </motion.button>
                                </Link>
                                <Link to="/myworks">
                                    <motion.button
                                        whileHover={{ x: 3 }}
                                        className="btn btn-ghost px-7 py-3 text-base"
                                    >
                                        See My Work
                                    </motion.button>
                                </Link>
                            </div>

                            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-2 text-sm text-zinc-500">
                                <a href={`mailto:${siteData.contact.email}`} className="flex items-center gap-2 hover:text-brand transition-colors">
                                    <Mail size={15} />
                                    {siteData.contact.email}
                                </a>
                                <span className="flex items-center gap-2">
                                    <MapPin size={15} />
                                    {siteData.contact.location}
                                </span>
                            </div>
                        </div>

                        {/* Right: Quick stats */}
                        <div className="lg:col-span-5 grid grid-cols-2 gap-4">
                            {[
                                { icon: <Trophy size={20} />, value: '15+', label: 'Projects Shipped', color: 'text-amber-400 bg-amber-500/10' },
                                { icon: <Zap size={20} />, value: '< 24h', label: 'Response Time', color: 'text-brand bg-brand/10' },
                                { icon: <Sparkles size={20} />, value: '9.2', label: 'CGPA (6th Sem)', color: 'text-indigo-400 bg-indigo-500/10' },
                                { icon: <ArrowRight size={20} className="-rotate-45" />, value: 'Open', label: 'For Full-Time & Intern', color: 'text-emerald-400 bg-emerald-500/10' },
                            ].map((stat, i) => (
                                <motion.div
                                    key={stat.label}
                                    initial={{ opacity: 0, y: 15 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    whileHover={{ y: -4 }}
                                    className="glass-card p-5 bg-white/[0.02] hover:bg-white/[0.05] border-white/10 hover:border-brand/20 transition-colors"
                                >
                                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${stat.color}`}>
                                        {stat.icon}
                                    </div>
                                    <p className="text-xl font-black text-white mb-1">{stat.value}</p>
                                    <p className="text-[11px] font-bold uppercase tracking-wider text-zinc-500">{stat.label}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </section>
        </Layout>
    );
};

export default HomePage;
