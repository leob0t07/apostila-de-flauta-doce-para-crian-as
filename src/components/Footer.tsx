import React, { useState } from 'react';
import { ShieldCheck, Zap, Lock, Music2, Heart, X } from 'lucide-react';

interface FooterProps {
  onOpenCheckout: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenCheckout }) => {
  const [legalModal, setLegalModal] = useState<'terms' | 'privacy' | null>(null);

  return (
    <footer className="bg-slate-900 text-slate-300 pt-12 pb-24 md:pb-12 border-t border-slate-800">
      {/* Final Action Callout */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center mb-12">
        <div className="bg-gradient-to-b from-slate-800 to-slate-850 p-6 sm:p-10 rounded-3xl border border-slate-700 shadow-2xl">
          <span className="text-xs uppercase tracking-wider font-extrabold text-amber-400 bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/20">
            Última Oportunidade por R$ 9,99
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mt-3 mb-3">
            Dê o Primeiro Passo Musical do Seu Filho Hoje Mesmo
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto mb-6">
            O material está pronto para download imediato. Em menos de 2 minutos você já pode imprimir as primeiras páginas e começar a diversão com seu pequeno!
          </p>

          <div className="max-w-md mx-auto space-y-3">
            <button
              onClick={onOpenCheckout}
              className="w-full bg-emerald-500 hover:bg-emerald-600 active:scale-95 text-white font-extrabold text-base sm:text-lg py-4 px-6 rounded-2xl shadow-xl transition-all flex items-center justify-center gap-2 cursor-pointer animate-soft-pulse"
            >
              <Zap className="w-5 h-5 fill-amber-300 text-amber-300" />
              <span>SIM! QUERO A APOSTILA POR R$ 9,99</span>
            </button>
            <div className="flex items-center justify-center gap-2 text-xs text-slate-400">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Garantia incondicional de 7 dias ou seu dinheiro de volta</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Information */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800 text-center md:text-left">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-emerald-500 text-white flex items-center justify-center">
              <Music2 className="w-5 h-5" />
            </div>
            <div>
              <span className="text-lg font-black text-white tracking-tight">FlautaKids</span>
              <span className="block text-xs text-slate-400">Método Visual para Crianças</span>
            </div>
          </div>

          {/* Payment Methods Badges */}
          <div className="flex flex-wrap items-center justify-center gap-2 text-[11px] font-semibold text-slate-300">
            <span className="bg-slate-800 px-2.5 py-1 rounded-md border border-slate-700">PIX Instantâneo</span>
            <span className="bg-slate-800 px-2.5 py-1 rounded-md border border-slate-700">Cartão de Crédito</span>
            <span className="bg-slate-800 px-2.5 py-1 rounded-md border border-slate-700">Boleto Bancário</span>
            <span className="bg-slate-800 px-2.5 py-1 rounded-md border border-slate-700 flex items-center gap-1 text-emerald-400">
              <Lock className="w-3 h-3" />
              Checkout Blindado
            </span>
          </div>
        </div>

        {/* Legal notice and copyright */}
        <div className="pt-8 text-center space-y-4 text-xs text-slate-400">
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 font-medium">
            <button
              onClick={() => setLegalModal('terms')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Termos de Uso
            </button>
            <span>•</span>
            <button
              onClick={() => setLegalModal('privacy')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Políticas de Privacidade
            </button>
            <span>•</span>
            <span className="hover:text-white transition-colors">
              Suporte: contato@flautakids.com.br
            </span>
          </div>

          <p className="max-w-2xl mx-auto text-[11px] text-slate-500 leading-relaxed">
            Avisos Legais: Este produto é um material didático digital com finalidade educacional e recreativa para crianças e famílias. O aprendizado e ritmo de evolução dependem da prática de cada aluno. Todas as marcas registradas de desenhos e filmes eventualmente citados pertencem aos seus respectivos titulares de direitos autorais.
          </p>

          <p className="text-[11px] text-slate-500 flex items-center justify-center gap-1">
            <span>© {new Date().getFullYear()} FlautaKids. Todos os direitos reservados. Feito com</span>
            <Heart className="w-3 h-3 text-rose-500 fill-rose-500" />
            <span>para crianças de todo o Brasil.</span>
          </p>
        </div>
      </div>

      {/* Legal Modal */}
      {legalModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white text-slate-800 rounded-2xl max-w-lg w-full p-6 shadow-2xl relative max-h-[80vh] overflow-y-auto">
            <button
              onClick={() => setLegalModal(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-800 p-1 rounded-lg"
            >
              <X className="w-5 h-5" />
            </button>

            {legalModal === 'terms' ? (
              <div className="space-y-3 text-xs leading-relaxed">
                <h3 className="text-base font-bold text-slate-900">Termos de Uso</h3>
                <p>1. <strong>Licença de Uso:</strong> Ao adquirir a Apostila de Flauta Doce para Crianças, você recebe uma licença individual e intransferível de uso pessoal e doméstico, com direito a imprimir para seus filhos ou sala de aula.</p>
                <p>2. <strong>Direitos Autorais:</strong> É expressamente proibida a revenda não autorizada, rateio ou distribuição pirata em grupos abertos de internet.</p>
                <p>3. <strong>Garantia:</strong> O consumidor tem direito à garantia legal e contratual incondicional de 7 (sete) dias corridos após a confirmação do pagamento, com reembolso integral mediante solicitação simples.</p>
              </div>
            ) : (
              <div className="space-y-3 text-xs leading-relaxed">
                <h3 className="text-base font-bold text-slate-900">Política de Privacidade</h3>
                <p>1. <strong>Coleta de Dados:</strong> Coletamos estritamente os dados necessários para entrega dos arquivos digitais (nome, e-mail e telefone).</p>
                <p>2. <strong>Segurança:</strong> Seus dados pessoais são protegidos com criptografia SSL e jamais são comercializados ou compartilhados com terceiros para fins publicitários externos.</p>
                <p>3. <strong>LGPD:</strong> Em total conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018), você pode solicitar a remoção definitiva do seu cadastro a qualquer momento.</p>
              </div>
            )}
          </div>
        </div>
      )}
    </footer>
  );
};
