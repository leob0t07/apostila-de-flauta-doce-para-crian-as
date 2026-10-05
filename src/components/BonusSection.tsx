import React from 'react';
import { Gift, Award, Compass, Sparkles, Check, Download } from 'lucide-react';

interface BonusSectionProps {
  onOpenCheckout: () => void;
}

export const BonusSection: React.FC<BonusSectionProps> = ({ onOpenCheckout }) => {
  const bonuses = [
    {
      id: 1,
      badge: 'BÔNUS EXCLUSIVO #1',
      title: 'Tabela Visual de Dedilhado (Pôster A4 de Parede)',
      regularPrice: 'R$ 27,00',
      description: 'Um mapa visual completo com todas as notas de Dó grave a Ré agudo em alta definição. Perfeito para imprimir e colar na parede do quarto do seu filho ou colocar em uma prancheta de estudos.',
      highlight: 'A criança bate o olho e lembra na hora a posição exata de cada nota.',
      icon: Compass,
      tag: 'PDF A4 Alta Resolução',
    },
    {
      id: 2,
      badge: 'BÔNUS EXCLUSIVO #2',
      title: 'Guia Rápido: "Som Limpo & Suave" (Técnica Anti-Chiado)',
      regularPrice: 'R$ 37,00',
      description: 'O segredo dos professores de música para a flauta não apitar nem chiar. Um manual ilustrado de 10 páginas ensinando vedação correta, controle de ar quente e limpeza rápida da boquilha.',
      highlight: 'Acaba com o barulho estridente e transforma o sopro em um som aveludado.',
      icon: Sparkles,
      tag: 'Guia em 3 Passos',
    },
    {
      id: 3,
      badge: 'BÔNUS EXCLUSIVO #3',
      title: 'Certificado Musical do Filho (Diploma Oficial para Imprimir)',
      regularPrice: 'R$ 29,00',
      description: 'Um lindo certificado com design profissional e brasão dourado para preencher com o nome do seu pequeno flautista. Uma recompensa incrível que gera orgulho e reforça a autoestima da criança.',
      highlight: 'Gera um sentimento enorme de conquista e celebra a primeira música tocada.',
      icon: Award,
      tag: 'Diploma Editável & Imprimível',
    },
  ];

  return (
    <section id="bonus" className="py-12 sm:py-16 bg-white border-y border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100 text-amber-900 text-xs sm:text-sm font-bold mb-3">
            <Gift className="w-4 h-4 text-amber-700" />
            <span>PRESENTES ESPECIAIS INCLUSOS</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Comprando Hoje, Você Leva + 3 Presentes Exclusivos GRÁTIS
          </h2>
          <p className="mt-3 text-sm sm:text-base md:text-lg text-slate-600">
            Além da apostila completa com mais de 40 músicas, você receberá instantaneamente esses 3 materiais de apoio avaliados em <span className="line-through text-slate-400 font-semibold">R$ 93,00</span> por custo zero.
          </p>
        </div>

        {/* Bonus bundle visual illustration */}
        <div className="max-w-2xl mx-auto mb-10 bg-gradient-to-r from-amber-50 via-emerald-50 to-sky-50 rounded-2xl p-3 sm:p-4 border border-amber-200/80 shadow-md">
          <img
            src="/src/assets/images/bonus_collection_mockup_1791209157374.jpg"
            alt="Coleção de Bônus: Pôster A4 de Dedilhado, Guia Som Limpo e Certificado Musical"
            className="w-full h-auto object-cover rounded-xl shadow-inner max-h-[340px]"
          />
          <div className="text-center mt-3 text-xs sm:text-sm font-bold text-slate-800">
            📦 Todos os 3 bônus são entregues em arquivos digitais PDF prontos para baixar e imprimir
          </div>
        </div>

        {/* 3 Horizontal Bonus Cards */}
        <div className="space-y-4 sm:space-y-5 max-w-4xl mx-auto mb-10">
          {bonuses.map((bonus) => {
            const Icon = bonus.icon;
            return (
              <div
                key={bonus.id}
                className="bg-slate-50 border-2 border-slate-200/90 rounded-2xl p-5 sm:p-6 hover:border-emerald-300 hover:shadow-md transition-all flex flex-col md:flex-row md:items-center justify-between gap-5 relative group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center shrink-0 shadow-xs group-hover:scale-105 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <span className="text-[11px] font-extrabold tracking-wider text-amber-800 uppercase bg-amber-200/70 px-2.5 py-0.5 rounded-full">
                        {bonus.badge}
                      </span>
                      <span className="text-[11px] font-medium text-slate-500 bg-slate-200/70 px-2 py-0.5 rounded-full">
                        {bonus.tag}
                      </span>
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1">
                      {bonus.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-xl mb-2">
                      {bonus.description}
                    </p>
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-700">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{bonus.highlight}</span>
                    </div>
                  </div>
                </div>

                {/* Price tag pill */}
                <div className="flex md:flex-col items-center justify-between md:justify-center border-t md:border-t-0 md:border-l border-slate-200 pt-3 md:pt-0 md:pl-6 shrink-0 text-right">
                  <div>
                    <span className="text-xs text-slate-400 block line-through font-semibold">
                      Valor: {bonus.regularPrice}
                    </span>
                    <span className="text-sm sm:text-base font-black text-emerald-600 uppercase tracking-tight bg-emerald-100/80 px-2.5 py-1 rounded-lg inline-block mt-0.5">
                      GRÁTIS HOJE
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Conversion Action */}
        <div className="text-center max-w-lg mx-auto bg-emerald-50 rounded-2xl p-6 border border-emerald-200 shadow-sm">
          <p className="text-sm font-semibold text-emerald-900 mb-4">
            🔥 Esta combinação exclusiva só está disponível nesta página promocional.
          </p>
          <button
            onClick={onOpenCheckout}
            className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-extrabold text-base py-3.5 px-6 rounded-xl shadow-md transition-all active:scale-95 cursor-pointer flex items-center justify-center gap-2"
          >
            <Download className="w-5 h-5" />
            <span>Quero a Apostila + Todos os 3 Bônus por R$ 9,99</span>
          </button>
        </div>
      </div>
    </section>
  );
};
