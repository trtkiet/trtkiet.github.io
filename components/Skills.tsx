import React from 'react';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">Technical Proficiency</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SKILLS.map((skillGroup, index) => (
            <div 
              key={index} 
              className="bg-slate-800/30 border border-white/5 rounded-xl p-6 hover:bg-slate-800/50 transition-colors"
            >
              <h3 className="text-xl font-semibold text-white mb-6 pb-2 border-b border-white/5">
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {skillGroup.items.map((skill) => (
                  <div 
                    key={skill}
                    className="group flex items-center bg-slate-950 rounded-lg px-4 py-2 border border-white/5 hover:border-blue-500/30 transition-all cursor-default"
                  >
                    <div className="w-2 h-2 rounded-full bg-blue-500/50 mr-3 group-hover:bg-blue-400 transition-colors" />
                    <span className="text-gray-300 font-medium group-hover:text-white transition-colors">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;