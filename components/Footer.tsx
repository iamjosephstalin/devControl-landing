import React from 'react';
import { Terminal, Github, Twitter, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="border-t border-white/5 pt-20 pb-10 bg-black/40 backdrop-blur-lg relative overflow-hidden group">
      {/* Subtle Interactive Grid Background */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.1] group-hover:opacity-[0.2] transition-opacity duration-700"
        style={{
            backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.2) 1px, transparent 1px)`,
            backgroundSize: '32px 32px',
            maskImage: 'linear-gradient(to bottom, transparent, black)',
            WebkitMaskImage: 'linear-gradient(to bottom, transparent, black)',
        }}
      />
      <div 
        className="absolute inset-0 pointer-events-none bg-gradient-to-t from-blue-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-20">
            <div className="col-span-2">
                <Link to="/" className="flex items-center gap-2 mb-6 text-white w-fit">
                  <Terminal size={20} />
                  <span className="font-bold text-lg tracking-tight">DevControl</span>
                </Link>
                <div className="flex gap-4">
                   <a href="https://github.com/iamjosephstalin/" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-[#ffffff] transition-colors"><Github size={20} /></a>
                   <a href="https://twitter.com/iamjosephstalin" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-[#1DA1F2] transition-colors"><Twitter size={20} /></a>
                   <a href="https://www.linkedin.com/in/iamjosephstalin/" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-[#0A66C2] transition-colors"><Linkedin size={20} /></a>
                </div>
            </div>
            
            <div className="col-span-1">
                <h4 className="font-semibold text-white mb-4">Product</h4>
                <ul className="space-y-3 text-sm text-zinc-500">
                    <li><a href="/#features" className="hover:text-white transition-colors">Features</a></li>
                    <li><a href="/#integrations" className="hover:text-white transition-colors">Integrations</a></li>
                    <li><a href="/#pricing" className="hover:text-white transition-colors">Pricing</a></li>
                    <li><Link to="/changelog" className="hover:text-white transition-colors">Changelog</Link></li>
                </ul>
            </div>
            
            <div className="col-span-1">
                <h4 className="font-semibold text-white mb-4">Resources</h4>
                <ul className="space-y-3 text-sm text-zinc-500">
                    <li><Link to="/documentation" className="hover:text-white transition-colors">Documentation</Link></li>
                    <li><Link to="/documentation" className="hover:text-white transition-colors">API Reference</Link></li>
                    <li><Link to="/community" className="hover:text-white transition-colors">Community</Link></li>
                </ul>
            </div>

             <div className="col-span-1">
                <h4 className="font-semibold text-white mb-4">Legal</h4>
                <ul className="space-y-3 text-sm text-zinc-500">
                    <li><Link to="/privacy" className="hover:text-white transition-colors">Privacy</Link></li>
                    <li><Link to="/terms" className="hover:text-white transition-colors">Terms</Link></li>
                </ul>
            </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
            <h1 className="text-[8vw] leading-none font-bold text-zinc-900 select-none tracking-tighter group-hover:text-zinc-800 transition-colors duration-500">
                {'>_DEVCONTROL'}
            </h1>
        </div>
      </div>
    </footer>
  );
};

export default Footer;