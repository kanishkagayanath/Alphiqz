'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const featuredDesigns = [
    { id: 1, title: "Abstract Illustrations", type: "Vector Art", preview: "🎨" },
    { id: 2, title: "UI/UX Icons", type: "Icon Set", preview: "🔷" },
    { id: 3, title: "Brand Graphics", type: "Logo Design", preview: "✨" },
    { id: 4, title: "Digital Patterns", type: "Backgrounds", preview: "🌟" },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredDesigns.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [featuredDesigns.length]);

  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-left">
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-100 to-blue-100 rounded-full mb-6">
                <span className="text-purple-600 font-medium">🎯 Free Design Assets</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                Welcome to
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600">
                  Alphiq
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 max-w-2xl">
                Your ultimate destination for premium illustration designs and creative assets. 
                Download high-quality vectors, icons, and graphics - completely free for personal and commercial use.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link href="/designs" className="group bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-2xl transition-all duration-300 transform hover:scale-105 text-center">
                  <span className="flex items-center justify-center">
                    Explore Designs
                    <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </Link>
                
                <button className="border-2 border-purple-200 text-purple-600 px-8 py-4 rounded-xl font-semibold hover:border-purple-600 hover:bg-purple-50 transition-all duration-300 group">
                  <span className="flex items-center justify-center">
                    <svg className="mr-2 w-5 h-5 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                    Follow Us
                  </span>
                </button>
              </div>
              
              {/* Stats */}
              <div className="flex space-x-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600">1000+</div>
                  <div className="text-gray-500 text-sm">Assets</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">50K+</div>
                  <div className="text-gray-500 text-sm">Downloads</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-indigo-600">100%</div>
                  <div className="text-gray-500 text-sm">Free</div>
                </div>
              </div>
            </div>
            
            {/* Right Content - Featured Design Showcase */}
            <div className="relative">
              <div className="relative w-full h-96 bg-gradient-to-br from-purple-400 to-blue-500 rounded-3xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="text-6xl mb-4 animate-bounce">
                      {featuredDesigns[currentSlide].preview}
                    </div>
                    <h3 className="text-2xl font-bold mb-2">
                      {featuredDesigns[currentSlide].title}
                    </h3>
                    <p className="text-purple-100">
                      {featuredDesigns[currentSlide].type}
                    </p>
                  </div>
                </div>
                
                {/* Slide indicators */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {featuredDesigns.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentSlide ? 'bg-white' : 'bg-white bg-opacity-50'
                      }`}
                    />
                  ))}
                </div>
              </div>
              
              {/* Floating design elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-yellow-400 rounded-full opacity-80 animate-float-1"></div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-pink-400 rounded-full opacity-80 animate-float-2"></div>
              <div className="absolute top-1/2 -right-8 w-12 h-12 bg-green-400 rounded-full opacity-80 animate-float-3"></div>
            </div>
          </div>
        </div>
        
        {/* Background decorative elements */}
        <div className="absolute top-32 left-20 w-2 h-2 bg-purple-300 rounded-full opacity-60 animate-pulse"></div>
        <div className="absolute bottom-40 right-32 w-3 h-3 bg-blue-300 rounded-full opacity-60 animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-64 right-20 w-1.5 h-1.5 bg-indigo-300 rounded-full opacity-60 animate-pulse" style={{animationDelay: '2s'}}></div>
      </section>

      {/* Categories Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Browse by Category
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover organized collections of premium design assets crafted for your creative projects
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                name: 'Illustrations', 
                count: '500+', 
                color: 'from-pink-400 to-rose-500',
                icon: '🎨',
                description: 'Vector illustrations & artwork'
              },
              { 
                name: 'Icons & UI', 
                count: '300+', 
                color: 'from-blue-400 to-cyan-500',
                icon: '🔷',
                description: 'Interface elements & icons'
              },
              { 
                name: 'Patterns', 
                count: '150+', 
                color: 'from-green-400 to-emerald-500',
                icon: '🌟',
                description: 'Seamless patterns & textures'
              },
              { 
                name: 'Logos & Branding', 
                count: '100+', 
                color: 'from-purple-400 to-violet-500',
                icon: '✨',
                description: 'Brand identity elements'
              },
            ].map((category, index) => (
              <div key={category.name} className="group cursor-pointer" style={{animationDelay: `${index * 0.1}s`}}>
                <div className={`relative h-64 bg-gradient-to-br ${category.color} rounded-2xl p-6 text-white transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl overflow-hidden`}>
                  <div className="relative z-10">
                    <div className="text-4xl mb-4 group-hover:animate-bounce">{category.icon}</div>
                    <h3 className="text-2xl font-bold mb-2">{category.name}</h3>
                    <p className="text-lg opacity-90 mb-2">{category.count} assets</p>
                    <p className="text-sm opacity-75">{category.description}</p>
                  </div>
                  
                  {/* Background pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-4 right-4 w-16 h-16 border-2 border-white rounded-full"></div>
                    <div className="absolute bottom-4 left-4 w-12 h-12 border-2 border-white rounded-lg rotate-45"></div>
                    <div className="absolute top-1/2 right-8 w-8 h-8 bg-white rounded-full"></div>
                  </div>
                  
                  <div className="absolute bottom-4 right-4">
                    <div className="bg-white bg-opacity-20 px-3 py-1 rounded-lg text-sm font-medium">
                      Browse →
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Alphiq?
            </h2>
            <p className="text-xl text-gray-600">
              We're committed to providing the best design assets for creators worldwide
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                title: 'Premium Quality', 
                desc: 'Professional-grade designs created by expert illustrators and designers',
                icon: '💎'
              },
              { 
                title: '100% Free', 
                desc: 'All assets are completely free for personal and commercial use with no hidden costs',
                icon: '🆓'
              },
              { 
                title: 'Weekly Updates', 
                desc: 'New designs and collections added every week to keep your projects fresh',
                icon: '🔄'
              },
            ].map((feature, index) => (
              <div key={feature.title} className="text-center p-8 bg-white rounded-2xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <div className="text-5xl mb-6">{feature.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Create Something Amazing?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Join thousands of creators who trust Alphiq for their design needs. Start downloading premium assets today!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/designs" className="bg-white text-purple-600 px-8 py-4 rounded-xl font-semibold hover:shadow-2xl transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center">
              Start Browsing
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            
            <Link href="/about" className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center">
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
