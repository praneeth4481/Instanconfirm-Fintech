
import React from 'react';
import { ClockIcon, DollarSignIcon, AlertTriangleIcon, ShieldCheckIcon, UserIcon, ServerIcon, FileDigitIcon, GitBranchIcon, MailLockIcon } from './Icons.tsx';

const ProcessComparison: React.FC = () => {
  const traditionalTimeline = [
    { time: 'Day 0-1', text: 'Send authorization request to client (same day in Confirmation.com).' },
    { time: 'Day 3-5', text: 'Client reviews and authorizes (3-5 business days).' },
    { time: 'Day 5', text: 'Auditor sends confirmation to bank via Confirmation.com.' },
    { time: 'Day 5-12', text: 'Bank processes and responds (5-7 business days).' },
    { time: 'Day 12', text: 'Auditor receives confirmation.' },
  ];

  const auditFlowTimeline = [
    { time: 'Min 0', text: 'Auditor logs into InstantConfirm.' },
    { time: 'Min 1', text: 'Client provides one-time OAuth authorization.' },
    { time: 'Min 2', text: 'Auditor selects accounts and initiates request.' },
    { time: 'Min 3', text: 'API connects to bank in real-time.' },
    { time: 'Min 4', text: 'Balance data retrieved and encrypted.' },
    { time: 'Min 5', text: 'Confirmation document generated.' },
  ];

  const breakdownSteps = [
    {
      step: 1,
      title: 'Auditor Sends Authorization Request',
      icon: <MailLockIcon className="w-7 h-7 text-blue-400" />,
      auditorView: 'Auditor initiates confirmation. System sends secure authorization email to client\'s authorized signer.',
      techView: 'Non-delegable, secure email delivery with expiring link. Email and domain verification.',
    },
    {
      step: 2,
      title: 'Client Authorization',
      icon: <GitBranchIcon className="w-7 h-7 text-blue-400" />,
      auditorView: 'Client clicks "Authorize" button in a secure portal.',
      techView: 'OAuth 2.0 flow initiated, client redirected to bank portal, access token generated with read-only permissions, no credentials stored.',
    },
    {
      step: 3,
      title: 'Account Selection',
      icon: <UserIcon className="w-7 h-7 text-blue-400" />,
      auditorView: 'Selects required accounts from a pre-authorized list.',
      techView: 'API calls Plaid/Yodlee aggregator, retrieves account list via secure REST API, displays masked account numbers.',
    },
    {
      step: 4,
      title: 'Confirmation Request',
      icon: <ServerIcon className="w-7 h-7 text-blue-400" />,
      auditorView: 'Clicks "Get Confirmation" button.',
      techView: 'POST request sent to API gateway, JWT authentication validated, request queued with rate limiting.',
    },
    {
      step: 5,
      title: 'Data Retrieval & Document Generation',
      icon: <FileDigitIcon className="w-7 h-7 text-blue-400" />,
      auditorView: 'A digitally signed PDF confirmation appears instantly.',
      techView: 'TLS 1.3 connection to bank API, balance data fetched, encrypted with AES-256, and PDF generated with digital signature.',
    },
  ];

  return (
    <section className="space-y-20">
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">From Days to Minutes</h2>
        <p className="mt-4 text-lg text-slate-300 max-w-3xl mx-auto">
          Visualize the dramatic difference between slow, manual processes and the instant, secure verification of InstantConfirm.
        </p>
      </div>

      {/* Timeline Comparison */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
        {/* Traditional Approach */}
        <div className="glass-card p-8 rounded-2xl">
          <h3 className="text-2xl font-bold text-amber-300 mb-6 text-center">Traditional Approach</h3>
          <div className="relative pl-6">
            <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-amber-500/30"></div>
            {traditionalTimeline.map((item, index) => (
              <div key={index} className="mb-8 pl-8 relative">
                <div className="absolute left-[-0.5rem] top-1.5 h-4 w-4 bg-slate-800 border-2 border-amber-400 rounded-full"></div>
                <p className="font-semibold text-amber-400">{item.time}</p>
                <p className="text-slate-300">{item.text}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 pt-6 border-t border-slate-700/50 space-y-3">
            <SummaryItem icon={<ClockIcon className="text-amber-400" />} label="Total Time:" value="10-12 Business Days" />
            <SummaryItem icon={<DollarSignIcon className="text-amber-400" />} label="Avg. Cost:" value="$29 per confirmation" />
            <SummaryItem icon={<AlertTriangleIcon className="text-amber-400" />} label="Risks:" value="Email/fax delays, lost documents, manual errors" />
          </div>
        </div>

        {/* InstantConfirm Approach */}
        <div className="glass-card p-8 rounded-2xl border-blue-500/50">
          <h3 className="text-2xl font-bold text-blue-300 mb-6 text-center">InstantConfirm Approach</h3>
          <div className="relative pl-6">
            <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-blue-500/30"></div>
            {auditFlowTimeline.map((item, index) => (
              <div key={index} className="mb-8 pl-8 relative">
                <div className="absolute left-[-0.5rem] top-1.5 h-4 w-4 bg-slate-800 border-2 border-blue-400 rounded-full"></div>
                <p className="font-semibold text-blue-400">{item.time}</p>
                <p className="text-slate-300">{item.text}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 pt-6 border-t border-slate-700/50 space-y-3">
            <SummaryItem icon={<ClockIcon className="text-blue-400" />} label="Total Time:" value="~5 Minutes" />
            <SummaryItem icon={<DollarSignIcon className="text-blue-400" />} label="Avg. Cost:" value="$1.50 per confirmation" />
            <SummaryItem icon={<ShieldCheckIcon className="text-blue-400" />} label="Security:" value="End-to-end encrypted, OAuth 2.0, full audit trail" />
          </div>
        </div>
      </div>

      {/* Step-by-step breakdown */}
      <div className="mt-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">How It Works: A Step-by-Step Breakdown</h2>
          <p className="mt-4 text-lg text-slate-300 max-w-3xl mx-auto">
            See what the auditor experiences and what's happening behind the scenes at every step of the process.
          </p>
        </div>
        <div className="space-y-8">
          {breakdownSteps.map((item) => (
            <div key={item.step} className="glass-card p-6 rounded-2xl">
              <div className="flex items-center mb-4">
                <div className="bg-blue-600/20 p-3 rounded-full mr-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-white">Step {item.step}: {item.title}</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-slate-900/50 p-4 rounded-lg border border-slate-700/50">
                  <h4 className="font-semibold text-slate-300 flex items-center mb-2"><UserIcon className="w-5 h-5 mr-2" /> What the Auditor Sees</h4>
                  <p className="text-slate-200 italic">"{item.auditorView}"</p>
                </div>
                <div className="bg-slate-900/50 p-4 rounded-lg border border-slate-700/50">
                  <h4 className="font-semibold text-slate-300 flex items-center mb-2"><ServerIcon className="w-5 h-5 mr-2" /> Technical Background</h4>
                  <p className="text-slate-200">{item.techView}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const SummaryItem: React.FC<{ icon: React.ReactNode; label: string; value: string }> = ({ icon, label, value }) => (
  <div className="flex items-start">
    <div className="w-6 h-6 mr-3 flex-shrink-0">{icon}</div>
    <div>
      <span className="font-semibold text-slate-200">{label}</span>
      <span className="text-slate-300 ml-1">{value}</span>
    </div>
  </div>
);

export default ProcessComparison;
