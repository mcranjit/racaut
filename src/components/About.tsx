import React, { useState, useRef, useEffect } from 'react';
import { Award, Target, Eye, History, TrendingUp, Users, Globe, Heart, Lightbulb, Handshake, Star } from 'lucide-react';

interface ReadMoreProps {
  text: string;
  maxLength?: number;
}

const ReadMore: React.FC<ReadMoreProps> = ({ text, maxLength = 200 }) => {
  const [expanded, setExpanded] = useState(false);

  if (text.length <= maxLength) return <p className="text-gray-600">{text}</p>;

  return (
    <p className="text-gray-600 leading-relaxed text-sm md:text-base">
      {expanded ? text : text.slice(0, maxLength) + "..."}
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          setExpanded(!expanded);
        }}
        className="ml-2 text-blue-600 font-semibold"
      >
        {expanded ? "Read less" : "Read more"}
      </a>
    </p>
  );
};

const About: React.FC = () => {
  const [activeTab, setActiveTab] = useState('mission');
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({ members: 0, projects: 0, years: 0, impact: 0 });
  const [animatedAchievements, setAnimatedAchievements] = useState<boolean[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  const achievements = [
    { title: "Outstanding Community Service Award 2023", icon: "🏆", year: "2023" },
    { title: "Best Blood Donation Drive - District 3201", icon: "🩸", year: "2023" },
    { title: "Environmental Conservation Excellence", icon: "🌱", year: "2022" },
    { title: "Youth Leadership Development Program", icon: "👥", year: "2022" },
    { title: "Digital Literacy Initiative Recognition", icon: "💻", year: "2021" }
  ];

  const tabs = [
    { id: 'mission', label: 'Our Mission', icon: Target },
    { id: 'vision', label: 'Our Vision', icon: Eye },
    { id: 'history', label: 'Our History', icon: History },
    { id: 'impact', label: 'Our Impact', icon: TrendingUp }
  ];

  const tabContent = {
    mission: {
      title: "Empowering Youth Through Service",
      content: "To provide opportunities for young people to enhance their leadership and professional skills, to address the physical and social needs of their communities, and to promote better relations between people worldwide through innovative service projects and meaningful fellowship.",
      highlights: ["Leadership Development", "Community Service", "Global Understanding", "Professional Growth"]
    },
    vision: {
      title: "Building Tomorrow's Leaders",
      content: "To be a global network of diverse, engaged leaders who are committed to creating positive change in their communities and beyond through service, fellowship, and leadership development, fostering a world where every young person has the opportunity to make a difference.",
      highlights: ["Global Network", "Positive Change", "Youth Empowerment", "Sustainable Impact"]
    },
    history: {
      title: "A Decade of Excellence",
      content: "Founded in 2013, the Rotaract Club of Anna University, Trichy has been a beacon of youth leadership and community service. We've grown from a small group of passionate students to a thriving community of over 500 active members, making significant impact across Tamil Nadu.",
      highlights: ["Founded 2013", "500+ Members", "50+ Projects", "District Recognition"]
    },
    impact: {
      title: "Measuring Our Success",
      content: "Our impact extends far beyond numbers, touching lives and transforming communities. Through innovative projects and dedicated service, we've created lasting change in education, healthcare, environment, and social development across the region.",
      highlights: ["1000+ Lives Impacted", "50+ Communities Served", "25+ Awards Won", "100% Member Satisfaction"]
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          const targets = { members: 500, projects: 50, years: 10, impact: 1000 };
          Object.keys(targets).forEach(key => {
            let start = 0;
            const end = targets[key as keyof typeof targets];
            const duration = 2000;
            const increment = end / (duration / 16);

            const timer = setInterval(() => {
              start += increment;
              if (start >= end) {
                setCounters(prev => ({ ...prev, [key]: end }));
                clearInterval(timer);
              } else {
                setCounters(prev => ({ ...prev, [key]: Math.floor(start) }));
              }
            }, 16);
          });

          achievements.forEach((_, index) => {
            setTimeout(() => {
              setAnimatedAchievements(prev => {
                const newState = [...prev];
                newState[index] = true;
                return newState;
              });
            }, index * 200);
          });
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
    <section id="about" ref={sectionRef} className="py-12 md:py-20 bg-gradient-to-br from-gray-50 via-blue-50/30 to-red-50/30 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-48 md:w-72 h-48 md:h-72 bg-blue-200/20 rounded-full blur-3xl animate-pulse animate-morphing"></div>
        <div className="absolute bottom-20 right-10 w-64 md:w-96 h-64 md:h-96 bg-red-200/20 rounded-full blur-3xl animate-pulse animate-morphing animate-delay-1000"></div>
      </div>

      <div className="container-responsive relative z-10">
        <div className={`text-center mb-12 md:mb-16 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}>
          <div className="inline-block bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent text-base md:text-lg font-semibold mb-4">
            ABOUT OUR CLUB
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 md:mb-6 animate-fadeInUp animate-delay-200">
            Discover the <span className="text-transparent bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text animate-gradient-shift">Rotaract Movement</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed animate-fadeInUp animate-delay-300">
            Our journey at Anna University, Trichy - where passion meets purpose and young leaders create lasting change
          </p>
        </div>

        {/* 3 Logos with ReadMore */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 text-center mb-12 md:mb-16">
          <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition duration-300">
            <img src="/img/logo/sustain.jpg" alt="Innovation" className="mx-auto w-22 h-22 mb-4" />
            <h3 className="text-xl font-bold text-gray-800 mb-2">Sustainable Development Goals</h3>
            <ReadMore text={`At the Rotaract Club of Anna University, we align our initiatives with the United Nations Sustainable Development Goals (SDGs) to create a lasting impact on society. Through community service, professional development, and international collaboration, we work towards promoting quality education, good health and well-being, gender equality, climate action, and sustainable communities. Our projects – from tree plantation drives and awareness campaigns to youth empowerment and innovation programs – are designed to inspire positive change and contribute to building a more inclusive, responsible, and sustainable world. Together, we strive to be a driving force for progress, echoing the spirit of Service Above Self. #team trailblazer`} />
          </div>

          <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition duration-300">
            <img src="/img/logo/trailblazer.jpg" alt="Collaboration" className="mx-auto w-22 h-22 mb-4" />
            <h3 className="text-xl font-bold text-gray-800 mb-2">Team Trailblazer</h3>
            <ReadMore text={`The Rotaract Club of Anna University – Team Trailblazer for this Rotary year is driven by the vision to Lead, Serve, and Inspire. We believe in leading with purpose, serving with passion, and inspiring with action in every initiative we take up. Guided by the values of Rotary International, our club actively participates in district initiatives, DRR and District Governor projects, while also designing impactful community-based programs that address real needs. From professional development and youth empowerment to health, education, environmental sustainability, and social awareness, our projects are aligned with both local priorities and the United Nations Sustainable Development Goals (SDGs). With a strong commitment to service above self, Team Trailblazer strives to create lasting change through leadership, innovation, and teamwork—making this Rotary year one of impact, growth, and inspiration. #team trailblazer`} />
          </div>

          <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition duration-300">
            <img src="/img/logo/university.jpg" alt="Excellence" className="mx-auto w-22 h-22 mb-4" />
            <h3 className="text-xl font-bold text-gray-800 mb-2">Anna University</h3>
            <ReadMore text={`Anna University, BIT Campus, through the Rotaract Club of Anna University, focuses on nurturing students to become responsible leaders and active contributors to society. The club serves as a bridge between academics and real-world experiences, encouraging students to step beyond classrooms and explore opportunities for service, leadership, and innovation. By engaging in community development, professional growth, and cultural exchange, the Rotaract Club reflects Anna University's commitment to shaping well-rounded individuals. With impactful initiatives and projects inspired by the spirit of Service Above Self, the club aligns with global aspirations like the Sustainable Development Goals (SDGs), enabling students to connect learning with action and contribute meaningfully to society. #team trailblazer`} />
          </div>
        </div>

           {/* Lead · Serve · Inspire */}
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-extrabold tracking-wide text-gray-800">
              <span className="text-blue-600">Lead with purpose</span> ·{" "}
              <span className="text-green-600"> Serve with passion</span> ·{" "}
              <span className="text-red-600">Inspire with action</span>
            </h3>
          </div>

           {/* Banner Image */}
            <div className="flex justify-center mb-8">
              <img
                src="img/logo/banner2.jpg"  // put your image path here
                alt="Rotaract Banner"
                className="w-full max-w-5xl rounded-lg "
              />
            </div>


            {/* Lead · Serve · Inspire */}
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-extrabold tracking-wide text-gray-800">
              <span className="text-blue-600">Lead</span> ·{" "}
              <span className="text-green-600"> Serve</span> ·{" "}
              <span className="text-red-600">Inspire</span>
            </h3>
          </div>

       

        {/* Interactive Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-12 md:mb-16">
          {[
            { key: 'members', label: 'Active Members', icon: Users, color: 'bg-blue-500', suffix: '+' },
            { key: 'projects', label: 'Projects Completed', icon: Target, color: 'bg-green-500', suffix: '+' },
            { key: 'years', label: 'Years of Service', icon: History, color: 'bg-purple-500', suffix: '+' },
            { key: 'impact', label: 'Lives Impacted', icon: Heart, color: 'bg-red-500', suffix: '+' }
          ].map((stat, index) => (
            <div
              key={stat.key}
              className={`group ${isVisible ? `animate-scaleIn animate-delay-${400 + index * 100}` : 'opacity-0'}`}
            >
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 md:p-6 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-white/50 hover-lift">
                {/* Icon Wrapper */}
                <div
                  className={`w-10 h-10 md:w-12 md:h-12 ${stat.color} rounded-xl flex items-center justify-center mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <stat.icon className="text-white" size={24} />
                </div>
                <div className={`text-2xl md:text-3xl font-bold text-gray-800 mb-2`}>
                  {counters[stat.key as keyof typeof counters]}
                  {stat.suffix}
                </div>
                <div className="text-gray-600 text-xs md:text-sm font-medium">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Tabs */}
        <div className={`bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/50 overflow-hidden mb-12 md:mb-16 hover-lift ${isVisible ? 'animate-fadeInUp animate-delay-600' : 'opacity-0'}`}>
          <div className="flex flex-wrap border-b border-gray-200/50">
            {tabs.map((tab, index) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 min-w-0 px-3 py-3 md:px-6 md:py-4 flex items-center justify-center space-x-2 font-medium transition-all duration-500 hover-lift focus-ring ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-blue-600 to-red-600 text-white shadow-lg'
                    : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50/50'
                } animate-fadeInUp animate-delay-${700 + index * 100}`}
              >
                <tab.icon size={18} className="animate-float" />
                <span className="text-xs md:text-sm lg:text-base">{tab.label}</span>
              </button>
            ))}
          </div>
          
          <div className="p-4 md:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-center">
              <div className="animate-fadeInLeft">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 animate-fadeInUp">
                  {tabContent[activeTab as keyof typeof tabContent].title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6 text-base md:text-lg animate-fadeInUp animate-delay-200">
                  {tabContent[activeTab as keyof typeof tabContent].content}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {tabContent[activeTab as keyof typeof tabContent].highlights.map((highlight, index) => (
                    <div key={index} className={`flex items-center space-x-2 animate-fadeInLeft animate-delay-${300 + index * 100}`}>
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-red-500 rounded-full animate-pulse"></div>
                      <span className="text-gray-700 font-medium text-sm md:text-base">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative animate-fadeInRight animate-delay-400">
                <img 
                  src="img/gallery/team.jpg" 
                  alt="Rotaract club activities"
                  className="rounded-2xl shadow-lg w-full h-64 md:h-80 object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0  rounded-2xl"></div>
                <div className="absolute bottom-4 left-4 text-white animate-fadeInUp animate-delay-600">
                  <div className="text-sm font-medium">Making Impact Since 2013</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Achievements Showcase */}
        <div className={`bg-gradient-to-r from-blue-600 to-red-600 rounded-3xl p-6 md:p-8 text-white mb-12 md:mb-16 animate-gradient-shift ${isVisible ? 'animate-fadeInUp animate-delay-800' : 'opacity-0'}`}>
          <div className="flex items-center space-x-3 mb-6 md:mb-8 animate-fadeInLeft">
            <Award className="text-orange-300 animate-float" size={28} />
            <h3 className="text-2xl md:text-3xl font-bold">Key Achievements</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className={`group ${animatedAchievements[index] ? 'animate-scaleIn' : 'opacity-0'}`}>
                <div className="bg-white/10 backdrop-blur-sm p-4 md:p-6 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-500 transform hover:-translate-y-1 hover-lift">
                  <div className="flex items-start space-x-4">
                    <div className="text-2xl md:text-3xl animate-float">{achievement.icon}</div>
                    <div className="flex-1">
                      <div className="text-orange-300 text-xs md:text-sm font-medium mb-1 animate-pulse">{achievement.year}</div>
                      <p className="font-semibold leading-tight text-sm md:text-base">{achievement.title}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Parent Club Section */}
        <div className={`bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/50 overflow-hidden p-6 md:p-10 hover-lift ${isVisible ? 'animate-fadeInUp animate-delay-900' : 'opacity-0'}`}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Text Side */}
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                About Our Parent Club
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6 text-base md:text-lg">
                With <span className="font-semibold text-blue-600">58 years of experience</span> in Rotary service in Trichy, 
                the <span className="font-semibold text-blue-600">Rotary Club of Tiruchirapalli Fort</span>, chartered in May 1968, 
                is a Rotary International club dedicated to community service and fellowship. As part of 
                <span className="font-semibold text-blue-600"> District 3000</span>, the club has a proud legacy of impactful 
                projects, including educational initiatives such as teaching literacy to adults in the 
                Manigandam Union. The club also conducts regular meetings to plan and execute meaningful 
                service activities, fostering fellowship and sustainable community development.
              </p>

              <ul className="space-y-3">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-red-500 rounded-full animate-pulse"></div>
                  <span className="text-gray-700 font-medium">Mentorship & Guidance</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-red-500 rounded-full animate-pulse"></div>
                  <span className="text-gray-700 font-medium">Joint Service Projects</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-red-500 rounded-full animate-pulse"></div>
                  <span className="text-gray-700 font-medium">Global Rotary Network</span>
                </li>
              </ul>
            </div>

            {/* Image Side */}
            <div className="relative">
              <img 
                src="img/gallery/club_install.jpg" 
                alt="Rotary Parent Club" 
                className="rounded-2xl shadow-lg w-full h-64 md:h-80 object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-2xl"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <div className="text-sm font-medium">Guiding Rotaract Since Inception</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
