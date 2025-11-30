import React from 'react';
import { Users, CheckCircle, FileText, ChevronRight, Lock, Download, Shield } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const ClientPortalSection = () => {
  return (
    <section className="py-24 border-y border-white/5">
      <div className="max-w-screen-2xl mx-auto px-6">
        <ScrollReveal>
            <div className="text-center mb-16">
                <span className="text-blue-400 font-semibold tracking-wider text-sm uppercase">Collaboration</span>
                <h2 className="text-3xl md:text-5xl font-bold mt-2 text-white">Bridge the Gap with Clients</h2>
                <p className="text-zinc-400 mt-4 max-w-2xl mx-auto">
                    Maintain transparency without oversharing. You control exactly what the client sees, from task status to invoices.
                </p>
            </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <ScrollReveal delay={100} className="h-full">
                <div className="h-full p-6 rounded-2xl bg-black/60 border border-zinc-800 hover:border-blue-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/5 group backdrop-blur-sm">
                    <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400 mb-4">
                        <CheckCircle size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">Task Approval</h3>
                    <p className="text-zinc-400 text-sm mb-6">Clients can view "Client-Facing" tasks and mark them as approved, streamlining UAT phases.</p>
                    
                    {/* Visual Mockup */}
                    <div className="p-3 rounded-lg bg-zinc-900/50 border border-white/5 space-y-3">
                        <div className="flex items-center justify-between">
                            <span className="text-xs text-white font-medium">Homepage Hero Section</span>
                            <div className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse" />
                        </div>
                        <div className="flex gap-2">
                            <div className="flex-1 py-1.5 rounded bg-green-500/10 text-green-400 text-[10px] font-bold text-center border border-green-500/20 group-hover:bg-green-500/20 transition-colors cursor-pointer">
                                Approve
                            </div>
                            <div className="flex-1 py-1.5 rounded bg-zinc-800 text-zinc-400 text-[10px] font-bold text-center border border-white/5">
                                Reject
                            </div>
                        </div>
                    </div>
                </div>
            </ScrollReveal>
            
            <ScrollReveal delay={200} className="h-full">
                <div className="h-full p-6 rounded-2xl bg-black/60 border border-zinc-800 hover:border-blue-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/5 group backdrop-blur-sm">
                    <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 mb-4">
                        <FileText size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">Shared Documents</h3>
                    <p className="text-zinc-400 text-sm mb-6">Upload contracts, invoices, and design specs to a shared vault accessible directly by the client.</p>

                    {/* Visual Mockup */}
                    <div className="space-y-2">
                        <div className="flex items-center gap-3 p-2 rounded bg-zinc-900/50 border border-white/5 group-hover:border-blue-500/20 transition-colors">
                            <div className="p-1.5 rounded bg-red-500/10 text-red-400">
                                <FileText size={12} />
                            </div>
                            <div className="flex-1 min-w-0">
                                <div className="text-[10px] text-zinc-300 truncate">Service_Agreement.pdf</div>
                                <div className="text-[8px] text-zinc-500">2.4 MB</div>
                            </div>
                            <div className="p-1.5 rounded hover:bg-white/10 text-zinc-500 cursor-pointer transition-colors">
                                <Download size={12} />
                            </div>
                        </div>
                        <div className="flex items-center gap-3 p-2 rounded bg-zinc-900/50 border border-white/5 group-hover:border-blue-500/20 transition-colors opacity-60">
                            <div className="p-1.5 rounded bg-blue-500/10 text-blue-400">
                                <FileText size={12} />
                            </div>
                            <div className="flex-1 min-w-0">
                                <div className="h-2 w-20 bg-zinc-800 rounded mb-1" />
                                <div className="h-1.5 w-8 bg-zinc-800 rounded" />
                            </div>
                        </div>
                    </div>
                </div>
            </ScrollReveal>

            <ScrollReveal delay={300} className="h-full">
                <div className="h-full p-6 rounded-2xl bg-black/60 border border-zinc-800 hover:border-blue-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/5 group backdrop-blur-sm">
                    <div className="w-12 h-12 rounded-lg bg-green-500/10 flex items-center justify-center text-green-400 mb-4">
                        <Users size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">Role Based Access</h3>
                    <p className="text-zinc-400 text-sm mb-6">Add stakeholders with "View Only" or "Commenter" roles. Keep your repo links private.</p>

                    {/* Visual Mockup */}
                    <div className="space-y-2">
                        <div className="flex items-center justify-between p-2 rounded bg-zinc-900/50 border border-white/5 group-hover:bg-zinc-900/80 transition-colors">
                            <div className="flex items-center gap-2">
                                <div className="w-6 h-6 rounded-full bg-purple-500/20 text-purple-400 text-[10px] font-bold flex items-center justify-center border border-purple-500/10">JD</div>
                                <span className="text-[10px] text-zinc-300 font-medium">John Doe</span>
                            </div>
                            <span className="text-[9px] bg-blue-500/10 text-blue-400 px-1.5 py-0.5 rounded border border-blue-500/20 font-medium">Admin</span>
                        </div>
                        <div className="flex items-center justify-between p-2 rounded bg-zinc-900/50 border border-white/5 group-hover:bg-zinc-900/80 transition-colors">
                            <div className="flex items-center gap-2">
                                <div className="w-6 h-6 rounded-full bg-green-500/20 text-green-400 text-[10px] font-bold flex items-center justify-center border border-green-500/10">AS</div>
                                <span className="text-[10px] text-zinc-300 font-medium">Alice Smith</span>
                            </div>
                            <span className="text-[9px] bg-zinc-800 text-zinc-400 px-1.5 py-0.5 rounded border border-white/5 font-medium">Viewer</span>
                        </div>
                    </div>
                </div>
            </ScrollReveal>
        </div>

        {/* Client Portal Mockup */}
        <ScrollReveal delay={400}>
            <div className="relative rounded-xl border border-white/10 bg-[#09090b]/80 backdrop-blur-xl shadow-2xl overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-blue-500"></div>
                
                {/* Mockup Header */}
                <div className="h-14 border-b border-white/5 flex items-center justify-between px-6 bg-zinc-900/50">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded bg-white text-black font-bold flex items-center justify-center shadow-[0_0_15px_rgba(255,255,255,0.2)]">A</div>
                        <span className="text-sm font-medium text-white">Acme Corp Portal</span>
                    </div>
                    <div className="flex items-center gap-4 text-xs">
                         <span className="text-zinc-500">Logged in as Client</span>
                         <div className="w-6 h-6 rounded-full bg-zinc-700 ring-2 ring-black"></div>
                    </div>
                </div>

                {/* Mockup Content */}
                <div className="p-8 grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Welcome Section */}
                    <div className="md:col-span-2 space-y-6">
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-2">Project Status</h3>
                            <p className="text-zinc-400 text-sm">Here is the latest progress on the MVP development.</p>
                        </div>
                        
                        <div className="space-y-4">
                            <div className="p-4 rounded-lg border border-white/5 bg-zinc-900/30 flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-green-500/10 text-green-400 flex items-center justify-center">
                                        <CheckCircle size={20} />
                                    </div>
                                    <div>
                                        <h4 className="text-white text-sm font-medium">User Authentication</h4>
                                        <p className="text-zinc-500 text-xs">Completed 2 days ago</p>
                                    </div>
                                </div>
                                <span className="px-2 py-1 rounded bg-green-500/10 text-green-400 text-xs font-medium border border-green-500/20">Done</span>
                            </div>

                            <div className="p-4 rounded-lg border border-white/5 bg-zinc-900/30 flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-blue-500/10 text-blue-400 flex items-center justify-center relative">
                                        <div className="w-2 h-2 rounded-full bg-blue-500 animate-ping absolute" />
                                        <div className="w-2 h-2 rounded-full bg-blue-500 relative z-10" />
                                    </div>
                                    <div>
                                        <h4 className="text-white text-sm font-medium">Payment Integration</h4>
                                        <p className="text-zinc-500 text-xs">Currently in progress</p>
                                    </div>
                                </div>
                                <button className="px-3 py-1.5 rounded bg-blue-600 hover:bg-blue-500 text-white text-xs font-medium transition-colors shadow-lg shadow-blue-500/20">
                                    Review Demo
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Shared Files Sidebar */}
                    <div className="border-l border-white/5 pl-8 hidden md:block">
                        <h4 className="text-sm font-bold text-zinc-300 mb-4">Shared Files</h4>
                        <div className="space-y-3">
                             <div className="flex items-center gap-3 p-2 hover:bg-white/5 rounded transition-colors cursor-pointer group">
                                <FileText size={16} className="text-zinc-500 group-hover:text-blue-400" />
                                <div>
                                    <div className="text-xs text-zinc-300 font-medium">Contract_Signed.pdf</div>
                                    <div className="text-[10px] text-zinc-600">2.4 MB • 12 Oct</div>
                                </div>
                             </div>
                             <div className="flex items-center gap-3 p-2 hover:bg-white/5 rounded transition-colors cursor-pointer group">
                                <FileText size={16} className="text-zinc-500 group-hover:text-blue-400" />
                                <div>
                                    <div className="text-xs text-zinc-300 font-medium">Invoice_Oct.pdf</div>
                                    <div className="text-[10px] text-zinc-600">140 KB • 01 Nov</div>
                                </div>
                             </div>
                        </div>

                        <div className="mt-8 p-4 rounded bg-blue-500/5 border border-blue-500/10">
                            <p className="text-xs text-blue-300 mb-2 font-medium">Next Milestone</p>
                            <div className="h-1 w-full bg-blue-900/30 rounded-full overflow-hidden">
                                <div className="h-full bg-blue-500 w-[75%]"></div>
                            </div>
                            <p className="text-[10px] text-zinc-500 mt-2 text-right">75% Complete</p>
                        </div>
                    </div>
                </div>
            </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ClientPortalSection;