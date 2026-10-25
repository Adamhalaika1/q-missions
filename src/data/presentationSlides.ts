export interface SlideContent {
  id: number;
  slideNumber: string;
  categoryEn: string;
  categoryAr: string;
  titleEn: string;
  titleAr: string;
  subtitleEn: string;
  subtitleAr: string;
  keyPointsEn: string[];
  keyPointsAr: string[];
  statNumber?: string;
  statLabelEn?: string;
  statLabelAr?: string;
  speakerNotesEn: string;
  speakerNotesAr: string;
  interactiveDemoTarget?: string; // Tab to switch to in Mission Control if applicable
}

export const PRESENTATION_SLIDES: SlideContent[] = [
  {
    id: 1,
    slideNumber: '01 / 20',
    categoryEn: 'Institutional Proposal',
    categoryAr: 'مقترح استراتيجي مستقل',
    titleEn: 'Q-MISSIONS: Qatar Global Youth Missions Forum',
    titleAr: 'منتدى قطر العالمي للمهمات الشبابية',
    subtitleEn: 'A Forum You Don’t Just Attend. A Mission You Complete.',
    subtitleAr: 'منتدى لا تكتفي بحضوره.. بل مهمة تنجزها',
    keyPointsEn: [
      'An independent concept proposed for the strategic consideration of the Ministry of Sports and Youth, State of Qatar.',
      'Shifting youth forums from passive speech-listening and panel viewing to real, supervised, measurable community action.',
      'Integrating 4 core pillars: International Gathering, Community Sports, Experiential Leadership, and Verifiable Impact.'
    ],
    keyPointsAr: [
      'مقترح استراتيجي مستقل مقدم للدراسة والمواءمة مع وزارة الرياضة والشباب بدولة قطر.',
      'إعادة ابتكار المؤتمرات الشبابية من مجرد الاستماع السلبي للخطب إلى العمل الميداني الحقيقي الخاضع للتقييم.',
      'دمج 4 ركائز متكاملة: التجمع الدولي، الرياضة المجتمعية، القيادة التطبيقية، والأثر الملموس بالبراهين.'
    ],
    statNumber: '100%',
    statLabelEn: 'Action-Driven Experiential Engagement',
    statLabelAr: 'مشاركة قائمة بالكامل على الفعل والإنجاز',
    speakerNotesEn: 'Welcome dignitaries. Today we introduce Q-MISSIONS: an innovative forum concept positioning Qatar at the cutting edge of youth participation by turning conferences into mission-driven impact engines.',
    speakerNotesAr: 'نرحب بأصحاب المعالي والسعادة. نقدم اليوم منتدى قطر للمهمات الشبابية؛ رؤية نوعية تجعل من دولة قطر رائدة عالمياً في تحويل المؤتمرات إلى محركات إنجاز وأثر مجتمعي حقيقي.'
  },
  {
    id: 2,
    slideNumber: '02 / 20',
    categoryEn: 'Strategic Landscape',
    categoryAr: 'الفرصة والتشخيص الاستراتيجي',
    titleEn: 'The Global Youth Forum Dilemma',
    titleAr: 'معضلة المؤتمرات الشبابية العالمية التقليدية',
    subtitleEn: 'Why Traditional Summits Fail to Produce Lasting Value',
    subtitleAr: 'لماذا تعجز القمم الكلاسيكية عن ترك أثر مستدام؟',
    keyPointsEn: [
      'Global youth conferences spend millions flying delegates to sit in auditorium chairs, listen to monologues, and clap.',
      'Outputs are almost exclusively ceremonial: communiqués, non-binding declarations, and generic certificates.',
      'Youth leave inspired for 48 hours, but the community receives zero verified improvement and no structural legacy.'
    ],
    keyPointsAr: [
      'تنفق المؤتمرات ملايين الدولارات لنقل وفود يجلسون على المقاعد للاستماع إلى خطب عامة وتصفيق روتيني.',
      'تقتصر المخرجات غالباً على بيانات رمزية وتوصيات عامة غير ملزمة وشهادات حضور تذكارية.',
      'يعود الشباب بحماس مؤقت، بينما لا يلمس المجتمع المضيف أي تحسن فعلي أو إرث مستدام على أرض الواقع.'
    ],
    statNumber: '92%',
    statLabelEn: 'Of Conventional Summit Declarations Disappear',
    statLabelAr: 'من توصيات القمم الكلاسيكية تنتهي مع حفل الختام',
    speakerNotesEn: 'Modern youth are tired of ceremonial conferences. They want to test their skills, build friendships through shared physical effort, and leave a measurable mark.',
    speakerNotesAr: 'جيل اليوم لا يبحث عن الجلوس والاستماع، بل يريد إثبات قدراته، وبناء الصداقات من خلال العمل البدني المشترك، وترك بصمة حقيقية موثقة.'
  },
  {
    id: 3,
    slideNumber: '03 / 20',
    categoryEn: 'National Alignment',
    categoryAr: 'المواءمة الوطنية',
    titleEn: 'Why Qatar is the Natural World Capital for Missions',
    titleAr: 'لماذا قطر هي العاصمة العالمية المثالية للمهمات؟',
    subtitleEn: 'Unmatched Infrastructure, Global Sports Legacy & Social Vision',
    subtitleAr: 'بنية تحتية رياضية فريدة، إرث استثنائي، ورؤية تنموية طموحة',
    keyPointsEn: [
      'World-class sporting venues (Aspire Zone, Education City, FIFA World Cup stadiums) ready for community adaptation.',
      'Qatar National Vision 2030 (Human Development Pillar) emphasizing active society and youth empowerment.',
      'Third National Development Strategy prioritizing citizen wellbeing, preventive health, and global cultural bridge-building.'
    ],
    keyPointsAr: [
      'منشآت رياضية عالمية (أسباير، المدينة التعليمية، استادات كأس العالم) جاهزة للاستثمار المجتمعي والإنساني.',
      'رؤية قطر الوطنية 2030 تركز في ركيزتها الأولى على التنمية البشرية ونمط الحياة الصحي والشباب الفاعل.',
      'استراتيجية التنمية الوطنية الثالثة تضع جودة الحياة، الصحة الوقائية، والريادة الدولية في مقدمة أولوياتها.'
    ],
    statNumber: '2030',
    statLabelEn: 'Direct Synergy with National Vision Targets',
    statLabelAr: 'توافق كامل مع مستهدفات التنمية البشرية 2030',
    speakerNotesEn: 'Qatar has proven its peerless capacity to stage elite tournaments. Q-MISSIONS activates this world-class infrastructure for grassroots human empowerment and youth diplomacy.',
    speakerNotesAr: 'أثبتت قطر قدرتها الاستثنائية على تنظيم أضخم البطولات العالمية. ويأتي منتدى المهمات ليوظف هذه المنشآت العظيمة في تمكين الإنسان وصناعة القادة الشباب.'
  },
  {
    id: 4,
    slideNumber: '04 / 20',
    categoryEn: 'Institutional Home',
    categoryAr: 'الحاضنة المؤسسية',
    titleEn: 'Why the Ministry of Sports and Youth?',
    titleAr: 'لماذا وزارة الرياضة والشباب هي المظلة القيادية الأنسب؟',
    subtitleEn: 'Direct Mandate for Active Living, Youth Leadership & Community Care',
    subtitleAr: 'صاحبة الاختصاص الأصيل في تعزيز النشاط البدني وتمكين الشباب',
    keyPointsEn: [
      'The Ministry unites two interdependent mandates: athletic movement and holistic youth empowerment.',
      'Possesses the institutional jurisdiction to coordinate youth centers, sports federations, and civic entities nationwide.',
      'Opportunity to pioneer an international intellectual property owned by Qatar and licensed or scaled globally.'
    ],
    keyPointsAr: [
      'تجمع الوزارة بين قطاعين متكاملين: النشاط الحركي والرياضي، والتمكين الشامل للشباب.',
      'تمتلك الصلاحية المؤسسية لقيادة وتنسيق المراكز الشبابية والأندية الرياضية والجهات المجتمعية في كافة أرجاء الدولة.',
      'فرصة تاريخية لتسجيل ملكية فكرية استراتيجية باسم دولة قطر ووزارة الرياضة والشباب لقيادة نموذج الفعاليات العالمية.'
    ],
    statNumber: '1 Hub',
    statLabelEn: 'Uniting Sport, Youth Leadership & Society',
    statLabelAr: 'مظلة موحدة تجمع الرياضة، القيادة والمجتمع',
    speakerNotesEn: 'This proposal positions the Ministry not as a passive sponsor, but as the visionary strategic lead and owner of an exportable global youth methodology.',
    speakerNotesAr: 'يطرح المقترح الوزارة ليس كجهة راعية للتمويل، بل كقائد استراتيجي وصاحب منهجية عالمية يمكن تصديرها للعالم بأسره.'
  },
  {
    id: 5,
    slideNumber: '05 / 20',
    categoryEn: 'Benchmarking',
    categoryAr: 'المقارنة المعيارية',
    titleEn: 'Global Benchmarking: What the World Does Today',
    titleAr: 'المقارنة المعيارية العالمية: ما هو السائد اليوم؟',
    subtitleEn: 'Evaluating One Young World, UNLEASH, IOC Youth, and Hackathons',
    subtitleAr: 'تحليل مقارن للمبادرات الشبابية الكبرى ومواطن القصور',
    keyPointsEn: [
      'One Young World: Elite inspiration, high cost, but delegates remain in audience seats without field missions.',
      'UNLEASH Labs: Great design sprints, but strictly screen-bound desk hacking with zero sports integration.',
      'IOC & Sport-for-Development: Strong on football coaching, but rarely integrated with broader multi-disciplinary civic challenges.',
      'Volunteer Treks: Practical service hours, but participants are directed manual laborers rather than solution architects.'
    ],
    keyPointsAr: [
      'وان يونغ وورلد: إلهام كبير لكن المشاركين متفرجون على المنصة ولا يوجد عمل ميداني.',
      'مختبرات أنليش: تفكير تصميمي رائع لكنه حبيس الشاشات والمكاتب ومعدوم الحركية الرياضية.',
      'مبادرات الرياضة التنموية: تركيز كبير على كرة القدم لكنها منفصلة عن التحديات البيئية والتقنية الشاملة.',
      'المعسكرات التطوعية: خدمة ميدانية جيدة لكن الشاب يظل منفذاً لأوامر وليس مصمماً لحلول استراتيجية.'
    ],
    speakerNotesEn: 'We evaluated existing international giants. Q-MISSIONS is not a copy; it takes the best of experiential learning, adds real sport, and introduces cryptographic audit verification.',
    speakerNotesAr: 'قمنا بدراسة أعمق الممارسات الدولية، ومنتدى المهمات لا يكررها، بل يجمع التفكير التصميمي مع الرياضة الميدانية وتوثيق الأثر بالبراهين.'
  },
  {
    id: 6,
    slideNumber: '06 / 20',
    categoryEn: 'Value Proposition',
    categoryAr: 'القيمة الفارقة',
    titleEn: 'What Makes Q-MISSIONS Fundamentally Distinct',
    titleAr: 'ما الذي يجعل نموذج Q-MISSIONS فريداً واستثنائياً؟',
    subtitleEn: 'Sport as Catalyst, Multicultural Squads as Method, Verifiable Receipts as Proof',
    subtitleAr: 'الرياضة كأداة ثقة، والفرق كمنهجية، وإيصال الأثر كدليل قاطع',
    keyPointsEn: [
      'Sport is Not Decorative: Physical movement builds immediate cross-cultural trust before cognitive mission work starts.',
      'Missions Over Speeches: Teams are dispatched into real Qatari neighborhoods and community facilities.',
      'No Artificial Claims: Every outcome is recorded on a Verified Impact Receipt with third-party observer signatures.',
      'Institutional Stewardship: Every output is formally handed over to a designated local owner for 90-day continuation.'
    ],
    keyPointsAr: [
      'الرياضة ليست زينة: النشاط البدني المشترك يبني الثقة ويزيل الحواجز الثقافية قبل بدء التفكير في الحلول.',
      'المهمات بدلاً من الخطابات: نزول الفرق الميداني إلى أسباير والمدينة التعليمية وسوق واقف واستاد الجنوب.',
      'حظر الأثر الوهمي: توثيق النتائج بإيصالات أثر رقمية معتمدة وموقعة من مراقبين مستقلين.',
      'التسليم المؤسسي المستدام: تسليم كل دليل تشغيلي لجهة قطرية محددة مع متابعة ميدانية لـ 90 يوماً.'
    ],
    speakerNotesEn: 'We bridge physical activity with real civic duty. The sweat on the pitch builds the trust needed to tackle complex community missions together.',
    speakerNotesAr: 'نربط الجهد البدني في الميدان بالمسؤولية المجتمعية؛ فالجهد الرياضي المشترك يصنع ترابطاً إنسانياً عميقاً يعزز إنجاز المهمات.'
  },
  {
    id: 7,
    slideNumber: '07 / 20',
    categoryEn: 'Operating Model',
    categoryAr: 'النموذج التشغيلي',
    titleEn: 'The Mission Cycle: 7 Clear Milestones',
    titleAr: 'دورة المهمات: 7 مراحل تشغيلية محكمة',
    subtitleEn: 'From Community Listening to Institutional Continuation',
    subtitleAr: 'من الاستماع لاحتياجات المجتمع وحتى الاستدامة المؤسسية',
    keyPointsEn: [
      '01 LISTEN: Understand documented community needs from verified Qatari hosts.',
      '02 CONNECT: Assemble balanced, multicultural, cross-disciplinary teams.',
      '03 PREPARE: Build actionable mission blueprint and clear mandatory safety gate.',
      '04 ACT: Supervised on-the-ground execution in field or venue environments.',
      '05 VERIFY: Collect raw evidence, photos, time logs, and beneficiary surveys.',
      '06 SHARE: Present verified outputs in the interactive Community Impact Gallery.',
      '07 CONTINUE: Formally hand over stewardship and track for 90 days.'
    ],
    keyPointsAr: [
      '01 استمع: فهم الاحتياجات الحقيقية من أصحاب التحديات والمراكز المحلية.',
      '02 تواصل: تشكيل فرق متكاملة التخصصات تجمع المهندسين والرياضيين والمصممين.',
      '03 استعد: صياغة خطة المهمة التشغيلية واجتياز بوابة الفحص الأمني والسلامة.',
      '04 نفذ: التطبيق الميداني المباشر والخاضع للإشراف الكامل في مواقع قطر.',
      '05 دقق: جمع الأدلة، سجلات الحضور، القياسات الرقمية واستبيانات المستفيدين.',
      '06 شارك: عرض النتائج في معرض الأثر المجتمعي التفاعلي أمام القيادات.',
      '07 استمر: تسليم المبادرة للجهة المحلية المسؤولة والمتابعة بعد 90 يوماً.'
    ],
    speakerNotesEn: 'Every stage has an explicit entry gate, designated owner, and concrete deliverable. No squad moves to the field without safety signoff.',
    speakerNotesAr: 'لكل مرحلة بوابة عبور واضحة ومسؤول محدد؛ فلا ينزل أي فريق إلى الميدان قبل اجتياز تدقيق السلامة الميدانية.'
  },
  {
    id: 8,
    slideNumber: '08 / 20',
    categoryEn: 'Programmatic Worlds',
    categoryAr: 'عوالم البرنامج',
    titleEn: 'Six Signature Mission Worlds',
    titleAr: 'عوالم المهمات الستة المتخصصة',
    subtitleEn: 'Addressing Modern Societal, Athletic & Environmental Priorities',
    subtitleAr: 'معالجة الأولويات المجتمعية والرياضية والبيئية برؤية عصرية',
    keyPointsEn: [
      '01 MOVE TOGETHER: Adaptive sports, inclusion, and sensory accessibility for all abilities.',
      '02 HEALTHY COMMUNITIES: Daily active lifestyles, urban walking, and peer health motivation.',
      '03 CULTURES IN ACTION: Traditional maritime and folk games bridging international youth.',
      '04 YOUTH FOR COMMUNITY: Civic leadership, neighborhood center support, and service design.',
      '05 GREEN PLAY: Zero-plastic sports tournaments, waste diversion, and eco-refereeing.',
      '06 CONNECTED GENERATIONS: Active aging, intergenerational digital wellness pairing.'
    ],
    keyPointsAr: [
      '01 التحرك معاً: الرياضات التكيفية والشمول وإتاحة الحركة لذوي القدرات المتنوعة.',
      '02 مجتمعات صحية: أنماط الحياة النشطة اليومية ومسارات المشي الحضرية وتحفيز الأقران.',
      '03 ثقافات في الميدان: الألعاب التراثية والبحرية القطرية لتعزيز التفاهم بين الثقافات.',
      '04 شباب من أجل المجتمع: القيادة المدنية المسؤولة ودعم المراكز الشبابية والأحياء.',
      '05 اللعب الأخضر: البطولات الرياضية الخالية من البلاستيك وتدوير مخلفات الفعاليات.',
      '06 أجيال متصلة: الشيخوخة النشطة والدمج الرقمي والحركي بين كبار السن والشباب.'
    ],
    interactiveDemoTarget: 'explorer',
    speakerNotesEn: 'These six worlds provide a rich canvas covering physical activity, public health, cultural diplomacy, civic volunteerism, climate action, and family cohesion.',
    speakerNotesAr: 'تغطي هذه العوالم الستة مختلف أولويات التنمية الوطنية: من الصحة الوقائية والدمج، إلى الدبلوماسية الثقافية والعمل المناخي والتماسك الأسري.'
  },
  {
    id: 9,
    slideNumber: '09 / 20',
    categoryEn: 'Case Study',
    categoryAr: 'دراسة حالة واقعية',
    titleEn: 'A Realistic Example: The Adaptive Sports Clinic',
    titleAr: 'نموذج عملي واقعي: عيادة الرياضة التكيفية بأسباير',
    subtitleEn: 'How a Mission Operates in Practice Under Rigorous Supervision',
    subtitleAr: 'كيف تنفذ المهمة على أرض الواقع بإشراف مهني صارم',
    keyPointsEn: [
      'Location & Host: Aspire Dome, partnered with Qatar Paralympic Committee.',
      'The Challenge: 30 youth with varied physical abilities face barriers playing team volleyball and boccia.',
      'The Squad: 5 youth from Qatar, Senegal, UK, Jordan, and Singapore.',
      'Field Action: 4 supervised unified sessions, modified equipment with acoustic bells, and zero injuries.',
      'Verified Result: 34 participants engaged; 24-page bilingual coaching playbook adopted by local club.'
    ],
    keyPointsAr: [
      'الموقع والشريك: قبة أسباير، بالشراكة مع الاتحاد القطري لذوي الاحتياجات الخاصة.',
      'التحدي: 30 شاباً يواجهون عوائق حركية تحول دون مشاركتهم في الألعاب الجماعية.',
      'الفريق: 5 شباب من قطر، السنغال، بريطانيا، الأردن وسنغافورة.',
      'الفعل الميداني: 4 جلسات تدريب موحدة، استخدام كرات صوتية، وتوثيق السلامة بنسبة 100%.',
      'النتيجة المعتمدة: مشاركة 34 لاعباً، وإصدار دليل تدريب ثنائي اللغة تم تبنيه في ناد محلي.'
    ],
    speakerNotesEn: 'This is not theoretical. Here is an exact blueprint of how a multicultural squad delivers verified benefit to Qatari youth within 72 hours.',
    speakerNotesAr: 'هذا ليس تنظيراً؛ بل نموذج دقيق يوضح كيف ينجز فريق متعدد الجنسيات فائدة حقيقية وملموسة لشباب قطر في غضون 72 ساعة.'
  },
  {
    id: 10,
    slideNumber: '10 / 20',
    categoryEn: 'Program Architecture',
    categoryAr: 'هندسة البرنامج الزمني',
    titleEn: 'The Five-Day International Journey',
    titleAr: 'رحلة الأيام الخمسة: تدرج منطقي من التلاقي إلى الإرث',
    subtitleEn: 'Clear Daily Focus and Verified End-of-Day Deliverables',
    subtitleAr: 'تركيز يومي واضح ومخرجات إلزامية في نهاية كل يوم',
    keyPointsEn: [
      'DAY 1 — THE CONNECTION: Arrival, opening plenary, athletic trust relays, and squad matching.',
      'DAY 2 — THE PREPARATION: Challenge design, adaptive sports clinic, and mandatory safety gates.',
      'DAY 3 — THE ACTION: Supervised dispatch to 6 iconic venues across Qatar for live pilot missions.',
      'DAY 4 — THE VERIFICATION: Evidence auditing, Impact Receipt hashing, and gallery curation.',
      'DAY 5 — THE LEGACY: Leadership walkthrough, partnership exchange, and 90-day handover pledges.'
    ],
    keyPointsAr: [
      'اليوم 1 — التلاقي: الاستقبال، الجلسة الافتتاحية، تحديات الثقة الرياضية، وتشكيل الفرق.',
      'اليوم 2 — الاستعداد: التصميم التشاركي، عيادة الرياضات التكيفية، واجتياز بوابات السلامة.',
      'اليوم 3 — الإنجاز الميداني: الانطلاق الخاضع للإشراف إلى 6 مواقع بارزة في قطر لتنفيذ المهام.',
      'اليوم 4 — التوثيق والتدقيق: تدقيق الأدلة، إصدار إيصالات الأثر المشفرة، وتجهيز المعرض.',
      'اليوم 5 — الإرث والاستدامة: جولة القيادات، ملتقى الشراكات، وتوقيع تعهدات الـ 90 يوماً.'
    ],
    interactiveDemoTarget: 'program',
    speakerNotesEn: 'Every day is intentionally designed. The flow ensures physical readiness on Day 1, meticulous safety on Day 2, controlled action on Day 3, auditing on Day 4, and legacy on Day 5.',
    speakerNotesAr: 'تم تصميم كل يوم بعناية فائقة: الجاهزية البدنية في اليوم الأول، السلامة الصارمة في اليوم الثاني، الفعل الميداني في الثالث، التدقيق في الرابع، واستدامة الإرث في الخامس.'
  },
  {
    id: 11,
    slideNumber: '11 / 20',
    categoryEn: 'Technology Core',
    categoryAr: 'المنظومة الرقمية',
    titleEn: 'Digital Mission Control Center',
    titleAr: 'مركز التحكم الرقمي بالمهمات (Q-Portal)',
    subtitleEn: 'Sovereign Web Infrastructure Powering Real-Time Tracking & Evidence',
    subtitleAr: 'بنية رقمية سيادية تدير التتبع الميداني اللحظي وتوثيق الأدلة',
    keyPointsEn: [
      'Bilingual Mission Explorer with searchable challenge database and operational specs.',
      'Interactive Mission Planner allowing squads and organizers to build structured blueprints.',
      'Digital Mission Passport replacing paper badges with verifiable competence logs and reflections.',
      'Automated receipt generator and real-time impact analytics telemetry.'
    ],
    keyPointsAr: [
      'مستكشف المهمات ثنائي اللغة مع قاعدة بيانات للمواقع والتحديات والمعايير التشغيلية.',
      'مخطط المهمات التفاعلي الذي يمكن الفرق والمنظمين من بناء خطط عمل ميدانية متكاملة.',
      'جواز المهمات الرقمي الذي يوثق الكفاءات المكتسبة ومحطات الإنجاز والتأملات الشخصية.',
      'محرك إصدار إيصالات الأثر المشفرة ولوحة تحليلات المؤشرات اللحظية في الزمن الحقيقي.'
    ],
    interactiveDemoTarget: 'planner',
    speakerNotesEn: 'We do not present mockups. Our team has already built a fully functional interactive prototype of the Mission Control Center for the Ministry to test today.',
    speakerNotesAr: 'نحن لا نقدم مجرد رسومات؛ بل طور فريقنا بالفعل نموذجاً أولياً تفاعلياً عاملاً بالكامل لمركز التحكم لتجربته اليوم أمامكم.'
  },
  {
    id: 12,
    slideNumber: '12 / 20',
    categoryEn: 'Signature Innovation',
    categoryAr: 'الابتكار المميز',
    titleEn: 'The Verified Impact Receipt (VIR)',
    titleAr: 'إيصال الأثر المعتمد: البصمة التوثيقية الفارقة',
    subtitleEn: 'Replacing Empty Attendance Certificates with Audited Evidence Ledgers',
    subtitleAr: 'استبدال شهادات الحضور الروتينية بسجلات تدقيق معتمدة بالبراهين',
    keyPointsEn: [
      'Structured record with unique cryptographic ID (e.g. VIR-QA-2026-0842).',
      'Explicit separation between planned vs completed activities, direct outputs, and verified outcomes.',
      'Mandatory attached evidence: attendance rosters, safety logs, telemetry data, and participant quotes.',
      'Clear limitations disclosure and assigned institutional follow-up owner.'
    ],
    keyPointsAr: [
      'سجل رسمي رقمي يحمل رقماً تعريفياً مشفراً غير قابل للتزوير.',
      'فصل صارم بين الأنشطة المخططة والمنفذة، والمخرجات المباشرة، والأثر المستدام المثبت.',
      'إرفاق إلزامي للأدلة: كشوف الحضور، سجلات السلامة، البيانات الرقمية، وشهادات المستفيدين.',
      'إفصاح شفاف عن أي قصور أو تحديات وتحديد جهة المتابعة المؤسسية المسؤولة.'
    ],
    interactiveDemoTarget: 'receipt',
    speakerNotesEn: 'The Verified Impact Receipt solves the crisis of credibility in youth forums. It proves to government auditors and citizens exactly what was delivered for every riyal invested.',
    speakerNotesAr: 'يعالج إيصال الأثر المعتمد أزمة المصداقية في المؤتمرات؛ فهو يثبت للمسؤولين والجمهور ما تحقق بدقة مقابل كل ريال تم إنفاقه.'
  },
  {
    id: 13,
    slideNumber: '13 / 20',
    categoryEn: 'State Assets',
    categoryAr: 'الأصول والمخرجات للدولة',
    titleEn: '10 Tangible Institutional Deliverables for Qatar',
    titleAr: '10 مخرجات مؤسسية ملموسة تكتسبها دولة قطر',
    subtitleEn: 'Enduring Knowledge, Policy Tools, and Software Belonging to the Ministry',
    subtitleAr: 'معارف دائمة، أدوات سياسات، ومنظومات تقنية تصبح ملكاً خالصاً للوزارة',
    keyPointsEn: [
      '01 Qatar Youth Missions Atlas | 02 Verified Mission Portfolio & Audit Archive',
      '03 Youth Leadership Competency Framework | 04 Inclusive Sports Participation Toolkit',
      '05 Community Mission Playbooks (6 Worlds) | 06 International Youth Collaboration Network',
      '07 Institutional Opportunities Register | 08 Sovereign Digital Mission Platform IP',
      '09 90-Day Post-Forum Legacy Report | 10 Annual Forum Learning & Policy Whitepaper'
    ],
    keyPointsAr: [
      '01 أطلس قطر للمهمات الشبابية | 02 سجل المهمات المعتمد وأرشيف التدقيق',
      '03 إطار الكفاءات القيادية للشباب | 04 حقيبة أدوات الرياضة الشاملة والدمج',
      '05 أدلة تشغيل المهمات المجتمعية | 06 شبكة التعاون الدولي للشباب',
      '07 سجل الفرص والشراكات المؤسسية | 08 المنصة الرقمية كملكية فكرية وطنية',
      '09 تقرير متابعة الأثر بعد 90 يوماً | 10 الورقة البيضاء السنوية لتطوير السياسات'
    ],
    speakerNotesEn: 'The Ministry walks away not with memories, but with ten permanent, high-value institutional assets that can power domestic youth centers for years to come.',
    speakerNotesAr: 'لا تخرج الوزارة من المنتدى بمجرد ذكريات، بل بعشرة أصول ومخرجات مؤسسية استراتيجية تثري عمل المراكز الشبابية لسنوات قادمة.'
  },
  {
    id: 14,
    slideNumber: '14 / 20',
    categoryEn: 'Governance Architecture',
    categoryAr: 'هيكل الحوكمة',
    titleEn: 'Proposed Institutional Governance Framework',
    titleAr: 'هيكل الحوكمة المؤسسية والمسؤوليات المقترحة',
    subtitleEn: 'Clear Roles, Strategic Oversight & Operational Execution Units',
    subtitleAr: 'أدوار واضحة، إشراف استراتيجي عليا، ووحدات تنفيذية متخصصة',
    keyPointsEn: [
      'Strategic Institutional Lead: Ministry of Sports and Youth (Patronage, approvals, government coordination).',
      'High Steering Committee: Chaired by Ministry Undersecretary with sports federation leaders.',
      'Program Directorate: Day-to-day event operations, schedule adherence, and delegate logistics.',
      'Specialized Units: Sports & Youth Development, Community Missions, Digital Platform, and Independent Impact Audit.'
    ],
    keyPointsAr: [
      'المظلة القيادية الاستراتيجية: وزارة الرياضة والشباب (الرعاية، الاعتماد، والتنسيق الحكومي).',
      'اللجنة التوجيهية العليا: برئاسة وكيل الوزارة أو ممثله وعضوية قيادات القطاع الرياضي والشبابي.',
      'إدارة البرامج والأمانة العامة: إدارة العمليات اليومية، الالتزام بالجدول، واللوجستيات.',
      'الوحدات المتخصصة: تطوير الرياضة، التنسيق المجتمعي، المنصة الرقمية، وهيئة التدقيق المستقلة.'
    ],
    interactiveDemoTarget: 'governance',
    speakerNotesEn: 'The governance model ensures the Ministry maintains total strategic control while specialized units handle field logistics and technical execution.',
    speakerNotesAr: 'يضمن نموذج الحوكمة احتفاظ الوزارة بالسيطرة الاستراتيجية الكاملة مع تولي الوحدات المتخصصة العمليات الميدانية والهندسة التقنية.'
  },
  {
    id: 15,
    slideNumber: '15 / 20',
    categoryEn: 'Risk Management',
    categoryAr: 'إدارة المخاطر والسلامة',
    titleEn: 'Rigorous Safeguarding & Risk Mitigation',
    titleAr: 'الحماية المجتمعية الشاملة وإدارة المخاطر الميدانية',
    subtitleEn: 'Zero-Tolerance for Harm, Absolute Respect for Qatari Culture and Participant Safety',
    subtitleAr: 'صفر تسامح مع الأخطار، احترام مطلق للتقاليد القطرية، وأعلى معايير السلامة',
    keyPointsEn: [
      'Physical Safety & Heat: Certified medical staff at every venue, heat-index restrictions, misting stations.',
      'Minor & Vulnerable Protection: Strict 1:8 adult supervision ratio, background checks, public settings only.',
      'Cultural Diplomacy & Respect: Pre-arrival etiquette briefings and Qatari youth co-captains for each squad.',
      'Data Privacy: Full compliance with Qatar Personal Data Privacy Law; written consent for all media.'
    ],
    keyPointsAr: [
      'السلامة والحرارة: طواقم إسعاف في كل موقع، قياس مؤشر الإجهاد الحراري، ومحطات ترطيب مبردة.',
      'حماية الفئات المستضعفة: نسبة إشراف صارمة (1 مشرف لكل 8)، فحص أمني للكوادر، وحظر الأماكن المعزولة.',
      'الاحترام الثقافي: حقيبة إرشادية للمشاركين وقائد قطري مرافق لكل فريق لترسيخ التفاهم.',
      'خصوصية البيانات: الالتزام التام بالقوانين القطرية لحماية البيانات وموافقة خطية على التصوير والنشر.'
    ],
    speakerNotesEn: 'No youth action forum can succeed without unflinching safety protocols. Our risk matrix covers 10 critical operational dimensions with assigned owners.',
    speakerNotesAr: 'لا يمكن لفعالية شبابية ميدانية أن تنجح دون بروتوكولات سلامة صارمة؛ ومصفوفتنا تغطي 10 محاور تشغيلية أساسية بمسؤوليات محددة.'
  },
  {
    id: 16,
    slideNumber: '16 / 20',
    categoryEn: 'Budget & Feasibility',
    categoryAr: 'الميزانية والجدوى المالية',
    titleEn: 'Transparent Budgeting: Three Feasible Scenarios',
    titleAr: 'الميزانية والجدوى المالية: ثلاثة سيناريوهات شفافة',
    subtitleEn: 'Scalable Investment Models in Qatari Riyals (QAR)',
    subtitleAr: 'نماذج استثمار مرنة وقابلة للتوسع بالريال القطري',
    keyPointsEn: [
      'SCENARIO A — Controlled Pilot Experience: 80 youth, 3 worlds, 3 days (~620,000 QAR). Fast, low-risk proof-of-concept.',
      'SCENARIO B — Full International Forum Edition: 250 youth (120 intl), 6 worlds, 5 days (~3,450,000 QAR). Complete flagship gathering.',
      'SCENARIO C — Expanded Global Platform: 600 youth, 6 worlds, Olympic tier (~8,200,000 QAR). Year-round international mission hub.',
      'Built-in 7% contingency reserve and itemized line items across travel, venues, and mission kits.'
    ],
    keyPointsAr: [
      'السيناريو (أ) — النسخة التجريبية المصغرة: 80 مشاركاً، 3 عوالم، 3 أيام (~620 ألف ر.ق) لاختبار النموذج بأمان.',
      'السيناريو (ب) — المنتدى الدولي الكامل: 250 مشاركاً (120 دولياً)، 6 عوالم، 5 أيام (~3.45 مليون ر.ق).',
      'السيناريو (ج) — المنصة العالمية الكبرى: 600 مشارك، عوالم موسعة ومرافق أولمبية (~8.2 مليون ر.ق).',
      'احتساب احتياطي طوارئ 7% وبنود تفصيلية تشمل السفر، الإقامة، والمنشآت والحقائب الميدانية.'
    ],
    interactiveDemoTarget: 'budget',
    statNumber: '3 Tiers',
    statLabelEn: 'Flexible Planning Models in QAR',
    statLabelAr: 'سيناريوهات تخطيط مرنة بالريال القطري',
    speakerNotesEn: 'We provide realistic, transparent cost models. The Ministry can choose to start with a modest Scenario A pilot to validate the method before committing to a full international edition.',
    speakerNotesAr: 'نقدم نماذج تكلفة واقعية وشفافة؛ حيث يمكن للوزارة البدء بالسيناريو التجريبي المحدود للتحقق من المخرجات قبل التوسع للنسخة الدولية الكاملة.'
  },
  {
    id: 17,
    slideNumber: '17 / 20',
    categoryEn: 'Proposing Team',
    categoryAr: 'الفريق مقترح المبادرة',
    titleEn: 'The Multidisciplinary Proposing Consortium',
    titleAr: 'الفريق المستقل مقترح المبادرة',
    subtitleEn: 'Proven Public-Sector Delivery Across Software, Capacity Building & Partnerships',
    subtitleAr: 'خبرة عملية مثبتة في المنصات الحكومية وبناء القدرات والشراكات',
    keyPointsEn: [
      'Adam Hafez Halaika (Initiative Director — Strategy & Programs): Software engineer, TOT certified trainer, government digital transformation coordinator, and hackathon jury lead.',
      'Islam Warasnah (Digital Platform & AI Lead): Computer engineer, Master’s in AI candidate, architect of national e-government GIS (Palcode), logistics (Cainiao), and data frameworks (Zinnar).',
      'Ameer Shawar (Engagement & Partnerships Lead): Strategic communicator, commercial negotiator, and user experience coordinator structuring institutional alliances.'
    ],
    keyPointsAr: [
      'آدم حافظ حلايقة (مدير المبادرة — الاستراتيجية والبرامج): مهندس برمجيات، مدرب TOT معتمد، منسق التحول الرقمي الحكومي ومحكّم هاكاثونات.',
      'إسلام وراسنة (قائد المنصة الرقمية والذكاء الاصطناعي): مهندس حاسوب وباحث ماجستير ذكاء اصطناعي، مهندس منظومات العنونة الجيومكانية والربط الحكومي.',
      'أمير شاور (قائد التفاعل والشراكات وتجربة المشاركين): متخصص التواصل الاستراتيجي والتفاوض المؤسسي وهندسة تجارب المستفيدين.'
    ],
    speakerNotesEn: 'Our multidisciplinary team developed this proposal from ground experience. We combine heavy software engineering with pedagogical training design and institutional execution.',
    speakerNotesAr: 'ينطلق مقترحنا من خبرات عملية واقعية تجمع بين الهندسة البرمجية الصلبة وتصميم المناهج التدريبية والتنسيق الحكومي الرفيع.'
  },
  {
    id: 18,
    slideNumber: '18 / 20',
    categoryEn: 'Extended Potential',
    categoryAr: 'آفاق التعاون الأوسع',
    titleEn: 'Beyond Q-MISSIONS: What We Can Build Together',
    titleAr: 'ما وراء المنتدى: آفاق بناء حلول نوعية مشتركة',
    subtitleEn: 'Long-Term Technological, Pedagogical & Analytical Capabilities',
    subtitleAr: 'قدرات تكنولوجية وتدريبية وتحليلية تخدم استراتيجيات الوزارة',
    keyPointsEn: [
      'Digital Transformation & Spatial GIS Portals: Reusable sovereign architectures for national youth facilities.',
      'AI-Enabled Decision Dashboards: Real-time telemetry, predictive analytics, and executive ministerial reporting.',
      'National TOT & Youth Capacity-Building Programs: Tailored technical and leadership curricula for Qatari youth centers.',
      'Sports Technology & Gamified Civic Protocols: Interactive engagement platforms for domestic athletic campaigns.'
    ],
    keyPointsAr: [
      'التحول الرقمي والبوابات الجيومكانية: بنية تقنية سيادية لحصر وإدارة المنشآت والأنشطة الشبابية.',
      'لوحات القيادة والتحليل الذكي للبيانات: مؤشرات لحظية ونماذج ذكاء اصطناعي لدعم القرارات الوزارية.',
      'برامج إعداد المدربين الوطنية (TOT): تصميم مسارات تدريب تخصصية لمرتادي المراكز الشبابية.',
      'تكنولوجيا الرياضة المجتمعية: منصات رقمية تفاعلية تعزز حماس الجمهور للمشاركة الرياضية اليومية.'
    ],
    speakerNotesEn: 'This initiative can serve as the launchpad for a deeper professional relationship, supporting the Ministry across digital transformation, youth learning systems, and sports technology.',
    speakerNotesAr: 'يمكن لهذه المبادرة أن تكون منطلقاً لشراكة عمل مثمرة تدعم توجهات الوزارة في الرقمنة وتطوير مهارات الشباب وتكنولوجيا الرياضة.'
  },
  {
    id: 19,
    slideNumber: '19 / 20',
    categoryEn: 'Roadmap & Next Steps',
    categoryAr: 'خارطة الطريق والخطوات التالية',
    titleEn: 'From Concept to Consideration: 3 Pragmatic Pathways',
    titleAr: 'من الفكرة إلى التطبيق: ثلاثة مسارات عملية مقترحة',
    subtitleEn: 'A Safe, Low-Risk Progressive Engagement Framework for the Ministry',
    subtitleAr: 'مسار تدريجي آمن وخال من المخاطر للتعاون مع الوزارة',
    keyPointsEn: [
      'PATHWAY 1: Strategic Concept Review (2–3 Weeks) — Formal leadership presentation, Q&A, and alignment evaluation with zero financial commitment.',
      'PATHWAY 2: Joint Co-Design Sprint (6 Weeks) — Collaborative working group to inspect Qatar host venues, refine challenge owners, and audit budget lines.',
      'PATHWAY 3: Controlled Mission Pilot (Q4 2026) — 80-participant trial of 3 worlds to empirically generate first 15 Verified Impact Receipts before global rollout.'
    ],
    keyPointsAr: [
      'المسار 1: المراجعة الاستراتيجية (أسبوعان إلى 3): جلسة إحاطة تنفيذية وعرض حي دون أي التزام مالي مسبق.',
      'المسار 2: التصميم المشترك (6 أسابيع): تشكيل فريق عمل فني لتفقد المواقع وتنسيق الشراكات وتدقيق الميزانية.',
      'المسار 3: التجربة الميدانية المحدودة (الربع الأخير 2026): تنفيذ تجريبي بمشاركة 80 شاباً في 3 عوالم لإصدار أول 15 إيصال أثر.'
    ],
    speakerNotesEn: 'We recommend Pathway 1 as the immediate zero-risk step: a formal concept review workshop with ministry directors to assess alignment with national priorities.',
    speakerNotesAr: 'نوصي بالبدء بالمسار الأول كخطوة استكشافية آمنة: ورشة عمل رسمية لمراجعة المفهوم ومناقشة أوجه التوافق مع الأولويات الوطنية.'
  },
  {
    id: 20,
    slideNumber: '20 / 20',
    categoryEn: 'Closing Vision',
    categoryAr: 'الرؤية الختامية',
    titleEn: 'A Mission Worth Starting for Qatar and the World',
    titleAr: 'مهمة تستحق الانطلاق.. من قطر إلى العالم',
    subtitleEn: 'A Forum You Don’t Just Attend. A Mission You Complete.',
    subtitleAr: 'منتدى لا تكتفي بحضوره.. بل مهمة تنجزها',
    keyPointsEn: [
      'Qatar has the venues, the vision, the youth, and the global stature to redefine international forums.',
      'Q-MISSIONS transforms global youth from passive spectators into trusted, verified builders of community wellbeing.',
      'We respectfully submit this independent proposal to the Ministry of Sports and Youth for review, partnership, and leadership.'
    ],
    keyPointsAr: [
      'تمتلك قطر المنشآت العالمية، الرؤية الطموحة، الشباب المبدع، والمكانة الدولية لإعادة صياغة مفهوم المؤتمرات.',
      'يحول Q-MISSIONS الشباب من متفرجين في المقاعد إلى قادة ميدانيين يصنعون أثراً مجتمعياً حقيقياً موثقاً.',
      'نتشرف بتقديم هذا المقترح المستقل لوزارة الرياضة والشباب للنظر فيه، وقيادته، وتحويله إلى إنجاز وطني وعالمي.'
    ],
    statNumber: 'Join Us',
    statLabelEn: 'Let Us Build This Mission Together',
    statLabelAr: 'معاً لنطلق هذه المهمة من دوحة الخير',
    speakerNotesEn: 'Thank you for your time and vision. We invite your leadership, guidance, and questions. The interactive Mission Control platform is ready for your inspection.',
    speakerNotesAr: 'شكراً لحسن استماعكم ورؤيتكم الملهمة. يسعدنا استقبال توجيهاتكم وأسئلتكم، وندعوكم لتجربة مركز التحكم التفاعلي الآن.'
  }
];
