import { useEffect, useRef, useState } from 'react';

export default function About() {
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

  return (
    <section id="about" className="py-20 px-4" ref={sectionRef}>
      <div className="max-w-4xl mx-auto">
        <h2
          className={`text-4xl md:text-5xl font-bold mb-12 text-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          About Me
        </h2>
        <div
          className={`glass p-8 md:p-12 rounded-2xl glow transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            Software Developer with experience in web, mobile, and cloud solutions. Skilled in Java, Python, C#, AWS, Google Cloud, SQL, and MongoDB. Strong in building scalable applications, AI integration, and secure solutions.
          </p>
          <div className="mt-8 pt-8 border-t border-black/10">
            <p className="text-gray-500">
              Based in Tamil Nadu, India
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
