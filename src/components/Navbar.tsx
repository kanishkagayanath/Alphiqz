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
          ? 'bg-slate-900/95 backdrop-blur-xl shadow-2xl border-b border-cyan-400/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center h-16 relative">
          {/* Logo */}
          <Link href="/" className="absolute left-0 flex items-center space-x-2 group">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 via-teal-500 to-blue-600 rounded-2xl flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-12 shadow-lg shadow-cyan-400/25">
                <span className="text-white font-bold text-lg">A</span>
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-orange-400 to-pink-500 rounded-full animate-pulse shadow-sm"></div>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-400 bg-clip-text text-transparent">
              Alphiqz
            </span>
          </Link>

          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                className={`relative group px-5 py-2.5 rounded-xl transition-all duration-300 ${
                  isActive(item.href) 
                    ? 'bg-gradient-to-r from-cyan-500/20 to-teal-500/20 text-cyan-300 border border-cyan-400/30' 
                    : 'hover:bg-slate-800/60 text-gray-300 hover:text-cyan-300'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center space-x-2">
                  <span className={`text-lg transition-all duration-300 ${
                    isActive(item.href) ? 'animate-bounce' : 'group-hover:animate-bounce'
                  }`}>
                    {item.icon}
                  </span>
                  <span className={`font-semibold transition-colors duration-300`}>
                    {item.name}
                  </span>
                </div>
                
                {/* Animated underline */}
                <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 via-teal-400 to-blue-500 transition-all duration-300 rounded-full mx-2 ${
                  isActive(item.href) 
                    ? 'scale-x-100 shadow-lg shadow-cyan-400/50' 
                    : 'scale-x-0 group-hover:scale-x-100'
                }`}></div>
                
                {/* Hover glow effect */}
                <div className={`absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-400/10 via-teal-400/10 to-blue-500/10 transition-opacity duration-300 -z-10 ${
                  isActive(item.href) 
                    ? 'opacity-100' 
                    : 'opacity-0 group-hover:opacity-100'
                }`}></div>
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden absolute right-0 w-10 h-10 flex flex-col justify-center items-center space-y-1.5 group bg-slate-800/60 rounded-xl border border-cyan-400/20 hover:border-cyan-400/40 transition-all duration-300"
          >
            <div className={`w-6 h-0.5 bg-gradient-to-r from-cyan-400 to-teal-400 transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
            <div className={`w-6 h-0.5 bg-gradient-to-r from-cyan-400 to-teal-400 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></div>
            <div className={`w-6 h-0.5 bg-gradient-to-r from-cyan-400 to-teal-400 transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${isMobileMenuOpen ? 'max-h-96 pb-6' : 'max-h-0'}`}>
          <div className="pt-4 space-y-2 bg-slate-900/95 backdrop-blur-xl rounded-2xl border border-cyan-400/20 mx-2">
            <div className="p-4 space-y-2">
              {navItems.map((item, index) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300 group ${
                    isActive(item.href) 
                      ? 'bg-gradient-to-r from-cyan-500/20 to-teal-500/20 text-cyan-300 border border-cyan-400/30' 
                      : 'hover:bg-slate-800/60 text-gray-300 hover:text-cyan-300'
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <span className={`text-xl transition-all duration-300 ${
                    isActive(item.href) ? 'animate-bounce' : 'group-hover:animate-bounce'
                  }`}>
                    {item.icon}
                  </span>
                  <span className="font-semibold transition-colors duration-300">
                    {item.name}
                  </span>
                </Link>
              ))}
              
              {/* Mobile CTA */}
              <div className="pt-4">
                <button className="w-full bg-gradient-to-r from-cyan-500 via-teal-500 to-blue-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg hover:shadow-cyan-400/25 transition-all duration-300 border border-cyan-400/30">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating particles effect */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 bg-gradient-to-r from-cyan-400 to-teal-400 rounded-full opacity-40 animate-float-${i + 1} shadow-lg shadow-cyan-400/50`}
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
