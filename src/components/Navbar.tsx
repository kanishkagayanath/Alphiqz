'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '/', icon: '🏠' },
    { name: 'Designs', href: '/designs', icon: '🎨' },
    { name: 'About Us', href: '/about', icon: '👥' },
    { name: 'Contact', href: '/contact', icon: '📧' },
  ];

  const isActive = (href: string) => {
    return pathname === href;
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-lg shadow-lg border-b border-purple-100'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 shadow-lg">
                <span className="text-white font-bold text-lg">A</span>
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full animate-pulse shadow-sm"></div>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Alphiq
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                className={`relative group px-4 py-2 rounded-lg transition-all duration-300 ${
                  isActive(item.href) 
                    ? 'bg-purple-50 text-purple-600' 
                    : 'hover:bg-purple-50'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center space-x-2">
                  <span className={`text-lg transition-all duration-300 ${
                    isActive(item.href) ? 'animate-bounce' : 'group-hover:animate-bounce'
                  }`}>
                    {item.icon}
                  </span>
                  <span className={`font-medium transition-colors duration-300 ${
                    isActive(item.href) 
                      ? 'text-purple-600' 
                      : 'text-gray-700 group-hover:text-purple-600'
                  }`}>
                    {item.name}
                  </span>
                </div>
                
                {/* Animated underline */}
                <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-600 to-blue-600 transition-all duration-300 rounded-full mx-2 ${
                  isActive(item.href) 
                    ? 'scale-x-100' 
                    : 'scale-x-0 group-hover:scale-x-100'
                }`}></div>
                
                {/* Hover glow effect */}
                <div className={`absolute inset-0 rounded-lg bg-gradient-to-r from-purple-200 to-blue-200 transition-opacity duration-300 -z-10 ${
                  isActive(item.href) 
                    ? 'opacity-20' 
                    : 'opacity-0 group-hover:opacity-20'
                }`}></div>
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button className="relative overflow-hidden bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105 group">
              <span className="relative z-10">Get Started</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute top-0 left-0 w-full h-full bg-white opacity-0 group-hover:opacity-20 animate-pulse"></div>
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden relative w-8 h-8 flex flex-col justify-center items-center space-y-1.5 group"
          >
            <div className={`w-6 h-0.5 bg-gradient-to-r from-purple-600 to-blue-600 transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
            <div className={`w-6 h-0.5 bg-gradient-to-r from-purple-600 to-blue-600 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></div>
            <div className={`w-6 h-0.5 bg-gradient-to-r from-purple-600 to-blue-600 transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${isMobileMenuOpen ? 'max-h-96 pb-6' : 'max-h-0'}`}>
          <div className="pt-4 space-y-2">
            {navItems.map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300 group ${
                  isActive(item.href) 
                    ? 'bg-purple-50 text-purple-600' 
                    : 'hover:bg-purple-50'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className={`text-xl transition-all duration-300 ${
                  isActive(item.href) ? 'animate-bounce' : 'group-hover:animate-bounce'
                }`}>
                  {item.icon}
                </span>
                <span className={`font-medium transition-colors duration-300 ${
                  isActive(item.href) 
                    ? 'text-purple-600' 
                    : 'text-gray-700 group-hover:text-purple-600'
                }`}>
                  {item.name}
                </span>
              </Link>
            ))}
            
            {/* Mobile CTA */}
            <div className="pt-4">
              <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Floating particles effect */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 bg-purple-300 rounded-full opacity-30 animate-float-${i + 1}`}
            style={{
              left: `${20 + i * 30}%`,
              animationDelay: `${i * 2}s`,
            }}
          ></div>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
