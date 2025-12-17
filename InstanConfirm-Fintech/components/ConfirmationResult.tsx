
import React from 'react';
import { ConfirmationData } from '../types.ts';
import { CheckCircleIcon, RefreshIcon } from './Icons.tsx';

interface ConfirmationResultProps {
  data: ConfirmationData;
  onReset: () => void;
}

const ConfirmationResult: React.FC<ConfirmationResultProps> = ({ data, onReset }) => {
  const formatCurrency = (amount: number, currency: string) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency,
    }).format(amount);
  };

  return (
    <div className="bg-white p-8 rounded-xl shadow-lg border border-slate-200/80 animate-fade-in">
      <div className="flex flex-col items-center text-center mb-8">
        <CheckCircleIcon className="w-16 h-16 text-green-500 mb-3" />
        <h2 className="text-2xl font-bold text-slate-800">Confirmation Received</h2>
        <p className="text-slate-500 mt-1">Official balance confirmation as of {data.asOfDate}</p>
      </div>

      <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
          <InfoItem label="Account Holder" value={data.accountHolder} />
          <InfoItem label="Bank Name" value={data.bankName} />
          <InfoItem label="Account Number" value={data.accountNumber} />
          <InfoItem label="Account Type" value={data.accountType} />
        </div>
        <div className="border-t border-slate-200 my-4"></div>
        <div className="text-center">
          <p className="text-sm text-slate-500 uppercase tracking-wider">Confirmed Balance</p>
          <p className="text-4xl font-bold text-blue-600 mt-1">
            {formatCurrency(data.balance, data.currency)}
          </p>
        </div>
      </div>

      <div className="mt-8 text-center text-xs text-slate-400">
        <p>Confirmation ID: {data.confirmationId}</p>
      </div>

      <div className="mt-8">
        <button
          onClick={onReset}
          className="w-full flex items-center justify-center bg-slate-600 text-white font-semibold py-3 px-4 rounded-lg hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500 transition-colors"
        >
          <RefreshIcon className="w-5 h-5 mr-2" />
          Start New Confirmation
        </button>
      </div>
    </div>
  );
};

const InfoItem: React.FC<{ label: string; value: string }> = ({ label, value }) => (
  <div>
    <p className="text-sm text-slate-500">{label}</p>
    <p className="font-semibold text-slate-700 text-lg">{value}</p>
  </div>
);

export default ConfirmationResult;
