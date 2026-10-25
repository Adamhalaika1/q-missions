import React, { useState } from 'react';
import { Language } from '../../types';
import { DECISION_PATHWAYS, GOVERNANCE_UNITS, RISK_MATRIX } from '../../data/governanceAndRisk';
import { ShieldCheck, AlertTriangle, ArrowRight, CheckCircle2, ChevronRight, Layers, FileCheck, Users, Sparkles } from 'lucide-react';

interface GovernanceTabProps {
  lang: Language;
  onExplorePilot: () => void;
  onMeetTeam: () => void;
}

export const GovernanceTab: React.FC<GovernanceTabProps> = ({
  lang,
  onExplorePilot,
  onMeetTeam
}) => {
  const [subTab, setSubTab] = useState<'governance' | 'risk' | 'pathways'>('pathways');
  const [riskCategoryFilter, setRiskCategoryFilter] = useState<string>('all');

  const filteredRisks = riskCategoryFilter === 'all'
    ? RISK_MATRIX
    : RISK_MATRIX.filter(r => r.category === riskCategoryFilter);

  return (
    <div className="space-y-8">
      {/* Sub-navigation buttons */}
      <div className="flex border-b border-white/10 gap-3 text-xs font-bold">
        <button
          onClick={() => setSubTab('pathways')}
          className={`pb-3 px-3 border-b-2 transition-all cursor-pointer ${
            subTab === 'pathways'
              ? 'border-[#C5A36B] text-amber-300 font-extrabold'
              : 'border-transparent text-stone-400 hover:text-stone-200'
          }`}
        >
          {lang === 'ar' ? 'مسارات القرار المؤسسي (3 مسارات)' : 'Institutional Decision Pathways (3)'}
        </button>

        <button
          onClick={() => setSubTab('governance')}
          className={`pb-3 px-3 border-b-2 transition-all cursor-pointer ${
            subTab === 'governance'
              ? 'border-[#C5A36B] text-amber-300 font-extrabold'
              : 'border-transparent text-stone-400 hover:text-stone-200'
          }`}
        >
          {lang === 'ar' ? 'هيكل الحوكمة المقترح للوزارة' : 'Proposed Ministry Governance Architecture'}
        </button>

        <button
          onClick={() => setSubTab('risk')}
          className={`pb-3 px-3 border-b-2 transition-all cursor-pointer ${
            subTab === 'risk'
              ? 'border-[#C5A36B] text-amber-300 font-extrabold'
              : 'border-transparent text-stone-400 hover:text-stone-200'
          }`}
        >
          {lang === 'ar' ? 'مصفوفة الحماية وإدارة المخاطر (10)' : 'Safeguarding & Risk Management Matrix (10)'}
        </button>
      </div>

      {/* Sub-tab 1: Pathways */}
      {subTab === 'pathways' && (
        <div className="space-y-6">
          <div className="p-4 rounded-2xl glass-panel border border-[#C5A36B]/30 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <span className="text-[10px] font-mono font-bold text-[#C5A36B] uppercase">
                {lang === 'ar' ? 'خارطة طريق مدروسة ومنخفضة المخاطر' : 'Pragmatic, Low-Risk Progressive Engagement'}
              </span>
              <h3 className="text-base font-bold text-white mt-0.5">
                {lang === 'ar' ? 'من الفكرة إلى التطبيق: ثلاثة مسارات لاعتماد المبادرة' : 'From Concept to Consideration: Three Realistic Next Steps'}
              </h3>
            </div>
            <button
              onClick={onExplorePilot}
              className="px-4 py-2 rounded-xl text-xs font-bold text-white bg-[#8A1538] hover:bg-[#9c1840] border border-[#C5A36B]/40 shadow-lg cursor-pointer transition-all self-start sm:self-auto"
            >
              {lang === 'ar' ? 'استكشف نسخة تجريبية لقطر' : 'Explore a Q-MISSIONS Pilot for Qatar'}
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {DECISION_PATHWAYS.map((p) => (
              <div
                key={p.id}
                className="glass-panel p-6 rounded-2xl border border-white/10 space-y-4 flex flex-col justify-between hover:border-[#C5A36B]/40 transition-all"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-[#8A1538] text-white">
                      PATHWAY {p.number}
                    </span>
                    <span className="text-xs font-mono text-stone-400">{p.timelineEn}</span>
                  </div>

                  <h4 className="text-base font-bold text-white leading-snug">
                    {lang === 'ar' ? p.titleAr : p.titleEn}
                  </h4>

                  <p className="text-xs text-stone-300 leading-relaxed">
                    {lang === 'ar' ? p.objectiveAr : p.objectiveEn}
                  </p>

                  <div className="space-y-2 pt-2 border-t border-white/5 text-xs text-stone-300">
                    <div>
                      <strong className="text-amber-300 text-[11px] block uppercase font-mono">
                        {lang === 'ar' ? 'المخرج المتوقع' : 'Expected Deliverable'}
                      </strong>
                      <span className="text-[11px] text-stone-200">
                        {lang === 'ar' ? p.expectedDeliverableAr : p.expectedDeliverableEn}
                      </span>
                    </div>

                    <div>
                      <strong className="text-stone-400 text-[11px] block uppercase font-mono">
                        {lang === 'ar' ? 'معيار القرار والاعتماد' : 'Decision Criteria'}
                      </strong>
                      <span className="text-[11px] text-stone-300">
                        {lang === 'ar' ? p.decisionCriteriaAr : p.decisionCriteriaEn}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-white/5">
                  <span className="text-[10px] font-mono text-cyan-300 block">
                    {lang === 'ar' ? p.resourceAssumptionsAr : p.resourceAssumptionsEn}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Sub-tab 2: Governance Units */}
      {subTab === 'governance' && (
        <div className="space-y-4">
          <p className="text-xs text-stone-300">
            {lang === 'ar'
              ? 'يقترح هذا النموذج المؤسسي قيادة استراتيجية كاملة لوزارة الرياضة والشباب، مع توزيع المهام الميدانية والتقنية على وحدات تشغيلية محددة المسؤوليات:'
              : 'This proposed framework positions the Ministry of Sports and Youth as the sovereign strategic lead, supported by dedicated operational and technical units:'}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {GOVERNANCE_UNITS.map((unit) => (
              <div key={unit.id} className="glass-panel p-5 rounded-2xl border border-white/10 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold text-[#C5A36B] uppercase">
                    {unit.reportingLineEn}
                  </span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-white/5 text-stone-400 font-mono">
                    {unit.id.toUpperCase()}
                  </span>
                </div>

                <h4 className="text-base font-bold text-white">
                  {lang === 'ar' ? unit.nameAr : unit.nameEn}
                </h4>

                <p className="text-xs text-stone-300 leading-relaxed">
                  {lang === 'ar' ? unit.roleAr : unit.roleEn}
                </p>

                <div className="space-y-1.5 pt-2 border-t border-white/5">
                  <span className="text-[10px] font-bold uppercase text-stone-400 block">
                    {lang === 'ar' ? 'المسؤوليات الأساسية' : 'Core Mandates'}
                  </span>
                  <ul className="space-y-1 text-xs text-stone-300">
                    {(lang === 'ar' ? unit.responsibilitiesAr : unit.responsibilitiesEn).map((resp, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#8A1538] mt-1.5 shrink-0" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-xs text-stone-300 flex items-start gap-2">
            <Sparkles className="w-4 h-4 text-amber-300 shrink-0 mt-0.5" />
            <span>
              {lang === 'ar'
                ? 'إفصاح الحوكمة: يقدم الفريق المستقل المقترح للوزارة للمواءمة، ويمكن للفريق تقديم خدمات الدعم الفني والاستشاري عبر اتفاقيات منفصلة وفق اللوائح المتبعة دون أي افتراض لعقد حصري.'
                : 'Governance Notice: The proposing multidisciplinary team presents this architecture for review. Any future advisory or engineering services would be structured under separate, authorized government procurement mechanisms.'}
            </span>
          </div>
        </div>
      )}

      {/* Sub-tab 3: Risk Matrix */}
      {subTab === 'risk' && (
        <div className="space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2 pb-2">
            <div className="flex flex-wrap gap-1.5 text-xs">
              {['all', 'Safety & Health', 'Safeguarding', 'Operations', 'Governance & Ethics', 'Financial & Continuity'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setRiskCategoryFilter(cat)}
                  className={`px-3 py-1 rounded-full text-xs font-semibold cursor-pointer border transition-all ${
                    riskCategoryFilter === cat
                      ? 'bg-amber-400 text-stone-950 border-amber-300 font-bold'
                      : 'bg-white/5 text-stone-300 border-white/10 hover:text-white'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <span className="text-xs text-stone-400 font-mono">
              Showing {filteredRisks.length} Risk Factors
            </span>
          </div>

          <div className="space-y-3">
            {filteredRisks.map((r) => (
              <div
                key={r.id}
                className="glass-panel p-4 rounded-xl border border-white/10 text-xs space-y-2 hover:border-white/20 transition-all"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded bg-white/10 font-mono text-[10px] text-stone-300 font-bold">
                      {r.category}
                    </span>
                    <span className="font-bold text-white text-sm">
                      {lang === 'ar' ? r.riskAr : r.riskEn}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 font-mono text-[10px]">
                    <span className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-300">
                      Likelihood: {r.likelihood}
                    </span>
                    <span className="px-2 py-0.5 rounded bg-rose-500/20 text-rose-300">
                      Impact: {r.impact}
                    </span>
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-emerald-950/20 border border-emerald-500/30 text-stone-200">
                  <strong className="text-emerald-400 font-bold block mb-0.5 uppercase tracking-wider text-[10px]">
                    {lang === 'ar' ? 'إجراءات الوقاية والسيطرة' : 'Mitigation Action Protocol'}
                  </strong>
                  <p className="leading-relaxed">
                    {lang === 'ar' ? r.mitigationAr : r.mitigationEn}
                  </p>
                </div>

                <div className="text-[11px] text-stone-400 pt-1 flex justify-between">
                  <span>
                    <strong>{lang === 'ar' ? 'المسؤول المقترح:' : 'Proposed Owner:'}</strong>{' '}
                    {lang === 'ar' ? r.proposedOwnerAr : r.proposedOwnerEn}
                  </span>
                  <span className="text-stone-500 font-mono">ID: {r.id}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
