import React from 'react';
import { Calendar, User, ArrowRight, MessageCircle, Heart } from 'lucide-react';

const Blog: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Digital Literacy Program: Bridging the Technology Gap",
      excerpt: "Our latest initiative aims to provide basic computer skills to rural communities around Trichy, empowering them with digital knowledge.",
      author: "Ranjith",
      date: "2024-01-15",
      image: "https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Community Service",
      readTime: "5 min read",
      likes: 24,
      comments: 8
    },
    { id: 2, image: "img/news/news1.jpg" },
    { id: 3, image: "img/news/news2.jpg" },
    { id: 4, image: "img/news/news3.jpg" },
    { id: 5, image: "img/news/news4.jpg" },
    { id: 6, image: "img/news/news5.jpg" }
  ];

  const categories = [
    "All Posts",
    "Community Service",
    "Member Achievement",
    "Environment",
    "Health Initiative",
    "Events",
    "Annual Report"
  ];

  return (
    <section id="blog" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Blog & News</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with our latest activities, member achievements, and community impact stories
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                index === 0
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-blue-50 hover:text-blue-600'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured Post */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-blue-600 to-red-600 rounded-2xl overflow-hidden shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              
              {/* Featured Text */}
              <div className="p-8 lg:p-12 text-white">
                <div className="flex items-center space-x-2 mb-4">
                  <span className="bg-orange-500 px-3 py-1 rounded-full text-xs font-semibold">
                    FEATURED
                  </span>
                  <span className="text-blue-100 text-sm">{blogPosts[0].category}</span>
                </div>
                <h3 className="text-3xl lg:text-4xl font-bold mb-4 leading-tight">
                  {blogPosts[0].title}
                </h3>
                <p className="text-blue-100 mb-6 text-lg leading-relaxed">
                  {blogPosts[0].excerpt}
                </p>
                <div className="flex items-center space-x-6 mb-6">
                  <div className="flex items-center space-x-2">
                    <User size={16} />
                    <span className="text-sm">{blogPosts[0].author}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar size={16} />
                    <span className="text-sm">{new Date().toLocaleDateString()}</span>
                  </div>
                  <span className="text-sm text-blue-200">{blogPosts[0].readTime}</span>
                </div>
                <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold flex items-center space-x-2 hover:bg-blue-50 transition-all duration-200">
                  <span>Read Full Article</span>
                  <ArrowRight size={18} />
                </button>
              </div>

              {/* Featured Image */}
              <div className="lg:block">
                <img 
                  src={blogPosts[0].image} 
                  alt={blogPosts[0].title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {blogPosts.slice(1).map((post) => (
            <article 
              key={post.id} 
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <img 
                src={post.image} 
                alt={post.title || "Blog Image"}
                className="w-full h-full object-cover" // full size image display
              />

              {/* Show text only if available */}
              {post.title && (
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3 hover:text-blue-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <User size={14} />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar size={14} />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                    </div>
                    <span className="text-blue-600 font-medium">{post.readTime}</span>
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1 text-gray-500">
                        <Heart size={16} />
                        <span className="text-sm">{post.likes}</span>
                      </div>
                      <div className="flex items-center space-x-1 text-gray-500">
                        <MessageCircle size={16} />
                        <span className="text-sm">{post.comments}</span>
                      </div>
                    </div>
                    <button className="text-blue-600 hover:text-blue-800 font-semibold text-sm flex items-center space-x-1 transition-colors">
                      <span>Read More</span>
                      <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              )}
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Blog;
