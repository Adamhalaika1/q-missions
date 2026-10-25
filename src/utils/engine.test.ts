import test from 'node:test';
import assert from 'node:assert/strict';
import { calculateBudget, formatQar, PRESET_SCENARIOS } from './budgetCalculator';
import {
  canTransitionTo,
  computeReceiptVerificationHash,
  generateStructuredMissionPlan,
  getStageIndex
} from './missionEngine';

test('budgetCalculator calculates reasonable total for pilot scenario', () => {
  const result = calculateBudget(PRESET_SCENARIOS.pilot);
  assert.ok(result.totalQar > 400000, 'Pilot budget should be over 400k QAR');
  assert.ok(result.totalQar < 1200000, 'Pilot budget should be realistic under 1.2M QAR');
  assert.ok(result.perParticipantQar > 0);
  assert.equal(result.categories.length, 9);
  assert.ok(result.categories.some(c => c.nameEn.includes('Contingency')));
});

test('budgetCalculator scales up for full international forum', () => {
  const pilot = calculateBudget(PRESET_SCENARIOS.pilot);
  const forum = calculateBudget(PRESET_SCENARIOS.forum);
  assert.ok(forum.totalQar > pilot.totalQar * 2, 'International Forum should exceed pilot budget');
  assert.ok(forum.perMissionQar > 0);
});

test('formatQar formats both English and Arabic currency correctly', () => {
  const en = formatQar(500000, 'en');
  const ar = formatQar(500000, 'ar');
  assert.ok(en.includes('QAR') && en.includes('500,000'));
  assert.ok(ar.includes('ر.ق'));
});

test('missionEngine manages verification stages progression accurately', () => {
  assert.equal(getStageIndex('Proposed'), 0);
  assert.equal(getStageIndex('Verified'), 5);
  assert.equal(canTransitionTo('Proposed', 'Approved'), true);
  assert.equal(canTransitionTo('Proposed', 'Verified'), false); // cannot jump immediately to Verified
  assert.equal(canTransitionTo('Evidence Submitted', 'Reviewed'), true);
});

test('generateStructuredMissionPlan outputs deterministic complete blueprint', () => {
  const plan = generateStructuredMissionPlan({
    worldId: 'move_together',
    challengeType: 'Adaptive Wheelchair Basketball Clinic',
    targetAudience: 'Youth with motor disabilities and local club athletes',
    teamSize: 6,
    durationHours: 36,
    resources: ['Court reservation', 'Adaptive sport wheelchairs', 'Bilingual whistle guides'],
    accessibilityFeatures: ['Ramped entry', 'Tactile ground marking', 'Audio descriptions']
  });

  assert.ok(plan.id.startsWith('MP-'));
  assert.equal(plan.worldId, 'move_together');
  assert.equal(plan.milestones.length, 5);
  assert.ok(plan.expectedOutputs.length >= 3);
  assert.ok(plan.safeguardingPlan.includes('Safeguarding'));
});

test('computeReceiptVerificationHash generates valid tamper-check token', () => {
  const hash1 = computeReceiptVerificationHash('QM-2026-001', 'Verified', 4);
  const hash2 = computeReceiptVerificationHash('QM-2026-001', 'Verified', 4);
  const hashDiff = computeReceiptVerificationHash('QM-2026-001', 'Reviewed', 4);

  assert.equal(hash1, hash2, 'Hash must be deterministic');
  assert.notEqual(hash1, hashDiff, 'Hash must change when status changes');
  assert.ok(hash1.startsWith('0xQA'));
});
