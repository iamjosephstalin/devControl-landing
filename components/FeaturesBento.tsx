import React from 'react';
import { 
  Lock, 
  Server, 
  GitBranch, 
  CheckSquare, 
  FileText, 
  Terminal,
  Users,
  Calendar,
  FolderOpen,
  Activity,
  Webhook
} from 'lucide-react';
import { motion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';

const Card = ({ title, description, icon: Icon, className = "", children }: any) => (
  <div className={`relative h-full overflow-hidden rounded-xl border border-white/10 bg-black/40 backdrop-blur-sm hover:border-white/20 p-6 transition-all duration-300 group ${className}`}>
    <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
    <div className="relative z-10 h-full flex flex-col">
      <div className="mb-4 inline-flex items-center justify-center w-10 h-10 rounded-lg bg-white/5 border border-white/10 text-zinc-400 group-hover:text-white group-hover:bg-white/10 transition-colors shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)]">
        <Icon size={18} />
      </div>
      <h3 className="mb-2 text-base font-semibold text-white tracking-tight">{title}</h3>
      <p className="text-sm text-zinc-500 leading-relaxed mb-auto group-hover:text-zinc-400 transition-colors">{description}</p>
      <div className="mt-4 pt-4 border-t border-white/5">
        {children}
      </div>
    </div>
  </div>
);

const FeaturesBento = () => {
  return (
    <section id="features" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tighter text-white">
              Everything in One Place
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <p className="text-zinc-500 max-w-2xl mx-auto text-lg leading-relaxed">
              Designed to replace your fragmented toolset with a single, cohesive operating system.
            </p>
          </ScrollReveal>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[minmax(240px,auto)]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.08,
                delayChildren: 0.2
              }
            }
          }}
        >
          {/* Main Feature - Large */}
          <ScrollReveal className="md:col-span-2 md:row-span-2 h-full">
            <Card 
              className="h-full bg-zinc-950/50"
              title="Unified Project Management"
              description="Seamlessly switch between projects without losing context. Track stacks, repos, and deployments."
              icon={CheckSquare}
            >
              <div className="flex-1 rounded-lg border border-white/10 bg-zinc-900/50 p-4 relative overflow-hidden">
                  <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 rounded bg-black border border-white/5 hover:border-white/10 transition-colors cursor-default">
                          <div className="flex items-center gap-3">
                              <div className="w-4 h-4 rounded-full border-2 border-zinc-700" />
                              <span className="text-sm text-zinc-300 font-medium">Auth System Update</span>
                          </div>
                          <span className="text-xs text-zinc-600 font-mono">PRO-120</span>
                      </div>
                      <div className="flex items-center justify-between p-3 rounded bg-black border border-white/5 hover:border-white/10 transition-colors cursor-default">
                          <div className="flex items-center gap-3">
                              <div className="w-4 h-4 rounded-full border-2 border-blue-500" />
                              <span className="text-sm text-white font-medium">Database Migration</span>
                          </div>
                          <span className="text-xs text-zinc-600 font-mono">PRO-121</span>
                      </div>
                      <div className="flex items-center justify-between p-3 rounded bg-black border border-white/5 hover:border-white/10 transition-colors cursor-default">
                          <div className="flex items-center gap-3">
                              <div className="w-4 h-4 rounded-full border-2 border-green-500 bg-green-500" />
                              <span className="text-sm text-zinc-500 line-through">API Documentation</span>
                          </div>
                          <span className="text-xs text-zinc-600 font-mono">PRO-119</span>
                      </div>
                  </div>
              </div>
            </Card>
          </ScrollReveal>

          <ScrollReveal className="md:col-span-2 h-full" delay={100}>
            <Card 
              className="h-full"
              title="Client Portal"
              description="Give clients a professional, restricted view to approve tasks and download assets."
              icon={Users}
            >
              <div className="flex items-center justify-between opacity-50 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0">
                <div className="flex -space-x-2">
                   <div className="h-8 w-8 rounded-full ring-2 ring-black bg-zinc-800 flex items-center justify-center text-[10px] text-zinc-400">JD</div>
                   <div className="h-8 w-8 rounded-full ring-2 ring-black bg-zinc-700 flex items-center justify-center text-[10px] text-zinc-300">AS</div>
                   <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-900/50 ring-2 ring-black text-[10px] font-bold text-blue-400">
                     +3
                   </div>
                </div>
                <div className="px-2 py-1 rounded-full bg-green-500/10 text-green-400 text-[10px] font-medium border border-green-500/20">
                  Access Granted
                </div>
              </div>
            </Card>
          </ScrollReveal>
          
          <ScrollReveal delay={200} className="h-full">
            <Card 
              className="h-full"
              title="Encrypted Vault"
              description="AES-256 encrypted storage for API keys and env vars."
              icon={Lock}
            >
              <div className="p-3 rounded bg-zinc-900/50 border border-white/5 font-mono text-xs text-zinc-500 group-hover:text-zinc-300 transition-colors">
                 <div className="flex justify-between items-center">
                    <span className="text-[10px]">STRIPE_SECRET</span>
                    <span className="tracking-widest group-hover:text-white transition-colors">••••••••</span>
                 </div>
                 <div className="w-full h-px bg-white/5 my-2" />
                 <div className="flex justify-between items-center">
                    <span className="text-[10px]">AWS_KEY</span>
                    <span className="tracking-widest group-hover:text-white transition-colors">••••••••</span>
                 </div>
              </div>
            </Card>
          </ScrollReveal>

          <ScrollReveal delay={250} className="h-full">
            <Card 
              className="h-full"
              title="Server Automation"
              description="One-click SSH commands, logs, and docker management."
              icon={Terminal}
            >
               <div className="font-mono text-[10px] text-zinc-600 group-hover:text-green-500/70 transition-colors p-2 bg-black rounded border border-white/5">
                  <div className="flex gap-2">
                     <span className="text-blue-500">➜</span> 
                     <span>deploy --prod</span>
                  </div>
                  <div className="mt-1 text-zinc-500">
                     Starting container... <span className="inline-block w-1.5 h-3 bg-current animate-pulse align-middle" />
                  </div>
               </div>
            </Card>
          </ScrollReveal>

          <ScrollReveal className="md:col-span-2 h-full" delay={300}>
            <Card 
              className="h-full"
              title="Infrastructure Monitoring"
              description="Real-time metrics for your VPS, Domains, and DNS across any provider."
              icon={Server}
            >
               <div className="h-16 flex items-end justify-between gap-1 px-1 opacity-40 group-hover:opacity-100 transition-opacity duration-500">
                  {[20, 45, 30, 50, 75, 60, 80, 55, 40, 65, 50, 70, 45, 30, 55, 40, 60, 75, 50, 45, 60, 80, 50, 65].map((h, i) => (
                      <div key={i} className="w-full bg-blue-500 rounded-sm" style={{ height: `${h}%`, opacity: Math.max(0.3, h/100) }}></div>
                  ))}
               </div>
            </Card>
          </ScrollReveal>

          <ScrollReveal delay={350} className="h-full">
            <Card 
              className="h-full"
              title="Smart Schedule"
              description="Daily planning with priority tracking."
              icon={Calendar}
            >
              <div className="space-y-2 mt-2">
                 <div className="flex gap-2 items-center">
                    <div className="w-8 text-[10px] text-zinc-600 text-right">09:00</div>
                    <div className="flex-1 h-1.5 bg-blue-500/20 rounded-full group-hover:bg-blue-500/40 transition-colors relative overflow-hidden">
                       <div className="absolute inset-0 bg-blue-500/20 animate-[shimmer_2s_infinite]" />
                    </div>
                 </div>
                 <div className="flex gap-2 items-center">
                    <div className="w-8 text-[10px] text-zinc-600 text-right">10:00</div>
                    <div className="flex-1 h-1.5 bg-zinc-800 rounded-full" />
                 </div>
                 <div className="flex gap-2 items-center">
                    <div className="w-8 text-[10px] text-zinc-600 text-right">11:00</div>
                    <div className="w-1/2 h-1.5 bg-purple-500/20 rounded-full" />
                 </div>
              </div>
            </Card>
          </ScrollReveal>
          
          <ScrollReveal delay={400} className="h-full">
            <Card 
              className="h-full"
              title="File Storage"
              description="Project assets and contracts in one place."
              icon={FolderOpen}
            >
              <div className="flex items-center gap-3 p-2 rounded bg-zinc-900/30 border border-white/5 group-hover:border-blue-500/20 transition-colors">
                  <div className="w-8 h-8 bg-blue-500/10 rounded flex items-center justify-center">
                       <div className="w-4 h-4 border-2 border-blue-500/50 rounded-sm" />
                  </div>
                  <div className="space-y-1.5 flex-1">
                      <div className="h-1 w-full bg-zinc-800 rounded-full overflow-hidden">
                          <div className="h-full w-[70%] bg-blue-500" />
                      </div>
                      <div className="flex justify-between text-[8px] text-zinc-500 uppercase font-bold">
                         <span>Uploading</span>
                         <span>70%</span>
                      </div>
                  </div>
              </div>
            </Card>
          </ScrollReveal>

          <ScrollReveal delay={450} className="h-full">
             <Card 
              className="h-full"
              title="Knowledge Base"
              description="Markdown notes with internal linking."
              icon={FileText}
            >
              <div className="p-3 rounded bg-zinc-900/30 border border-white/5 opacity-50 group-hover:opacity-100 transition-opacity">
                  <div className="h-1.5 w-1/3 bg-zinc-700 rounded mb-2" />
                  <div className="h-1 w-full bg-zinc-800 rounded mb-1" />
                  <div className="h-1 w-full bg-zinc-800 rounded mb-1" />
                  <div className="h-1 w-2/3 bg-zinc-800 rounded" />
              </div>
            </Card>
          </ScrollReveal>
          
          <ScrollReveal delay={500} className="h-full">
            <Card 
              className="h-full"
              title="Git Integration"
              description="Live view of commits and PR statuses."
              icon={GitBranch}
            >
              <div className="flex items-center gap-3 mt-1 px-2">
                   <div className="flex flex-col items-center gap-0.5">
                       <div className="w-2 h-2 rounded-full bg-zinc-600" />
                       <div className="w-0.5 h-3 bg-zinc-800" />
                       <div className="w-2 h-2 rounded-full bg-purple-500 ring-2 ring-purple-500/20" />
                   </div>
                   <div className="flex-1">
                       <div className="text-[10px] text-zinc-500 mb-2">master</div>
                       <div className="text-[10px] text-white bg-zinc-800 px-2 py-1 rounded w-fit">feat: new-api</div>
                   </div>
              </div>
            </Card>
          </ScrollReveal>

          <ScrollReveal delay={550} className="h-full">
             <Card 
              className="h-full"
              title="Productivity"
              description="Analytics on your coding hours."
              icon={Activity}
            >
              <div className="flex items-center gap-4 mt-2 justify-center">
                  <div className="relative w-10 h-10 rounded-full border-2 border-zinc-800 flex items-center justify-center">
                      <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 36 36">
                          <path
                              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                              fill="none"
                              stroke="#3b82f6"
                              strokeWidth="3"
                              strokeDasharray="92, 100"
                              className="opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                          />
                      </svg>
                      <span className="text-[10px] font-bold text-white">92</span>
                  </div>
                  <div className="text-[10px] text-zinc-500 uppercase tracking-wider">Focus<br/>Score</div>
              </div>
            </Card>
          </ScrollReveal>

          <ScrollReveal delay={600} className="h-full">
             <Card 
              className="h-full"
              title="API Access"
              description="Connect external tools via webhooks."
              icon={Webhook}
            >
               <div className="mt-2 flex justify-between items-center p-2 rounded bg-zinc-900/50 border border-white/5 group-hover:border-green-500/20 transition-colors">
                  <span className="text-[10px] font-mono text-zinc-500">POST /v1/hooks</span>
                  <div className="flex items-center gap-1.5">
                     <div className="text-[8px] text-zinc-600 font-bold uppercase">Active</div>
                     <div className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.5)] animate-pulse" />
                  </div>
              </div>
            </Card>
          </ScrollReveal>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesBento;