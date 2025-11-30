import React, { useState, useEffect } from 'react';
import { Shield, Key, RefreshCw, Layers, Users, Zap, Check, ArrowRight, Layout, Github, AlertCircle, CheckCircle2, XCircle, MousePointer2 } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import { motion, AnimatePresence } from 'framer-motion';

// --- Animated Components ---

const ContextSwitchingAnimation = () => {
    // Simulates a Unified Inbox view
    const [activeItem, setActiveItem] = useState<number | null>(null);

    const items = [
        { id: 1, type: 'linear', title: 'Fix navigation overflow on mobile', repo: 'frontend-app', status: 'In Progress' },
        { id: 2, type: 'github', title: 'Merge PR #842: Auth Refactor', repo: 'backend-api', status: 'Review' },
        { id: 3, type: 'sentry', title: 'TypeError: undefined is not a function', repo: 'worker-node', status: 'Critical' },
    ];

    useEffect(() => {
        // Animation loop: Select item -> Wait -> Deselect
        const loop = async () => {
            await new Promise(r => setTimeout(r, 1500));
            setActiveItem(2); // Select Sentry issue
            await new Promise(r => setTimeout(r, 4000));
            setActiveItem(null);
        };
        
        const interval = setInterval(loop, 6000);
        loop(); // Start immediately
        
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="absolute inset-0 bg-[#0c0c0e] flex flex-col overflow-hidden font-sans">
            {/* Window Header */}
            <div className="h-12 border-b border-white/5 bg-zinc-900/50 flex items-center px-4 gap-2">
                <div className="flex gap-1.5 opacity-50">
                    <div className="w-3 h-3 rounded-full bg-zinc-600" />
                    <div className="w-3 h-3 rounded-full bg-zinc-600" />
                    <div className="w-3 h-3 rounded-full bg-zinc-600" />
                </div>
                <div className="ml-4 text-xs text-zinc-500 font-medium flex-1 text-center pr-12">Unified Inbox</div>
            </div>

            <div className="flex-1 flex overflow-hidden">
                {/* List View */}
                <div className="w-full md:w-1/2 p-3 space-y-2 border-r border-white/5 bg-[#0c0c0e]">
                    <div className="px-2 py-2 text-xs font-bold text-zinc-500 uppercase tracking-wider mb-2">Today</div>
                    {items.map((item) => (
                        <div 
                            key={item.id}
                            className={`p-4 rounded-lg border flex items-center gap-4 transition-all duration-300 ${
                                activeItem === item.id 
                                    ? 'bg-blue-500/10 border-blue-500/30' 
                                    : 'bg-zinc-900/30 border-white/5 opacity-60'
                            }`}
                        >
                            <div className="shrink-0">
                                {item.type === 'linear' && <div className="w-8 h-8 rounded bg-blue-900/30 text-blue-400 flex items-center justify-center"><Layers size={16} /></div>}
                                {item.type === 'github' && <div className="w-8 h-8 rounded bg-zinc-800 text-white flex items-center justify-center"><Github size={16} /></div>}
                                {item.type === 'sentry' && <div className="w-8 h-8 rounded bg-red-900/30 text-red-400 flex items-center justify-center"><AlertCircle size={16} /></div>}
                            </div>
                            <div className="min-w-0 flex-1">
                                <div className={`text-sm font-medium truncate ${activeItem === item.id ? 'text-white' : 'text-zinc-400'}`}>{item.title}</div>
                                <div className="text-xs text-zinc-600 truncate mt-0.5">{item.repo} • {item.status}</div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Detail View (Animated) */}
                <div className="hidden md:flex flex-1 bg-[#09090b] relative items-center justify-center p-6">
                    <AnimatePresence mode="wait">
                        {activeItem === 2 ? (
                            <motion.div 
                                key="detail"
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.2 }}
                                className="w-full bg-[#0c0c0e] border border-white/10 rounded-xl p-8 shadow-2xl"
                            >
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="px-2.5 py-1 rounded bg-red-500/20 text-red-400 text-xs font-bold border border-red-500/20">CRITICAL</div>
                                    <span className="text-zinc-500 text-sm">Event #9210</span>
                                </div>
                                <h3 className="text-white text-lg font-bold mb-4">TypeError: undefined is not a function</h3>
                                <div className="p-4 bg-zinc-950 rounded border border-white/5 font-mono text-xs text-red-300 mb-6">
                                    at Worker.process (worker.js:42:12)<br/>
                                    at async TaskQueue.run (queue.js:15:4)
                                </div>
                                <div className="flex gap-3">
                                    <button className="flex-1 py-2.5 bg-white text-black text-sm font-bold rounded hover:bg-zinc-200">Resolve</button>
                                    <button className="flex-1 py-2.5 bg-zinc-800 text-white text-sm font-medium rounded hover:bg-zinc-700">Ignore</button>
                                </div>
                            </motion.div>
                        ) : (
                            <motion.div 
                                key="empty"
                                initial={{ opacity: 0 }} 
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="text-center"
                            >
                                <div className="w-16 h-16 rounded-full bg-zinc-900 flex items-center justify-center mx-auto mb-4 border border-white/5">
                                    <MousePointer2 className="text-zinc-600" size={28} />
                                </div>
                                <p className="text-zinc-500 text-sm">Select an item to view details</p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
            
            {/* Cursor Animation */}
            <motion.div
                animate={{ 
                    x: [100, 200, 200, 500], 
                    y: [180, 240, 240, 400],
                    opacity: [0, 1, 1, 0]
                }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-0 left-0 pointer-events-none z-50"
            >
                <MousePointer2 className="text-white fill-black" size={32} />
            </motion.div>
        </div>
    );
};

const ClientApprovalAnimation = () => {
    // Simulates a Client Portal Approval Workflow
    const [status, setStatus] = useState<'pending' | 'approved'>('pending');

    useEffect(() => {
        const loop = async () => {
            await new Promise(r => setTimeout(r, 2000));
            setStatus('approved');
            await new Promise(r => setTimeout(r, 3000));
            setStatus('pending');
        };
        const interval = setInterval(loop, 6000);
        loop();
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="absolute inset-0 bg-white/5 flex items-center justify-center p-8 md:p-12">
            <div className="w-full max-w-2xl bg-[#0c0c0e] border border-white/10 rounded-xl shadow-2xl relative overflow-hidden flex flex-col">
                 {/* Header */}
                 <div className="h-14 border-b border-white/5 flex items-center justify-between px-6 bg-zinc-900/50">
                     <div className="flex items-center gap-3">
                         <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
                         <span className="text-sm font-bold text-white uppercase tracking-wider">Client Portal</span>
                     </div>
                     <div className="text-sm text-zinc-500">Acme Corp</div>
                 </div>

                 {/* Content */}
                    <div className="p-8">
                     <div className="flex justify-between items-start mb-8">
                         <div>
                             <h3 className="text-xl font-bold text-white mb-1">Milestone 2: MVP Design</h3>
                             <p className="text-zinc-400 text-xs">Submitted on Oct 14, 2025</p>
                         </div>
                         <div className={`px-3 py-1 rounded-full text-xs font-bold border ${
                             status === 'approved' 
                                ? 'bg-green-500/10 text-green-400 border-green-500/20' 
                                : 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20'
                         }`}>
                             {status === 'approved' ? 'Approved' : 'Needs Review'}
                         </div>
                     </div>

                     <div className="p-4 rounded-lg bg-zinc-900/50 border border-white/5 mb-8">
                         <div className="flex items-center gap-3 mb-3">
                            <div className="p-2 rounded bg-blue-500/10 text-blue-400">
                                <Layout size={18} />
                            </div>
                            <span className="text-sm text-zinc-200">Homepage_v2.fig</span>
                         </div>
                         <div className="h-32 bg-zinc-950 rounded border border-white/5 flex items-center justify-center relative overflow-hidden group cursor-pointer">
                             <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.05)_50%,transparent_75%)] bg-[length:250%_250%] animate-[shimmer_3s_infinite]" />
                             <span className="text-xs text-zinc-500">Preview Unavailable</span>
                         </div>
                     </div>
                     
                     <div className="flex gap-3">
                         <motion.button 
                            className={`flex-1 py-3 rounded-lg text-sm font-bold flex items-center justify-center gap-2 transition-all ${
                                status === 'approved'
                                    ? 'bg-green-600 text-white'
                                    : 'bg-white text-black hover:bg-zinc-200'
                            }`}
                         >
                             {status === 'approved' ? <CheckCircle2 size={16} /> : null}
                             {status === 'approved' ? 'Approved' : 'Approve Milestone'}
                         </motion.button>
                         <button className="px-4 py-3 bg-zinc-900 border border-white/10 text-zinc-400 rounded-lg text-sm font-medium hover:text-white transition-colors">
                             Request Changes
                         </button>
                     </div>
                 </div>

                 {/* Cursor Overlay */}
                 <motion.div
                    animate={{ 
                        x: [250, 180, 180, 500], 
                        y: [400, 480, 480, 550],
                        opacity: [0, 1, 1, 0]
                    }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-0 left-0 pointer-events-none z-50"
                >
                    <div className="relative">
                        <MousePointer2 className="text-white fill-black" size={32} />
                        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-white text-black text-xs font-bold px-3 py-1.5 rounded shadow-lg whitespace-nowrap">
                            Client User
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

const TerminalAnimation = () => {
    return (
        <div className="absolute inset-0 flex items-center justify-center p-8 md:p-12">
            <div className="w-full h-full bg-[#0c0c0e] rounded-xl border border-white/10 p-8 font-mono text-sm text-zinc-400 shadow-2xl overflow-hidden flex flex-col">
                <div className="flex gap-2 mb-6">
                    <div className="w-3 h-3 rounded-full bg-zinc-700" />
                    <div className="w-3 h-3 rounded-full bg-zinc-700" />
                    <div className="w-3 h-3 rounded-full bg-zinc-700" />
                </div>
                <div className="space-y-3 flex-1 overflow-hidden">
                    <p><span className="text-blue-400">➜</span> <span className="text-zinc-200">~</span> devcontrol deploy --prod</p>
                    <p className="text-zinc-500">Building production bundle...</p>
                    <p className="text-zinc-500">Optimizing static assets...</p>
                    <p className="text-green-400">✓ Build complete (2.4s)</p>
                    <p className="mt-4"><span className="text-blue-400">➜</span> <span className="text-zinc-200">~</span> devcontrol secrets sync</p>
                    <p className="text-zinc-500">Syncing .env to production vault...</p>
                    <p className="text-green-400">✓ Secrets synced (encrypted)</p>
                    <p className="mt-4"><span className="text-blue-400">➜</span> <span className="text-zinc-200">~</span> devcontrol infra scale web=3</p>
                    <p className="text-zinc-500">Scaling web service to 3 replicas...</p>
                    <motion.div 
                        animate={{ opacity: [0, 1] }}
                        transition={{ duration: 0.8, repeat: Infinity }}
                        className="w-2.5 h-5 bg-zinc-500 inline-block mt-2"
                    />
                </div>
            </div>
        </div>
    );
};

const FeatureSection = ({ title, description, icon: Icon, children, flipped = false, features = [] }: any) => {
  return (
    <section className="py-24 border-t border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">
            {/* Text Content */}
            <div className={`order-2 ${flipped ? 'lg:order-2' : 'lg:order-1'}`}>
                <ScrollReveal>
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white/5 text-white border border-white/10 mb-8">
                        <Icon size={28} />
                    </div>
                </ScrollReveal>
                
                <ScrollReveal delay={100}>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tighter">{title}</h2>
                </ScrollReveal>
                
                <ScrollReveal delay={200}>
                    <p className="text-xl text-zinc-400 leading-relaxed mb-8 font-light">{description}</p>
                </ScrollReveal>

                {features.length > 0 && (
                    <ScrollReveal delay={300}>
                        <ul className="space-y-4">
                            {features.map((feature: string, idx: number) => (
                                <li key={idx} className="flex items-center gap-4">
                                    <div className="w-2 h-2 rounded-full bg-white shrink-0" />
                                    <span className="text-zinc-300 text-lg">{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </ScrollReveal>
                )}
            </div>

            {/* Visual/Animation Content */}
            <div className={`order-1 ${flipped ? 'lg:order-1' : 'lg:order-2'} relative`}>
                <ScrollReveal delay={200} width="w-full">
                    <div className="relative w-full aspect-square rounded-2xl border border-white/10 bg-zinc-900/20 overflow-hidden shadow-2xl">
                        {/* Soft Glow */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-white/5 blur-3xl rounded-full opacity-20 pointer-events-none" />
                        {children}
                    </div>
                </ScrollReveal>
            </div>
        </div>
      </div>
    </section>
  );
};

const DetailedFeatures = () => {
  return (
    <div className="relative">
        <FeatureSection 
            title="Focus on Code, Not Tabs"
            description="Eliminate the cognitive load of context switching. Bring your entire development lifecycle into one consolidated dashboard."
            icon={Zap}
            features={[
                "Unified Inbox for GitHub, Linear, and Sentry",
                "Command Palette for instant navigation",
                "Deep links to external tools when needed"
            ]}
        >
            <ContextSwitchingAnimation />
        </FeatureSection>

        <FeatureSection 
            title="Client Approvals Made Simple"
            description="A dedicated portal for your clients. They get the transparency they want, you get the structured feedback you need."
            icon={Users}
            flipped={true}
            features={[
                "White-labeled domain and branding",
                "Formal approval workflows for milestones",
                "Secure file sharing without expiration links"
            ]}
        >
            <ClientApprovalAnimation />
        </FeatureSection>
        
        <FeatureSection 
            title="Infrastructure at your Fingertips"
            description="Stop SSH-ing into servers to check logs or restart services. Manage your VPS and Docker containers effortlessly."
            icon={RefreshCw}
            features={[
                "Real-time resource monitoring (CPU/RAM)",
                "One-click container restarts",
                "Centralized log aggregation"
            ]}
        >
            <TerminalAnimation />
        </FeatureSection>
    </div>
  );
};

export default DetailedFeatures;