import React from 'react';
import Layout from '../components/common/Layout';
import Contact from '../components/sections/Contact';
import { motion } from 'framer-motion';

const ContactPage = () => {
    return (
        <Layout>
            <div className="pt-16 min-h-screen">
                <Contact />
            </div>
        </Layout>
    );
};

export default ContactPage;