import React from 'react';
import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin, Heart, Globe, Users } from 'lucide-react';

const Footer: React.FC = () => {
  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Projects & Events', href: '#projects' },
    { name: 'Team', href: '#team' },
    { name: 'Membership', href: '#membership' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' }
  ];

  const serviceAreas = [
    'Community Development',
    'Education & Literacy',
    'Environment Conservation',
    'Health & Wellness',
    'Youth Development',
    'Emergency Relief'
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Club Information */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-red-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">R</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Rotaract Club</h3>
                  <p className="text-gray-300 text-sm">Anna University, Trichy</p>
                </div>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Empowering youth through service, fellowship, and leadership development. 
                Join us in making a positive impact in our community and beyond.
              </p>
              
              {/* Key Stats */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400">500+</div>
                  <div className="text-xs text-gray-400">Members</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-400">50+</div>
                  <div className="text-xs text-gray-400">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-400">10+</div>
                  <div className="text-xs text-gray-400">Years</div>
                </div>
              </div>

              {/* Social Media */}
              <div className="flex space-x-4">
                <a href="https://www.instagram.com/racaut13?igsh=eWMzc3JhcGRwODli" className="bg-gray-800 p-2 rounded-lg hover:bg-blue-600 transition-colors">
                  <Instagram size={20} />
                </a>
                <a href="https://www.facebook.com/share/1C7UpsW1hR/" className="bg-gray-800 p-2 rounded-lg hover:bg-blue-600 transition-colors">
                  <Facebook size={20} />
                </a>
                <a href="https://www.linkedin.com/company/racaut13/" className="bg-gray-800 p-2 rounded-lg hover:bg-blue-600 transition-colors">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href} 
                      className="text-gray-300 hover:text-white transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Service Areas */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Service Areas</h4>
              <ul className="space-y-3">
                {serviceAreas.map((area, index) => (
                  <li key={index} className="text-gray-300 text-sm flex items-center space-x-2">
                    <Heart size={12} className="text-red-400" />
                    <span>{area}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Information */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin size={16} className="text-blue-400 mt-1" />
                  <div>
                    <p className="text-gray-300 text-sm">University College of Engineering, BIT Campus, Anna University, Tiruchirappalli – 620 024</p>
                    <p className="text-gray-400 text-xs">Tamil Nadu, India</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail size={16} className="text-blue-400" />
                  <a href="mailto:rotaractclubofaut@gmail.com" className="text-gray-300 text-sm hover:text-white transition-colors">
                    rotaractclubofaut@gmail.com
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone size={16} className="text-blue-400" />
                  <a href="tel:+919865129019" className="text-gray-300 text-sm hover:text-white transition-colors">
                    +91 98651 29019
                  </a>
                </div>
              </div>

              {/* Meeting Times */}
              <div className="mt-6 p-4 bg-gray-800 rounded-lg">
                <h5 className="font-semibold text-white mb-2">Meeting Times</h5>
                <p className="text-gray-300 text-sm">Every 2nd Saturday</p>
                <p className="text-gray-400 text-xs">6:00 PM - 8:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        {/* Rotaract Values */}
        <div className="py-8 border-t border-gray-800">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center space-y-3">
              <div className="bg-blue-600 p-3 rounded-full">
                <Heart size={24} />
              </div>
              <div>
                <h5 className="font-semibold">Service Above Self</h5>
                <p className="text-gray-400 text-sm">Putting community needs first</p>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-3">
              <div className="bg-red-600 p-3 rounded-full">
                <Users size={24} />
              </div>
              <div>
                <h5 className="font-semibold">Fellowship</h5>
                <p className="text-gray-400 text-sm">Building lasting friendships</p>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-3">
              <div className="bg-orange-600 p-3 rounded-full">
                <Globe size={24} />
              </div>
              <div>
                <h5 className="font-semibold">International Understanding</h5>
                <p className="text-gray-400 text-sm">Promoting world peace</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              <p>&copy; 2025 Rotaract Club of Anna University, Trichy. All rights reserved.</p>
            </div>
            <div className="flex items-center space-x-6 text-gray-400 text-sm">
              <a href="https://www.linkedin.com/in/ranjithmc/" className="hover:text-white transition-colors">Design & Developed By Ranjith M C</a>
            </div>
          </div>
          <div className="mt-4 text-center">
            <p className="text-gray-500 text-xs">
              Rotaract is a program of Rotary International | District 3000 | 
              <a href="https://rotary.org" className="text-blue-400 hover:text-blue-300 ml-1">Learn more about Rotary</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;