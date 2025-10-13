import { useEffect, useRef, useState } from 'react';
import { Mail, Send } from 'lucide-react';

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:yugananthanpalani@gmail.com?subject=Portfolio Contact from ${formData.name}&body=${formData.message}%0A%0AFrom: ${formData.name} (${formData.email})`;
    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" className="py-20 px-4" ref={sectionRef}>
      <div className="max-w-4xl mx-auto">
        <h2
          className={`text-4xl md:text-5xl font-bold mb-12 text-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          Get In Touch
        </h2>
        <div
          className={`glass p-8 md:p-12 rounded-2xl glow transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 glass rounded-lg focus:outline-none focus:ring-2 focus:ring-black/20 transition-all"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 glass rounded-lg focus:outline-none focus:ring-2 focus:ring-black/20 transition-all"
                placeholder="your.email@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={5}
                className="w-full px-4 py-3 glass rounded-lg focus:outline-none focus:ring-2 focus:ring-black/20 transition-all resize-none"
                placeholder="Your message..."
              />
            </div>
            <button
              type="submit"
              className="w-full glass glow-hover px-6 py-3 rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-black/10 transition-all"
            >
              <Send size={20} />
              Send Message
            </button>
          </form>

          <div className="mt-8 pt-8 border-t border-black/10 text-center">
            <a
              href="mailto:yugananthanpalani@gmail.com"
              className="inline-flex items-center gap-2 text-gray-600 hover:text-black transition-colors"
            >
              <Mail size={20} />
              yugananthanpalani@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
