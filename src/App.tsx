/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { TopNotificationBar } from './components/TopNotificationBar';
import { HeroSection } from './components/HeroSection';
import { UrgencyBanner } from './components/UrgencyBanner';
import { HowItWorksSection } from './components/HowItWorksSection';
import { RepertoireSection } from './components/RepertoireSection';
import { BonusSection } from './components/BonusSection';
import { TargetAudienceSection } from './components/TargetAudienceSection';
import { SocialProofSection } from './components/SocialProofSection';
import { GuaranteeSection } from './components/GuaranteeSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { MobileStickyBar } from './components/MobileStickyBar';
import { CheckoutModal } from './components/CheckoutModal';

export default function App() {
  const [isCheckoutOpen, setIsCheckoutOpen] = useState<boolean>(false);

  const handleOpenCheckout = () => {
    setIsCheckoutOpen(true);
  };

  const handleCloseCheckout = () => {
    setIsCheckoutOpen(false);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans flex flex-col selection:bg-emerald-500 selection:text-white">
      {/* 1. Top Notification Bar (Fixed top alert) */}
      <TopNotificationBar />

      {/* Main Page Flow */}
      <main className="flex-1">
        {/* 2. Hero Section */}
        <HeroSection onOpenCheckout={handleOpenCheckout} />

        {/* 3. Banners de Ancoragem & Urgência */}
        <UrgencyBanner onOpenCheckout={handleOpenCheckout} />

        {/* 4. Como Funciona Por Dentro (Quebra de Objeção) + Demonstração Interativa */}
        <HowItWorksSection onOpenCheckout={handleOpenCheckout} />

        {/* 5. Seção de Repertório (Grid 2x2) */}
        <RepertoireSection onOpenCheckout={handleOpenCheckout} />

        {/* 6. Stack de Bônus Irrecusáveis */}
        <BonusSection onOpenCheckout={handleOpenCheckout} />

        {/* 7. Para Quem É Este Material? */}
        <TargetAudienceSection />

        {/* 8. Prova Social (Depoimentos estilo WhatsApp com áudio) */}
        <SocialProofSection />

        {/* 9. Seção de Garantia Incondicional de 7 Dias */}
        <GuaranteeSection onOpenCheckout={handleOpenCheckout} />

        {/* 10. FAQ (Perguntas Frequentes em Accordion) */}
        <FaqSection />
      </main>

      {/* 11. Footer & CTA Final */}
      <Footer onOpenCheckout={handleOpenCheckout} />

      {/* Mobile Sticky CTA Bar (Respects 15% height constraint) */}
      <MobileStickyBar onOpenCheckout={handleOpenCheckout} />

      {/* Interactive Checkout Modal */}
      <CheckoutModal isOpen={isCheckoutOpen} onClose={handleCloseCheckout} />
    </div>
  );
}
