import { useEffect, useRef, useState } from 'react';
import { Award } from 'lucide-react';

export default function Certifications() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const certifications = [
    'AWS - AWS Academy Cloud Foundations',
    'Google Cloud - Google ',
    'SQL - Infosys ',
    'Cloud & DevOps - Google ',
    'Digital Marketing - Google ',
    'Data Analyst - Flipkart Academy',
    'MongoDB - MongoDB University',
    'Python Mastering - Infosys Springboard Learning',
    'OCI Associate - Oracle',
  ];

  return (
    <section id="certifications" className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white" ref={sectionRef}>
      <div className="max-w-4xl mx-auto">
        <h2
          className={`text-4xl md:text-5xl font-bold mb-12 text-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          Certifications
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={cert}
              className={`glass p-6 rounded-2xl glow-hover transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center gap-4">
                <div className="glass p-3 rounded-lg">
                  <Award size={24} />
                </div>
                <p className="text-lg font-medium">{cert}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
