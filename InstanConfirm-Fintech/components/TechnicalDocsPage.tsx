
import React, { useState } from 'react';
import { BriefcaseIcon, TargetIcon, TrendingUpIcon, FileCheckIcon, HelpCircleIcon, ChevronDownIcon, LayersIcon, GitBranchIcon, LockIcon, DatabaseIcon, SignatureIcon } from './Icons.tsx';
import AuthorizationWorkflow from './AuthorizationWorkflow.tsx';

const Section: React.FC<{ icon: React.ReactNode; title: string; children: React.ReactNode }> = ({ icon, title, children }) => (
  <section className="glass-card p-8 rounded-2xl">
    <div className="flex items-center mb-6">
      <div className="bg-blue-600/20 p-3 rounded-full mr-4">{icon}</div>
      <h2 className="text-2xl font-bold text-white">{title}</h2>
    </div>
    <div className="prose prose-invert max-w-none prose-headings:font-semibold prose-headings:text-slate-100 prose-a:text-blue-400 prose-strong:text-white">{children}</div>
  </section>
);

const TechnicalDocsPage: React.FC = () => {
  return (
    <div className="space-y-12">
      <Section icon={<BriefcaseIcon className="w-7 h-7 text-blue-400" />} title="Executive Summary">
        <p>
          InstantConfirm is a SaaS platform designed to replace outdated, manual audit confirmation processes with a secure, real-time, and cost-effective digital solution. Traditional methods, reliant on platforms like Confirmation.com, introduce significant delays (10-12 days), high costs ($29+ per request), and security vulnerabilities (email/fax).
        </p>
        <p>
          By leveraging modern Open Banking APIs (via Plaid, Yodlee, Finicity) and a robust, secure architecture, InstantConfirm provides auditors with instant, verifiable bank balance data. This dramatically accelerates audit timelines, reduces operational costs by over 90%, enhances data security, and strengthens compliance, representing a paradigm shift in financial verification for the audit industry.
        </p>
      </Section>

      <Section icon={<TargetIcon className="w-7 h-7 text-blue-400" />} title="Technical Implementation Roadmap">
        <div className="relative pl-8 border-l-2 border-slate-700">
          <RoadmapItem phase="1" title="API Integration & Core Platform Setup" last={false}>
            <p>Establish partnerships and technical integrations with leading Open Banking API aggregators (Plaid, Yodlee, Finicity). Develop the core backend infrastructure on a scalable cloud provider (e.g., AWS/GCP) and build the initial frontend for user interaction.</p>
            <strong>Key Deliverables:</strong>
            <ul>
              <li>Successful API connections to all three aggregators.</li>
              <li>Secure database schema for storing encrypted, non-sensitive metadata.</li>
              <li>Functional prototype for initiating a confirmation request.</li>
            </ul>
          </RoadmapItem>
          <RoadmapItem phase="2" title="Authentication & Security Layer" last={false}>
            <p>Implement a robust authentication system using OAuth 2.0 and OpenID Connect. Enforce end-to-end encryption with TLS 1.3 for data in transit and AES-256 for data at rest. Develop role-based access control (RBAC) for users within an audit firm.</p>
            <strong>Key Deliverables:</strong>
            <ul>
              <li>Secure user registration and login flow.</li>
              <li>Implementation of token-based API security.</li>
              <li>Data encryption protocols validated by third-party penetration testing.</li>
            </ul>
          </RoadmapItem>
          <RoadmapItem phase="3" title="Audit Trail & Compliance Features" last={false}>
            <p>Develop an immutable logging system to create a comprehensive audit trail for every action taken on the platform. Generate compliance-ready reports and ensure the system architecture aligns with SOC 2, GDPR, and other relevant standards.</p>
            <strong>Key Deliverables:</strong>
            <ul>
              <li>Tamper-proof logging of all API requests and user activities.</li>
              <li>Automated generation of confirmation reports in PDF format.</li>
              <li>SOC 2 Type 1 readiness assessment.</li>
            </ul>
          </RoadmapItem>
          <RoadmapItem phase="4" title="Pilot Program, Testing & Deployment" last={true}>
            <p>Launch a pilot program with select audit firms to gather real-world feedback. Conduct extensive load testing, security audits, and final QA. Prepare for a full-scale public launch with comprehensive documentation and support channels.</p>
            <strong>Key Deliverables:</strong>
            <ul>
              <li>Successful completion of pilot program with 3-5 partner firms.</li>
              <li>Final security audit and penetration test report.</li>
              <li>Public launch with marketing and sales materials.</li>
            </ul>
          </RoadmapItem>
        </div>
      </Section>

      <Section icon={<TrendingUpIcon className="w-7 h-7 text-blue-400" />} title="Cost-Benefit Analysis & ROI">
        <p>The return on investment (ROI) for adopting InstantConfirm is immediate and substantial. The following analysis is for a firm processing <strong>100 confirmations</strong>.</p>
        
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Legacy Cost */}
            <div className="bg-amber-900/20 border border-amber-500/30 rounded-lg p-6">
                <h4 className="text-xl font-bold text-amber-300 mb-4">Legacy Method (Confirmation.com)</h4>
                <ul className="space-y-3">
                    <li><strong>Confirmation Cost:</strong> 100 × $29 = <span className="font-semibold">$2,900</span></li>
                    <li className="border-t border-amber-500/30 pt-3 mt-3!"><strong className="text-lg">Total Direct Cost:</strong> <span className="font-bold text-lg text-red-400">$2,900</span></li>
                </ul>
            </div>
            {/* InstantConfirm Cost */}
            <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-6">
                <h4 className="text-xl font-bold text-green-300 mb-4">InstantConfirm</h4>
                <ul className="space-y-3">
                    <li><strong>Confirmation Cost:</strong> 100 × ~$1.50 = <span className="font-semibold">$150</span></li>
                    <li className="border-t border-green-500/30 pt-3 mt-3!"><strong className="text-lg">Total Direct Cost:</strong> <span className="font-bold text-lg text-green-400">$150</span></li>
                </ul>
            </div>
        </div>

        <div className="mt-8 bg-blue-900/20 border-t-4 border-blue-500 rounded-b-lg p-6 shadow-md">
            <h3 className="text-2xl font-bold text-blue-300 mb-4">Summary of Savings (for 100 confirmations)</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-center">
                <div>
                    <p className="text-4xl font-bold text-green-400">$2,750</p>
                    <p className="font-semibold text-slate-300">Direct Cost Savings (~95%)</p>
                </div>
                <div>
                    <p className="text-4xl font-bold text-green-400">99.9%</p>
                    <p className="font-semibold text-slate-300">Faster Turnaround Time</p>
                </div>
            </div>
        </div>
      </Section>

      <Section icon={<SignatureIcon className="w-7 h-7 text-blue-400" />} title="Authorized Signatory Workflow">
        <AuthorizationWorkflow />
      </Section>

      <Section icon={<FileCheckIcon className="w-7 h-7 text-blue-400" />} title="Compliance & Regulatory">
        <p>InstantConfirm is architected to meet and exceed the stringent compliance requirements of the financial and audit industries.</p>
        <ul>
          <li><strong>SOC 2:</strong> The infrastructure and processes are designed for SOC 2 Type 2 compliance, covering security, availability, processing integrity, confidentiality, and privacy.</li>
          <li><strong>GDPR & CCPA:</strong> We adhere to strict data privacy principles, ensuring data subject rights and implementing privacy by design.</li>
          <li><strong>PCAOB AS 2310:</strong> Our secure, multi-step authorization workflow and direct API connection provide a more reliable and verifiable form of audit evidence than traditional methods, directly addressing requirements for maintaining control over the confirmation process.</li>
        </ul>
      </Section>

      <Section icon={<GitBranchIcon className="w-7 h-7 text-blue-400" />} title="Migration Strategy from Confirmation.com">
        <p>We offer a seamless, phased migration path for firms looking to transition to InstantConfirm.</p>
        <ol>
          <li><strong>Phase 1 (Setup & Training):</strong> Our team assists with setting up your firm and user accounts. We provide comprehensive training materials and live sessions for your audit staff.</li>
          <li><strong>Phase 2 (Parallel Run):</strong> For the first audit cycle, firms can run InstantConfirm in parallel with their existing process to build confidence and ensure a smooth transition.</li>
          <li><strong>Phase 3 (Full Adoption):</strong> Decommission the legacy platform and fully transition all confirmation workflows to InstantConfirm. Our support team provides heightened monitoring during this phase.</li>
          <li><strong>Phase 4 (Optimization):</strong> We work with your team to identify opportunities for workflow optimization and integration with your existing audit management software.</li>
        </ol>
      </Section>

      <Section icon={<HelpCircleIcon className="w-7 h-7 text-blue-400" />} title="Frequently Asked Questions">
        <FAQItem question="Is this accepted by audit standards?">
          Yes. Direct electronic evidence from a financial institution via secure API is considered a highly reliable form of audit evidence, often superior to manual confirmations that can be subject to fraud. Our robust signatory authorization workflow meets PCAOB AS 2310 requirements.
        </FAQItem>
        <FAQItem question="How do you handle banks not covered by your API partners?">
          While our partners cover over 95% of US financial institutions, we provide a streamlined "manual" fallback within the platform for edge cases. This still offers a better workflow and audit trail than traditional email or fax.
        </FAQItem>
        <FAQItem question="What happens to our data if we stop using the service?">
          You can export your complete audit trail and all confirmation reports at any time. Upon account termination, all associated data is securely and permanently deleted from our systems after a 30-day grace period, in compliance with our data retention policy.
        </FAQItem>
      </Section>
    </div>
  );
};

const RoadmapItem: React.FC<{ phase: string; title: string; last: boolean; children: React.ReactNode }> = ({ phase, title, last, children }) => (
  <div className={`mb-8 ${last ? '' : 'pb-8'}`}>
    <div className="absolute -left-4 h-8 w-8 bg-blue-600 rounded-full text-white flex items-center justify-center font-bold z-10">{phase}</div>
    <h3 className="text-xl font-semibold text-slate-100 mb-2">{title}</h3>
    <div className="text-slate-400">{children}</div>
  </div>
);

const FAQItem: React.FC<{ question: string; children: React.ReactNode }> = ({ question, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-slate-700 py-4">
      <button onClick={() => setIsOpen(!isOpen)} className="w-full flex justify-between items-center text-left">
        <h4 className="font-semibold text-slate-100">{question}</h4>
        <ChevronDownIcon className={`w-5 h-5 text-slate-400 transform transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && <div className="mt-3 text-slate-400">{children}</div>}
    </div>
  );
};

export default TechnicalDocsPage;
