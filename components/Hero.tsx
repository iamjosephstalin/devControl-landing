import React, { useState, useEffect } from 'react';
import { 
  ChevronRight, 
  LayoutDashboard, 
  FolderGit2, 
  Server, 
  Key, 
  Calendar, 
  Settings, 
  CheckSquare,
  FileText,
  GitBranch,
  Zap,
  ChevronLeft,
  Terminal,
  Clock,
  Activity,
  Shield,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Spotlight } from './ui/Spotlight';
import { BorderBeam } from './ui/BorderBeam';

const Hero = () => {
  return (
    <section className="relative pt-20 pb-16 md:pt-28 md:pb-20 2xl:pt-32 2xl:pb-24 overflow-hidden">
       {/* Background Effects */}
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />
      
      {/* Content Section */}
      <div className="max-w-screen-2xl mx-auto px-6 relative z-10 text-center mb-20">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-8"
        >
          <div 
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 transition-colors cursor-pointer group shadow-[0_0_20px_-10px_rgba(120,119,198,0.3)] hover:shadow-[0_0_20px_-5px_rgba(120,119,198,0.5)]"
          >
            <span className="text-zinc-300 text-xs font-semibold tracking-wide uppercase">New Release</span>
            <div className="w-px h-3 bg-white/20 mx-1" />
            <span className="text-zinc-400 text-xs group-hover:text-white transition-colors flex items-center gap-1 font-medium">
               v2.0 Available <ChevronRight size={12} />
            </span>
          </div>
        </motion.div>

        {/* Heading */}
        <motion.h1 
          className="text-6xl md:text-8xl 2xl:text-9xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/40 mb-6 max-w-5xl mx-auto leading-[1.1]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          The Control Center for <br /> Modern Developers
        </motion.h1>

        {/* Description */}
        <motion.p 
          className="text-xl md:text-2xl text-zinc-400 max-w-3xl mx-auto mb-8 leading-relaxed font-light"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Consolidate your entire workflow. Manage projects, secrets, infrastructure, and client portals from a single, beautifully designed interface.
        </motion.p>

        {/* Buttons */}
        <motion.div 
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <button className="h-12 px-8 rounded-full bg-white text-black font-semibold text-sm hover:bg-zinc-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-500/30">
            Start Building Free
          </button>
          
          <button className="h-12 px-8 rounded-full bg-transparent text-white border border-white/10 font-semibold text-sm hover:bg-white/5 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black flex items-center gap-2 group">
             <span>Documentation</span>
             <ChevronRight size={14} className="opacity-50 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>

      {/* Dashboard Mockup Section */}
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          className="relative"
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.4, ease: "circOut" }}
        >
          <div className="relative bg-zinc-950/80 backdrop-blur-lg border border-white/10 rounded-3xl overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.8)]">
            <BorderBeam size={300} duration={12} delay={9} />
            
            {/* Dashboard Window Controls */}
            <div className="flex items-center gap-2 px-6 py-4 bg-zinc-900/80 border-b border-white/5">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <div className="flex-1 text-center">
                <div className="text-xs text-zinc-400 font-mono">localhost:3000/dashboard</div>
              </div>
            </div>

            {/* Dashboard Header */}
            <div className="px-6 py-4 bg-zinc-900/50 border-b border-white/5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-500/30">
                    <Terminal size={20} className="text-blue-400" />
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-white">DevControl</h2>
                    <p className="text-xs text-zinc-400">Development Dashboard</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-2 text-xs">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-green-400 font-medium">Live</span>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-blue-500 border-2 border-white/10" />
                </div>
              </div>
            </div>

            {/* Dashboard Content */}
            <div className="p-6 h-[600px] bg-gradient-to-br from-zinc-900/50 via-zinc-900/80 to-black/70 relative overflow-hidden">
              
              {/* Navigation Sidebar */}
              <div className="absolute left-6 top-6 w-56 h-[540px] bg-zinc-900/60 backdrop-blur-md border border-white/10 rounded-xl p-4">
                <div className="space-y-1 mb-6">
                  <SidebarItem icon={LayoutDashboard} label="Overview" active />
                  <SidebarItem icon={FolderGit2} label="Projects" />
                  <SidebarItem icon={Server} label="Infrastructure" />
                  <SidebarItem icon={Key} label="Secrets" />
                  <SidebarItem icon={Settings} label="Settings" />
                </div>
                
                <div className="border-t border-white/5 pt-4">
                  <h3 className="text-xs font-bold text-zinc-500 uppercase tracking-wider mb-3">Recent</h3>
                  <div className="space-y-2 text-xs">
                    <div className="text-zinc-400">E-commerce API</div>
                    <div className="text-zinc-400">Client Portal</div>
                    <div className="text-zinc-400">ML Pipeline</div>
                  </div>
                </div>
              </div>

              {/* Main Dashboard Area */}
              <div className="ml-64 space-y-6">
                
                {/* Stats Cards */}
                <div className="grid grid-cols-4 gap-4">
                  <StatCard label="Active Projects" value="12" sub="+2 this week" icon={FolderGit2} />
                  <StatCard label="Deployments" value="89" sub="Success rate 98%" icon={Zap} />
                  <StatCard label="API Calls" value="2.4M" sub="Last 24h" icon={Activity} />
                  <StatCard label="Uptime" value="99.9%" sub="30 day avg" icon={CheckCircle2} />
                </div>

                {/* Projects & Activity Grid */}
                <div className="grid grid-cols-2 gap-6">
                  
                  {/* Projects Section */}
                  <div className="bg-zinc-900/40 border border-white/5 rounded-xl p-6">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-lg font-bold text-white">Active Projects</h3>
                      <button className="text-xs text-blue-400 hover:text-blue-300">View All</button>
                    </div>
                    <div className="space-y-3">
                      <ProjectCard title="E-commerce Platform" status="deploying" />
                      <ProjectCard title="Client Dashboard" status="online" />
                      <ProjectCard title="ML Data Pipeline" status="building" />
                    </div>
                  </div>

                  {/* Live Activity Feed */}
                  <div className="bg-zinc-900/40 border border-white/5 rounded-xl p-6">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-lg font-bold text-white">Live Activity</h3>
                      <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    </div>
                    <LiveActivityFeed />
                  </div>
                </div>

              </div>

              {/* Floating Live Updates */}
              <div className="absolute bottom-6 right-6 w-80 space-y-2 pointer-events-none">
                <motion.div 
                  animate={{ 
                    x: [0, 10, 0], 
                    opacity: [0.7, 1, 0.7]
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="bg-green-500/10 border border-green-500/20 rounded-lg p-3 backdrop-blur-md"
                >
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-green-400" />
                    <span className="text-green-300 text-sm font-medium">Deployment successful</span>
                  </div>
                </motion.div>
              </div>

            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// --- Sub-Components ---

const SidebarItem = ({ icon: Icon, label, active }: any) => (
  <div 
    className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
      active 
        ? 'bg-blue-500/10 text-blue-400 border-l-2 border-blue-400' 
        : 'text-zinc-400 hover:text-zinc-300 hover:bg-white/5'
    }`}
  >
    <Icon size={16} />
    <span>{label}</span>
  </div>
);

const StatCard = ({ label, value, sub, icon: Icon }: any) => (
  <div className="bg-zinc-900/60 border border-white/5 rounded-xl p-4 backdrop-blur-sm">
    <div className="flex justify-between items-start mb-3">
      <div className="text-2xl font-bold text-white">{value}</div>
      <Icon className="text-zinc-500" size={20} />
    </div>
    <div>
      <div className="text-sm font-medium text-zinc-300">{label}</div>
      <div className="text-xs text-zinc-500">{sub}</div>
    </div>
  </div>
);

const ProjectCard = ({ title, status }: any) => (
  <div className="flex items-center justify-between p-3 rounded-lg bg-zinc-800/50 border border-white/5">
    <div className="flex items-center gap-3">
      <div className={`w-2 h-2 rounded-full ${
        status === 'online' ? 'bg-green-500' : 
        status === 'deploying' ? 'bg-yellow-500 animate-pulse' : 
        'bg-orange-500 animate-pulse'
      }`} />
      <span className="text-sm text-zinc-300">{title}</span>
    </div>
    <span className={`text-xs px-2 py-1 rounded ${
      status === 'online' ? 'bg-green-500/10 text-green-400' : 
      status === 'deploying' ? 'bg-yellow-500/10 text-yellow-400' : 
      'bg-orange-500/10 text-orange-400'
    }`}>
      {status}
    </span>
  </div>
);

const LiveActivityFeed = () => {
  const [events, setEvents] = useState([
    { id: 1, type: 'deploy', text: 'Deployed to production', time: '2m ago', user: 'Sarah' },
    { id: 2, type: 'commit', text: 'Merged feature/auth-update', time: '5m ago', user: 'Mike' },
    { id: 3, type: 'alert', text: 'High memory usage detected', time: '8m ago', user: 'System' },
  ]);

  useEffect(() => {
    const activityTypes = [
      { type: 'deploy', text: 'Build completed successfully' },
      { type: 'security', text: 'Security scan passed' },
      { type: 'git', text: 'New pull request opened' },
      { type: 'server', text: 'Auto-scaling triggered' }
    ];

    const interval = setInterval(() => {
      const newActivity = { 
        id: Date.now(), 
        ...activityTypes[Math.floor(Math.random() * activityTypes.length)],
        time: 'now',
        user: ['Alex', 'Jordan', 'System'][Math.floor(Math.random() * 3)]
      };
      
      setEvents(prev => [newActivity, ...prev.slice(0, 2)]);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-3">
      <AnimatePresence>
        {events.map((event) => (
          <motion.div
            key={event.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="flex items-start gap-3 p-3 rounded-lg bg-zinc-800/30 border border-white/5"
          >
            <ActivityIcon type={event.type} />
            <div className="flex-1 min-w-0">
              <p className="text-sm text-zinc-200">{event.text}</p>
              <div className="flex items-center gap-2 text-xs text-zinc-500 mt-1">
                <span>{event.user}</span>
                <span>•</span>
                <span>{event.time}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

const ActivityIcon = ({ type }: { type: string }) => {
  switch (type) {
    case 'deploy': return <Zap size={16} className="text-green-400 mt-0.5" />;
    case 'commit': return <GitBranch size={16} className="text-blue-400 mt-0.5" />;
    case 'alert': return <AlertCircle size={16} className="text-red-400 mt-0.5" />;
    case 'security': return <Shield size={16} className="text-purple-400 mt-0.5" />;
    case 'git': return <GitBranch size={16} className="text-orange-400 mt-0.5" />;
    case 'server': return <Server size={16} className="text-cyan-400 mt-0.5" />;
    default: return <Activity size={16} className="text-zinc-400 mt-0.5" />;
  }
};

export default Hero;