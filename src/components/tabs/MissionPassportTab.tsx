import React, { useState } from 'react';
import { Language } from '../../types';
import { Award, BookOpen, CheckCircle, QrCode, Shield, Sparkles, Star, UserCheck, Flame, Compass } from 'lucide-react';

interface MissionPassportTabProps {
  lang: Language;
}

export const MissionPassportTab: React.FC<MissionPassportTabProps> = ({ lang }) => {
  const [activeTab, setActiveTab] = useState<'profile' | 'checkpoints' | 'skills' | 'reflections'>('checkpoints');

  return (
    <div className="space-y-6">
      {/* Simulation Banner */}
      <div className="flex items-center justify-between p-3 px-4 rounded-xl bg-amber-500/10 border border-amber-500/30 text-xs text-amber-200">
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
          <span>
            {lang === 'ar'
              ? 'نموذج محاكاة لجواز المهمات الرقمي التفاعلي — يمنح المشارك سجلاً موثقاً لكفاءاته ومساهماته الميدانية.'
              : 'Interactive Digital Mission Passport Simulation — Documents verified participant competencies, stamps, and reflections.'}
          </span>
        </div>
        <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-amber-500/20 text-amber-300">
          DEMO DATA
        </span>
      </div>

      {/* Main Passport Card */}
      <div className="max-w-4xl mx-auto rounded-3xl glass-card-maroon p-6 sm:p-8 border border-[#C5A36B]/40 shadow-2xl relative overflow-hidden">
        {/* Subtle decorative watermark */}
        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-[#C5A36B]/5 blur-2xl pointer-events-none" />

        {/* Passport Header: Emblem & Delegate Info */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-6 border-b border-white/10">
          <div className="flex items-center gap-4 text-center sm:text-start">
            {/* Delegate Avatar */}
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-[#8A1538] to-[#C5A36B] p-1 shadow-xl">
              <div className="w-full h-full rounded-[14px] bg-[#111d2d] flex flex-col items-center justify-center text-white">
                <UserCheck className="w-8 h-8 text-amber-300 mb-0.5" />
                <span className="text-[9px] font-mono font-bold text-stone-300">DELEGATE</span>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-center sm:justify-start gap-2">
                <h3 className="text-xl font-bold text-white">Rashid Al-Kuwari</h3>
                <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-semibold">
                  Active
                </span>
              </div>
              <p className="text-xs text-stone-300 mt-0.5">
                {lang === 'ar' ? 'فريق آفاق الأدعم | قائد اللوجستيات والميدان' : 'Team Al-Adaam Horizons | Field & Logistics Lead'}
              </p>
              <div className="flex items-center justify-center sm:justify-start gap-3 mt-2 text-[11px] font-mono text-stone-400">
                <span>PASSPORT: QA-2026-8842</span>
                <span>•</span>
                <span>STATE OF QATAR</span>
              </div>
            </div>
          </div>

          {/* QR Code Validation Stamp */}
          <div className="flex items-center gap-3 p-3 rounded-2xl bg-[#0d141e]/80 border border-white/10 shadow-inner">
            <div className="w-14 h-14 bg-white p-1 rounded-lg flex items-center justify-center">
              <QrCode className="w-12 h-12 text-stone-900" />
            </div>
            <div className="text-start">
              <span className="text-[10px] font-bold text-[#C5A36B] uppercase block">
                {lang === 'ar' ? 'التحقق المشفر' : 'Verified QR Token'}
              </span>
              <span className="text-[9px] font-mono text-stone-400 block">0x8842...VERIFIED</span>
              <span className="text-[9px] text-emerald-400 font-semibold flex items-center gap-1 mt-0.5">
                <CheckCircle className="w-2.5 h-2.5" />
                {lang === 'ar' ? 'سجل معتمد' : 'Audited Credential'}
              </span>
            </div>
          </div>
        </div>

        {/* Passport Navigation Tabs */}
        <div className="flex border-b border-white/10 mt-6 gap-2 sm:gap-4 text-xs font-semibold">
          <button
            onClick={() => setActiveTab('checkpoints')}
            className={`pb-3 px-3 transition-colors border-b-2 cursor-pointer ${
              activeTab === 'checkpoints'
                ? 'border-[#C5A36B] text-amber-300 font-bold'
                : 'border-transparent text-stone-400 hover:text-stone-200'
            }`}
          >
            {lang === 'ar' ? 'أختام ومحطات الإنجاز (5/5)' : 'Milestone Stamps (5/5)'}
          </button>
          <button
            onClick={() => setActiveTab('skills')}
            className={`pb-3 px-3 transition-colors border-b-2 cursor-pointer ${
              activeTab === 'skills'
                ? 'border-[#C5A36B] text-amber-300 font-bold'
                : 'border-transparent text-stone-400 hover:text-stone-200'
            }`}
          >
            {lang === 'ar' ? 'الكفاءات المكتسبة' : 'Practiced Competencies'}
          </button>
          <button
            onClick={() => setActiveTab('reflections')}
            className={`pb-3 px-3 transition-colors border-b-2 cursor-pointer ${
              activeTab === 'reflections'
                ? 'border-[#C5A36B] text-amber-300 font-bold'
                : 'border-transparent text-stone-400 hover:text-stone-200'
            }`}
          >
            {lang === 'ar' ? 'تأملات التجربة والمتابعة' : 'Field Reflections & Legacy'}
          </button>
        </div>

        {/* Tab Content */}
        <div className="pt-6">
          {activeTab === 'checkpoints' && (
            <div className="space-y-4">
              <p className="text-xs text-stone-300">
                {lang === 'ar'
                  ? 'يتم منح كل ختم رقمي بعد تدقيق الميسر الميداني واستيفاء شروط المرحلة:'
                  : 'Stamps are unlocked only after verified facilitator sign-off and safety audit:'}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
                {[
                  {
                    day: 'DAY 1',
                    titleEn: 'Connection & Safety Pledge',
                    titleAr: 'التلاقي وميثاق السلامة',
                    code: 'STAMP-01',
                    unlocked: true
                  },
                  {
                    day: 'DAY 2',
                    titleEn: 'Approved Blueprint Gate',
                    titleAr: 'اعتماد مخطط المهمة',
                    code: 'STAMP-02',
                    unlocked: true
                  },
                  {
                    day: 'DAY 3',
                    titleEn: 'Field Mission Execution',
                    titleAr: 'الإنجاز الميداني بأسباير',
                    code: 'STAMP-03',
                    unlocked: true
                  },
                  {
                    day: 'DAY 4',
                    titleEn: 'Audited Impact Receipt',
                    titleAr: 'اعتماد إيصال الأثر',
                    code: 'STAMP-04',
                    unlocked: true
                  },
                  {
                    day: 'DAY 5',
                    titleEn: 'Institutional Handover',
                    titleAr: 'التسليم المؤسسي للمبادرة',
                    code: 'STAMP-05',
                    unlocked: true
                  }
                ].map((st) => (
                  <div
                    key={st.code}
                    className="p-3 rounded-2xl bg-white/5 border border-white/10 flex flex-col items-center text-center relative group hover:border-[#C5A36B]/50 transition-all"
                  >
                    <div className="w-12 h-12 rounded-full border-2 border-dashed border-[#C5A36B] flex items-center justify-center mb-2 bg-[#8A1538]/30">
                      <Shield className="w-6 h-6 text-amber-300" />
                    </div>
                    <span className="text-[10px] font-mono font-bold text-[#C5A36B]">{st.day}</span>
                    <h5 className="text-xs font-bold text-white mt-0.5 leading-snug">
                      {lang === 'ar' ? st.titleAr : st.titleEn}
                    </h5>
                    <span className="text-[9px] font-mono text-emerald-400 mt-2 flex items-center gap-1">
                      <CheckCircle className="w-3 h-3" /> VERIFIED
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'skills' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  skillEn: 'Adaptive Unified Athletics Design',
                  skillAr: 'تصميم الرياضات التكيفية الشاملة',
                  level: 'Proficient (92%)',
                  descEn: 'Modifying volleyball and boccia rules with acoustic bells for blind participants.'
                },
                {
                  skillEn: 'Cross-Cultural Teamwork & Crisis De-escalation',
                  skillAr: 'العمل الجماعي عبر الثقافات وإدارة التحديات',
                  level: 'Advanced (96%)',
                  descEn: 'Facilitating consensus across 5 nationalities in high-tempo field environments.'
                },
                {
                  skillEn: 'Field Safety Auditing & Heat Management',
                  skillAr: 'تدقيق السلامة الميدانية وإدارة الإجهاد',
                  level: 'Certified (100%)',
                  descEn: 'Zero injuries recorded across 4 supervised community sessions.'
                },
                {
                  skillEn: 'Institutional Playbook Documentation',
                  skillAr: 'التوثيق المؤسسي وصياغة الأدلة التشغيلية',
                  level: 'Mastery (94%)',
                  descEn: 'Authored 24-page bilingual coaching manual adopted by local sports center.'
                }
              ].map((sk, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2">
                  <div className="flex items-center justify-between">
                    <h5 className="text-sm font-bold text-white">
                      {lang === 'ar' ? sk.skillAr : sk.skillEn}
                    </h5>
                    <span className="text-xs font-mono font-bold text-[#C5A36B]">{sk.level}</span>
                  </div>
                  <p className="text-xs text-stone-300 leading-relaxed">{sk.descEn}</p>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'reflections' && (
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2">
                <span className="text-[10px] font-mono font-bold text-[#C5A36B] uppercase">
                  {lang === 'ar' ? 'تأملات شخصية موثقة' : 'Verified Delegate Reflection Log'}
                </span>
                <p className="text-xs text-stone-200 italic leading-relaxed">
                  {lang === 'ar'
                    ? '"كان العمل الميداني في قبة أسباير مختلفاً تماماً عن كل مؤتمر حضرته سابقاً. عندما رأيت الفرحة الحقيقية في عيون المشاركين وذويهم أثناء مباراة الطائرة التكيفية، أدركت أن هذا ليس مجرد تمرين أكاديمي، بل مسؤولية مستمرة نلتزم بمتابعتها."'
                    : '"Fieldwork at Aspire Dome fundamentally changed my perspective on conferences. Seeing the genuine joy in the eyes of participants and parents during our unified volleyball clinic made me realize this is not academic roleplay — it is real, lasting civic service."'}
                </p>
                <div className="pt-2 text-[10px] text-stone-400 font-mono">
                  Timestamp: 2026-10-14T19:22:10Z • Supervisor Signoff: Dr. T. Hajri
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#8A1538]/20 border border-[#8A1538]/40 space-y-1">
                <span className="text-xs font-bold text-amber-200">
                  {lang === 'ar' ? 'التزام المتابعة لـ 90 يوماً' : 'Assigned 90-Day Follow-Up Cohort'}
                </span>
                <p className="text-xs text-stone-300">
                  {lang === 'ar'
                    ? 'المشارك معين كمنسق اتصال للعيادات الرياضية التكيفية لنادي الشقب لمتابعة تطبيق الدليل في نوفمبر وديسمبر 2026.'
                    : 'Designated youth liaison to Al-Shaqab Community Club to monitor quarterly rollout of the 24-page playbook in Q4 2026.'}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
