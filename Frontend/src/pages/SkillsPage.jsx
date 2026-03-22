import React from 'react';
import { motion } from 'framer-motion';
import { siteData } from '../data/content';
import Layout from '../components/common/Layout';
import { Code2, Layout as LayoutIcon, Server, Brain, Wrench, ArrowRight } from 'lucide-react';

const SkillsPage = () => {
    const { skillsPage } = siteData;

    const getIcon = (category) => {
        switch (category.toLowerCase()) {
            case 'languages': return <Code2 size={24} />;
            case 'frontend': return <LayoutIcon size={24} />;
            case 'backend': return <Server size={24} />;
            case 'ai / ml': return <Brain size={24} />;
            case 'devops & tools': return <Wrench size={24} />;
            default: return <Code2 size={24} />;
        }
    };

    return (
        <Layout>
            <section className="section py-24 min-h-screen">
                <div className="section-container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="section-header text-center mb-16"
                    >
                        <h1 className="section-title text-5xl font-bold mb-6 tracking-tighter">
                            {skillsPage.title}
                        </h1>
                        <p className="max-w-2xl mx-auto text-zinc-400 text-lg">
                            {skillsPage.subtitle}
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                        {skillsPage.categories.map((cat, idx) => (
                            <motion.div
                                key={cat.name}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                whileHover={{ y: -10 }}
                                className="group relative p-8 bg-zinc-900/50 backdrop-blur-xl border border-white/5 rounded-3xl hover:bg-brand/5 hover:border-brand/20 transition-all duration-500 overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 w-32 h-32 bg-brand/10 blur-3xl -mr-16 -mt-16 group-hover:bg-brand/20 transition-colors" />
                                
                                <div className="relative z-10">
                                    <div className="mb-6 w-14 h-14 bg-zinc-900 border border-white/10 rounded-2xl flex items-center justify-center text-brand group-hover:scale-110 group-hover:bg-brand group-hover:text-black transition-all duration-500">
                                        {getIcon(cat.name)}
                                    </div>
                                    
                                    <h3 className="text-2xl font-bold mb-4 text-white">
                                        {cat.name}
                                    </h3>
                                    
                                    <p className="text-zinc-400 text-sm mb-8 leading-relaxed">
                                        {cat.description}
                                    </p>
                                    
                                    <div className="flex flex-wrap gap-2">
                                        {cat.skills.map((skillName) => {
                                            const skillData = siteData.techStack.find(s => s.name === skillName);
                                            return (
                                                <div 
                                                    key={skillName}
                                                    className="inline-flex items-center gap-2 px-3 py-2 bg-white/5 border border-white/10 rounded-xl text-xs font-semibold text-zinc-300 group-hover:bg-brand/10 group-hover:border-brand/30 group-hover:text-white transition-all duration-300"
                                                >
                                                    {skillData?.icon && (
                                                        <img 
                                                            src={skillData.icon} 
                                                            alt={skillName} 
                                                            className="w-4 h-4 object-contain grayscale group-hover:grayscale-0 transition-all"
                                                        />
                                                    )}
                                                    {skillName}
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default SkillsPage;
