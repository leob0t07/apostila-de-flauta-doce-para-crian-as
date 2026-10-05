import React from 'react';
import { Eye, Type, Smile, CheckCircle, Sparkles, BookOpen } from 'lucide-react';
import { InteractiveFlutePlayer } from './InteractiveFlutePlayer';

interface HowItWorksSectionProps {
  onOpenCheckout: () => void;
}

export const HowItWorksSection: React.FC<HowItWorksSectionProps> = ({ onOpenCheckout }) => {
  return (
    <section id="como-funciona" className="py-12 sm:py-16 bg-white border-y border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-xs sm:text-sm font-bold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-sky-600" />
            <span>MÉTODO TESTADO E APROVADO</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Entenda por que qualquer criança consegue aprender com este material
          </h2>
          <p className="mt-3 text-sm sm:text-base md:text-lg text-slate-600">
            A maioria dos métodos tradicionais faz a criança desistir nos primeiros dias com pautas e símbolos chatos. O nosso método troca o sofrimento por ilustrações intuitivas.
          </p>
        </div>

        {/* 3 Explanation Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Card 1 */}
          <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-6 sm:p-7 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
            <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
              <Eye className="w-6 h-6" />
            </div>
            <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">Passo 1 • Visual</span>
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 mt-1 mb-2.5">
              1. Desenho dos Furos Marcados
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              A criança só precisa olhar a ilustração e cobrir os furos indicados na flauta. Os círculos pretos mostram exatamente onde colocar cada dedinho, sem margem para dúvidas.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-6 sm:p-7 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
            <div className="w-12 h-12 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
              <Type className="w-6 h-6" />
            </div>
            <span className="text-xs font-bold text-sky-700 uppercase tracking-wider">Passo 2 • Intuitivo</span>
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 mt-1 mb-2.5">
              2. Notas Nomeadas por Extenso
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              O nome de cada nota (Dó, Ré, Mi, Fá, Sol...) já vem escrito de forma clara sob cada compasso. A criança canta enquanto sopra e memoriza naturalmente a escala.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-6 sm:p-7 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
            <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
              <Smile className="w-6 h-6" />
            </div>
            <span className="text-xs font-bold text-amber-800 uppercase tracking-wider">Passo 3 • Imediato</span>
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 mt-1 mb-2.5">
              3. Zero Frustração & Alegria Rápida
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Sem precisar decifrar partituras tradicionais complexas ou claves de sol. Ela abre o PDF no celular, tablet ou papel e já toca a primeira música completa no mesmo dia.
            </p>
          </div>
        </div>

        {/* 2 Visual Interior Examples Container */}
        <div className="mt-8 space-y-8">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2">
                <BookOpen className="w-6 h-6 text-emerald-600" />
                Veja um Exemplo Real do Interior da Apostila
              </h3>
              <p className="text-xs sm:text-sm text-slate-600">
                Páginas coloridas, fáceis de ler e prontas para impressão padrão em folha A4.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Visual Print 1: Real printed book close-up */}
            <div className="lg:col-span-5 bg-slate-100 p-3 sm:p-4 rounded-2xl sm:rounded-3xl border border-slate-200 shadow-md">
              <div className="relative rounded-xl overflow-hidden shadow-inner">
                <img
                  src="/src/assets/images/booklet_page_preview_1791209128428.jpg"
                  alt="Interior da apostila com notas facilitadas e dedilhado colorido"
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute bottom-2 left-2 bg-slate-900/80 backdrop-blur-sm text-white text-[11px] font-medium px-2.5 py-1 rounded-lg">
                  Foto real do material impresso
                </div>
              </div>

              <div className="mt-3 px-2 space-y-1.5 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Letras grandes e fonte amigável para crianças</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Cores que ajudam na diferenciação das notas</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Compatível com qualquer flauta doce soprano germânica ou barroca</span>
                </div>
              </div>
            </div>

            {/* Visual Print 2: Interactive Audio & Hole Simulator */}
            <div className="lg:col-span-7">
              <InteractiveFlutePlayer />
            </div>
          </div>
        </div>

        {/* Quick inline CTA */}
        <div className="mt-10 text-center">
          <button
            onClick={onOpenCheckout}
            className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 active:scale-95 text-white font-extrabold text-sm sm:text-base py-3 px-6 rounded-xl shadow-lg transition-all cursor-pointer"
          >
            <span>Quero Acesso Imediato à Apostila Completa por R$ 9,99</span>
          </button>
        </div>
      </div>
    </section>
  );
};
