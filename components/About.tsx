import React from 'react';
import { Award, GraduationCap, MapPin } from 'lucide-react';
import { EDUCATION, PROFILE } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* About Text */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">About Me</h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                {PROFILE.about}
              </p>
              <div className="flex items-center gap-2 text-gray-400">
                <MapPin size={18} />
                <span>{PROFILE.location}</span>
              </div>
            </div>

            <div className="bg-blue-900/10 border border-blue-500/20 rounded-xl p-6">
              <h3 className="flex items-center text-xl font-semibold text-white mb-4">
                <Award className="mr-3 text-blue-400" />
                Key Achievements
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-gray-300">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>National ICPC Core Member (2023-2025)</span>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>Third Prize in National Excellent Student Contest</span>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>GPA: 8.6 / 10.0 (Top tier)</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Education Timeline */}
          <div>
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
              <GraduationCap className="mr-3 text-purple-400" />
              Education
            </h2>
            <div className="space-y-8 border-l-2 border-slate-700 ml-3 pl-8 relative">
              {EDUCATION.map((edu, index) => (
                <div key={index} className="relative">
                  <div className="absolute -left-[41px] top-1 h-5 w-5 rounded-full bg-slate-900 border-2 border-purple-500" />
                  <div className="mb-1 text-sm text-purple-400 font-medium">{edu.period}</div>
                  <h3 className="text-xl font-bold text-white">{edu.school}</h3>
                  <div className="text-lg text-gray-400 mb-2">{edu.degree}</div>
                  <div className="text-sm text-gray-500 mb-3">{edu.location}</div>
                  <ul className="space-y-1">
                    {edu.achievements.map((ach, i) => (
                      <li key={i} className="text-gray-400 text-sm flex items-start">
                        <span className="mr-2 text-slate-600">-</span>
                        {ach}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;