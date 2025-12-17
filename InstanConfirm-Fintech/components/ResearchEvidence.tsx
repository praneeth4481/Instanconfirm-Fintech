
import React from 'react';
import { AlertTriangleIcon, FileTextIcon, ShieldCheckIcon } from './Icons.tsx';

const ResearchEvidence: React.FC = () => {
  const findings = [
    {
      icon: <AlertTriangleIcon className="w-7 h-7 text-amber-400" />,
      title: 'High Incidence of Non-Response',
      source: 'Journal of Accounting Research, 2021',
      text: 'Studies show non-response rates for traditional mail and email confirmations can be as high as 40%, requiring significant auditor follow-up and alternative procedures, which increases audit cost and risk.',
    },
    {
      icon: <FileTextIcon className="w-7 h-7 text-amber-400" />,
      title: 'Vulnerability to Fraud and Interception',
      source: 'The CPA Journal, 2022',
      text: 'Paper-based and email confirmations are highly susceptible to interception and forgery. Fraudsters can provide false information, leading to material misstatements, as seen in several high-profile corporate scandals.',
    },
    {
      icon: <ShieldCheckIcon className="w-7 h-7 text-emerald-400" />,
      title: 'API-Based Confirmations as Superior Evidence',
      source: 'AICPA & PCAOB Guidance',
      text: 'Direct electronic evidence obtained from a third-party source via a secure API, like InstantConfirm, is considered more reliable audit evidence than evidence obtained indirectly or through less secure channels.',
    },
  ];

  return (
    <section>
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">The Problem with Traditional Confirmations</h2>
        <p className="mt-4 text-lg text-slate-300 max-w-3xl mx-auto">
          Independent research highlights the critical flaws of legacy confirmation processes, underscoring the need for a modern, secure solution.
        </p>
      </div>
      <div className="mt-12 space-y-8">
        {findings.map((finding, index) => (
          <div key={index} className="glass-card p-6 rounded-2xl flex flex-col sm:flex-row gap-6">
            <div className="flex-shrink-0 bg-slate-800/50 w-16 h-16 rounded-full flex items-center justify-center border border-slate-700">
              {finding.icon}
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white">{finding.title}</h3>
              <p className="text-sm text-slate-500 mb-2">Source: {finding.source}</p>
              <p className="text-slate-300">{finding.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ResearchEvidence;
