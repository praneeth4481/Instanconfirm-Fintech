
import React from 'react';
import Welcome from './Welcome.tsx';
import TechnicalArchitecture from './TechnicalArchitecture.tsx';
import ProcessComparison from './ProcessComparison.tsx';
import Stats from './Stats.tsx';
import ResearchEvidence from './ResearchEvidence.tsx';

const HomePageContent: React.FC = () => {
  return (
    <div className="space-y-24 md:space-y-32">
      <Welcome />
      <div className="animate-on-scroll"><Stats /></div>
      <div className="animate-on-scroll"><ProcessComparison /></div>
      <div className="animate-on-scroll"><ResearchEvidence /></div>
      <div className="animate-on-scroll"><TechnicalArchitecture /></div>
    </div>
  );
};

export default HomePageContent;
