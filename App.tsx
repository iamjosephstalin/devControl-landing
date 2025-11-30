import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import Footer from './components/Footer';
import Changelog from './components/pages/Changelog';
import Documentation from './components/pages/Documentation';
import Community from './components/pages/Community';
import Privacy from './components/pages/Privacy';
import Terms from './components/pages/Terms';
import CookieConsent from './components/CookieConsent';
import ScrollToTop from './components/ScrollToTop';
import ErrorBoundary from './components/ErrorBoundary';
import { ProfessionalBackground } from './components/ui/ProfessionalBackground';

export default function App() {
  return (
    <ErrorBoundary>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen text-white selection:bg-blue-500/30 font-sans relative overflow-x-hidden">
          {/* Global Professional Background */}
          <ProfessionalBackground />
          
          <Navbar />
          
          {/* Content - Elevated to z-10 to sit above background */}
          <main className="relative z-10">
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/changelog" element={<Changelog />} />
              <Route path="/documentation" element={<Documentation />} />
              <Route path="/community" element={<Community />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
            </Routes>
          </main>
          
          <div className="relative z-10">
             <Footer />
          </div>

          <CookieConsent />
        </div>
      </Router>
    </ErrorBoundary>
  );
}