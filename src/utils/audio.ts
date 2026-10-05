/**
 * Simple Web Audio API Synthesizer that simulates a sweet soprano recorder (flauta doce).
 * Uses a blend of sine and triangle waves with subtle breath noise and gentle attack/release envelope.
 */

class FluteAudioSynth {
  private ctx: AudioContext | null = null;

  private initContext() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  // Frequencies for soprano recorder in standard C (Dó 4 to Dó 5)
  // C5 is ~523.25 Hz (standard soprano recorder lowest note is C5, often called Dó 4 in child notation)
  public playNote(noteFreq: number, durationSeconds: number = 0.8) {
    try {
      this.initContext();
      if (!this.ctx) return;

      const now = this.ctx.currentTime;

      // Master gain for envelope
      const masterGain = this.ctx.createGain();
      masterGain.gain.setValueAtTime(0, now);
      // Gentle flute attack
      masterGain.gain.linearRampToValueAtTime(0.35, now + 0.08);
      // Gentle decay to sustain
      masterGain.gain.linearRampToValueAtTime(0.28, now + durationSeconds * 0.7);
      // Smooth release
      masterGain.gain.exponentialRampToValueAtTime(0.001, now + durationSeconds);

      // Low pass filter to simulate wooden/resin chamber resonance
      const filter = this.ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(noteFreq * 2.8, now);
      filter.Q.setValueAtTime(1.5, now);

      // Primary tone: Sine wave for pure woody fundamental
      const osc1 = this.ctx.createOscillator();
      osc1.type = 'sine';
      osc1.frequency.setValueAtTime(noteFreq, now);

      // Subtle 2nd harmonic (octave) for flute breath texture
      const osc2 = this.ctx.createOscillator();
      osc2.type = 'triangle';
      osc2.frequency.setValueAtTime(noteFreq * 2, now);

      const osc2Gain = this.ctx.createGain();
      osc2Gain.gain.setValueAtTime(0.12, now);

      // Connections
      osc1.connect(masterGain);
      osc2.connect(osc2Gain);
      osc2Gain.connect(masterGain);
      masterGain.connect(filter);
      filter.connect(this.ctx.destination);

      osc1.start(now);
      osc2.start(now);

      osc1.stop(now + durationSeconds + 0.05);
      osc2.stop(now + durationSeconds + 0.05);
    } catch (e) {
      console.warn('Audio playback failed', e);
    }
  }
}

export const fluteSynth = new FluteAudioSynth();

export interface NoteDefinition {
  id: string;
  name: string;
  syllable: string;
  freq: number;
  // Flute fingering: thumb (back hole) + 7 front holes (1 to 7)
  // true = closed hole (covered), false = open hole
  fingering: {
    thumb: boolean;
    holes: [boolean, boolean, boolean, boolean, boolean, boolean, boolean];
  };
  color: string;
}

export const RECORDER_NOTES: NoteDefinition[] = [
  {
    id: 'do',
    name: 'Dó',
    syllable: 'Dó',
    freq: 523.25, // C5
    fingering: {
      thumb: true,
      holes: [true, true, true, true, true, true, true],
    },
    color: 'bg-rose-500 text-rose-50 border-rose-600',
  },
  {
    id: 're',
    name: 'Ré',
    syllable: 'Ré',
    freq: 587.33, // D5
    fingering: {
      thumb: true,
      holes: [true, true, true, true, true, true, false],
    },
    color: 'bg-orange-500 text-orange-50 border-orange-600',
  },
  {
    id: 'mi',
    name: 'Mi',
    syllable: 'Mi',
    freq: 659.25, // E5
    fingering: {
      thumb: true,
      holes: [true, true, true, true, true, false, false],
    },
    color: 'bg-amber-500 text-amber-50 border-amber-600',
  },
  {
    id: 'fa',
    name: 'Fá',
    syllable: 'Fá',
    freq: 698.46, // F5
    fingering: {
      thumb: true,
      holes: [true, true, true, true, false, true, true], // German fingering common for kids flutes
    },
    color: 'bg-emerald-500 text-emerald-50 border-emerald-600',
  },
  {
    id: 'sol',
    name: 'Sol',
    syllable: 'Sol',
    freq: 783.99, // G5
    fingering: {
      thumb: true,
      holes: [true, true, true, false, false, false, false],
    },
    color: 'bg-teal-500 text-teal-50 border-teal-600',
  },
  {
    id: 'la',
    name: 'Lá',
    syllable: 'Lá',
    freq: 880.0, // A5
    fingering: {
      thumb: true,
      holes: [true, true, false, false, false, false, false],
    },
    color: 'bg-blue-500 text-blue-50 border-blue-600',
  },
  {
    id: 'si',
    name: 'Si',
    syllable: 'Si',
    freq: 987.77, // B5
    fingering: {
      thumb: true,
      holes: [true, false, false, false, false, false, false],
    },
    color: 'bg-indigo-500 text-indigo-50 border-indigo-600',
  },
  {
    id: 'do_alto',
    name: 'Dó Agudo',
    syllable: 'Dó ↑',
    freq: 1046.5, // C6
    fingering: {
      thumb: true,
      holes: [false, true, false, false, false, false, false],
    },
    color: 'bg-violet-500 text-violet-50 border-violet-600',
  },
];
