
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="pt-24 pb-20">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20 animate-fadeInUp">
          <h1 className="text-4xl lg:text-6xl font-extrabold text-slate-900 mb-6">Our Mission</h1>
          <p className="text-xl text-slate-600">
            NexusTech was founded on a simple premise: technical education should be practical, and professional software should be accessible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <div className="animate-fadeInUp">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Who We Are</h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              We are a collective of senior engineers, educators, and product designers who saw a disconnect between university curriculum and industry requirements. We decided to bridge that gap.
            </p>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Based in the heart of tech innovation, NexusTech operates as a hybrid hub: a training academy for students and a high-performance studio for startups.
            </p>
            <div className="flex space-x-4 mt-8">
              <div className="bg-blue-50 p-4 rounded-2xl border border-blue-100 flex-1">
                <div className="text-2xl font-bold text-blue-600">Vision</div>
                <p className="text-sm text-slate-600">To be the global standard for technical talent incubation.</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-2xl border border-purple-100 flex-1">
                <div className="text-2xl font-bold text-purple-600">Values</div>
                <p className="text-sm text-slate-600">Quality, Transparency, and Continuous Growth.</p>
              </div>
            </div>
          </div>
          <div className="relative group animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            <div className="absolute inset-0 bg-blue-600 rounded-3xl rotate-3 group-hover:rotate-1 transition-transform"></div>
            <img 
              src="https://picsum.photos/800/600?tech" 
              alt="Office space" 
              className="relative rounded-3xl w-full shadow-2xl object-cover h-[400px]" 
            />
          </div>
        </div>

        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">The Team</h2>
          <p className="text-slate-600">Guided by industry veterans from top tech companies.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { name: 'Alex Rivers', role: 'Founder & CEO', img: 'https://i.pravatar.cc/150?u=alex' },
            { name: 'Sarah Chen', role: 'Head of Engineering', img: 'https://i.pravatar.cc/150?u=sarah' },
            { name: 'Marcus Thorne', role: 'Curriculum Director', img: 'https://i.pravatar.cc/150?u=marcus' },
            { name: 'Elena Rodriguez', role: 'Lead Designer', img: 'https://i.pravatar.cc/150?u=elena' },
          ].map((person) => (
            <div key={person.name} className="bg-white p-6 rounded-3xl border border-slate-100 text-center hover:shadow-lg transition-shadow">
              <img src={person.img} alt={person.name} className="w-24 h-24 rounded-full mx-auto mb-6 object-cover border-4 border-slate-50" />
              <h3 className="text-lg font-bold text-slate-900">{person.name}</h3>
              <p className="text-sm text-blue-600 font-medium mb-4">{person.role}</p>
              <div className="flex justify-center space-x-3">
                <a href="#" className="text-slate-400 hover:text-blue-600"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg></a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
