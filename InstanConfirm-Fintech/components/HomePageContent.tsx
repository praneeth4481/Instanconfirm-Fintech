
import React from 'react';
import Welcome from './Welcome.tsx';
import TechnicalArchitecture from './TechnicalArchitecture.tsx';
import ProcessComparison from './ProcessComparison.tsx';
import Stats from './Stats.tsx';
import ResearchEvidence from './ResearchEvidence.tsx';

const HomePageContent: React.FC = () => {
  return (
    <div className="space-y-24 md:space-y-32">
      <Welcome />
            
      {/* Quick Navigation Section */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center text-white mb-8">Explore Our Solution</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <a href="#stats" className="group bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:bg-slate-700/50 hover:border-blue-500 transition-all duration-300 cursor-pointer">
            <div className="text-4xl mb-4">📊</div>
            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400">Key Statistics</h3>
            <p className="text-slate-400 text-sm">See the dramatic improvements in speed and cost</p>
          </a>
          
          <a href="#comparison" className="group bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:bg-slate-700/50 hover:border-blue-500 transition-all duration-300 cursor-pointer">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400">Process Comparison</h3>
            <p className="text-slate-400 text-sm">Traditional vs InstantConfirm approach</p>
          </a>
          
          <a href="#research" className="group bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:bg-slate-700/50 hover:border-blue-500 transition-all duration-300 cursor-pointer">
            <div className="text-4xl mb-4">🔬</div>
            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400">Research Evidence</h3>
            <p className="text-slate-400 text-sm">Academic backing for our solution</p>
          </a>
          
          <a href="#architecture" className="group bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:bg-slate-700/50 hover:border-blue-500 transition-all duration-300 cursor-pointer">
            <div className="text-4xl mb-4">🏗️</div>
            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400">Technical Architecture</h3>
            <p className="text-slate-400 text-sm">How our secure system works</p>
          </a>
          
        </div>
      </div>

      <div className="animate-on-scroll" id="stats"><Stats /></div>
      <div className="animate-on-scroll" id="comparison"><ProcessComparison /></div>
      <div className="animate-on-scroll" id="research"><ResearchEvidence /></div>
      <div className="animate-on-scroll" id="architecture"><TechnicalArchitecture /></div>
    </div>
  );
};

export default HomePageContent;
