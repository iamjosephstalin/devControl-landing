import React from 'react';
import { Github, Twitter, MessageCircle } from 'lucide-react';

const Community = () => {
  return (
    <div className="pt-32 pb-20 max-w-4xl mx-auto px-6 min-h-screen">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-zinc-500">
          Join the Community
        </h1>
        <p className="text-zinc-400 text-lg">Connect with other developers building with DevControl.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <a href="https://discord.gg" target="_blank" rel="noopener noreferrer" className="group p-8 rounded-2xl bg-[#5865F2]/10 border border-[#5865F2]/20 hover:bg-[#5865F2]/20 transition-all text-center">
           <MessageCircle size={40} className="text-[#5865F2] mx-auto mb-4 group-hover:scale-110 transition-transform" />
           <h3 className="text-white font-bold text-xl mb-2">Discord</h3>
           <p className="text-zinc-400 text-sm">Chat with the team and get help from the community.</p>
        </a>
        
        <a href="https://twitter.com/iamjosephstalin" target="_blank" rel="noopener noreferrer" className="group p-8 rounded-2xl bg-[#1DA1F2]/10 border border-[#1DA1F2]/20 hover:bg-[#1DA1F2]/20 transition-all text-center">
           <Twitter size={40} className="text-[#1DA1F2] mx-auto mb-4 group-hover:scale-110 transition-transform" />
           <h3 className="text-white font-bold text-xl mb-2">Twitter</h3>
           <p className="text-zinc-400 text-sm">Follow us for latest updates and announcements.</p>
        </a>

        <a href="https://github.com/iamjosephstalin" target="_blank" rel="noopener noreferrer" className="group p-8 rounded-2xl bg-zinc-800/50 border border-white/10 hover:bg-zinc-800 transition-all text-center">
           <Github size={40} className="text-white mx-auto mb-4 group-hover:scale-110 transition-transform" />
           <h3 className="text-white font-bold text-xl mb-2">GitHub</h3>
           <p className="text-zinc-400 text-sm">Star us, report issues, or contribute to the code.</p>
        </a>
      </div>
    </div>
  );
};

export default Community;