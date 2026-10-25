import React from 'react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { Compass, ShieldCheck, Mail, Globe, ArrowUp } from 'lucide-react';

interface FooterProps {
  lang: Language;
  onOpenDeck: () => void;
  onScrollToTop: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  lang,
  onOpenDeck,
  onScrollToTop
}) => {
  const t = TRANSLATIONS[lang];

  return (
    <footer className="border-t border-white/10 bg-[#080d14] text-stone-400 py-16 text-xs relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Top Institutional Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-white/10">
          {/* Brand & Mission Statement */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-10 px-2 py-0.5 bg-white rounded flex items-center justify-center">
                <img
                  src="/assets/aistudio/image_59e51ff0.png"
                  alt="Ministry of Sports and Youth"
                  className="h-8 w-auto object-contain"
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.style.display = 'none';
                  }}
                />
              </div>
              <div>
                <span className="text-lg font-black text-white font-mono tracking-tight">
                  Q<span className="text-[#C5A36B]">-</span>MISSIONS
                </span>
                <p className="text-[11px] text-stone-400">
                  {lang === 'ar' ? 'منتدى قطر العالمي للمهمات الشبابية' : 'Qatar Global Youth Missions Forum'}
                </p>
              </div>
            </div>

            <p className="text-stone-300 leading-relaxed text-xs">
              {t.footer.statement}
            </p>

            <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-stone-300">
              <span className="text-[10px] font-mono font-bold text-amber-300 uppercase block mb-1">
                {lang === 'ar' ? 'الجهة الاستراتيجية المقترحة' : 'Proposed Strategic Lead'}
              </span>
              <p className="text-stone-200 font-semibold">
                {t.footer.recipient}
              </p>
            </div>
          </div>

          {/* Quick Concept Navigation */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              {lang === 'ar' ? 'أقسام المبادرة' : 'Initiative Architecture'}
            </h4>
            <ul className="space-y-2 text-stone-300 text-xs">
              <li>
                <a href="#concept" className="hover:text-amber-300 transition-colors">
                  {t.nav.overview}
                </a>
              </li>
              <li>
                <a href="#worlds" className="hover:text-amber-300 transition-colors">
                  {t.nav.worlds}
                </a>
              </li>
              <li>
                <a href="#mission-control-section" className="hover:text-amber-300 transition-colors">
                  {t.nav.missionControl}
                </a>
              </li>
              <li>
                <a href="#program" className="hover:text-amber-300 transition-colors">
                  {t.nav.program}
                </a>
              </li>
              <li>
                <a href="#deliverables" className="hover:text-amber-300 transition-colors">
                  {t.nav.deliverables}
                </a>
              </li>
              <li>
                <a href="#team" className="hover:text-amber-300 transition-colors">
                  {t.nav.team}
                </a>
              </li>
            </ul>
          </div>

          {/* Institutional Compliance & Ethics */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              {lang === 'ar' ? 'النزاهة والشفافية المؤسسية' : 'Governance & Proposal Status'}
            </h4>
            <div className="p-3.5 rounded-xl bg-[#8A1538]/10 border border-[#8A1538]/30 space-y-2 text-[11px] text-stone-300">
              <div className="flex items-center gap-1.5 text-amber-300 font-bold">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>{lang === 'ar' ? 'وثيقة استشارية مستقلة' : 'Independent Concept Dossier'}</span>
              </div>
              <p className="leading-relaxed">
                {t.officialDisclaimer}
              </p>
            </div>

            <button
              onClick={onOpenDeck}
              className="w-full py-2.5 px-3 rounded-lg bg-white/10 hover:bg-white/15 text-stone-200 font-bold text-xs flex items-center justify-center gap-2 border border-white/10 transition-all cursor-pointer"
            >
              <span>{t.nav.executivePresentation}</span>
            </button>
          </div>
        </div>

        {/* Bottom Strip: Rights & Scroll to Top */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-stone-400">
          <p>{t.footer.rights}</p>

          <button
            onClick={onScrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-stone-300 transition-all cursor-pointer"
          >
            <span>{lang === 'ar' ? 'العودة للأعلى' : 'Back to Top'}</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
