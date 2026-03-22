import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Github, Linkedin, Twitter, Home, Briefcase, GraduationCap, FolderCode, Gamepad2, Send, Cpu } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { title: 'Home', path: '/', icon: <Home size={20} /> },
        { title: 'Skills', path: '/skills', icon: <Cpu size={20} /> },
        { title: 'Education', path: '/education', icon: <GraduationCap size={20} /> },
        { title: 'Experience', path: '/experience', icon: <Briefcase size={20} /> },
        { title: 'Works', path: '/myworks', icon: <FolderCode size={20} /> },
        { title: 'Play', path: '/play', icon: <Gamepad2 size={20} /> },
        { title: 'Contact', path: '/contact', icon: <Send size={20} /> },
    ];

    return (
        <>
            {/* Desktop Top Navbar */}
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 hidden md:block ${scrolled
                    ? 'py-3 bg-background/80 backdrop-blur-md border-b border-white/5 shadow-lg'
                    : 'py-6 bg-transparent'
                    }`}
            >
                <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                    {/* Logo */}
                    <Link to="/" className="group flex items-center gap-2">
                        <div className="w-10 h-10 bg-brand rounded-lg flex items-center justify-center overflow-hidden group-hover:rotate-12 transition-transform duration-300">
                            <img 
                                src="/pp.jpeg" 
                                alt="Aryan" 
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <span className="font-heading font-bold text-xl tracking-tighter text-white group-hover:text-brand transition-colors">
                            ARYAN
                        </span>
                    </Link>

                    {/* Desktop Links */}
                    <div className="flex items-center gap-8 glass px-8 py-3 rounded-full border-white/5">
                        {navLinks.map((link) => (
                            <Link
                                key={link.title}
                                to={link.path}
                                className={`text-sm font-medium transition-colors hover:text-brand ${location.pathname === link.path ? 'text-brand' : 'text-zinc-400'
                                    }`}
                            >
                                {link.title}
                            </Link>
                        ))}
                    </div>

                    {/* Socials & CTA */}
                    <div className="flex items-center gap-4">
                        <a href="https://github.com/AryanPathak0421" target="_blank" rel="noopener noreferrer" className="p-2 text-zinc-400 hover:text-white transition-colors">
                            <Github size={20} />
                        </a>
                        <a href="https://in.linkedin.com/in/aryan-pathak-904a78388" target="_blank" rel="noopener noreferrer" className="p-2 text-zinc-400 hover:text-white transition-colors">
                            <Linkedin size={20} />
                        </a>
                        <a href="https://x.com/aryan41453" target="_blank" rel="noopener noreferrer" className="p-2 text-zinc-400 hover:text-white transition-colors">
                            <Twitter size={20} />
                        </a>
                        <Link to="/play" className="btn btn-primary py-2 px-5 text-sm">
                            Let's Talk
                        </Link>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Bottom Navbar */}
            <div className="md:hidden fixed bottom-6 left-0 w-full z-50 px-4">
                <nav className="glass bg-background/60 backdrop-blur-xl border border-white/10 rounded-2xl p-2 shadow-2xl">
                    <div className="flex justify-around items-center">
                        {navLinks.map((link) => {
                            const isActive = location.pathname === link.path;
                            return (
                                <Link
                                    key={link.title}
                                    to={link.path}
                                    className={`relative flex flex-col items-center p-2 rounded-xl transition-all duration-300 flex-1 ${isActive ? 'text-brand bg-brand/10' : 'text-zinc-500 hover:text-zinc-200'
                                        }`}
                                >
                                    {isActive ? React.cloneElement(link.icon, { size: 20 }) : link.icon}
                                    <span className={`text-[8px] sm:text-[9px] font-bold mt-1 uppercase tracking-tighter ${isActive ? 'opacity-100' : 'opacity-70'}`}>
                                        {link.title === 'Education' ? 'Edu' : 
                                         link.title === 'Experience' ? 'Exp' : 
                                         link.title}
                                    </span>
                                    {isActive && (
                                        <motion.div
                                            layoutId="navTab"
                                            className="absolute -top-1 w-1 h-1 bg-brand rounded-full shadow-[0_0_10px_#2dd4bf]"
                                        />
                                    )}
                                </Link>
                            )
                        })}
                    </div>
                </nav>
            </div>

            {/* Mobile Logo Top Bar (Optional but good for branding) */}
            <div className="md:hidden fixed top-0 left-0 w-full z-40 p-4 bg-background/40 backdrop-blur-sm border-b border-white/5">
                <div className="flex justify-between items-center">
                    <Link to="/" className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-brand rounded-lg flex items-center justify-center overflow-hidden">
                            <img 
                                src="/pp.jpeg" 
                                alt="Aryan" 
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <span className="font-heading font-black text-lg tracking-tighter text-white">
                            ARYAN
                        </span>
                    </Link>
                    <a href="https://github.com/AryanPathak0421" target="_blank" rel="noopener noreferrer" className="p-2 text-zinc-400 hover:text-white transition-colors">
                        <Github size={20} />
                    </a>
                    <a href="https://in.linkedin.com/in/aryan-pathak-904a78388" target="_blank" rel="noopener noreferrer" className="p-2 text-zinc-400 hover:text-white transition-colors">
                        <Linkedin size={20} />
                    </a>
                    <a href="https://x.com/aryan41453" target="_blank" rel="noopener noreferrer" className="p-2 text-zinc-400 hover:text-white transition-colors">
                        <Twitter size={20} />
                    </a>
                </div>
            </div>
        </>
    );
};

export default Navbar;
