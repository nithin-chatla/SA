
import React from 'react';

const Technologies: React.FC = () => {
  const stacks = [
    {
      category: 'Frontend',
      techs: [
        { name: 'React', icon: '⚛️', desc: 'Next.js, Vite, Redux Toolkit' },
        { name: 'Tailwind CSS', icon: '🎨', desc: 'Utility-first styling' },
        { name: 'TypeScript', icon: '📘', desc: 'Type-safe JavaScript development' },
        { name: 'Framer Motion', icon: '✨', desc: 'Smooth, production-grade animations' },
      ]
    },
    {
      category: 'Backend',
      techs: [
        { name: 'Node.js', icon: '🟢', desc: 'Express, NestJS, fast runtimes' },
        { name: 'Python', icon: '🐍', desc: 'Django, Fast API, AI integrations' },
        { name: 'PostgreSQL', icon: '🐘', desc: 'Advanced relational data modeling' },
        { name: 'Redis', icon: '⚡', desc: 'High-speed caching and queues' },
      ]
    },
    {
      category: 'DevOps & AI',
      techs: [
        { name: 'AWS', icon: '☁️', desc: 'Cloud infrastructure and Lambda' },
        { name: 'Docker', icon: '🐳', desc: 'Containerization and orchestration' },
        { name: 'Gemini API', icon: '🤖', desc: 'State-of-the-art AI integration' },
        { name: 'GitHub Actions', icon: '🚀', desc: 'CI/CD automation pipelines' },
      ]
    }
  ];

  return (
    <div className="pt-24 pb-20">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20 animate-fadeInUp">
          <h1 className="text-4xl lg:text-6xl font-extrabold text-slate-900 mb-6">Our Tech Stack</h1>
          <p className="text-xl text-slate-600">
            We only teach and build with modern, high-demand technologies that matter in today's market.
          </p>
        </div>

        <div className="space-y-20">
          {stacks.map((section, idx) => (
            <div key={section.category} className="animate-fadeInUp" style={{ animationDelay: `${idx * 0.1}s` }}>
              <h2 className="text-2xl font-bold text-slate-900 mb-10 flex items-center">
                <span className="w-8 h-1 bg-blue-600 mr-4 rounded-full"></span>
                {section.category}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {section.techs.map((tech) => (
                  <div key={tech.name} className="bg-white p-8 rounded-3xl border border-slate-100 hover:shadow-xl transition-all hover:-translate-y-1">
                    <div className="text-3xl mb-4">{tech.icon}</div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">{tech.name}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed">{tech.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-slate-900 rounded-[3rem] p-12 lg:p-20 text-center animate-fadeInUp">
          <h2 className="text-3xl font-bold text-white mb-6">Don't see your stack?</h2>
          <p className="text-slate-400 mb-8 max-w-xl mx-auto">
            We are always evolving. Our core philosophy is learning how to learn. If you're a startup with a unique stack, we can adapt.
          </p>
          <button className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg">
            Let's Discuss
          </button>
        </div>
      </section>
    </div>
  );
};

export default Technologies;
