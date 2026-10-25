export type Language = 'en' | 'ar';

export type MissionWorldId = 
  | 'move_together' 
  | 'healthy_communities' 
  | 'cultures_in_action' 
  | 'youth_for_community' 
  | 'green_play' 
  | 'connected_generations';

export interface MissionWorld {
  id: MissionWorldId;
  titleEn: string;
  titleAr: string;
  taglineEn: string;
  taglineAr: string;
  color: string;
  accentBg: string;
  borderColor: string;
  iconName: string;
  focusEn: string;
  focusAr: string;
  coreQuestionEn: string;
  coreQuestionAr: string;
  activitiesEn: string[];
  activitiesAr: string[];
  deliverableEn: string;
  deliverableAr: string;
  strategicRelevanceEn: string;
  strategicRelevanceAr: string;
  targetBeneficiariesEn: string;
  targetBeneficiariesAr: string;
  safetySafeguardsEn: string[];
  safetySafeguardsAr: string[];
  qatarVenueEn: string;
  qatarVenueAr: string;
}

export interface ChallengeCard {
  id: string;
  worldId: MissionWorldId;
  titleEn: string;
  titleAr: string;
  summaryEn: string;
  summaryAr: string;
  locationEn: string;
  locationAr: string;
  beneficiariesEn: string;
  beneficiariesAr: string;
  difficulty: 'Foundation' | 'Advanced' | 'Pioneer';
  estimatedHours: number;
  partnerEn: string;
  partnerAr: string;
  deliverablesEn: string[];
  deliverablesAr: string[];
  verificationCriteriaEn: string[];
  verificationCriteriaAr: string[];
  status: 'Open' | 'Active' | 'Verified';
}

export interface MissionPlan {
  id: string;
  worldId: MissionWorldId;
  title: string;
  challengeType: string;
  targetAudience: string;
  teamSize: number;
  durationHours: number;
  resources: string[];
  accessibilityFeatures: string[];
  milestones: {
    day: number;
    title: string;
    output: string;
  }[];
  safeguardingPlan: string;
  expectedOutputs: string[];
  evaluationMetric: string;
  createdAt: string;
}

export interface ImpactReceipt {
  id: string;
  receiptNumber: string;
  missionTitleEn: string;
  missionTitleAr: string;
  worldId: MissionWorldId;
  teamName: string;
  teamMembers: { name: string; country: string; role: string }[];
  challengeOwnerEn: string;
  challengeOwnerAr: string;
  locationEn: string;
  locationAr: string;
  objectiveEn: string;
  objectiveAr: string;
  plannedActivityEn: string;
  plannedActivityAr: string;
  completedActivityEn: string;
  completedActivityAr: string;
  verificationStatus: 'Proposed' | 'Approved' | 'In Progress' | 'Evidence Submitted' | 'Reviewed' | 'Verified';
  evidenceArtifacts: {
    titleEn: string;
    titleAr: string;
    type: 'document' | 'metric' | 'testimonial' | 'audit_log';
    hash: string;
    verifiedBy: string;
  }[];
  participantLearningEn: string[];
  participantLearningAr: string[];
  beneficiaryFeedbackEn: string;
  beneficiaryFeedbackAr: string;
  directOutputsEn: string[];
  directOutputsAr: string[];
  outcomeIndicators: {
    metricEn: string;
    metricAr: string;
    target: number;
    actual: number;
    unitEn: string;
    unitAr: string;
  }[];
  limitationsEn: string;
  limitationsAr: string;
  followUpOwnerEn: string;
  followUpOwnerAr: string;
  nextStepsEn: string[];
  nextStepsAr: string[];
  completionTimestamp: string;
  verificationBadge: string;
}

export interface ProgramDay {
  dayNumber: number;
  dateStr: string;
  themeEn: string;
  themeAr: string;
  subtitleEn: string;
  subtitleAr: string;
  coreOutputEn: string;
  coreOutputAr: string;
  sessions: {
    time: string;
    titleEn: string;
    titleAr: string;
    locationEn: string;
    locationAr: string;
    type: 'keynote' | 'workshop' | 'field' | 'review' | 'ceremony' | 'cultural';
    descriptionEn: string;
    descriptionAr: string;
    facilitatorEn: string;
    facilitatorAr: string;
    safetyGateEn?: string;
    safetyGateAr?: string;
  }[];
}

export interface TeamMemberProfile {
  id: string;
  nameEn: string;
  nameAr: string;
  proposedRoleEn: string;
  proposedRoleAr: string;
  titleEn: string;
  titleAr: string;
  bioEn: string;
  bioAr: string;
  educationEn: string[];
  educationAr: string[];
  coreCompetenciesEn: string[];
  coreCompetenciesAr: string[];
  establishedProjectsEn: { name: string; url?: string; description: string }[];
  establishedProjectsAr: { name: string; url?: string; description: string }[];
  certificationsEn: string[];
  certificationsAr: string[];
  languagesEn: string[];
  languagesAr: string[];
}

export interface BudgetConfig {
  scenario: 'pilot' | 'forum' | 'global';
  participantCount: number;
  internationalDelegates: number;
  missionWorldCount: number;
  venueTier: 'standard' | 'premier' | 'olympic';
  hasFieldGrants: boolean;
  hasHybridStreaming: boolean;
  durationDays: number;
}

export interface BudgetBreakdown {
  totalQar: number;
  perParticipantQar: number;
  perMissionQar: number;
  categories: {
    nameEn: string;
    nameAr: string;
    amountQar: number;
    percentage: number;
    detailsEn: string;
    detailsAr: string;
  }[];
}

export interface BenchmarkItem {
  nameEn: string;
  nameAr: string;
  focusEn: string;
  focusAr: string;
  sportsRoleEn: string;
  sportsRoleAr: string;
  participationModelEn: string;
  participationModelAr: string;
  outputModelEn: string;
  outputModelAr: string;
  verificationModelEn: string;
  verificationModelAr: string;
  qMissionsDistinctionEn: string;
  qMissionsDistinctionAr: string;
}

export interface InstitutionalDeliverable {
  id: string;
  number: string;
  titleEn: string;
  titleAr: string;
  summaryEn: string;
  summaryAr: string;
  formatEn: string;
  formatAr: string;
  targetBeneficiariesEn: string;
  targetBeneficiariesAr: string;
  ministryValueEn: string;
  ministryValueAr: string;
  productionOwnerEn: string;
  productionOwnerAr: string;
  qualityCriteriaEn: string[];
  qualityCriteriaAr: string[];
}
