import React from 'react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';
import {
  Compass,
  HeartPulse,
  Users,
  ShieldCheck,
  Award,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Layers,
  Flag
} from 'lucide-react';

interface ConceptSectionProps {
  lang: Language;
  onExploreCycleStep?: (stepIndex: number) => void;
}

export const ConceptSection: React.FC<ConceptSectionProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang];

  return (
    <section id="concept" className="py-24 bg-[#0d141e] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Core Differentiation & Philosophy */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border border-[#8A1538]/40 text-xs text-amber-300 font-mono">
              <Sparkles className="w-3.5 h-3.5 text-[#C5A36B]" />
              <span>{t.whyDifferent.tag}</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              {t.whyDifferent.title}
            </h2>

            <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
              {t.whyDifferent.desc}
            </p>

            {/* Qatar Strategic Alignment Box */}
            <div className="p-5 rounded-2xl glass-card-maroon space-y-2">
              <div className="flex items-center gap-2 text-amber-300 font-bold text-xs uppercase tracking-wider">
                <Flag className="w-4 h-4 text-[#C5A36B]" />
                <span>{lang === 'ar' ? 'التوافق التام مع الرؤية الوطنية لدولة قطر' : 'Sovereign Alignment with Qatar Vision'}</span>
              </div>
              <p className="text-xs text-stone-200 leading-relaxed">
                {lang === 'ar'
                  ? 'يتكامل المشروع مباشرة مع ركيزة التنمية البشرية في رؤية قطر 2030، واستراتيجية التنمية الوطنية الثالثة، وأولويات وزارة الرياضة والشباب في بناء مجتمع نشط وتمكين الكفاءات الوطنية.'
                  : 'Directly aligns with Qatar National Vision 2030 Human Development Pillar, the Third National Development Strategy, and the Ministry’s active society mandate.'}
              </p>
            </div>
          </div>

          {/* Four Core Pillars Grid */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl glass-panel border border-white/10 space-y-2">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-bold">
                <HeartPulse className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold text-white">{t.whyDifferent.pillar1Title}</h4>
              <p className="text-xs text-stone-300 leading-relaxed">{t.whyDifferent.pillar1Desc}</p>
            </div>

            <div className="p-5 rounded-2xl glass-panel border border-white/10 space-y-2">
              <div className="w-10 h-10 rounded-xl bg-[#8A1538]/30 text-amber-300 flex items-center justify-center font-bold">
                <Users className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold text-white">{t.whyDifferent.pillar2Title}</h4>
              <p className="text-xs text-stone-300 leading-relaxed">{t.whyDifferent.pillar2Desc}</p>
            </div>

            <div className="p-5 rounded-2xl glass-panel border border-white/10 space-y-2">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold text-white">{t.whyDifferent.pillar3Title}</h4>
              <p className="text-xs text-stone-300 leading-relaxed">{t.whyDifferent.pillar3Desc}</p>
            </div>

            <div className="p-5 rounded-2xl glass-panel border border-white/10 space-y-2">
              <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-300 flex items-center justify-center font-bold">
                <Award className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold text-white">{t.whyDifferent.pillar4Title}</h4>
              <p className="text-xs text-stone-300 leading-relaxed">{t.whyDifferent.pillar4Desc}</p>
            </div>
          </div>
        </div>

        {/* The 7-Stage Mission Cycle Architecture */}
        <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-white/15 space-y-8 relative overflow-hidden shadow-2xl">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-[10px] font-mono font-bold text-[#C5A36B] uppercase tracking-widest">
              {t.missionCycle.tag}
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-white">
              {t.missionCycle.title}
            </h3>
            <p className="text-xs sm:text-sm text-stone-300">
              {t.missionCycle.desc}
            </p>
          </div>

          {/* 7-Step Horizontal / Responsive Flow */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3">
            {t.missionCycle.steps.map((st, idx) => (
              <div
                key={st.num}
                className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-[#C5A36B]/50 transition-all flex flex-col justify-between text-center group"
              >
                <div>
                  <div className="w-10 h-10 rounded-full mx-auto mb-3 bg-[#111d2d] border-2 border-[#8A1538] flex items-center justify-center font-mono font-bold text-xs text-amber-300 group-hover:scale-110 transition-transform shadow-md">
                    {st.num}
                  </div>
                  <h5 className="text-xs font-bold text-white mb-1.5">{st.title}</h5>
                  <p className="text-[11px] text-stone-300 leading-snug">{st.desc}</p>
                </div>

                <div className="mt-3 pt-2 border-t border-white/5 text-[9px] font-mono text-[#C5A36B]">
                  Gate 0{idx + 1}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
