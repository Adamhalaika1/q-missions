import React, { useState } from 'react';
import { Language, MissionPlan, MissionWorldId } from '../../types';
import { MISSION_WORLDS } from '../../data/missionsData';
import { generateStructuredMissionPlan } from '../../utils/missionEngine';
import { Sparkles, Copy, Check, Download, Layers, Shield, Calendar, Users, Sliders, ArrowRight } from 'lucide-react';

interface MissionPlannerTabProps {
  lang: Language;
}

export const MissionPlannerTab: React.FC<MissionPlannerTabProps> = ({ lang }) => {
  const [worldId, setWorldId] = useState<MissionWorldId>('move_together');
  const [challengeType, setChallengeType] = useState('Unified Recreational Play & Mobility Audit');
  const [targetAudience, setTargetAudience] = useState('Youth with sensory impairments & community athletes');
  const [teamSize, setTeamSize] = useState(6);
  const [durationHours, setDurationHours] = useState(36);
  const [selectedResources, setSelectedResources] = useState<string[]>([
    'Indoor sports facility reservation',
    'Adaptive acoustic equipment',
    'Bilingual referee facilitators',
    'Hydration & medical standby'
  ]);
  const [selectedAccessibility, setSelectedAccessibility] = useState<string[]>([
    'Wheelchair ramped entry',
    'Tactile floor markings',
    'Audio description guides',
    'Sensory quiet rest zone'
  ]);

  const [generatedPlan, setGeneratedPlan] = useState<MissionPlan>(() =>
    generateStructuredMissionPlan({
      worldId: 'move_together',
      challengeType: 'Unified Recreational Play & Mobility Audit',
      targetAudience: 'Youth with sensory impairments & community athletes',
      teamSize: 6,
      durationHours: 36,
      resources: [
        'Indoor sports facility reservation',
        'Adaptive acoustic equipment',
        'Bilingual referee facilitators',
        'Hydration & medical standby'
      ],
      accessibilityFeatures: [
        'Wheelchair ramped entry',
        'Tactile floor markings',
        'Audio description guides',
        'Sensory quiet rest zone'
      ]
    })
  );

  const [copied, setCopied] = useState(false);

  const handleGenerate = (e: React.FormEvent) => {
    e.preventDefault();
    const plan = generateStructuredMissionPlan({
      worldId,
      challengeType,
      targetAudience,
      teamSize,
      durationHours,
      resources: selectedResources,
      accessibilityFeatures: selectedAccessibility
    });
    setGeneratedPlan(plan);
  };

  const handleCopy = () => {
    const text = JSON.stringify(generatedPlan, null, 2);
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const currentWorld = MISSION_WORLDS.find(w => w.id === worldId)!;

  return (
    <div className="space-y-8">
      {/* Intro Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-5 rounded-2xl glass-panel border border-[#C5A36B]/25">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2.5 h-2.5 rounded-full bg-[#C5A36B] animate-ping" />
            <h3 className="text-lg font-bold text-white">
              {lang === 'ar' ? 'مخطط المهمات الميدانية التفاعلي' : 'Interactive Mission Blueprint Planner'}
            </h3>
          </div>
          <p className="text-xs text-stone-300 max-w-2xl">
            {lang === 'ar'
              ? 'صمم بنفسك معالم ومخرجات أي مهمة مجتمعية خاضعة للتدقيق. يولد المحرك خطة تنفيذية فورية مع محطات السلامة والاعتماد.'
              : 'Configure parameters to synthesize an actionable mission blueprint complete with daily milestones, safeguarding protocols, and verification gates.'}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[11px] font-mono px-3 py-1 rounded bg-[#8A1538]/30 border border-[#8A1538] text-amber-200">
            Engine: Deterministic Q-Core
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Inputs Form */}
        <form onSubmit={handleGenerate} className="lg:col-span-5 glass-panel p-6 rounded-2xl border border-white/10 space-y-5">
          <h4 className="text-sm font-bold text-white flex items-center gap-2 pb-3 border-b border-white/10">
            <Sliders className="w-4 h-4 text-[#C5A36B]" />
            <span>{lang === 'ar' ? 'معايير ومدخلات المهمة' : 'Mission Input Parameters'}</span>
          </h4>

          {/* World Selector */}
          <div>
            <label className="block text-xs font-semibold text-stone-300 mb-1.5">
              {lang === 'ar' ? 'عالم المهمة' : 'Mission World Category'}
            </label>
            <select
              value={worldId}
              onChange={(e) => setWorldId(e.target.value as MissionWorldId)}
              className="w-full bg-[#0d141e] border border-white/20 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-[#C5A36B]"
            >
              {MISSION_WORLDS.map((w) => (
                <option key={w.id} value={w.id}>
                  {lang === 'ar' ? w.titleAr : w.titleEn}
                </option>
              ))}
            </select>
          </div>

          {/* Challenge Type */}
          <div>
            <label className="block text-xs font-semibold text-stone-300 mb-1.5">
              {lang === 'ar' ? 'نوع التحدي المقترح' : 'Challenge Focus Topic'}
            </label>
            <input
              type="text"
              value={challengeType}
              onChange={(e) => setChallengeType(e.target.value)}
              className="w-full bg-[#0d141e] border border-white/20 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-[#C5A36B]"
              placeholder="e.g. Grassroots tournament without single-use plastic"
            />
          </div>

          {/* Target Population */}
          <div>
            <label className="block text-xs font-semibold text-stone-300 mb-1.5">
              {lang === 'ar' ? 'الفئة المستفيدة في المجتمع' : 'Target Community Beneficiaries'}
            </label>
            <input
              type="text"
              value={targetAudience}
              onChange={(e) => setTargetAudience(e.target.value)}
              className="w-full bg-[#0d141e] border border-white/20 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-[#C5A36B]"
              placeholder="e.g. Senior citizens and youth grandchildren"
            />
          </div>

          {/* Sliders: Team Size & Duration */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <div className="flex justify-between text-xs text-stone-300 mb-1 font-semibold">
                <span>{lang === 'ar' ? 'حجم الفرقة' : 'Team Size'}</span>
                <span className="text-[#C5A36B] font-mono">{teamSize} delegates</span>
              </div>
              <input
                type="range"
                min="4"
                max="10"
                value={teamSize}
                onChange={(e) => setTeamSize(Number(e.target.value))}
                className="w-full accent-[#8A1538]"
              />
            </div>

            <div>
              <div className="flex justify-between text-xs text-stone-300 mb-1 font-semibold">
                <span>{lang === 'ar' ? 'المدة الزمنية' : 'Duration'}</span>
                <span className="text-cyan-400 font-mono">{durationHours}h</span>
              </div>
              <input
                type="range"
                min="12"
                max="48"
                step="6"
                value={durationHours}
                onChange={(e) => setDurationHours(Number(e.target.value))}
                className="w-full accent-cyan-400"
              />
            </div>
          </div>

          {/* Accessibility Requirements */}
          <div>
            <label className="block text-xs font-semibold text-stone-300 mb-1.5">
              {lang === 'ar' ? 'شروط إتاحة الوصول والتصميم الشامل' : 'Accessibility & Inclusion Protocols'}
            </label>
            <div className="grid grid-cols-2 gap-2 text-[11px]">
              {[
                'Wheelchair ramped entry',
                'Tactile floor markings',
                'Audio description guides',
                'Sensory quiet rest zone',
                'Bilingual sign language',
                'Large-print materials'
              ].map((feat) => {
                const checked = selectedAccessibility.includes(feat);
                return (
                  <label
                    key={feat}
                    className={`flex items-center gap-1.5 p-2 rounded border cursor-pointer ${
                      checked ? 'bg-[#8A1538]/20 border-[#8A1538] text-amber-200' : 'bg-white/5 border-white/10 text-stone-300'
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={checked}
                      onChange={() => {
                        if (checked) {
                          setSelectedAccessibility(selectedAccessibility.filter(f => f !== feat));
                        } else {
                          setSelectedAccessibility([...selectedAccessibility, feat]);
                        }
                      }}
                      className="accent-[#8A1538]"
                    />
                    <span className="truncate">{feat}</span>
                  </label>
                );
              })}
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3 px-4 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-[#8A1538] to-[#9c1840] hover:from-[#9c1840] hover:to-[#b81e4d] shadow-lg shadow-[#8A1538]/30 flex items-center justify-center gap-2 cursor-pointer transition-all"
          >
            <Sparkles className="w-4 h-4 text-amber-300" />
            <span>{lang === 'ar' ? 'توليد المخطط التنفيذي للمهمة' : 'Synthesize Mission Blueprint'}</span>
          </button>
        </form>

        {/* Right Output Blueprint */}
        <div className="lg:col-span-7 space-y-4">
          <div className="glass-panel p-6 rounded-2xl border border-white/15 space-y-6">
            {/* Blueprint Header */}
            <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-white/10">
              <div>
                <span className="text-[10px] font-mono font-bold text-[#C5A36B] uppercase tracking-wider">
                  {lang === 'ar' ? 'مخطط تشغيلي معتمد' : 'Operational Blueprint Specification'}
                </span>
                <h3 className="text-xl font-bold text-white">{generatedPlan.title}</h3>
                <p className="text-xs text-stone-400 font-mono mt-0.5">
                  Plan ID: {generatedPlan.id} | Status: Ready for Field Dispatch
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleCopy}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-white/10 hover:bg-white/15 text-stone-200 transition-all cursor-pointer"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? (lang === 'ar' ? 'تم النسخ!' : 'Copied!') : (lang === 'ar' ? 'نسخ JSON' : 'Copy JSON')}</span>
                </button>
              </div>
            </div>

            {/* Quick Metrics */}
            <div className="grid grid-cols-3 gap-3 text-center">
              <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                <span className="text-[10px] uppercase text-stone-400 block font-semibold">
                  {lang === 'ar' ? 'فريق العمل' : 'Squad Size'}
                </span>
                <span className="text-base font-bold text-amber-300 font-mono">
                  {generatedPlan.teamSize} Members
                </span>
              </div>
              <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                <span className="text-[10px] uppercase text-stone-400 block font-semibold">
                  {lang === 'ar' ? 'المدة الميدانية' : 'Field Duration'}
                </span>
                <span className="text-base font-bold text-cyan-300 font-mono">
                  {generatedPlan.durationHours} Hours
                </span>
              </div>
              <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                <span className="text-[10px] uppercase text-stone-400 block font-semibold">
                  {lang === 'ar' ? 'شروط الوصول' : 'Access Protocols'}
                </span>
                <span className="text-base font-bold text-emerald-300 font-mono">
                  {generatedPlan.accessibilityFeatures.length} Standards
                </span>
              </div>
            </div>

            {/* Daily Milestones */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-stone-300 flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-[#C5A36B]" />
                <span>{lang === 'ar' ? 'المراحل والمخرجات اليومية' : 'Daily Milestones & Progressive Gates'}</span>
              </h4>
              <div className="space-y-2.5">
                {generatedPlan.milestones.map((m) => (
                  <div key={m.day} className="p-3 rounded-xl bg-white/5 border border-white/5 text-xs flex items-start gap-3">
                    <span className="px-2 py-0.5 rounded bg-[#8A1538] text-white font-mono font-bold shrink-0">
                      Day {m.day}
                    </span>
                    <div className="space-y-0.5">
                      <p className="font-bold text-stone-200">{m.title}</p>
                      <p className="text-stone-400 text-[11px] leading-relaxed">{m.output}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Safeguarding Plan */}
            <div className="p-4 rounded-xl bg-amber-950/20 border border-amber-500/30 space-y-1">
              <div className="flex items-center gap-1.5 text-xs font-bold uppercase text-amber-300">
                <Shield className="w-4 h-4" />
                <span>{lang === 'ar' ? 'ميثاق السلامة والحماية الميدانية' : 'Safeguarding & Risk Mitigation Protocol'}</span>
              </div>
              <p className="text-xs text-stone-300 leading-relaxed">
                {generatedPlan.safeguardingPlan}
              </p>
            </div>

            {/* Expected Verifiable Outputs */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-stone-300">
                {lang === 'ar' ? 'المخرجات المعتمدة للتسليم' : 'Primary Verifiable Deliverables'}
              </h4>
              <ul className="space-y-1.5 text-xs text-stone-300">
                {generatedPlan.expectedOutputs.map((out, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>{out}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
