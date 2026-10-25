import React from 'react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { ArrowDown, Compass, Play, Presentation, Sparkles, Users, Award, ShieldCheck } from 'lucide-react';

interface HeroProps {
  lang: Language;
  onExploreMissions: () => void;
  onEnterControl: () => void;
  onLaunchDeck: () => void;
  onMeetTeam: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  lang,
  onExploreMissions,
  onEnterControl,
  onLaunchDeck,
  onMeetTeam
}) => {
  const t = TRANSLATIONS[lang];

  return (
    <section className="relative overflow-hidden pt-12 pb-24 md:pt-16 md:pb-32 bg-gradient-to-b from-[#0d141e] via-[#111d2d] to-[#0d141e]">
      {/* Decorative background glows & grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
      <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-[#8A1538]/20 blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 -right-40 w-96 h-96 rounded-full bg-[#C5A36B]/15 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Institutional Disclosure Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full glass-panel border border-[#C5A36B]/30 text-xs text-stone-200 shadow-lg">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C5A36B] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#C5A36B]" />
            </span>
            <span className="font-semibold text-amber-300">
              {lang === 'ar' ? 'وثيقة استراتيجية مستقلة' : 'Independent Strategic Proposal'}
            </span>
            <span className="text-stone-400">|</span>
            <span className="text-stone-300 hidden sm:inline">
              {lang === 'ar' ? 'مرفوعة لوزارة الرياضة والشباب — دولة قطر' : 'Proposed to Ministry of Sports & Youth — State of Qatar'}
            </span>
          </div>
        </div>

        {/* Main Title & Statement */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <div className="space-y-2">
            <h2 className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#C5A36B] font-mono">
              {lang === 'ar' ? 'دولة قطر — الدوحة 2026' : 'State of Qatar — Doha 2026'}
            </h2>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-tight">
              Q<span className="text-[#8A1538]">-</span>MISSIONS
              <span className="block text-xl sm:text-2xl lg:text-3xl font-semibold text-stone-300 mt-2">
                {lang === 'ar' ? 'منتدى قطر العالمي للمهمات الشبابية' : 'Qatar Global Youth Missions Forum'}
              </span>
            </h1>
          </div>

          {/* Core Tagline with Accent Banner */}
          <div className="py-2.5 px-6 rounded-2xl glass-card-maroon inline-block max-w-2xl mx-auto shadow-xl">
            <p className="text-lg sm:text-2xl font-bold text-white tracking-wide">
              {t.tagline}
            </p>
            {lang === 'en' && (
              <p className="text-sm font-medium text-amber-200/80 mt-1 font-serif" dir="rtl">
                منتدى لا تكتفي بحضوره.. بل مهمة تنجزها
              </p>
            )}
          </div>

          <p className="text-base sm:text-lg text-stone-300 leading-relaxed max-w-3xl mx-auto">
            {t.hero.description}
          </p>

          {/* Call to action buttons */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <button
              onClick={onEnterControl}
              className="flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-[#8A1538] to-[#9c1840] hover:from-[#9c1840] hover:to-[#b81e4d] shadow-lg shadow-[#8A1538]/40 border border-[#C5A36B]/40 transition-all cursor-pointer transform hover:-translate-y-0.5"
            >
              <Compass className="w-5 h-5 text-amber-200" />
              <span>{t.hero.btnEnterControl}</span>
            </button>

            <button
              onClick={onLaunchDeck}
              className="flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-stone-100 bg-white/10 hover:bg-white/15 border border-white/20 transition-all cursor-pointer shadow-md backdrop-blur-md transform hover:-translate-y-0.5"
            >
              <Presentation className="w-5 h-5 text-[#C5A36B]" />
              <span>{t.hero.btnLaunchDeck}</span>
            </button>

            <button
              onClick={onExploreMissions}
              className="flex items-center gap-2 px-5 py-3.5 rounded-xl text-sm font-semibold text-stone-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-all cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-emerald-400" />
              <span>{t.hero.btnExploreMissions}</span>
            </button>

            <button
              onClick={onMeetTeam}
              className="flex items-center gap-2 px-5 py-3.5 rounded-xl text-sm font-semibold text-stone-300 hover:text-amber-200 bg-transparent hover:bg-white/5 border border-dashed border-white/20 transition-all cursor-pointer"
            >
              <Users className="w-4 h-4 text-amber-400" />
              <span>{t.hero.btnMeetTeam}</span>
            </button>
          </div>
        </div>

        {/* Abstract Mission Convergence Visual (Storytelling Graphic) */}
        <div className="mt-16 max-w-5xl mx-auto rounded-2xl glass-panel p-6 sm:p-8 relative overflow-hidden border border-white/10 shadow-2xl">
          <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
            <div className="flex items-center gap-2.5">
              <div className="w-3 h-3 rounded-full bg-emerald-400" />
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-stone-200">
                {lang === 'ar' ? 'نموذج تقارب الفرق والمهمات الميدانية' : 'Mission Squad Convergence Architecture'}
              </span>
            </div>
            <span className="text-xs text-[#C5A36B] font-mono">Doha Operational Hub</span>
          </div>

          {/* Interactive Flow Diagram */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
            {/* Step 1 */}
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-[#8A1538]/30 border border-[#8A1538] flex items-center justify-center text-sm font-bold text-white mb-2">
                01
              </div>
              <h4 className="text-sm font-bold text-white mb-1">
                {lang === 'ar' ? 'الوفود الدولية' : 'Global Delegates'}
              </h4>
              <p className="text-xs text-stone-400">
                {lang === 'ar' ? 'مشاركون متنوعو الكفاءات من 40+ دولة' : 'Diverse talents paired into balanced squads'}
              </p>
            </div>

            {/* Step 2 */}
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-[#C5A36B]/30 border border-[#C5A36B] flex items-center justify-center text-sm font-bold text-amber-200 mb-2">
                02
              </div>
              <h4 className="text-sm font-bold text-white mb-1">
                {lang === 'ar' ? 'الرياضة واللغة المشتركة' : 'Sport & Trust Circuit'}
              </h4>
              <p className="text-xs text-stone-400">
                {lang === 'ar' ? 'بناء الثقة عبر الحركة والألعاب التكيفية' : 'Physical play builds empathy before action'}
              </p>
            </div>

            {/* Step 3 */}
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-emerald-500/30 border border-emerald-500 flex items-center justify-center text-sm font-bold text-emerald-200 mb-2">
                03
              </div>
              <h4 className="text-sm font-bold text-white mb-1">
                {lang === 'ar' ? 'المهمات الميدانية في قطر' : 'Supervised Qatar Field Missions'}
              </h4>
              <p className="text-xs text-stone-400">
                {lang === 'ar' ? 'تنفيذ حقيقي في أسباير وكتارا والوكرة' : 'Controlled execution at iconic community venues'}
              </p>
            </div>

            {/* Step 4 */}
            <div className="p-4 rounded-xl bg-[#8A1538]/20 border border-[#8A1538]/50 flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-[#8A1538] flex items-center justify-center text-sm font-bold text-white mb-2 shadow-lg">
                04
              </div>
              <h4 className="text-sm font-bold text-amber-200 mb-1">
                {lang === 'ar' ? 'إيصال الأثر المعتمد (VIR)' : 'Verified Impact Receipt'}
              </h4>
              <p className="text-xs text-stone-300">
                {lang === 'ar' ? 'أدلة مشفرة ومخرجات تدوم لـ 90 يوماً' : 'Immutable audit trail & 90-day institutional legacy'}
              </p>
            </div>
          </div>
        </div>

        {/* Quick Highlights Counters */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
          <div className="glass-panel p-4 rounded-xl border border-white/5 text-center">
            <p className="text-2xl sm:text-3xl font-black text-amber-400 font-mono">
              {t.hero.stats.actionVsTalk}
            </p>
            <p className="text-xs text-stone-300 font-semibold mt-1">
              {t.hero.stats.actionVsTalkSub}
            </p>
          </div>

          <div className="glass-panel p-4 rounded-xl border border-white/5 text-center">
            <p className="text-2xl sm:text-3xl font-black text-emerald-400 font-mono">
              {t.hero.stats.worldsCount}
            </p>
            <p className="text-xs text-stone-300 font-semibold mt-1">
              {t.hero.stats.worldsCountSub}
            </p>
          </div>

          <div className="glass-panel p-4 rounded-xl border border-white/5 text-center">
            <p className="text-2xl sm:text-3xl font-black text-[#C5A36B] font-mono">
              {t.hero.stats.receiptVerification}
            </p>
            <p className="text-xs text-stone-300 font-semibold mt-1">
              {t.hero.stats.receiptVerificationSub}
            </p>
          </div>

          <div className="glass-panel p-4 rounded-xl border border-white/5 text-center">
            <p className="text-2xl sm:text-3xl font-black text-cyan-400 font-mono">
              {t.hero.stats.deliverablesCount}
            </p>
            <p className="text-xs text-stone-300 font-semibold mt-1">
              {t.hero.stats.deliverablesCountSub}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
