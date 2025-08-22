import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const certifications = [
    'OCI Associate Foundations (Oracle)',
    'Certified Ethical Hacker (CEH)',
    'Google Certified Digital Marketing',
    'Google Cloud Certified'
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-8">About Me</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              I'm a passionate Software Developer from Tamil Nadu, India, with expertise in Java, Python, C#, AWS, Google Cloud, SQL, and MongoDB. Currently pursuing B.E CSE (2022-2026) at Dhanalakshmi College of Engineering.
            </p>
            
            <p className="text-gray-600 text-base leading-relaxed">
              I love creating innovative solutions that solve real-world problems and constantly learning new technologies to stay ahead in this ever-evolving field.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-black mb-6">Certifications</h3>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-100 border border-gray-300 rounded-lg p-4 hover:border-gray-500 transition-colors duration-300"
                >
                  <p className="text-gray-700 font-medium">{cert}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;