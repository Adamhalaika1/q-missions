import { ChallengeCard, MissionWorld } from '../types';

export const MISSION_WORLDS: MissionWorld[] = [
  {
    id: 'move_together',
    titleEn: 'Move Together',
    titleAr: 'التحرك معاً',
    taglineEn: 'Sports, Inclusion & Adaptive Accessibility',
    taglineAr: 'الرياضة، الشمول وإتاحة الوصول لجميع القدرات',
    color: '#0EA5E9',
    accentBg: 'rgba(14, 165, 233, 0.12)',
    borderColor: 'rgba(14, 165, 233, 0.4)',
    iconName: 'Activity',
    focusEn: 'Removing barriers to physical movement and designing inclusive grassroots recreational play.',
    focusAr: 'إزالة الحواجز أمام الحركة البدنية وتصميم أنشطة رياضية مجتمعية شاملة لكافة القدرات.',
    coreQuestionEn: 'How can sport connect youth facing physical, sensory, or social barriers into joyful, dignified physical community activity?',
    coreQuestionAr: 'كيف يمكن للرياضة أن تدمج الشباب الذين يواجهون عوائق بدنية أو حسية أو اجتماعية في نشاط حركي مجتمعي ممتع؟',
    activitiesEn: [
      'Co-designing unified sports games for youth of differing abilities',
      'Auditing grassroots facilities for sensory and mobility accessibility',
      'Creating tactile and audio-guided drills for visually impaired participants',
      'Testing adaptive recreation gear with local community sports clubs'
    ],
    activitiesAr: [
      'تصميم ألعاب رياضية موحدة تجمع الشباب بمختلف القدرات البدنية والحركية',
      'تدقيق المرافق المجتمعية لقياس سهولة الوصول الحركي والحسي',
      'ابتكار تدريبات تعتمد على الإرشاد اللمسي والصوتي للمكفوفين وضعاف البصر',
      'تجربة معدات رياضية تكيفية بالتعاون مع أندية الهواة والمراكز الشبابية'
    ],
    deliverableEn: 'Adaptive Grassroots Sports Toolkit with Verified Multi-Ability Pilot Evaluation.',
    deliverableAr: 'حقيبة أدوات الرياضة الشاملة مع تقييم ميداني موثق للأنشطة التكيفية.',
    strategicRelevanceEn: 'Directly aligns with Qatar National Vision 2030 Human Development Pillar and the Ministry of Sports and Youth’s mandate for universal sport access.',
    strategicRelevanceAr: 'يتوافق مباشرة مع ركيزة التنمية البشرية في رؤية قطر الوطنية 2030 وتوجهات وزارة الرياضة والشباب لإتاحة الرياضة للجميع.',
    targetBeneficiariesEn: 'Youth with motor and sensory disabilities, inclusive schools, community recreational clubs.',
    targetBeneficiariesAr: 'الشباب ذوو الإعاقات الحركية والحسية، المدارس الدامجة، والمراكز الرياضية الأهلية.',
    safetySafeguardsEn: [
      'Certified adaptive sports trainer on field standby',
      'Individual medical clearance protocols prior to active drills',
      'Wheelchair and safety helmet inspection checklist'
    ],
    safetySafeguardsAr: [
      'تواجد مدرب رياضي مؤهل في الألعاب التكيفية في موقع النشاط',
      'بروتوكول فحص طبي وسلامة شخصية مسبق لكل تمرين',
      'قائمة تدقيق فني للكراسي المتحركة ومعدات الحماية'
    ],
    qatarVenueEn: 'Aspire Dome & Aspire Park Inclusive Tracks, Doha',
    qatarVenueAr: 'قبة أسباير والمسارات الشاملة في حديقة أسباير، الدوحة'
  },
  {
    id: 'healthy_communities',
    titleEn: 'Healthy Communities',
    titleAr: 'مجتمعات صحية',
    taglineEn: 'Active Daily Lifestyles & Community Wellbeing',
    taglineAr: 'أنماط الحياة النشطة وجودة الحياة البدنية اليومية',
    color: '#F97316',
    accentBg: 'rgba(249, 115, 22, 0.12)',
    borderColor: 'rgba(249, 115, 22, 0.4)',
    iconName: 'HeartPulse',
    focusEn: 'Combating sedentary routines through creative micro-habits, active transit, and community peer motivation.',
    focusAr: 'مكافحة الخمول البدني عبر عادات حركية يومية، والمشي المجتمعي، وتحفيز الأقران.',
    coreQuestionEn: 'How can youth inspire sustainable 30-minute daily movement habits without requiring expensive gyms or equipment?',
    coreQuestionAr: 'كيف يبتكر الشباب حوافز مستدامة لممارسة 30 دقيقة يومياً من النشاط الحركي دون الحاجة لنواد باهظة؟',
    activitiesEn: [
      'Designing neighborhood stair-climb and pedestrian exploration routes',
      'Piloting workplace/campus 5-minute dynamic stretch interventions',
      'Co-creating youth peer physical challenge scorecards',
      'Conducting community baseline physical activity audits'
    ],
    activitiesAr: [
      'تصميم مسارات مشي واستكشاف حضرية تفاعلية داخل الأحياء والحدائق',
      'تطبيق فواصل حركية ديناميكية مدتها 5 دقائق في الجامعات ومقرات العمل',
      'ابتكار سجلات تحدي الأقران للنشاط البدني بين الشباب',
      'إجراء استطلاعات ميدانية لتوثيق أنماط الحركة اليومية للجمهور'
    ],
    deliverableEn: 'Neighborhood Active Life Intervention Guide with 100-Participant Step-Tracking Data.',
    deliverableAr: 'دليل التدخل الحركي المجتمعي مع بيانات قياس موثقة لـ 100 مشارك.',
    strategicRelevanceEn: 'Supports the Qatar National Physical Activity Guidelines and Ministry initiatives on combating lifestyle illnesses.',
    strategicRelevanceAr: 'يدعم الدليل الإرشادي الوطني للنشاط البدني ومبادرات الوزارة لتعزيز الصحة والوقاية من أمراض العصر.',
    targetBeneficiariesEn: 'Sedentary students, office workers, neighborhood families in urban centers.',
    targetBeneficiariesAr: 'الطلبة ذوو النمط الحركي المنخفض، الموظفون، والأسر في التجمعات السكنية.',
    safetySafeguardsEn: [
      'Hydration stations and shaded rest check-stops',
      'Heart rate monitoring guidance for high-exertion segments',
      'Pedestrian-safe zebra cross coordination'
    ],
    safetySafeguardsAr: [
      'نقاط ترطيب مظللة ومحطات استراحة إلزامية',
      'إرشادات قياس نبضات القلب لتجنب الإجهاد المفرط',
      'تأمين معابر المشاة وسلامة المسارات الحضرية'
    ],
    qatarVenueEn: 'Oxygen Park & Crescent Park, Education City / Lusail',
    qatarVenueAr: 'حديقة الأكسجين، المدينة التعليمية وحديقة الهلال، لوسيل'
  },
  {
    id: 'cultures_in_action',
    titleEn: 'Cultures in Action',
    titleAr: 'ثقافات في الميدان',
    taglineEn: 'Intercultural Cooperation Through Play & Story',
    taglineAr: 'التعاون بين الثقافات عبر الرياضة والرواية التشاركية',
    color: '#6366F1',
    accentBg: 'rgba(99, 102, 241, 0.12)',
    borderColor: 'rgba(99, 102, 241, 0.4)',
    iconName: 'Globe',
    focusEn: 'Building deep international friendships through cooperative team challenges, traditional sports, and creative media.',
    focusAr: 'ترسيخ أواصر الصداقة الدولية عبر الألعاب التقليدية التراثية والتحديات الرياضية التشاركية.',
    coreQuestionEn: 'How can traditional heritage games from Qatar and around the world bridge cultural divides and build mutual empathy?',
    coreQuestionAr: 'كيف يمكن للألعاب الشعبية والتراثية القطرية والعالمية أن تبني جسور التفاهم والتعاطف المتبادل بين الشباب؟',
    activitiesEn: [
      'Revitalizing traditional Qatari folk games with contemporary mixed-nation teams',
      'Producing multilingual short video capsules on cultural sports values',
      'Designing collaborative multi-nation obstacle courses',
      'Facilitating intercultural listening circles around youth aspirations'
    ],
    activitiesAr: [
      'إحياء الألعاب الشعبية القطرية التراثية ومشاركتها مع فرق متعددة الجنسيات',
      'إنتاج كبسولات مرئية متعددة اللغات توثق القيم الرياضية المشتركة',
      'تصميم مسارات تحديات جماعية تشترط التنسيق والتفاهم بين الثقافات',
      'إدارة حلقات حوارية شبابية لتبادل التطلعات والتحديات العالمية'
    ],
    deliverableEn: 'Intercultural Heritage Games Playbook & Collaborative Media Portfolio.',
    deliverableAr: 'دليل الألعاب التراثية التفاعلية وحقيبة المحتوى الإعلامي المشترك.',
    strategicRelevanceEn: 'Promotes Qatar’s cultural diplomacy, Arab youth dialogue, and international goodwill through sportsmanship.',
    strategicRelevanceAr: 'يعزز الدبلوماسية الثقافية لدولة قطر، والحوار الشبابي العربي والدولي من خلال الروح الرياضية.',
    targetBeneficiariesEn: 'International delegates, expatriate youth communities in Qatar, cultural centers.',
    targetBeneficiariesAr: 'الوفود الدولية، الجاليات المقيمة في قطر، والمراكز الثقافية والشبابية.',
    safetySafeguardsEn: [
      'Cultural etiquette and respectful translation protocols',
      'Low-impact traditional game adaptations to avoid injuries',
      'Transparent media consent for all filmed participants'
    ],
    safetySafeguardsAr: [
      'بروتوكول احترام التنوع الثقافي وضوابط الترجمة الدقيقة',
      'تكييف الألعاب التراثية لتجنب الإصابات والجهد غير المتوازن',
      'موافقة خطية واضحة على التصوير والنشر الإعلامي'
    ],
    qatarVenueEn: 'Katara Cultural Village & Dhow Harbor, Doha',
    qatarVenueAr: 'الحي الثقافي كتارا وميناء المحامل التقليدية، الدوحة'
  },
  {
    id: 'youth_for_community',
    titleEn: 'Youth for Community',
    titleAr: 'شباب من أجل المجتمع',
    taglineEn: 'Civic Service, Leadership & Local Stewardship',
    taglineAr: 'القيادة المسؤولة والخدمة المجتمعية والمبادرة الميدانية',
    color: '#8A1538',
    accentBg: 'rgba(138, 21, 56, 0.15)',
    borderColor: 'rgba(138, 21, 56, 0.45)',
    iconName: 'Users',
    focusEn: 'Empowering youth to listen directly to community elders, civic workers, and local organizers to solve pressing grassroots needs.',
    focusAr: 'تمكين الشباب من الاستماع المباشر لاحتياجات المجتمع والتطوع المنظم لمعالجة تحديات حقيقية.',
    coreQuestionEn: 'How can youth transition from passive event volunteers to proactive, responsible designers of community solutions?',
    coreQuestionAr: 'كيف يتحول الشاب من متطوع تنفيذي إلى قائد مبادر يصمم وينفذ حلولاً لخدمة مجتمعه؟',
    activitiesEn: [
      'Executing rapid neighborhood service missions with local youth centers',
      'Shadowing municipal community managers and youth center directors',
      'Conducting needs assessments for public recreation spaces',
      'Organizing pop-up community repair or beautification drives'
    ],
    activitiesAr: [
      'تنفيذ مهمات خدمة سريعة داخل الأحياء بالتعاون مع المراكز الشبابية القطرية',
      'معايشة ميدانية مع مديري المراكز والمشرفين المجتمعيين',
      'تقييم احتياجات الساحات العامة ومناطق الترفيه المفتوحة',
      'تنظيم حملات مجتمعية مبسطة لتجميل وصيانة المساحات الرياضية'
    ],
    deliverableEn: 'Civic Micro-Service Blueprint with Signed Partner Endorsement and Beneficiary Testimonials.',
    deliverableAr: 'مخطط الخدمة المجتمعية السريعة مع اعتماد خطي من الشريك المحلي وشهادات المستفيدين.',
    strategicRelevanceEn: 'Directly mirrors the Qatar National Youth Policy goals on active citizenship and institutional youth leadership.',
    strategicRelevanceAr: 'يعكس أهداف السياسة الوطنية للشباب في دولة قطر لتعزيز المواطنة الفاعلة والريادة المؤسسية.',
    targetBeneficiariesEn: 'Local Qatari youth centers, neighborhood councils, public park visitors.',
    targetBeneficiariesAr: 'المراكز الشبابية في قطر، مجالس الأحياء، ورواد الحدائق العامة.',
    safetySafeguardsEn: [
      'Pre-approved civic partner memorandum of understanding',
      'Personal protective equipment for physical renovation tasks',
      'Background-verified team captains and emergency radios'
    ],
    safetySafeguardsAr: [
      'موافقة رسمية مسبقة مع الجهة المجتمعية المستضيفة',
      'معدات السلامة والوقاية الشخصية للمهام الميدانية',
      'قادة فرق معتمدون وأجهزة اتصال لاسلكية للطوارئ'
    ],
    qatarVenueEn: 'Souq Waqif & Old Doha Port Community Hubs',
    qatarVenueAr: 'سوق واقف والمساحات المجتمعية في ميناء الدوحة القديم'
  },
  {
    id: 'green_play',
    titleEn: 'Green Play',
    titleAr: 'اللعب الأخضر',
    taglineEn: 'Sustainable Sports & Eco-Responsible Events',
    taglineAr: 'الاستدامة والمسؤولية البيئية في الفعاليات والمنشآت الرياضية',
    color: '#16A34A',
    accentBg: 'rgba(22, 163, 74, 0.12)',
    borderColor: 'rgba(22, 163, 74, 0.4)',
    iconName: 'Leaf',
    focusEn: 'Minimizing environmental footprints in sports tournaments, stadiums, water usage, and community race events.',
    focusAr: 'تقليص البصمة الكربونية للبطولات الرياضية وإدارة النفايات وترشيد المياه في الملاعب.',
    coreQuestionEn: 'How can community sports events operate at zero single-use plastic while educating participants on circular economy?',
    coreQuestionAr: 'كيف يمكن لفعالية رياضية مجتمعية أن تعمل بدون بلاستيك أحادي الاستخدام وتلهم الجماهير الاستدامة؟',
    activitiesEn: [
      'Executing a zero-waste audit on a live youth sporting event',
      'Testing reusable hydrations hubs and biodegradable bib systems',
      'Conducting carbon-footprint estimations for team local transport',
      'Designing circular merchandise recycling campaigns from old sports jerseys'
    ],
    activitiesAr: [
      'إجراء تدقيق ميداني للنفايات في فعالية رياضية شبابية وتدوير مخرجاتها',
      'اختبار محطات ترطيب خالية من البلاستيك وأرقام سباق قابلة للتحلل',
      'حساب الانبعاثات الكربونية لتنقلات الفرق واقتراح بدائل صديقة للبيئة',
      'تصميم مبادرة لإعادة تدوير القمصان والمعدات الرياضية القديمة'
    ],
    deliverableEn: 'Sustainable Sports Operations Protocol with Measured Diverted-Waste Audit.',
    deliverableAr: 'بروتوكول استدامة الفعاليات الرياضية مع تقرير موثق لكميات النفايات التي تم تحويلها عن المرادم.',
    strategicRelevanceEn: 'Supports Qatar National Environment and Climate Change Strategy and legacy commitments from major tournament hosting.',
    strategicRelevanceAr: 'يدعم استراتيجية قطر الوطنية للبيئة والتغير المناخي واستدامة إرث البطولات العالمية الكبرى.',
    targetBeneficiariesEn: 'Local race organizers, sports clubs, schools, environmental youth volunteers.',
    targetBeneficiariesAr: 'منظمو السباقات المحلية، الأندية الرياضية، المدارس، والمتطوعون البيئيون.',
    safetySafeguardsEn: [
      'Sanitary water testing on mobile refilling dispensers',
      'Safe material handling and sorting equipment',
      'Heat exhaustion monitoring during outdoor field audits'
    ],
    safetySafeguardsAr: [
      'فحص سلامة ونظافة محطات مياه الشرب المتنقلة',
      'قفازات ومعدات حماية متوافقة مع معايير فرز المواد',
      'مراقبة مؤشرات الإجهاد الحراري أثناء العمل الميداني'
    ],
    qatarVenueEn: 'Al Janoub Stadium Precinct & Torba Farmers Market, Al Wakrah / EC',
    qatarVenueAr: 'محيط استاد الجنوب وسوق تربة المجتمعي، الوكرة / المدينة التعليمية'
  },
  {
    id: 'connected_generations',
    titleEn: 'Connected Generations',
    titleAr: 'أجيال متصلة',
    taglineEn: 'Intergenerational Solidarity & Active Digital Inclusion',
    taglineAr: 'التضامن بين الأجيال والدمج الرقمي والحركي لكبار السن',
    color: '#D97706',
    accentBg: 'rgba(217, 119, 6, 0.12)',
    borderColor: 'rgba(217, 119, 6, 0.4)',
    iconName: 'Smile',
    focusEn: 'Pairing youth with seniors to co-learn digital wellness tools, participate in gentle movement, and preserve cultural sports memories.',
    focusAr: 'دمج الشباب مع كبار السن لتعلم أدوات الصحة الرقمية، وممارسة تمارين خفيفة، وتوثيق ذكريات الرياضة.',
    coreQuestionEn: 'How can youth technology skills and energy enrich the physical and emotional vitality of older community members?',
    coreQuestionAr: 'كيف تسهم مهارات الشباب الرقمية وحيويتهم في تحسين اللياقة والنشاط والتواصل الاجتماعي لكبار السن؟',
    activitiesEn: [
      'One-on-one smart fitness tracker onboarding for senior citizens',
      'Gentle mobility, balance, and seated stretching workshops',
      'Recording oral histories of Qatari sports champions and heritage sailors',
      'Developing simplified tablet interfaces for community walking clubs'
    ],
    activitiesAr: [
      'تدريب فردي لكبار السن على استخدام الساعات الذكية وتطبيقات قياس الخطوات',
      'ورش حركية خفيفة لتمارين التوازن والمرونة المناسبة للأعمار المتقدمة',
      'توثيق التاريخ الشفوي لذكريات رواد الرياضة والبحارة القدامى في قطر',
      'تصميم واجهات تطبيقات مبسطة تناسب كبار السن لمجموعات المشي الصباحي'
    ],
    deliverableEn: 'Senior Active Wellness Playbook & Intergenerational Sports Memory Archive.',
    deliverableAr: 'دليل الصحة الحركية لكبار السن وأرشيف الذاكرة الرياضية المشتركة.',
    strategicRelevanceEn: 'Promotes family cohesion, intergenerational respect, and active aging in line with Qatar’s social development pillars.',
    strategicRelevanceAr: 'يعزز التماسك الأسري والاحترام بين الأجيال والشيخوخة النشطة وفق ركائز التنمية الاجتماعية لدولة قطر.',
    targetBeneficiariesEn: 'Senior citizens (Ehsan foundation), retirement community clubs, youth grandchildren.',
    targetBeneficiariesAr: 'كبار السن (مركز إحسان)، مجالس المتقاعدين، والشباب والناشئة.',
    safetySafeguardsEn: [
      'Certified geriatric mobility physical therapist oversight',
      'No strenuous lifting or rapid direction changes',
      'Comfortable air-conditioned indoor environments'
    ],
    safetySafeguardsAr: [
      'إشراف أخصائي علاج طبيعي معتمد في حركية كبار السن',
      'تجنب الأوزان أو الحركات المفاجئة التي تسبب الإجهاد',
      'تنفيذ الأنشطة في بيئات داخلية مكيفة ومريحة تماماً'
    ],
    qatarVenueEn: 'Qatar National Library Community Hall & Education City Multaqa',
    qatarVenueAr: 'القاعة المجتمعية في مكتبة قطر الوطنية وملتقى المدينة التعليمية'
  }
];

export const SAMPLE_CHALLENGES: ChallengeCard[] = [
  {
    id: 'CH-MT-01',
    worldId: 'move_together',
    titleEn: 'Adaptive Blind Football & Acoustic Play Clinic',
    titleAr: 'عيادة كرة قدم المكفوفين وتجارب اللعب الحسي',
    summaryEn: 'Co-design a sound-guided training circuit and friendly tournament for visually impaired youth at Aspire Dome.',
    summaryAr: 'تصميم مسار تدريبي يعتمد على الكرات الصوتية والإرشاد السمعي لشباب ضعاف البصر في قبة أسباير.',
    locationEn: 'Aspire Dome, Indoor Pitch 3',
    locationAr: 'قبة أسباير، الملعب الداخلي رقم 3',
    beneficiariesEn: '25 Visually impaired youth and inclusive club coaches',
    beneficiariesAr: '25 شاباً من ضعاف البصر والمدربين المتخصصين',
    difficulty: 'Advanced',
    estimatedHours: 36,
    partnerEn: 'Qatar Paralympic Committee (Proposed Partner)',
    partnerAr: 'الاتحاد القطري لذوي الاحتياجات الخاصة (شريك مقترح)',
    deliverablesEn: [
      'Acoustic sports drill manual in Arabic and English',
      'Safety checklist for bell-ball blind soccer',
      'Pilot tournament observation scorecards'
    ],
    deliverablesAr: [
      'دليل تدريبات حسية صوتية باللغتين العربية والإنجليزية',
      'قائمة تدقيق السلامة لملاعب كرة الجرس للمكفوفين',
      'سجلات رصد وتحكيم للبطولة التجريبية'
    ],
    verificationCriteriaEn: [
      'Signed attendance verification by certified Paralympic facilitator',
      'Participant safety zero-incident signoff',
      'Recorded audio feedback from 8+ participants'
    ],
    verificationCriteriaAr: [
      'توقيع حضور معتمد من ميسر الألعاب البارالمبية',
      'سجل سلامة معتمد بخلو الجلسة من أي إصابات',
      'تسجيلات صوتية لآراء وملاحظات 8 مشاركين على الأقل'
    ],
    status: 'Verified'
  },
  {
    id: 'CH-HC-02',
    worldId: 'healthy_communities',
    titleEn: 'Doha Metro Active Commute Challenge',
    titleAr: 'تحدي التنقل الحركي عبر مترو الدوحة',
    summaryEn: 'Transform daily metro commutes into active walking journeys with gamified station-to-park wayfinding at Lusail and Msheireb.',
    summaryAr: 'تحويل رحلات المترو اليومية إلى خطوات صحية عبر مسارات مشي تفاعلية بين المحطات والحدائق العامة.',
    locationEn: 'Msheireb Downtown to Lusail Crescent Park',
    locationAr: 'مشيرب قلب الدوحة إلى حديقة الهلال، لوسيل',
    beneficiariesEn: '150 Daily commuters and university students',
    beneficiariesAr: '150 من مستخدمي المترو وطلبة الجامعات',
    difficulty: 'Foundation',
    estimatedHours: 24,
    partnerEn: 'Qatar Rail & Ministry of Sports and Youth Community Sports Section',
    partnerAr: 'شركة الريل وقسم الرياضة المجتمعية بوزارة الرياضة والشباب',
    deliverablesEn: [
      'Station-to-greenway pedestrian route map with distance and caloric markers',
      'Micro-stretch prompt posters at platform exits',
      'Step-count telemetry report across 3 days'
    ],
    deliverablesAr: [
      'خريطة مسارات مشي من المحطات إلى الحدائق تتضمن المسافات والسعرات',
      'ملصقات إرشادية لحركات الإحماء السريع عند مخارج المحطات',
      'تقرير إحصائي لمعدلات الخطوات على مدار 3 أيام'
    ],
    verificationCriteriaEn: [
      'GPS-verified route walk completed by 4 independent teams',
      'QR code scan analytics at 6 station points',
      'Safety audit of pedestrian sidewalks and crossings'
    ],
    verificationCriteriaAr: [
      'توثيق إلكتروني لمسارات المشي عبر GPS لـ 4 فرق مستقلة',
      'إحصائيات مسح رموز QR في 6 نقاط بالمحطات',
      'تدقيق ميداني لسلامة أرصفة ومعابر المشاة'
    ],
    status: 'Active'
  },
  {
    id: 'CH-CA-03',
    worldId: 'cultures_in_action',
    titleEn: 'Traditional Dhow & Sea Heritage Teamwork Regatta',
    titleAr: 'سباق التجديف التراثي والتلاحم البحري',
    summaryEn: 'International and Qatari youth learn maritime heritage knotting, synchronized rowing, and ocean stewardship at Katara beach.',
    summaryAr: 'تدريب شباب قطريين ودوليين على فنون التجديف الجماعي التراثي، عقد الحبال البحرية وحماية السواحل في شاطئ كتارا.',
    locationEn: 'Katara Cultural Village Beach & Maritime Museum',
    locationAr: 'شاطئ الحي الثقافي كتارا والمتحف البحري',
    beneficiariesEn: '40 International delegates and Qatari youth leaders',
    beneficiariesAr: '40 مشاركاً دولياً وقطرياً',
    difficulty: 'Pioneer',
    estimatedHours: 30,
    partnerEn: 'Katara Cultural Village & Traditional Dhow Association',
    partnerAr: 'المؤسسة العامة للحي الثقافي كتارا وجمعية المحامل التقليدية',
    deliverablesEn: [
      'Documented video archive of shared maritime teamwork skills',
      'Maritime safety protocol checklist for youth ocean rowing',
      'Multilingual reflection diary on teamwork traditions'
    ],
    deliverablesAr: [
      'أرشيف مرئي يوثق مهارات العمل الجماعي في التجديف البحري',
      'قائمة تدقيق السلامة البحرية للتجديف الشبابي التراثي',
      'يوميات تأمل ثنائية اللغة حول تقاليد العمل الجماعي'
    ],
    verificationCriteriaEn: [
      'Coastguard and boat captain safety certification',
      'All participants equipped with certified life-vests and verified swim tests',
      'Peer collaboration evaluations completed by each mixed team'
    ],
    verificationCriteriaAr: [
      'شهادة اعتماد السلامة من خفر السواحل وقبطان المحمل',
      'فحص سترات النجاة واختبارات السلامة المائية لجميع المشاركين',
      'تقييمات متبادلة للعمل الجماعي لكل فريق مشترك'
    ],
    status: 'Open'
  },
  {
    id: 'CH-YC-04',
    worldId: 'youth_for_community',
    titleEn: 'Souq Waqif Accessibility & Community Support Pilot',
    titleAr: 'مبادرة تسهيل الحركة والخدمة المجتمعية في سوق واقف',
    summaryEn: 'Youth teams partner with Souq shopkeepers and visitors to map step-free paths, assist elderly visitors, and create digital hospitality guides.',
    summaryAr: 'فرق شبابية تتعاون مع أصحاب المحلات والزوار لتحديد المسارات المهيأة للكراسي، ومساعدة كبار السن، وإعداد دليل إرشادي رقمي.',
    locationEn: 'Souq Waqif Traditional Market, Doha',
    locationAr: 'سوق واقف التراثي، الدوحة',
    beneficiariesEn: 'Visitors with strollers/wheelchairs and heritage merchants',
    beneficiariesAr: 'زوار السوق من ذوي العربات والكراسي وأصحاب المتاجر التراثية',
    difficulty: 'Advanced',
    estimatedHours: 28,
    partnerEn: 'Souq Waqif Management & Local Youth Centers',
    partnerAr: 'إدارة سوق واقف والمراكز الشبابية في الدوحة',
    deliverablesEn: [
      'Physical step-free access map for historic market lanes',
      'Assisted escort log for 30+ families and elderly guests',
      'Merchant accessibility pledge signed by 15 local shops'
    ],
    deliverablesAr: [
      'خريطة مسارات خالية من العتبات للأزقة التراثية',
      'سجل مرافقة ومساعدة لـ 30 عائلة وزائر من كبار السن',
      'وثيقة تعهد بتسهيل الوصول موقعة من 15 متجراً محلياً'
    ],
    verificationCriteriaEn: [
      'Market administration signed clearance and evaluation',
      'Direct visitor feedback responses collected via survey tablet',
      'Photo evidence of newly installed temporary ramps'
    ],
    verificationCriteriaAr: [
      'اعتماد رسمي وتقييم موقع من إدارة السوق',
      'استبيانات فورية موثقة عبر أجهزة لوحية من الزوار',
      'توثيق فوتوغرافي للمنحدرات المؤقتة التي تم تركيبها'
    ],
    status: 'Verified'
  },
  {
    id: 'CH-GP-05',
    worldId: 'green_play',
    titleEn: 'Al Janoub Zero Single-Use Plastic Youth Sports Festival',
    titleAr: 'مهرجان استاد الجنوب الرياضي الخالي من البلاستيك أحادي الاستخدام',
    summaryEn: 'Implement reusable stainless-steel water bottle systems, organic waste composting, and eco-refereeing for a 300-participant youth match day.',
    summaryAr: 'تطبيق نظام عبوات مياه مستدامة، وتحويل النفايات العضوية، وتحكيم بيئي لبطولة شبابية تضم 300 لاعب في محيط استاد الجنوب.',
    locationEn: 'Al Janoub Stadium Precinct, Al Wakrah',
    locationAr: 'محيط استاد الجنوب، الوكرة',
    beneficiariesEn: '300 Youth players, 12 coaches, 500 family spectators',
    beneficiariesAr: '300 لاعب ناشئ، 12 مدرباً، و500 مشجع من الأهالي',
    difficulty: 'Pioneer',
    estimatedHours: 40,
    partnerEn: 'Ministry of Sports and Youth & Al Wakrah Municipality',
    partnerAr: 'وزارة الرياضة والشباب وبلدية الوكرة',
    deliverablesEn: [
      'Zero single-use plastic sports tournament operational manual',
      'Diverted waste weight certificate (minimum 120kg diverted from landfill)',
      'Infographic on water saving and carbon footprint offset'
    ],
    deliverablesAr: [
      'دليل تشغيل البطولات الرياضية الخالية تماماً من البلاستيك',
      'شهادة قياس وزن النفايات المعاد تدويرها (120 كغم على الأقل)',
      'مخطط معلومات بياني لترشيد المياه وخفض البصمة الكربونية'
    ],
    verificationCriteriaEn: [
      'Weigh-station scale slips stamped by municipal waste recycler',
      'Inspectors log verifying 0 single-use bottles distributed on pitches',
      'Pre-and-post event ground cleanliness audit photography'
    ],
    verificationCriteriaAr: [
      'قسائم وزن معتمدة من مركز تدوير النفايات التابع للبلدية',
      'سجل تفتيش يثبت عدم توزيع أي عبوة بلاستيكية على الملاعب',
      'توثيق تصويري دقيق لنظافة الموقع قبل وبعد البطولة'
    ],
    status: 'Verified'
  },
  {
    id: 'CH-CG-06',
    worldId: 'connected_generations',
    titleEn: 'Generations Walking & Smart Health Pairing at Oxygen Park',
    titleAr: 'مبادرة المشي والصحة الذكية بين الأجيال في حديقة الأكسجين',
    summaryEn: 'Youth mentors pair with senior citizens to learn digital health tracking, share outdoor sunrise walks, and preserve oral health wisdom.',
    summaryAr: 'دمج الشباب مع كبار السن في مسارات مشي صباحية مع تدريب شخصي على تطبيقات قياس النبض والخطوات وتوثيق نصائح الصحة التراثية.',
    locationEn: 'Oxygen Park, Education City, Al Rayyan',
    locationAr: 'حديقة الأكسجين، المدينة التعليمية، الريان',
    beneficiariesEn: '30 Seniors and 30 youth partners',
    beneficiariesAr: '30 من كبار السن و30 شاباً من المشاركين',
    difficulty: 'Foundation',
    estimatedHours: 20,
    partnerEn: 'Center for Elderly Empowerment and Care (Ehsan) & Qatar Foundation',
    partnerAr: 'مركز تمكين ورعاية كبار السن (إحسان) ومؤسسة قطر',
    deliverablesEn: [
      'Simplified Arabic large-print smart tracker quick guide',
      'Recorded oral history podcast episode: Qatar Sports in the 1970s',
      'Physical vitality assessment before and after walking cohort'
    ],
    deliverablesAr: [
      'دليل مبسط بالخط الكبير باللغة العربية لاستخدام الساعات الذكية',
      'حلقة بودكاست توثق التاريخ الشفوي للرياضة القطرية في السبعينيات',
      'استمارة تقييم الحيوية والنشاط قبل وبعد أسبوع المشي المشترك'
    ],
    verificationCriteriaEn: [
      'Medical clearance and attendance confirmed by Ehsan care specialists',
      '100% voluntary participant satisfaction survey completed',
      'Delivered 30 printed large-font guides to participants'
    ],
    verificationCriteriaAr: [
      'اعتماد طبي وسجل حضور مؤكد من المشرفين في مركز إحسان',
      'استبيان رضا المستفيدين بنسبة اكتمال 100%',
      'تسليم 30 نسخة مطبوعة بالخط الكبير لكافة المشاركين'
    ],
    status: 'Active'
  }
];
