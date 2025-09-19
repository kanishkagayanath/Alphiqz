'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { assets, getAssetsByCategory, searchAssets } from '@/data/assets';

const categories = [
  { id: 'all', name: 'All Categories', icon: '🎯' },
  { id: 'illustrations', name: 'Stylish Backgrounds', icon: '🎨' },
  { id: 'gaming-assets', name: 'Gaming Assets', icon: '🎮' },
  { id: 'patterns', name: 'Patterns', icon: '🌟' },
  { id: 'logos-and-branding', name: 'Logos & Branding', icon: '✨' },
];

function DesignsContent() {
  const searchParams = useSearchParams();
  const [activeCategory, setActiveCategory] = useState('all');
  const [filteredAssets, setFilteredAssets] = useState(assets);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const categoryParam = searchParams.get('category');
    if (categoryParam) {
      setActiveCategory(categoryParam);
    }
  }, [searchParams]);

  useEffect(() => {
    let filtered = assets;
    
    // Filter by category
    if (activeCategory !== 'all') {
      filtered = getAssetsByCategory(activeCategory);
    }
    
    // Filter by search term
    if (searchTerm) {
      filtered = searchAssets(searchTerm);
      // If we also have a category filter, apply it to search results
      if (activeCategory !== 'all') {
        filtered = filtered.filter(asset => asset.category === activeCategory);
      }
    }
    
    setFilteredAssets(filtered);
  }, [activeCategory, searchTerm]);

  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId);
    // Update URL without page reload
    const url = new URL(window.location.href);
    if (categoryId === 'all') {
      url.searchParams.delete('category');
    } else {
      url.searchParams.set('category', categoryId);
    }
    window.history.pushState({}, '', url);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Design
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-400 to-blue-400 drop-shadow-lg">
              Collection
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Explore our curated collection of premium design assets, ready to download and use in your creative projects.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-md mx-auto mb-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search designs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 pl-12 pr-4 text-white bg-slate-800/60 backdrop-blur-sm border border-cyan-400/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 shadow-sm placeholder-gray-400"
              />
              <div className="absolute inset-y-0 left-0 flex items-center pl-4">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => handleCategoryChange(category.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-cyan-500 via-teal-500 to-blue-600 text-white shadow-lg shadow-cyan-400/25 transform scale-105 border border-cyan-400/30'
                  : 'bg-slate-800/60 backdrop-blur-sm text-gray-300 hover:bg-slate-700/60 hover:text-cyan-300 shadow-sm border border-slate-600/40'
              }`}
            >
              <span className="text-lg">{category.icon}</span>
              <span>{category.name}</span>
            </button>
          ))}
        </div>

        {/* Results Count */}
        <div className="text-center mb-8">
          <p className="text-gray-300">
            Showing <span className="font-semibold text-cyan-400">{filteredAssets.length}</span> design{filteredAssets.length !== 1 ? 's' : ''}
            {activeCategory !== 'all' && (
              <span> in <span className="font-semibold text-teal-400">{categories.find(c => c.id === activeCategory)?.name}</span></span>
            )}
          </p>
        </div>

        {/* Design Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredAssets.map((asset) => (
            <div key={asset.id} className="group relative bg-slate-800/60 backdrop-blur-sm rounded-2xl shadow-2xl shadow-cyan-400/10 hover:shadow-cyan-400/20 transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-slate-600/40 hover:border-cyan-400/30">
              {/* Image/Preview */}
              <div className="h-48 bg-gradient-to-br from-slate-700 to-slate-600 flex items-center justify-center relative overflow-hidden">
                {/* Show actual preview image if available */}
                <img 
                  src={asset.previewImage} 
                  alt={asset.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  onError={(e) => {
                    // Fallback to category icon if image fails to load
                    e.currentTarget.style.display = 'none';
                    const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                    if (fallback) fallback.style.display = 'flex';
                  }}
                />
                {/* Fallback icon (hidden by default, shown if image fails) */}
                <div className="text-6xl group-hover:scale-110 transition-transform duration-300 absolute inset-0 flex items-center justify-center" style={{display: 'none'}}>
                  {asset.category === 'illustrations' && '🎨'}
                  {asset.category === 'gaming-assets' && '🎮'}
                  {asset.category === 'patterns' && '🌟'}
                  {asset.category === 'logos-and-branding' && '✨'}
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300"></div>
                
                {/* Featured badge overlay */}
                {asset.featured && (
                  <div className="absolute top-3 left-3">
                    <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg">
                      ⭐ Featured
                    </span>
                  </div>
                )}
              </div>
              
              {/* Content */}
              <div className="p-6">
                <h3 className="font-bold text-lg text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {asset.title}
                </h3>
                <p className="text-sm text-gray-300 mb-3 line-clamp-2">
                  {asset.description}
                </p>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-cyan-300 bg-cyan-500/20 px-3 py-1 rounded-full font-medium border border-cyan-400/30">
                      {asset.type}
                    </span>
                    <span className="text-xs text-gray-400">
                      {asset.fileSize}
                    </span>
                  </div>
                  <span className="text-sm text-gray-400">
                    📥 {asset.downloadCount}
                  </span>
                </div>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {asset.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="text-xs text-gray-400 bg-slate-700/60 px-2 py-1 rounded border border-slate-600/40">
                      {tag}
                    </span>
                  ))}
                </div>
                
                {/* Action Buttons */}
                <div className="flex space-x-2">
                  <a 
                    href={asset.downloadUrl}
                    download={asset.title.replace(/\s+/g, '-').toLowerCase() + '.' + asset.type.toLowerCase()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gradient-to-r from-cyan-500 via-teal-500 to-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:shadow-2xl hover:shadow-cyan-400/25 transition-all duration-300 transform hover:scale-105 text-center border border-cyan-400/30"
                    onClick={(e) => {
                      // Track download count here if needed
                      console.log(`Downloading: ${asset.title}`);
                    }}
                  >
                    Download Free
                  </a>
                  <button 
                    className="px-3 py-2 bg-slate-700/60 text-gray-300 rounded-lg hover:bg-slate-600/60 hover:text-cyan-300 transition-colors border border-slate-600/40"
                    onClick={() => window.open(asset.previewImage, '_blank')}
                    title="Preview"
                  >
                    👁️
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredAssets.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-white mb-2">No designs found</h3>
            <p className="text-gray-300 mb-6">Try adjusting your search or filter criteria</p>
            <button
              onClick={() => {
                setActiveCategory('all');
                setSearchTerm('');
              }}
              className="bg-gradient-to-r from-cyan-500 via-teal-500 to-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:shadow-2xl hover:shadow-cyan-400/25 transition-all duration-300 transform hover:scale-105 border border-cyan-400/30"
            >
              Clear Filters
            </button>
          </div>
        )}

        {/* Load More Button */}
        {filteredAssets.length > 0 && (
          <div className="text-center mt-12">
            <button className="bg-slate-800/60 backdrop-blur-sm text-cyan-400 border-2 border-cyan-400/30 px-8 py-3 rounded-xl font-semibold hover:bg-gradient-to-r hover:from-cyan-500 hover:via-teal-500 hover:to-blue-600 hover:text-white hover:border-cyan-400 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-400/25">
              Load More Designs
            </button>
          </div>
        )}
      </div>
    </main>
  );
}

// Loading component for Suspense fallback
function DesignsLoading() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <div className="h-16 bg-slate-700/60 rounded-lg mb-6 animate-pulse"></div>
          <div className="h-6 bg-slate-700/60 rounded-lg mb-8 max-w-3xl mx-auto animate-pulse"></div>
          <div className="h-12 bg-slate-700/60 rounded-xl mb-8 max-w-md mx-auto animate-pulse"></div>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="h-12 w-32 bg-slate-700/60 rounded-xl animate-pulse"></div>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <div key={i} className="bg-slate-800/60 backdrop-blur-sm rounded-2xl shadow-2xl shadow-cyan-400/10 overflow-hidden border border-slate-600/40">
              <div className="h-48 bg-slate-700/60 animate-pulse"></div>
              <div className="p-6">
                <div className="h-6 bg-slate-700/60 rounded mb-2 animate-pulse"></div>
                <div className="h-4 bg-slate-700/60 rounded mb-3 animate-pulse"></div>
                <div className="h-10 bg-slate-700/60 rounded animate-pulse"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

// Main component with Suspense wrapper
export default function Designs() {
  return (
    <Suspense fallback={<DesignsLoading />}>
      <DesignsContent />
    </Suspense>
  );
}
