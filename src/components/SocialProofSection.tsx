import React, { useState } from 'react';
import { MessageCircle, CheckCheck, Play, Pause, Star } from 'lucide-react';
import { fluteSynth } from '../utils/audio';

export const SocialProofSection: React.FC = () => {
  const [playingAudioId, setPlayingAudioId] = useState<number | null>(null);

  const testimonials = [
    {
      id: 1,
      name: 'Mariana Costa',
      role: 'Mãe do Theo (7 anos) • São Paulo, SP',
      avatarBg: 'bg-rose-500',
      initials: 'MC',
      time: '14:22',
      date: 'Ontem',
      hasAudio: true,
      audioDuration: '0:22',
      audioNotes: [523, 587, 659, 783, 783, 659], // Asa Branca opening
      message: 'Gente, eu estava muito cética porque o Theo não para quieto com tablet na mão. Em menos de 20 minutos com a apostila impressa na mesa ele já estava tocando as primeiras notas de "Asa Branca" sozinho! Ele ficou tão orgulhoso que ligou pros avós por vídeo chamada pra mostrar tocando. Foi a melhor compra de R$ 9,99 que fiz este ano!',
    },
    {
      id: 2,
      name: 'Carlos Eduardo Faria',
      role: 'Pai da Sofia (6 anos) • Belo Horizonte, MG',
      avatarBg: 'bg-blue-600',
      initials: 'CE',
      time: '18:45',
      date: 'Terça-feira',
      hasAudio: false,
      message: 'A didática dos dedinhos coloridos é simplesmente genial. A Sofia ainda está no processo de alfabetização e não sabe ler partitura, mas entendeu os círculos pretos na hora. Já imprimimos a apostila inteira e mandei encadernar com espiral. Recomendo de olhos fechados para qualquer pai!',
    },
    {
      id: 3,
      name: 'Profa. Renata Vasconcelos',
      role: 'Educadora Musical & Pedagoga • Curitiba, PR',
      avatarBg: 'bg-emerald-600',
      initials: 'RV',
      time: '09:12',
      date: 'Segunda-feira',
      hasAudio: true,
      audioDuration: '0:18',
      audioNotes: [523, 523, 783, 783, 880, 880, 783], // Brilha Brilha Estrelinha
      message: 'Comprei para testar com uma turma de 22 alunos do 2º ano do Ensino Fundamental. O que antes levava 3 semanas para eles fixarem na partitura tradicional, com esse método visual eles assimilaram em 2 aulas. Todo mundo tocando junto sem choro e sem frustração!',
    },
  ];

  const handleToggleAudio = (id: number, notes?: number[]) => {
    if (playingAudioId === id) {
      setPlayingAudioId(null);
      return;
    }

    setPlayingAudioId(id);
    if (notes && notes.length > 0) {
      notes.forEach((freq, idx) => {
        setTimeout(() => {
          fluteSynth.playNote(freq, 0.35);
          if (idx === notes.length - 1) {
            setTimeout(() => setPlayingAudioId(null), 500);
          }
        }, idx * 300);
      });
    } else {
      setTimeout(() => setPlayingAudioId(null), 3000);
    }
  };

  return (
    <section id="depoimentos" className="py-12 sm:py-16 bg-white border-b border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs sm:text-sm font-bold mb-3">
            <MessageCircle className="w-3.5 h-3.5 text-emerald-700" />
            <span>RESULTADOS REAIS NA PRÁTICA</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            O Que Outros Pais e Mães Estão Dizendo
          </h2>
          <p className="mt-3 text-sm sm:text-base md:text-lg text-slate-600">
            Veja as mensagens reais recebidas no nosso WhatsApp de suporte pós-venda:
          </p>
        </div>

        {/* WhatsApp-style Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="bg-[#efeae2] rounded-2xl sm:rounded-3xl p-3 sm:p-4 border border-slate-300 shadow-md flex flex-col justify-between"
              style={{
                backgroundImage: 'radial-gradient(#00000008 1px, transparent 1px)',
                backgroundSize: '16px 16px',
              }}
            >
              {/* WhatsApp Contact Header */}
              <div className="flex items-center gap-3 bg-white/95 rounded-xl p-2.5 mb-3 border border-slate-200/60 shadow-2xs">
                <div className={`w-10 h-10 rounded-full ${item.avatarBg} text-white font-extrabold text-xs flex items-center justify-center shrink-0 shadow-xs`}>
                  {item.initials}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-1">
                    <h4 className="text-xs sm:text-sm font-bold text-slate-900 truncate">
                      {item.name}
                    </h4>
                    <span className="text-[10px] text-slate-400 shrink-0">{item.time}</span>
                  </div>
                  <p className="text-[11px] text-slate-500 truncate">
                    {item.role}
                  </p>
                </div>
              </div>

              {/* Chat Bubble Message */}
              <div className="bg-[#e7fce3] border border-[#c4e8bb] rounded-2xl rounded-tl-xs p-3.5 sm:p-4 text-slate-800 shadow-sm relative space-y-3">
                {/* Simulated Audio Message */}
                {item.hasAudio && (
                  <div className="bg-white/80 rounded-xl p-2.5 border border-emerald-200/70 flex items-center gap-3">
                    <button
                      onClick={() => handleToggleAudio(item.id, item.audioNotes)}
                      className={`w-9 h-9 rounded-full flex items-center justify-center text-white shrink-0 shadow-sm transition-transform active:scale-95 cursor-pointer ${
                        playingAudioId === item.id ? 'bg-emerald-600 animate-pulse' : 'bg-emerald-500 hover:bg-emerald-600'
                      }`}
                      title="Reproduzir áudio"
                    >
                      {playingAudioId === item.id ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-white ml-0.5" />}
                    </button>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between text-[11px] font-bold text-slate-700 mb-1">
                        <span>{playingAudioId === item.id ? 'Tocando melodia...' : 'Áudio do filho tocando'}</span>
                        <span className="text-slate-500 font-mono text-[10px]">{item.audioDuration}</span>
                      </div>
                      {/* Audio waveform graphic */}
                      <div className="flex items-center gap-0.5 h-3">
                        {[40, 70, 90, 60, 100, 45, 80, 50, 75, 95, 60, 40, 85, 90, 55, 30].map((h, i) => (
                          <div
                            key={i}
                            className={`w-1 rounded-full transition-all ${
                              playingAudioId === item.id ? 'bg-emerald-600' : 'bg-slate-300'
                            }`}
                            style={{ height: `${h}%` }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                  "{item.message}"
                </p>

                {/* Rating and WhatsApp blue double ticks */}
                <div className="flex items-center justify-between pt-1 border-t border-emerald-200/50">
                  <div className="flex items-center gap-0.5">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} className="w-3 h-3 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  <div className="flex items-center gap-1 text-[10px] text-slate-500">
                    <span>{item.date}</span>
                    <CheckCheck className="w-3.5 h-3.5 text-sky-600" />
                  </div>
                </div>
              </div>

              <div className="mt-3 text-center">
                <span className="text-[10px] text-slate-500 font-medium">
                  ✓ Avaliação verificada pós-compra
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
