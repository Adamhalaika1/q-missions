import { BudgetBreakdown, BudgetConfig } from '../types';

export function calculateBudget(config: BudgetConfig): BudgetBreakdown {
  const {
    participantCount,
    internationalDelegates,
    missionWorldCount,
    venueTier,
    hasFieldGrants,
    hasHybridStreaming,
    durationDays
  } = config;

  // Venue daily cost by tier
  const venueDailyRate = venueTier === 'olympic' ? 65000 : venueTier === 'premier' ? 42000 : 25000;
  const venuesCost = venueDailyRate * durationDays;

  // Travel, lodging & hospitality for international delegates
  const flightAndVisaPerPerson = 4200;
  const lodgingDailyPerPerson = 650;
  const travelLodgingCost = internationalDelegates * (flightAndVisaPerPerson + lodgingDailyPerPerson * (durationDays + 1));

  // Local catering and participant hospitality
  const cateringDailyPerPerson = 220;
  const cateringCost = participantCount * cateringDailyPerPerson * durationDays;

  // Mission field kits, sports equipment & venue transport
  const missionKitPerParticipant = 380;
  const fieldBusLogistics = missionWorldCount * 1800 * durationDays;
  const fieldGrantsCost = hasFieldGrants ? (missionWorldCount * 15000) : 0;
  const missionsOperationCost = (participantCount * missionKitPerParticipant) + fieldBusLogistics + fieldGrantsCost;

  // Staffing, master facilitators, safety officers & athletic trainers
  const staffDaily = 18000;
  const staffingCost = staffDaily * durationDays;

  // Digital platform, legacy verification system & live streaming
  const basePlatformCost = 95000;
  const streamingCost = hasHybridStreaming ? 45000 : 15000;
  const techCost = basePlatformCost + streamingCost;

  // Safeguarding, comprehensive event insurance & medical standby
  const safeguardingAndInsuranceCost = 65000 + (participantCount * 80);

  // Monitoring, evaluation, 90-day follow-up report & publications
  const evaluationAndReportsCost = 85000;

  // Contingency reserve (7%)
  const subtotal = 
    venuesCost + 
    travelLodgingCost + 
    cateringCost + 
    missionsOperationCost + 
    staffingCost + 
    techCost + 
    safeguardingAndInsuranceCost + 
    evaluationAndReportsCost;

  const contingency = Math.round(subtotal * 0.07);
  const totalQar = subtotal + contingency;

  const perParticipantQar = Math.round(totalQar / Math.max(1, participantCount));
  const estimatedMissions = Math.max(1, Math.round(participantCount / 6));
  const perMissionQar = Math.round(totalQar / estimatedMissions);

  const categories = [
    {
      nameEn: 'International Travel, Visas & Hospitality',
      nameAr: 'السفر الدولي والتأشيرات والإقامة الفندقية',
      amountQar: travelLodgingCost,
      percentage: Math.round((travelLodgingCost / totalQar) * 100),
      detailsEn: `${internationalDelegates} international delegates with hotel accommodation, flights, and dedicated visa support.`,
      detailsAr: `${internationalDelegates} مشارك دولي مع إقامة فندقية، تذاكر طيران ودعم التأشيرات.`
    },
    {
      nameEn: 'Venues & Olympic/Sports Facilities',
      nameAr: 'المرافق الرياضية وقاعات الفعاليات الرسمية',
      amountQar: venuesCost,
      percentage: Math.round((venuesCost / totalQar) * 100),
      detailsEn: `${durationDays} days at ${venueTier.toUpperCase()} tier facility (e.g. Aspire Zone / Education City / Al Janoub).`,
      detailsAr: `${durationDays} أيام بمستوى ${venueTier} (مثل أسباير زون، المدينة التعليمية أو استاد الجنوب).`
    },
    {
      nameEn: 'Missions Operations, Field Kits & Micro-Grants',
      nameAr: 'العمليات الميدانية، حقائب المعدات والمنح التجريبية',
      amountQar: missionsOperationCost,
      percentage: Math.round((missionsOperationCost / totalQar) * 100),
      detailsEn: `Equipment kits for ${missionWorldCount} worlds, field logistics, safety gear and ${hasFieldGrants ? 'approved micro-grants' : 'standard kit'}.`,
      detailsAr: `حقائب الأدوات لـ ${missionWorldCount} عوالم، لوجستيات التنقل والمعدات الميدانية.`
    },
    {
      nameEn: 'Hospitality, Catering & Local Transport',
      nameAr: 'الضيافة، الإعاشة والتنقلات المحلية',
      amountQar: cateringCost,
      percentage: Math.round((cateringCost / totalQar) * 100),
      detailsEn: `Healthy athletic nutrition, hydration, and event transport for all ${participantCount} participants.`,
      detailsAr: `تغذية رياضية صحية، مياه وتنقلات داخلية لجميع المشاركين البالغ عددهم ${participantCount}.`
    },
    {
      nameEn: 'Facilitators, Athletic Coaches & Staffing',
      nameAr: 'الميسرون المعتمدون، المدربون الرياضيون والكوادر',
      amountQar: staffingCost,
      percentage: Math.round((staffingCost / totalQar) * 100),
      detailsEn: `Certified youth trainers, sports specialists, community coordinators, and bilingual facilitators.`,
      detailsAr: `مدربون شبابيون معتمدون، اختصاصيو رياضة وميسرون ثنائيو اللغة.`
    },
    {
      nameEn: 'Digital Mission Platform & Verification Tech',
      nameAr: 'منصة المهمات الرقمية وتقنيات توثيق الأثر',
      amountQar: techCost,
      percentage: Math.round((techCost / totalQar) * 100),
      detailsEn: `Mission Control portal, digital passports, Verified Impact Receipts and ${hasHybridStreaming ? 'hybrid broadcasting' : 'recording'}.`,
      detailsAr: `بوابة التحكم، الجواز الرقمي، إيصالات الأثر المعتمدة والبث المباشر.`
    },
    {
      nameEn: 'Safeguarding, Event Insurance & Medical standby',
      nameAr: 'الحماية المجتمعية، التأمين الشامل والطوارئ الطبية',
      amountQar: safeguardingAndInsuranceCost,
      percentage: Math.round((safeguardingAndInsuranceCost / totalQar) * 100),
      detailsEn: `Participant liability, medical standby teams, physical safety protocols and background compliance.`,
      detailsAr: `تأمين المسؤولية، فرق إسعاف متأهبة، وبروتوكولات السلامة الميدانية.`
    },
    {
      nameEn: 'Monitoring, 90-Day Follow-Up & Publications',
      nameAr: 'المتابعة والتقييم، تقرير 90 يوماً والتوثيق الرسمي',
      amountQar: evaluationAndReportsCost,
      percentage: Math.round((evaluationAndReportsCost / totalQar) * 100),
      detailsEn: `Impact auditing, stakeholder surveys, published Youth Missions Atlas, and 90-day progress review.`,
      detailsAr: `تدقيق مؤشرات الأثر، استبيانات الشركاء، أطلس المهمات وتقرير متابعة 90 يوماً.`
    },
    {
      nameEn: 'Contingency Reserve (7%)',
      nameAr: 'احتياطي الطوارئ التشغيلي (7%)',
      amountQar: contingency,
      percentage: Math.round((contingency / totalQar) * 100),
      detailsEn: `Emergency buffer for dynamic logistical needs and field contingency operations.`,
      detailsAr: `مخصص احترازي لمواجهة أي متغيرات لوجستية أو ميدانية طارئة.`
    }
  ];

  return {
    totalQar,
    perParticipantQar,
    perMissionQar,
    categories
  };
}

export function formatQar(amount: number, locale: 'en' | 'ar' = 'en'): string {
  const formatted = new Intl.NumberFormat(locale === 'ar' ? 'ar-QA' : 'en-US', {
    maximumFractionDigits: 0
  }).format(amount);
  return locale === 'ar' ? `${formatted} ر.ق` : `${formatted} QAR`;
}

export const PRESET_SCENARIOS: Record<'pilot' | 'forum' | 'global', BudgetConfig> = {
  pilot: {
    scenario: 'pilot',
    participantCount: 80,
    internationalDelegates: 25,
    missionWorldCount: 3,
    venueTier: 'standard',
    hasFieldGrants: false,
    hasHybridStreaming: false,
    durationDays: 3
  },
  forum: {
    scenario: 'forum',
    participantCount: 250,
    internationalDelegates: 120,
    missionWorldCount: 6,
    venueTier: 'premier',
    hasFieldGrants: true,
    hasHybridStreaming: true,
    durationDays: 5
  },
  global: {
    scenario: 'global',
    participantCount: 600,
    internationalDelegates: 350,
    missionWorldCount: 6,
    venueTier: 'olympic',
    hasFieldGrants: true,
    hasHybridStreaming: true,
    durationDays: 5
  }
};
