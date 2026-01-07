
import React from 'react';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  return (
    <div className="pt-24 pb-20">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20 animate-fadeInUp">
          <h1 className="text-4xl lg:text-6xl font-extrabold text-slate-900 mb-6">Our Services</h1>
          <p className="text-xl text-slate-600">
            Professional solutions for students aiming high and startups building the future.
          </p>
        </div>

        {/* Startup Solutions */}
        <div className="mb-32">
          <div className="bg-slate-900 rounded-[3rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 p-12 lg:p-20 text-white">
              <span className="text-blue-400 font-bold uppercase tracking-widest text-sm mb-4 block">For Founders</span>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Software Development for Startups</h2>
              <p className="text-slate-400 mb-8 leading-relaxed text-lg">
                We help early-stage businesses launch faster. From MVPs to full-scale SaaS platforms, we provide premium code without the premium agency prices.
              </p>
              <ul className="space-y-4 mb-10">
                {['MVP Architecture & Launch', 'Custom SaaS Development', 'Mobile App Development (iOS/Android)', 'Cloud Scaling & DevOps'].map((item) => (
                  <li key={item} className="flex items-center space-x-3">
                    <svg className="h-5 w-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link to="/contact" className="inline-block bg-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg">
                Request a Quote
              </Link>
            </div>
            <div className="lg:w-1/2 h-[400px] lg:h-full relative overflow-hidden">
               <img src="https://picsum.photos/1000/1000?code" alt="Coding" className="w-full h-full object-cover" />
               <div className="absolute inset-0 bg-blue-600/20 mix-blend-multiply"></div>
            </div>
          </div>
        </div>

        {/* Training Section */}
        <div className="mb-32">
           <h2 className="text-3xl font-bold text-slate-900 text-center mb-16">Technical Training & Workshops</h2>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: 'Full-Stack Mastery', desc: 'React, Node, PostgreSQL, and GraphQL in one comprehensive workshop.', icon: '⚡' },
                { title: 'AI & ML Fundamentals', desc: 'Implementing GenAI models and building intelligent applications.', icon: '🧠' },
                { title: 'Cloud Engineering', desc: 'AWS, Docker, and Kubernetes for modern infrastructure management.', icon: '☁️' },
                { title: 'Blockchain Dev', desc: 'Smart contracts, Ethereum, and decentralized finance protocols.', icon: '🔗' },
                { title: 'System Design', desc: 'Architecture patterns for high-scale, distributed systems.', icon: '🏗️' },
                { title: 'Cyber Security', desc: 'Ethical hacking and securing enterprise-level applications.', icon: '🛡️' },
              ].map((service) => (
                <div key={service.title} className="bg-white p-8 rounded-3xl border border-slate-100 hover:border-blue-200 transition-all hover:shadow-xl group">
                  <div className="text-4xl mb-6">{service.icon}</div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">{service.title}</h3>
                  <p className="text-slate-600 leading-relaxed mb-6">
                    {service.desc}
                  </p>
                  <Link to="/technologies" className="text-blue-600 font-semibold flex items-center hover:translate-x-2 transition-transform">
                    Learn more <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  </Link>
                </div>
              ))}
           </div>
        </div>

        {/* Internship Preview */}
        <div className="bg-blue-600 rounded-[3rem] p-12 lg:p-20 text-white text-center animate-fadeInUp">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Looking for our Internship Program?</h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            We offer both free and paid internship programs for students who want to build real products.
          </p>
          <Link to="/internships" className="bg-white text-blue-600 px-10 py-4 rounded-xl font-bold hover:bg-slate-100 transition-all text-lg shadow-xl">
            View Internships
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
