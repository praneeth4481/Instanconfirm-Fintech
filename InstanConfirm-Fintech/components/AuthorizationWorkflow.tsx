
import React from 'react';
import { UsersIcon, MailCheckIcon, FingerprintIcon, SignatureIcon, LinkIcon, DatabaseIcon, LayoutDashboardIcon, ShieldAlertIcon, CheckIcon, XIcon, LockIcon } from './Icons.tsx';

const AuthorizationWorkflow: React.FC = () => {
  const flowchartSteps = [
    { icon: <UsersIcon className="w-8 h-8 text-blue-400" />, title: 'Auditor Setup', description: 'Auditor uploads and defines authorized signatory list (CFO, Controller) and approval hierarchies.' },
    { icon: <MailCheckIcon className="w-8 h-8 text-blue-400" />, title: 'Authorization Request', description: 'System sends a time-sensitive, secure authorization link to the signatory\'s corporate email.' },
    { icon: <FingerprintIcon className="w-8 h-8 text-blue-400" />, title: 'Identity Verification', description: 'Signatory verifies identity via MFA (email, SMS, optional biometrics). IP and device are logged.' },
    { icon: <SignatureIcon className="w-8 h-8 text-blue-400" />, title: 'Review & Approval', description: 'Signatory reviews access scope (accounts, data, period) and provides a timestamped digital signature.' },
    { icon: <LinkIcon className="w-8 h-8 text-blue-400" />, title: 'OAuth Connection', description: 'Post-approval, the signatory is redirected to their bank to authorize a read-only connection. No credentials are ever stored.' },
    { icon: <DatabaseIcon className="w-8 h-8 text-blue-400" />, title: 'Immutable Audit Trail', description: 'A comprehensive, cryptographically-secured log of the entire process is generated and stored on a blockchain ledger.' },
  ];

  const securityFeatures = [
    'Integration with client SSO/Active Directory',
    'Authorization request rate limiting',
    'Geolocation validation and alerts',
    'Failed attempt lockouts after 3 tries',
    'Automated alerts to client audit committee',
  ];

  return (
    <div className="space-y-12">
      <div>
        <p>
          To ensure irrefutable audit evidence and meet strict compliance standards like PCAOB AS 2310, InstantConfirm implements a multi-step, cryptographically-secured authorization workflow. This process guarantees segregation of duties and verifies that access is granted only by legitimate, authorized personnel.
        </p>
      </div>

      {/* Flowchart */}
      <div className="relative">
        <div className="absolute left-1/2 -translate-x-1/2 top-12 bottom-12 w-0.5 bg-slate-700 hidden md:block"></div>
        <div className="space-y-10">
          {flowchartSteps.map((step, index) => (
            <div key={index} className="md:grid md:grid-cols-2 md:gap-8 items-center relative">
              <div className={`md:col-start-${index % 2 === 0 ? 1 : 2} md:row-start-1`}>
                <div className={`flex items-center gap-5 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className="flex-shrink-0 bg-slate-800 border-2 border-blue-500 w-16 h-16 rounded-full flex items-center justify-center z-10">
                    {step.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-blue-300">Step {index + 1}: {step.title}</h4>
                    <p className="text-slate-400">{step.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Client Account Selection UI */}
      <div className="bg-slate-900/50 p-6 rounded-lg border border-slate-700/50">
        <h4 className="font-bold text-lg text-white flex items-center mb-4"><CheckIcon className="w-6 h-6 mr-2 text-emerald-400" /> Client Selects Accounts</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="glass-card p-4 rounded-lg">
            <h5 className="font-semibold mb-3 text-slate-200">Select accounts for confirmation:</h5>
            <ul className="space-y-2">
              <li className="flex items-center"><input type="checkbox" checked readOnly className="h-4 w-4 rounded bg-slate-700 border-slate-600 text-blue-500 focus:ring-blue-500" /> <span className="ml-2">Capital Bank - Checking (****1234)</span></li>
              <li className="flex items-center"><input type="checkbox" checked readOnly className="h-4 w-4 rounded bg-slate-700 border-slate-600 text-blue-500 focus:ring-blue-500" /> <span className="ml-2">Capital Bank - Savings (****5678)</span></li>
              <li className="flex items-center"><input type="checkbox" checked readOnly className="h-4 w-4 rounded bg-slate-700 border-slate-600 text-blue-500 focus:ring-blue-500" /> <span className="ml-2">Capital Bank - Money Market (****9012)</span></li>
            </ul>
          </div>
          <div className="bg-slate-800/70 p-4 rounded-lg text-sm">
            <h5 className="font-semibold mb-2 text-slate-300">Audit Log Entry:</h5>
            <p className="font-mono text-xs text-slate-400">
              <span className="text-green-400">[SUCCESS]</span> Signatory 'John Doe' selected 3 accounts for confirmation.<br/>
              <span className="text-slate-500">Timestamp: 2023-10-27T10:05:31Z</span><br/>
              <span className="text-slate-500">Signature Hash: 0x...a4b2</span>
            </p>
          </div>
        </div>
      </div>

      {/* Advanced Features & Dashboard */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-8">
        <div className="glass-card p-6 rounded-lg">
          <h4 className="font-bold text-lg text-white flex items-center mb-3"><ShieldAlertIcon className="w-6 h-6 mr-2 text-blue-400" /> Dual Authorization</h4>
          <p className="mb-3 text-slate-300">For high-risk accounts or transactions, InstantConfirm enforces a dual-approval workflow, mimicking wire transfer controls. Both a primary (e.g., CFO) and secondary (e.g., Controller) signatory must approve before the OAuth connection can be initiated.</p>
        </div>
        <div className="glass-card p-6 rounded-lg">
          <h4 className="font-bold text-lg text-white flex items-center mb-3"><LayoutDashboardIcon className="w-6 h-6 mr-2 text-blue-400" /> Authorization Dashboard</h4>
          <ul className="space-y-2 text-slate-300">
            <li className="flex items-center"><CheckIcon className="w-4 h-4 mr-2 text-emerald-400" /> View pending & approved requests.</li>
            <li className="flex items-center"><CheckIcon className="w-4 h-4 mr-2 text-emerald-400" /> Monitor authorization expiration dates.</li>
            <li className="flex items-center"><CheckIcon className="w-4 h-4 mr-2 text-emerald-400" /> Receive alerts on failed attempts.</li>
            <li className="flex items-center"><CheckIcon className="w-4 h-4 mr-2 text-emerald-400" /> Export complete audit trails.</li>
          </ul>
        </div>
      </div>

      {/* Compliance & Security */}
      <div>
        <h3 className="text-xl font-bold text-white mb-4">Authorization Security: A Clear Advantage</h3>
        <div className="glass-card overflow-hidden">
          <div className="grid grid-cols-2">
            <div className="p-4 bg-blue-900/30">
              <h4 className="font-bold text-blue-300">InstantConfirm Authorization</h4>
            </div>
            <div className="p-4 bg-amber-900/30 border-l border-slate-700">
              <h4 className="font-bold text-amber-300">Legacy (Confirmation.com)</h4>
            </div>
          </div>
          <div className="grid grid-cols-2 border-t border-slate-700">
            <div className="p-4 flex items-start gap-3"><CheckIcon className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" /><span>Bank validates signatory's account access rights via OAuth.</span></div>
            <div className="p-4 flex items-start gap-3 border-l border-slate-700 bg-slate-800/20"><XIcon className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" /><span>No validation that the signatory actually has bank account access.</span></div>
          </div>
          <div className="grid grid-cols-2 border-t border-slate-700">
            <div className="p-4 flex items-start gap-3"><CheckIcon className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" /><span>Cryptographic proof of authorization stored on an immutable ledger.</span></div>
            <div className="p-4 flex items-start gap-3 border-l border-slate-700 bg-slate-800/20"><XIcon className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" /><span>Relies on email responses, which can be forged or intercepted.</span></div>
          </div>
          <div className="grid grid-cols-2 border-t border-slate-700">
            <div className="p-4 flex items-start gap-3"><CheckIcon className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" /><span>Multi-factor identity verification (MFA) is mandatory.</span></div>
            <div className="p-4 flex items-start gap-3 border-l border-slate-700 bg-slate-800/20"><XIcon className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" /><span>Basic email/password login; MFA is often optional or not enforced.</span></div>
          </div>
        </div>
      </div>
      
      <div>
        <h3 className="text-xl font-bold text-white mb-4">Enterprise-Grade Security Features</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {securityFeatures.map(feature => (
            <div key={feature} className="bg-slate-800/50 p-3 rounded-md flex items-center text-sm border border-slate-700">
              <LockIcon className="w-4 h-4 mr-2 text-slate-400 flex-shrink-0" />
              <span className="text-slate-300">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AuthorizationWorkflow;
