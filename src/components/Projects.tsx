import React from 'react';
import { ExternalLink, Github, Mic, BookOpen, Eye, DollarSign } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Sara AI',
      description: 'Voice & Text AI Assistant built with FastAPI, LiveKit, and PWA UI for seamless user interaction.',
      icon: Mic,
      tags: ['FastAPI', 'LiveKit', 'PWA', 'AI'],
      gradient: 'from-purple-500 to-pink-600',
      live: 'https://aisara.vercel.app/v2',
      code: 'https://github.com/Yugananthanpalani/sara-ai'
    },
    {
      title: 'LMS (Web Weave)',
      description: 'Comprehensive Learning Management System with video streaming, notes, and interactive features built with React and Firebase.',
      icon: BookOpen,
      tags: ['React', 'Firebase', 'Video Streaming', 'LMS'],
      gradient: 'from-blue-500 to-cyan-600',
      live: 'https://webweavelms.vercel.app',
      code: 'https://github.com/Yugananthanalani/LMS'
    },
    {
      title: 'AFRS',
      description: 'AI Face Recognition System using Python and OpenCV for secure authentication and monitoring.',
      icon: Eye,
      tags: ['Python', 'OpenCV', 'AI', 'Computer Vision'],
      gradient: 'from-green-500 to-emerald-600',
      live: 'https://sample.vercel.app',
      code: 'https://github.com/Yugananthanpalani/face-recognition-system'
    },
    {
      title: 'Smart Expense Tracker',
      description: 'Intelligent expense tracking application with automated categorization and budget management features.',
      icon: DollarSign,
      tags: ['React', 'Node.js', 'MongoDB', 'Analytics'],
      gradient: 'from-orange-500 to-red-600',
      live: 'https://smartexp.vercel.app',
      code: 'https://github.com/Yugananthanpalani/smart-book'
    },
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <div className="h-1 w-16 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 p-6 shadow-xl hover:bg-white/10 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${project.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                <project.icon className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                {project.title}
              </h3>

              <p className="text-gray-300 mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-sm border border-cyan-500/30"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 text-sm font-medium"
                >
                  <ExternalLink size={16} />
                  Live Demo
                </a>
                <a
                  href={project.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 border border-gray-600 text-gray-300 rounded-lg hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300 text-sm font-medium"
                >
                  <Github size={16} />
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
