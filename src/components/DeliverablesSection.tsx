import React, { useState } from 'react';
import { InstitutionalDeliverable, Language } from '../types';
import { INSTITUTIONAL_DELIVERABLES } from '../data/deliverablesData';
import { Award, FileText, CheckCircle2, ChevronDown, ChevronUp, Layers, ShieldCheck, Sparkles } from 'lucide-react';

interface DeliverablesSectionProps {
  lang: Language;
}

export const DeliverablesSection: React.FC<DeliverablesSectionProps> = ({ lang }) => {
  const [expandedId, setExpandedId] = useState<string | null>(INSTITUTIONAL_DELIVERABLES[0].id);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="deliverables" className="py-24 bg-[#0b1017] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-panel border border-[#C5A36B]/30 text-xs text-amber-300 font-mono">
            <Award className="w-3.5 h-3.5 text-[#C5A36B]" />
            <span>{lang === 'ar' ? 'أصول معرفية ومؤسسية دائمة' : 'State Assets & Knowledge Capital'}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            {lang === 'ar' ? '10 مخرجات مؤسسية تكتسبها قطر' : '10 Tangible Institutional Deliverables for Qatar'}
          </h2>

          <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
            {lang === 'ar'
              ? 'لا يقتصر عائد المنتدى على الأيام الخمسة، بل تسلّم للوزارة حزمة من 10 مخرجات وأدلة سياسات ومنصات تقنية تصبح ملكاً سيادياً دائماً للدولة.'
              : 'The Ministry walks away not with fleeting speeches, but with ten permanent, high-value institutional assets that power youth centers nationwide.'}
          </p>
        </div>

        {/* Deliverables Accordion Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {INSTITUTIONAL_DELIVERABLES.map((del) => {
            const isExpanded = expandedId === del.id;

            return (
              <div
                key={del.id}
                className={`rounded-2xl transition-all border ${
                  isExpanded
                    ? 'glass-card-maroon border-[#C5A36B]/60 shadow-xl'
                    : 'glass-panel hover:bg-white/10 border-white/5'
                }`}
              >
                {/* Header row */}
                <div
                  onClick={() => toggleExpand(del.id)}
                  className="p-5 flex items-center justify-between gap-3 cursor-pointer select-none"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-9 h-9 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center font-mono font-bold text-amber-300 text-xs shrink-0">
                      {del.number}
                    </span>
                    <div>
                      <h4 className="text-sm font-bold text-white">
                        {lang === 'ar' ? del.titleAr : del.titleEn}
                      </h4>
                      <span className="text-[11px] text-stone-400 font-mono block">
                        {lang === 'ar' ? del.formatAr : del.formatEn}
                      </span>
                    </div>
                  </div>

                  <div className="text-stone-400">
                    {isExpanded ? <ChevronUp className="w-5 h-5 text-amber-300" /> : <ChevronDown className="w-5 h-5" />}
                  </div>
                </div>

                {/* Expanded Details */}
                {isExpanded && (
                  <div className="px-5 pb-5 pt-1 space-y-4 text-xs border-t border-white/10">
                    <p className="text-stone-200 leading-relaxed">
                      {lang === 'ar' ? del.summaryAr : del.summaryEn}
                    </p>

                    {/* Ministry Value Box */}
                    <div className="p-3.5 rounded-xl bg-[#8A1538]/20 border border-[#8A1538]/40 space-y-1">
                      <span className="text-[10px] font-bold uppercase text-amber-300 font-mono block">
                        {lang === 'ar' ? 'القيمة الاستراتيجية للوزارة' : 'Strategic Value to the Ministry'}
                      </span>
                      <p className="text-stone-200">
                        {lang === 'ar' ? del.ministryValueAr : del.ministryValueEn}
                      </p>
                    </div>

                    {/* Operational Details */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[11px] text-stone-300">
                      <div>
                        <strong className="text-stone-400 block uppercase font-mono text-[10px]">
                          {lang === 'ar' ? 'المستفيدون المستهدفون' : 'Target Beneficiaries'}
                        </strong>
                        <span className="text-stone-200">
                          {lang === 'ar' ? del.targetBeneficiariesAr : del.targetBeneficiariesEn}
                        </span>
                      </div>

                      <div>
                        <strong className="text-stone-400 block uppercase font-mono text-[10px]">
                          {lang === 'ar' ? 'فريق الإنتاج المسؤول' : 'Production Ownership'}
                        </strong>
                        <span className="text-cyan-300 font-mono">
                          {lang === 'ar' ? del.productionOwnerAr : del.productionOwnerEn}
                        </span>
                      </div>
                    </div>

                    {/* Quality Criteria */}
                    <div className="space-y-1.5 pt-2 border-t border-white/5">
                      <span className="text-[10px] font-bold uppercase text-emerald-400 block">
                        {lang === 'ar' ? 'معايير الجودة والاعتماد' : 'Validation & Quality Criteria'}
                      </span>
                      <ul className="space-y-1 text-stone-300">
                        {(lang === 'ar' ? del.qualityCriteriaAr : del.qualityCriteriaEn).map((crit, idx) => (
                          <li key={idx} className="flex items-start gap-1.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                            <span>{crit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
