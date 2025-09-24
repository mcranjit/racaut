import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Team from './components/Team';
import Membership from './components/Membership';
import Gallery from './components/Gallery';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [currentSection, setCurrentSection] = useState('home');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Wait for loading to complete before setting up observers
    if (!isLoading) {
      // Intersection Observer for section detection
      const sections = document.querySelectorAll('section[id]');
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && entry.intersectionRatio > 0.3) {
              setCurrentSection(entry.target.id);
            }
          });
        },
        { threshold: 0.3, rootMargin: '-100px 0px -100px 0px' }
      );

      sections.forEach((section) => observer.observe(section));
      
      // Scroll reveal animation
      const revealElements = document.querySelectorAll('.scroll-reveal');
      const revealObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('revealed');
            }
          });
        },
        { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
      );

      revealElements.forEach((el) => revealObserver.observe(el));
      
      return () => {
        observer.disconnect();
        revealObserver.disconnect();
      };
    }
  }, [isLoading]);

  const handleSectionChange = (section: string) => {
    setCurrentSection(section);
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else if (section === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleJoinClick = () => {
    setCurrentSection('membership');
    const element = document.getElementById('membership');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Loading Screen
 if (isLoading) {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-red-600 flex items-center justify-center z-50">
      <div className="text-center text-white">
        {/* Logo Animation */}
        <div className="relative mb-8">
          <div className="relative w-24 h-24 flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 rounded-full blur-3xl opacity-70 animate-pulse"></div>
            <div className="relative z-10 w-20 h-20 bg-white/20 rounded-full flex items-center justify-center shadow-lg">
              <img
                src="img/logo1.png"
                alt="Logo"
                className="w-16 h-16 animate-spin-slow"
              />
            </div>
          </div>
        </div>

        {/* Animated Loading Text */}
        <div className="text-lg font-semibold tracking-wide uppercase">
          Loading<span className="animate-ellipsis">...</span>
        </div>

        {/* Dot Animation */}
        <div className="mt-6 flex justify-center">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="w-4 h-4 bg-white/70 rounded-full animate-bounce"
              style={{ animationDelay: `${i * 0.3}s` }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}


  return (
    <div className="min-h-screen bg-white smooth-scroll">
      <Header currentSection={currentSection} onSectionChange={handleSectionChange} />
      <main>
        <section id="home">
          <Hero onJoinClick={handleJoinClick} />
        </section>
        <About />
        <Projects />
        <Team />
        <Membership />
        <Gallery />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;