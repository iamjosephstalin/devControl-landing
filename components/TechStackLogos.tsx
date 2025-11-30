import React from 'react';
import ScrollReveal from './ScrollReveal';
import { InfiniteMovingLogos } from './ui/InfiniteMovingLogos';

const TechStackLogos = () => {
  const logos = [
    { name: "GitHub", color: "text-zinc-500" },
    { name: "Vercel", color: "text-zinc-500" },
    { name: "AWS", color: "text-zinc-500" },
    { name: "Docker", color: "text-zinc-500" },
    { name: "Hetzner", color: "text-zinc-500" },
    { name: "Postgres", color: "text-zinc-500" },
    { name: "Cloudflare", color: "text-zinc-500" },
    { name: "DigitalOcean", color: "text-zinc-500" },
    { name: "Linear", color: "text-zinc-500" },
    { name: "Slack", color: "text-zinc-500" },
  ];

  return (
    <section id="integrations" className="py-12 border-b border-white/5 overflow-hidden">
      <div className="max-w-screen-2xl mx-auto px-6 text-center">
        <ScrollReveal>
            <p className="text-xs font-semibold text-zinc-500 mb-8 uppercase tracking-widest">
                Powering next-gen teams
            </p>
        </ScrollReveal>
        
        <div className="relative flex flex-col items-center justify-center overflow-hidden mask-image-gradient">
             <InfiniteMovingLogos 
                items={logos} 
                direction="right" 
                speed="slow" 
            />
        </div>
      </div>
    </section>
  );
};

export default TechStackLogos;