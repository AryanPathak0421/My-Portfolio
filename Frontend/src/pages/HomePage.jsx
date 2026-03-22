import React from 'react';
import Layout from '../components/common/Layout';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Education from '../components/sections/Education';
import Experience from '../components/sections/Experience';
import TechStack from '../components/sections/TechStack';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';
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

            {/* Featured Works Teaser */}
            <section className="section-container pt-8 pb-12">
                <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-8">
                    <div className="max-w-xl">
                        <h2 className="text-3xl md:text-5xl font-black mb-4">Innovative <span className="text-brand">Projects</span>.</h2>
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
            <section className="section-container py-12 md:py-20 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="glass-card bg-gradient-to-br from-brand/10 via-surface/40 to-indigo-500/5 p-12 md:p-16 border-brand/10"
                >
                    <Sparkles size={48} className="text-brand mx-auto mb-6 animate-pulse" />
                    <h2 className="text-3xl md:text-6xl font-black mb-6">Ready to start a <span className="text-brand">project?</span></h2>
                    <p className="text-zinc-500 max-w-xl mx-auto mb-8 text-lg font-medium">
                        Whether you have a specific idea or just want to explore the possibilities of AI, I'm here to help.
                    </p>
                    <div className="flex justify-center">
                        <Link to="/play" className="btn btn-primary px-8 py-3 text-lg">
                            Let's Talk <ArrowRight size={20} className="ml-2" />
                        </Link>
                    </div>
                </motion.div>
            </section>
        </Layout>
    );
};

export default HomePage;
