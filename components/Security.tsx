import React from 'react';
import { Shield, Lock, Key, EyeOff } from 'lucide-react';
import { motion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';

const Security = () => {
  return (
    <section id="security" className="py-32 border-t border-white/5">
      <div className="max-w-screen-2xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
                <ScrollReveal>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 text-white text-xs font-medium border border-white/10 mb-6 uppercase tracking-wider">
                        <Shield size={12} /> Security First
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tighter">Your Secrets, <br/> Encrypted.</h2>
                </ScrollReveal>
                
                <ScrollReveal delay={100}>
                    <p className="text-lg text-zinc-400 mb-10 leading-relaxed font-light">
                        We employ AES-256 encryption at rest and zero-knowledge architecture. Your keys never leave the secure enclave unencrypted.
                    </p>
                </ScrollReveal>

                <div className="grid gap-8">
                    <ScrollReveal delay={200}>
                        <div className="group p-6 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-colors">
                            <div className="mb-4 text-white"><Lock size={24} /></div>
                            <h3 className="text-white font-bold text-lg mb-2">AES-256 GCM</h3>
                            <p className="text-zinc-500 text-sm">Military-grade encryption for all stored credentials and environment variables.</p>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal delay={300}>
                        <div className="group p-6 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-colors">
                            <div className="mb-4 text-white"><Key size={24} /></div>
                            <h3 className="text-white font-bold text-lg mb-2">Key Management</h3>
                            <p className="text-zinc-500 text-sm">Keys are rotated automatically. We don't have access to your raw secrets.</p>
                        </div>
                    </ScrollReveal>
                </div>
            </div>

            <div className="relative">
                 <ScrollReveal delay={200}>
                    <div className="relative rounded-2xl border border-white/10 bg-[#09090b]/80 backdrop-blur-xl shadow-2xl p-8 overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/5 to-purple-500/5 pointer-events-none" />
                        
                        <div className="space-y-4 relative z-10">
                            <motion.div 
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="p-4 rounded-lg bg-zinc-900 border border-white/5 flex items-center justify-between group cursor-pointer hover:border-white/10 transition-colors"
                            >
                                <div>
                                    <div className="text-[10px] text-zinc-500 uppercase font-bold tracking-wider mb-1">Stripe Secret Key</div>
                                    <div className="font-mono text-sm text-zinc-300">sk_live_51Mz...•••••</div>
                                </div>
                                <div className="text-xs bg-zinc-800 text-zinc-400 px-2 py-1 rounded">Encrypted</div>
                            </motion.div>
                            <motion.div 
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="p-4 rounded-lg bg-zinc-900 border border-white/5 flex items-center justify-between group cursor-pointer hover:border-white/10 transition-colors"
                            >
                                <div>
                                    <div className="text-[10px] text-zinc-500 uppercase font-bold tracking-wider mb-1">AWS Access Key</div>
                                    <div className="font-mono text-sm text-zinc-300">AKIA4X...•••••</div>
                                </div>
                                <div className="text-xs bg-zinc-800 text-zinc-400 px-2 py-1 rounded">Encrypted</div>
                            </motion.div>
                            <motion.div 
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                                className="p-4 rounded-lg bg-zinc-900 border border-white/5 flex items-center justify-between group cursor-pointer hover:border-white/10 transition-colors"
                            >
                                <div>
                                    <div className="text-[10px] text-zinc-500 uppercase font-bold tracking-wider mb-1">Database URL</div>
                                    <div className="font-mono text-sm text-zinc-300">postgres://...•••••</div>
                                </div>
                                <div className="text-xs bg-zinc-800 text-zinc-400 px-2 py-1 rounded">Encrypted</div>
                            </motion.div>
                        </div>
                        
                        <div className="mt-8 flex justify-center">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-900/20 text-green-400 text-xs font-medium border border-green-900/30">
                                <Shield size={12} /> Audit Log Active
                            </div>
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Security;