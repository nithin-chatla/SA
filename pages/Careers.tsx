
import React from 'react';
import { Link } from 'react-router-dom';

const Careers: React.FC = () => {
  const roles = [
    { title: 'Full Stack Engineer (L4)', dept: 'Engineering', type: 'Full-time' },
    { title: 'Technical Mentor', dept: 'Education', type: 'Part-time / Remote' },
    { title: 'Product UI/UX Designer', dept: 'Design', type: 'Full-time' },
    { title: 'Startup Growth Lead', dept: 'Business', type: 'Full-time' },
  ];

  return (
    <div className="pt-24 pb-20">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20 animate-fadeInUp">
          <h1 className="text-4xl lg:text-6xl font-extrabold text-slate-900 mb-6">Join the Nexus</h1>
          <p className="text-xl text-slate-600">
            We hire our best interns. We also hire world-class operators to lead them.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <div className="animate-fadeInUp">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Why Work Here?</h2>
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex-shrink-0 flex items-center justify-center text-blue-600 font-bold">1</div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">Impact First</h3>
                  <p className="text-slate-600">Your work directly shapes the careers of hundreds of students and the futures of dozens of startups.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-purple-100 rounded-full flex-shrink-0 flex items-center justify-center text-purple-600 font-bold">2</div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">Rapid Growth</h3>
                  <p className="text-slate-600">Work at the intersection of EdTech and Software Services. No two days are the same.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-emerald-100 rounded-full flex-shrink-0 flex items-center justify-center text-emerald-600 font-bold">3</div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">Elite Network</h3>
                  <p className="text-slate-600">Access our network of startup founders, VCs, and top-tier engineers.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-slate-50 p-8 rounded-[2.5rem] border border-slate-200 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
             <h3 className="text-xl font-bold text-slate-900 mb-6">Current Openings</h3>
             <div className="space-y-4">
                {roles.map((role) => (
                  <div key={role.title} className="bg-white p-5 rounded-2xl border border-slate-100 flex justify-between items-center group cursor-pointer hover:border-blue-400 transition-all">
                    <div>
                      <h4 className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{role.title}</h4>
                      <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">{role.dept} • {role.type}</p>
                    </div>
                    <svg className="w-5 h-5 text-slate-300 group-hover:text-blue-600 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  </div>
                ))}
             </div>
             <p className="mt-8 text-center text-sm text-slate-500">
               Don't see your role? <Link to="/contact" className="text-blue-600 font-bold">Send us an open application.</Link>
             </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
