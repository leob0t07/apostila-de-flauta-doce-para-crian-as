import React, { useState } from 'react';
import { Film, Music, Baby, Wind, Play, CheckCircle2 } from 'lucide-react';
import { fluteSynth } from '../utils/audio';

interface RepertoireSectionProps {
  onOpenCheckout: () => void;
}

interface SongCategory {
  id: string;
  icon: React.ElementType;
  title: string;
  badge: string;
  colorScheme: {
    bg: string;
    border: string;
    iconBg: string;
    iconColor: string;
    tagBg: string;
    tagColor: string;
  };
  description: string;
  songs: { title: string; hint: string; difficulty: string; previewNotes?: number[] }[];
}

export const RepertoireSection: React.FC<RepertoireSectionProps> = ({ onOpenCheckout }) => {
  const [playingSongId, setPlayingSongId] = useState<string | null>(null);

  const categories: SongCategory[] = [
    {
      id: 'filmes',
      icon: Film,
      title: 'Músicas de Filmes, Desenhos e Games',
      badge: 'Favoritas da Garotada',
      colorScheme: {
        bg: 'bg-purple-50/70',
        border: 'border-purple-200',
        iconBg: 'bg-purple-100',
        iconColor: 'text-purple-700',
        tagBg: 'bg-purple-100',
        tagColor: 'text-purple-800',
      },
      description: 'As melodias que eles já adoram cantarolar no dia a dia, adaptadas em versão simplificada para flauta.',
      songs: [
        { title: 'Super Mario Bros (Tema Principal)', hint: 'Reconhecimento instantâneo', difficulty: 'Iniciante', previewNotes: [659, 659, 659, 523, 659, 783] },
        { title: 'Frozen - "Livre Estou" (Let It Go)', hint: 'Trecho do refrão facilitado', difficulty: 'Fácil', previewNotes: [659, 587, 523, 659, 587] },
        { title: 'O Rei Leão - "Hakuna Matata"', hint: 'Ritmo alegre e contagiante', difficulty: 'Fácil', previewNotes: [523, 587, 659, 783] },
        { title: 'Harry Potter (Tema de Hedwig)', hint: 'Melodia mágica clássica', difficulty: 'Médio', previewNotes: [587, 783, 880, 783] },
      ],
    },
    {
      id: 'populares',
      icon: Music,
      title: 'Hits Populares e Músicas Fáceis',
      badge: 'Para Tocar em Família',
      colorScheme: {
        bg: 'bg-emerald-50/70',
        border: 'border-emerald-200',
        iconBg: 'bg-emerald-100',
        iconColor: 'text-emerald-700',
        tagBg: 'bg-emerald-100',
        tagColor: 'text-emerald-800',
      },
      description: 'Músicas queridas que todo mundo conhece e que emocionam os avós, pais e amigos da escola.',
      songs: [
        { title: 'Asa Branca (Luiz Gonzaga)', hint: 'O hino que toda criança ama tocar', difficulty: 'Fácil', previewNotes: [523, 587, 659, 783, 783, 659] },
        { title: 'Parabéns pra Você', hint: 'Para fazer bonito em todos os aniversários', difficulty: 'Super Fácil', previewNotes: [523, 523, 587, 523, 698, 659] },
        { title: 'Aquarela (Toquinho)', hint: 'Melodia suave e inspiradora', difficulty: 'Fácil', previewNotes: [659, 659, 659, 659, 587, 523] },
        { title: 'Noite Feliz (Silent Night)', hint: 'Clássico natalino e festivo', difficulty: 'Fácil', previewNotes: [783, 880, 783, 659] },
      ],
    },
    {
      id: 'cantigas',
      icon: Baby,
      title: 'Cantigas e Clássicos Infantis',
      badge: 'Primeiros Passos (5+ anos)',
      colorScheme: {
        bg: 'bg-amber-50/70',
        border: 'border-amber-200',
        iconBg: 'bg-amber-100',
        iconColor: 'text-amber-800',
        tagBg: 'bg-amber-100',
        tagColor: 'text-amber-900',
      },
      description: 'Melodias curtas e simples de apenas 3 a 5 notas para que a criança toque logo nos primeiros 10 minutos.',
      songs: [
        { title: 'Brilha, Brilha, Estrelinha', hint: 'Apenas notas fundamentais', difficulty: 'Super Fácil', previewNotes: [523, 523, 783, 783, 880, 880, 783] },
        { title: 'Ciranda, Cirandinha', hint: 'Tradicional e divertida', difficulty: 'Iniciante', previewNotes: [659, 659, 587, 523, 587, 659] },
        { title: 'O Cravo e a Rosa', hint: 'Coordenação motora suave', difficulty: 'Fácil', previewNotes: [783, 783, 659, 523, 659, 783] },
        { title: 'Peixe Vivo', hint: 'Ritmo folclórico brasileiro', difficulty: 'Iniciante', previewNotes: [523, 659, 783, 880, 783] },
      ],
    },
    {
      id: 'exercicios',
      icon: Wind,
      title: 'Exercícios Práticos de Sopro e Postura',
      badge: 'Fundamento Anti-Apito',
      colorScheme: {
        bg: 'bg-sky-50/70',
        border: 'border-sky-200',
        iconBg: 'bg-sky-100',
        iconColor: 'text-sky-700',
        tagBg: 'bg-sky-100',
        tagColor: 'text-sky-800',
      },
      description: 'Técnicas lúdicas para ensinar a criança a soprar com suavidade, eliminando aquele som estridente ou apito agudo.',
      songs: [
        { title: 'O Voo da Borboleta (Sopro Aveludado)', hint: 'Respiração diafragmática fácil', difficulty: 'Exercício 1' },
        { title: 'Castelo dos Dedinhos (Vedação dos Furos)', hint: 'Como não deixar o ar escapar', difficulty: 'Exercício 2' },
        { title: 'Escala do Arco-Íris (Dó ao Dó Agudo)', hint: 'Subida e descida com dedilhado correto', difficulty: 'Exercício 3' },
        { title: 'Postura do Flautista Campeão', hint: 'Coluna reta sem tensão nos braços', difficulty: 'Exercício 4' },
      ],
    },
  ];

  const handlePlayPreview = (songTitle: string, notes?: number[]) => {
    if (!notes || notes.length === 0) return;
    setPlayingSongId(songTitle);
    notes.forEach((freq, index) => {
      setTimeout(() => {
        fluteSynth.playNote(freq, 0.4);
        if (index === notes.length - 1) {
          setTimeout(() => setPlayingSongId(null), 500);
        }
      }, index * 350);
    });
  };

  return (
    <section id="repertorio" className="py-12 sm:py-16 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs sm:text-sm font-bold mb-3">
            <Music className="w-3.5 h-3.5 text-emerald-700" />
            <span>MAIS DE 40 PARTITURAS ILUSTRADAS</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            O Que Vem no Pacote
          </h2>
          <p className="mt-3 text-sm sm:text-base md:text-lg text-slate-600">
            Repertório cuidadosamente selecionado em 4 módulos progressivos para manter a motivação da criança alta desde o primeiro toque.
          </p>
        </div>

        {/* 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <div
                key={category.id}
                className={`${category.colorScheme.bg} border ${category.colorScheme.border} rounded-2xl sm:rounded-3xl p-6 sm:p-7 shadow-sm hover:shadow-md transition-all flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div className={`w-12 h-12 rounded-2xl ${category.colorScheme.iconBg} ${category.colorScheme.iconColor} flex items-center justify-center shadow-xs`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className={`text-xs font-bold px-3 py-1 rounded-full ${category.colorScheme.tagBg} ${category.colorScheme.tagColor}`}>
                      {category.badge}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">
                    {category.title}
                  </h3>
                  <p className="text-sm text-slate-600 mb-5 leading-relaxed">
                    {category.description}
                  </p>

                  {/* Songs list */}
                  <div className="space-y-2.5">
                    {category.songs.map((song, idx) => (
                      <div
                        key={idx}
                        className="bg-white/90 rounded-xl p-3 border border-slate-200/80 flex items-center justify-between gap-2 shadow-2xs hover:bg-white transition-colors"
                      >
                        <div className="flex items-center gap-2.5 min-w-0">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                          <div className="truncate">
                            <h4 className="text-xs sm:text-sm font-bold text-slate-800 truncate">
                              {song.title}
                            </h4>
                            <span className="text-[11px] text-slate-500 block">
                              {song.hint}
                            </span>
                          </div>
                        </div>

                        <div className="flex items-center gap-2 shrink-0">
                          <span className="text-[10px] font-semibold text-slate-600 bg-slate-100 px-2 py-0.5 rounded-md">
                            {song.difficulty}
                          </span>
                          {song.previewNotes && (
                            <button
                              onClick={() => handlePlayPreview(song.title, song.previewNotes)}
                              className={`p-1.5 rounded-lg border transition-all cursor-pointer ${
                                playingSongId === song.title
                                  ? 'bg-emerald-500 text-white border-emerald-600'
                                  : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200'
                              }`}
                              title="Ouvir trecho"
                            >
                              <Play className={`w-3.5 h-3.5 ${playingSongId === song.title ? 'fill-white' : ''}`} />
                            </button>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-200/60 flex items-center justify-between text-xs text-slate-500">
                  <span>Partituras em alta resolução (300 DPI)</span>
                  <span className="font-semibold text-emerald-700">Com Dedilhado Visual</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Banner with CTA */}
        <div className="mt-10 bg-slate-900 text-white rounded-2xl p-6 sm:p-8 text-center max-w-3xl mx-auto shadow-xl">
          <h3 className="text-xl sm:text-2xl font-bold mb-2">
            Todas essas músicas + exercícios completos por menos de uma pizza
          </h3>
          <p className="text-sm text-slate-300 max-w-lg mx-auto mb-5">
            Ao invés de pagar R$ 180/mês em aulas particulares, seu filho aprende no próprio ritmo com diversão garantida.
          </p>
          <button
            onClick={onOpenCheckout}
            className="bg-emerald-500 hover:bg-emerald-600 text-white font-extrabold text-sm sm:text-base py-3.5 px-6 rounded-xl shadow-lg transition-all active:scale-95 cursor-pointer"
          >
            Quero o Pacote Completo por R$ 9,99
          </button>
        </div>
      </div>
    </section>
  );
};
