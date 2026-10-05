import React, { useState } from 'react';
import { X, ShieldCheck, Zap, QrCode, CreditCard, Check, Copy, Download, Sparkles, ArrowRight } from 'lucide-react';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({ isOpen, onClose }) => {
  const [paymentMethod, setPaymentMethod] = useState<'pix' | 'card'>('pix');
  const [hasOrderBump, setHasOrderBump] = useState<boolean>(false);
  const [copiedPix, setCopiedPix] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [isProcessing, setIsProcessing] = useState<boolean>(false);

  // Form states
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  if (!isOpen) return null;

  const basePrice = 9.99;
  const orderBumpPrice = 9.90;
  const totalPrice = hasOrderBump ? basePrice + orderBumpPrice : basePrice;

  const handleCopyPix = () => {
    navigator.clipboard.writeText('00020126580014br.gov.bcb.pix0136flautakids-apostila-lowticket@pix.digital520400005303986540509.995802BR5915FLAUTAKIDS PROD6009SAO PAULO62070503***6304E8A1');
    setCopiedPix(true);
    setTimeout(() => setCopiedPix(false), 3000);
  };

  // Trigger InitiateCheckout when modal opens
  React.useEffect(() => {
    if (isOpen) {
      try {
        (window as unknown as { fbq?: (...args: unknown[]) => void }).fbq?.('track', 'InitiateCheckout', {
          value: totalPrice,
          currency: 'BRL',
          content_name: 'Apostila de Flauta Doce para Crianças',
        });
      } catch {
        // Safe fallback
      }
    }
  }, [isOpen, totalPrice]);

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) {
      alert('Por favor, preencha seu nome e e-mail para receber os arquivos.');
      return;
    }
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
      try {
        (window as unknown as { fbq?: (...args: unknown[]) => void }).fbq?.('track', 'Purchase', {
          value: totalPrice,
          currency: 'BRL',
          content_name: 'Apostila de Flauta Doce para Crianças',
        });
      } catch {
        // Safe fallback
      }
    }, 1200);
  };

  const handleSimulateSampleDownload = () => {
    // Generate a simple sample PDF text download or notification
    const sampleText = `=== APOSTILA DE FLAUTA DOCE PARA CRIANÇAS ===\n\nParabéns, ${name || 'Amigo(a)'}!\nSeu acesso ao material completo foi liberado com sucesso.\n\nConteúdo Liberado:\n1. Apostila de Flauta Doce para Crianças (40+ Músicas com Dedilhado Visual)\n2. Bônus 1: Pôster A4 de Dedilhado na Parede\n3. Bônus 2: Guia Som Limpo e Suave\n4. Bônus 3: Certificado Musical para Imprimir\n\nAcesse a área de membros enviada para o seu e-mail: ${email || 'seu-email@exemplo.com'}\nBons estudos musicais!`;
    const blob = new Blob([sampleText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Amostra_Guia_Flauta_Kids.txt';
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/75 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 animate-in fade-in duration-200">
      <div className="relative bg-white rounded-3xl max-w-xl w-full shadow-2xl border border-slate-200 overflow-hidden my-6">
        {/* Top Header */}
        <div className="bg-slate-900 text-white px-5 sm:px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
            <span className="font-extrabold text-sm sm:text-base">Checkout Seguro • Lote Promocional</span>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white p-1 rounded-lg transition-colors cursor-pointer"
            aria-label="Fechar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {isSuccess ? (
          /* Success Screen */
          <div className="p-6 sm:p-8 text-center space-y-5">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center shadow-inner">
              <Check className="w-9 h-9 stroke-[3]" />
            </div>

            <div>
              <span className="text-xs uppercase font-extrabold tracking-wider text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full">
                Pedido Confirmado com Sucesso!
              </span>
              <h3 className="text-2xl font-black text-slate-900 mt-2">
                Parabéns, {name || 'Cliente'}!
              </h3>
              <p className="text-sm text-slate-600 mt-1 max-w-md mx-auto">
                Os arquivos da apostila e todos os bônus foram enviados para: <strong className="text-slate-900">{email || 'seu e-mail'}</strong>
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 text-left space-y-2 text-xs text-slate-700">
              <div className="font-bold text-slate-900 text-sm mb-1 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-emerald-600" />
                Itens Liberados no Seu Acesso:
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Apostila Completa Flauta Doce (40+ Músicas com Dedilhado Visual)</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Bônus 1: Pôster A4 de Dedilhado na Parede</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Bônus 2: Guia Som Limpo e Suave</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Bônus 3: Certificado Musical Oficial</span>
              </div>
              {hasOrderBump && (
                <div className="flex items-center gap-2 text-emerald-800 font-semibold">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Order Bump: Caderno de Colorir dos Instrumentos Musicais</span>
                </div>
              )}
            </div>

            <div className="space-y-3 pt-2">
              <button
                onClick={handleSimulateSampleDownload}
                className="w-full bg-emerald-500 hover:bg-emerald-600 active:scale-95 text-white font-extrabold py-3.5 px-6 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Download className="w-5 h-5" />
                <span>Baixar Guia de Boas-Vindas Imediato</span>
              </button>

              <button
                onClick={onClose}
                className="w-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold py-2.5 px-4 rounded-xl text-xs transition-colors cursor-pointer"
              >
                Voltar para a página principal
              </button>
            </div>
          </div>
        ) : (
          /* Checkout Form */
          <div className="p-5 sm:p-6 max-h-[82vh] overflow-y-auto space-y-5">
            {/* Offer Summary Box */}
            <div className="bg-emerald-50/80 border border-emerald-200 rounded-2xl p-3.5 sm:p-4 flex items-center justify-between gap-3">
              <div className="min-w-0">
                <span className="text-[10px] uppercase tracking-wider font-extrabold text-emerald-800 bg-emerald-200/80 px-2 py-0.5 rounded-md">
                  Pacote Completo + 3 Bônus
                </span>
                <h4 className="text-sm font-bold text-slate-900 mt-1 truncate">
                  Apostila de Flauta Doce para Crianças
                </h4>
                <p className="text-xs text-slate-600">Acesso digital imediato e vitalício</p>
              </div>

              <div className="text-right shrink-0">
                <span className="text-xs text-slate-400 line-through block">De R$ 97,00</span>
                <span className="text-xl sm:text-2xl font-black text-emerald-700">
                  R$ {totalPrice.toFixed(2).replace('.', ',')}
                </span>
              </div>
            </div>

            <form onSubmit={handleSubmitOrder} className="space-y-4">
              {/* Client Info Fields */}
              <div className="space-y-3">
                <h5 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  1. Onde você quer receber os arquivos?
                </h5>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Seu Nome Completo *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Ex: Carlos Oliveira"
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Seu Melhor E-mail *
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="seuemail@gmail.com"
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      WhatsApp com DDD
                    </label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="(11) 99999-9999"
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* Order Bump (Low-Ticket conversion booster) */}
              <div className="bg-amber-50 border-2 border-amber-300 rounded-2xl p-3.5 transition-all">
                <label className="flex items-start gap-3 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={hasOrderBump}
                    onChange={(e) => setHasOrderBump(e.target.checked)}
                    className="mt-1 w-5 h-5 text-emerald-600 rounded-md border-amber-400 focus:ring-emerald-500 cursor-pointer"
                  />
                  <div className="flex-1 text-xs">
                    <span className="font-extrabold text-amber-900 uppercase tracking-tight block">
                      ⚡ LEVE JUNTO COM 70% OFF: Caderno de Colorir dos Instrumentos Musicais (+ R$ 9,90)
                    </span>
                    <p className="text-slate-700 mt-0.5">
                      30 desenhos educativos para colorir com histórias de cada instrumento. Uma atividade relaxante e lúdica para complementar a flauta!
                    </p>
                  </div>
                </label>
              </div>

              {/* Payment Method Tabs */}
              <div className="space-y-3">
                <h5 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  2. Escolha a forma de pagamento
                </h5>

                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('pix')}
                    className={`py-3 px-3 rounded-xl border text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                      paymentMethod === 'pix'
                        ? 'bg-emerald-50 border-emerald-500 text-emerald-800 ring-2 ring-emerald-500/20 shadow-xs'
                        : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
                    }`}
                  >
                    <QrCode className="w-4 h-4 text-emerald-600" />
                    <span>PIX (Imediato)</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod('card')}
                    className={`py-3 px-3 rounded-xl border text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                      paymentMethod === 'card'
                        ? 'bg-emerald-50 border-emerald-500 text-emerald-800 ring-2 ring-emerald-500/20 shadow-xs'
                        : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
                    }`}
                  >
                    <CreditCard className="w-4 h-4 text-emerald-600" />
                    <span>Cartão de Crédito</span>
                  </button>
                </div>

                {/* PIX Details */}
                {paymentMethod === 'pix' && (
                  <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 text-center space-y-3">
                    <span className="text-[11px] font-bold text-emerald-700 bg-emerald-100 px-2.5 py-0.5 rounded-full inline-block">
                      Aprovação em menos de 10 segundos
                    </span>
                    <p className="text-xs text-slate-600">
                      Após clicar no botão abaixo, copie a chave PIX ou escaneie o QR Code no seu aplicativo do banco.
                    </p>

                    <div className="bg-white p-2.5 rounded-xl border border-slate-200 flex items-center justify-between gap-2 text-left">
                      <span className="text-[11px] font-mono text-slate-600 truncate flex-1">
                        00020126580014br.gov.bcb.pix...
                      </span>
                      <button
                        type="button"
                        onClick={handleCopyPix}
                        className="bg-slate-900 hover:bg-slate-800 text-white text-[11px] font-bold px-3 py-1.5 rounded-lg flex items-center gap-1 shrink-0 transition-colors cursor-pointer"
                      >
                        {copiedPix ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                        <span>{copiedPix ? 'Copiado!' : 'Copiar PIX'}</span>
                      </button>
                    </div>
                  </div>
                )}

                {/* Card Details */}
                {paymentMethod === 'card' && (
                  <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 space-y-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Número do Cartão
                      </label>
                      <input
                        type="text"
                        placeholder="0000 0000 0000 0000"
                        className="w-full px-3 py-2 bg-white border border-slate-300 rounded-xl text-xs text-slate-900 focus:outline-hidden focus:ring-1 focus:ring-emerald-500"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          Validade
                        </label>
                        <input
                          type="text"
                          placeholder="MM/AA"
                          className="w-full px-3 py-2 bg-white border border-slate-300 rounded-xl text-xs text-slate-900 focus:outline-hidden focus:ring-1 focus:ring-emerald-500"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          CVV
                        </label>
                        <input
                          type="text"
                          placeholder="123"
                          className="w-full px-3 py-2 bg-white border border-slate-300 rounded-xl text-xs text-slate-900 focus:outline-hidden focus:ring-1 focus:ring-emerald-500"
                        />
                      </div>
                    </div>
                    <div className="text-[11px] text-slate-500 text-center">
                      Parcelamento em até 2x de R$ {(totalPrice / 2).toFixed(2).replace('.', ',')}
                    </div>
                  </div>
                )}
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isProcessing}
                  className="w-full bg-emerald-500 hover:bg-emerald-600 active:scale-95 disabled:opacity-75 text-white font-extrabold text-base py-4 px-6 rounded-2xl shadow-xl transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  {isProcessing ? (
                    <span>Processando Pagamento Seguro...</span>
                  ) : (
                    <>
                      <Zap className="w-5 h-5 fill-amber-300 text-amber-300" />
                      <span>
                        FINALIZAR E RECEBER POR R$ {totalPrice.toFixed(2).replace('.', ',')}
                      </span>
                      <ArrowRight className="w-5 h-5" />
                    </>
                  )}
                </button>

                <div className="flex items-center justify-center gap-3 mt-3 text-[11px] text-slate-500 font-medium">
                  <span className="flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    Criptografia SSL 256 bits
                  </span>
                  <span>•</span>
                  <span>Garantia de 7 Dias</span>
                </div>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
