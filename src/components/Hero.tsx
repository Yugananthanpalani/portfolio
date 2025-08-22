import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const downloadResume = () => {
    // Create a download link for resume
    const link = document.createElement('a');
    link.href = '/Files/Yugananthan_Resume.pdf';
    link.download = 'Yugananthan_Resume.pdf';
    link.click();
  };

  return (
    <section id="hero" className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="text-center max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-black mb-6 leading-tight"
        >
          Hi, I'm Yugananthan<br />
          <span className="text-gray-700">Software Developer</span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-gray-600 mb-12 max-w-2xl mx-auto"
        >
          Building modern, scalable, and secure applications
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-6 justify-center"
        >
          <button
            onClick={() => scrollToSection('projects')}
            className="bg-black text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-black border-2 border-black transition-all duration-300 transform hover:scale-105"
          >
            View Projects
          </button>
          
          <button
            onClick={downloadResume}
            className="bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-black hover:text-white border-2 border-black transition-all duration-300 transform hover:scale-105"
          >
            Download Resume
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;