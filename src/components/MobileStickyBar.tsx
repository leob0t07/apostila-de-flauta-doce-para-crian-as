import React, { useState, useEffect } from 'react';
import { Zap } from 'lucide-react';

interface MobileStickyBarProps {
  onOpenCheckout: () => void;
}

export const MobileStickyBar: React.FC<MobileStickyBarProps> = ({ onOpenCheckout }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky bar after scrolling past 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 px-3 py-2.5 shadow-[0_-4px_16px_rgba(0,0,0,0.08)] animate-in slide-in-from-bottom duration-200">
      <div className="flex items-center justify-between gap-3 max-w-md mx-auto">
        <div className="min-w-0">
          <span className="text-[10px] text-slate-500 uppercase tracking-tight block font-semibold">
            De <span className="line-through">R$ 97,00</span>
          </span>
          <div className="text-base font-black text-slate-900 leading-none">
            R$ 9,99 <span className="text-[10px] text-slate-500 font-normal">à vista</span>
          </div>
        </div>

        <button
          onClick={onOpenCheckout}
          className="flex-1 bg-emerald-500 hover:bg-emerald-600 active:scale-95 text-white font-extrabold text-xs sm:text-sm py-2.5 px-4 rounded-xl shadow-md flex items-center justify-center gap-1.5 transition-all cursor-pointer whitespace-nowrap"
        >
          <Zap className="w-4 h-4 fill-amber-300 text-amber-300 shrink-0" />
          <span>QUERO MEU FILHO TOCANDO</span>
        </button>
      </div>
    </div>
  );
};
