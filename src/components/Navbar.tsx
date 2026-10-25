import React, { useState } from 'react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { Compass, Presentation, Menu, X, Shield, Globe } from 'lucide-react';

interface NavbarProps {
  lang: Language;
  onToggleLang: () => void;
  onOpenDeck: () => void;
  onScrollToMissionControl: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  lang,
  onToggleLang,
  onOpenDeck,
  onScrollToMissionControl
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = TRANSLATIONS[lang];

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full glass-panel border-b border-white/10 bg-[#0d141e]/90">
      {/* Top institutional status strip */}
      <div className="bg-[#8A1538]/20 border-b border-[#8A1538]/40 px-4 py-1.5 text-xs text-stone-300">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            <span className="font-medium text-amber-200">{t.independentBadge}</span>
            <span className="hidden md:inline text-stone-400">|</span>
            <span className="hidden md:inline text-stone-300">{t.shortDisclaimer}</span>
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <span className="text-stone-400">Doha, Qatar 2026</span>
            <button
              onClick={onToggleLang}
              className="flex items-center gap-1.5 font-semibold text-amber-300 hover:text-amber-200 transition-colors px-2 py-0.5 rounded bg-white/5 border border-white/10"
              aria-label="Switch language"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>{t.nav.langToggle}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main navigation bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand & Ministry Identity */}
        <div className="flex items-center gap-4">
          <a href="#" className="flex items-center gap-3 group">
            {/* Ministry of Sports and Youth official logo */}
            <div className="h-12 px-2.5 py-1 bg-white rounded-lg flex items-center justify-center shadow-md border border-stone-200">
              <img
                src="/assets/aistudio/image_59e51ff0.png"
                alt="Ministry of Sports and Youth — State of Qatar"
                className="h-10 w-auto object-contain"
                onError={(e) => {
                  // Fallback to text if path resolution differs in dev
                  const target = e.currentTarget;
                  target.style.display = 'none';
                  const parent = target.parentElement;
                  if (parent) {
                    parent.innerHTML = `<span class="text-[11px] font-bold text-[#8A1538] leading-tight text-center">وزارة الرياضة والشباب<br><span class="text-[9px] text-stone-700">Ministry of Sports & Youth</span></span>`;
                  }
                }}
              />
            </div>

            <div className="h-8 w-px bg-white/20 hidden sm:block" />

            {/* Q-MISSIONS Brand */}
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xl font-extrabold tracking-tight text-white font-mono">
                  Q<span className="text-[#C5A36B]">-</span>MISSIONS
                </span>
                <span className="text-[10px] px-1.5 py-0.5 rounded font-bold uppercase bg-[#8A1538] text-white">
                  Concept
                </span>
              </div>
              <p className="text-[11px] text-stone-400 leading-tight">
                {lang === 'ar' ? 'منتدى قطر العالمي للمهمات الشبابية' : 'Qatar Global Youth Missions'}
              </p>
            </div>
          </a>
        </div>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-stone-300">
          <button
            onClick={() => scrollToSection('concept')}
            className="hover:text-amber-300 transition-colors cursor-pointer"
          >
            {t.nav.overview}
          </button>
          <button
            onClick={() => scrollToSection('worlds')}
            className="hover:text-amber-300 transition-colors cursor-pointer"
          >
            {t.nav.worlds}
          </button>
          <button
            onClick={() => scrollToSection('program')}
            className="hover:text-amber-300 transition-colors cursor-pointer"
          >
            {t.nav.program}
          </button>
          <button
            onClick={() => scrollToSection('deliverables')}
            className="hover:text-amber-300 transition-colors cursor-pointer"
          >
            {t.nav.deliverables}
          </button>
          <button
            onClick={() => scrollToSection('benchmarking')}
            className="hover:text-amber-300 transition-colors cursor-pointer"
          >
            {t.nav.benchmarking}
          </button>
          <button
            onClick={() => scrollToSection('team')}
            className="hover:text-amber-300 transition-colors cursor-pointer"
          >
            {t.nav.team}
          </button>
          <button
            onClick={() => scrollToSection('governance')}
            className="hover:text-amber-300 transition-colors cursor-pointer"
          >
            {t.nav.governance}
          </button>
        </nav>

        {/* CTA Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={onOpenDeck}
            className="flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-semibold text-stone-200 bg-white/10 hover:bg-white/15 border border-white/15 transition-all shadow-sm"
          >
            <Presentation className="w-4 h-4 text-[#C5A36B]" />
            <span>{t.nav.executivePresentation}</span>
          </button>

          <button
            onClick={onScrollToMissionControl}
            className="flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold text-white bg-gradient-to-r from-[#8A1538] to-[#a31b44] hover:from-[#9c1840] hover:to-[#b81e4d] transition-all shadow-md shadow-[#8A1538]/30 border border-[#C5A36B]/30"
          >
            <Compass className="w-4 h-4 text-amber-200" />
            <span>{t.nav.missionControl}</span>
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={onToggleLang}
            className="text-xs px-2.5 py-1 rounded bg-white/10 text-amber-300 font-semibold"
          >
            {t.nav.langToggle}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-stone-300 hover:text-white bg-white/5"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden glass-panel border-t border-white/10 px-4 py-6 space-y-3 bg-[#0d141e]">
          <div className="flex flex-col space-y-2 text-sm font-medium text-stone-200">
            <button
              onClick={() => scrollToSection('concept')}
              className="text-start py-2 px-3 rounded hover:bg-white/5"
            >
              {t.nav.overview}
            </button>
            <button
              onClick={() => scrollToSection('worlds')}
              className="text-start py-2 px-3 rounded hover:bg-white/5"
            >
              {t.nav.worlds}
            </button>
            <button
              onClick={() => scrollToSection('mission-control-section')}
              className="text-start py-2 px-3 rounded hover:bg-white/5"
            >
              {t.nav.missionControl}
            </button>
            <button
              onClick={() => scrollToSection('program')}
              className="text-start py-2 px-3 rounded hover:bg-white/5"
            >
              {t.nav.program}
            </button>
            <button
              onClick={() => scrollToSection('deliverables')}
              className="text-start py-2 px-3 rounded hover:bg-white/5"
            >
              {t.nav.deliverables}
            </button>
            <button
              onClick={() => scrollToSection('benchmarking')}
              className="text-start py-2 px-3 rounded hover:bg-white/5"
            >
              {t.nav.benchmarking}
            </button>
            <button
              onClick={() => scrollToSection('team')}
              className="text-start py-2 px-3 rounded hover:bg-white/5"
            >
              {t.nav.team}
            </button>
            <button
              onClick={() => scrollToSection('governance')}
              className="text-start py-2 px-3 rounded hover:bg-white/5"
            >
              {t.nav.governance}
            </button>
          </div>

          <div className="pt-4 border-t border-white/10 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDeck();
              }}
              className="w-full py-2.5 px-4 rounded-lg text-sm font-semibold text-white bg-white/10 border border-white/20 flex items-center justify-center gap-2"
            >
              <Presentation className="w-4 h-4 text-[#C5A36B]" />
              {t.nav.executivePresentation}
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onScrollToMissionControl();
              }}
              className="w-full py-2.5 px-4 rounded-lg text-sm font-bold text-white bg-[#8A1538] flex items-center justify-center gap-2"
            >
              <Compass className="w-4 h-4 text-amber-200" />
              {t.nav.missionControl}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
