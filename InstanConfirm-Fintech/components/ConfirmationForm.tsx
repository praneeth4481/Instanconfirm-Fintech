
import React, { useState } from 'react';
import { ConfirmationRequest } from '../types.ts';
import { ArrowRightIcon, UserIcon, CheckIcon, AlertTriangleIcon } from './Icons.tsx';

type WorkflowTab = 'single' | 'bulk' | 'clients';

const AuditorHeader: React.FC = () => (
  <div className="glass-card p-3 rounded-lg flex items-center space-x-4 mb-8">
    <div className="w-10 h-10 bg-blue-600/50 rounded-full flex items-center justify-center font-bold text-white">AB</div>
    <div>
      <p className="font-semibold text-white">Logged in as: Amber Bartlett</p>
      <p className="text-sm text-slate-400">Firm: Dummy LLP | Office: New York, NY</p>
    </div>
    <a href="#" className="ml-auto text-sm text-blue-400 hover:underline">Logout</a>
  </div>
);

const BulkUploadSection: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [showPreview, setShowPreview] = useState(false);

  const handleUpload = () => {
    // Mock upload and show preview
    setShowPreview(true);
  };

  if (showPreview) {
    return <BulkUploadPreview onCancel={() => setShowPreview(false)} />;
  }

  return (
    <div className="glass-card p-8 rounded-2xl text-center">
      <h3 className="text-2xl font-bold text-white mb-2">📊 Bulk Upload Confirmations</h3>
      <p className="text-slate-400 mb-8">Upload multiple confirmation requests at once using our Excel template.</p>
      <div className="bg-slate-800/50 border-2 border-dashed border-slate-700 rounded-xl p-12 mb-6">
        <p className="mb-4">Drag and drop your Excel file here or click to browse</p>
        <button onClick={handleUpload} className="bg-slate-700/50 text-slate-200 hover:bg-slate-700 font-semibold py-2 px-4 rounded-lg transition-colors">
          Browse Files
        </button>
      </div>
      <div className="flex justify-center gap-4">
        <a href="#" className="bg-blue-600 text-white font-semibold py-2 px-5 rounded-lg hover:bg-blue-700 transition-colors">Download Excel Template</a>
        <button onClick={handleUpload} className="bg-emerald-600 text-white font-semibold py-2 px-5 rounded-lg hover:bg-emerald-700 transition-colors">
          Upload Completed Template
        </button>
      </div>
    </div>
  );
};

const BulkUploadPreview: React.FC<{ onCancel: () => void }> = () => {
  const previewData = [
    { client: 'Innovate Corp', signer: 'John Doe', bank: 'Capital Bank', account: '****1234', status: 'valid' },
    { client: 'Innovate Corp', signer: 'John Doe', bank: 'Capital Bank', account: '****5678', status: 'valid' },
    { client: 'Tech Solutions LLC', signer: 'Jane Smith', bank: 'Chase', account: '****9988', status: 'invalid' },
    { client: 'Global Exports', signer: 'Sam Wilson', bank: 'Wells Fargo', account: '****2233', status: 'review' },
  ];

  return (
    <div className="glass-card p-8 rounded-2xl">
      <h3 className="text-2xl font-bold text-white mb-4">Preview Upload</h3>
      <div className="flex gap-4 mb-4 text-sm">
        <p className="bg-green-900/50 text-green-300 px-3 py-1 rounded-full">15 confirmations ready to send</p>
        <p className="bg-red-900/50 text-red-300 px-3 py-1 rounded-full">2 entries need attention</p>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead className="bg-slate-800/50">
            <tr>
              <th className="p-3">Status</th><th className="p-3">Client</th><th className="p-3">Signer</th><th className="p-3">Bank</th><th className="p-3">Account</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-700/50">
            {previewData.map((row, i) => (
              <tr key={i} className="hover:bg-slate-800/30">
                <td className="p-3">
                  {row.status === 'valid' && <CheckIcon className="w-5 h-5 text-green-400" />}
                  {row.status === 'invalid' && <AlertTriangleIcon className="w-5 h-5 text-red-400" />}
                  {row.status === 'review' && <AlertTriangleIcon className="w-5 h-5 text-amber-400" />}
                </td>
                <td className="p-3">{row.client}</td><td className="p-3">{row.signer}</td><td className="p-3">{row.bank}</td><td className="p-3">{row.account}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-end gap-4 mt-8">
        <button onClick={onCancel} className="bg-slate-700/50 text-slate-200 hover:bg-slate-700 font-semibold py-2 px-5 rounded-lg transition-colors">Cancel</button>
        <button className="bg-blue-600 text-white font-semibold py-2 px-5 rounded-lg hover:bg-blue-700 transition-colors">Send All Authorizations</button>
      </div>
    </div>
  );
};


const SingleConfirmationForm: React.FC<{ onSubmit: (request: ConfirmationRequest) => void; isLoading: boolean; }> = ({ onSubmit, isLoading }) => {
  const [companyName, setCompanyName] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!companyName || !accountNumber) {
      setError('Company Name and Account Number are required for this demo.');
      return;
    }
    setError('');
    onSubmit({ clientName: companyName, bankName: 'Demo Bank', accountNumber });
  };

  const InputField: React.FC<{ label: string, id: string, placeholder?: string, type?: string, required?: boolean }> = ({ label, id, placeholder, type = "text", required = false }) => (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-slate-300 mb-1.5">{label}</label>
      <input
        type={type} id={id} name={id} placeholder={placeholder} required={required}
        className="w-full bg-slate-800/50 border border-slate-700 text-slate-200 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
        onChange={id === 'companyName' ? (e) => setCompanyName(e.target.value) : id === 'accountNumber' ? (e) => setAccountNumber(e.target.value) : undefined}
      />
    </div>
  );

  const SelectField: React.FC<{ label: string, id: string, children: React.ReactNode }> = ({ label, id, children }) => (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-slate-300 mb-1.5">{label}</label>
      <select id={id} name={id} className="w-full bg-slate-800/50 border border-slate-700 text-slate-200 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors">
        {children}
      </select>
    </div>
  );

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {error && <p className="text-red-400 text-sm bg-red-900/50 p-3 rounded-lg">{error}</p>}
      <fieldset className="space-y-4 p-4 border border-slate-700 rounded-lg">
        <legend className="text-lg font-semibold text-white px-2">Company Information</legend>
        <InputField label="Company Name (Legal Entity)" id="companyName" placeholder="e.g., Innovate Corp Inc." required />
      </fieldset>
      <fieldset className="space-y-4 p-4 border border-slate-700 rounded-lg">
        <legend className="text-lg font-semibold text-white px-2">Authorized Signer Information</legend>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <InputField label="First Name" id="signerFirstName" placeholder="John" />
          <InputField label="Last Name" id="signerLastName" placeholder="Doe" />
        </div>
        <InputField label="Signer Email" id="signerEmail" placeholder="john.doe@example.com" type="email" />
        <InputField label="Job Title" id="signerTitle" placeholder="Chief Financial Officer" />
        <InputField label="Phone" id="signerPhone" type="tel" />
      </fieldset>
      <fieldset className="space-y-4 p-4 border border-slate-700 rounded-lg">
        <legend className="text-lg font-semibold text-white px-2">Account Details</legend>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <SelectField label="Account Type" id="accountType">
            <option>Asset</option><option>Liability</option><option>Consolidated</option><option>Derivatives</option>
          </SelectField>
          <InputField label="Tax ID" id="taxId" />
        </div>
        <InputField label="Account ID / Number" id="accountNumber" placeholder="Enter account number" required />
        <InputField label="Account Name" id="accountName" placeholder="e.g., Primary Checking" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <SelectField label="Currency" id="currency"><option>USD</option><option>EUR</option><option>GBP</option></SelectField>
          <InputField label="Balance Date (As of Date)" id="balanceDate" type="date" />
        </div>
        <div>
          <label htmlFor="accountDescription" className="block text-sm font-medium text-slate-300 mb-1.5">Account Description</label>
          <textarea id="accountDescription" name="accountDescription" rows={3} className="w-full bg-slate-800/50 border border-slate-700 text-slate-200 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"></textarea>
        </div>
      </fieldset>
      <div className="flex items-center justify-between bg-slate-800/50 p-4 rounded-lg">
        <label htmlFor="mfaToggle" className="font-medium text-slate-200">Enable Multi-Factor Authorization</label>
        <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
          <input type="checkbox" name="mfaToggle" id="mfaToggle" className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"/>
          <label htmlFor="mfaToggle" className="toggle-label block overflow-hidden h-6 rounded-full bg-slate-700 cursor-pointer"></label>
        </div>
      </div>
      <style>{`.toggle-checkbox:checked { right: 0; border-color: #0066FF; } .toggle-checkbox:checked + .toggle-label { background-color: #0066FF; }`}</style>
      <p className="text-xs text-slate-500 text-center p-3 bg-slate-800/30 rounded-md">Notice: For security and compliance, the client cannot view the contents of the completed confirmation.</p>
      <div className="pt-2">
        <button type="submit" disabled={isLoading} className="w-full flex items-center justify-center bg-blue-600 text-white font-semibold py-3 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 focus:ring-blue-500 disabled:bg-blue-400/50 disabled:cursor-not-allowed transition-all duration-300" aria-busy={isLoading}>
          {isLoading ? 'Generating...' : 'Send Authorization Request'}
          {!isLoading && <ArrowRightIcon className="w-5 h-5 ml-2" />}
        </button>
      </div>
    </form>
  );
};

const ConfirmationForm: React.FC<ConfirmationFormProps> = ({ onSubmit, isLoading }) => {
  const [activeTab, setActiveTab] = useState<WorkflowTab>('single');

  return (
    <div className="space-y-8">
      <AuditorHeader />
      <div className="glass-card p-2 rounded-lg flex items-center justify-center gap-2 max-w-md mx-auto">
        <button onClick={() => setActiveTab('single')} className={`px-4 py-2 rounded-md text-sm font-medium transition-colors w-full ${activeTab === 'single' ? 'bg-blue-600 text-white' : 'text-slate-300 hover:bg-slate-700/50'}`}>Single Confirmation</button>
        <button onClick={() => setActiveTab('bulk')} className={`px-4 py-2 rounded-md text-sm font-medium transition-colors w-full ${activeTab === 'bulk' ? 'bg-blue-600 text-white' : 'text-slate-300 hover:bg-slate-700/50'}`}>Bulk Upload</button>
        <button onClick={() => setActiveTab('clients')} className={`px-4 py-2 rounded-md text-sm font-medium transition-colors w-full ${activeTab === 'clients' ? 'bg-blue-600 text-white' : 'text-slate-300 hover:bg-slate-700/50'}`}>My Clients</button>
      </div>

      {activeTab === 'single' && (
        <div className="glass-card p-8 rounded-2xl">
          <h2 className="text-2xl font-bold text-white mb-2">Request Bank Confirmation</h2>
          <p className="text-slate-400 mb-8">Enter the details below to initiate a new confirmation request.</p>
          <SingleConfirmationForm onSubmit={onSubmit} isLoading={isLoading} />
        </div>
      )}
      {activeTab === 'bulk' && <BulkUploadSection />}
      {activeTab === 'clients' && (
        <div className="glass-card p-8 rounded-2xl text-center">
          <h3 className="text-2xl font-bold text-white mb-2">My Clients</h3>
          <p className="text-slate-400">Client management interface coming soon.</p>
        </div>
      )}
    </div>
  );
};

export default ConfirmationForm;
