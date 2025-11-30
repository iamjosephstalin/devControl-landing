import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie } from 'lucide-react';

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already consented
    const consented = localStorage.getItem('cookieConsent');
    if (!consented) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'true');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'false');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed bottom-6 left-6 right-6 md:left-auto md:right-6 md:w-[400px] z-[60]"
        >
          <div className="bg-[#0c0c0e]/90 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl shadow-black/50">
            <div className="flex items-start gap-4 mb-4">
               <div className="p-2.5 rounded-lg bg-blue-500/10 text-blue-400 shrink-0">
                  <Cookie size={24} />
               </div>
               <div>
                 <h3 className="text-white font-bold text-sm mb-1">We use cookies</h3>
                 <p className="text-zinc-400 text-xs leading-relaxed">
                   We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our traffic.
                 </p>
               </div>
            </div>
            <div className="flex gap-3">
              <button 
                onClick={handleDecline}
                className="flex-1 py-2 rounded-lg bg-zinc-800 text-zinc-300 text-xs font-semibold hover:bg-zinc-700 transition-colors border border-white/5"
              >
                Decline
              </button>
              <button 
                onClick={handleAccept}
                className="flex-1 py-2 rounded-lg bg-white text-black text-xs font-semibold hover:bg-zinc-200 transition-colors"
              >
                Accept All
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;