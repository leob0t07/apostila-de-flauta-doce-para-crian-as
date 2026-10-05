import React, { useState } from 'react';
import { HelpCircle, ChevronDown } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
}

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First open by default

  const faqs: FaqItem[] = [
    {
      question: 'Como vou receber o material?',
      answer: 'O envio é 100% digital e imediato! Assim que o seu pagamento for confirmado (no PIX ou Cartão leva menos de 1 minuto), você recebe no seu e-mail cadastrado e via WhatsApp os links exclusivos para baixar todas as apostilas e bônus no seu computador, celular ou tablet.',
    },
    {
      question: 'É um livro físico ou digital?',
      answer: 'É um produto digital em formato PDF de alta resolução (300 DPI). Você não precisa esperar semanas pelo frete nem pagar taxas de envio. Pode usar direto na tela do tablet/iPad ou imprimir as folhas que quiser em casa ou na papelaria mais próxima quantas vezes precisar.',
    },
    {
      question: 'Precisa ter uma flauta cara ou profissional?',
      answer: 'De jeito nenhum! O método funciona perfeitamente com qualquer flauta doce soprano comum (aquelas escolares de plástico ou resina vendidas em qualquer papelaria ou loja de brinquedos por R$ 15 a R$ 35). Serve tanto para dedilhado Germânico quanto Barroco.',
    },
    {
      question: 'Meu filho nunca tocou nada na vida, ele realmente consegue aprender?',
      answer: 'Sim! Esse material foi criado exatamente para crianças que estão começando do absoluto zero. Não é necessário saber ler partituras tradicionais nem ter qualquer conhecimento teórico prévio. Ele só precisa olhar a ilustração e cobrir os furos indicados.',
    },
    {
      question: 'Posso imprimir as apostilas para encadernar?',
      answer: 'Com certeza! As páginas foram diagramadas no tamanho padrão A4, com margens perfeitas para encadernação em espiral ou para guardar em uma pasta com plásticos transparentes. Fica lindo e muito prático para o estudo diário.',
    },
    {
      question: 'Por quanto tempo terei acesso ao material?',
      answer: 'O seu acesso é vitalício! Você pode baixar os arquivos para o seu celular ou computador e guardá-los para sempre. Mesmo que mude de aparelho no futuro, os arquivos continuarão sendo seus.',
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-12 sm:py-16 bg-white border-b border-slate-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-xs sm:text-sm font-bold mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-slate-600" />
            <span>TIRE TODAS AS SUAS DÚVIDAS</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Perguntas Frequentes (FAQ)
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Respostas diretas para as dúvidas mais comuns dos pais antes de garantir o material.
          </p>
        </div>

        {/* Accordion Container */}
        <div className="space-y-3.5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="border border-slate-200 rounded-2xl overflow-hidden transition-all bg-slate-50/50"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-5 sm:px-6 py-4 sm:py-5 text-left font-bold text-slate-900 flex items-center justify-between gap-4 hover:bg-slate-100/80 transition-colors cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base leading-snug">{faq.question}</span>
                  <span
                    className={`w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-emerald-50 border-emerald-300 text-emerald-600' : 'text-slate-500'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </span>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-200/50 bg-white">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
