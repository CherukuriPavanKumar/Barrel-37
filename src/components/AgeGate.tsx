import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShieldCheck } from 'lucide-react';
import { Language } from '../types';

export default function AgeGate({ language }: { language: Language }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const verified = sessionStorage.getItem('barrel37_age_verified');
    if (!verified) setIsVisible(true);
  }, []);

  const handleVerify = () => {
    sessionStorage.setItem('barrel37_age_verified', 'true');
    setIsVisible(false);
  };

  const handleReject = () => {
    window.location.href = 'https://www.google.com';
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md px-4"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(196,166,123,0.05),transparent_50%)] pointer-events-none"></div>
          
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="w-full max-w-sm border border-neutral-800 bg-[#060606] p-8 md:p-10 relative text-center"
          >
            <ShieldCheck size={28} className="text-gold mx-auto mb-6" />
            
            <span className="text-[10px] font-mono tracking-[0.3em] text-neutral-500 uppercase block mb-3">
              {language === 'pl' ? 'Weryfikacja Wieku' : 'Age Verification'}
            </span>
            
            <h2 className="text-2xl font-serif text-cream mb-4">
              {language === 'pl' 
                ? 'Czy masz ukończone 18 lat?' 
                : 'Are you of legal drinking age?'}
            </h2>
            
            <p className="text-xs text-neutral-400 font-sans mb-8">
              {language === 'pl'
                ? 'Musisz mieć co najmniej 18 lat, aby wejść na naszą stronę.'
                : 'You must be at least 18 years old to enter our site.'}
            </p>

            <div className="flex flex-col gap-3">
              <button 
                onClick={handleVerify}
                className="w-full py-4 bg-gold hover:bg-gold-dark text-black text-[10px] font-mono uppercase tracking-[0.2em] font-bold transition-all cursor-pointer"
              >
                {language === 'pl' ? 'Tak, Mam Ukończone 18 Lat' : 'Yes, I Am Over 18'}
              </button>
              <button 
                onClick={handleReject}
                className="w-full py-4 bg-transparent hover:bg-white/5 border border-neutral-800 text-neutral-400 hover:text-cream text-[10px] font-mono uppercase tracking-[0.2em] transition-all cursor-pointer"
              >
                {language === 'pl' ? 'Nie, Zabierz Mnie Stąd' : 'No, I Am Not'}
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
