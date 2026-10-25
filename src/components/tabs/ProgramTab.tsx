import React, { useState } from 'react';
import { Language } from '../../types';
import { FIVE_DAY_PROGRAM } from '../../data/programData';
import { Calendar, Clock, MapPin, ShieldAlert, Award, ChevronRight, CheckCircle2 } from 'lucide-react';

interface ProgramTabProps {
  lang: Language;
}

export const ProgramTab: React.FC<ProgramTabProps> = ({ lang }) => {
  const [activeDayNum, setActiveDayNum] = useState<number>(1);
  const currentDay = FIVE_DAY_PROGRAM.find(d => d.dayNumber === activeDayNum)!;

  return (
    <div className="space-y-8">
      {/* Day Selector Navigation */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
        {FIVE_DAY_PROGRAM.map((d) => {
          const isSelected = d.dayNumber === activeDayNum;
          return (
            <button
              key={d.dayNumber}
              onClick={() => setActiveDayNum(d.dayNumber)}
              className={`p-3 rounded-2xl transition-all border text-start cursor-pointer ${
                isSelected
                  ? 'glass-card-maroon border-[#C5A36B] shadow-xl scale-[1.02]'
                  : 'glass-panel hover:bg-white/10 border-white/5'
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-[10px] font-mono font-bold text-[#C5A36B]">
                  DAY 0{d.dayNumber}
                </span>
                {isSelected && <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />}
              </div>
              <h4 className="text-xs font-bold text-white truncate">
                {lang === 'ar' ? d.themeAr.split(':')[0] : d.themeEn.split(':')[0]}
              </h4>
            </button>
          );
        })}
      </div>

      {/* Selected Day Overview Banner */}
      <div className="p-6 rounded-2xl glass-panel border border-white/15 space-y-3">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-white/10">
          <div>
            <span className="text-[10px] font-mono font-bold text-[#C5A36B] uppercase tracking-widest">
              {currentDay.dateStr}
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-white mt-0.5">
              {lang === 'ar' ? currentDay.themeAr : currentDay.themeEn}
            </h3>
            <p className="text-xs text-stone-300 mt-1">
              {lang === 'ar' ? currentDay.subtitleAr : currentDay.subtitleEn}
            </p>
          </div>

          <div className="p-3 rounded-xl bg-[#8A1538]/20 border border-[#8A1538]/50 sm:text-end shrink-0">
            <span className="text-[10px] uppercase font-bold text-amber-300 block">
              {lang === 'ar' ? 'مخرج نهاية اليوم الإلزامي' : 'Mandatory End-of-Day Output'}
            </span>
            <span className="text-xs font-bold text-stone-100 mt-0.5 block">
              {lang === 'ar' ? currentDay.coreOutputAr : currentDay.coreOutputEn}
            </span>
          </div>
        </div>

        {/* Sessions Hourly Timeline */}
        <div className="space-y-4 pt-4">
          {currentDay.sessions.map((ses, idx) => {
            const isField = ses.type === 'field';
            const isKeynote = ses.type === 'keynote';
            const isReview = ses.type === 'review';

            return (
              <div
                key={idx}
                className={`p-4 rounded-xl border transition-all ${
                  isField
                    ? 'glass-card-maroon border-[#8A1538]/60 shadow-md'
                    : isReview
                    ? 'bg-amber-950/15 border-amber-500/30'
                    : 'glass-panel border-white/5 hover:border-white/15'
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-md bg-white/10 text-amber-300 flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-stone-400" />
                      {ses.time}
                    </span>
                    <span className="text-[10px] uppercase font-extrabold px-2 py-0.5 rounded bg-white/5 border border-white/10 text-stone-300">
                      {ses.type}
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs text-stone-400">
                    <MapPin className="w-3.5 h-3.5 text-[#C5A36B]" />
                    <span>{lang === 'ar' ? ses.locationAr : ses.locationEn}</span>
                  </div>
                </div>

                <h4 className="text-sm sm:text-base font-bold text-white mb-1">
                  {lang === 'ar' ? ses.titleAr : ses.titleEn}
                </h4>

                <p className="text-xs text-stone-300 leading-relaxed mb-3">
                  {lang === 'ar' ? ses.descriptionAr : ses.descriptionEn}
                </p>

                <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-white/5 text-[11px] text-stone-400">
                  <span>
                    <strong className="text-stone-300">
                      {lang === 'ar' ? 'الميسر:' : 'Facilitator:'}
                    </strong>{' '}
                    {lang === 'ar' ? ses.facilitatorAr : ses.facilitatorEn}
                  </span>

                  {ses.safetyGateEn && (
                    <div className="flex items-center gap-1 text-amber-300 font-semibold text-[11px]">
                      <ShieldAlert className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span>{lang === 'ar' ? ses.safetyGateAr : ses.safetyGateEn}</span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
