import React, { useState, useEffect } from 'react';
import { AlertTriangle, Clock, Flame, ArrowRight } from 'lucide-react';

interface UrgencyBannerProps {
  onOpenCheckout: () => void;
}

export const UrgencyBanner: React.FC<UrgencyBannerProps> = ({ onOpenCheckout }) => {
  // Countdown timer for low-ticket conversion
  const [timeLeft, setTimeLeft] = useState(14 * 60 + 28); // 14 mins 28s

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 15 * 60));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 my-6 sm:my-8">
      <div className="bg-amber-50 border-2 border-amber-300 rounded-2xl p-4 sm:p-6 shadow-md transition-all">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-start gap-3.5 text-left w-full md:w-auto">
            <span className="p-2.5 rounded-xl bg-amber-200/80 text-amber-900 shrink-0 mt-0.5">
              <AlertTriangle className="w-5 h-5" />
            </span>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs uppercase tracking-wider font-extrabold text-amber-900 bg-amber-200/80 px-2 py-0.5 rounded-md flex items-center gap-1">
                  <Flame className="w-3.5 h-3.5 text-red-600 fill-red-600" />
                  Lote Promocional
                </span>
                <span className="text-xs text-amber-800 font-semibold">
                  Restam apenas 7 acessos
                </span>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                🚨 OFERTA ESPECIAL COM 90% DE DESCONTO:
              </h3>
              <p className="text-sm sm:text-base text-slate-700 mt-0.5">
                De <span className="line-through text-slate-400 font-semibold">R$ 97,00</span> por apenas{' '}
                <strong className="text-emerald-700 font-black text-lg">R$ 9,99</strong>{' '}
                <span className="text-xs text-slate-600">(ou 2x de R$ 5,21)</span>. Válido apenas para o lote atual.
              </p>
            </div>
          </div>

          {/* Right side: Countdown + Quick CTA */}
          <div className="flex items-center justify-between sm:justify-end gap-3 w-full md:w-auto shrink-0 border-t md:border-t-0 border-amber-200/80 pt-3 md:pt-0">
            <div className="flex items-center gap-1.5 bg-white px-3 py-2 rounded-xl border border-amber-300 shadow-sm text-center">
              <Clock className="w-4 h-4 text-red-600 animate-spin" style={{ animationDuration: '6s' }} />
              <div className="text-xs font-mono font-bold text-slate-900">
                <span className="text-red-600 text-sm font-black">{String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}</span>
                <span className="block text-[10px] text-slate-500 uppercase">expira em</span>
              </div>
            </div>

            <button
              onClick={onOpenCheckout}
              className="bg-emerald-600 hover:bg-emerald-700 active:scale-95 text-white font-bold text-xs sm:text-sm px-4 py-2.5 rounded-xl shadow-md transition-all flex items-center gap-1.5 whitespace-nowrap cursor-pointer"
            >
              <span>Aproveitar</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
