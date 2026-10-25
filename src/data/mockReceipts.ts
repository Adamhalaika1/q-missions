import { ImpactReceipt } from '../types';

export const MOCK_IMPACT_RECEIPTS: ImpactReceipt[] = [
  {
    id: 'receipt-01',
    receiptNumber: 'VIR-QA-2026-0842',
    missionTitleEn: 'Adaptive Unified Sports Clinic & Grassroots Play Protocol',
    missionTitleAr: 'عيادة الرياضات التكيفية الموحدة وبروتوكول النشاط الشامل',
    worldId: 'move_together',
    teamName: 'Team Al-Adaam Horizons (فريق آفاق الأدعم)',
    teamMembers: [
      { name: 'Rashid Al-Kuwari', country: 'Qatar', role: 'Team Lead & Logistics' },
      { name: 'Sarah Jenkins', country: 'United Kingdom', role: 'Accessibility Auditor' },
      { name: 'Omar Mansour', country: 'Jordan', role: 'Athletic Drill Facilitator' },
      { name: 'Amina Diallo', country: 'Senegal', role: 'Participant Experience & Documentation' },
      { name: 'Chen Wei', country: 'Singapore', role: 'Data & Indicator Specialist' }
    ],
    challengeOwnerEn: 'Qatar Paralympic Committee & Al-Shaqab Community Sports Club',
    challengeOwnerAr: 'الاتحاد القطري لذوي الاحتياجات الخاصة ونادي الشقب للرياضة المجتمعية',
    locationEn: 'Aspire Dome Indoor Multi-Court 2, Doha',
    locationAr: 'قبة أسباير، الملعب متعدد الاستخدامات 2، الدوحة',
    objectiveEn: 'Remove mobility barriers for 30 youth with varied physical abilities through unified seated volleyball and acoustic boccia drills, delivering a verified peer coaching playbook.',
    objectiveAr: 'إزالة الحواجز الحركية أمام 30 شاباً من ذوي القدرات البدنية المتنوعة عبر تدريبات الكرة الطائرة من الجلوس والبوتشيا الصوتية، وتسليم دليل تدريب أقران معتمد.',
    plannedActivityEn: 'Conduct 4 progressive training sessions, safety clearance screening, and produce a bilingual 16-page coaching manual.',
    plannedActivityAr: 'تنفيذ 4 جلسات تدريبية تصاعدية، وإجراء فحص السلامة الميداني، وإصدار دليل تدريبي ثنائي اللغة من 16 صفحة.',
    completedActivityEn: 'Delivered 4 controlled 90-minute unified sports sessions at Aspire Dome with 34 active participants, supervised by 2 certified Paralympic instructors and a physiotherapist.',
    completedActivityAr: 'تم تنفيذ 4 جلسات رياضية موحدة مدة كل منها 90 دقيقة في قبة أسباير بمشاركة 34 شاباً وبإشراف مدربين بارالمبيين معتمدين وأخصائي علاج طبيعي.',
    verificationStatus: 'Verified',
    evidenceArtifacts: [
      {
        titleEn: 'Signed Attendance & Consent Roster (34 participants)',
        titleAr: 'سجل الحضور والموافقات المعتمد (34 مشاركاً)',
        type: 'document',
        hash: '0xQA-ATT-8829-VERIFIED',
        verifiedBy: 'Dr. Tariq Al-Hajri (Chief Medical & Safety Officer)'
      },
      {
        titleEn: 'Field Safety Audit Log & Zero-Incident Clearance',
        titleAr: 'سجل تدقيق السلامة الميدانية وخلو الجلسة من الإصابات',
        type: 'audit_log',
        hash: '0xQA-SAF-1049-CLEARED',
        verifiedBy: 'Aspire Dome Facilities Operations Team'
      },
      {
        titleEn: 'Physical Activity Heart-Rate Monitoring Telemetry',
        titleAr: 'بيانات مراقبة النبض والجهد البدني للمشاركين',
        type: 'metric',
        hash: '0xQA-DAT-4720-ANALYTICS',
        verifiedBy: 'Digital Mission Platform Data Validator'
      },
      {
        titleEn: 'Video Testimonials with Legal Guardian Consent (6 clips)',
        titleAr: 'شهادات مرئية موثقة بموافقة أولياء الأمور (6 مقاطع)',
        type: 'testimonial',
        hash: '0xQA-MED-3921-CONSENTED',
        verifiedBy: 'Safeguarding & Ethics Review Board'
      }
    ],
    participantLearningEn: [
      'Mastered universal design principles for sports equipment adjustments',
      'Developed high competency in non-verbal and acoustic cueing for visually impaired athletes',
      'Practiced collaborative crisis prevention and dynamic load balancing in athletic teams'
    ],
    participantLearningAr: [
      'إتقان مبادئ التصميم الشامل في تعديل المعدات الرياضية للملعب',
      'اكتساب كفاءة عالية في الإشارات الصوتية والحسية لتوجيه المكفوفين',
      'ممارسة بروتوكولات الوقاية وتوزيع الأحمال البدنية في الفرق متعددة القدرات'
    ],
    beneficiaryFeedbackEn: '"This was the very first time my son played team sports alongside non-disabled youth with equal joy, zero awkwardness, and total dignity." — Parent of participant Nasser (Age 16)',
    beneficiaryFeedbackAr: '"كانت هذه المرة الأولى التي يشارك فيها ابني في رياضة جماعية جنباً إلى جنب مع أقرانه دون أي حرج وبكرامة وسعادة تامة." — والد المشارك ناصر (16 عاماً)',
    directOutputsEn: [
      '1x Tested 24-page Adaptive Unified Sports Coaching Manual (Arabic/English)',
      '34x Youth participants completed 360 active minutes of supervised exercise',
      '2x Reusable adaptive boccia and acoustic ball kits donated to Al-Shaqab Youth Club'
    ],
    directOutputsAr: [
      'دليل تدريب الرياضة الموحدة الشاملة المعتمد المكون من 24 صفحة (عربي/إنجليزي)',
      '34 مشاركاً أتموا 360 دقيقة من النشاط البدني الخاضع للإشراف الطبي والرياضي',
      'حقيبتان من معدات كرات البوتشيا الصوتية التكيفية تم إهداؤهما لنادي الشقب'
    ],
    outcomeIndicators: [
      {
        metricEn: 'Active Heart-Rate Exertion Time (>110 bpm)',
        metricAr: 'زمن النشاط البدني الفعلي (أكثر من 110 نبضة/د)',
        target: 45,
        actual: 54,
        unitEn: 'mins/session',
        unitAr: 'دقيقة/جلسة'
      },
      {
        metricEn: 'Participant Self-Reported Confidence in Movement',
        metricAr: 'مؤشر الثقة الذاتية في الحركة والرياضة',
        target: 80,
        actual: 92,
        unitEn: '% positive',
        unitAr: '% إيجابي'
      },
      {
        metricEn: 'Peer Inclusivity Perception Index',
        metricAr: 'مؤشر تقبل وتكامل الأقران الرياضي',
        target: 85,
        actual: 96,
        unitEn: '% satisfaction',
        unitAr: '% رضا'
      }
    ],
    limitationsEn: 'The pilot was conducted in an indoor controlled temperature facility; external high-temperature adaptation protocols require further seasonal testing during summer months.',
    limitationsAr: 'تم تنفيذ التجربة داخل قاعة مكيفة ومضبوطة؛ وتتطلب التمارين في الملاعب الخارجية فترات اختبار إضافية خلال أشهر الصيف لتحديد بروتوكولات الحرارة.',
    followUpOwnerEn: 'Ministry of Sports and Youth — Youth Centers & Inclusive Programs Department',
    followUpOwnerAr: 'وزارة الرياضة والشباب — إدارة المراكز الشبابية والبرامج الشاملة',
    nextStepsEn: [
      'Integrate the 24-page playbook into 5 regional youth centers across Qatar in Q4 2026',
      'Schedule quarterly unified sports weekend tournaments',
      'Present outcomes at the 90-Day Q-MISSIONS Legacy Review'
    ],
    nextStepsAr: [
      'اعتماد الدليل التدريبي وتعميمه على 5 مراكز شبابية في قطر خلال الربع الأخير من 2026',
      'برمجة بطولات موسمية للرياضة الموحدة في عطلات نهاية الأسبوع',
      'عرض النتائج النهائية في مراجعة إرث منتدى قطر للمهمات بعد 90 يوماً'
    ],
    completionTimestamp: '2026-10-14T17:45:00Z',
    verificationBadge: 'OFFICIALLY VERIFIED & AUDITED'
  },
  {
    id: 'receipt-02',
    receiptNumber: 'VIR-QA-2026-0419',
    missionTitleEn: 'Al Janoub Zero Single-Use Plastic Youth Tournament Pilot',
    missionTitleAr: 'مبادرة استاد الجنوب للبطولات الرياضية الخالية من البلاستيك',
    worldId: 'green_play',
    teamName: 'Team Eco-Strikers (فريق فرسان الاستدامة)',
    teamMembers: [
      { name: 'Maryam Al-Sulaiti', country: 'Qatar', role: 'Team Captain & Operations' },
      { name: 'Knut Lindqvist', country: 'Sweden', role: 'Circular Materials Engineer' },
      { name: 'Fatima Zahra El-Idrissi', country: 'Morocco', role: 'Auditor & Community Liaison' },
      { name: 'Arjun Patel', country: 'India', role: 'Waste Telemetry & Analytics' }
    ],
    challengeOwnerEn: 'Ministry of Sports and Youth & Al Wakrah Sustainable Stadium Precinct',
    challengeOwnerAr: 'وزارة الرياضة والشباب ومجمع استاد الجنوب المستدام بالوكرة',
    locationEn: 'Al Janoub Stadium Community Pitches, Al Wakrah',
    locationAr: 'الملاعب المجتمعية بمحيط استاد الجنوب، الوكرة',
    objectiveEn: 'Eliminate 100% of single-use disposable water bottles from a 250-player youth grassroots tournament, replacing them with mobile chilled hydration stations and stainless-steel canisters.',
    objectiveAr: 'إلغاء 100% من عبوات المياه البلاستيكية أحادية الاستخدام في بطولة شبابية تضم 250 لاعباً، واستبدالها بمحطات ترطيب نقية مبردة وعبوات معدنية مستدامة.',
    plannedActivityEn: 'Install 6 high-flow chilled refill stations, provide 300 numbered stainless-steel flasks, track water dispensed, and audit pitch waste.',
    plannedActivityAr: 'تركيب 6 محطات ترطيب مبردة سريعة التدفق، توزيع 300 عبوة معدنية مرقمة، رصد كميات المياه وتدقيق النفايات الناتجة.',
    completedActivityEn: 'Successfully provided hydration to 260 youth players and 45 coaches across 18 matches without a single single-use plastic bottle entering the field.',
    completedActivityAr: 'تم تزويد 260 لاعباً و45 مدرباً بمياه الشرب النقية خلال 18 مباراة دون دخول أي عبوة بلاستيكية واحدة إلى أرضية الميدان.',
    verificationStatus: 'Verified',
    evidenceArtifacts: [
      {
        titleEn: 'Digital Water Meter Flow Logs (1,480 Liters Dispensed)',
        titleAr: 'سجلات عدادات التدفق الرقمية (1,480 لتراً تم ضخها)',
        type: 'metric',
        hash: '0xQA-WTR-9932-VERIFIED',
        verifiedBy: 'Al Wakrah Municipal Utilities Inspection Team'
      },
      {
        titleEn: 'Waste Diverted Certificate: 142kg Plastic Saved',
        titleAr: 'شهادة فرز النفايات: وفر 142 كغم من البلاستيك',
        type: 'document',
        hash: '0xQA-ECO-4182-CERTIFIED',
        verifiedBy: 'Qatar National Circular Economy Taskforce'
      },
      {
        titleEn: 'Pitch Perimeter Video Time-Lapse & Bin Inspections',
        titleAr: 'توثيق تسلسلي مرئي لنظافة الملاعب وحاويات الفرز',
        type: 'audit_log',
        hash: '0xQA-VIS-6031-AUDITED',
        verifiedBy: 'Third-Party Environmental Auditor'
      }
    ],
    participantLearningEn: [
      'Gained field operations experience in large-scale event logistics without single-use consumables',
      'Developed behavioral nudge signage that reduced refill queuing times from 4 mins to 38 seconds'
    ],
    participantLearningAr: [
      'اكتساب مهارات عملية في إدارة لوجستيات الفعاليات الكبرى دون استهلاك مواد أحادية',
      'تصميم حوافز توجيهية سلوكية خفضت زمن الانتظار عند محطات المياه من 4 دقائق إلى 38 ثانية'
    ],
    beneficiaryFeedbackEn: '"The players loved the ice-cold refill flasks and felt proud to protect Qatar’s environment while competing for the trophy." — Coach Mohammed Al-Kuwari',
    beneficiaryFeedbackAr: '"أحب اللاعبون عبوات المياه الباردة وشعروا بفخر حقيقي لحماية بيئة قطر أثناء تنافسهم على الكأس." — الكابتن محمد الكواري',
    directOutputsEn: [
      '1,480 Liters of chilled drinking water safely served',
      '2,960 Single-use plastic bottles avoided from landfill',
      '1x Event Greening Protocol Guide adopted by Al Wakrah Club'
    ],
    directOutputsAr: [
      '1,480 لتراً من مياه الشرب المبردة تم تقديمها بأعلى معايير النظافة',
      'منع 2,960 عبوة بلاستيكية من الوصول للمرادم أو تلويث البيئة',
      'دليل تشغيل الفعاليات الرياضية الخضراء تم اعتماده في نادي الوكرة'
    ],
    outcomeIndicators: [
      {
        metricEn: 'Plastic Waste Reduction',
        metricAr: 'نسبة خفض النفايات البلاستيكية',
        target: 100,
        actual: 100,
        unitEn: '% elimination',
        unitAr: '% إلغاء كامل'
      },
      {
        metricEn: 'Cost Savings vs Single-Use Bottled Water',
        metricAr: 'الوفر المالي مقارنة بالمياه المعبأة',
        target: 25,
        actual: 38,
        unitEn: '% lower cost',
        unitAr: '% خفض بالتكلفة'
      }
    ],
    limitationsEn: 'Required initial plumbing connections; for open desert routes, pressurized mobile tank trucks must be utilized.',
    limitationsAr: 'تطلب النظام تمديدات مياه بلدية في الموقع؛ وفي المسارات الصحراوية المفتوحة يلزم استخدام صهاريج مياه مضغوطة متخصصة.',
    followUpOwnerEn: 'Ministry of Sports and Youth — Facilities & Sports Infrastructure Directorate',
    followUpOwnerAr: 'وزارة الرياضة والشباب — إدارة المنشآت والمرافق الرياضية',
    nextStepsEn: [
      'Scale mobile hydration trailers to all national youth soccer league grounds in 2027',
      'Incorporate eco-standards into Ministry tournament licensing criteria'
    ],
    nextStepsAr: [
      'تعميم وحدات الترطيب المتنقلة على ملاعب دوري الفئات السنية في 2027',
      'إدراج معايير الاستدامة الخضراء كشرط أساسي لترخيص البطولات من الوزارة'
    ],
    completionTimestamp: '2026-10-14T18:15:00Z',
    verificationBadge: 'OFFICIALLY VERIFIED & AUDITED'
  }
];
