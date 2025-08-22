import React from 'react';
import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  Bot, 
  FileText, 
  Calculator, 
  Eye, 
  Shield 
} from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'LMS (Web Weave)',
      description: 'A comprehensive Learning Management System with modern UI and advanced features',
      link: 'https://webweavelms.vercel.app',
      icon: GraduationCap
    },
    {
      title: 'AI Assistant (Sara)',
      description: 'Advanced AI-powered assistant with natural language processing capabilities',
      link: 'https://aisara.vercel.app/v2',
      icon: Bot
    },
    {
      title: 'Ezhuthu Notes App',
      description: 'Modern note-taking application with real-time sync and collaborative features',
      link: 'https://ezhuthu.vercel.app',
      icon: FileText
    },
    {
      title: 'Expense Tracker',
      description: 'Smart expense tracking application with analytics and budget management',
      link: 'https://smartexp.vercel.app',
      icon: Calculator
    },
    {
      title: 'AI Face Recognition System (AFRS)',
      description: 'Advanced facial recognition system with machine learning algorithms',
      link: '#',
      icon: Eye
    },
    {
      title: 'Security Application (S-Secure)',
      description: 'Comprehensive security application with multiple authentication layers',
      link: '#',
      icon: Shield
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-8">Featured Projects</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and creativity
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-black rounded-lg overflow-hidden hover:bg-white hover:text-black border-2 border-black transition-all duration-300 group transform hover:scale-105"
            >
              <div className="aspect-video bg-gray-800 group-hover:bg-gray-200 flex items-center justify-center transition-colors duration-300">
                <project.icon className="w-16 h-16 text-white group-hover:text-black transition-colors duration-300" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-black">{project.title}</h3>
                <p className="text-gray-400 group-hover:text-gray-700 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-white group-hover:text-black font-medium hover:underline transition-colors duration-300"
                >
                  View Project
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;