import React, { useState } from 'react';
import { Volume2, Sparkles, Check } from 'lucide-react';
import { RECORDER_NOTES, NoteDefinition, fluteSynth } from '../utils/audio';

export const InteractiveFlutePlayer: React.FC = () => {
  const [activeNote, setActiveNote] = useState<NoteDefinition>(RECORDER_NOTES[4]); // Start with 'Sol' (G5) which is super easy for kids (3 fingers)
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const handleSelectNote = (note: NoteDefinition) => {
    setActiveNote(note);
    setIsPlaying(true);
    fluteSynth.playNote(note.freq, 0.7);
    setTimeout(() => setIsPlaying(false), 700);
  };

  return (
    <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-xl border border-slate-700/80">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 pb-3 border-b border-slate-700/60">
        <div>
          <div className="flex items-center gap-2">
            <span className="inline-flex p-1.5 rounded-lg bg-emerald-500/20 text-emerald-400">
              <Sparkles className="w-4 h-4" />
            </span>
            <h4 className="font-extrabold text-base sm:text-lg text-white">
              Demonstração Interativa do Método Visual
            </h4>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 mt-1">
            Toque nas notas abaixo para ver como os furos são mostrados na apostila e ouvir o som real da flauta:
          </p>
        </div>

        <div className="flex items-center gap-1.5 bg-slate-800/90 border border-slate-700 px-3 py-1.5 rounded-full text-xs font-medium text-emerald-400 self-start sm:self-center">
          <Volume2 className={`w-3.5 h-3.5 ${isPlaying ? 'animate-bounce' : ''}`} />
          <span>Com Áudio Real</span>
        </div>
      </div>

      {/* Note Selector buttons */}
      <div className="grid grid-cols-4 sm:grid-cols-8 gap-2 mb-6">
        {RECORDER_NOTES.map((note) => {
          const isSelected = activeNote.id === note.id;
          return (
            <button
              key={note.id}
              onClick={() => handleSelectNote(note)}
              className={`flex flex-col items-center justify-center p-2.5 rounded-xl border font-bold transition-all cursor-pointer ${
                isSelected
                  ? 'bg-emerald-500 text-white border-emerald-400 ring-2 ring-emerald-300/40 shadow-lg scale-105'
                  : 'bg-slate-800/80 text-slate-200 border-slate-700 hover:bg-slate-700/80 hover:text-white'
              }`}
            >
              <span className="text-sm sm:text-base leading-tight">{note.syllable}</span>
              <span className="text-[10px] opacity-75 font-normal">
                {note.id === 'sol' ? 'Mais Fácil' : `${Math.round(note.freq)} Hz`}
              </span>
            </button>
          );
        })}
      </div>

      {/* Flute Graphic representation */}
      <div className="bg-slate-950/70 rounded-2xl p-4 sm:p-6 border border-slate-800 flex flex-col md:flex-row items-center justify-around gap-6">
        {/* Left: Info card on current note */}
        <div className="text-center md:text-left space-y-2 max-w-xs">
          <div className="inline-block px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
            Nota Atual: {activeNote.name}
          </div>
          <h5 className="text-xl sm:text-2xl font-black text-white">
            Como a criança enxerga:
          </h5>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            {activeNote.fingering.holes.filter(Boolean).length === 0
              ? 'Apenas segure a flauta com a mão de apoio e sopre bem suave.'
              : `Cubra exatamente ${activeNote.fingering.holes.filter(Boolean).length + (activeNote.fingering.thumb ? 1 : 0)} furos marcados em preto na ilustração.`}
          </p>
          <div className="pt-2">
            <button
              onClick={() => handleSelectNote(activeNote)}
              className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold px-4 py-2 rounded-xl transition-all shadow-md active:scale-95 cursor-pointer"
            >
              <Volume2 className="w-4 h-4" />
              <span>Ouvir o Som de {activeNote.name}</span>
            </button>
          </div>
        </div>

        {/* Right: The visual Recorder & Hole diagram */}
        <div className="flex items-center gap-8 sm:gap-12 bg-slate-900/90 py-4 px-6 rounded-2xl border border-slate-800/80 shadow-inner">
          {/* Thumb hole (Back of recorder) */}
          <div className="flex flex-col items-center gap-1.5">
            <span className="text-[10px] uppercase font-bold text-slate-400">Atrás</span>
            <div
              className={`w-7 h-7 rounded-full border-2 transition-all flex items-center justify-center ${
                activeNote.fingering.thumb
                  ? 'bg-emerald-400 border-white shadow-md shadow-emerald-500/50'
                  : 'bg-slate-900 border-slate-500'
              }`}
              title="Furo de trás (Polegar)"
            >
              {activeNote.fingering.thumb && <Check className="w-4 h-4 text-slate-950 stroke-[3]" />}
            </div>
            <span className="text-[10px] text-slate-400 font-medium">Polegar</span>
          </div>

          <div className="h-44 w-px bg-slate-700/80" />

          {/* Front Holes (1 to 7) */}
          <div className="flex flex-col items-center gap-1.5">
            <span className="text-[10px] uppercase font-bold text-slate-400">Frente (7 Furos)</span>
            <div className="w-9 py-2 px-1 bg-gradient-to-b from-amber-100 via-amber-50 to-amber-100 rounded-full border-2 border-amber-300 shadow-md flex flex-col items-center gap-2">
              {activeNote.fingering.holes.map((isCovered, idx) => (
                <div
                  key={idx}
                  className={`w-4 h-4 rounded-full border-2 transition-all flex items-center justify-center ${
                    isCovered
                      ? 'bg-slate-900 border-slate-950 scale-105'
                      : 'bg-white border-slate-400'
                  }`}
                  title={`Furo ${idx + 1}: ${isCovered ? 'Cobrir' : 'Aberto'}`}
                />
              ))}
            </div>
            <span className="text-[10px] text-emerald-400 font-bold mt-1">
              {activeNote.fingering.holes.filter(Boolean).length} furos cobertos
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
