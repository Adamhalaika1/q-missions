import React, { useState } from 'react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';
import {
  Compass,
  FileCheck2,
  BookOpen,
  Map,
  Users2,
  Calendar,
  BarChart3,
  Calculator,
  ShieldCheck,
  ChevronRight
} from 'lucide-react';
import { MissionExplorerTab } from './tabs/MissionExplorerTab';
import { MissionPlannerTab } from './tabs/MissionPlannerTab';
import { MissionPassportTab } from './tabs/MissionPassportTab';
import { ImpactReceiptTab } from './tabs/ImpactReceiptTab';
import { GlobalSquadsTab } from './tabs/GlobalSquadsTab';
import { ProgramTab } from './tabs/ProgramTab';
import { ImpactAnalyticsTab } from './tabs/ImpactAnalyticsTab';
import { BudgetBuilderTab } from './tabs/BudgetBuilderTab';
import { GovernanceTab } from './tabs/GovernanceTab';

interface MissionControlCenterProps {
  lang: Language;
  onExplorePilot: () => void;
  onMeetTeam: () => void;
}

export type ControlTabKey =
  | 'explorer'
  | 'planner'
  | 'passport'
  | 'receipt'
  | 'squads'
  | 'program'
  | 'analytics'
  | 'budget'
  | 'governance';

export const MissionControlCenter: React.FC<MissionControlCenterProps> = ({
  lang,
  onExplorePilot,
  onMeetTeam
}) => {
  const [activeTab, setActiveTab] = useState<ControlTabKey>('explorer');
  const t = TRANSLATIONS[lang];

  const tabList = [
    { key: 'explorer', label: t.missionControl.tabs.explorer, icon: Compass },
    { key: 'planner', label: t.missionControl.tabs.planner, icon: Map },
    { key: 'passport', label: t.missionControl.tabs.passport, icon: BookOpen },
    { key: 'receipt', label: t.missionControl.tabs.receipt, icon: FileCheck2 },
    { key: 'squads', label: t.missionControl.tabs.squads, icon: Users2 },
    { key: 'program', label: t.missionControl.tabs.program, icon: Calendar },
    { key: 'analytics', label: t.missionControl.tabs.analytics, icon: BarChart3 },
    { key: 'budget', label: t.missionControl.tabs.budget, icon: Calculator },
    { key: 'governance', label: t.missionControl.tabs.governance, icon: ShieldCheck }
  ];

  return (
    <section id="mission-control-section" className="py-20 relative bg-[#0b1017]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-panel border border-[#C5A36B]/30 text-xs font-mono text-amber-300">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Interactive Production Prototype</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            {t.missionControl.title}
          </h2>

          <p className="text-sm sm:text-base text-stone-300 leading-relaxed">
            {t.missionControl.subtitle}
          </p>
        </div>

        {/* Tab Navigation Strip */}
        <div className="flex overflow-x-auto pb-2 scrollbar-none gap-2 mb-8 border-b border-white/10">
          {tabList.map((tabItem) => {
            const Icon = tabItem.icon;
            const isActive = activeTab === tabItem.key;
            return (
              <button
                key={tabItem.key}
                onClick={() => setActiveTab(tabItem.key as ControlTabKey)}
                className={`flex items-center gap-2 px-4 py-3 rounded-xl text-xs font-bold transition-all shrink-0 cursor-pointer border ${
                  isActive
                    ? 'bg-gradient-to-r from-[#8A1538] to-[#9c1840] text-white border-[#C5A36B] shadow-lg shadow-[#8A1538]/30'
                    : 'glass-panel text-stone-400 hover:text-stone-200 hover:bg-white/5 border-white/5'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-amber-200' : 'text-stone-400'}`} />
                <span>{tabItem.label}</span>
              </button>
            );
          })}
        </div>

        {/* Active Tab Panel */}
        <div className="transition-all duration-300">
          {activeTab === 'explorer' && <MissionExplorerTab lang={lang} />}
          {activeTab === 'planner' && <MissionPlannerTab lang={lang} />}
          {activeTab === 'passport' && <MissionPassportTab lang={lang} />}
          {activeTab === 'receipt' && <ImpactReceiptTab lang={lang} />}
          {activeTab === 'squads' && <GlobalSquadsTab lang={lang} />}
          {activeTab === 'program' && <ProgramTab lang={lang} />}
          {activeTab === 'analytics' && <ImpactAnalyticsTab lang={lang} />}
          {activeTab === 'budget' && <BudgetBuilderTab lang={lang} />}
          {activeTab === 'governance' && (
            <GovernanceTab
              lang={lang}
              onExplorePilot={onExplorePilot}
              onMeetTeam={onMeetTeam}
            />
          )}
        </div>
      </div>
    </section>
  );
};
