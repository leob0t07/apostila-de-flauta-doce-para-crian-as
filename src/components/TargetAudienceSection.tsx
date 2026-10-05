import React from 'react';
import { Heart, Sparkles, GraduationCap, CheckCircle } from 'lucide-react';

export const TargetAudienceSection: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full">
            Perfil de Aluno
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mt-3">
            Para Quem É Este Material?
          </h2>
          <p className="mt-3 text-sm sm:text-base md:text-lg text-slate-600">
            Desenvolvido sob medida para quem busca resultados rápidos, práticos e prazerosos no universo musical.
          </p>
        </div>

        {/* 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {/* Col 1: Pais e Mães */}
          <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-rose-100 text-rose-600 flex items-center justify-center mb-5">
                <Heart className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Para Pais e Mães
              </h3>
              <p className="text-sm text-slate-600 mb-5 leading-relaxed">
                Quer tirar seu filho das telas, celulares e videogames sem brigas? A música estimula a concentração, desenvolve o raciocínio e cria memórias inesquecíveis em família.
              </p>
            </div>

            <ul className="space-y-2 text-xs sm:text-sm text-slate-700 pt-4 border-t border-slate-100">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Atividade produtiva e saudável</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Desenvolve paciência e disciplina</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Sem precisar gastar com cursos caros</span>
              </li>
            </ul>
          </div>

          {/* Col 2: Crianças e Jovens */}
          <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 border-2 border-emerald-300 shadow-md relative flex flex-col justify-between">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-emerald-600 text-white text-[11px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full shadow-sm">
              Mais Recomendado
            </div>

            <div>
              <div className="w-14 h-14 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-5">
                <Sparkles className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Para Crianças Iniciantes (5 a 14 anos)
              </h3>
              <p className="text-sm text-slate-600 mb-5 leading-relaxed">
                Mesmo que nunca tenha segurado uma flauta na vida! O sistema visual permite que a criança aprenda por intuição e sinta o orgulho de tocar sua primeira melodia em minutos.
              </p>
            </div>

            <ul className="space-y-2 text-xs sm:text-sm text-slate-700 pt-4 border-t border-slate-100">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Método 100% visual e sem estresse</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Sensação imediata de conquista</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Coordenação motora fina aprimorada</span>
              </li>
            </ul>
          </div>

          {/* Col 3: Professores e Educadores */}
          <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-sky-100 text-sky-700 flex items-center justify-center mb-5">
                <GraduationCap className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Para Professores e Educadores
              </h3>
              <p className="text-sm text-slate-600 mb-5 leading-relaxed">
                Professores de musicalização infantil, artes e pedagogos escolares que desejam um material didático já pronto, diagramado e testado para imprimir e aplicar em salas de aula.
              </p>
            </div>

            <ul className="space-y-2 text-xs sm:text-sm text-slate-700 pt-4 border-t border-slate-100">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Direito de impressão para sua turma</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Facilidade de nivelamento de alunos</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Economia de horas preparando partituras</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Real photo showcase of child playing happily */}
        <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-slate-200 shadow-md max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-6">
          <img
            src="/src/assets/images/happy_child_flute_1791209297042.jpg"
            alt="Criança tocando flauta doce com alegria em casa"
            className="w-full md:w-1/2 h-56 sm:h-64 object-cover rounded-xl shadow-inner"
          />
          <div className="md:w-1/2 space-y-3">
            <span className="text-xs uppercase tracking-wider font-extrabold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md">
              Descoberta Musical
            </span>
            <h4 className="text-lg sm:text-xl font-bold text-slate-900">
              "A música é a melhor ferramenta para desenvolver foco e autoconfiança na infância"
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Pesquisas comprovam que crianças que praticam instrumentos de sopro aumentam a capacidade pulmonar, melhoram o raciocínio matemático e desenvolvem a sensibilidade auditiva de forma duradoura.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
