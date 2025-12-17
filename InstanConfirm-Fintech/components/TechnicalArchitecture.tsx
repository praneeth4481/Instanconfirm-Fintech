
import React from 'react';
import { LayersIcon, GitBranchIcon, LockIcon, DatabaseIcon, CodeIcon } from './Icons.tsx';

const TechnicalArchitecture: React.FC = () => {
  const architecturePoints = [
    {
      icon: <LayersIcon className="w-7 h-7 text-blue-400" />,
      title: 'Multi-Bank API Integration',
      description: 'Connects to thousands of banks via trusted aggregators like Plaid, Yodlee, and Finicity for comprehensive coverage.',
    },
    {
      icon: <GitBranchIcon className="w-7 h-7 text-blue-400" />,
      title: 'Real-time OAuth 2.0 Flow',
      description: 'Utilizes industry-standard OAuth 2.0 for secure, token-based authentication without ever handling user credentials.',
    },
    {
      icon: <LockIcon className="w-7 h-7 text-blue-400" />,
      title: 'End-to-End Encryption',
      description: 'All data is encrypted in transit with TLS 1.3 and at rest using AES-256, ensuring confidentiality and integrity.',
    },
    {
      icon: <DatabaseIcon className="w-7 h-7 text-blue-400" />,
      title: 'Immutable Audit Trail',
      description: 'Every confirmation request and response is logged, creating a tamper-proof audit trail for compliance and review.',
    },
  ];

  const apiResponse = `{
  "accountHolder": "Innovate Corp.",
  "bankName": "Global Financial",
  "accountNumber": "******7890",
  "accountType": "Business Checking",
  "balance": 127432.81,
  "currency": "USD",
  "asOfDate": "2024-07-29",
  "confirmationId": "a1b2c3d4-e5f6-7890-g1h2-i3j4k5l6m7n8"
}`;

  return (
    <section>
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Detailed Architecture Overview</h2>
        <p className="mt-4 text-lg text-slate-300 max-w-2xl mx-auto">
          Our platform is built on a foundation of enterprise-grade security and reliability, ensuring data is always safe and accessible.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        {architecturePoints.map((point) => (
          <div key={point.title} className="glass-card p-6 rounded-2xl flex space-x-5">
            <div className="flex-shrink-0 bg-blue-600/20 w-14 h-14 rounded-full flex items-center justify-center">
              {point.icon}
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white">{point.title}</h3>
              <p className="mt-1 text-slate-400">{point.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16">
        <h3 className="text-xl font-semibold text-white flex items-center justify-center mb-4">
          <CodeIcon className="w-6 h-6 mr-2" />
          Sample API Response
        </h3>
        <div className="bg-slate-800 rounded-lg shadow-xl p-4 border border-slate-700">
          <pre className="text-sm text-slate-200 overflow-x-auto">
            <code>{apiResponse}</code>
          </pre>
        </div>
      </div>
    </section>
  );
};

export default TechnicalArchitecture;
