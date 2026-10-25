import { ProgramDay } from '../types';

export const FIVE_DAY_PROGRAM: ProgramDay[] = [
  {
    dayNumber: 1,
    dateStr: 'Day 1 — The Connection | اليوم الأول: التلاقي',
    themeEn: 'The Connection: Meet the World. Understand the Mission.',
    themeAr: 'التلاقي: التقِ بالعالم.. واستوعب أبعاد المهمة',
    subtitleEn: 'From Individual Delegates to High-Performance Multidisciplinary Mission Squads',
    subtitleAr: 'من مشاركين منفردين إلى فرق عمل متعددة التخصصات والثقافات',
    coreOutputEn: 'Validated Team Roster, Signed Mission Brief, and Safeguarding Pledge.',
    coreOutputAr: 'اعتماد تشكيل الفرق، توقيع وثيقة المهمة الميدانية، وميثاق السلامة والحماية.',
    sessions: [
      {
        time: '08:30 – 09:30',
        titleEn: 'Delegate Arrival, Accreditation & Mission Kit Handover',
        titleAr: 'استقبال الوفود، التسجيل الرسمي وتسليم حقيبة المهمات',
        locationEn: 'Aspire Grand Foyer & Mission Check-In Desk',
        locationAr: 'بهو أسباير الرئيسي ومكتب تسجيل المهمات',
        type: 'ceremony',
        descriptionEn: 'Delegates receive physical Mission Passports, biometric sensor badges, team jerseys, and technical field tablets.',
        descriptionAr: 'استلام جوازات المهمات المطبوعة، بطاقات الحضور الذكية، زي الفرق الرسمي والأجهزة اللوحية الميدانية.',
        facilitatorEn: 'Secretariat Operations Team',
        facilitatorAr: 'فريق العمليات والأمانة العامة للمنتدى'
      },
      {
        time: '09:30 – 10:30',
        titleEn: 'Opening Plenary: "From Talk to Action — Why Missions Matter"',
        titleAr: 'الجلسة الافتتاحية: من الكلام إلى الفعل — لماذا نصنع المهمات؟',
        locationEn: 'Aspire Amphitheater',
        locationAr: 'مسرح أسباير الرئيسي',
        type: 'keynote',
        descriptionEn: 'Inspiring keynote framing Q-MISSIONS as Qatar’s international paradigm shift from passive summit listening to tangible community action.',
        descriptionAr: 'كلمة افتتاحية ملهمة تبرز تحول دولة قطر نحو نموذج المؤتمرات القائم على الإنجاز الميداني والأثر الملموس.',
        facilitatorEn: 'Ministerial Leadership & Youth Keynote Innovator',
        facilitatorAr: 'قيادات وزارة الرياضة والشباب ومتحدثون دوليون ملهمون'
      },
      {
        time: '10:45 – 12:15',
        titleEn: 'Experience 01: The Global Team Assembly & Synergy Matching',
        titleAr: 'التجربة 01: تشكيل الفرق العالمية والتكامل متعدد التخصصات',
        locationEn: 'Collaboration Arena A & B',
        locationAr: 'قاعة التعاون المشترك (أ) و (ب)',
        type: 'workshop',
        descriptionEn: 'Algorithmic yet human-centered team balancing: pairing engineers, athletic facilitators, designers, and community storytellers.',
        descriptionAr: 'تشكيل فرق متوازنة تجمع المبرمجين، الرياضيين، المصممين والميسرين المجتمعيين لضمان تكامل القدرات.',
        facilitatorEn: 'International Facilitation Consortium',
        facilitatorAr: 'فريق التيسير الدولي لتطوير القيادات الشابة'
      },
      {
        time: '12:15 – 13:30',
        titleEn: 'Athletic Trust & Teamwork Circuit',
        titleAr: 'تحديات رياضية لتعزيز الثقة وروح الفريق الواحد',
        locationEn: 'Aspire Indoor Athletic Track',
        locationAr: 'المضمار الداخلي لقبة أسباير',
        type: 'field',
        descriptionEn: 'Movement-based icebreakers: non-verbal cooperative relays, blind navigation pairs, and tactile team challenges.',
        descriptionAr: 'أنشطة حركية رياضية تكسر الحواجز وتعتمد على التتابع التعاوني والتوجيه الحسي لبناء الثقة الفورية.',
        facilitatorEn: 'Certified Master Sports Coaches',
        facilitatorAr: 'مدربون رياضيون معتمدون في بناء فرق العمل',
        safetyGateEn: 'Pre-activity stretching, certified athletic trainers on pitch.',
        safetyGateAr: 'إحماء رياضي شامل وإشراف طبي كامل داخل المضمار.'
      },
      {
        time: '13:30 – 14:45',
        titleEn: 'Healthy Athletic Networking Lunch & Prayer Break',
        titleAr: 'استراحة الصلاة وغداء رياضي صحي متوازن',
        locationEn: 'Aspire Athlete Hospitality Hall',
        locationAr: 'قاعة الضيافة الرياضية بأسباير',
        type: 'cultural',
        descriptionEn: 'Nutrition-crafted meal designed for sustained energy, intercultural conversational tables.',
        descriptionAr: 'وجبة متوازنة معدة لدعم النشاط البدني مع طاولات حوارية بين الثقافات.',
        facilitatorEn: 'Sports Nutrition Team',
        facilitatorAr: 'فريق التغذية الرياضية'
      },
      {
        time: '14:45 – 16:30',
        titleEn: 'Experience 02: The Mission Reveal & Challenge Owner Briefings',
        titleAr: 'التجربة 02: الكشف عن المهمات ولقاء أصحاب التحديات',
        locationEn: 'Digital Mission Control Center',
        locationAr: 'مركز التحكم الرقمي بالمهمات',
        type: 'workshop',
        descriptionEn: 'Official handover of the 6 Mission Worlds. Teams receive dossier on actual Qatari community challenges from local hosts.',
        descriptionAr: 'الكشف الرسمي عن عوالم المهمات الستة وتوزيع الملفات الميدانية المعتمدة من الجهات المستضيفة في قطر.',
        facilitatorEn: 'Q-MISSIONS Challenge Coordinators',
        facilitatorAr: 'منسقو تحديات منتدى قطر للمهمات'
      },
      {
        time: '16:45 – 18:00',
        titleEn: 'Institutional Safeguarding, Ethics & Consent Protocol',
        titleAr: 'ميثاق الحماية المؤسسية، أخلاقيات العمل وضوابط الموافقة',
        locationEn: 'Aspire Main Hall',
        locationAr: 'القاعة الكبرى بأسباير',
        type: 'workshop',
        descriptionEn: 'Mandatory briefing on safety in community settings, legal consent, respect for vulnerable groups, and incident reporting.',
        descriptionAr: 'ورشة إلزامية حول سلامة المشاركين في الميدان، حماية الخصوصية، واحترام التقاليد والضوابط الأخلاقية.',
        facilitatorEn: 'Legal & Safeguarding Lead Advisor',
        facilitatorAr: 'المستشار القانوني وأخصائي الحماية المجتمعية'
      }
    ]
  },
  {
    dayNumber: 2,
    dateStr: 'Day 2 — The Preparation | اليوم الثاني: الاستعداد',
    themeEn: 'The Preparation: Think Together. Prepare to Act.',
    themeAr: 'الاستعداد: التفكير المشترك.. والجاهزية للانطلاق',
    subtitleEn: 'Translating Complex Needs into Actionable Protocols, Safety Plans & Deliverables',
    subtitleAr: 'تحويل الاحتياجات إلى خطط عمل تشغيلية وبروتوكولات سلامة معتمدة',
    coreOutputEn: 'Formally Approved Mission Blueprint & Field Safety Gate Clearance.',
    coreOutputAr: 'اعتماد مخطط المهمة التشغيلي واجتياز بوابة الفحص الأمني والسلامة الميدانية.',
    sessions: [
      {
        time: '08:30 – 10:15',
        titleEn: 'Mission Canvas Co-Design Sprint',
        titleAr: 'مختبر التصميم التشاركي لمخطط المهمة الميدانية',
        locationEn: 'Innovation Lab Pods (Pods 1–12)',
        locationAr: 'مختبرات الابتكار والعمل الجماعي (1–12)',
        type: 'workshop',
        descriptionEn: 'Structured team ideation: defining core problem, hypothesis, physical activity rules, required gear, and expected outputs.',
        descriptionAr: 'جلسات عصف ذهني مكثفة لتحديد المشكلة، صياغة الأنشطة الحركية، حصر الأدوات المطلوبة وتحديد المخرجات.',
        facilitatorEn: 'Design Thinking & Service Architects',
        facilitatorAr: 'خبراء التفكير التصميمي وهندسة الخدمات المجتمعية'
      },
      {
        time: '10:30 – 12:00',
        titleEn: 'Inclusive Sports & Universal Design Clinic',
        titleAr: 'عيادة التدريب على التصميم الشامل والرياضة التكيفية',
        locationEn: 'Paralympic Training Court',
        locationAr: 'ملعب التدريب البارالمبي التكيفي',
        type: 'workshop',
        descriptionEn: 'Hands-on instruction: how to modify any game or movement drill for people with visual, hearing, or physical impairments.',
        descriptionAr: 'تدريب عملي على تكييف أي لعبة حركية أو مسار بدني ليلائم المكفوفين وضعاف السمع وذوي الإعاقة الحركية.',
        facilitatorEn: 'Adaptive Athletics Specialists',
        facilitatorAr: 'أخصائيو الرياضات التكيفية والدمج الشامل'
      },
      {
        time: '12:00 – 13:30',
        titleEn: 'Field Safety, Heat Management & Risk Verification Gate',
        titleAr: 'بوابة تدقيق السلامة الميدانية والإجهاد الحراري',
        locationEn: 'Control Center Operations Room',
        locationAr: 'غرفة عمليات مركز التحكم',
        type: 'review',
        descriptionEn: 'Mandatory approval checkpoint: each team pitches their safety plan to the Safety Directorate before being cleared for Day 3.',
        descriptionAr: 'بوابة تدقيق إلزامية: يقدم كل فريق خطة إدارة المخاطر والطوارئ لإدارة السلامة للحصول على تصريح النزول للميدان.',
        facilitatorEn: 'Safety & Risk Assessment Board',
        facilitatorAr: 'لجنة تقييم المخاطر والسلامة العامة',
        safetyGateEn: 'Teams without certified safety clearance cannot proceed to external venues.',
        safetyGateAr: 'لا يُمنح أي فريق تصريح النزول للميدان دون اجتياز كافة شروط السلامة.'
      },
      {
        time: '13:30 – 14:45',
        titleEn: 'Lunch & Peer Review Exchanges',
        titleAr: 'غداء العمل وتبادل الآراء بين قادة الفرق',
        locationEn: 'Hospitality Terrace',
        locationAr: 'تراس الضيافة المجتمعية',
        type: 'cultural',
        descriptionEn: 'Cross-squad critique: teams challenge each others assumptions and share practical community coordination insights.',
        descriptionAr: 'مراجعة نقدية بناءة بين الفرق لتبادل الحلول وتجاوز التحديات التشغيلية المحتملة.',
        facilitatorEn: 'Squad Mentors',
        facilitatorAr: 'مرشدو الفرق والموجهون الميدانيون'
      },
      {
        time: '14:45 – 17:30',
        titleEn: 'Field Kit Assembly & Digital Telemetry Simulation',
        titleAr: 'تجهيز حقائب العمل الميداني واختبار الربط الرقمي',
        locationEn: 'Logistics Hangar',
        locationAr: 'مستودع اللوجستيات والمعدات الميدانية',
        type: 'workshop',
        descriptionEn: 'Teams pack mobile kits (cones, sensors, accessibility aids, first aid, cameras) and test digital evidence submission workflows.',
        descriptionAr: 'تجهيز الحقائب الميدانية (أقماع، حساسات، أدوات وصول، إسعافات، كاميرات) واختبار رفع الأدلة في منصة التحكم.',
        facilitatorEn: 'Digital Platform & Logistics Squad',
        facilitatorAr: 'فريق المنصة الرقمية والدعم اللوجستي'
      }
    ]
  },
  {
    dayNumber: 3,
    dateStr: 'Day 3 — The Action | اليوم الثالث: الإنجاز الميداني',
    themeEn: 'The Action: Make Participation Meaningful.',
    themeAr: 'الإنجاز الميداني: عندما تصبح المشاركة فعلاً مؤثراً',
    subtitleEn: 'Controlled Supervised Execution Across 6 Iconic Qatari Community & Sports Hubs',
    subtitleAr: 'تنفيذ ميداني خاضع للإشراف الكامل في 6 مواقع مجتمعية ورياضية بارزة في قطر',
    coreOutputEn: 'Completed Field Interventions & Timestamped Primary Evidence Logs.',
    coreOutputAr: 'تنفيذ الأنشطة الميدانية وتوثيق سجلات الأدلة والبيانات الحية المعتمدة.',
    sessions: [
      {
        time: '07:30 – 08:30',
        titleEn: 'Squad Dispatch & Radio Communications Check',
        titleAr: 'انطلاق الفرق الميدانية وفحص شبكة الاتصال اللاسلكي',
        locationEn: 'Transport Hub — Aspire East Gate',
        locationAr: 'نقطة الانطلاق — البوابة الشرقية لأسباير',
        type: 'field',
        descriptionEn: 'Teams board dedicated clean-energy shuttle buses with assigned field supervisors, first-aid officers, and translators.',
        descriptionAr: 'صعود الحافلات المخصصة مع المشرفين الميدانيين، طواقم الإسعاف والمترجمين المتخصصين.',
        facilitatorEn: 'Operations & Transport Dispatch',
        facilitatorAr: 'إدارة العمليات والنقل الميداني',
        safetyGateEn: 'All team tracking beacons active; medical kits verified.',
        safetyGateAr: 'تفعيل أجهزة التتبع الميداني والتحقق من الحقائب الطبية.'
      },
      {
        time: '09:00 – 13:00',
        titleEn: 'Active Supervised Mission Execution (Part 1)',
        titleAr: 'التنفيذ الميداني للمهمات تحت الإشراف الكامل (الجزء 1)',
        locationEn: '6 Field Venues: Aspire, Oxygen Park, Katara, Souq Waqif, Al Janoub, QNL',
        locationAr: '6 مواقع ميدانية: أسباير، حديقة الأكسجين، كتارا، سوق واقف، استاد الجنوب، مكتبة قطر',
        type: 'field',
        descriptionEn: 'Teams carry out scheduled community activities: adaptive clinics, senior movement workshops, zero-waste audits, and heritage games.',
        descriptionAr: 'بدء الأنشطة الميدانية المجدولة: العيادات التكيفية، تمارين كبار السن، تدقيق النفايات، وتحديات التراث.',
        facilitatorEn: 'Field Supervisors & Local Venue Managers',
        facilitatorAr: 'المشرفون الميدانيون ومديرو المنشآت المحلية'
      },
      {
        time: '13:00 – 14:15',
        titleEn: 'On-Site Nutrition Break & Hydration Verification',
        titleAr: 'استراحة الغداء في الموقع وتدقيق مؤشرات الترطيب',
        locationEn: 'Designated Venue Partner Pavilions',
        locationAr: 'أجنحة الشركاء الميدانيين في كل موقع',
        type: 'cultural',
        descriptionEn: 'Team reflection over local Qatari hospitality; hydration checks and wellness reviews.',
        descriptionAr: 'استراحة وتناول وجبة صحية مع فحص المؤشرات الحيوية والتأكد من راحة المشاركين.',
        facilitatorEn: 'Venue Welfare Coordinators',
        facilitatorAr: 'منسقو الرعاية والصحة بالمواقع'
      },
      {
        time: '14:15 – 17:00',
        titleEn: 'Active Supervised Mission Execution (Part 2) & Stakeholder Review',
        titleAr: 'استكمال المهام الميدانية والمراجعة التشاركية مع المستفيدين',
        locationEn: 'Field Venues',
        locationAr: 'المواقع الميدانية الرسمية',
        type: 'field',
        descriptionEn: 'Closing pilot phase: capturing beneficiary survey responses, counting metrics, and formal handover to local site manager.',
        descriptionAr: 'المرحلة الختامية: رصد استبيانات المستفيدين، حصر المؤشرات الرقمية، والتوثيق المشترك مع مسؤولي الموقع.',
        facilitatorEn: 'Field Verification Leads',
        facilitatorAr: 'مسؤولو التوثيق والتدقيق الميداني'
      },
      {
        time: '17:30 – 19:30',
        titleEn: 'Return to Mission Control & Debriefing Circle',
        titleAr: 'العودة لمركز التحكم وحلقة تفريغ التجربة الميدانية',
        locationEn: 'Aspire Central Arena',
        locationAr: 'الساحة المركزية بأسباير',
        type: 'review',
        descriptionEn: 'Guided emotional and cognitive debriefing: what surprised teams in reality, what adapted on the ground, and lessons learned.',
        descriptionAr: 'جلسة تأملية موجهة لمناقشة المفارقة بين الخطة النظرية والتطبيق الواقعي وأبرز الدروس المستفادة.',
        facilitatorEn: 'Lead Youth Leadership Advisors',
        facilitatorAr: 'كبار موجهي القيادات الشبابية'
      }
    ]
  },
  {
    dayNumber: 4,
    dateStr: 'Day 4 — The Verification | اليوم الرابع: التوثيق والتدقيق',
    themeEn: 'The Verification: Prove the Value. Learn from Reality.',
    themeAr: 'التوثيق والتدقيق: إثبات القيمة.. والتعلم من معطيات الواقع',
    subtitleEn: 'Transforming Raw Field Evidence into Immutable Verified Impact Receipts',
    subtitleAr: 'تحويل معطيات الميدان إلى إيصالات أثر موثقة ومؤشرات أداء مثبتة بالبراهين',
    coreOutputEn: 'Verified Impact Receipts (VIRs) & Production of Impact Gallery Displays.',
    coreOutputAr: 'إصدار إيصالات الأثر المعتمدة (VIR) وتجهيز أجنحة معرض الأثر المجتمعي.',
    sessions: [
      {
        time: '08:30 – 10:30',
        titleEn: 'Evidence Auditing Clinic & Data Triangulation',
        titleAr: 'عيادة تدقيق الأدلة والتحقق الثلاثي من البيانات',
        locationEn: 'The Evidence Room — Level 2',
        locationAr: 'غرفة توثيق الأدلة — الطابق الثاني',
        type: 'review',
        descriptionEn: 'Teams review raw evidence against strict auditing standards: participant rosters, time logs, supervisor signatures, and telemetry.',
        descriptionAr: 'مطابقة مخرجات الفرق مع معايير التدقيق: كشوف التوقيعات، السجلات الزمنية، توقيعات المشرفين، والقياسات الرقمية.',
        facilitatorEn: 'Evaluation & Impact Specialists',
        facilitatorAr: 'خبراء التقييم وقياس الأثر المجتمعي'
      },
      {
        time: '10:45 – 12:45',
        titleEn: 'Experience 03: The Impact Receipt Finalization Sprint',
        titleAr: 'التجربة 03: صياغة واعتماد إيصال الأثر الموثق (VIR)',
        locationEn: 'Digital Lab 1–6',
        locationAr: 'المختبرات الرقمية 1–6',
        type: 'workshop',
        descriptionEn: 'Formatting and uploading final structured digital receipts: distinguishing direct outputs from outcomes and systemic impact.',
        descriptionAr: 'رفع واعتماد إيصالات الأثر الرقمية عبر المنصة وتوثيق التمايز بين النشاط المنفذ والأثر المستدام طويل المدى.',
        facilitatorEn: 'Platform Architecture Team',
        facilitatorAr: 'فريق هندسة وتطوير المنصة الرقمية'
      },
      {
        time: '12:45 – 14:00',
        titleEn: 'Prayer & Healthy Lunch Break',
        titleAr: 'استراحة الصلاة والغداء الصحي',
        locationEn: 'Hospitality Pavilion',
        locationAr: 'قاعة الضيافة المركزية',
        type: 'cultural',
        descriptionEn: 'Replenishing energy with chef-curated balanced nutrition.',
        descriptionAr: 'استراحة وتناول وجبة صحية متوازنة في أجواء تعزز التواصل.',
        facilitatorEn: 'Hospitality Team',
        facilitatorAr: 'فريق الضيافة'
      },
      {
        time: '14:00 – 17:00',
        titleEn: 'Curating the Community Impact Gallery Exhibitions',
        titleAr: 'تجهيز أجنحة معرض الأثر المجتمعي التفاعلي',
        locationEn: 'Main Exhibition Hall',
        locationAr: 'قاعة المعارض الرئيسية',
        type: 'workshop',
        descriptionEn: 'Teams build interactive physical and digital showcase stations featuring their toolkits, prototype gear, and audio stories.',
        descriptionAr: 'بناء الأجنحة التفاعلية لعرض حقائب الأدوات، النماذج الميدانية المطورة، والشهادات الصوتية والمرئية للمستفيدين.',
        facilitatorEn: 'Exhibition & Spatial Experience Designers',
        facilitatorAr: 'مصممو المعارض وتجارب العرض التفاعلية'
      },
      {
        time: '17:15 – 19:00',
        titleEn: 'Dress Rehearsal & Pitch Calibration with Senior Advisors',
        titleAr: 'البروفة التنسيقية وتدريب العرض مع كبار المستشارين',
        locationEn: 'Impact Gallery Stage',
        locationAr: 'منصة مسرح معرض الأثر',
        type: 'review',
        descriptionEn: 'Rigorous 3-minute executive presentation coaching: focusing on evidence, institutional continuation, and measurable feasibility.',
        descriptionAr: 'تدريب احترافي على تقديم عروض موجزة مدتها 3 دقائق تركز على البراهين، استدامة الحل والجدوى المؤسسية.',
        facilitatorEn: 'Executive Presentation Coaches',
        facilitatorAr: 'خبراء العرض المؤسسي والإلقاء القيادي'
      }
    ]
  },
  {
    dayNumber: 5,
    dateStr: 'Day 5 — The Legacy | اليوم الخامس: الإرث والاستدامة',
    themeEn: 'The Legacy: What Happens After the Forum?',
    themeAr: 'الإرث والاستدامة: ماذا بعد اختتام المنتدى؟',
    subtitleEn: 'From Forum Finale to Year-Round Institutional Community Impact in Qatar',
    subtitleAr: 'من حفل ختامي إلى برامج استدامة مؤسسية مستمرة على مدار العام',
    coreOutputEn: 'Integrated Qatar Global Youth Missions Atlas & Signed 90-Day Handover Pledges.',
    coreOutputAr: 'إطلاق أطلس المهمات الشبابية واعتماد تعهدات خطة المتابعة لـ 90 يوماً.',
    sessions: [
      {
        time: '09:00 – 11:30',
        titleEn: 'Experience 04: The Community Impact Gallery & Public Walkthrough',
        titleAr: 'التجربة 04: افتتاح معرض الأثر المجتمعي وجولة القيادات',
        locationEn: 'Main Exhibition Hall',
        locationAr: 'قاعة المعارض الكبرى',
        type: 'ceremony',
        descriptionEn: 'Vip dignitaries, ministry leaders, federation heads, and community directors tour all squad exhibits, interacting with live prototypes.',
        descriptionAr: 'جولة رسمية لقيادات وزارة الرياضة والشباب، رؤساء الاتحادات، وممثلي المؤسسات للاطلاع على مخرجات الفرق وتجربة النماذج.',
        facilitatorEn: 'Leadership Protocol & Squad Captains',
        facilitatorAr: 'مكتب المراسم وقادة الفرق الميدانية'
      },
      {
        time: '11:45 – 13:00',
        titleEn: 'The Partnership Exchange & Institutional Handover Forum',
        titleAr: 'ملتقى الشراكات والتسليم المؤسسي للمبادرات',
        locationEn: 'Executive Boardroom',
        locationAr: 'قاعة الاجتماعات التنفيذية',
        type: 'workshop',
        descriptionEn: 'Connecting completed toolkits and playbooks to local youth clubs and municipal departments for permanent adoption.',
        descriptionAr: 'ربط الأدلة التشغيلية والمبادرات الموثقة بالأندية والمراكز الشبابية في قطر لتبنيها رسمياً واستكمال تطبيقها.',
        facilitatorEn: 'Partnerships & Legacy Directorate',
        facilitatorAr: 'إدارة الشراكات ومتابعة الإرث'
      },
      {
        time: '13:00 – 14:30',
        titleEn: 'Official Closing Lunch & Intercultural Celebration',
        titleAr: 'غداء التكريم الرسمي والاحتفاء بالتعاون الدولي',
        locationEn: 'Royal Pavilion, Aspire',
        locationAr: 'الجناح الملكي، أسباير',
        type: 'cultural',
        descriptionEn: 'Celebrating international bonds forged through sweat, teamwork, and service to Qatar’s community.',
        descriptionAr: 'الاحتفاء بالصداقات الدولية التي ترسخت عبر العمل الميداني الجاد وخدمة المجتمع في قطر.',
        facilitatorEn: 'Hospitality & Protocol Team',
        facilitatorAr: 'إدارة الضيافة والمراسم'
      },
      {
        time: '14:30 – 16:30',
        titleEn: 'The Mission Legacy Ceremony: Unveiling the 2026 Missions Atlas',
        titleAr: 'حفل إرث المهمات: إطلاق أطلس المهمات الشبابية 2026',
        locationEn: 'Aspire Grand Auditorium',
        locationAr: 'المسرح الكبير بقبة أسباير',
        type: 'ceremony',
        descriptionEn: 'Closing showcase: presenting aggregate impact metrics, official presentation of the Qatar Youth Missions Atlas, and launching the 90-Day Tracker.',
        descriptionAr: 'الحفل الختامي: استعراض إجمالي مؤشرات الأثر، إهداء النسخة الأولى من أطلس المهمات لوزارة الرياضة والشباب وإطلاق منصة المتابعة.',
        facilitatorEn: 'High Committee & Youth Delegates',
        facilitatorAr: 'اللجنة العليا وممثلو الشباب المشارك'
      },
      {
        time: '16:30 – 17:30',
        titleEn: 'Formal Adoption of 90-Day Action Plans & Farewell Gathering',
        titleAr: 'اعتماد خطط عمل الـ 90 يوماً ومراسم الوداع الرسمية',
        locationEn: 'Auditorium Foyer',
        locationAr: 'بهو المسرح الكبير',
        type: 'cultural',
        descriptionEn: 'Delegates confirm their remote digital collaboration cohorts and sign off on their final passport stamps.',
        descriptionAr: 'تأكيد انضمام المشاركين لشبكة التعاون المستمر وختم المحطات النهائية في جواز المهمات.',
        facilitatorEn: 'Secretariat General',
        facilitatorAr: 'الأمانة العامة للمنتدى'
      }
    ]
  }
];
