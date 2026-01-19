import React from 'react';
import { ArrowRight, Download, Terminal } from 'lucide-react';
import { PROFILE } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-blue-600/20 blur-[120px]"></div>
        <div className="absolute top-[40%] -right-[10%] w-[40%] h-[40%] rounded-full bg-purple-600/10 blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <div className="inline-flex items-center px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm font-medium mb-6">
            <Terminal size={14} className="mr-2" />
            CS Student & AI Researcher
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400">{PROFILE.name}</span>
          </h1>
          
          <p className="mt-4 text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Building intelligent systems with <span className="text-white font-medium">Deep Learning</span> and scalable backends with <span className="text-white font-medium">Go & Python</span>. 
            Passionate about bridging the gap between research and production.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#projects"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/25"
            >
              View Work
              <ArrowRight size={18} className="ml-2" />
            </a>
            <a 
              href={PROFILE.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center px-8 py-3 border border-white/10 text-base font-medium rounded-lg text-gray-300 bg-white/5 hover:bg-white/10 transition-all backdrop-blur-sm"
            >
              <Download size={18} className="ml-2" />
              Check GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;