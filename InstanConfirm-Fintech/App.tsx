
import React, { useState, useCallback } from 'react';
import { GoogleGenAI, Type } from '@google/genai';
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
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [confirmationData, setConfirmationData] = useState<ConfirmationData | null>(null);
  const [lastRequest, setLastRequest] = useState<ConfirmationRequest | null>(null);

  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY!, vertexai: true });

  const getConfirmation = useCallback(async (request: ConfirmationRequest) => {
    setIsLoading(true);
    setError(null);
    setConfirmationData(null);
    setLastRequest(request);

    const { clientName, bankName, accountNumber } = request;

    const prompt = `
      You are a secure banking API simulator. Your purpose is to generate a realistic bank account confirmation for an auditor.
      Given the following details:
      - Client Name: "${clientName}"
      - Bank Name: "${bankName}"
      - Account Number: "${accountNumber}"

      Generate a JSON response with the following structure. Do not add any commentary or markdown formatting. Only return the raw JSON.
      The balance should be a realistic, non-round number. The currency should be USD. The confirmation ID should be a unique UUID-like string. The asOfDate should be today's date in 'YYYY-MM-DD' format. The account number in the response should be masked (e.g., '******1234').
    `;

    const schema = {
      type: Type.OBJECT,
      properties: {
        accountHolder: { type: Type.STRING, description: "The full name of the account holder." },
        bankName: { type: Type.STRING, description: "The name of the financial institution." },
        accountNumber: { type: Type.STRING, description: "The masked account number (e.g., '******1234')." },
        accountType: { type: Type.STRING, description: "The type of account (e.g., 'Business Checking', 'Corporate Savings')." },
        balance: { type: Type.NUMBER, description: "The account balance as a floating-point number." },
        currency: { type: Type.STRING, description: "The currency code (e.g., 'USD')." },
        asOfDate: { type: Type.STRING, description: "The date of the balance confirmation in YYYY-MM-DD format." },
        confirmationId: { type: Type.STRING, description: "A unique identifier for this confirmation, like a UUID." }
      },
      required: ["accountHolder", "bankName", "accountNumber", "accountType", "balance", "currency", "asOfDate", "confirmationId"]
    };

    try {
      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: { role: 'user', parts: [{ text: prompt }] },
        config: {
          responseMimeType: 'application/json',
          responseSchema: schema,
        },
      });

      const resultText = response.text.trim();
      const resultJson = JSON.parse(resultText);
      setConfirmationData(resultJson);

    } catch (e) {
      console.error(e);
      setError('Failed to retrieve confirmation. The AI model may be unavailable or the request was invalid. Please try again.');
    } finally {
      setIsLoading(false);
    }
  }, [ai]);

  const handleReset = () => {
    setConfirmationData(null);
    setError(null);
    setIsLoading(false);
    setLastRequest(null);
  };

  const handleRetry = () => {
    if (lastRequest) {
      getConfirmation(lastRequest);
    } else {
      handleReset();
    }
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <HomePageContent />;
      case 'request':
        return (
          <div className="max-w-5xl mx-auto animate-on-scroll">
            {!confirmationData && (
              <ConfirmationForm onSubmit={getConfirmation} isLoading={isLoading} />
            )}
            {isLoading && <LoadingSpinner />}
            {error && !isLoading && <ErrorDisplay message={error} onRetry={handleRetry} />}
            {confirmationData && !isLoading && (
              <ConfirmationResult data={confirmationData} onReset={handleReset} />
            )}
          </div>
        );
      case 'docs':
        return <TechnicalDocsPage />;
      default:
        return <HomePageContent />;
    }
  };

  return (
    <div className="min-h-screen bg-[#0A1628] text-slate-300">
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-6xl mx-auto">
          {renderContent()}
        </div>
      </main>
      <footer className="text-center py-8 text-sm text-slate-500">
        <p>&copy; {new Date().getFullYear()} InstantConfirm. All Rights Reserved. For demonstration purposes only.</p>
      </footer>
    </div>
  );
};

export default App;
