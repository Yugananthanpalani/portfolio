import { useEffect, useRef, useState } from 'react';
import { Briefcase } from 'lucide-react';

export default function Experience() {
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

  const experiences = [
    {
      title: 'Freelancer',
      company: "Yuga's Project Hub",
      period: '2024 – Present',
    },
    {
      title: 'Java Full-Stack Developer',
      company: 'Zidio Development',
      period: 'Jul – Aug 2025',
    },
    {
      title: 'Full-Stack Developer',
      company: 'OneYes Infotech Solutions',
      period: 'Feb – Mar 2025',
    },
    {
      title: 'Software Developer',
      company: 'Candance System Inc.',
      period: 'Dec 2024 – Feb 2025',
    },
    {
       title: 'Software Developer',
      company: 'Flowbit AI',
      period: 'Aug – Sep 2025',
    },
  ];

  return (
    <section id="experience" className="py-20 px-4" ref={sectionRef}>
      <div className="max-w-4xl mx-auto">
        <h2
          className={`text-4xl md:text-5xl font-bold mb-12 text-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          Experience
        </h2>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div
              key={exp.company}
              className={`glass p-6 rounded-2xl glow-hover transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex gap-4">
                <div className="glass p-3 rounded-lg h-fit">
                  <Briefcase size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-1">{exp.title}</h3>
                  <p className="text-gray-700 mb-2">{exp.company}</p>
                  <p className="text-sm text-gray-500">{exp.period}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
