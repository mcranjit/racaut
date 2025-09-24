import React, { useState, useEffect } from 'react';
import {
  Menu,
  X,
  Users,
  Calendar,
  Camera,
  MessageCircle,
  Phone,
  User,
  Home,
} from 'lucide-react';

interface HeaderProps {
  currentSection: string;
  onSectionChange: (section: string) => void;
}

const Header: React.FC<HeaderProps> = ({ currentSection, onSectionChange }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [scrollPercent, setScrollPercent] = useState(0);

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'about', label: 'About Us', icon: Users },
    { id: 'projects', label: 'Projects', icon: Calendar },
    { id: 'team', label: 'Team', icon: User },
    { id: 'membership', label: 'Membership', icon: Users },
    { id: 'gallery', label: 'Gallery', icon: Camera },
    { id: 'blog', label: 'Blog', icon: MessageCircle },
    { id: 'contact', label: 'Contact', icon: Phone },
  ];

  useEffect(() => {
    setIsVisible(true);

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      setIsScrolled(scrollY > 50);
      setScrollPercent(Math.min(100, (scrollY / totalHeight) * 100));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (section: string) => {
    onSectionChange(section);
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-lg shadow-xl'
          : 'bg-white/90 backdrop-blur-sm shadow'
      } ${isVisible ? 'animate-slideInDown' : 'opacity-0'}`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center py-3 md:py-4">
          {/* Logo */}
          <div className="flex items-center space-x-3 group">
            <div className="w-12 h-12">
              <img
                src="img/logo1.png"
                alt="Logo"
                className="w-12 h-12 object-contain"
              />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg md:text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                Rotaract Club
              </h1>
              <p className="text-xs md:text-sm text-gray-600 group-hover:text-red-600 transition-colors duration-300">
                Anna University, Trichy
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-2 items-center">
            {navItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`group flex items-center space-x-2 px-3 py-2 rounded-xl text-sm font-medium transition-all duration-300 hover-lift focus-ring ${
                  currentSection === item.id
                    ? 'text-white bg-gradient-to-r from-blue-600 to-red-600 shadow-md scale-105'
                    : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50/70'
                }`}
              >
                <item.icon size={16} className="group-hover:scale-110 transition-transform duration-300" />
                <span className="hidden xl:inline">{item.label}</span>
                <span className="xl:hidden">{item.label.split(' ')[0]}</span>
              </button>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 focus-ring"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden transition-all duration-500 overflow-hidden ${
            isMenuOpen ? 'max-h-96 opacity-100 pb-4' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="bg-white/90 backdrop-blur-lg rounded-2xl shadow-xl border border-white/50 p-4 space-y-2">
            {navItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`flex items-center space-x-3 w-full px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 hover-lift focus-ring ${
                  currentSection === item.id
                    ? 'text-white bg-gradient-to-r from-blue-600 to-red-600 shadow-md'
                    : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50/70'
                }`}
              >
                <item.icon size={18} />
                <span>{item.label}</span>
                {currentSection === item.id && (
                  <div className="ml-auto w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-200/50">
        <div
          className="h-full bg-gradient-to-r from-blue-600 to-red-600 transition-all duration-300"
          style={{ width: `${scrollPercent}%` }}
        ></div>
      </div>
    </header>
  );
};

export default Header;
