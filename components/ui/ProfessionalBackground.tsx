import React from 'react';

export const ProfessionalBackground = () => {
  return (
    <div className="fixed inset-0 z-0 h-full w-full bg-[#030305] overflow-hidden pointer-events-none">
      {/* Ambient Gradient Orbs - Boosted Visibility */}
      <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full bg-blue-600/15 blur-[100px] animate-pulse-slow" />
      <div className="absolute top-[10%] right-[-10%] w-[50%] h-[60%] rounded-full bg-purple-600/15 blur-[100px] animate-pulse-slow" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-[-10%] left-[20%] w-[60%] h-[50%] rounded-full bg-indigo-600/10 blur-[120px]" />

      {/* Grid Pattern with Expanded Radial Mask - Made more subtle */}
      <div 
        className="absolute inset-0 z-0 opacity-20" 
        style={{
            backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
            maskImage: 'radial-gradient(ellipse at center, black 60%, transparent 100%)',
            WebkitMaskImage: 'radial-gradient(ellipse at center, black 60%, transparent 100%)'
        }}
      />

      {/* Subtle Noise Texture for Matte Finish */}
      <div 
        className="absolute inset-0 z-10 opacity-[0.04] mix-blend-overlay"
        style={{ 
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` 
        }}
      />
      
      {/* Vignette Overlay to darken edges - Reduced intensity to keep content visible */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#030305] via-transparent to-[#030305]/60 z-20" />
    </div>
  );
};

export default ProfessionalBackground;