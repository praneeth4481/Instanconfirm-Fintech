
import React from 'react';
import { AlertTriangleIcon, RefreshIcon } from './Icons.tsx';

interface ErrorDisplayProps {
  message: string;
  onRetry: () => void;
}

const ErrorDisplay: React.FC<ErrorDisplayProps> = ({ message, onRetry }) => {
  return (
    <div className="bg-red-50 border border-red-200 text-red-800 p-6 rounded-xl shadow-lg flex flex-col items-center text-center" role="alert">
      <AlertTriangleIcon className="w-12 h-12 text-red-500 mb-3" />
      <h3 className="text-lg font-semibold mb-2">An Error Occurred</h3>
      <p className="text-sm mb-6">{message}</p>
      <button
        onClick={onRetry}
        className="flex items-center justify-center bg-red-600 text-white font-semibold py-2 px-5 rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors"
      >
        <RefreshIcon className="w-5 h-5 mr-2" />
        Try Again
      </button>
    </div>
  );
};

export default ErrorDisplay;
