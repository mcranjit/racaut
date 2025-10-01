import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle, Instagram, Linkedin, Facebook, Bot, Zap } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [showChat, setShowChat] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    { type: 'bot', message: 'Hi! I\'m your AI assistant. How can I help you today?' }
  ]);
  const [chatInput, setChatInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChatSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatInput.trim()) return;

    setChatMessages(prev => [...prev, { type: 'user', message: chatInput }]);
    setIsTyping(true);

    setTimeout(() => {
      const responses = [
        "I'd be happy to help you with that! For membership inquiries, please fill out our online form or contact our membership team.",
        "That's a great question! Our club meets every Wednesday at 4:30 PM. Would you like more details about our upcoming events?",
        "We have several ongoing projects including digital literacy programs and environmental conservation. Which area interests you most?",
        "Our leadership development programs are designed to enhance your skills through hands-on experience. Would you like to know about our next workshop?"
      ];
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      setChatMessages(prev => [...prev, { type: 'bot', message: randomResponse }]);
      setIsTyping(false);
    }, 1500);

    setChatInput('');
  };

  const socialLinks = [
    {
      icon: Instagram,
      name: "Instagram",
      handle: "@rotaractau_trichy",
      link: "#",
      color: "text-pink-600",
      followers: "5.2K"
    },
    {
      icon: Facebook,
      name: "Facebook",
      handle: "Rotaract Club Anna University",
      link: "#",
      color: "text-blue-600",
      followers: "8.1K"
    },
    {
      icon: Linkedin,
      name: "LinkedIn",
      handle: "Rotaract Club of Anna University",
      link: "#",
      color: "text-blue-700",
      followers: "3.5K"
    }
  ];

  const quickActions = [
    { icon: "🤝", label: "Join Club", action: "membership" },
    { icon: "📅", label: "Book Meeting", action: "meeting" },
    { icon: "🎯", label: "Volunteer", action: "volunteer" },
    { icon: "💡", label: "Suggest Project", action: "project" }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 via-blue-50/30 to-red-50/30 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-red-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent text-lg font-semibold mb-4">
            GET IN TOUCH
          </div>
          <h2 className="text-5xl font-bold text-gray-800 mb-6">
            Connect with <span className="text-transparent bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text">Innovation</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Experience next-generation communication with AI assistance, virtual reality tours, and smart contact solutions
          </p>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {quickActions.map((action, index) => (
            <button
              key={index}
              className="bg-white/80 backdrop-blur-sm p-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-white/50 group"
            >
              <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">{action.icon}</div>
              <div className="text-sm font-semibold text-gray-700">{action.label}</div>
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <h3 className="text-3xl font-bold text-gray-800 mb-8">Smart Contact Hub</h3>

            {/* Google Map */}
            <div className="mb-8 rounded-2xl overflow-hidden shadow-lg border border-white/50">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15567.843144259317!2d78.74379!3d10.65815!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baa89337cba7f33%3A0x7120582d954fcb0f!2sAnna%20University%20RO%20Tiruchirappalli!5e0!3m2!1sen!2sin!4v1692094800000"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>

            {/* Social Media */}
            <div className="mt-12">
              <h4 className="text-xl font-bold text-gray-800 mb-6">Social Analytics</h4>
              <div className="space-y-4">
                {socialLinks.map((social, index) => (
                  <a key={index} href={social.link} className="group block">
                    <div className="bg-white/80 backdrop-blur-sm p-4 rounded-2xl hover:shadow-lg transition-all duration-300 border border-white/50">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <social.icon className={`${social.color}`} size={20} />
                          <div>
                            <div className="font-semibold text-gray-800">{social.name}</div>
                            <div className="text-sm text-gray-500">{social.handle}</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="font-bold text-gray-800">{social.followers}</div>
                          <div className="text-xs text-gray-500">followers</div>
                        </div>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Response Time Dashboard */}
            <div className="mt-12 bg-gradient-to-r from-blue-600 to-red-600 p-6 rounded-2xl text-white">
              <h4 className="text-xl font-bold mb-4 flex items-center">
                <Zap className="mr-2" size={20} />
                Response Analytics
              </h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span>AI Chat</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="font-bold">Instant</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span>Email</span>
                  <span className="font-bold">&lt; 24 hours</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Phone</span>
                  <span className="font-bold">Immediate</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Social Media</span>
                  <span className="font-bold">&lt; 4 hours</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-white/50">
              <div className="flex items-center space-x-3 mb-6">
                <Bot className="text-blue-600" size={28} />
                <h3 className="text-3xl font-bold text-gray-800">AI-Enhanced Contact Form</h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="relative">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/90 backdrop-blur-sm transition-all duration-300"
                      placeholder="Your full name"
                    />
                  </div>
                  <div className="relative">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/90 backdrop-blur-sm transition-all duration-300"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/90 backdrop-blur-sm"
                  >
                    <option value="">Select a subject</option>
                    <option value="membership">🤝 Membership Inquiry</option>
                    <option value="collaboration">🤝 Collaboration Opportunity</option>
                    <option value="volunteer">🎯 Volunteer Opportunity</option>
                    <option value="event">📅 Event Information</option>
                    <option value="tech">💻 Technology Partnership</option>
                    <option value="general">💬 General Question</option>
                    <option value="other">🔧 Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/90 backdrop-blur-sm resize-none"
                    placeholder="Tell us more about your inquiry..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-red-600 text-white py-4 rounded-2xl font-semibold flex items-center justify-center space-x-2 hover:from-blue-700 hover:to-red-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <Send size={20} />
                  <span>Send with AI Enhancement</span>
                </button>
              </form>
            </div>
          </div>
        </div>

       {/* Sponsorships */}
<div className="mt-12">
  <h4 className="text-xl font-bold text-gray-800 mb-6">Our Sponsors</h4>
  <div className="grid grid-cols-5 gap-4">
    {[
      { name: "Sponsor 1", logo: "https://i.ibb.co/bjKNtbTN/csir.jpg" },
      { name: "Sponsor 2", logo: "https://i.ibb.co/3YSDyqb5/igcar.jpg" },
      { name: "Sponsor 3", logo: "https://i.ibb.co/7t6ddXnH/jigyasa.png" },
      { name: "Sponsor 4", logo: "https://i.ibb.co/5xzSbf8t/kolam.jpg" },
      { name: "Sponsor 5", logo: "https://i.ibb.co/JF2nC2pp/vibha.jpg" },
      { name: "Sponsor 6", logo: "https://i.ibb.co/Ps5PBG4c/arivial-sangam.jpg" },
      { name: "Sponsor 7", logo: "https://i.ibb.co/1GpvMvYD/vhnsn.jpg" }
    ].map((sponsor, idx) => (
      <div
        key={idx}
        className=" backdrop-blur-sm p-4 rounded-2xl hover:shadow-lg transition-all duration-300   flex items-center justify-center"
      >
        <img
          src={sponsor.logo}
          alt={sponsor.name}
          className="max-h-20 w-auto object-contain"
        />
      </div>
    ))}
  </div>
</div>


        {/* AI Chat */}
        <div className="fixed bottom-6 right-6 z-50">
          <button
            onClick={() => setShowChat(!showChat)}
            className="bg-gradient-to-r from-blue-600 to-red-600 text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-110 group"
          >
            <MessageCircle size={24} className="group-hover:rotate-12 transition-transform" />
          </button>

          {showChat && (
            <div className="absolute bottom-16 right-0 w-96 bg-white/95 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/50 overflow-hidden">
              <div className="bg-gradient-to-r from-blue-600 to-red-600 text-white p-4 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Bot size={24} />
                  <div>
                    <h4 className="font-bold">AI Assistant</h4>
                  </div>
                </div>
              </div>

              <div className="h-80 overflow-y-auto p-4 space-y-3">
                {chatMessages.map((msg, index) => (
                  <div key={index} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-xs p-3 rounded-2xl ${
                      msg.type === 'user'
                        ? 'bg-gradient-to-r from-blue-600 to-red-600 text-white'
                        : 'bg-gray-100 text-gray-800'
                    }`}>
                      <p className="text-sm">{msg.message}</p>
                    </div>
                  </div>
                ))}
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="bg-gray-100 p-3 rounded-2xl">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200"></div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <form onSubmit={handleChatSubmit} className="p-4 border-t border-gray-200/50">
                <div className="flex space-x-2">
                  <input
                    type="text"
                    value={chatInput}
                    onChange={(e) => setChatInput(e.target.value)}
                    placeholder="Ask me anything..."
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-xl text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/90"
                  />
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-blue-600 to-red-600 text-white px-4 py-2 rounded-xl"
                  >
                    <Send size={16} />
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
