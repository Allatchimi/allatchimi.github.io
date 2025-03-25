import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import NotFound from './components/NotFound';

function App() {
  return (
    <Router>
      <div className="font-sans">
        <Navbar />
        
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <About />
              <Projects />
              <Skills />
              <Contact />
            </>
          }/>
          
          {/* Route pour la page 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;