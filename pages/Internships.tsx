
import React from 'react';
import { Link } from 'react-router-dom';

const Internships: React.FC = () => {
  return (
    <div className="pt-24 pb-20">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20 animate-fadeInUp">
          <h1 className="text-4xl lg:text-6xl font-extrabold text-slate-900 mb-6">Internships</h1>
          <p className="text-xl text-slate-600">
            Real experience. Real projects. Real impact.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          {/* Free Track */}
          <div className="bg-white p-10 lg:p-12 rounded-[2.5rem] border border-slate-200 shadow-sm relative overflow-hidden flex flex-col h-full">
            <div className="absolute top-0 right-0 p-8">
              <span className="bg-slate-100 text-slate-600 text-xs font-bold px-4 py-1.5 rounded-full uppercase">Skill Builder</span>
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Open Track</h2>
            <p className="text-slate-600 mb-8 leading-relaxed">
              Ideal for freshmen and sophomores looking to build their first professional-grade projects. Focuses on learning the fundamentals of the modern stack through guided builds.
            </p>
            <ul className="space-y-4 mb-10 text-slate-700 flex-grow">
              <li className="flex items-start">
                <span className="text-green-500 mr-3">✓</span>
                <span>Free learning resources & mentorship</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3">✓</span>
                <span>3 projects for your portfolio</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3">✓</span>
                <span>Weekly code review sessions</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3">✓</span>
                <span>Certificate of completion</span>
              </li>
            </ul>
            <Link to="/contact" className="w-full text-center bg-slate-900 text-white py-4 rounded-xl font-bold hover:bg-slate-800 transition-all">
              Apply for Open Track
            </Link>
          </div>

          {/* Paid Track */}
          <div className="bg-blue-50 p-10 lg:p-12 rounded-[2.5rem] border border-blue-100 shadow-lg relative overflow-hidden flex flex-col h-full ring-4 ring-blue-600/10">
            <div className="absolute top-0 right-0 p-8">
              <span className="bg-blue-600 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase">Elite Track</span>
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Paid Residency</h2>
            <p className="text-slate-600 mb-8 leading-relaxed">
              Our competitive flagship program. Work directly on client-facing software for our startup partners. Highly selective, highly rewarding.
            </p>
            <ul className="space-y-4 mb-10 text-slate-700 flex-grow">
              <li className="flex items-start">
                <span className="text-blue-600 mr-3">★</span>
                <span className="font-semibold text-blue-900">Monthly Stipend provided</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3">★</span>
                <span>Work on production client code</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3">★</span>
                <span>Direct exposure to startup founders</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3">★</span>
                <span>Priority for internal full-time hiring</span>
              </li>
            </ul>
            <Link to="/contact" className="w-full text-center bg-blue-600 text-white py-4 rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg">
              Apply for Residency
            </Link>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-12 border border-slate-100 animate-fadeInUp">
          <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">Internship Roadmap</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Application', desc: 'Submit your resume and github profile.' },
              { step: '02', title: 'Interview', desc: 'A casual 30-min chat about your goals.' },
              { step: '03', title: 'Onboarding', desc: 'Two-week intensive toolkit orientation.' },
              { step: '04', title: 'Development', desc: 'Start building and contributing.' },
            ].map((s) => (
              <div key={s.step} className="text-center md:text-left">
                <div className="text-4xl font-extrabold text-blue-100 mb-4">{s.step}</div>
                <h4 className="font-bold text-slate-900 mb-2">{s.title}</h4>
                <p className="text-sm text-slate-600 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Internships;
