import React from 'react';
import { Users, CheckCircle, ArrowRight, Star, Globe, Heart } from 'lucide-react';

const Membership: React.FC = () => {
  const benefits = [
    {
      icon: Star,
      title: "Leadership Development",
      description: "Develop essential leadership skills through hands-on experience"
    },
    {
      icon: Globe,
      title: "Global Network",
      description: "Connect with Rotaractors worldwide and build lifelong friendships"
    },
    {
      icon: Heart,
      title: "Community Impact",
      description: "Make a meaningful difference in your local and global community"
    },
    {
      icon: Users,
      title: "Professional Growth",
      description: "Enhance your resume and career prospects through service"
    }
  ];

  const requirements = [
    "Be between 18-30 years of age",
    "Be a student or young professional",
    "Demonstrate commitment to service",
    "Participate in club activities",
    "Maintain good academic/professional standing"
  ];

  return (
    <section id="membership" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Join Our Club</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Become part of a dynamic community dedicated to service, fellowship, and leadership
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Benefits & Requirements */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-8">Membership Benefits</h3>
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <benefit.icon className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">{benefit.title}</h4>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Membership Requirements</h3>
              <div className="space-y-3">
                {requirements.map((requirement, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="text-green-500" size={20} />
                    <span className="text-gray-700">{requirement}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Join Button Section */}
          <div className="bg-gradient-to-br from-blue-50 to-red-50 p-8 rounded-2xl flex flex-col justify-center items-center text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Join Us Today</h3>
            <p className="text-gray-700 mb-6">
              Fill out our quick Google Form to get started with your Rotaract journey.
            </p>
            <a
              href="https://forms.gle/zxadPANEWmzs8qbVA"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-gradient-to-r from-blue-600 to-red-600 text-white py-4 rounded-lg font-semibold flex items-center justify-center space-x-2 hover:from-blue-700 hover:to-red-700 transition-all duration-200 transform hover:scale-105"
            >
              <span>Join With Us</span>
              <ArrowRight size={20} />
            </a>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-gray-50 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Questions about Membership?</h3>
          <p className="text-gray-600 mb-6">
            Our membership team is here to help you get started on your Rotaract journey
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:membership@rotaractau.org"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Email Us
            </a>
            <a
              href="tel:+919876543210"
              className="bg-white text-blue-600 border-2 border-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Call Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Membership;
