import React, { useState, useEffect } from 'react';
import { Users, CheckCircle, FileText, ChevronRight, Lock, Download, Shield, Clock, AlertCircle } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const ClientPortalSection = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const workflowSteps = [
    {
      title: "Homepage Redesign",
      status: "pending_review",
      description: "New hero section and navigation",
      action: "Review Required",
      color: "yellow",
      icon: Clock
    },
    {
      title: "Homepage Redesign", 
      status: "under_review",
      description: "Client is reviewing the changes...",
      action: "Under Review",
      color: "blue",
      icon: AlertCircle
    },
    {
      title: "Homepage Redesign",
      status: "approved",
      description: "Approved by client - Ready for deployment",
      action: "Approved",
      color: "green", 
      icon: CheckCircle
    },
    {
      title: "Payment Integration",
      status: "pending_review",
      description: "Stripe payment gateway integration",
      action: "Review Required",
      color: "yellow",
      icon: Clock
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentStep((prev) => (prev + 1) % workflowSteps.length);
        setIsAnimating(false);
      }, 300);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const currentWorkflow = workflowSteps[currentStep];

  return (
    <section className="py-24 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
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
            <div className="relative rounded-xl border border-white/10 bg-[#09090b]/80 backdrop-blur-xl shadow-2xl overflow-hidden mx-auto max-w-6xl">
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
                <div className="p-4 md:p-8 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
                    {/* Welcome Section */}
                    <div className="md:col-span-2 space-y-6">
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-2">Client Approval Workflow</h3>
                            <p className="text-zinc-400 text-sm">Watch how clients seamlessly review and approve deliverables in real-time.</p>
                        </div>
                        
                        <div className="space-y-4">
                            {/* Completed Task */}
                            <div className="p-4 rounded-lg border border-white/5 bg-zinc-900/30 flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-green-500/10 text-green-400 flex items-center justify-center">
                                        <CheckCircle size={20} />
                                    </div>
                                    <div>
                                        <h4 className="text-white text-sm font-medium">User Authentication</h4>
                                        <p className="text-zinc-500 text-xs">Approved by client 2 days ago</p>
                                    </div>
                                </div>
                                <span className="px-2 py-1 rounded bg-green-500/10 text-green-400 text-xs font-medium border border-green-500/20">Approved</span>
                            </div>

                            {/* Animated Current Task */}
                            <div className={`p-4 rounded-lg border ${
                              currentWorkflow.color === 'yellow' ? 'border-yellow-500/30 bg-yellow-500/5' :
                              currentWorkflow.color === 'blue' ? 'border-blue-500/30 bg-blue-500/5' :
                              'border-green-500/30 bg-green-500/5'
                            } flex items-center justify-between transition-all duration-500 ${
                              isAnimating ? 'scale-[0.98] opacity-80' : 'scale-100 opacity-100'
                            }`}>
                                <div className="flex items-center gap-4">
                                    <div className={`w-10 h-10 rounded-full ${
                                      currentWorkflow.color === 'yellow' ? 'bg-yellow-500/10 text-yellow-400' :
                                      currentWorkflow.color === 'blue' ? 'bg-blue-500/10 text-blue-400' :
                                      'bg-green-500/10 text-green-400'
                                    } flex items-center justify-center relative`}>
                                        {currentWorkflow.status === 'under_review' && (
                                          <div className="w-3 h-3 rounded-full bg-blue-500 animate-pulse absolute" />
                                        )}
                                        <currentWorkflow.icon size={20} className="relative z-10" />
                                    </div>
                                    <div>
                                        <h4 className="text-white text-sm font-medium">{currentWorkflow.title}</h4>
                                        <p className="text-zinc-500 text-xs">{currentWorkflow.description}</p>
                                    </div>
                                </div>
                                
                                {currentWorkflow.status === 'pending_review' && (
                                  <button className="px-3 py-1.5 rounded bg-yellow-600/80 hover:bg-yellow-500 text-white text-xs font-medium transition-colors shadow-lg shadow-yellow-500/20 animate-pulse">
                                    Client Review Needed
                                  </button>
                                )}
                                
                                {currentWorkflow.status === 'under_review' && (
                                  <span className="px-3 py-1.5 rounded bg-blue-500/20 text-blue-300 text-xs font-medium border border-blue-500/30 flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-blue-400 animate-ping" />
                                    Under Review
                                  </span>
                                )}
                                
                                {currentWorkflow.status === 'approved' && (
                                  <span className="px-3 py-1.5 rounded bg-green-500/20 text-green-300 text-xs font-medium border border-green-500/30 flex items-center gap-2">
                                    <CheckCircle size={12} />
                                    Approved!
                                  </span>
                                )}
                            </div>

                            {/* Progress Indicator */}
                            <div className="flex justify-center pt-4">
                              <div className="flex gap-2">
                                {workflowSteps.map((_, index) => (
                                  <div
                                    key={index}
                                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                      index === currentStep ? 'bg-blue-500 scale-125' : 'bg-zinc-700'
                                    }`}
                                  />
                                ))}
                              </div>
                            </div>
                        </div>
                    </div>

                    {/* Client Activity Sidebar */}
                    <div className="md:border-l border-white/5 md:pl-8 hidden md:block">
                        <h4 className="text-sm font-bold text-zinc-300 mb-4">Recent Activity</h4>
                        <div className="space-y-3">
                             <div className="flex items-start gap-3 p-2 rounded transition-colors">
                                <div className="w-2 h-2 rounded-full bg-green-500 mt-2 flex-shrink-0" />
                                <div>
                                    <div className="text-xs text-zinc-300 font-medium">Client approved homepage</div>
                                    <div className="text-[10px] text-zinc-500">2 minutes ago</div>
                                </div>
                             </div>
                             <div className="flex items-start gap-3 p-2 rounded transition-colors">
                                <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse mt-2 flex-shrink-0" />
                                <div>
                                    <div className="text-xs text-zinc-300 font-medium">Review requested</div>
                                    <div className="text-[10px] text-zinc-500">5 minutes ago</div>
                                </div>
                             </div>
                             <div className="flex items-start gap-3 p-2 rounded transition-colors">
                                <div className="w-2 h-2 rounded-full bg-zinc-600 mt-2 flex-shrink-0" />
                                <div>
                                    <div className="text-xs text-zinc-400 font-medium">Files uploaded</div>
                                    <div className="text-[10px] text-zinc-500">1 hour ago</div>
                                </div>
                             </div>
                        </div>

                        <div className="mt-8 p-4 rounded bg-purple-500/5 border border-purple-500/10">
                            <p className="text-xs text-purple-300 mb-2 font-medium flex items-center gap-2">
                                <Users size={12} />
                                Client Engagement
                            </p>
                            <div className="h-1 w-full bg-purple-900/30 rounded-full overflow-hidden">
                                <div className="h-full bg-gradient-to-r from-purple-500 to-blue-500 w-[85%] transition-all duration-1000"></div>
                            </div>
                            <p className="text-[10px] text-zinc-500 mt-2 text-right">85% Response Rate</p>
                        </div>

                        <div className="mt-6 p-3 rounded bg-zinc-900/50 border border-white/5">
                            <p className="text-[10px] text-zinc-400 mb-1">💡 Tip</p>
                            <p className="text-[10px] text-zinc-500">"@mention" clients in comments to notify them instantly</p>
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