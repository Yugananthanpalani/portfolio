import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Java Full Stack Developer Intern',
      company: 'Zidio Development',
      period: 'Jul 2025 - Aug 2025',
      description: 'Full-stack Java development'
    },
    {
      title: 'Full Stack Developer Intern',
      company: 'OneYes Info Tech Solutions',
      period: 'Feb 2025 – Mar 2025',
      description: 'Modern web applications'
    },
    {
      title: 'Salesforce Developer Intern',
      company: 'Candance System Inc.',
      period: 'Jan 2025 – Apr 2025',
      description: 'Salesforce solutions'
    },
    {
      title: 'Software Developer Intern',
      company: 'Candance System Inc.',
      period: 'Dec 2024 - Feb 2025',
      description: 'Scalable software solutions'
    },
    {
      title: 'Full Stack Developer Intern',
      company: 'Octanet Pvt. Ltd',
      period: 'Sep 2023 - Nov 2023',
      description: 'Full-stack web applications'
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-8">Experience</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            My professional journey and internship experiences
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white border-2 border-black rounded-lg p-6 hover:bg-black hover:text-white hover:border-white transition-all duration-300 group"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-black group-hover:bg-white rounded-lg flex items-center justify-center mr-4 transition-colors duration-300">
                  <Briefcase className="w-6 h-6 text-white group-hover:text-black transition-colors duration-300" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-black group-hover:text-white mb-1">{exp.title}</h3>
                  <p className="text-sm font-medium text-gray-600 group-hover:text-gray-300">{exp.company}</p>
                </div>
              </div>
              
              <div className="flex items-center mb-3">
                <Calendar className="w-4 h-4 text-gray-600 group-hover:text-gray-300 mr-2 transition-colors duration-300" />
                <p className="text-sm text-gray-600 group-hover:text-gray-300 transition-colors duration-300">{exp.period}</p>
              </div>
              
              <p className="text-gray-700 group-hover:text-gray-300 text-sm leading-relaxed transition-colors duration-300">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;