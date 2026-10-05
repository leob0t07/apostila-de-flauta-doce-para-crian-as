import React from 'react';
import { Zap, Clock } from 'lucide-react';

export const TopNotificationBar: React.FC = () => {
  return (
    <div className="bg-red-600 text-white py-2 px-3 sm:px-4 text-xs sm:text-sm font-semibold sticky top-0 z-50 shadow-md">
      <div className="max-w-6xl mx-auto flex items-center justify-center text-center gap-2">
        <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-red-700/80 animate-pulse shrink-0">
          <Zap className="w-3.5 h-3.5 text-amber-300 fill-amber-300" />
        </span>
        <span className="leading-snug">
          <strong className="font-extrabold tracking-wide uppercase">⚡ ACESSO DIGITAL IMEDIATO:</strong>{' '}
          Baixe e imprima as apostilas em menos de 2 minutos após a confirmação.
        </span>
        <span className="hidden md:inline-flex items-center gap-1 text-red-100 font-normal text-xs bg-red-700/60 px-2 py-0.5 rounded-full shrink-0">
          <Clock className="w-3 h-3" />
          Acesso vitalício
        </span>
      </div>
    </div>
  );
};
