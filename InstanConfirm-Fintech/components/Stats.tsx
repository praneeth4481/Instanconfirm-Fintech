
import React, { useState, useEffect, useRef } from 'react';
import { ExternalLinkIcon } from './Icons.tsx';

const AnimatedStat: React.FC<{ finalValue: number; label: string; suffix: string; prefix?: string; link?: string }> = ({ finalValue, label, suffix, prefix, link }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = 0;
          const end = finalValue;
          if (start === end) return;

          const duration = 1500;
          const range = end - start;
          let startTime: number | null = null;

          const step = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            const current = Math.floor(progress * range + start);
            setCount(current);
            if (progress < 1) {
              window.requestAnimationFrame(step);
            } else {
              setCount(end); // Ensure it ends on the exact value
            }
          };
          window.requestAnimationFrame(step);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [finalValue]);

  const content = (
    <>
      <p className="text-5xl sm:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
        {prefix}{count.toLocaleString()}{suffix}
      </p>
      <p className="mt-2 text-base sm:text-lg font-medium text-slate-300 flex items-center justify-center group-hover:text-blue-300 transition-colors">
        {label}
        {link && <ExternalLinkIcon className="w-4 h-4 ml-1.5 text-slate-400 group-hover:text-blue-300 transition-colors" />}
      </p>
    </>
  );

  if (link) {
    return (
      <a href={link} target="_blank" rel="noopener noreferrer" ref={ref} className="text-center glass-card p-6 rounded-2xl group">
        {content}
      </a>
    );
  }

  return (
    <div ref={ref} className="text-center glass-card p-6 rounded-2xl">
      {content}
    </div>
  );
};

const Stats: React.FC = () => {
  return (
    <section>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <AnimatedStat finalValue={95} label="Faster Turnaround" suffix="%" />
          <AnimatedStat finalValue={93} label="Cost Reduction" suffix="%" />
          <AnimatedStat finalValue={100} label="PCAOB Compliant" suffix="%" link="https://pcaobus.org/oversight/standards/auditing-standards/details/AS2310" />
        </div>
      </div>
    </section>
  );
};

export default Stats;
