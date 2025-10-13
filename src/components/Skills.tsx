import { useEffect, useRef, useState } from 'react';
import { Code2, Wrench, Cloud, Sparkles } from 'lucide-react';

export default function Skills() {
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

  const skillCategories = [
    {
      icon: <Code2 size={32} />,
      title: 'Programming',
      skills: ['Java', 'Python', 'C#', 'JavaScript', 'TypeScript', 'React', 'Node.js', 'SQL', 'MongoDB'],
    },
    {
      icon: <Wrench size={32} />,
      title: 'Frameworks & Tools',
      skills: ['React.js', 'Node.js', 'TypeScript', 'Firebase', 'Android Studio'],
    },
    {
      icon: <Cloud size={32} />,
      title: 'Cloud',
      skills: ['AWS', 'Google Cloud'],
    },
    {
      icon: <Sparkles size={32} />,
      title: 'Other',
      skills: ['DSA', 'Cybersecurity', 'Digital Marketing'],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4" ref={sectionRef}>
      <div className="max-w-6xl mx-auto">
        <h2
          className={`text-4xl md:text-5xl font-bold mb-12 text-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          Skills
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className={`glass p-8 rounded-2xl glow-hover transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="glass p-3 rounded-lg">{category.icon}</div>
                <h3 className="text-2xl font-semibold">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 glass rounded-full text-sm hover:bg-black/10 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
