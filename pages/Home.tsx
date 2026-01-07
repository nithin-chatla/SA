
import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-[100px]" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-100/50 rounded-full blur-[100px]" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur px-3 py-1 rounded-full border border-slate-200 shadow-sm mb-8 animate-fadeInUp">
            <span className="flex h-2 w-2 rounded-full bg-blue-600"></span>
            <span className="text-xs font-semibold text-slate-600 uppercase tracking-wider">Hiring for Summer 2024 Internships</span>
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 tracking-tight mb-8 leading-[1.1] animate-fadeInUp">
            Bridging the gap between <br />
            <span className="text-gradient">Classrooms and Startups.</span>
          </h1>
          
          <p className="max-w-2xl mx-auto text-xl text-slate-600 mb-12 leading-relaxed animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
            We train the next generation of engineers while building high-performance software for emerging startups. Elite workshops, internships, and development solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            <Link to="/internships" className="w-full sm:w-auto bg-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-700 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1">
              Apply for Internship
            </Link>
            <Link to="/services" className="w-full sm:w-auto bg-white text-slate-900 px-8 py-4 rounded-xl font-bold border border-slate-200 hover:bg-slate-50 transition-all shadow-sm">
              Build Your Product
            </Link>
          </div>
          
          <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
            <div>
              <div className="text-4xl font-bold text-slate-900 mb-2">500+</div>
              <div className="text-sm text-slate-500 uppercase font-medium tracking-wide">Students Trained</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-slate-900 mb-2">40+</div>
              <div className="text-sm text-slate-500 uppercase font-medium tracking-wide">Startups Helped</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-slate-900 mb-2">12</div>
              <div className="text-sm text-slate-500 uppercase font-medium tracking-wide">Modern Tech Stacks</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-slate-900 mb-2">95%</div>
              <div className="text-sm text-slate-500 uppercase font-medium tracking-wide">Hiring Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">The Nexus Methodology</h2>
            <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Hands-on Workshops</h3>
              <p className="text-slate-600 leading-relaxed">
                Forget passive lectures. Our workshops are intense, project-driven experiences where students build production-grade systems using the latest industry tools.
              </p>
            </div>
            
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Real-world Internships</h3>
              <p className="text-slate-600 leading-relaxed">
                Work on actual client projects for startups. Learn Agile, CI/CD, and peer-reviewed coding standards while being mentored by senior leads.
              </p>
            </div>
            
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Startup Velocity</h3>
              <p className="text-slate-600 leading-relaxed">
                We build MVPs and full-scale apps for startups at record speed and competitive prices, leveraging our pool of top-tier trained talent.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl lg:text-5xl font-bold mb-8">Ready to start your journey?</h2>
          <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
            Whether you're a student looking to skyrocket your career or a founder needing elite software, we're here to help.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link to="/contact" className="bg-white text-slate-900 px-10 py-4 rounded-xl font-bold hover:bg-slate-100 transition-all text-lg shadow-xl">
              Get Started Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
