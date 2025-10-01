import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Download, Share2, Heart, Eye } from 'lucide-react';

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [viewMode, setViewMode] = useState<'grid' | 'masonry'>('masonry');
  const [searchTerm, setSearchTerm] = useState('');
  const [likedImages, setLikedImages] = useState<Set<number>>(new Set());
  const [imageStats, setImageStats] = useState<{ [key: number]: { views: number; likes: number } }>({});

  const categories = [
    { id: 'all', name: 'All Photos', icon: '📸', count: 15 },
    { id: 'community-service', name: 'Community Service', icon: '❤️', count: 4 },
    { id: 'events', name: 'Events', icon: '🎉', count: 3 },
    { id: 'meetings', name: 'Meetings', icon: '🤝', count: 2 },
    { id: 'awards', name: 'Awards', icon: '🏆', count: 2 },
    { id: 'innovation', name: 'Innovation', icon: '💡', count: 1 }
  ];

  const photos = [
    { id: 1, src: 'https://i.ibb.co/ns3t1Nzv/1.jpg', category: '', title: '', description: '', date: '', photographer: '', tags: [], location: '' },
    { id: 2, src: 'https://i.ibb.co/NM0SnLL/2.jpg', category: '', title: '', description: '', date: '', photographer: '', tags: [], location: '' },
    { id: 15, src: 'https://i.ibb.co/JF3LX3Bb/6c9e1be8-9006-437a-b70b-9eaf76b6f8b7.jpg', category: '', title: '', description: '', date: '', photographer: '', tags: [], location: '' },
    { id: 3, src: 'https://i.ibb.co/ynXyYwMg/d39fe88f-fb2b-4c4e-bd61-38f6fb826ca8.jpg', category: '', title: '', description: '', date: '', photographer: '', tags: [], location: '' },
    { id: 4, src: 'https://i.ibb.co/j9RsJNsR/4.jpg', category: '', title: '', description: '', date: '', photographer: '', tags: [], location: '' },
    { id: 5, src: 'https://i.ibb.co/6JRkjfTd/6.jpg', category: '', title: '', description: '', date: '', photographer: '', tags: [], location: '' },
    { id: 6, src: 'https://i.ibb.co/4ZhNV7PQ/DSC-8155.jpg', category: '', title: '', description: '', date: '', photographer: '', tags: [], location: '' },
    { id: 7, src: 'https://i.ibb.co/chqc7mGB/8.jpg', category: '', title: '', description: '', date: '', photographer: '', tags: [], location: '' },
    { id: 8, src: 'https://i.ibb.co/G35tn4Qw/13.jpg', category: '', title: '', description: '', date: '', photographer: '', tags: [], location: '' },
    { id: 9, src: 'https://i.ibb.co/QFJ9pqCC/Dis-Assembly.jpg', category: '', title: '', description: '', date: '', photographer: '', tags: [], location: '' },
    { id: 10, src: 'https://i.ibb.co/SXB7Hnv7/c8452fe1-6f05-4c23-82e8-471af8a5e66c.jpg', category: '', title: '', description: '', date: '', photographer: '', tags: [], location: '' },
    { id: 11, src: 'https://i.ibb.co/RGZ2rg2Y/5b5bfb98-ab5d-45b4-814f-903ae343cccb.jpg', category: '', title: '', description: '', date: '', photographer: '', tags: [], location: '' },
    { id: 12, src: 'https://i.ibb.co/S4zdZv42/e94367f7-899c-4208-afe5-e0153cb8e433.jpg', category: '', title: '', description: '', date: '', photographer: '', tags: [], location: '' },
    { id: 13, src: 'https://i.ibb.co/Y4TfTkT1/2e63cc0e-912b-4198-8265-67fac6898e77.jpg', category: '', title: '', description: '', date: '', photographer: '', tags: [], location: '' },
    { id: 14, src: 'https://i.ibb.co/RT2SBBzZ/0d1f6121-ae11-4f8c-97f5-97fc5d9c3682.jpg', category: '', title: '', description: '', date: '', photographer: '', tags: [], location: '' }
  ];

  const filteredPhotos = photos.filter(photo => {
    const matchesCategory = activeCategory === 'all' || photo.category === activeCategory;
    const matchesSearch =
      photo.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      photo.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  useEffect(() => {
    const stats: { [key: number]: { views: number; likes: number } } = {};
    photos.forEach(photo => {
      stats[photo.id] = {
        views: Math.floor(Math.random() * 500) + 50,
        likes: Math.floor(Math.random() * 100) + 10
      };
    });
    setImageStats(stats);
  }, []);

  const getMasonryHeight = (index: number) => {
    const heights = [300, 400, 350, 450, 320, 380, 420, 360, 340];
    return heights[index % heights.length];
  };

  return (
    <section id="gallery" className="py-20 bg-gradient-to-br from-gray-50 via-blue-50/30 to-red-50/30 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent text-lg font-semibold mb-4">
            SMART GALLERY
          </div>
          <h2 className="text-5xl font-bold text-gray-800 mb-6">
            AI-Powered <span className="text-transparent bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text">Visual Stories</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore our innovative projects through intelligent photo organization, AR previews, and interactive experiences
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`group px-6 py-3 rounded-2xl font-medium text-sm transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-blue-600 to-red-600 text-white shadow-lg transform scale-105'
                  : 'bg-white/80 backdrop-blur-sm text-gray-600 hover:bg-blue-50 hover:text-blue-600 shadow-md border border-white/50'
              }`}
            >
              <div className="flex items-center space-x-2">
                <span className="text-lg">{category.icon}</span>
                <span>{category.name}</span>
                <span
                  className={`text-xs px-2 py-1 rounded-full ${
                    activeCategory === category.id ? 'bg-white/20' : 'bg-gray-200 text-gray-600'
                  }`}
                >
                  {category.count}
                </span>
              </div>
            </button>
          ))}
        </div>

        {/* Photo Grid */}
        <div
          className={`${
            viewMode === 'masonry'
              ? 'columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6'
              : 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'
          }`}
        >
          {filteredPhotos.map((photo, index) => (
            <div
              key={photo.id}
              className={`group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer bg-white/80 backdrop-blur-sm border border-white/50 ${
                viewMode === 'masonry' ? 'break-inside-avoid mb-6' : ''
              }`}
              style={viewMode === 'masonry' ? { height: `${getMasonryHeight(index)}px` } : {}}
              onClick={() => setSelectedImage(index)}
            >
              <img src={photo.src} alt={photo.alt} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-lg font-bold mb-1">{photo.title}</h3>
                  <p className="text-sm text-gray-200 mb-2">{photo.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3 text-xs">
                      <div className="flex items-center space-x-1">
                        <Eye size={12} />
                        <span>{imageStats[photo.id]?.views || 0}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Heart size={12} />
                        <span>{imageStats[photo.id]?.likes || 0}</span>
                      </div>
                    </div>
                    <div className="text-xs text-gray-300">{photo.date && new Date(photo.date).toLocaleDateString()}</div>
                  </div>
                </div>
              </div>
              <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button
                  onClick={e => {
                    e.stopPropagation();
                    setLikedImages(prev => {
                      const newLikes = new Set(prev);
                      if (newLikes.has(photo.id)) newLikes.delete(photo.id);
                      else newLikes.add(photo.id);
                      return newLikes;
                    });
                  }}
                  className={`p-2 rounded-full backdrop-blur-sm transition-all duration-200 ${
                    likedImages.has(photo.id) ? 'bg-red-500 text-white' : 'bg-white/20 text-white hover:bg-white/30'
                  }`}
                >
                  <Heart size={16} fill={likedImages.has(photo.id) ? 'currentColor' : 'none'} />
                </button>
                <button
                  onClick={e => e.stopPropagation()}
                  className="p-2 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-all duration-200"
                >
                  <Share2 size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedImage !== null && (
          <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-6xl max-h-full w-full">
              <button
                className="absolute top-4 right-4 bg-white/10 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/20 transition-all duration-200 z-10"
                onClick={() => setSelectedImage(null)}
              >
                <X size={24} />
              </button>
              <button
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/10 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/20 transition-all duration-200 z-10"
                onClick={() => setSelectedImage(prev => (prev! > 0 ? prev! - 1 : filteredPhotos.length - 1))}
              >
                <ChevronLeft size={24} />
              </button>
              <button
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/10 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/20 transition-all duration-200 z-10"
                onClick={() => setSelectedImage(prev => (prev! < filteredPhotos.length - 1 ? prev! + 1 : 0))}
              >
                <ChevronRight size={24} />
              </button>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-full">
                <div className="lg:col-span-2 flex items-center justify-center">
                  <img src={filteredPhotos[selectedImage].src} alt={filteredPhotos[selectedImage].alt} className="max-w-full max-h-full object-contain rounded-2xl" />
                </div>
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 text-white overflow-y-auto">
                  <h3 className="text-2xl font-bold mb-3">{filteredPhotos[selectedImage].title}</h3>
                  <p className="text-gray-200 mb-4 leading-relaxed">{filteredPhotos[selectedImage].description}</p>
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between">
                      <span className="text-gray-300">Date:</span>
                      <span>{filteredPhotos[selectedImage].date && new Date(filteredPhotos[selectedImage].date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Photographer:</span>
                      <span>{filteredPhotos[selectedImage].photographer}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Location:</span>
                      <span>{filteredPhotos[selectedImage].location}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Views:</span>
                      <span>{imageStats[filteredPhotos[selectedImage].id]?.views || 0}</span>
                    </div>
                  </div>
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-300 mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {filteredPhotos[selectedImage].tags.map((tag, i) => (
                        <span key={i} className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex space-x-3">
                    <button
                      className={`flex-1 flex items-center justify-center space-x-2 py-3 rounded-xl transition-all duration-200 ${
                        likedImages.has(filteredPhotos[selectedImage].id) ? 'bg-red-500 text-white' : 'bg-white/20 hover:bg-white/30'
                      }`}
                      onClick={() => {
                        setLikedImages(prev => {
                          const newLikes = new Set(prev);
                          if (newLikes.has(filteredPhotos[selectedImage].id)) newLikes.delete(filteredPhotos[selectedImage].id);
                          else newLikes.add(filteredPhotos[selectedImage].id);
                          return newLikes;
                        });
                      }}
                    >
                      <Heart size={18} fill={likedImages.has(filteredPhotos[selectedImage].id) ? 'currentColor' : 'none'} />
                      <span>{imageStats[filteredPhotos[selectedImage].id]?.likes || 0}</span>
                    </button>
                    <button className="flex-1 flex items-center justify-center space-x-2 py-3 rounded-xl bg-white/20 hover:bg-white/30 transition-all duration-200">
                      <Download size={18} />
                      <span>Download</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Stats */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-red-600 rounded-3xl p-8 text-white">
          <h3 className="text-3xl font-bold mb-8 text-center">Gallery Analytics</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">{photos.length}+</div>
              <div className="text-blue-100">Smart Photos</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-blue-100">AI-Enhanced Events</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">100+</div>
              <div className="text-blue-100">Tech Innovations</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">1000+</div>
              <div className="text-blue-100">Digital Memories</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
