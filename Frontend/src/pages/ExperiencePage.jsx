import React from 'react';
import Layout from '../components/common/Layout';
import Experience from '../components/sections/Experience';
import { motion } from 'framer-motion';

const ExperiencePage = () => {
    return (
        <Layout>
            <div className="pt-16 min-h-screen">
                <Experience />
            </div>
        </Layout>
    );
};

export default ExperiencePage;