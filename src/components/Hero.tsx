import { Mail, Linkedin, Globe } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-white"
    >
      {/* Decorative Background Blurs */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-black/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-black/5 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-20">
          
          {/* Left Section - Text */}
          <div className="flex-1 text-center lg:text-left fade-in">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 tracking-tight">
              Yugananthan Palani
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-6">
              Software Developer | Full-Stack Developer
            </p>
            <p className="text-base sm:text-lg md:text-xl text-gray-500 mb-8 max-w-2xl mx-auto lg:mx-0">
              Building modern web, mobile, and AI-driven solutions.
            </p>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start gap-4 sm:gap-6 mb-6">
              <SocialIcon
                href="mailto:yugananthanpalani@gmail.com"
                label="Email"
                icon={<Mail size={22} />}
              />
              <SocialIcon
                href="https://linkedin.com/in/yugananthan"
                label="LinkedIn"
                icon={<Linkedin size={22} />}
              />
              <SocialIcon
                href="https://yugananthan.tech"
                label="Portfolio"
                icon={<Globe size={22} />}
              />
              <SocialIcon
                href="https://github.com/Yugananthanpalani"
                label="GitHub"
                icon={
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 2C6.477 2 2 6.484 2 12.012c0 4.428 2.867 8.184 6.839 9.525.5.092.682-.217.682-.483 0-.237-.009-.868-.013-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.091-.646.35-1.088.636-1.339-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.254-.446-1.274.098-2.656 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.382.202 2.402.099 2.656.64.7 1.028 1.595 1.028 2.688 0 3.847-2.337 4.695-4.566 4.944.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.579.688.481C19.135 20.192 22 16.44 22 12.012 22 6.484 17.523 2 12 2z" />
                  </svg>
                }
              />
            </div>

            {/* Buttons */}
            <div className="flex justify-center lg:justify-start gap-4">
              <ActionButton
                href="https://hub.yugananthan.tech"
                label="View HUB"
              />
              <ActionButton
                href="https://drive.google.com/file/d/1sD4WwUyPSc_CsSW04jRhGic7PWNB4wdi/view?usp=sharing"
                label="Download Resume"
                download
              />
            </div>
          </div>

          {/* Right Section - Image */}
          <div className="flex-shrink-0 fade-in">
            {/* Mobile: Icon */}
            <div className="block lg:hidden relative w-40 h-40 sm:w-48 sm:h-48 mx-auto">
              <div className="absolute inset-0 glass rounded-full glow" />
              <div className="absolute inset-0 flex items-center justify-center">
                <img
                  src="https://ik.imagekit.io/ul4fxruo1/yuga1.png?updatedAt=1760367969785"
                  alt="Yugananthan Palani"
                  className="w-32 h-32 sm:w-40 sm:h-40 rounded-full object-cover"
                />
              </div>
            </div>

            {/* Desktop: Image */}
            <div className="hidden lg:block relative w-full h-[32rem]">
              <img
                src="https://ik.imagekit.io/ul4fxruo1/yuga.png?updatedAt=1760367969457"
                alt="Yugananthan Palani"
                className="object-cover rounded-xl w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll-down indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-gray-500 hover:text-black transition-colors">
          ↓
        </a>
      </div>
    </section>
  );
}

/* --- Reusable Components --- */
const SocialIcon = ({
  href,
  icon,
  label,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="glass glow-hover p-3 sm:p-4 rounded-full transition-transform duration-300 hover:scale-110"
  >
    {icon}
  </a>
);

const ActionButton = ({
  href,
  label,
  download = false,
}: {
  href: string;
  label: string;
  download?: boolean;
}) => (
  <a
    href={href}
    {...(download ? { download: true } : {})}
    target={download ? undefined : "_blank"}
    rel={download ? undefined : "noopener noreferrer"}
    className="glass glow-hover px-6 py-3 rounded-full font-semibold text-base transition-transform duration-300 hover:scale-105 hover:bg-black/10"
  >
    {label}
  </a>
);
