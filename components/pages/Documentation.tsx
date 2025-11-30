import React from 'react';
import { Book, Code, Terminal, Zap } from 'lucide-react';

const DocCard = ({ icon: Icon, title, description }: any) => (
  <div className="p-6 rounded-xl border border-white/10 bg-zinc-900/30 hover:bg-zinc-900/50 hover:border-blue-500/30 transition-all cursor-pointer group">
    <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 mb-4 group-hover:scale-110 transition-transform">
      <Icon size={20} />
    </div>
    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">{title}</h3>
    <p className="text-zinc-400 text-sm leading-relaxed">{description}</p>
  </div>
);

const Documentation = () => {
  return (
    <div className="pt-32 pb-20 max-w-6xl mx-auto px-6 min-h-screen">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-zinc-500">
          Documentation
        </h1>
        <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
          Everything you need to know about setting up and using DevControl to manage your workflow.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <DocCard 
          icon={Terminal} 
          title="Getting Started" 
          description="Installation guides, initial setup, and connecting your first GitHub repository." 
        />
        <DocCard 
          icon={Zap} 
          title="Integrations" 
          description="How to connect Vercel, AWS, Linear, and Slack to your dashboard." 
        />
        <DocCard 
          icon={Code} 
          title="API Reference" 
          description="Detailed endpoints for accessing your data programmatically via our REST API." 
        />
        <DocCard 
          icon={Book} 
          title="Guides" 
          description="Best practices for managing secrets, infrastructure, and client portals." 
        />
      </div>

      <div className="mt-16 p-8 rounded-2xl bg-zinc-900/20 border border-white/5 text-center">
        <h3 className="text-xl font-bold text-white mb-2">Can't find what you're looking for?</h3>
        <p className="text-zinc-400 mb-6">Join our community or contact support directly.</p>
        <div className="flex justify-center gap-4">
           <button className="px-6 py-2 bg-white text-black font-semibold rounded-full hover:bg-zinc-200 transition-colors">Contact Support</button>
           <button className="px-6 py-2 border border-white/10 text-white font-semibold rounded-full hover:bg-white/5 transition-colors">Join Discord</button>
        </div>
      </div>
    </div>
  );
};

export default Documentation;