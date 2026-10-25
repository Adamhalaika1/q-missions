/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Language } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ConceptSection } from './components/ConceptSection';
import { MissionWorldsSection } from './components/MissionWorldsSection';
import { MissionControlCenter, ControlTabKey } from './components/MissionControlCenter';
import { DeliverablesSection } from './components/DeliverablesSection';
import { BenchmarkingSection } from './components/BenchmarkingSection';
import { TeamSection } from './components/TeamSection';
import { ExecutivePresentationModal } from './components/ExecutivePresentationModal';
import { Footer } from './components/Footer';

export default function App() {
  const [lang, setLang] = useState<Language>('en');
  const [isDeckOpen, setIsDeckOpen] = useState(false);

  // Synchronize document direction and language attribute
  useEffect(() => {
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang]);

  const toggleLanguage = () => {
    setLang(prev => (prev === 'en' ? 'ar' : 'en'));
  };

  const scrollToMissionControl = () => {
    const el = document.getElementById('mission-control-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0d141e] text-[#f7f5f1] selection:bg-[#8A1538] selection:text-white">
      {/* Navbar with official Qatar Ministry identity */}
      <Navbar
        lang={lang}
        onToggleLang={toggleLanguage}
        onOpenDeck={() => setIsDeckOpen(true)}
        onScrollToMissionControl={scrollToMissionControl}
      />

      <main>
        {/* Hero Section */}
        <Hero
          lang={lang}
          onExploreMissions={() => scrollToSection('worlds')}
          onEnterControl={scrollToMissionControl}
          onLaunchDeck={() => setIsDeckOpen(true)}
          onMeetTeam={() => scrollToSection('team')}
        />

        {/* Concept & 7-Stage Mission Cycle */}
        <ConceptSection lang={lang} />

        {/* Six Signature Mission Worlds */}
        <MissionWorldsSection
          lang={lang}
          onSelectWorldForPlanner={(worldId) => {
            scrollToMissionControl();
          }}
        />

        {/* Interactive Mission Control Center (The Engine) */}
        <MissionControlCenter
          lang={lang}
          onExplorePilot={() => scrollToSection('concept')}
          onMeetTeam={() => scrollToSection('team')}
        />

        {/* 10 Tangible Institutional Deliverables for Qatar */}
        <DeliverablesSection lang={lang} />

        {/* Global Benchmarking & Differentiation */}
        <BenchmarkingSection lang={lang} />

        {/* The Minds Behind Q-MISSIONS & Beyond Q-MISSIONS Portfolio */}
        <TeamSection lang={lang} />
      </main>

      {/* Institutional Footer */}
      <Footer
        lang={lang}
        onOpenDeck={() => setIsDeckOpen(true)}
        onScrollToTop={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      />

      {/* 20-Slide Government Executive Presentation Modal */}
      <ExecutivePresentationModal
        isOpen={isDeckOpen}
        onClose={() => setIsDeckOpen(false)}
        lang={lang}
        onToggleLang={toggleLanguage}
        onJumpToTab={(tabKey) => {
          scrollToMissionControl();
        }}
      />
    </div>
  );
}
