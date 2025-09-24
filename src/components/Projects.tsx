import React, { useState, useEffect } from 'react';
import { Calendar, MapPin, Users, ArrowRight, Filter, Clock, Star, TrendingUp } from 'lucide-react';

const Projects: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'ongoing' | 'completed' | 'upcoming'>('ongoing');
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const projects = {
    ongoing: [
      {
        id: 1,
        title: "Digital Literacy for Rural Communities",
        description: "Teaching basic computer skills to rural communities around Trichy with AI-powered learning modules",
        image: "https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=600",
        participants: 45,
        location: "Rural areas of Trichy",
        duration: "6 months",
        progress: 65,
        category: "Education",
        impact: "500+ people trained",
        technologies: ["AI Learning", "Mobile Apps", "Virtual Reality"]
      },
      {
        id: 2,
        title: "Smart Blood Donation Network",
        description: "AI-powered blood donation system with real-time tracking and donor management",
        image: "https://images.pexels.com/photos/6129231/pexels-photo-6129231.jpeg?auto=compress&cs=tinysrgb&w=600",
        participants: 200,
        location: "Anna University Campus",
        duration: "Ongoing",
        progress: 80,
        category: "Healthcare",
        impact: "1000+ units collected",
        technologies: ["IoT Sensors", "Mobile App", "Real-time Analytics"]
      },
      {
        id: 3,
        title: "Eco-Smart Waste Management",
        description: "IoT-enabled waste segregation and recycling program with community rewards",
        image: "https://images.pexels.com/photos/1072824/pexels-photo-1072824.jpeg?auto=compress&cs=tinysrgb&w=600",
        participants: 120,
        location: "Trichy City",
        duration: "8 months",
        progress: 45,
        category: "Environment",
        impact: "50 tons waste recycled",
        technologies: ["IoT Sensors", "Blockchain", "Mobile Rewards"]
        
      }
    ],
    completed: [
      {
        id: 4,
        title: "Environmental Conservation Project",
        description: "Planted 1000+ saplings with drone monitoring and AI growth tracking",
        image: "https://images.pexels.com/photos/1072824/pexels-photo-1072824.jpeg?auto=compress&cs=tinysrgb&w=600",
        participants: 150,
        location: "Trichy District",
        duration: "3 months",
        progress: 100,
        category: "Environment",
        impact: "1000+ trees planted",
        technologies: ["Drone Monitoring", "AI Growth Analysis", "Satellite Tracking"]
      },
      {
        id: 5,
        title: "Smart Elderly Care Initiative",
        description: "Technology-assisted care for elderly with health monitoring and emergency response",
        image: "https://images.pexels.com/photos/339620/pexels-photo-339620.jpeg?auto=compress&cs=tinysrgb&w=600",
        participants: 30,
        location: "Trichy City",
        duration: "1 year",
        progress: 100,
        category: "Healthcare",
        impact: "200+ elderly assisted",
        technologies: ["Health Sensors", "Emergency Alert", "Telemedicine"]
       
      }
    ],
    upcoming: [
      {
        id: 6,
        title: "AI-Powered Youth Leadership Summit",
        description: "Next-gen leadership program with VR simulations and AI mentoring",
        image: "https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=600",
        participants: 300,
        location: "Anna University Auditorium",
        duration: "2 days",
        progress: 0,
        category: "Leadership",
        impact: "300+ future leaders",
        technologies: ["VR Training", "AI Mentoring", "Blockchain Certificates"]
      }
    ]
  };

  const upcomingEvents = [
    {
      id: 1,
      date: "2024-02-15",
      title: "AI-Enhanced Club Meeting",
      time: "6:00 PM",
      location: "Virtual + Physical Hybrid",
      type: "meeting",
      attendees: 150
    },
    {
      id: 2,
      date: "2024-02-20",
      title: "Smart Blood Drive 2.0",
      time: "9:00 AM - 4:00 PM",
      location: "Main Campus, Anna University",
      type: "service",
      attendees: 200
    },
    {
      id: 3,
      date: "2024-03-05",
      title: "Community Impact Hackathon",
      time: "8:00 AM - 6:00 PM",
      location: "Innovation Lab, Anna University",
      type: "innovation",
      attendees: 100
    },
    {
      id: 4,
      date: "2024-03-15",
      title: "VR Leadership Workshop",
      time: "10:00 AM - 4:00 PM",
      location: "VR Lab, Anna University",
      type: "training",
      attendees: 50
    }
  ];

  const filteredProjects = projects[activeTab].filter(project =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getEventIcon = (type: string) => {
    switch (type) {
      case 'meeting': return '🤝';
      case 'service': return '❤️';
      case 'innovation': return '💡';
      case 'training': return '🎯';
      default: return '📅';
    }
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-white via-blue-50/30 to-red-50/30 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-40 left-20 w-64 h-64 bg-blue-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-40 right-20 w-80 h-80 bg-red-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent text-lg font-semibold mb-4">
            PROJECTS & EVENTS
          </div>
          <h2 className="text-5xl font-bold text-gray-800 mb-6">
            Innovation Meets <span className="text-transparent bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text">Impact</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover our cutting-edge initiatives powered by AI, IoT, and emerging technologies
          </p>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Search projects by name or category..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-6 py-3 rounded-2xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/80 backdrop-blur-sm"
            />
          </div>
          <div className="flex justify-center">
            <div className="bg-white/80 backdrop-blur-sm p-1 rounded-2xl border border-gray-200">
              {(['ongoing', 'completed', 'upcoming'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-3 rounded-xl font-medium capitalize transition-all duration-300 ${
                    activeTab === tab
                      ? 'bg-gradient-to-r from-blue-600 to-red-600 text-white shadow-lg'
                      : 'text-gray-600 hover:text-blue-600'
                  }`}
                >
                  {tab} Projects
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id} 
              className="group bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-white/50 cursor-pointer"
              onClick={() => setSelectedProject(selectedProject === project.id ? null : project.id)}
            >
              <div className="relative">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-xs font-semibold">
                    {project.category}
                  </span>
                </div>
                
                {/* Progress Ring */}
                <div className="absolute top-4 right-4">
                  <div className="relative w-12 h-12">
                    <svg className="w-12 h-12 transform -rotate-90" viewBox="0 0 36 36">
                      <path
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="rgba(255,255,255,0.3)"
                        strokeWidth="2"
                      />
                      <path
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="white"
                        strokeWidth="2"
                        strokeDasharray={`${project.progress}, 100`}
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-white text-xs font-bold">{project.progress}%</span>
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold mb-1">{project.title}</h3>
                  <p className="text-sm text-gray-200">{project.impact}</p>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="bg-gradient-to-r from-blue-100 to-red-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-500">
                    <Users size={16} className="mr-2" />
                    <span>{project.participants} participants</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <MapPin size={16} className="mr-2" />
                    <span>{project.location}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock size={16} className="mr-2" />
                    <span>{project.duration}</span>
                  </div>
                </div>

                {/* Expandable Details */}
                

          
              </div>
            </div>
          ))}
        </div>

        {/* Upcoming Events Calendar */}
        <div className="bg-gradient-to-r from-blue-600 to-red-600 rounded-3xl p-8 text-white">
          <div className="flex items-center space-x-3 mb-8">
            <Calendar className="text-orange-300" size={32} />
            <h3 className="text-3xl font-bold">Upcoming Smart Events</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {upcomingEvents.map((event, index) => (
              <div key={event.id} className="group">
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1">
                  <div className="flex items-start space-x-4">
                    <div className="bg-white/20 rounded-xl p-3 text-center min-w-16">
                      <div className="text-2xl mb-1">{getEventIcon(event.type)}</div>
                      <div className="text-sm font-medium">
                        {new Date(event.date).toLocaleDateString('en-US', { month: 'short' }).toUpperCase()}
                      </div>
                      <div className="text-2xl font-bold">
                        {new Date(event.date).getDate()}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold mb-2">{event.title}</h4>
                      <div className="text-sm text-blue-100 space-y-1">
                        <div className="flex items-center">
                          <Clock size={14} className="mr-2" />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center">
                          <MapPin size={14} className="mr-2" />
                          <span>{event.location}</span>
                        </div>
                        <div className="flex items-center">
                          <Users size={14} className="mr-2" />
                          <span>{event.attendees} expected attendees</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;