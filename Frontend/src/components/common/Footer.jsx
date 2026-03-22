import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="relative bg-surface mt-20 border-t border-white/5 pt-20 pb-10 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-brand/10 rounded-full blur-[100px]" />

      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="md:col-span-2">
            <h2 className="text-4xl font-black mb-6">Let's build something <span className="text-brand">remarkable</span>.</h2>
            <p className="text-zinc-400 max-w-md mb-8">
              Open to collaborations, game-changing projects, and intelligent systems development.
            </p>
            <a
              href="mailto:aryanpathak0421@gmail.com"
              className="group inline-flex items-center gap-2 text-2xl font-bold hover:text-brand transition-colors"
            >
              aryanpathak0421@gmail.com
              <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Explore</h3>
            <ul className="flex flex-col gap-4 text-zinc-400">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/myworks" className="hover:text-white transition-colors">All Works</Link></li>
              <li><Link to="/play" className="hover:text-white transition-colors">Play Area</Link></li>
              <li><a href="#" className="hover:text-white transition-colors">Resume</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Connect</h3>
            <div className="flex gap-4">
              {[
                { icon: <Github size={20} />, url: 'https://github.com/AryanPathak0421' },
                { icon: <Linkedin size={20} />, url: 'https://in.linkedin.com/in/aryan-pathak-904a78388' },
                { icon: <Twitter size={20} />, url: 'https://x.com/aryan41453' },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.url}
                  target="_blank"
                  className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-brand hover:text-white transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 border-t border-white/5 pt-10 text-zinc-500 text-sm">
          <p>© 2026 Aryan Pathak. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
