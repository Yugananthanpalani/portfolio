import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { 
  Menu, 
  X, 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink,
  Code,
  Server,
  Database,
  Cloud,
  Smartphone,
  Globe
} from 'lucide-react';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  category: string;
  demoUrl: string | null;
}

interface Experience {
  title: string;
  company: string;
  period: string;
  type: string;
}

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const skills = [
    { name: 'Java', icon: <Code className="w-8 h-8" />, category: 'Backend' },
    { name: 'Python', icon: <Code className="w-8 h-8" />, category: 'Backend' },
    { name: 'C#', icon: <Code className="w-8 h-8" />, category: 'Backend' },
    { name: 'React', icon: <Globe className="w-8 h-8" />, category: 'Frontend' },
    { name: 'Node.js', icon: <Server className="w-8 h-8" />, category: 'Backend' },
    { name: 'AWS', icon: <Cloud className="w-8 h-8" />, category: 'Cloud' },
    { name: 'Google Cloud', icon: <Cloud className="w-8 h-8" />, category: 'Cloud' },
    { name: 'SQL', icon: <Database className="w-8 h-8" />, category: 'Database' },
    { name: 'MongoDB', icon: <Database className="w-8 h-8" />, category: 'Database' },
    { name: 'API Development', icon: <Server className="w-8 h-8" />, category: 'Backend' }
  ];

  const projects: Project[] = [
    {
      title: 'WebWeave',
      description: 'Modern Learning Management System with interactive features, built with React, Node.js, and MongoDB.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
      category: 'Web App',
      demoUrl: 'https://webweavelms.vercel.app'
    },
    {
      title: 'Anuppalam',
      description: 'Secure file transfer application using Node.js and WebRTC for peer-to-peer communication.',
      technologies: ['Node.js', 'WebRTC', 'Socket.io', 'Security'],
      category: 'Web App',
      demoUrl: 'https://github.com/Yugananthanpalani/Exchange'
    },
    {
      title: 'Ezhuthu',
      description: 'Offline-first notes application using React and IndexedDB for seamless offline functionality.',
      technologies: ['React', 'IndexedDB', 'PWA', 'Offline-first'],
      category: 'Web App',
      demoUrl: 'https://ezhuthu.vercel.app'
    },
    {
      title: 'Vivasayi AI',
      description: 'AI-powered farming solution using Next.js and Machine Learning for crop optimization.',
      technologies: ['Next.js', 'Machine Learning', 'AI', 'Agriculture'],
      category: 'AI',
      demoUrl: 'https://vivasayi.vercel.app'
    },
    {
      title: 'SmartExp',
      description: 'Intelligent expense tracker using React and Firebase with automated categorization.',
      technologies: ['React', 'Firebase', 'Real-time DB', 'Analytics'],
      category: 'Mobile',
      demoUrl: 'https://smartexp.vercel.app'
    },
    {
      title: 'GoalMaster',
      description: 'Gamified goal tracking app using React Native and Redux with achievement systems.',
      technologies: ['React Native', 'Redux', 'Gamification', 'Mobile'],
      category: 'Mobile',
      demoUrl: 'https://goalmaster.vercel.app'
    },
    {
      title: 'Sara AI',
      description: 'AI assistant using Python, FastAPI, WebSockets, LiveKit with advanced natural language processing capabilities.',
      technologies: ['Python', 'FastAPI', 'WebSockets', 'LiveKit', 'AI/ML'],
      category: 'AI',
      demoUrl: 'https://aisara.vercel.app/v2'
    }
  ];

  const experiences: Experience[] = [
    {
      title: 'Salesforce Developer Intern',
      company: 'Candance System Inc.',
      period: 'Jan 2025 – Apr 2025',
      type: 'Internship'
    },
    {
      title: 'Software Developer Intern',
      company: 'Candance System Inc.',
      period: 'Dec 2024 – Feb 2025',
      type: 'Internship'
    },
    {
      title: 'Full Stack Developer Intern',
      company: 'OneYes Info Tech Solutions',
      period: 'Feb 2025 – Mar 2025',
      type: 'Internship'
    },
    {
      title: 'Java Full Stack Developer Intern',
      company: 'Zidio Development',
      period: 'Jul 2025 – Aug 2025',
      type: 'Internship'
    },
    {
      title: 'Full Stack Developer Intern',
      company: 'Octanet Pvt. Ltd',
      period: 'Sep 2023 – Nov 2023',
      type: 'Internship'
    }
  ];

  const navItems = ['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.toLowerCase());
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element && scrollPosition >= element.offsetTop) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-sky-400 origin-left z-50"
        style={{ scaleX }}
      />

      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm border-b border-gray-200 z-40"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold bg-gradient-to-r from-sky-400 to-blue-600 bg-clip-text text-transparent"
            >
              Yugananthan Palani
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <motion.button
                  key={item}
                  whileHover={{ scale: 1.05 }}
                  onClick={() => scrollToSection(item)}
                  className={`relative px-3 py-2 text-sm font-medium transition-colors duration-300 ${
                    activeSection === item.toLowerCase()
                      ? 'text-sky-500'
                      : 'text-gray-700 hover:text-sky-500'
                  }`}
                  style={{
                    textShadow: activeSection === item.toLowerCase() ? '0 0 10px #0EA5E9' : 'none'
                  }}
                >
                  {item}
                  {activeSection === item.toLowerCase() && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-sky-400"
                      style={{ boxShadow: '0 0 10px #0EA5E9' }}
                    />
                  )}
                </motion.button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-gray-700 hover:text-sky-500 transition-colors duration-300"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white border-t border-gray-200"
          >
            {navItems.map((item) => (
              <motion.button
                key={item}
                whileHover={{ x: 10 }}
                onClick={() => scrollToSection(item)}
                className={`block w-full text-left px-4 py-3 text-sm font-medium transition-colors duration-300 ${
                  activeSection === item.toLowerCase()
                    ? 'text-sky-500 bg-sky-50'
                    : 'text-gray-700 hover:text-sky-500 hover:bg-gray-50'
                }`}
              >
                {item}
              </motion.button>
            ))}
          </motion.div>
        )}
      </motion.nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <motion.h1
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, delay: 0.2 }}
                  className="text-5xl md:text-7xl font-bold mb-6"
                  style={{ textShadow: '0 0 20px rgba(14, 165, 233, 0.3)' }}
                >
                  Hi, I'm{' '}
                  <span className="bg-gradient-to-r from-sky-400 to-blue-600 bg-clip-text text-transparent">
                    Yugananthan
                  </span>
                </motion.h1>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="text-xl md:text-2xl text-gray-600 mb-8 font-light"
                >
                 Software Developer | AI Enthusiast 
                </motion.p>
                
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: '0 0 25px rgba(14, 165, 233, 0.6)'
                  }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => window.open('https://hub.yugananthan.tech', '_blank')}
                  className="px-8 py-4 text-lg font-medium text-sky-500 border-2 border-sky-400 rounded-full hover:bg-sky-50 transition-all duration-300"
                  style={{ boxShadow: '0 0 15px rgba(14, 165, 233, 0.4)' }}
                >
                  View Hub
                </motion.button>
                
              </motion.div>
            </div>

            {/* Profile Image - Desktop Only */}
            <div className="hidden lg:flex justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="relative"
              >
                <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-sky-400 shadow-2xl"
                     style={{ boxShadow: '0 0 40px rgba(14, 165, 233, 0.4)' }}>
                  <img
                    src="https://ik.imagekit.io/ul4fxruo1/Yuga_Pose.png?updatedAt=1756459695797"
                    alt="Yugananthan -Software Developer"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Floating Elements */}
                <motion.div
                  animate={{ 
                    y: [0, -10, 0],
                    rotate: [0, 5, 0]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute -top-4 -right-4 w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center border-2 border-sky-400"
                  style={{ boxShadow: '0 0 20px rgba(14, 165, 233, 0.3)' }}
                >
                  <Code className="w-8 h-8 text-sky-500" />
                </motion.div>
                
                <motion.div
                  animate={{ 
                    y: [0, 10, 0],
                    rotate: [0, -5, 0]
                  }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                  className="absolute -bottom-4 -left-4 w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center border-2 border-sky-400"
                  style={{ boxShadow: '0 0 20px rgba(14, 165, 233, 0.3)' }}
                >
                  <Server className="w-8 h-8 text-sky-500" />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 
              className="text-4xl md:text-5xl font-bold mb-8"
              style={{ textShadow: '0 0 15px rgba(14, 165, 233, 0.3)' }}
            >
              About Me
            </h2>
            <div className="bg-white rounded-xl p-8 md:p-12 shadow-lg border border-gray-200">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-lg md:text-xl text-gray-700 leading-relaxed"
              >
                I'm a passionate Software Developer Developer with expertise in AI, Cloud, and scalable web & Mobile applications. 
                Currently pursuing B.E in Computer Science and Engineering at{' '}
                <span className="text-sky-500 font-semibold">Dhanalakshmi College of Engineering</span>{' '}
                (2022–2026). I love creating innovative solutions that bridge the gap between cutting-edge 
                technology and real-world problems.
              </motion.p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 
              className="text-4xl md:text-5xl font-bold mb-8"
              style={{ textShadow: '0 0 15px rgba(14, 165, 233, 0.3)' }}
            >
              Skills
            </h2>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: '0 0 25px rgba(14, 165, 233, 0.4)'
                }}
                className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 text-center group hover:border-sky-400 transition-all duration-300"
              >
                <div className="flex justify-center mb-4 text-gray-600 group-hover:text-sky-500 transition-colors duration-300">
                  {skill.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{skill.name}</h3>
                <p className="text-sm text-gray-500">{skill.category}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 
              className="text-4xl md:text-5xl font-bold mb-8"
              style={{ textShadow: '0 0 15px rgba(14, 165, 233, 0.3)' }}
            >
              Projects
            </h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: '0 0 30px rgba(14, 165, 233, 0.3)'
                }}
                className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 hover:border-sky-400 transition-all duration-300"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <span className="text-xs px-2 py-1 bg-sky-100 text-sky-700 rounded-full">
                    {project.category}
                  </span>
                </div>
                <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {project.demoUrl && (
                  <motion.a
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: '0 0 20px rgba(14, 165, 233, 0.5)'
                    }}
                    whileTap={{ scale: 0.95 }}
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-sky-500 border-2 border-sky-400 rounded-full hover:bg-sky-50 transition-all duration-300"
                    style={{ boxShadow: '0 0 10px rgba(14, 165, 233, 0.3)' }}
                  >
                    {project.title === 'Anuppalam' ? (
                      <>
                        <Github className="w-4 h-4" />
                        View Code
                      </>
                    ) : (
                      <>
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </>
                    )}
                  </motion.a>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 
              className="text-4xl md:text-5xl font-bold mb-8"
              style={{ textShadow: '0 0 15px rgba(14, 165, 233, 0.3)' }}
            >
              Experience
            </h2>
          </motion.div>
          
          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                <div className="flex items-center">
                  <div className="flex-shrink-0 w-4 h-4 bg-sky-400 rounded-full mr-4"
                       style={{ boxShadow: '0 0 15px rgba(14, 165, 233, 0.6)' }} />
                  <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 hover:border-sky-400 transition-all duration-300 flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold">{experience.title}</h3>
                      <span className="text-xs px-2 py-1 bg-sky-100 text-sky-700 rounded-full">
                        {experience.type}
                      </span>
                    </div>
                    <p className="text-sky-600 font-semibold mb-2">{experience.company}</p>
                    <p className="text-gray-500 text-sm">{experience.period}</p>
                  </div>
                </div>
                {index < experiences.length - 1 && (
                  <div className="w-0.5 bg-gradient-to-b from-sky-400 to-transparent h-8 ml-2 mt-4" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 
              className="text-4xl md:text-5xl font-bold mb-8"
              style={{ textShadow: '0 0 15px rgba(14, 165, 233, 0.3)' }}
            >
              Get In Touch
            </h2>
            
            <div className="bg-white rounded-xl p-8 md:p-12 shadow-lg border border-gray-200">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-lg text-gray-600 mb-8"
              >
                I'm always open to discussing new opportunities and interesting projects.
              </motion.p>
              
              <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
                <motion.a
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: '0 0 25px rgba(14, 165, 233, 0.4)'
                  }}
                  whileTap={{ scale: 0.95 }}
                  href="mailto:yugananthanpalani@gmail.com"
                  className="flex items-center gap-3 px-6 py-3 bg-sky-500 text-white rounded-full hover:bg-sky-600 transition-all duration-300"
                  style={{ boxShadow: '0 0 15px rgba(14, 165, 233, 0.3)' }}
                >
                  <Mail className="w-5 h-5" />
                  Email Me
                </motion.a>
                
                <motion.a
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: '0 0 25px rgba(14, 165, 233, 0.4)'
                  }}
                  whileTap={{ scale: 0.95 }}
                  href="https://www.linkedin.com/in/yugananthan/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-6 py-3 border-2 border-sky-400 text-sky-500 rounded-full hover:bg-sky-50 transition-all duration-300"
                  style={{ boxShadow: '0 0 15px rgba(14, 165, 233, 0.2)' }}
                >
                  <Linkedin className="w-5 h-5" />
                  LinkedIn
                </motion.a>
                
                <motion.a
                  whileHover={{ 
                  scale: 1.05,
                  boxShadow: '0 0 25px rgba(14, 165, 233, 0.4)'
                  }}
                  whileTap={{ scale: 0.95 }}
                  href="https://yugananthan.tech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-6 py-3 border-2 border-sky-400 text-sky-500 rounded-full hover:bg-sky-50 transition-all duration-300"
                  style={{ boxShadow: '0 0 15px rgba(14, 165, 233, 0.2)' }}
                >
                  <ExternalLink className="w-5 h-5" />
                  Portfolio
                </motion.a>

                <motion.a
                  whileHover={{ 
                  scale: 1.05,
                  boxShadow: '0 0 25px rgba(14, 165, 233, 0.4)'
                  }}
                  whileTap={{ scale: 0.95 }}
                  href="/resume.pdf"
                  download="Yugananthan_Resume.pdf"
                  className="flex items-center gap-3 px-6 py-3 border-2 border-sky-400 text-sky-500 rounded-full hover:bg-sky-50 transition-all duration-300"
                  style={{ boxShadow: '0 0 15px rgba(14, 165, 233, 0.2)' }}
                >
                  <ExternalLink className="w-5 h-5" />
                  Download Resume
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-600">
            © 2025 Yugananthan Palani
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;