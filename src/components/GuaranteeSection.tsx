import React from 'react';
import { ShieldCheck, RefreshCw, Lock, Sparkles } from 'lucide-react';

interface GuaranteeSectionProps {
  onOpenCheckout: () => void;
}

export const GuaranteeSection: React.FC<GuaranteeSectionProps> = ({ onOpenCheckout }) => {
  return (
    <section className="py-12 sm:py-16 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-3xl p-6 sm:p-10 border-2 border-emerald-300 shadow-xl relative overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-100/50 rounded-full blur-3xl -z-10 pointer-events-none" />

          <div className="flex flex-col md:flex-row items-center gap-6 sm:gap-10">
            {/* Guarantee Badge */}
            <div className="shrink-0 flex flex-col items-center text-center">
              <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-gradient-to-tr from-amber-400 via-amber-300 to-amber-200 border-4 border-amber-500 shadow-lg flex flex-col items-center justify-center text-slate-900 p-2 relative">
                <ShieldCheck className="w-8 h-8 text-slate-950 mb-0.5" />
                <span className="text-2xl sm:text-3xl font-black leading-none">7 DIAS</span>
                <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-tight text-slate-900">
                  Garantia Total
                </span>
                <div className="absolute -bottom-2 bg-slate-900 text-amber-300 text-[9px] font-black uppercase px-2 py-0.5 rounded-full border border-amber-400">
                  100% Devolvemos
                </div>
              </div>
              <span className="text-xs font-semibold text-slate-500 mt-3">Risco Zero para Você</span>
            </div>

            {/* Description */}
            <div className="space-y-3 text-center md:text-left">
              <span className="text-xs uppercase font-extrabold tracking-wider text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full">
                Sua Compra Está Protegida
              </span>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 leading-tight">
                Teste por 7 Dias Sem Nenhum Risco. Se Seu Filho Não Amar, Devolvemos Cada Centavo.
              </h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Queremos que você sinta total tranquilidade. Acesse as apostilas agora, baixe os arquivos, imprima as primeiras músicas e experimente com seu filho durante uma semana inteira.
              </p>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                Se por qualquer motivo você achar que o material não facilitou o aprendizado dele, basta nos enviar um e-mail ou mensagem no WhatsApp. Devolvemos 100% do valor pago em até 24 horas, sem letras miúdas e sem ressentimentos.
              </p>

              <div className="pt-2 flex flex-wrap items-center justify-center md:justify-start gap-4 text-xs font-semibold text-slate-700">
                <span className="flex items-center gap-1.5">
                  <RefreshCw className="w-4 h-4 text-emerald-600" />
                  Reembolso em 1 clique
                </span>
                <span className="flex items-center gap-1.5">
                  <Lock className="w-4 h-4 text-emerald-600" />
                  Plataforma Segura SSL
                </span>
                <span className="flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-amber-500" />
                  Acesso Vitalício Garantido
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
