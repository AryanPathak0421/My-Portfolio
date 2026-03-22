import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Pages
import HomePage from './pages/HomePage';
import WorksPage from './pages/WorksPage';
import PlayPage from './pages/PlayPage';
import EducationPage from './pages/EducationPage';
import ExperiencePage from './pages/ExperiencePage';
import ContactPage from './pages/ContactPage';

function App() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="/myworks" element={<WorksPage />} />
        <Route path="/play" element={<PlayPage />} />
        <Route path="/education" element={<EducationPage />} />
        <Route path="/experience" element={<ExperiencePage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
