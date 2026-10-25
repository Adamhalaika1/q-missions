import React, { useState, useEffect } from 'react';
import { Language } from '../types';
import { PRESENTATION_SLIDES, SlideContent } from '../data/presentationSlides';
import {
  X,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Minimize2,
  FileText,
  Volume2,
  Globe,
  ExternalLink,
  ShieldAlert,
  Sparkles,
  Download
} from 'lucide-react';

interface ExecutivePresentationModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
  onToggleLang: () => void;
  onJumpToTab?: (tabKey: string) => void;
}

export const ExecutivePresentationModal: React.FC<ExecutivePresentationModalProps> = ({
  isOpen,
  onClose,
  lang,
  onToggleLang,
  onJumpToTab
}) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [showSpeakerNotes, setShowSpeakerNotes] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const currentSlide = PRESENTATION_SLIDES[currentSlideIndex];

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        if (lang === 'ar') {
          handlePrev();
        } else {
          handleNext();
        }
      } else if (e.key === 'ArrowLeft') {
        if (lang === 'ar') {
          handleNext();
        } else {
          handlePrev();
        }
      } else if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'f' || e.key === 'F') {
        toggleFullscreen();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentSlideIndex, lang]);

  if (!isOpen) return null;

  const handleNext = () => {
    if (currentSlideIndex < PRESENTATION_SLIDES.length - 1) {
      setCurrentSlideIndex(currentSlideIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentSlideIndex > 0) {
      setCurrentSlideIndex(currentSlideIndex - 1);
    }
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().then(() => setIsFullscreen(true)).catch(() => {});
    } else {
      document.exitFullscreen().then(() => setIsFullscreen(false)).catch(() => {});
    }
  };

  const handleDownloadDeckSummary = () => {
    const summaryText = PRESENTATION_SLIDES.map(
      (s) =>
        `Slide ${s.slideNumber}: ${s.titleEn} (${s.titleAr})\n` +
        `Category: ${s.categoryEn}\n` +
        `Key Points:\n` +
        s.keyPointsEn.map((kp) => `  - ${kp}`).join('\n') +
        `\nSpeaker Notes: ${s.speakerNotesEn}\n\n`
    ).join('--------------------------------------------------\n');

    const blob = new Blob([summaryText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Q-MISSIONS-Executive-Deck-20-Slides-${new Date().toISOString().slice(0, 10)}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#070b10]/95 backdrop-blur-2xl flex flex-col justify-between overflow-hidden">
      {/* Presentation Top Control Bar */}
      <div className="p-4 sm:px-8 border-b border-white/10 flex items-center justify-between gap-4 glass-panel bg-[#0d141e]/90">
        <div className="flex items-center gap-3">
          <span className="font-extrabold tracking-tight text-white font-mono text-sm sm:text-base">
            Q<span className="text-[#8A1538]">-</span>MISSIONS
          </span>
          <span className="text-stone-400">|</span>
          <span className="text-xs font-mono text-amber-300 font-bold hidden sm:inline">
            {lang === 'ar' ? 'العرض التنفيذي للوزارة (20 شريحة)' : 'Ministerial Executive Briefing (20 Slides)'}
          </span>
          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#8A1538]/40 border border-[#8A1538] text-stone-200">
            PROPOSAL STATUS
          </span>
        </div>

        {/* Toolbar controls */}
        <div className="flex items-center gap-2 text-xs">
          {/* Speaker notes toggle */}
          <button
            onClick={() => setShowSpeakerNotes(!showSpeakerNotes)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border transition-all cursor-pointer ${
              showSpeakerNotes
                ? 'bg-amber-400 text-stone-900 border-amber-300 font-bold'
                : 'bg-white/5 text-stone-300 border-white/10 hover:text-white'
            }`}
            title="Toggle Speaker Notes"
          >
            <Volume2 className="w-3.5 h-3.5" />
            <span className="hidden md:inline">
              {lang === 'ar' ? 'ملاحظات الإلقاء' : 'Speaker Notes'}
            </span>
          </button>

          {/* Bilingual toggle */}
          <button
            onClick={onToggleLang}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-stone-200 transition-all cursor-pointer font-semibold"
          >
            <Globe className="w-3.5 h-3.5 text-amber-300" />
            <span>{lang === 'ar' ? 'English' : 'العربية'}</span>
          </button>

          {/* Download summary */}
          <button
            onClick={handleDownloadDeckSummary}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-stone-200 transition-all cursor-pointer"
            title="Download Summary"
          >
            <Download className="w-3.5 h-3.5 text-[#C5A36B]" />
            <span className="hidden lg:inline">{lang === 'ar' ? 'ملخص العرض' : 'Export'}</span>
          </button>

          {/* Fullscreen */}
          <button
            onClick={toggleFullscreen}
            className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-stone-200 cursor-pointer"
            title="Fullscreen (F)"
          >
            {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          </button>

          {/* Close modal */}
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-[#8A1538] hover:bg-[#a31b44] text-white cursor-pointer ml-1"
            title="Close Presentation (Esc)"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Slide Canvas Area */}
      <div className="flex-1 overflow-y-auto px-4 sm:px-12 py-8 flex items-center justify-center">
        <div className="max-w-5xl w-full mx-auto glass-panel p-8 sm:p-14 rounded-3xl border border-white/15 relative overflow-hidden shadow-2xl space-y-8 min-h-[500px] flex flex-col justify-between">
          {/* Subtle Qatar Maroon Accent Background */}
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#8A1538]/10 blur-3xl pointer-events-none" />

          {/* Slide Category & Counter */}
          <div className="flex items-center justify-between pb-4 border-b border-white/10">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#C5A36B]" />
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-amber-300">
                {lang === 'ar' ? currentSlide.categoryAr : currentSlide.categoryEn}
              </span>
            </div>

            <span className="text-xs font-mono font-bold text-stone-400 px-2.5 py-1 rounded bg-white/5 border border-white/10">
              {currentSlide.slideNumber}
            </span>
          </div>

          {/* Main Slide Title & Body */}
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight leading-tight">
                {lang === 'ar' ? currentSlide.titleAr : currentSlide.titleEn}
              </h2>
              <p className="text-base sm:text-lg font-medium text-stone-300 mt-2">
                {lang === 'ar' ? currentSlide.subtitleAr : currentSlide.subtitleEn}
              </p>
            </div>

            {/* Key Bullet Points */}
            <div className="space-y-3.5">
              {(lang === 'ar' ? currentSlide.keyPointsAr : currentSlide.keyPointsEn).map((kp, idx) => (
                <div key={idx} className="flex items-start gap-3 text-sm sm:text-base text-stone-200">
                  <div className="w-2 h-2 rounded-full bg-[#C5A36B] mt-2 shrink-0" />
                  <p className="leading-relaxed">{kp}</p>
                </div>
              ))}
            </div>

            {/* Stat Callout if present */}
            {currentSlide.statNumber && (
              <div className="p-4 rounded-2xl bg-gradient-to-r from-[#8A1538]/30 to-[#111d2d] border border-[#C5A36B]/30 inline-flex items-center gap-4">
                <span className="text-3xl sm:text-4xl font-black text-amber-300 font-mono">
                  {currentSlide.statNumber}
                </span>
                <span className="text-xs font-semibold text-stone-200 max-w-xs">
                  {lang === 'ar' ? currentSlide.statLabelAr : currentSlide.statLabelEn}
                </span>
              </div>
            )}

            {/* Jump to interactive demo in Mission Control if applicable */}
            {currentSlide.interactiveDemoTarget && onJumpToTab && (
              <div className="pt-2">
                <button
                  onClick={() => {
                    onClose();
                    onJumpToTab(currentSlide.interactiveDemoTarget!);
                  }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-[#8A1538] to-[#9c1840] border border-[#C5A36B]/50 hover:shadow-lg transition-all cursor-pointer"
                >
                  <Sparkles className="w-3.5 h-3.5 text-amber-200" />
                  <span>
                    {lang === 'ar' ? 'عرض تجريبي تفاعلي في مركز التحكم' : 'Launch Interactive Demo in Mission Control'}
                  </span>
                  <ExternalLink className="w-3 h-3 text-amber-300" />
                </button>
              </div>
            )}
          </div>

          {/* Speaker Notes Overlay Drawer */}
          {showSpeakerNotes && (
            <div className="p-4 rounded-xl bg-amber-950/40 border border-amber-500/40 text-xs text-amber-100 space-y-1 mt-4">
              <strong className="text-amber-300 font-mono uppercase text-[10px] block">
                {lang === 'ar' ? 'ملاحظات المتحدث التنفيذية' : 'Executive Speaker Talking Points'}
              </strong>
              <p className="leading-relaxed italic">
                {lang === 'ar' ? currentSlide.speakerNotesAr : currentSlide.speakerNotesEn}
              </p>
            </div>
          )}

          {/* Institutional Status Footer Note */}
          <div className="pt-4 border-t border-white/5 flex items-center justify-between text-[11px] text-stone-400">
            <span>Ministry of Sports and Youth — State of Qatar</span>
            <span>Independent Concept Briefing</span>
          </div>
        </div>
      </div>

      {/* Bottom Navigation & Slide Stepper */}
      <div className="p-4 sm:px-8 border-t border-white/10 glass-panel bg-[#0d141e]/90 flex items-center justify-between gap-4">
        <button
          onClick={handlePrev}
          disabled={currentSlideIndex === 0}
          className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
            currentSlideIndex === 0
              ? 'opacity-40 cursor-not-allowed bg-white/5 text-stone-500'
              : 'bg-white/10 hover:bg-white/15 text-stone-200'
          }`}
        >
          <ChevronLeft className="w-4 h-4" />
          <span>{lang === 'ar' ? 'الشريحة السابقة' : 'Previous Slide'}</span>
        </button>

        {/* Slide Dots / Progress Indicator */}
        <div className="hidden sm:flex items-center gap-1.5 overflow-x-auto max-w-md py-1">
          {PRESENTATION_SLIDES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlideIndex(idx)}
              className={`h-2 rounded-full transition-all cursor-pointer ${
                idx === currentSlideIndex
                  ? 'w-6 bg-[#C5A36B]'
                  : 'w-2 bg-white/20 hover:bg-white/40'
              }`}
              title={`Slide ${idx + 1}`}
            />
          ))}
        </div>

        <button
          onClick={handleNext}
          disabled={currentSlideIndex === PRESENTATION_SLIDES.length - 1}
          className={`flex items-center gap-1.5 px-5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
            currentSlideIndex === PRESENTATION_SLIDES.length - 1
              ? 'opacity-40 cursor-not-allowed bg-white/5 text-stone-500'
              : 'bg-[#8A1538] hover:bg-[#a31b44] text-white shadow-lg shadow-[#8A1538]/30'
          }`}
        >
          <span>{lang === 'ar' ? 'الشريحة التالية' : 'Next Slide'}</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
