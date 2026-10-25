import React, { useState } from 'react';
import { Language, MissionWorld } from '../types';
import { MISSION_WORLDS } from '../data/missionsData';
import {
  Activity,
  HeartPulse,
  Globe,
  Users,
  Leaf,
  Smile,
  MapPin,
  CheckCircle2,
  ChevronRight,
  ShieldCheck,
  Sparkles
} from 'lucide-react';

interface MissionWorldsSectionProps {
  lang: Language;
  onSelectWorldForPlanner: (worldId: string) => void;
}

export const MissionWorldsSection: React.FC<MissionWorldsSectionProps> = ({
  lang,
  onSelectWorldForPlanner
}) => {
  const [activeWorldId, setActiveWorldId] = useState<string>(MISSION_WORLDS[0].id);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Activity': return Activity;
      case 'HeartPulse': return HeartPulse;
      case 'Globe': return Globe;
      case 'Users': return Users;
      case 'Leaf': return Leaf;
      case 'Smile': return Smile;
      default: return Activity;
    }
  };

  const selectedWorld = MISSION_WORLDS.find(w => w.id === activeWorldId) || MISSION_WORLDS[0];
  const ActiveIcon = getIcon(selectedWorld.iconName);

  return (
    <section id="worlds" className="py-24 bg-[#0d141e] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-panel border border-[#8A1538]/40 text-xs text-amber-300 font-mono">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A36B]" />
            <span>{lang === 'ar' ? 'المحاور التخصصية الستة' : 'Six Signature Action Arenas'}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            {lang === 'ar' ? 'عوالم المهمات الشبابية' : 'Six Signature Mission Worlds'}
          </h2>

          <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
            {lang === 'ar'
              ? 'صممت العوالم الستة لتغطي الركائز الحيوية للتنمية المجتمعية والرياضية في قطر: من الألعاب التكيفية والنشاط البدني، إلى الاستدامة والتضامن بين الأجيال.'
              : 'Each world addresses a critical frontier of youth development, sports accessibility, and community flourishing, anchored at iconic Qatari hubs.'}
          </p>
        </div>

        {/* Worlds Selector Carousel / Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-10">
          {MISSION_WORLDS.map((world) => {
            const Icon = getIcon(world.iconName);
            const isSelected = activeWorldId === world.id;

            return (
              <button
                key={world.id}
                onClick={() => setActiveWorldId(world.id)}
                className={`p-4 rounded-2xl text-start transition-all cursor-pointer border flex flex-col items-center sm:items-start ${
                  isSelected
                    ? 'glass-card-maroon shadow-xl scale-[1.03]'
                    : 'glass-panel hover:bg-white/10 border-white/5 text-stone-300'
                }`}
                style={{
                  borderColor: isSelected ? world.color : 'rgba(255, 255, 255, 0.08)'
                }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-2"
                  style={{
                    backgroundColor: world.accentBg,
                    color: world.color
                  }}
                >
                  <Icon className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-mono font-bold text-stone-400 block">
                  WORLD 0{MISSION_WORLDS.indexOf(world) + 1}
                </span>
                <h4 className="text-xs font-bold text-white mt-0.5 text-center sm:text-start leading-snug">
                  {lang === 'ar' ? world.titleAr : world.titleEn}
                </h4>
              </button>
            );
          })}
        </div>

        {/* Selected World Spotlight Card */}
        <div className="glass-panel p-6 sm:p-10 rounded-3xl border border-white/15 relative overflow-hidden shadow-2xl">
          <div
            className="absolute -top-24 -right-24 w-80 h-80 rounded-full blur-3xl pointer-events-none opacity-20"
            style={{ backgroundColor: selectedWorld.color }}
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-10">
            {/* Left Narrative */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span
                    className="px-2.5 py-1 rounded-md text-xs font-bold uppercase tracking-wider"
                    style={{
                      backgroundColor: selectedWorld.accentBg,
                      color: selectedWorld.color,
                      border: `1px solid ${selectedWorld.borderColor}`
                    }}
                  >
                    {lang === 'ar' ? selectedWorld.titleAr : selectedWorld.titleEn}
                  </span>
                  <span className="text-xs text-stone-400 font-mono">
                    Venue: {selectedWorld.qatarVenueEn.split(',')[0]}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-white">
                  {lang === 'ar' ? selectedWorld.taglineAr : selectedWorld.taglineEn}
                </h3>
              </div>

              {/* Core Question Box */}
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1">
                <span className="text-[10px] uppercase font-bold text-[#C5A36B] tracking-wider block">
                  {lang === 'ar' ? 'السؤال الجوهري للتحدي' : 'The Central Mission Inquiry'}
                </span>
                <p className="text-sm font-semibold text-stone-100 italic leading-relaxed">
                  "{lang === 'ar' ? selectedWorld.coreQuestionAr : selectedWorld.coreQuestionEn}"
                </p>
              </div>

              {/* Sample Activities */}
              <div>
                <h4 className="text-xs font-bold uppercase text-stone-400 tracking-wider mb-3">
                  {lang === 'ar' ? 'أمثلة الأنشطة والتدريبات الميدانية' : 'Sample Field Activities & Drills'}
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
                  {(lang === 'ar' ? selectedWorld.activitiesAr : selectedWorld.activitiesEn).map((act, i) => (
                    <div key={i} className="p-3 rounded-lg bg-white/5 border border-white/5 text-stone-200 flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0" style={{ backgroundColor: selectedWorld.color }} />
                      <span>{act}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Strategic & Operational Dossier */}
            <div className="lg:col-span-5 space-y-4">
              {/* Deliverable Box */}
              <div className="p-5 rounded-2xl bg-gradient-to-br from-[#8A1538]/20 to-[#111d2d] border border-[#8A1538]/40 space-y-2">
                <span className="text-[10px] font-bold uppercase text-amber-300 font-mono block">
                  {lang === 'ar' ? 'المخرج المعتمد للدولة' : 'Verified State Output'}
                </span>
                <h4 className="text-sm font-bold text-white">
                  {lang === 'ar' ? selectedWorld.deliverableAr : selectedWorld.deliverableEn}
                </h4>
                <p className="text-xs text-stone-300">
                  {lang === 'ar' ? selectedWorld.strategicRelevanceAr : selectedWorld.strategicRelevanceEn}
                </p>
              </div>

              {/* Qatar Venue & Target Beneficiaries */}
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2 text-xs">
                <div className="flex items-center gap-1.5 text-[#C5A36B] font-bold">
                  <MapPin className="w-4 h-4" />
                  <span>{lang === 'ar' ? selectedWorld.qatarVenueAr : selectedWorld.qatarVenueEn}</span>
                </div>
                <p className="text-stone-300 text-[11px]">
                  <strong>{lang === 'ar' ? 'المستفيدون:' : 'Target Beneficiaries:'}</strong>{' '}
                  {lang === 'ar' ? selectedWorld.targetBeneficiariesAr : selectedWorld.targetBeneficiariesEn}
                </p>
              </div>

              {/* Safety Safeguards */}
              <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-500/30 space-y-1.5 text-xs">
                <div className="flex items-center gap-1.5 text-emerald-400 font-bold uppercase text-[10px]">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>{lang === 'ar' ? 'بروتوكولات السلامة الميدانية الإلزامية' : 'Mandatory Safety Gates'}</span>
                </div>
                <ul className="space-y-1 text-stone-300 text-[11px]">
                  {(lang === 'ar' ? selectedWorld.safetySafeguardsAr : selectedWorld.safetySafeguardsEn).map((sf, idx) => (
                    <li key={idx} className="flex items-start gap-1.5">
                      <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{sf}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={() => onSelectWorldForPlanner(selectedWorld.id)}
                className="w-full py-3 px-4 rounded-xl text-xs font-bold text-white bg-white/10 hover:bg-white/15 border border-white/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>{lang === 'ar' ? 'تخطيط مهمة في هذا العالم' : 'Plan a Mission in this World'}</span>
                <ChevronRight className="w-4 h-4 text-[#C5A36B]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
