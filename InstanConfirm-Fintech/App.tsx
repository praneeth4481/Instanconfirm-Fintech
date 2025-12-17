import React, { useState } from 'react';
import { ConfirmationRequest, ConfirmationData } from './types.ts';
import Header from './components/Header.tsx';
import ConfirmationForm from './components/ConfirmationForm.tsx';
import ConfirmationResult from './components/ConfirmationResult.tsx';
import LoadingSpinner from './components/LoadingSpinner.tsx';
import ErrorDisplay from './components/ErrorDisplay.tsx';
import HomePageContent from './components/HomePageContent.tsx';
import TechnicalDocsPage from './components/TechnicalDocsPage.tsx';

export type Tab = 'home' | 'request' | 'docs';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>('home');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [confirmationData, setConfirmationData] = useState<ConfirmationData | null>(null);
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="container mx-auto px-4 py-8">
        {activeTab === 'home' && <HomePageContent />}
        {activeTab === 'request' && (
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Request Confirmation</h2>
            {!confirmationData ? (
              <ConfirmationForm onSubmit={() => {}} />
            ) : (
              <ConfirmationResult data={confirmationData} />
            )}
            {isLoading && <LoadingSpinner />}
            {error && <ErrorDisplay message={error} />}
          </div>
        )}
        {activeTab === 'docs' && <TechnicalDocsPage />}
      </main>
    </div>
  );
};

export default App;
