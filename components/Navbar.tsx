import React, { useState, useEffect } from 'react';
import { Terminal } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-4 md:top-6 left-0 right-0 z-50 flex justify-center px-4">
      <nav
        className={`flex items-center justify-between px-6 py-3 rounded-full transition-all duration-300 border ${
          scrolled
            ? 'bg-black/50 backdrop-blur-xl border-white/10 shadow-[0_0_0_1px_rgba(255,255,255,0.08)] w-full max-w-4xl'
            : 'bg-transparent border-transparent w-full max-w-7xl'
        }`}
      >
        <Link to="/" className="flex items-center gap-2 group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-lg" tabIndex={0}>
          <div className="p-1.5 rounded-lg bg-white text-black group-hover:scale-105 transition-transform shadow-[0_0_15px_rgba(255,255,255,0.3)]">
            <Terminal size={18} fill="currentColor" />
          </div>
          <span className="font-bold text-lg tracking-tight text-white hidden sm:block">DevControl</span>
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
          <a href="/#features" className="hover:text-white transition-colors focus-visible:outline-none focus-visible:text-white">Features</a>
          <a href="/#security" className="hover:text-white transition-colors focus-visible:outline-none focus-visible:text-white">Security</a>
          <a href="/#integrations" className="hover:text-white transition-colors focus-visible:outline-none focus-visible:text-white">Integrations</a>
          <a href="/#pricing" className="hover:text-white transition-colors focus-visible:outline-none focus-visible:text-white">Pricing</a>
        </div>

        <div className="flex items-center gap-4">
          <button className="hidden sm:block text-zinc-400 hover:text-white text-sm font-medium transition-colors focus-visible:outline-none focus-visible:text-white">
            Log In
          </button>
          <button className="px-5 py-2 bg-white text-black text-sm font-semibold rounded-full hover:bg-zinc-200 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_25px_rgba(255,255,255,0.3)]">
            Get Started
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;