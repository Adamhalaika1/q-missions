import { ImpactReceipt, MissionPlan, MissionWorldId } from '../types';

export const VERIFICATION_STAGES: ImpactReceipt['verificationStatus'][] = [
  'Proposed',
  'Approved',
  'In Progress',
  'Evidence Submitted',
  'Reviewed',
  'Verified'
];

export function getStageIndex(status: ImpactReceipt['verificationStatus']): number {
  return VERIFICATION_STAGES.indexOf(status);
}

export function canTransitionTo(
  current: ImpactReceipt['verificationStatus'],
  next: ImpactReceipt['verificationStatus']
): boolean {
  const currentIndex = getStageIndex(current);
  const nextIndex = getStageIndex(next);
  if (currentIndex === -1 || nextIndex === -1) return false;
  // Can move forward 1 step or back to Reviewed/In Progress
  return nextIndex === currentIndex + 1 || (nextIndex < currentIndex && nextIndex >= 2);
}

export interface MissionGeneratorInput {
  worldId: MissionWorldId;
  challengeType: string;
  targetAudience: string;
  teamSize: number;
  durationHours: number;
  resources: string[];
  accessibilityFeatures: string[];
  customTitle?: string;
}

export function generateStructuredMissionPlan(input: MissionGeneratorInput): MissionPlan {
  const worldNames: Record<MissionWorldId, string> = {
    move_together: 'Move Together (Sports & Inclusive Physical Activity)',
    healthy_communities: 'Healthy Communities (Active Lifestyles & Wellbeing)',
    cultures_in_action: 'Cultures in Action (International Teamwork & Storytelling)',
    youth_for_community: 'Youth for Community (Responsible Civic Service & Leadership)',
    green_play: 'Green Play (Sustainable Sports & Eco-Responsible Events)',
    connected_generations: 'Connected Generations (Intergenerational Tech & Active Aging)'
  };

  const id = `MP-${Date.now().toString(36).toUpperCase()}-${Math.floor(Math.random() * 899 + 100)}`;
  const title = input.customTitle || `${worldNames[input.worldId].split(' ')[0]}: Community Challenge — ${input.challengeType}`;

  const milestones = [
    {
      day: 1,
      title: '01. Listen & Assess',
      output: `Completed baseline stakeholder interview with ${input.targetAudience} representatives, mapped accessibility barriers, and agreed safety scope.`
    },
    {
      day: 2,
      title: '02. Co-Design & Pilot Setup',
      output: `Developed structured activity guide and safe physical protocol for ${input.teamSize} team members with ${input.accessibilityFeatures.join(', ')} integration.`
    },
    {
      day: 3,
      title: '03. Supervised Field Mission Execution',
      output: `Conducted controlled on-site pilot session with authorized local challenge owner, documenting active participant engagement and physical metrics.`
    },
    {
      day: 4,
      title: '04. Evidence Verification & Feedback Audit',
      output: `Compiled attendance logs, beneficiary survey data, photos of physical adaptations, and completed third-party observer evaluation.`
    },
    {
      day: 5,
      title: '05. Handover Playbook & 90-Day Transition',
      output: `Formally submitted completed Verified Impact Receipt and transferred reusable operational toolkit to local institutional partner.`
    }
  ];

  const expectedOutputs = [
    `Tested Community Activity Protocol tailored for ${input.targetAudience}`,
    `Accessibility Compliance Checklist (${input.accessibilityFeatures.length} verified standards)`,
    `Documented Verified Impact Receipt with third-party observer audit hash`,
    `Institutional continuation roadmap with local designated owner`
  ];

  const safeguardingPlan = `Full compliance with Qatar National Youth Safeguarding standards: mandatory pre-activity risk assessment, qualified first-aid coverage at venue, adult-to-youth supervision ratio 1:8, verified participant consent, and zero-tolerance physical harm protocol.`;

  return {
    id,
    worldId: input.worldId,
    title,
    challengeType: input.challengeType,
    targetAudience: input.targetAudience,
    teamSize: input.teamSize,
    durationHours: input.durationHours,
    resources: input.resources,
    accessibilityFeatures: input.accessibilityFeatures,
    milestones,
    safeguardingPlan,
    expectedOutputs,
    evaluationMetric: `Active participation rate >85%, minimum 4 verifiable artifacts submitted, and signed community partner endorsement.`,
    createdAt: new Date().toISOString()
  };
}

export function computeReceiptVerificationHash(receiptId: string, status: string, outputsCount: number): string {
  // Simple deterministic hash simulation for verifiable evidence
  let hash = 0;
  const str = `${receiptId}:${status}:${outputsCount}:QMISSIONS-QATAR-2026`;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash |= 0;
  }
  const hex = Math.abs(hash).toString(16).padStart(8, '0');
  return `0xQA${hex.toUpperCase()}${receiptId.replace(/[^0-9]/g, '').slice(-4)}`;
}
