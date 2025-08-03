import React from 'react';
import { Code, Cloud, Database, Award } from 'lucide-react';

const About = () => {
  const skills = [
    { icon: Code, name: 'Programming', skills: 'Java, Python, C#' },
    { icon: Cloud, name: 'Cloud Platforms', skills: 'AWS, Google Cloud' },
    { icon: Database, name: 'Databases', skills: 'SQL, MongoDB' },
    { icon: Award, name: 'Certifications', skills: 'CEH, Google Digital Marketing' },
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className="h-1 w-16 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* About Text */}
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 p-8 shadow-xl">
            <h3 className="text-2xl font-semibold mb-6 text-cyan-400">Hello, I'm Yugananthan</h3>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                I'm a Full Stack Developer from Tamil Nadu, India, passionate about creating 
                innovative digital solutions that make a difference.
              </p>
              <p>
                With extensive experience in Java, Python, C#, AWS, Google Cloud, SQL, and MongoDB, 
                I specialize in building scalable web applications and cloud-based solutions.
              </p>
              <p>
                Currently pursuing B.E in Computer Science and Engineering (2022-2026) from 
                Dhanalakshmi College of Engineering, Chennai. I hold certifications in CEH 
                (Certified Ethical Hacker) and Google Digital Marketing.
              </p>
            </div>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-lg rounded-xl border border-white/10 p-6 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 shadow-xl group"
              >
                <skill.icon className="w-8 h-8 text-cyan-400 mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h4 className="font-semibold text-white mb-2">{skill.name}</h4>
                <p className="text-gray-400 text-sm">{skill.skills}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Education Card */}
        <div className="mt-12 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur-lg rounded-2xl border border-cyan-400/20 p-8 shadow-xl">
          <h3 className="text-xl font-semibold text-cyan-400 mb-2">Education</h3>
          <h4 className="text-lg font-medium text-white mb-1">B.E in Computer Science and Engineering</h4>
          <p className="text-gray-300">Dhanalakshmi College of Engineering, Chennai</p>
          <p className="text-gray-400 text-sm">2022 - 2026</p>
        </div>
      </div>
    </section>
  );
};

export default About;