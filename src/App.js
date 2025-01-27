import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import './App.css';

function AnimatedRoutes() {
  const location = useLocation();

  const pageVariants = {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 50 },
  };

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <motion.div
              initial="initial"
              animate="animate"
              exit="exit"
              variants={pageVariants}
              transition={{ duration: 0.5 }}
            >
              <About />
            </motion.div>
          }
        />
        <Route
          path="/gallery"
          element={
            <motion.div
              initial="initial"
              animate="animate"
              exit="exit"
              variants={pageVariants}
              transition={{ duration: 0.5 }}
            >
              <Gallery />
            </motion.div>
          }
        />
        <Route
          path="/contact"
          element={
            <motion.div
              initial="initial"
              animate="animate"
              exit="exit"
              variants={pageVariants}
              transition={{ duration: 0.5 }}
            >
              <Contact />
            </motion.div>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <div style={{ marginTop: '60px' }}>
      <Router>
        <Navbar />
        <AnimatedRoutes />
      </Router>
    </div>
  );
}

export default App;