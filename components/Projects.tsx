import React from 'react';
import { ExternalLink, Github, Database, Brain, Server } from 'lucide-react';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Projects & Research</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A selection of my work in Multi-modal AI, Distributed Systems, and Statistical Inference.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {PROJECTS.map((project, index) => (
            <div 
              key={index}
              className={`group relative bg-slate-800/50 border border-white/5 rounded-2xl p-8 hover:border-blue-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10 ${project.type === 'Research' ? 'lg:col-span-2' : ''}`}
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between mb-6">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                      project.type === 'Research' 
                        ? 'bg-purple-500/10 text-purple-400 border border-purple-500/20' 
                        : 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                    }`}>
                      {project.type}
                    </span>
                    {project.role && (
                      <span className="text-sm text-gray-400 italic">
                        {project.role}
                      </span>
                    )}
                  </div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                </div>
                {project.link && (
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noreferrer"
                    className="mt-4 md:mt-0 p-2 text-gray-400 hover:text-white bg-white/5 rounded-lg transition-colors"
                  >
                    <Github size={20} />
                  </a>
                )}
              </div>

              <div className="space-y-3 mb-8">
                {project.description.map((desc, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500/50 flex-shrink-0" />
                    <p className="text-gray-300 leading-relaxed text-sm">{desc}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2 pt-6 border-t border-white/5">
                {project.techStack.map((tech) => (
                  <span 
                    key={tech} 
                    className="px-3 py-1 text-sm bg-slate-950 text-gray-400 rounded-md border border-white/5"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;