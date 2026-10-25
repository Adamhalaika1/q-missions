export interface GovernanceUnit {
  id: string;
  nameEn: string;
  nameAr: string;
  roleEn: string;
  roleAr: string;
  responsibilitiesEn: string[];
  responsibilitiesAr: string[];
  reportingLineEn: string;
  reportingLineAr: string;
}

export interface RiskItem {
  id: string;
  category: 'Safety & Health' | 'Safeguarding' | 'Operations' | 'Governance & Ethics' | 'Financial & Continuity';
  riskEn: string;
  riskAr: string;
  likelihood: 'Low' | 'Medium' | 'High';
  impact: 'Low' | 'Medium' | 'High';
  mitigationEn: string;
  mitigationAr: string;
  proposedOwnerEn: string;
  proposedOwnerAr: string;
}

export interface DecisionPathway {
  id: string;
  number: string;
  titleEn: string;
  titleAr: string;
  objectiveEn: string;
  objectiveAr: string;
  scopeEn: string;
  scopeAr: string;
  resourceAssumptionsEn: string;
  resourceAssumptionsAr: string;
  stakeholdersEn: string[];
  stakeholdersAr: string[];
  timelineEn: string;
  timelineAr: string;
  requiredApprovalsEn: string;
  requiredApprovalsAr: string;
  expectedDeliverableEn: string;
  expectedDeliverableAr: string;
  decisionCriteriaEn: string;
  decisionCriteriaAr: string;
}

export const GOVERNANCE_UNITS: GovernanceUnit[] = [
  {
    id: 'gov-01',
    nameEn: 'Strategic Institutional Lead (Proposed: Ministry of Sports and Youth)',
    nameAr: 'الجهة الاستراتيجية القيادية (مقترح: وزارة الرياضة والشباب — دولة قطر)',
    roleEn: 'High-level patron and executive oversight authority setting strategic priorities and inter-governmental coordination.',
    roleAr: 'المظلة الاستراتيجية الرسمية وصاحبة القرار التنفيذي والموجه لأولويات السياسة العامة والتنسيق الحكومي.',
    responsibilitiesEn: [
      'Strategic approval of mission worlds, themes, and official partnership MoUs',
      'Inter-ministerial alignment (Ministry of Interior, Ministry of Public Health, Municipalities)',
      'High-level protocol, international delegation approvals, and closing ceremony patronage'
    ],
    responsibilitiesAr: [
      'الاعتماد الاستراتيجي لعوالم ومحاور المهمات ومذكرات التفاهم الرسمية',
      'التنسيق الحكومي المشترك (وزارة الداخلية، وزارة الصحة العامة، البلديات)',
      'المراسم الرسمية، اعتماد دعوات الوفود الدولية ورعاية الحفل الختامي'
    ],
    reportingLineEn: 'Ministerial Cabinet / Executive Leadership',
    reportingLineAr: 'القيادة التنفيذية والمكتب الوزاري'
  },
  {
    id: 'gov-02',
    nameEn: 'High Steering Committee',
    nameAr: 'اللجنة التوجيهية العليا',
    roleEn: 'Cross-institutional steering board ensuring holistic representation across Qatari sports and youth ecosystems.',
    roleAr: 'مجلس قيادي يضم ممثلي المنظومة الرياضية والشبابية في دولة قطر لضمان تكامل الرؤى والجهود.',
    responsibilitiesEn: [
      'Reviewing bi-weekly progress milestones leading up to the forum',
      'Resolving inter-agency operational dependencies (venue allocations, transport routes)',
      'Approving the final roster of challenge partners and venue selections'
    ],
    responsibilitiesAr: [
      'مراجعة تقارير الإنجاز الدورية ومحطات الجاهزية قبل انطلاق المنتدى',
      'حل أي معوقات لوجستية وتنسيقية بين المنشآت والجهات الشريكة',
      'اعتماد القائمة النهائية لأصحاب التحديات والمواقع الميدانية'
    ],
    reportingLineEn: 'Chaired by Ministry Undersecretary or Nominated Directorate General',
    reportingLineAr: 'برئاسة وكيل الوزارة أو المدير العام المفوض'
  },
  {
    id: 'gov-03',
    nameEn: 'Program & Secretariat Directorate',
    nameAr: 'إدارة البرامج والأمانة العامة للمنتدى',
    roleEn: 'Core operational engine managing program execution, delegate lifecycle, schedule adherence, and venue logistics.',
    roleAr: 'المحرك التنفيذي المسؤول عن إدارة البرنامج الزمني، تجربة الوفود، التيسير العام والعمليات الميدانية.',
    responsibilitiesEn: [
      'Hourly schedule management and stage/session direction across all 5 days',
      'International and local delegate onboarding, accreditation, and logistics',
      'Bilingual simultaneous interpretation, VIP hosting, and protocol services'
    ],
    responsibilitiesAr: [
      'إدارة الجدول الزمني التفصيلي وسير الجلسات والفعاليات طيلة الأيام الخمسة',
      'تسجيل وإصدار بطاقات الحضور للوفود الدولية والمحلية وتأمين تنقلاتهم',
      'خدمات الترجمة الفورية ثنائية اللغة، الاستقبال والمراسم الرسمية'
    ],
    reportingLineEn: 'Executive Director of Q-MISSIONS',
    reportingLineAr: 'المدير التنفيذي لمنتدى المهمات الشبابية'
  },
  {
    id: 'gov-04',
    nameEn: 'Sports & Youth Development Unit',
    nameAr: 'وحدة تطوير الرياضة والقيادات الشبابية',
    roleEn: 'Curating the athletic pedagogy, inclusive drills, master facilitator briefings, and youth leadership curriculum.',
    roleAr: 'هندسة الجانب الرياضي والتنموي، تصميم التمارين التكيفية وتأهيل الميسرين الرياضيين والقياديين.',
    responsibilitiesEn: [
      'Vetting all sports drills against safety, energy exertion, and inclusivity criteria',
      'Training the cohort of 40 certified squad facilitators and coaches',
      'Overseeing the Youth Leadership Competency assessment rubric'
    ],
    responsibilitiesAr: [
      'فحص التمارين والأنشطة الرياضية والتأكد من ملاءمتها لكافة القدرات البدنية',
      'تدريب وتأهيل 40 ميسراً رياضياً وقائداً ميدانياً معتمداً',
      'الإشراف على تطبيق إطار الكفاءات القيادية وتقييم أداء المشاركين'
    ],
    reportingLineEn: 'Program Directorate',
    reportingLineAr: 'إدارة البرامج'
  },
  {
    id: 'gov-05',
    nameEn: 'Community Mission & Host Liaisons Unit',
    nameAr: 'وحدة المهمات الميدانية والتنسيق المجتمعي',
    roleEn: 'Bridging forum squads with local Qatari challenge owners, community centers, schools, and field hosts.',
    roleAr: 'حلقة الوصل بين فرق المنتدى والمؤسسات المجتمعية القطرية والنوادي والمرافق المستضيفة للمهمات.',
    responsibilitiesEn: [
      'Conducting pre-forum scoping visits to all 6 field sites across Qatar',
      'Securing venue clearance permits, parental consent forms, and municipal approvals',
      'Coordinating on-site beneficiary engagement and translation on Day 3'
    ],
    responsibilitiesAr: [
      'تنفيذ زيارات استكشافية وميدانية لكافة المواقع الستة في قطر قبل الفعالية',
      'استخراج التصاريح الرسمية ونماذج موافقة أولياء الأمور وتنسيق الدخول للمواقع',
      'إدارة تفاعل المستفيدين المحليين وتوفير الترجمة الميدانية في يوم التنفيذ'
    ],
    reportingLineEn: 'Program Directorate',
    reportingLineAr: 'إدارة البرامج'
  },
  {
    id: 'gov-06',
    nameEn: 'Digital Platform & Technical Architecture Unit',
    nameAr: 'وحدة المنصة الرقمية وهندسة التكنولوجيا',
    roleEn: 'Engineering and maintaining the digital Mission Control portal, participant passports, telemetry, and evidence ledger.',
    roleAr: 'تطوير وتشغيل منصة مركز التحكم الرقمي، جوازات المهمات، الربط الميداني وسجل توثيق البراهين.',
    responsibilitiesEn: [
      'Maintaining 99.99% portal availability with sovereign data residency in Qatar',
      'Managing participant mobile web apps, QR attendance scanners, and digital submissions',
      'Generating cryptographic verification hashes for all Verified Impact Receipts'
    ],
    responsibilitiesAr: [
      'ضمان جاهزية المنصة التقنية واستضافة البيانات داخل مراكز بيانات آمنة في قطر',
      'إدارة تطبيق الويب للمشاركين، ماسحات الحضور الرقمية ومنظومة رفع الأدلة',
      'توليد رموز التشفير المعتمدة لإصدار إيصالات الأثر الموثقة'
    ],
    reportingLineEn: 'Technical Steering Board',
    reportingLineAr: 'اللجنة التوجيهية الفنية'
  },
  {
    id: 'gov-07',
    nameEn: 'Impact Audit & Verification Directorate',
    nameAr: 'إدارة التدقيق الميداني وقياس الأثر',
    roleEn: 'Independent quality assurance body auditing evidence, verifying outcomes, and producing the 90-Day Legacy Report.',
    roleAr: 'هيئة تدقيق مستقلة تراجع الأدلة الميدانية، تعتمد إيصالات الأثر وتعد تقرير استدامة الـ 90 يوماً.',
    responsibilitiesEn: [
      'Independent review of all submitted receipts, data logs, and observer testimonials',
      'Authoring the published Qatar Global Youth Missions Atlas',
      'Executing the 90-Day post-forum field audits and annual policy whitepaper'
    ],
    responsibilitiesAr: [
      'المراجعة المستقلة لكافة الإيصالات والبيانات وشهادات المراقبين الميدانيين',
      'إعداد ونشر أطلس قطر العالمي للمهمات الشبابية',
      'إجراء الزيارات الميدانية التتبعية بعد 90 يوماً وصياغة التقرير الاستراتيجي السنوي'
    ],
    reportingLineEn: 'High Steering Committee',
    reportingLineAr: 'اللجنة التوجيهية العليا'
  }
];

export const RISK_MATRIX: RiskItem[] = [
  {
    id: 'risk-01',
    category: 'Safety & Health',
    riskEn: 'Physical injury during high-exertion sports drills or adaptive movement activities.',
    riskAr: 'حدوث إصابة بدنية أثناء التدريبات الرياضية أو الأنشطة الحركية التكيفية.',
    likelihood: 'Medium',
    impact: 'High',
    mitigationEn: 'Certified medical staff and ambulances stationed at every venue; mandatory pre-activity warm-ups, participant medical screening, and AED equipment on-site.',
    mitigationAr: 'تواجد طواقم إسعاف وطوارئ طبية في كافة المواقع؛ إحماء إلزامي مسبق، فحص استبيان اللياقة البدنية، وتوافر أجهزة إنعاش القلب.',
    proposedOwnerEn: 'Sports Development Unit & Medical Liaison',
    proposedOwnerAr: 'وحدة تطوير الرياضة ومنسق الطوارئ الطبية'
  },
  {
    id: 'risk-02',
    category: 'Safety & Health',
    riskEn: 'Heat exhaustion during outdoor field missions in daytime Qatar climate.',
    riskAr: 'الإجهاد الحراري خلال الأنشطة الميدانية الخارجية في مناخ قطر المفتوح.',
    likelihood: 'Medium',
    impact: 'High',
    mitigationEn: 'Outdoor missions restricted to early morning (07:30–10:30) and evening hours; refrigerated mobile misting tents, unlimited chilled electrolyte hydration, and heat-index monitoring.',
    mitigationAr: 'جدولة الأنشطة الخارجية في الصباح الباكر أو المساء فقط؛ خيام ترطيب مبردة، محطات إلكترولايت متواصلة، ومراقبة مؤشر الحرارة والرطوبة.',
    proposedOwnerEn: 'Field Safety Officer & Facilities Team',
    proposedOwnerAr: 'مسؤول السلامة الميدانية وإدارة المنشآت'
  },
  {
    id: 'risk-03',
    category: 'Safeguarding',
    riskEn: 'Safeguarding violations or inappropriate interaction involving minors and vulnerable participants.',
    riskAr: 'أي مخالفة لقواعد حماية الناشئة أو التعامل غير الملائم مع الفئات المستضعفة.',
    likelihood: 'Low',
    impact: 'High',
    mitigationEn: 'Universal background screening for all facilitators, mandatory adult-to-youth supervision ratio 1:8, transparent public spaces only, and dedicated safeguarding officer with anonymous hotline.',
    mitigationAr: 'تدقيق أمني لكافة الميسرين، نسبة إشراف إلزامية 1 مشرف لكل 8 مشاركين، حظر الأماكن المغلقة المنفردة، وخط ساخن لحماية الناشئة.',
    proposedOwnerEn: 'Ethics & Safeguarding Directorate',
    proposedOwnerAr: 'إدارة الأخلاقيات والحماية المجتمعية'
  },
  {
    id: 'risk-04',
    category: 'Safeguarding',
    riskEn: 'Unauthorized photography or filming of local community members without legal consent.',
    riskAr: 'تصوير أو نشر مواد مرئية للمستفيدين أو الجمهور المحلي دون موافقة خطية مسبقة.',
    likelihood: 'Medium',
    impact: 'Medium',
    mitigationEn: 'Designated media vests; written and bilingual digital consent slips required before any photo is captured or uploaded to the platform.',
    mitigationAr: 'سترات إعلامية مخصصة ومصرح بها؛ استمارة موافقة خطية ورقمية ثنائية اللغة قبل التقاط أي صورة أو رفعها للمنصة.',
    proposedOwnerEn: 'Media & Communications Unit',
    proposedOwnerAr: 'وحدة الإعلام والاتصال المؤسسي'
  },
  {
    id: 'risk-05',
    category: 'Operations',
    riskEn: 'Logistical transport delays moving 250+ delegates across multiple Doha hubs.',
    riskAr: 'تأخير في حركة النقل واللوجستيات لـ 250+ مشاركاً بين المواقع المختلفة في الدوحة.',
    likelihood: 'Medium',
    impact: 'Medium',
    mitigationEn: 'Dedicated fleet of modern electric buses with police escort coordination, GPS telemetry tracking, and 30-minute arrival buffers built into the schedule.',
    mitigationAr: 'أسطول حافلات كهربائية حديثة مع مسارات مرورية منسقة مسبقاً، تتبع GPS لحظي، واحتساب هوامش زمنية كافية في الجدول.',
    proposedOwnerEn: 'Transport & Logistics Coordinator',
    proposedOwnerAr: 'منسق النقل والعمليات اللوجستية'
  },
  {
    id: 'risk-06',
    category: 'Operations',
    riskEn: 'Accessibility barriers at older heritage field locations (e.g. Souq Waqif historic alleys).',
    riskAr: 'عوائق حركية أو صعوبة وصول في المواقع التراثية التاريخية (مثل أزقة سوق واقف القديمة).',
    likelihood: 'Medium',
    impact: 'Medium',
    mitigationEn: 'Advance accessibility audit of all mission routes; portable lightweight aluminum threshold ramps and dedicated golf-cart shuttles for mobility-impaired delegates.',
    mitigationAr: 'تدقيق مسبق لمسارات الحركة؛ توفير منحدرات ألمنيوم متنقلة وسيارات جولف كهربائية للمشاركين ذوي الإعاقة الحركية.',
    proposedOwnerEn: 'Accessibility Taskforce & Venue Liaisons',
    proposedOwnerAr: 'فريق إتاحة الوصول ومسؤولو المواقع'
  },
  {
    id: 'risk-07',
    category: 'Governance & Ethics',
    riskEn: 'Superficial or exaggerated claims of community impact (impact washing).',
    riskAr: 'المبالغة أو الادعاءات الوهمية وغير المثبتة بالأثر المجتمعي (Impact Washing).',
    likelihood: 'Low',
    impact: 'High',
    mitigationEn: 'Strict tripartite verification standard: every Verified Impact Receipt requires physical data logs, supervisor signoff, and independent third-party audit before publication.',
    mitigationAr: 'معيار تدقيق ثلاثي صارم: لا يعتمد أي إيصال أثر إلا بسجلات رقمية، توقيع المشرف الميداني، واعتماد مدقق خارجي مستقل.',
    proposedOwnerEn: 'Impact Audit & Verification Directorate',
    proposedOwnerAr: 'إدارة التدقيق الميداني وقياس الأثر'
  },
  {
    id: 'risk-08',
    category: 'Governance & Ethics',
    riskEn: 'Cultural misunderstanding or disrespect of local traditions and norms by international delegates.',
    riskAr: 'حدوث سوء فهم ثقافي أو عدم مراعاة العادات والتقاليد المحلية من بعض الوفود الدولية.',
    likelihood: 'Low',
    impact: 'Medium',
    mitigationEn: 'Comprehensive pre-departure briefing package, mandatory Day 1 Cultural Sensitivity workshop, and pairing each international squad with bilingual Qatari youth co-leaders.',
    mitigationAr: 'حقيبة إرشادية قبل الوصول، ورشة تعريفية إلزامية بالثقافة والتقاليد في اليوم الأول، ومرافقة قائد قطري ثنائي اللغة لكل فريق.',
    proposedOwnerEn: 'Cultural Diplomacy & Host Team',
    proposedOwnerAr: 'فريق الدبلوماسية الثقافية والاستضافة'
  },
  {
    id: 'risk-09',
    category: 'Financial & Continuity',
    riskEn: 'Budget variances driven by fluctuating international flight and technical equipment costs.',
    riskAr: 'تذبذب التكاليف التشغيلية لتذاكر الطيران الدولية وتأجير المعدات التقنية المتخصصة.',
    likelihood: 'Low',
    impact: 'Medium',
    mitigationEn: 'Fixed 7% contingency reserve in financial model, early block flight booking via national carrier (Qatar Airways), and long-term rental agreements.',
    mitigationAr: 'تخصيص احتياطي طوارئ 7% ثابت، حجز مسبق لتذاكر الطيران عبر الخطوط القطرية، وعقود توريد وتأجير محددة الأسعار.',
    proposedOwnerEn: 'Financial Controller & Ministry Procurement',
    proposedOwnerAr: 'المراقب المالي وإدارة المشتريات بالوزارة'
  },
  {
    id: 'risk-10',
    category: 'Financial & Continuity',
    riskEn: 'Discontinuation of mission outputs after the closing ceremony (post-event momentum loss).',
    riskAr: 'توقف مبادرات الفرق وعدم استمرارها بعد انتهاء فعاليات المنتدى.',
    likelihood: 'Medium',
    impact: 'High',
    mitigationEn: 'Mandatory Institutional Handover Protocol on Day 5; formal assignment of each mission to a local youth club, coupled with the audited 90-Day Follow-Up Report.',
    mitigationAr: 'بروتوكول تسليم مؤسسي ملزم في اليوم الخامس؛ تعيين جهة محلية مسؤولة عن كل مبادرة مع تدقيق ميداني إلزامي بعد 90 يوماً.',
    proposedOwnerEn: 'Partnerships & Legacy Directorate',
    proposedOwnerAr: 'إدارة الشراكات ومتابعة الإرث'
  }
];

export const DECISION_PATHWAYS: DecisionPathway[] = [
  {
    id: 'pathway-1',
    number: '01',
    titleEn: 'Strategic Concept Review & Alignment Briefing',
    titleAr: 'المراجعة الاستراتيجية للمفهوم والمواءمة المؤسسية',
    objectiveEn: 'Formally present the Q-MISSIONS operational model to the Ministry of Sports and Youth leadership, assessing strategic fit with Qatar National Vision 2030 and National Youth Policy.',
    objectiveAr: 'العرض الرسمي لمنهجية منتدى قطر للمهمات على قيادات وزارة الرياضة والشباب لبحث مواءمتها مع رؤية قطر 2030 والسياسة الوطنية للشباب.',
    scopeEn: 'Executive briefing, demonstration of interactive Mission Control software, and Q&A on operational model and institutional value.',
    scopeAr: 'جلسة إحاطة تنفيذية، استعراض حي لبوابة مركز التحكم الرقمي، وحوار استراتيجي حول الأثر والجدوى الوطنية.',
    resourceAssumptionsEn: 'Internal ministry meeting room and high-level representation (zero external capital outlay).',
    resourceAssumptionsAr: 'قاعة اجتماعات رسمية وتمثيل قيادي من الوزارة (دون أي تكلفة مالية أو ميزانية إضافية).',
    stakeholdersEn: [
      'Ministerial Leadership & Policy Advisors',
      'Directorate of Youth Affairs',
      'Directorate of Community Sports',
      'Q-MISSIONS Proposing Team'
    ],
    stakeholdersAr: [
      'قيادات الوزارة ومستشارو السياسات العامة',
      'إدارة الشؤون الشبابية',
      'إدارة الرياضة المجتمعية',
      'الفريق المستقل مقترح المبادرة'
    ],
    timelineEn: '2–3 Weeks following initial submission',
    timelineAr: 'أسبوعان إلى 3 أسابيع من تسليم المقترح',
    requiredApprovalsEn: 'Ministerial authorization for preliminary exploratory dialogue.',
    requiredApprovalsAr: 'موافقة وكيل الوزارة أو المدير المعني على عقد ورشة المراجعة الاستكشافية.',
    expectedDeliverableEn: 'Signed Strategic Alignment Memorandum and Terms of Reference for detailed feasibility.',
    expectedDeliverableAr: 'مذكرة توافق استراتيجي وتحديد نطاق دراسة الجدوى التشغيلية المشتركة.',
    decisionCriteriaEn: 'Degree of synergy with national sports participation goals and institutional appetite for action-based summits.',
    decisionCriteriaAr: 'مدى تطابق النموذج مع أهداف المشاركة الرياضية المجتمعية والجاهزية لتبني نموذج الفعاليات التطبيقية.'
  },
  {
    id: 'pathway-2',
    number: '02',
    titleEn: 'Joint Co-Design & Operational Feasibility Study',
    titleAr: 'التصميم المشترك ودراسة الجدوى التشغيلية الميدانية',
    objectiveEn: 'Collaboratively detail the exact Qatar host venues, challenge partners, security clearances, and precise QAR budget line items with ministry specialists.',
    objectiveAr: 'التطوير التشاركي لتحديد المواقع الدقيقة في قطر، الشركاء المحليين، التصاريح الأمنية، وتفصيل بنود الميزانية بالريال القطري.',
    scopeEn: 'Site visits to Aspire Zone, Education City, and Al Janoub; stakeholder workshops with Paralympic Committee, Ehsan, and local youth centers.',
    scopeAr: 'زيارات ميدانية لأسباير زون، المدينة التعليمية واستاد الجنوب؛ وورش عمل مع اتحاد الاحتياجات الخاصة، مركز إحسان والمراكز الشبابية.',
    resourceAssumptionsEn: 'Technical working group time allocation over a 6-week sprint.',
    resourceAssumptionsAr: 'تفريغ جزئي لفريق عمل فني مشترك على مدار 6 أسابيع من العمل المكثف.',
    stakeholdersEn: [
      'Ministry Technical Taskforce',
      'Aspire Zone Foundation Representatives',
      'Municipal Permitting Officers',
      'Digital Architecture Specialists'
    ],
    stakeholdersAr: [
      'فريق العمل الفني بوزارة الرياضة والشباب',
      'ممثلو مؤسسة أسباير زون والمنشآت الرياضية',
      'مسؤولو التصاريح والعمليات البلدية',
      'فريق هندسة المنصة الرقمية وتكنولوجيا المعلومات'
    ],
    timelineEn: '6 Weeks from completion of Pathway 1',
    timelineAr: '6 أسابيع من إتمام المسار الأول',
    requiredApprovalsEn: 'Joint Working Group formal charter signed by Directorate General.',
    requiredApprovalsAr: 'قرار وزاري بتشكيل فريق العمل المشترك وتفويض المهام.',
    expectedDeliverableEn: 'Full Operational Master Plan, Venue Guarantee Agreements, and Audited Final Budget.',
    expectedDeliverableAr: 'الخطة التشغيلية الشاملة، اتفاقيات حجز وتأمين المواقع، والميزانية التفصيلية المعتمدة.',
    decisionCriteriaEn: 'Operational feasibility, security compliance, stakeholder commitments, and budget efficiency.',
    decisionCriteriaAr: 'الجدوى التشغيلية، الموافقات الأمنية، التزامات الشركاء، وكفاءة الإنفاق المالي.'
  },
  {
    id: 'pathway-3',
    number: '03',
    titleEn: 'Controlled Pilot Mission Experience (Q-MISSIONS Alpha)',
    titleAr: 'المرحلة التجريبية الخاضعة للرقابة (النسخة الأولية للمنتدى)',
    objectiveEn: 'Execute a controlled, 3-day domestic and regional pilot with 80 youth across 3 signature mission worlds to empirically test the Mission Cycle before full global rollout.',
    objectiveAr: 'تنفيذ نسخة تجريبية مصغرة مدتها 3 أيام بمشاركة 80 شاباً في 3 عوالم لاختبار دورة المهمات وإيصالات الأثر قبل التوسع العالمي.',
    scopeEn: 'Execution of 3 active mission worlds (Move Together, Healthy Communities, Green Play) at Aspire and Al Janoub; issuance of first 15 Verified Impact Receipts.',
    scopeAr: 'تطبيق 3 عوالم مهمات في أسباير واستاد الجنوب؛ وإصدار أول 15 إيصال أثر موثق وتقييم التجربة بالكامل.',
    resourceAssumptionsEn: 'Scenario A Pilot Budget (~620,000 QAR) funded through designated ministry innovation grants or co-sponsorship.',
    resourceAssumptionsAr: 'ميزانية السيناريو الأول (~620 ألف ريال قطري) عبر مخصصات الابتكار بالوزارة أو رعاية مشتركة.',
    stakeholdersEn: [
      'Ministry Pilot Steering Unit',
      'Local Qatari Youth Centers (80 participants)',
      'Challenge Owner Institutions',
      'Independent Evaluation Observers'
    ],
    stakeholdersAr: [
      'وحدة الإشراف على التجربة بالوزارة',
      'المراكز الشبابية في قطر (80 مشاركاً)',
      'الجهات المستضيفة للتحديات',
      'مدققو التقييم وقياس الأثر المستقلون'
    ],
    timelineEn: 'Scheduled for Q4 2026 / Q1 2027',
    timelineAr: 'الربع الأخير من 2026 أو الربع الأول من 2027',
    requiredApprovalsEn: 'Official Ministerial approval for hosting and budget allocation.',
    requiredApprovalsAr: 'الموافقة الوزارية الرسمية على استضافة النسخة التجريبية وتخصيص الاعتماد المالي.',
    expectedDeliverableEn: 'Pilot Evaluation Dossier, 15 Live Impact Receipts, and Recommendation for Global Forum Edition.',
    expectedDeliverableAr: 'ملف تقييم التجربة، 15 إيصال أثر حي، وتقرير التوصية بانطلاق النسخة الدولية الكبرى.',
    decisionCriteriaEn: 'Pilot participant satisfaction >90%, zero safety incidents, and 100% verified evidence completion rate.',
    decisionCriteriaAr: 'تحقيق نسبة رضا تفوق 90%، صفر حوادث سلامة، ونسبة توثيق أدلة مكتملة 100%.'
  }
];
