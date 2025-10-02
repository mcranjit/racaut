import React, { useState, useEffect } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';

interface HeroProps {
  onJoinClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onJoinClick }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  const slides = [
    {
      title: "Empowering Youth",
      subtitle: "Transforming Communities",
      description:
        "Join the Rotaract Club of Anna University, Trichy - where young leaders come together to create positive change through service, fellowship, and leadership development.",
      image: "https://i.ibb.co/BHGK6bRk/c343e82d-1438-4fb4-b2bf-ec62a078337a.jpg",
      gradient: "from-blue-600 via-blue-700 to-red-600",
    },
    {
      title: "Building Leaders",
      subtitle: "Creating Impact",
      description:
        "Develop essential leadership skills while making a meaningful difference in your community and beyond.",
      image: "https://i.ibb.co/5xkKvfJq/5e4579db-4d76-45c9-ba93-467af0b369cb.jpg",
      gradient: "from-purple-600 via-pink-600 to-red-600",
    },
    {
      title: "Global Network",
      subtitle: "Local Action",
      description:
        "Connect with Rotaractors worldwide while addressing local community needs and challenges.",
      image: "https://i.ibb.co/Q7YpgxHY/2cad6221-9680-4cee-acd2-bd983be98101.jpg",
      gradient: "from-green-600 via-teal-600 to-blue-600",
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX - window.innerWidth / 2) / window.innerWidth,
        y: (e.clientY - window.innerHeight / 2) / window.innerHeight,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const parallaxStyle = {
    transform: `perspective(1200px) rotateX(${-mousePosition.y * 20}deg) rotateY(${mousePosition.x * 20}deg) translateZ(50px)`,
    transition: 'transform 0.15s ease-out',
  };

  const imageContainerStyle = {
    transform: `perspective(1000px) scale3d(${isVisible ? 1 : 0.95},${isVisible ? 1 : 0.95},1) rotateX(${-mousePosition.y * 7}deg) rotateY(${mousePosition.x * 7}deg)`,
    transition: 'transform 0.35s ease',
    transformStyle: 'preserve-3d' as const,
  };

  return (
    <section
      className="relative min-h-screen overflow-hidden px-4 md:px-8 flex items-center justify-center"
      style={{ perspective: '1400px' }}
    >
      {/* Gradient + Particles */}
      <div className="absolute inset-0 z-0" style={{ transformStyle: 'preserve-3d' }}>
        <div
          className={`absolute inset-0 bg-gradient-to-br ${slides[currentSlide].gradient} transition-all duration-2000`}
        />
        <div className="absolute inset-0 bg-black/40" />
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
              transformStyle: 'preserve-3d',
            }}
          />
        ))}
      </div>

      <div className="relative z-10 w-full mt-20 md:mt-24 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Left Text with 3D tilt */}
        <div
          className={`text-white space-y-6 ${isVisible ? 'animate-fadeInLeft' : 'opacity-0'}`}
          style={parallaxStyle}
        >
          <span className="inline-block bg-orange-500/20 border border-orange-300/30 text-orange-200 px-4 py-2 rounded-full text-sm font-medium hover-glow select-none">
            🌟 Join 500+ Active Members
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            <span className="block">{slides[currentSlide].title}</span>
            <span className="block text-orange-300 bg-gradient-to-r from-orange-300 to-yellow-300 bg-clip-text text-transparent animate-pulse-glow">
              {slides[currentSlide].subtitle}
            </span>
          </h1>
          <p className="text-lg text-blue-100 leading-relaxed max-w-xl">
            {slides[currentSlide].description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={onJoinClick}
              className="group bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-6 py-3 rounded-2xl font-semibold flex items-center justify-center space-x-2 transition-transform hover:scale-105 shadow-xl"
            >
              <span>Join Our Movement</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Right Image with 3D scale and rotation */}
        <div
          className={`relative ${isVisible ? 'animate-fadeInRight' : 'opacity-0'}`}
          style={imageContainerStyle}
        >
          <div
            className="bg-white/10 backdrop-blur-lg rounded-3xl p-4 md:p-8 border border-white/20 shadow-2xl hover-lift"
            style={{ transformStyle: 'preserve-3d' }}
          >
            <div
              className="relative rounded-2xl overflow-hidden mb-6 group aspect-video w-full"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <img
                src={slides[currentSlide].image}
                alt={slides[currentSlide].title}
                className="w-full h-full object-cover rounded-2xl transition-transform duration-700 group-hover:scale-110 will-change-transform"
              />
            </div>

            {/* Stats with subtle hover and shadow */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "500+", label: "Active Members", progress: 80 },
                { value: "50+", label: "Projects", progress: 60 },
                { value: "10+", label: "Years Active", progress: 100 },
                { value: "1000+", label: "Lives Impacted", progress: 85 }
              ].map((stat, i) => (
                <div
                  key={i}
                  className="bg-white/10 rounded-xl p-4 border border-white/10 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-200 mb-2">{stat.label}</div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div
                      className="bg-white h-full rounded-full transition-all duration-1000"
                      style={{ width: `${stat.progress}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Pagination dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full ${
              currentSlide === index ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white'
            } transition-all`}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 right-4 md:right-8 text-white/70 flex flex-col items-center z-20 select-none">
        <span className="text-sm mb-2 hidden md:block rotate-90">Scroll</span>
        <div className="w-px h-8 bg-white/30 relative overflow-hidden">
          <div className="w-px h-3 bg-white animate-bounce absolute top-0"></div>
        </div>
        <ChevronDown size={16} className="mt-2 animate-bounce" />
      </div>

      {/* Animation styles */}
      <style>{`
        .animate-fadeInLeft {
          animation: fadeInLeft 0.8s ease forwards;
        }
        .animate-fadeInRight {
          animation: fadeInRight 0.8s ease forwards;
        }
        @keyframes fadeInLeft {
          from { opacity: 0; transform: translateX(-30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeInRight {
          from { opacity: 0; transform: translateX(30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-pulse-glow {
          animation: pulseGlow 2.5s infinite alternate ease-in-out;
        }
        @keyframes pulseGlow {
          0% {
            text-shadow:
              0 0 5px rgba(253, 186, 116, 0.7),
              0 0 15px rgba(253, 186, 116, 0.5);
          }
          100% {
            text-shadow:
              0 0 20px rgba(253, 186, 116, 1),
              0 0 30px rgba(253, 186, 116, 0.7);
          }
        }
        .hover-glow:hover {
          filter: drop-shadow(0 0 8px rgba(253, 186, 116, 0.9));
          transition: filter 0.3s ease;
        }
      `}</style>
    </section>
  );
};

export default Hero;
