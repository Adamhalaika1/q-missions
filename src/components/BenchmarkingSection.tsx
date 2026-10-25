import React from 'react';
import { Language } from '../types';
import { BENCHMARK_COMPARISONS } from '../data/benchmarksData';
import { Scale, Check, X, Shield, Sparkles, Trophy, Award } from 'lucide-react';

interface BenchmarkingSectionProps {
  lang: Language;
}

export const BenchmarkingSection: React.FC<BenchmarkingSectionProps> = ({ lang }) => {
  return (
    <section id="benchmarking" className="py-24 bg-[#0d141e] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-panel border border-[#8A1538]/40 text-xs text-amber-300 font-mono">
            <Scale className="w-3.5 h-3.5 text-[#C5A36B]" />
            <span>{lang === 'ar' ? 'المقارنة المعيارية والقيمة الفارقة' : 'Global Benchmarking & Differentiation'}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            {lang === 'ar' ? 'لماذا لا يشبه هذا المنتدى أي حدث آخر؟' : 'Why Q-MISSIONS Transcends Traditional Formats'}
          </h2>

          <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
            {lang === 'ar'
              ? 'توجد مبادرات تطوعية وهاكاثونات ومؤتمرات كبرى في العالم؛ لكن القيمة الفريدة لكيو-مشنز تكمن في الدمج المحكم بين الرياضة والعمل الميداني والتدقيق الصارم للأثر.'
              : 'Innovation labs, youth camps, and sports initiatives already exist. Q-MISSIONS delivers distinct value by unifying athletic trust, field missions, and audited proof-of-impact.'}
          </p>
        </div>

        {/* Comparison Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {BENCHMARK_COMPARISONS.map((bench, idx) => (
            <div
              key={idx}
              className="glass-panel p-6 rounded-3xl border border-white/10 space-y-4 relative overflow-hidden hover:border-[#C5A36B]/40 transition-all shadow-xl"
            >
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <h3 className="text-base font-bold text-white">
                  {lang === 'ar' ? bench.nameAr : bench.nameEn}
                </h3>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-stone-400">
                  Global Model 0{idx + 1}
                </span>
              </div>

              {/* Conventional Model Breakdown */}
              <div className="space-y-2 text-xs">
                <div>
                  <strong className="text-stone-400 block uppercase font-mono text-[10px]">
                    {lang === 'ar' ? 'التركيز الأساسي المعتاد' : 'Traditional Focus'}
                  </strong>
                  <p className="text-stone-300">
                    {lang === 'ar' ? bench.focusAr : bench.focusEn}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-2 pt-1 text-[11px]">
                  <div className="p-2.5 rounded-lg bg-white/5 border border-white/5">
                    <span className="text-stone-400 block text-[10px] font-mono uppercase">
                      {lang === 'ar' ? 'دور الرياضة' : 'Role of Sport'}
                    </span>
                    <span className="text-stone-300">
                      {lang === 'ar' ? bench.sportsRoleAr : bench.sportsRoleEn}
                    </span>
                  </div>

                  <div className="p-2.5 rounded-lg bg-white/5 border border-white/5">
                    <span className="text-stone-400 block text-[10px] font-mono uppercase">
                      {lang === 'ar' ? 'نموذج التوثيق والتدقيق' : 'Verification Model'}
                    </span>
                    <span className="text-stone-300">
                      {lang === 'ar' ? bench.verificationModelAr : bench.verificationModelEn}
                    </span>
                  </div>
                </div>
              </div>

              {/* The Q-MISSIONS Distinct Advantage */}
              <div className="p-4 rounded-2xl bg-gradient-to-r from-[#8A1538]/25 to-[#111d2d] border border-[#8A1538]/50 space-y-1">
                <span className="text-[10px] font-mono font-bold text-amber-300 uppercase flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#C5A36B]" />
                  {lang === 'ar' ? 'فارق التميز في منتدى قطر للمهمات' : 'The Q-MISSIONS Difference'}
                </span>
                <p className="text-xs text-stone-100 font-medium leading-relaxed">
                  {lang === 'ar' ? bench.qMissionsDistinctionAr : bench.qMissionsDistinctionEn}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
