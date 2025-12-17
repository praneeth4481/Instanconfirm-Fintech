
import React from 'react';

const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center p-12 bg-white rounded-xl shadow-lg border border-slate-200/80" aria-label="Loading confirmation">
      <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      <p className="mt-4 text-lg font-semibold text-slate-600">Generating Confirmation...</p>
      <p className="mt-1 text-sm text-slate-500">Please wait while we securely connect.</p>
    </div>
  );
};

export default LoadingSpinner;
