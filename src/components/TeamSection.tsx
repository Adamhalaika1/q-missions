import React, { useState } from 'react';
import { Language, TeamMemberProfile } from '../types';
import { BEYOND_QMISSIONS_CAPABILITIES, PROPOSAL_TEAM } from '../data/teamData';
import { Users, GraduationCap, Award, Briefcase, ExternalLink, Sparkles, ChevronDown, ChevronUp, Layers, CheckCircle2 } from 'lucide-react';

interface TeamSectionProps {
  lang: Language;
}

export const TeamSection: React.FC<TeamSectionProps> = ({ lang }) => {
  const [expandedMemberId, setExpandedMemberId] = useState<string>(PROPOSAL_TEAM[0].id);

  const toggleMember = (id: string) => {
    setExpandedMemberId(expandedMemberId === id ? '' : id);
  };

  return (
    <section id="team" className="py-24 bg-[#0b1017] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-panel border border-[#C5A36B]/30 text-xs text-amber-300 font-mono">
            <Users className="w-3.5 h-3.5 text-[#C5A36B]" />
            <span>{lang === 'ar' ? 'فريق المبادرة المستقل' : 'The Independent Proposing Consortium'}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            {lang === 'ar' ? 'الفريق الذي يقف خلف المبادرة' : 'The Minds Behind Q-MISSIONS'}
          </h2>

          <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
            {lang === 'ar'
              ? 'ائتلاف استشاري متعدد التخصصات يجمع بين هندسة البرمجيات الصلبة، التحول الرقمي الحكومي، هندسة نظم المعلومات والذكاء الاصطناعي، وإدارة الشراكات وتجارب المستفيدين.'
              : 'A multidisciplinary team combining real public-sector digital transformation, enterprise software engineering, artificial intelligence, and strategic youth leadership architectures.'}
          </p>

          <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-xs text-stone-400 max-w-2xl mx-auto">
            {lang === 'ar'
              ? 'ملاحظة مؤسسية: هذه أدوار مقترحة داخل المبادرة وليست تعيينات حكومية رسمية، وتستند المؤهلات بدقة للسير الذاتية المعتمدة للفريق.'
              : 'Institutional Note: Roles reflect proposed functions within this initiative and do not represent official government appointments.'}
          </div>
        </div>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-20">
          {PROPOSAL_TEAM.map((member) => {
            const isExpanded = expandedMemberId === member.id;

            return (
              <div
                key={member.id}
                className={`glass-panel rounded-3xl p-6 sm:p-7 border transition-all flex flex-col justify-between ${
                  isExpanded
                    ? 'border-[#C5A36B] shadow-2xl glass-card-maroon'
                    : 'border-white/10 hover:border-white/20'
                }`}
              >
                <div className="space-y-4">
                  {/* Header Avatar & Role */}
                  <div>
                    <span className="text-[10px] font-mono font-bold text-[#C5A36B] uppercase tracking-wider block mb-1">
                      {lang === 'ar' ? member.proposedRoleAr : member.proposedRoleEn}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-black text-white">
                      {lang === 'ar' ? member.nameAr : member.nameEn}
                    </h3>
                    <p className="text-xs text-stone-300 font-medium mt-1 leading-snug">
                      {lang === 'ar' ? member.titleAr : member.titleEn}
                    </p>
                  </div>

                  {/* Bio */}
                  <p className="text-xs text-stone-300 leading-relaxed">
                    {lang === 'ar' ? member.bioAr : member.bioEn}
                  </p>

                  {/* Core Competencies Pills */}
                  <div>
                    <span className="text-[10px] font-bold uppercase text-stone-400 block mb-2">
                      {lang === 'ar' ? 'أبرز مجالات الخبرة' : 'Core Competencies'}
                    </span>
                    <div className="space-y-1.5 text-[11px] text-stone-200">
                      {(lang === 'ar' ? member.coreCompetenciesAr : member.coreCompetenciesEn).slice(0, 3).map((comp, idx) => (
                        <div key={idx} className="flex items-start gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-amber-300 shrink-0 mt-0.5" />
                          <span>{comp}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Expandable Details */}
                  {isExpanded && (
                    <div className="pt-4 border-t border-white/10 space-y-4 text-xs">
                      {/* Education */}
                      <div>
                        <strong className="text-stone-400 block uppercase font-mono text-[10px] mb-1">
                          {lang === 'ar' ? 'المؤهلات الأكاديمية' : 'Verified Education'}
                        </strong>
                        <ul className="space-y-1 text-stone-300 text-[11px]">
                          {(lang === 'ar' ? member.educationAr : member.educationEn).map((edu, idx) => (
                            <li key={idx} className="flex items-start gap-1">
                              <span className="text-amber-400">•</span>
                              <span>{edu}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Established Projects */}
                      <div>
                        <strong className="text-stone-400 block uppercase font-mono text-[10px] mb-1">
                          {lang === 'ar' ? 'مشاريع وطنية سابقة مثبتة' : 'Documented Projects & Systems'}
                        </strong>
                        <div className="space-y-2 text-[11px]">
                          {(lang === 'ar' ? member.establishedProjectsAr : member.establishedProjectsEn).map((proj, idx) => (
                            <div key={idx} className="p-2.5 rounded-lg bg-white/5 border border-white/5">
                              <div className="flex items-center justify-between font-bold text-stone-100">
                                <span>{proj.name}</span>
                                {proj.url && (
                                  <a
                                    href={proj.url}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-cyan-300 hover:text-cyan-200"
                                  >
                                    <ExternalLink className="w-3 h-3" />
                                  </a>
                                )}
                              </div>
                              <p className="text-stone-400 mt-0.5 leading-snug">{proj.description}</p>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Certifications */}
                      <div>
                        <strong className="text-stone-400 block uppercase font-mono text-[10px] mb-1">
                          {lang === 'ar' ? 'الشهادات المهنية المعتمدة' : 'Professional Certifications'}
                        </strong>
                        <div className="flex flex-wrap gap-1 text-[10px] font-mono text-stone-300">
                          {(lang === 'ar' ? member.certificationsAr : member.certificationsEn).map((cert, idx) => (
                            <span key={idx} className="px-2 py-0.5 rounded bg-white/5 border border-white/10">
                              {cert}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <button
                  onClick={() => toggleMember(member.id)}
                  className="mt-4 pt-3 border-t border-white/10 text-xs font-bold text-[#C5A36B] hover:text-amber-200 flex items-center justify-between cursor-pointer w-full"
                >
                  <span>
                    {isExpanded
                      ? (lang === 'ar' ? 'إخفاء التفاصيل' : 'Hide Details')
                      : (lang === 'ar' ? 'عرض السجل الأكاديمي والمهني الكامل' : 'View Full Professional Record')}
                  </span>
                  {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>
              </div>
            );
          })}
        </div>

        {/* "Beyond Q-MISSIONS — What We Can Build Together" Section */}
        <div className="rounded-3xl glass-panel p-8 sm:p-12 border border-white/15 relative overflow-hidden shadow-2xl">
          <div className="max-w-3xl mx-auto text-center space-y-3 mb-10">
            <span className="text-[10px] font-mono font-bold text-[#C5A36B] uppercase tracking-widest">
              Institutional Capacity Portfolio
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-white">
              {lang === 'ar'
                ? 'ما وراء المنتدى: ما يمكننا بناؤه معاً'
                : 'Beyond Q-MISSIONS: What We Can Build Together'}
            </h3>
            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
              {lang === 'ar'
                ? 'توظف المبادرة كفاءات الفريق في دعم خطط التحول الرقمي، وبناء القدرات الشبابية، وهندسة منصات الفعاليات الكبرى لوزارة الرياضة والشباب ومؤسسات الدولة.'
                : 'Demonstrating the full operational capabilities of the originating team across digital transformation, youth learning systems, and sports technology.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {BEYOND_QMISSIONS_CAPABILITIES.map((cap) => (
              <div
                key={cap.id}
                className="p-5 rounded-2xl bg-white/5 border border-white/5 hover:border-[#C5A36B]/40 transition-all space-y-2.5"
              >
                <div className="flex items-center gap-2 text-amber-300 font-bold text-sm">
                  <Sparkles className="w-4 h-4 text-[#C5A36B] shrink-0" />
                  <h4>{lang === 'ar' ? cap.titleAr : cap.titleEn}</h4>
                </div>

                <p className="text-xs text-stone-300 leading-relaxed">
                  {lang === 'ar' ? cap.descAr : cap.descEn}
                </p>

                <div className="pt-2 border-t border-white/5 text-[10px] text-stone-400">
                  <strong className="text-stone-300 block">
                    {lang === 'ar' ? 'الخبرة الميدانية المثبتة:' : 'Proven Track Record:'}
                  </strong>
                  <span className="text-cyan-300 font-mono">
                    {lang === 'ar' ? cap.provenTrackAr : cap.provenTrackEn}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
