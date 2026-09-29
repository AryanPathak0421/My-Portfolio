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
        github: "https://github.com/AryanPathak0421/Hotel-Ananya",
        link: "https://www.ananyahotelnewdigha.in/"
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
    },
    {
        id: "08",
        title: "RoamMyWay",
        category: "Full-Stack / Travel",
        desc: "A premium trip-planning and booking platform offering curated itineraries, hand-picked stays, and seamless multi-city travel packages across the world.",
        tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
        image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&q=80&w=1200",
        link: "https://roammyway.in/"
    },
    {
        id: "09",
        title: "CLOSH",
        category: "Full-Stack / E-commerce",
        desc: "A fashion e-commerce platform for men, women, and kids with try-at-home delivery, quick checkout, and multi-category shopping across top brands.",
        tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
        image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1200",
        link: "https://www.closh.in/"
    },
    {
        id: "10",
        title: "Rozsewa",
        category: "Full-Stack / Home Services",
        desc: "A location-based home services marketplace that connects users with nearby verified service partners for everyday household needs.",
        tech: ["React", "Node.js", "Express", "MongoDB", "Location API"],
        image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80&w=1200",
        link: "https://rozsewa.in/"
    },
    {
        id: "11",
        title: "Mappto",
        category: "Full-Stack / Marketplace",
        desc: "India's workforce and materials platform — book Aadhaar-verified construction labour, staff corporate projects, buy materials on BuildMart, and manage vendor crews, all tracked and paid digitally.",
        tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
        image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=1200",
        link: "https://laborchowck.com/"
    },
    {
        id: "12",
        title: "Saundarya Shringar",
        category: "Full-Stack / E-commerce",
        desc: "A cosmetics and beauty e-commerce platform offering skincare, makeup, and haircare essentials with category-based browsing and app-based shopping.",
        tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
        image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=1200",
        link: "https://saundaryashringar.com/"
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
                            All <span className="text-brand italic font-serif">Works</span>
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
                                viewport={{ once: true, margin: "-100px" }}
                                className="group relative grid grid-cols-1 lg:grid-cols-12 gap-0 lg:gap-8 items-center glass-card p-0 overflow-hidden bg-surface/20 hover:bg-surface/40 transition-colors duration-500 border-white/5"
                            >
                                <div className="lg:col-span-7 overflow-hidden aspect-[4/3] relative">
                                    <div className="absolute inset-0 bg-brand/20 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10" />
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale-[20%] group-hover:grayscale-0"
                                    />
                                </div>

                                <div className="lg:col-span-5 p-8 lg:p-10 relative z-20 bg-gradient-to-t from-surface via-surface/90 to-transparent lg:bg-none -mt-20 lg:mt-0">
                                    <div className="flex items-center gap-3 mb-6">
                                        <span className="text-brand font-mono text-xl font-black">{project.id}</span>
                                        <div className="h-[1px] w-8 bg-brand/50" />
                                        <span className="px-3 py-1 rounded-full bg-brand/10 border border-brand/20 text-[10px] font-bold uppercase tracking-widest text-brand-light">
                                            {project.category}
                                        </span>
                                    </div>

                                    <h2 className="text-3xl md:text-4xl font-black mb-5 tracking-tight group-hover:text-brand transition-colors duration-300">{project.title}</h2>
                                    <p className="text-zinc-400 text-base mb-8 leading-relaxed font-medium">
                                        {project.desc}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mb-10">
                                        {project.tech.map(t => (
                                            <span key={t} className="text-[11px] font-bold text-zinc-300 bg-white/5 hover:bg-white/10 px-3 py-1.5 rounded-md border border-white/10 transition-colors shadow-sm">
                                                {t}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex gap-4">
                                        <motion.button 
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            onClick={() => window.open(project.link || project.github, '_blank')}
                                            className="btn-primary py-3 px-6 text-sm flex items-center gap-2 group/btn"
                                        >
                                            View Project <ExternalLink size={16} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                                        </motion.button>
                                        {project.github && (
                                            <motion.button 
                                                whileHover={{ scale: 1.1, rotate: 5 }}
                                                whileTap={{ scale: 0.9 }}
                                                onClick={() => window.open(project.github, '_blank')}
                                                className="p-3 rounded-full glass border-white/10 hover:border-brand/50 hover:text-brand transition-all shadow-lg"
                                            >
                                                <Github size={20} />
                                            </motion.button>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="glass-card mt-12 p-8 md:p-10 text-center bg-surface/20 border-white/5"
                    >
                        <p className="text-zinc-400 text-base md:text-lg font-medium">
                            Plus <span className="text-brand font-bold">10+ more projects</span> shipped across web, AI, and full-stack platforms — reach out to see the full portfolio.
                        </p>
                    </motion.div>
                </div>
            </div>
        </Layout>
    );
};

export default WorksPage;
