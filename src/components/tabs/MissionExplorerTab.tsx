import React, { useState } from 'react';
import { ChallengeCard, Language, MissionWorldId } from '../../types';
import { MISSION_WORLDS, SAMPLE_CHALLENGES } from '../../data/missionsData';
import { MapPin, Users, Clock, CheckCircle2, AlertCircle, Sparkles, Filter, ChevronRight, ShieldCheck } from 'lucide-react';

interface MissionExplorerTabProps {
  lang: Language;
}

export const MissionExplorerTab: React.FC<MissionExplorerTabProps> = ({ lang }) => {
  const [selectedWorld, setSelectedWorld] = useState<MissionWorldId | 'all'>('all');
  const [selectedChallenge, setSelectedChallenge] = useState<ChallengeCard | null>(SAMPLE_CHALLENGES[0]);

  const filteredChallenges = selectedWorld === 'all'
    ? SAMPLE_CHALLENGES
    : SAMPLE_CHALLENGES.filter(c => c.worldId === selectedWorld);

  return (
    <div className="space-y-8">
      {/* World Category Filter Pills */}
      <div>
        <div className="flex items-center gap-2 mb-3">
          <Filter className="w-4 h-4 text-[#C5A36B]" />
          <span className="text-xs font-bold uppercase tracking-wider text-stone-300">
            {lang === 'ar' ? 'تصفية حسب عالم المهمة' : 'Filter by Mission World'}
          </span>
        </div>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setSelectedWorld('all')}
            className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
              selectedWorld === 'all'
                ? 'bg-white text-stone-900 shadow-md font-bold'
                : 'glass-panel text-stone-300 hover:text-white hover:bg-white/10'
            }`}
          >
            {lang === 'ar' ? 'جميع العوالم (6)' : 'All Worlds (6)'}
          </button>
          {MISSION_WORLDS.map((w) => {
            const isSelected = selectedWorld === w.id;
            return (
              <button
                key={w.id}
                onClick={() => setSelectedWorld(w.id)}
                className="px-3 py-1.5 rounded-full text-xs font-semibold transition-all flex items-center gap-1.5 cursor-pointer"
                style={{
                  backgroundColor: isSelected ? w.color : 'rgba(255, 255, 255, 0.05)',
                  color: isSelected ? '#ffffff' : '#d6d3d1',
                  border: `1px solid ${isSelected ? w.color : 'rgba(255, 255, 255, 0.1)'}`
                }}
              >
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: w.color }} />
                <span>{lang === 'ar' ? w.titleAr : w.titleEn}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Grid: Challenges list + Selected challenge deep dive */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Challenge Cards List */}
        <div className="lg:col-span-5 space-y-4">
          <div className="text-xs text-stone-400 font-mono flex items-center justify-between">
            <span>
              {lang === 'ar'
                ? `عرض ${filteredChallenges.length} تحديات ميدانية في قطر`
                : `Showing ${filteredChallenges.length} Field Challenges in Qatar`}
            </span>
            <span className="text-emerald-400 font-semibold">● Ready for Cohorts</span>
          </div>

          <div className="space-y-3">
            {filteredChallenges.map((ch) => {
              const world = MISSION_WORLDS.find(w => w.id === ch.worldId)!;
              const isSelected = selectedChallenge?.id === ch.id;

              return (
                <div
                  key={ch.id}
                  onClick={() => setSelectedChallenge(ch)}
                  className={`p-4 rounded-xl transition-all cursor-pointer border text-start ${
                    isSelected
                      ? 'glass-card-maroon shadow-lg scale-[1.01]'
                      : 'glass-panel hover:bg-white/10 border-white/5'
                  }`}
                  style={{
                    borderColor: isSelected ? world.color : 'rgba(255, 255, 255, 0.08)'
                  }}
                >
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span
                      className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full"
                      style={{
                        backgroundColor: world.accentBg,
                        color: world.color,
                        border: `1px solid ${world.borderColor}`
                      }}
                    >
                      {lang === 'ar' ? world.titleAr : world.titleEn}
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/10 text-stone-300">
                      {ch.difficulty}
                    </span>
                  </div>

                  <h4 className="text-sm font-bold text-white mb-1.5 leading-snug">
                    {lang === 'ar' ? ch.titleAr : ch.titleEn}
                  </h4>

                  <p className="text-xs text-stone-300 line-clamp-2 mb-3">
                    {lang === 'ar' ? ch.summaryAr : ch.summaryEn}
                  </p>

                  <div className="flex items-center justify-between text-[11px] text-stone-400 pt-2 border-t border-white/5">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-[#C5A36B]" />
                      <span className="truncate max-w-[140px]">
                        {lang === 'ar' ? ch.locationAr : ch.locationEn}
                      </span>
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-cyan-400" />
                      <span>{ch.estimatedHours}h</span>
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Selected Challenge Detail Dossier */}
        <div className="lg:col-span-7">
          {selectedChallenge ? (
            <div className="glass-panel p-6 rounded-2xl border border-white/15 space-y-6">
              {/* Header */}
              {(() => {
                const world = MISSION_WORLDS.find(w => w.id === selectedChallenge.worldId)!;
                return (
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <div className="flex items-center gap-2">
                        <span
                          className="px-2.5 py-1 rounded-md text-xs font-bold uppercase"
                          style={{
                            backgroundColor: world.accentBg,
                            color: world.color,
                            border: `1px solid ${world.borderColor}`
                          }}
                        >
                          {lang === 'ar' ? world.titleAr : world.titleEn}
                        </span>
                        <span className="text-xs font-mono text-stone-400">
                          ID: {selectedChallenge.id}
                        </span>
                      </div>
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                        <CheckCircle2 className="w-3 h-3" />
                        {selectedChallenge.status}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-black text-white">
                      {lang === 'ar' ? selectedChallenge.titleAr : selectedChallenge.titleEn}
                    </h3>
                    <p className="text-xs text-stone-400 mt-1">
                      {lang === 'ar' ? world.taglineAr : world.taglineEn}
                    </p>
                  </div>
                );
              })()}

              {/* Core Specs Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 space-y-1">
                  <div className="flex items-center gap-1.5 text-[#C5A36B] font-bold">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{lang === 'ar' ? 'الموقع المقترح في قطر' : 'Proposed Qatar Venue'}</span>
                  </div>
                  <p className="text-stone-200 font-medium">
                    {lang === 'ar' ? selectedChallenge.locationAr : selectedChallenge.locationEn}
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-white/5 border border-white/10 space-y-1">
                  <div className="flex items-center gap-1.5 text-cyan-400 font-bold">
                    <Users className="w-3.5 h-3.5" />
                    <span>{lang === 'ar' ? 'المستفيدون المستهدفون' : 'Target Beneficiaries'}</span>
                  </div>
                  <p className="text-stone-200 font-medium">
                    {lang === 'ar' ? selectedChallenge.beneficiariesAr : selectedChallenge.beneficiariesEn}
                  </p>
                </div>
              </div>

              {/* Problem & Strategic Relevance */}
              <div className="space-y-3 text-sm">
                <div>
                  <h4 className="text-xs font-bold uppercase text-stone-400 tracking-wider mb-1">
                    {lang === 'ar' ? 'وصف التحدي الميداني' : 'Field Challenge Statement'}
                  </h4>
                  <p className="text-stone-200 leading-relaxed">
                    {lang === 'ar' ? selectedChallenge.summaryAr : selectedChallenge.summaryEn}
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-[#8A1538]/15 border border-[#8A1538]/30">
                  <h4 className="text-xs font-bold text-amber-300 uppercase tracking-wider mb-1">
                    {lang === 'ar' ? 'الجهة المحلية المقترحة للشراكة' : 'Proposed Local Partner Entity'}
                  </h4>
                  <p className="text-xs text-stone-200">
                    {lang === 'ar' ? selectedChallenge.partnerAr : selectedChallenge.partnerEn}
                  </p>
                </div>
              </div>

              {/* Tangible Deliverables List */}
              <div>
                <h4 className="text-xs font-bold uppercase text-stone-400 tracking-wider mb-2">
                  {lang === 'ar' ? 'المخرجات الملموسة المطلوبة من الفريق' : 'Required Tangible Deliverables'}
                </h4>
                <ul className="space-y-2">
                  {(lang === 'ar' ? selectedChallenge.deliverablesAr : selectedChallenge.deliverablesEn).map((del, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-stone-200">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C5A36B] mt-1.5 shrink-0" />
                      <span>{del}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Verification Criteria */}
              <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-500/30">
                <div className="flex items-center gap-2 mb-2 text-emerald-400 text-xs font-bold uppercase tracking-wider">
                  <ShieldCheck className="w-4 h-4" />
                  <span>{lang === 'ar' ? 'معايير التدقيق والاعتماد الإلزامية' : 'Mandatory Verification Criteria'}</span>
                </div>
                <ul className="space-y-1.5">
                  {(lang === 'ar' ? selectedChallenge.verificationCriteriaAr : selectedChallenge.verificationCriteriaEn).map((crit, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-stone-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{crit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ) : (
            <div className="h-full flex items-center justify-center p-12 glass-panel rounded-2xl text-stone-400 text-sm">
              {lang === 'ar' ? 'اختر تحدياً من القائمة للاطلاع على التفاصيل' : 'Select a challenge from the list to view specifications'}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
