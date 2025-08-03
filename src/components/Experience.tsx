import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Salesforce Developer Intern',
      company: 'Candance System Inc.',
      period: 'Jan 2025 – Apr 2025',
      description: 'Working with Salesforce platform development, customization, and integration solutions.',
    },
    {
      title: 'Full Stack Developer Intern',
      company: 'OneYes Info Tech Solutions',
      period: 'Feb 2025 – Mar 2025',
      description: 'Developing end-to-end web applications using modern full-stack technologies.',
    },
    {
      title: 'Software Developer Intern',
      company: 'Candance System Inc.',
      period: 'Dec 2024 – Feb 2025',
      description: 'Contributing to software development projects and learning enterprise-level development practices.',
    },
    {
      title: 'Full Stack Developer Intern',
      company: 'Octanet Pvt. Ltd',
      period: 'Sep 2023 – Nov 2023',
      description: 'Gained hands-on experience in full-stack development with focus on modern web technologies.',
    },
  ];

  return (
    <section id="experience" className="py-20 px-4 bg-gradient-to-b from-transparent to-cyan-900/5">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <div className="h-1 w-16 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 to-blue-500"></div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="relative flex items-start">
                {/* Timeline dot */}
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg shadow-cyan-500/25 border-4 border-black">
                  <Briefcase className="w-6 h-6 text-white" />
                </div>

                {/* Content */}
                <div className="ml-8 flex-grow">
                  <div className="bg-white/5 backdrop-blur-lg rounded-xl border border-white/10 p-6 shadow-xl hover:bg-white/10 transition-all duration-300 transform hover:scale-[1.02] group">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                      <h3 className="text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors duration-300">
                        {exp.title}
                      </h3>
                      <div className="flex items-center text-cyan-400 text-sm">
                        <Calendar className="w-4 h-4 mr-1" />
                        {exp.period}
                      </div>
                    </div>
                    <h4 className="text-lg font-medium text-cyan-300 mb-3">{exp.company}</h4>
                    <p className="text-gray-300 leading-relaxed">{exp.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;