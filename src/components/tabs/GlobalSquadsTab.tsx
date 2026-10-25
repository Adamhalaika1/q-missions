import React, { useState } from 'react';
import { Language } from '../../types';
import { Globe, Users, MapPin, Compass, Shield, Sparkles } from 'lucide-react';

interface GlobalSquadsTabProps {
  lang: Language;
}

export const GlobalSquadsTab: React.FC<GlobalSquadsTabProps> = ({ lang }) => {
  const [activeSquadId, setActiveSquadId] = useState('sq-1');

  const hypotheticalSquads = [
    {
      id: 'sq-1',
      nameEn: 'Squad Al-Adaam Horizons',
      nameAr: 'فرقة آفاق الأدعم',
      worldEn: 'Move Together (Inclusion & Adaptive Sports)',
      worldAr: 'التحرك معاً (الرياضة التكيفية والدمج الحركي)',
      venueEn: 'Aspire Dome, Doha',
      venueAr: 'قبة أسباير، الدوحة',
      color: '#0EA5E9',
      regions: ['Qatar', 'United Kingdom', 'Senegal', 'Jordan', 'Singapore'],
      challengeEn: 'Co-designing acoustic sports and unified volleyball for visually impaired youth',
      challengeAr: 'تصميم ألعاب رياضية صوتية وتدريبات طائرة موحدة لشباب ضعاف البصر'
    },
    {
      id: 'sq-2',
      nameEn: 'Squad Eco-Strikers',
      nameAr: 'فرقة فرسان الاستدامة',
      worldEn: 'Green Play (Sustainable Sports Events)',
      worldAr: 'اللعب الأخضر (استدامة الفعاليات والبطولات)',
      venueEn: 'Al Janoub Stadium Precinct, Al Wakrah',
      venueAr: 'محيط استاد الجنوب، الوكرة',
      color: '#16A34A',
      regions: ['Qatar', 'Sweden', 'Morocco', 'India', 'Canada'],
      challengeEn: 'Zero single-use plastic hydration infrastructure for a 250-player youth tournament',
      challengeAr: 'بنية ترطيب مبردة مستدامة تلغي 100% من البلاستيك لبطولة تضم 250 لاعباً'
    },
    {
      id: 'sq-3',
      nameEn: 'Squad Heritage Navigators',
      nameAr: 'فرقة رواد التراث البحري',
      worldEn: 'Cultures in Action (International Dialogue)',
      worldAr: 'ثقافات في الميدان (حوار الثقافات والتجديف التراثي)',
      venueEn: 'Katara Dhow Harbor & Beach, Doha',
      venueAr: 'شاطئ كتارا وميناء المحامل التراثية',
      color: '#6366F1',
      regions: ['Qatar', 'Oman', 'Japan', 'France', 'Brazil'],
      challengeEn: 'Traditional dhow synchronized rowing regatta and intercultural storytelling',
      challengeAr: 'سباق تجديف تراثي منسق بالمحامل القطرية وتوثيق مرئي لقيم العمل الجماعي'
    },
    {
      id: 'sq-4',
      nameEn: 'Squad Active Pulse',
      nameAr: 'فرقة النبض النشط',
      worldEn: 'Healthy Communities (Urban Movement)',
      worldAr: 'مجتمعات صحية (الحركة اليومية وجودة الحياة)',
      venueEn: 'Oxygen Park, Education City, Al Rayyan',
      venueAr: 'حديقة الأكسجين، المدينة التعليمية',
      color: '#F97316',
      regions: ['Qatar', 'South Africa', 'Malaysia', 'Germany', 'Egypt'],
      challengeEn: 'Gamified pedestrian metro-to-park step routes and dynamic stretch prompts',
      challengeAr: 'مسارات مشي تفاعلية بين محطات المترو والحدائق مع محفزات حركية سريعة'
    },
    {
      id: 'sq-5',
      nameEn: 'Squad Generations Link',
      nameAr: 'فرقة جسور الأجيال',
      worldEn: 'Connected Generations (Active Aging)',
      worldAr: 'أجيال متصلة (الشيخوخة النشطة والدمج الرقمي)',
      venueEn: 'Qatar National Library Community Zone',
      venueAr: 'المساحة المجتمعية بمكتبة قطر الوطنية',
      color: '#D97706',
      regions: ['Qatar', 'Tunisia', 'South Korea', 'Australia', 'Kuwait'],
      challengeEn: 'One-on-one smart fitness tracker onboarding and oral sports memory podcast',
      challengeAr: 'تدريب فردي لكبار السن على أجهزة تتبع الخطوات وبودكاست لذكريات الرياضة'
    }
  ];

  const selected = hypotheticalSquads.find(s => s.id === activeSquadId)!;

  return (
    <div className="space-y-8">
      {/* Simulation Notice */}
      <div className="p-3 px-4 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-xs text-cyan-200 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Globe className="w-4 h-4 text-cyan-400 shrink-0" />
          <span>
            {lang === 'ar'
              ? 'محاكاة لشبكة الفرق العالمية — توضح النموذج التشاركي لتوزيع الوفود متعددة الثقافات على منشآت قطر الحيوية.'
              : 'Hypothetical Global Squad Assembly — Demonstrates how international delegates pair with Qatari youth across host venues.'}
          </span>
        </div>
        <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300">
          ILLUSTRATIVE MODEL
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left: Squad Selection List */}
        <div className="lg:col-span-5 space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-stone-400 block mb-2">
            {lang === 'ar' ? 'الفرق الميدانية متعددة الجنسيات' : 'Multidisciplinary Global Squads'}
          </span>

          {hypotheticalSquads.map((sq) => {
            const isSelected = sq.id === activeSquadId;
            return (
              <div
                key={sq.id}
                onClick={() => setActiveSquadId(sq.id)}
                className={`p-4 rounded-xl transition-all cursor-pointer border text-start ${
                  isSelected
                    ? 'glass-card-maroon shadow-lg border-[#C5A36B]'
                    : 'glass-panel hover:bg-white/10 border-white/5'
                }`}
              >
                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <span className="text-sm font-bold text-white">
                    {lang === 'ar' ? sq.nameAr : sq.nameEn}
                  </span>
                  <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: sq.color }} />
                </div>

                <p className="text-xs text-stone-300 mb-2 font-medium">
                  {lang === 'ar' ? sq.worldAr : sq.worldEn}
                </p>

                <div className="flex flex-wrap gap-1 text-[10px] font-mono text-stone-400">
                  {sq.regions.map((reg, i) => (
                    <span key={i} className="px-1.5 py-0.5 rounded bg-white/5 border border-white/10">
                      {reg}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Right: Squad Visual Matrix & Doha Deployment Card */}
        <div className="lg:col-span-7">
          <div className="glass-panel p-6 rounded-2xl border border-white/15 space-y-6">
            <div className="flex items-center justify-between gap-2 pb-4 border-b border-white/10">
              <div>
                <span className="text-[10px] font-mono text-[#C5A36B] uppercase tracking-wider font-bold">
                  {lang === 'ar' ? 'توزيع الميدان في الدوحة' : 'Doha Deployment & Composition'}
                </span>
                <h3 className="text-xl font-bold text-white">
                  {lang === 'ar' ? selected.nameAr : selected.nameEn}
                </h3>
              </div>
              <span
                className="px-3 py-1 rounded-full text-xs font-bold"
                style={{ backgroundColor: `${selected.color}25`, color: selected.color }}
              >
                {lang === 'ar' ? 'جاهز للانطلاق' : 'Squad Ready'}
              </span>
            </div>

            {/* Venue & Mission Scope */}
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2">
              <div className="flex items-center gap-2 text-[#C5A36B] text-xs font-bold uppercase">
                <MapPin className="w-4 h-4" />
                <span>{lang === 'ar' ? selected.venueAr : selected.venueEn}</span>
              </div>
              <p className="text-xs text-stone-200 leading-relaxed">
                {lang === 'ar' ? selected.challengeAr : selected.challengeEn}
              </p>
            </div>

            {/* Squad Members Representation */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-stone-400 mb-3 flex items-center gap-1.5">
                <Users className="w-4 h-4 text-[#C5A36B]" />
                <span>{lang === 'ar' ? 'تنوع جنسيات وتخصصات الفرقة' : 'Multidisciplinary Geographic Balance'}</span>
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-5 gap-2.5">
                {selected.regions.map((reg, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-[#0d141e] border border-white/10 text-center flex flex-col items-center justify-center"
                  >
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-xs font-bold text-amber-300 mb-1">
                      {reg.slice(0, 2).toUpperCase()}
                    </div>
                    <span className="text-[11px] font-bold text-stone-200 truncate w-full">{reg}</span>
                    <span className="text-[9px] text-stone-400 mt-0.5">
                      {idx === 0 ? 'Lead Anchor' : idx === 1 ? 'Technical' : idx === 2 ? 'Athletics' : 'Liaison'}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Operational Principle */}
            <div className="p-4 rounded-xl bg-[#8A1538]/15 border border-[#8A1538]/30 text-xs text-stone-300 space-y-1">
              <span className="font-bold text-amber-200 block">
                {lang === 'ar' ? 'مبدأ العدالة والتكافؤ في التشكيل' : 'Equitable Matching Principles'}
              </span>
              <p className="text-[11px] leading-relaxed text-stone-300">
                {lang === 'ar'
                  ? 'يتم تشكيل الفرق وفق خوارزمية تراعي التنوع الجغرافي وتوازن المهارات دون أي تمييز، مع تعيين قائد قطري ثنائي اللغة لكل فريق لضمان الاندماج الثقافي الكامل.'
                  : 'Teams are balanced based on complementary competencies (software, physical coaching, community dialogue) paired with bilingual Qatari youth to guarantee organic cultural immersion.'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
