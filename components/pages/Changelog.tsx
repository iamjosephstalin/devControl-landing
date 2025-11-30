import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const ChangelogItem = ({ version, date, title, changes }: any) => (
  <motion.div 
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    className="relative pl-8 md:pl-12 py-6 border-l border-white/10"
  >
    <div className="absolute left-[-5px] top-8 w-2.5 h-2.5 rounded-full bg-blue-500 ring-4 ring-black" />
    <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-3">
      <span className="text-xl font-bold text-white">{version}</span>
      <span className="text-sm text-zinc-500 font-mono bg-zinc-900 px-2 py-0.5 rounded border border-white/5">{date}</span>
    </div>
    <h3 className="text-lg font-medium text-zinc-200 mb-4">{title}</h3>
    <ul className="space-y-2">
      {changes.map((change: string, idx: number) => (
        <li key={idx} className="flex items-start gap-3 text-zinc-400 text-sm">
          <CheckCircle2 size={16} className="mt-0.5 text-blue-500/50 shrink-0" />
          <span>{change}</span>
        </li>
      ))}
    </ul>
  </motion.div>
);

const Changelog = () => {
  return (
    <div className="pt-32 pb-20 max-w-4xl mx-auto px-6 min-h-screen">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-zinc-500">
          Changelog
        </h1>
        <p className="text-zinc-400 text-lg">Stay updated with our latest improvements.</p>
      </div>

      <div className="relative space-y-2">
        <ChangelogItem 
          version="v2.0" 
          date="Nov 30, 2025" 
          title="The Control Center Update"
          changes={[
            "New Dashboard UI with customizable widgets",
            "Unified Inbox for GitHub and Linear",
            "Added 'Client Portal' with whitelabeling support",
            "Infrastructure automation using new SSH bridge"
          ]} 
        />
        <ChangelogItem 
          version="v1.5" 
          date="Oct 15, 2025" 
          title="Performance & Security"
          changes={[
            "Implemented AES-256 vault encryption",
            "Reduced bundle size by 40%",
            "Added dark mode support for email notifications",
            "Fixed issue with Vercel deployment logs"
          ]} 
        />
        <ChangelogItem 
          version="v1.0" 
          date="Aug 01, 2025" 
          title="Initial Release"
          changes={[
            "Project Management with Kanban board",
            "Basic Secrets Manager",
            "GitHub Integration",
            "Markdown Notes"
          ]} 
        />
      </div>
    </div>
  );
};

export default Changelog;