import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Lenis from 'lenis';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            smoothWheel: true,
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
        };
    }, []);

    return (
        <div className="min-h-screen">
            <Navbar />
            <motion.main 
                className="main-body"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
                {children}
            </motion.main>
            <Footer />
        </div>
    );
};

export default Layout;
