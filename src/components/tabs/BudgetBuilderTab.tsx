import React, { useState } from 'react';
import { BudgetConfig, Language } from '../../types';
import { calculateBudget, formatQar, PRESET_SCENARIOS } from '../../utils/budgetCalculator';
import { Calculator, DollarSign, Sliders, Layers, Info, ShieldAlert, Sparkles } from 'lucide-react';

interface BudgetBuilderTabProps {
  lang: Language;
}

export const BudgetBuilderTab: React.FC<BudgetBuilderTabProps> = ({ lang }) => {
  const [selectedScenarioKey, setSelectedScenarioKey] = useState<'pilot' | 'forum' | 'global'>('forum');
  const [config, setConfig] = useState<BudgetConfig>(PRESET_SCENARIOS.forum);

  const handleSelectPreset = (key: 'pilot' | 'forum' | 'global') => {
    setSelectedScenarioKey(key);
    setConfig(PRESET_SCENARIOS[key]);
  };

  const budgetBreakdown = calculateBudget(config);

  return (
    <div className="space-y-8">
      {/* Scenario Presets Bar */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {[
          {
            key: 'pilot',
            titleEn: 'Scenario A: Pilot Mission Experience',
            titleAr: 'السيناريو (أ): النسخة التجريبية المصغرة',
            descEn: '80 youth (25 intl), 3 worlds, 3 days. Rapid proof of concept with minimal capital.',
            descAr: '80 مشاركاً (25 دولياً)، 3 عوالم، 3 أيام. اختبار منخفض التكلفة للنموذج.',
            approxQar: '~620,000 QAR'
          },
          {
            key: 'forum',
            titleEn: 'Scenario B: International Forum Edition',
            titleAr: 'السيناريو (ب): المنتدى الدولي الكامل',
            descEn: '250 youth (120 intl), 6 worlds, 5 days, premier venues. Flagship global gathering.',
            descAr: '250 مشاركاً (120 دولياً)، 6 عوالم، 5 أيام، منشآت رياضية كبرى.',
            approxQar: '~3,450,000 QAR'
          },
          {
            key: 'global',
            titleEn: 'Scenario C: Expanded Global Platform',
            titleAr: 'السيناريو (ج): المنصة العالمية الموسعة',
            descEn: '600 youth (350 intl), 6 worlds, Olympic tier, year-round international mission hub.',
            descAr: '600 مشارك (350 دولياً)، مرافق أولمبية، وتشغيل مستمر على مدار العام.',
            approxQar: '~8,200,000 QAR'
          }
        ].map((sc) => {
          const isSelected = selectedScenarioKey === sc.key;
          return (
            <button
              key={sc.key}
              onClick={() => handleSelectPreset(sc.key as any)}
              className={`p-4 rounded-2xl text-start transition-all border cursor-pointer ${
                isSelected
                  ? 'glass-card-maroon border-[#C5A36B] shadow-xl scale-[1.02]'
                  : 'glass-panel hover:bg-white/10 border-white/5'
              }`}
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-[10px] font-mono font-bold text-[#C5A36B] uppercase">
                  {sc.key.toUpperCase()} TIER
                </span>
                <span className="text-xs font-bold text-amber-300 font-mono">
                  {sc.approxQar}
                </span>
              </div>
              <h4 className="text-sm font-bold text-white mb-1">
                {lang === 'ar' ? sc.titleAr : sc.titleEn}
              </h4>
              <p className="text-xs text-stone-300 leading-snug">
                {lang === 'ar' ? sc.descAr : sc.descEn}
              </p>
            </button>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Dynamic Sliders Box */}
        <div className="lg:col-span-5 glass-panel p-6 rounded-2xl border border-white/10 space-y-5">
          <div className="flex items-center justify-between pb-3 border-b border-white/10">
            <h4 className="text-sm font-bold text-white flex items-center gap-2">
              <Sliders className="w-4 h-4 text-[#C5A36B]" />
              <span>{lang === 'ar' ? 'محركات التكلفة والمتغيرات' : 'Cost Driver Parameters'}</span>
            </h4>
            <span className="text-[10px] font-mono text-stone-400">Currency: QAR (ر.ق)</span>
          </div>

          {/* Participant count */}
          <div>
            <div className="flex justify-between text-xs text-stone-300 font-semibold mb-1">
              <span>{lang === 'ar' ? 'إجمالي المشاركين' : 'Total Participants'}</span>
              <span className="text-amber-300 font-mono">{config.participantCount} delegates</span>
            </div>
            <input
              type="range"
              min="50"
              max="800"
              step="25"
              value={config.participantCount}
              onChange={(e) =>
                setConfig({ ...config, participantCount: Number(e.target.value) })
              }
              className="w-full accent-[#8A1538]"
            />
          </div>

          {/* International delegates */}
          <div>
            <div className="flex justify-between text-xs text-stone-300 font-semibold mb-1">
              <span>{lang === 'ar' ? 'الوفود الدولية (رحلات وفنادق)' : 'International Delegates'}</span>
              <span className="text-cyan-300 font-mono">{config.internationalDelegates} delegates</span>
            </div>
            <input
              type="range"
              min="10"
              max={config.participantCount}
              step="10"
              value={config.internationalDelegates}
              onChange={(e) =>
                setConfig({ ...config, internationalDelegates: Number(e.target.value) })
              }
              className="w-full accent-cyan-400"
            />
          </div>

          {/* Duration Days */}
          <div>
            <div className="flex justify-between text-xs text-stone-300 font-semibold mb-1">
              <span>{lang === 'ar' ? 'عدد أيام الفعالية' : 'Event Duration'}</span>
              <span className="text-emerald-300 font-mono">{config.durationDays} days</span>
            </div>
            <input
              type="range"
              min="3"
              max="7"
              value={config.durationDays}
              onChange={(e) =>
                setConfig({ ...config, durationDays: Number(e.target.value) })
              }
              className="w-full accent-emerald-400"
            />
          </div>

          {/* Venue Tier */}
          <div>
            <label className="block text-xs font-semibold text-stone-300 mb-1.5">
              {lang === 'ar' ? 'مستوى المنشآت الرياضية' : 'Sports Venue Facility Tier'}
            </label>
            <div className="grid grid-cols-3 gap-2 text-xs">
              {(['standard', 'premier', 'olympic'] as const).map((tier) => (
                <button
                  key={tier}
                  type="button"
                  onClick={() => setConfig({ ...config, venueTier: tier })}
                  className={`py-2 px-2 rounded-lg font-bold capitalize border cursor-pointer ${
                    config.venueTier === tier
                      ? 'bg-[#8A1538] text-white border-[#C5A36B]'
                      : 'bg-white/5 text-stone-400 border-white/10 hover:text-white'
                  }`}
                >
                  {tier}
                </button>
              ))}
            </div>
          </div>

          {/* Toggles */}
          <div className="space-y-2 pt-2 border-t border-white/5 text-xs">
            <label className="flex items-center justify-between p-2 rounded-lg bg-white/5 border border-white/5 cursor-pointer">
              <span className="text-stone-300">
                {lang === 'ar' ? 'منح ميدانية للفرق والمعدات التكيفية' : 'Mission Field Prototype Micro-Grants'}
              </span>
              <input
                type="checkbox"
                checked={config.hasFieldGrants}
                onChange={(e) => setConfig({ ...config, hasFieldGrants: e.target.checked })}
                className="accent-[#8A1538]"
              />
            </label>

            <label className="flex items-center justify-between p-2 rounded-lg bg-white/5 border border-white/5 cursor-pointer">
              <span className="text-stone-300">
                {lang === 'ar' ? 'بث رقمي هجين واستوديو مباشر' : 'Hybrid Broadcasting & Live Virtual Hub'}
              </span>
              <input
                type="checkbox"
                checked={config.hasHybridStreaming}
                onChange={(e) => setConfig({ ...config, hasHybridStreaming: e.target.checked })}
                className="accent-[#8A1538]"
              />
            </label>
          </div>
        </div>

        {/* Right Output Budget Ledger */}
        <div className="lg:col-span-7 space-y-4">
          <div className="glass-panel p-6 rounded-2xl border border-white/15 space-y-6">
            {/* Main Total Callout */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 rounded-xl bg-gradient-to-r from-[#8A1538]/30 via-[#111d2d] to-[#C5A36B]/20 border border-[#C5A36B]/40 shadow-xl">
              <div>
                <span className="text-[10px] font-mono uppercase font-bold text-[#C5A36B] tracking-wider block">
                  {lang === 'ar' ? 'تقدير الميزانية الإجمالية التخطيطية' : 'Estimated Total Projected Budget'}
                </span>
                <div className="text-3xl sm:text-4xl font-black text-white font-mono mt-1">
                  {formatQar(budgetBreakdown.totalQar, lang)}
                </div>
              </div>

              <div className="flex gap-4 sm:border-s sm:border-white/10 sm:ps-6 text-xs font-mono">
                <div>
                  <span className="text-[10px] text-stone-400 block font-sans">
                    {lang === 'ar' ? 'لكل مشارك' : 'Per Participant'}
                  </span>
                  <span className="text-sm font-bold text-amber-300">
                    {formatQar(budgetBreakdown.perParticipantQar, lang)}
                  </span>
                </div>
                <div>
                  <span className="text-[10px] text-stone-400 block font-sans">
                    {lang === 'ar' ? 'لكل مهمة منجزة' : 'Per Mission'}
                  </span>
                  <span className="text-sm font-bold text-cyan-300">
                    {formatQar(budgetBreakdown.perMissionQar, lang)}
                  </span>
                </div>
              </div>
            </div>

            {/* Itemized Categories Table */}
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-stone-400 block mb-3">
                {lang === 'ar' ? 'تفصيل البنود التشغيلية والمخصصات' : 'Itemized Operational Cost Breakdown'}
              </span>

              <div className="space-y-2.5">
                {budgetBreakdown.categories.map((cat, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 transition-all text-xs"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-bold text-stone-200">
                        {lang === 'ar' ? cat.nameAr : cat.nameEn}
                      </span>
                      <div className="flex items-center gap-2 font-mono">
                        <span className="text-[10px] text-stone-400">({cat.percentage}%)</span>
                        <span className="font-bold text-amber-300">
                          {formatQar(cat.amountQar, lang)}
                        </span>
                      </div>
                    </div>
                    <p className="text-[11px] text-stone-400 leading-snug">
                      {lang === 'ar' ? cat.detailsAr : cat.detailsEn}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Financial Disclaimer */}
            <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-[11px] text-stone-300 flex items-start gap-2">
              <Info className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <span>
                {lang === 'ar'
                  ? 'ملاحظة تخطيطية: التكاليف الواردة تقديرية للأغراض الاستكشافية وتخضع للمراجعة والتدقيق المشترك مع إدارة المشتريات والموازنة في وزارة الرياضة والشباب.'
                  : 'Planning Disclosure: Financial figures are professional planning projections and do not constitute formal commercial tenders or binding price quotations.'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
