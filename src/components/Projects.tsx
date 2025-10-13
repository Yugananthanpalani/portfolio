import { useEffect, useRef, useState } from 'react';
import { ExternalLink } from 'lucide-react';

export default function Projects() {
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

  const projects = [
    {
      title: 'HireConnect',
      description: 'Hiring platform connecting vendors and trainers',
      link: 'https://hirecon.vercel.app',
      image: 'https://ik.imagekit.io/ul4fxruo1/Hireconnect.png?updatedAt=1760361681326',
    },
    {
      title: 'LMS (Web Weave)',
      description: 'Learning platform with compiler and video lectures',
      link: 'https://webweavelms.vercel.app',
      image: 'https://ik.imagekit.io/ul4fxruo1/ww?updatedAt=1756017253643',
    },
    {
      title: 'Anuppalam',
      description: 'Android file-sharing app',
      link: 'https://anuppalam.example.com',
      image: 'https://ik.imagekit.io/ul4fxruo1/Anuppalam?updatedAt=1756017973212g',
    },
    {
      title: 'Vivasayi AI App',
      description: 'AI farming insights tool',
      link: 'https://vivasayi-ai.example.com',
      image: 'https://ik.imagekit.io/ul4fxruo1/viv?updatedAt=1756018188118',
    },
    {
      title: 'SmartExp',
      description: 'Expense tracker with analytics',
      link: 'https://smartexp.example.com',
      image: 'https://ik.imagekit.io/ul4fxruo1/smart?updatedAt=1756018318940',
    },
    {
      title: 'GoalMaster',
      description: 'Gamified goal tracker built with React Native',
      link: 'https://goalmaster.vercel.app',
      image: 'https://ik.imagekit.io/ul4fxruo1/gm?updatedAt=1756018521808',
    },
    {
      title: 'AI Assistant (Sara)',
      description: 'AI-powered personal assistant with speech, text, and PWA',
      link: 'https://aisara.vercel.app',
      image: 'https://ik.imagekit.io/ul4fxruo1/Sara%20Baner.png?updatedAt=1753964173462',
    },
    {
      title: 'Ezhuthu',
      description: 'AI Powered personal Notes taker Application',
      link: 'https://ezhuthu.vercel.app',
      image: 'https://ik.imagekit.io/ul4fxruo1/ChatGPT%20Image%20Aug%2024,%202025,%2012_17_15%20PM.png?updatedAt=1756018055692',
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-gradient-to-b from-white to-gray-50" ref={sectionRef}>
      <div className="max-w-6xl mx-auto">
        <h2
          className={`text-4xl md:text-5xl font-bold mb-12 text-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`glass p-6 rounded-2xl glow-hover transition-all duration-1000 group cursor-pointer ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="mb-4">
                <div className="w-full h-50 bg-gray-100 rounded-xl overflow-hidden flex items-center justify-center mb-4">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-semibold group-hover:text-gray-600 transition-colors">
                    {project.title}
                  </h3>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={e => e.stopPropagation()}
                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                    aria-label={`Visit ${project.title}`}
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
              <p className="text-gray-600">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
