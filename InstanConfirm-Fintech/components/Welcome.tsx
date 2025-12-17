
import React from 'react';
import { ArrowRightIcon } from './Icons.tsx';

const AuditorAnimation = () => (
  <div className="auditor-scanner pointer-events-none">
    <svg width="200" height="250" viewBox="0 0 200 250" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3.5" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      {/* Magnifier Lens Effect */}
      <circle cx="60" cy="80" r="50" fill="rgba(0, 102, 255, 0.1)" stroke="rgba(0, 102, 255, 0.5)" strokeWidth="2" style={{ backdropFilter: 'blur(2px)' }} />
      {/* Auditor Silhouette */}
      <g fill="rgba(255, 255, 255, 0.1)">
        <path d="M120 250V200C120 188.954 128.954 180 140 180H160C171.046 180 180 188.954 180 200V250H120Z" />
        <path d="M149.5 180C155.5 175.5 160 165.028 160 155C160 141.193 148.807 130 135 130C121.193 130 110 141.193 110 155C110 165.028 114.5 175.5 120.5 180H149.5Z" />
      </g>
      {/* Magnifier Handle */}
      <line x1="100" y1="120" x2="130" y2="150" stroke="rgba(0, 102, 255, 0.8)" strokeWidth="5" filter="url(#glow)" />
    </svg>
  </div>
);

const Welcome: React.FC = () => {
  return (
    <section className="text-center py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A1628] to-transparent z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628] to-transparent z-10"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-radial from-blue-600/20 via-transparent to-transparent"></div>
        
        <AuditorAnimation />

        <div className="relative z-20">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white animate-on-scroll" style={{ animationDelay: '0.1s' }}>
                Audit Confirmations, <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Instantaneously.</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-slate-300 max-w-2xl mx-auto animate-on-scroll" style={{ animationDelay: '0.2s' }}>
                Eliminate 12-day delays and 90% of costs. The future of audit evidence is secure, compliant, and real-time.
            </p>
            <div className="mt-10 flex justify-center gap-4 animate-on-scroll" style={{ animationDelay: '0.3s' }}>
                <button className="flex items-center justify-center bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 focus:ring-blue-500 transition-all duration-300 animate-pulse-button">
                    Request Demo
                    <ArrowRightIcon className="w-5 h-5 ml-2" />
                </button>
            </div>
        </div>
    </section>
  );
};

export default Welcome;
