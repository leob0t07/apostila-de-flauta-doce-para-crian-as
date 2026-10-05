import React from 'react';
import { Zap, ShieldCheck, Star, Sparkles, CheckCircle2, Download, Printer } from 'lucide-react';
import { heroFluteMockup } from '../assets/images';

interface HeroSectionProps {
  onOpenCheckout: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenCheckout }) => {
  return (
    <section id="hero" className="relative pt-8 pb-12 sm:pt-12 sm:pb-16 overflow-hidden bg-gradient-to-b from-emerald-50/40 via-white to-slate-50">
      {/* Background soft glow circles */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-tr from-emerald-200/20 via-sky-200/20 to-amber-200/20 blur-3xl pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
        {/* Top badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-800 text-xs sm:text-sm font-bold shadow-sm mb-4 sm:mb-6">
          <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
          <span>MÉTODO VISUAL DESCOMPLICADO</span>
        </div>

        {/* Headline */}
        <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-[2.85rem] font-black text-slate-900 tracking-tight leading-[1.2] max-w-3xl mx-auto mb-3 sm:mb-5 text-balance">
          Faça Seu Filho Tocar Suas Primeiras Músicas na Flauta Hoje
        </h1>

        {/* Sub-headline */}
        <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed mb-6 sm:mb-8 font-normal text-balance">
          Músicas facilitadas com o desenho exato da posição dos dedos. Sem partituras, sem mensalidades e longe das telas.
        </p>

        {/* Hero Mockup Container */}
        <div className="relative max-w-3xl mx-auto mb-8 sm:mb-10">
          <div className="relative rounded-2xl sm:rounded-3xl p-2 sm:p-3 bg-white shadow-2xl border border-slate-200/80 group">
            <img
              src={heroFluteMockup}
              alt="Apostila de Flauta Doce para Crianças em tablet, celular e folha impressa"
              className="w-full h-auto object-cover rounded-xl sm:rounded-2xl shadow-inner max-h-[480px]"
              loading="eager"
              onError={(e) => {
                e.currentTarget.src = '/images/hero_flute_mockup.jpg';
              }}
            />

            {/* Quick floating benefit badges on image */}
            <div className="absolute -top-3 -right-2 sm:-right-4 bg-emerald-600 text-white text-xs sm:text-sm font-bold px-3 py-1.5 rounded-xl shadow-lg flex items-center gap-1.5 border-2 border-white">
              <Download className="w-3.5 h-3.5" />
              <span>PDF Pronto pra Baixar</span>
            </div>

            <div className="absolute -bottom-3 -left-2 sm:-left-4 bg-amber-500 text-slate-950 text-xs sm:text-sm font-bold px-3 py-1.5 rounded-xl shadow-lg flex items-center gap-1.5 border-2 border-white">
              <Printer className="w-3.5 h-3.5" />
              <span>Imprima quantas vezes quiser</span>
            </div>
          </div>

          {/* Social Proof snippet under image */}
          <div className="mt-4 flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm text-slate-600">
            <div className="flex items-center gap-1 text-amber-500">
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              <span className="font-bold text-slate-800 ml-1">4.9/5</span>
            </div>
            <span className="hidden sm:inline text-slate-300">•</span>
            <span className="font-medium text-slate-700">Mais de <strong className="text-slate-900 font-bold">4.800 famílias</strong> felizes</span>
            <span className="hidden sm:inline text-slate-300">•</span>
            <span className="text-emerald-700 font-medium inline-flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" />
              Acesso Imediato
            </span>
          </div>
        </div>

        {/* CTA Container */}
        <div className="max-w-xl mx-auto space-y-3">
          <button
            onClick={onOpenCheckout}
            className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-extrabold text-base sm:text-lg md:text-xl py-4 sm:py-5 px-6 rounded-2xl shadow-xl transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer animate-soft-pulse flex items-center justify-center gap-3 text-center"
          >
            <Zap className="w-6 h-6 fill-amber-300 text-amber-300 shrink-0" />
            <span className="text-balance leading-tight">
              SIM! QUERO VER MEU FILHO TOCANDO AGORA <span className="underline decoration-amber-300 decoration-2">por apenas R$ 9,99</span>
            </span>
          </button>

          {/* Micro-copy de segurança */}
          <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-slate-600 font-medium">
            <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Compra 100% Segura • Acesso Vitalício • Garantia Incondicional de 7 Dias</span>
          </div>
        </div>
      </div>
    </section>
  );
};
