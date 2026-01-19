import React from 'react';
import { Mail, Phone, Linkedin, Github } from 'lucide-react';
import { PROFILE } from '../constants';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-gradient-to-t from-slate-900 to-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-white mb-8">Get In Touch</h2>
        <p className="text-gray-400 max-w-xl mx-auto mb-12">
          I'm currently looking for internship or full-time opportunities. 
          Feel free to reach out if you'd like to discuss collaboration or just say hi.
        </p>

        <div className="flex flex-wrap justify-center gap-6 mb-16">
          <a href={`mailto:${PROFILE.email}`} className="flex items-center gap-3 px-6 py-4 bg-slate-800 rounded-xl hover:bg-slate-700 transition-all border border-white/5 hover:border-blue-500/30 group">
            <Mail className="text-blue-400 group-hover:scale-110 transition-transform" />
            <span className="text-gray-300 group-hover:text-white">{PROFILE.email}</span>
          </a>
          <div className="flex items-center gap-3 px-6 py-4 bg-slate-800 rounded-xl border border-white/5 cursor-default">
            <Phone className="text-emerald-400" />
            <span className="text-gray-300">{PROFILE.phone}</span>
          </div>
        </div>

        <div className="flex justify-center gap-8 border-t border-white/10 pt-8">
          <a href={PROFILE.githubUrl} className="text-gray-500 hover:text-white transition-colors">
            <Github size={24} />
            <span className="sr-only">GitHub</span>
          </a>
          <a href={`https://${PROFILE.linkedin}`} className="text-gray-500 hover:text-white transition-colors">
            <Linkedin size={24} />
            <span className="sr-only">LinkedIn</span>
          </a>
        </div>
        
        <p className="mt-8 text-gray-600 text-sm">
          © {new Date().getFullYear()} {PROFILE.name}. All rights reserved.
        </p>
      </div>
    </section>
  );
};

export default Contact;