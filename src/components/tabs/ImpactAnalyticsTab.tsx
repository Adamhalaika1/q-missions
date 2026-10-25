import React from 'react';
import { Language } from '../../types';
import { TrendingUp, Users, HeartPulse, ShieldCheck, Leaf, Sparkles, CheckCircle2 } from 'lucide-react';

interface ImpactAnalyticsTabProps {
  lang: Language;
}

export const ImpactAnalyticsTab: React.FC<ImpactAnalyticsTabProps> = ({ lang }) => {
  const metricCards = [
    {
      titleEn: 'Supervised Active Movement Hours',
      titleAr: 'ساعات النشاط البدني المشرف عليها',
      target: '3,200 hrs',
      actual: '3,840 hrs',
      achievement: '120%',
      type: 'Verified Pilot Telemetry',
      icon: HeartPulse,
      color: '#0EA5E9'
    },
    {
      titleEn: 'Community Beneficiaries Engaged',
      titleAr: 'المستفيدون المباشرون من الأنشطة',
      target: '650 youth',
      actual: '812 youth',
      achievement: '125%',
      type: 'Audited Roster Slips',
      icon: Users,
      color: '#8A1538'
    },
    {
      titleEn: 'Single-Use Plastic Diverted from Landfill',
      titleAr: 'النفايات البلاستيكية المحولة عن المرادم',
      target: '250 kg',
      actual: '314 kg',
      achievement: '126%',
      type: 'Municipal Scale Slips',
      icon: Leaf,
      color: '#16A34A'
    },
    {
      titleEn: 'Field Safety Incident Rate',
      titleAr: 'معدل الحوادث الميدانية والإصابات',
      target: 'Zero',
      actual: 'Zero Incidents',
      achievement: '100% Cleared',
      type: 'Medical Officer Signoff',
      icon: ShieldCheck,
      color: '#C5A36B'
    }
  ];

  return (
    <div className="space-y-8">
      {/* Disclaimer on Demonstration Data */}
      <div className="p-3 px-4 rounded-xl bg-amber-500/10 border border-amber-500/30 text-xs text-amber-200 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
          <span>
            {lang === 'ar'
              ? 'مؤشرات توضيحية لنموذج القياس — تفصل بوضوح بين المستهدفات المخططة والنتائج التجريبية والتقديرات المعتمدة.'
              : 'Illustrative Analytics Dashboard — Demonstrating rigorous distinction between planned targets, demo telemetry, and certified audits.'}
          </span>
        </div>
        <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-amber-500/20 text-amber-300">
          DATA AUDITED
        </span>
      </div>

      {/* KPI Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {metricCards.map((mc, idx) => {
          const Icon = mc.icon;
          return (
            <div key={idx} className="glass-panel p-5 rounded-2xl border border-white/10 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono uppercase text-stone-400">
                  {mc.type}
                </span>
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: `${mc.color}25`, color: mc.color }}
                >
                  <Icon className="w-4 h-4" />
                </div>
              </div>

              <div>
                <h4 className="text-xs font-semibold text-stone-300">
                  {lang === 'ar' ? mc.titleAr : mc.titleEn}
                </h4>
                <div className="text-2xl font-black text-white font-mono mt-1">
                  {mc.actual}
                </div>
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-white/5 text-[11px] text-stone-400">
                <span>Target: {mc.target}</span>
                <span className="text-emerald-400 font-mono font-bold">{mc.achievement}</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Detailed Impact Breakdown Matrix */}
      <div className="glass-panel p-6 rounded-2xl border border-white/10 space-y-6">
        <div className="flex items-center justify-between pb-3 border-b border-white/10">
          <h3 className="text-base font-bold text-white flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-[#C5A36B]" />
            <span>
              {lang === 'ar' ? 'مصفوفة التمايز بين الأنشطة والمخرجات والأثر' : 'Evidence Framework: Activities vs Outputs vs Outcomes'}
            </span>
          </h3>
          <span className="text-xs text-stone-400 font-mono">Q-Impact Framework</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
          {/* Level 1 */}
          <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2">
            <span className="text-[10px] font-mono text-cyan-400 font-bold uppercase block">
              Level 1: Activity Logs
            </span>
            <h4 className="text-sm font-bold text-white">
              {lang === 'ar' ? 'الأنشطة الميدانية المباشرة' : 'Direct Field Activities'}
            </h4>
            <p className="text-stone-300 leading-relaxed text-[11px]">
              {lang === 'ar'
                ? 'تنفيذ ورش العمل، التمارين الرياضية التكيفية، وتنظيم جولات المشي الحركي في المنشآت المعتمدة.'
                : 'Controlled execution of sports drills, accessibility audits, and waste monitoring during event days.'}
            </p>
            <span className="text-[10px] text-emerald-400 font-mono block pt-2">
              Verified by: GPS & Time Slips
            </span>
          </div>

          {/* Level 2 */}
          <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2">
            <span className="text-[10px] font-mono text-amber-400 font-bold uppercase block">
              Level 2: Tangible Outputs
            </span>
            <h4 className="text-sm font-bold text-white">
              {lang === 'ar' ? 'المخرجات الملموسة المسلّمة' : 'Tangible Physical Assets'}
            </h4>
            <p className="text-stone-300 leading-relaxed text-[11px]">
              {lang === 'ar'
                ? 'أدلة التدريب المطبوعة، كرات البوتشيا الصوتية المهداة، وملصقات مسارات المشي في المترو.'
                : 'Completed operational playbooks, donated adaptive sports kits, and published route signage.'}
            </p>
            <span className="text-[10px] text-emerald-400 font-mono block pt-2">
              Verified by: Host Acceptance Letters
            </span>
          </div>

          {/* Level 3 */}
          <div className="p-4 rounded-xl bg-[#8A1538]/20 border border-[#8A1538]/40 space-y-2">
            <span className="text-[10px] font-mono text-emerald-400 font-bold uppercase block">
              Level 3: Verified Outcomes
            </span>
            <h4 className="text-sm font-bold text-white">
              {lang === 'ar' ? 'الأثر السلوكي والمجتمعي' : 'Behavioral & Systemic Impact'}
            </h4>
            <p className="text-stone-300 leading-relaxed text-[11px]">
              {lang === 'ar'
                ? 'زيادة نسبة ممارسة الرياضة لذوي الإعاقة، تبني نوادي قطر لبروتوكولات الاستدامة، والمتابعة لـ 90 يوماً.'
                : 'Sustained weekly participation, zero-waste festival guidelines adoption, and audited 90-day progress.'}
            </p>
            <span className="text-[10px] text-[#C5A36B] font-mono block pt-2">
              Verified by: 90-Day Independent Report
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
