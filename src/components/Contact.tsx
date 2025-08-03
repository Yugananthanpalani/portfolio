import React from 'react';
import { Mail, Linkedin, Globe, Github, Download, Send } from 'lucide-react';

const Contact = () => {
  const contactLinks = [
    {
      icon: Mail,
      label: 'Email',
      value: 'yugananthanpalani@gmail.com',
      href: 'mailto:yugananthanpalani@gmail.com',
      color: 'from-red-500 to-pink-600',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/yugananthan',
      href: 'https://www.linkedin.com/in/yugananthan/',
      color: 'from-blue-600 to-blue-800',
    },
    {
      icon: Globe,
      label: 'Portfolio',
      value: 'yugananthan.tech',
      href: 'https://yugananthan.tech/',
      color: 'from-green-500 to-emerald-600',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/yugananthan',
      href: 'https://github.com/Yugananthanpalani',
      color: 'from-gray-600 to-gray-800',
    },
  ];

  const downloadResume = () => {
    // Replace with actual resume file URL
    window.open('https://drive.google.com/file/d/1rHuovFO3dVB1xjx4gutDUtloKkAHeVAR/view?usp=sharing');
  };

  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-t from-cyan-900/10 to-transparent">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <div className="h-1 w-16 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Ready to collaborate on your next project? Let's connect and build something amazing together.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Contact Cards */}
          <div className="space-y-6">
            {contactLinks.map((contact, index) => (
              <a
                key={index}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-white/5 backdrop-blur-lg rounded-xl border border-white/10 p-6 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 shadow-xl"
              >
                <div className="flex items-center space-x-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${contact.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <contact.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white group-hover:text-cyan-400 transition-colors duration-300">
                      {contact.label}
                    </h3>
                    <p className="text-gray-400 text-sm">{contact.value}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Resume Download Section */}
          <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-lg rounded-2xl border border-cyan-400/20 p-8 shadow-xl">
            <div className="text-center">
              <h3 className="text-2xl font-semibold text-white mb-4">Download Resume</h3>
              <p className="text-gray-300 mb-8">
                Get a detailed overview of my experience, skills, and achievements.
              </p>
              <button
                onClick={downloadResume}
                className="group bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 flex items-center gap-3 mx-auto"
              >
                <Download size={20} className="group-hover:animate-bounce" />
                Download Resume
              </button>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 p-8 shadow-xl">
          <h3 className="text-2xl font-semibold text-white mb-4">Ready to Start a Project?</h3>
          <p className="text-gray-300 mb-6">
            Let's discuss how we can bring your ideas to life with cutting-edge technology.
          </p>
          <a
            href="mailto:yugananthanpalani@gmail.com"
            className="group inline-flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
          >
            <Send size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
            Send Message
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-20 pt-8 border-t border-white/10 text-center">
        <p className="text-gray-400">
          © 2025 Yugananthan Palani. All rights reserved. 
        </p>
      </footer>
    </section>
  );
};

export default Contact;