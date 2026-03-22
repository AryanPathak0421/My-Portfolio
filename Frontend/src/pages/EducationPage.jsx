import React from 'react';
import Layout from '../components/common/Layout';
import Education from '../components/sections/Education';
import { motion } from 'framer-motion';

const EducationPage = () => {
    return (
        <Layout>
            <div className="pt-16 min-h-screen">
                <Education />
            </div>
        </Layout>
    );
};

export default EducationPage;