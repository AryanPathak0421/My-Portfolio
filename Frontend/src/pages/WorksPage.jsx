import React from 'react';
import Layout from '../components/common/Layout';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
    {
        id: "01",
        title: "Clean 2 Wash",
        category: "Full-Stack / E-commerce",
        desc: "An on-demand car washing and e-commerce platform for booking instant car wash services and purchasing vehicle care products with a seamless user experience.",
        tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
        image: "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&q=80&w=1200",
        github: "https://github.com/AryanPathak0421/Clean-2-Wash"
    },
    {
        id: "02",
        title: "Hotel Ananya",
        category: "Full-Stack / Management",
        desc: "A smart hotel booking and management system featuring room selection, dynamic pricing, and a structured booking flow for seamless guest experiences.",
        tech: ["React", "Express", "Node.js", "MongoDB", "Redux"],
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1200",
        github: "https://github.com/AryanPathak0421/Hotel-Ananya"
    },
    {
        id: "03",
        title: "VedaSaar AI",
        category: "AI / Web",
        desc: "A smart AI-powered chat interface with features like authentication, real-time interaction, and responsive UI. Built to explore conversational AI capabilities.",
        tech: ["React", "Tailwind CSS", "Axios", "Node.js", "AI Integration"],
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1200",
        github: "https://github.com/AryanPathak0421/VedaSaar-AI"
    },
    {
        id: "04",
        title: "MajdoorSaathi",
        category: "Full-Stack / Social Impact",
        desc: "A digital platform connecting daily wage workers with employers for construction, plumbing, and other services. Bridging the gap between labor and opportunity.",
        tech: ["React", "Express", "Node.js", "MongoDB", "Redux"],
        image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=1200",
        link: "https://www.majdoorsathi.com/"
    },
    {
        id: "05",
        title: "UtsavChakra",
        category: "Event Management / Web",
        desc: "A dynamic platform for discovering, managing, and booking tickets for events and festivals, streamlining the experience for both attendees and organizers.",
        tech: ["React", "Tailwind CSS", "Node.js", "Express", "MongoDB"],
        image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=1200",
        github: "https://github.com/AryanPathak0421/UC-Wed"
    },
    {
        id: "06",
        title: "Indore Visitors App",
        category: "Travel / Smart City",
        desc: "A location-based smart city guide and travel assistant for tourists to explore Indore's spots, food, and culture with ease. Features real-time discovery and intuitive navigation.",
        tech: ["React", "Vite", "Tailwind CSS", "Location API"],
        image: "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?auto=format&fit=crop&q=80&w=1200",
        github: "https://github.com/AryanPathak0421/Indore-Visitor-App",
        link: "https://indore-visitor-app-nqaj.vercel.app/"
    },
    {
        id: "07",
        title: "BoxOfficePredictor+",
        category: "AI / Machine Learning",
        desc: "An intelligent AI system that predicts movie revenue by analyzing budgets, genres, cast, and historical trends for data-driven box office insights.",
        tech: ["Python", "Scikit-Learn", "React", "Flask", "Pandas"],
        image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=1200",
        link: "https://boxofficepredictorplus.netlify.app/"
    }
];

const WorksPage = () => {
    return (
        <Layout>
            <div className="pt-24 pb-12">
                <div className="section-container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-12 text-center"
                    >
                        <h1 className="text-5xl md:text-7xl font-black mb-6">
                            All <span className="text-brand">Works</span>
                        </h1>
                        <p className="text-zinc-400 max-w-2xl mx-auto">
                            A curated collection of my most impactful projects in AI, Web Development, and Hardware.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 gap-12">
                        {projects.map((project, i) => (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="group relative grid grid-cols-1 lg:grid-cols-2 gap-8 items-center glass-card p-4 bg-surface/30"
                            >
                                <div className="overflow-hidden rounded-2xl aspect-video lg:aspect-square">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                </div>

                                <div className="p-4 lg:p-8">
                                    <div className="flex items-center gap-4 mb-4">
                                        <span className="text-brand font-mono text-lg">{project.id}</span>
                                        <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-wider text-zinc-400">
                                            {project.category}
                                        </span>
                                    </div>

                                    <h2 className="text-3xl md:text-5xl font-black mb-6">{project.title}</h2>
                                    <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
                                        {project.desc}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mb-10">
                                        {project.tech.map(t => (
                                            <span key={t} className="text-xs font-medium text-zinc-500 bg-white/5 px-2 py-1 rounded border border-white/5">
                                                {t}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex gap-4">
                                        <motion.button 
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            onClick={() => window.open(project.link || project.github, '_blank')}
                                            className="btn-primary py-3 px-8 flex items-center gap-2"
                                        >
                                            View Project <ExternalLink size={18} />
                                        </motion.button>
                                        {project.github && (
                                            <motion.button 
                                                whileHover={{ scale: 1.1, rotate: 5 }}
                                                whileTap={{ scale: 0.9 }}
                                                onClick={() => window.open(project.github, '_blank')}
                                                className="p-3 rounded-full glass hover:bg-white/10 transition-colors"
                                            >
                                                <Github size={24} />
                                            </motion.button>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default WorksPage;
