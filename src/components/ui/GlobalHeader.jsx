import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';

const GlobalHeader = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navigationItems = [
    {
      label: 'Home',
      path: '/portfolio-home-dashboard',
      icon: 'Home',
      description: 'Portfolio overview and featured work'
    },
    {
      label: 'Projects',
      path: '/project-gallery',
      icon: 'FolderOpen',
      description: 'Game development portfolio gallery'
    },
    {
      label: 'Skills',
      path: '/skills-technology-showcase',
      icon: 'Code2',
      description: 'Technical capabilities showcase'
    },
    {
      label: 'Blog',
      path: '/development-blog',
      icon: 'BookOpen',
      description: 'Development insights and articles'
    },
    {
      label: 'Contact',
      path: '/contact-collaboration-hub',
      icon: 'MessageSquare',
      description: 'Professional collaboration hub'
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const isActiveRoute = (path) => {
    return location.pathname === path;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-1000 transition-all duration-300 ${isScrolled
          ? 'bg-surface/95 backdrop-blur-md shadow-neon'
          : 'bg-surface/80 backdrop-blur-sm'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            to="/portfolio-home-dashboard"
            className="flex items-center space-x-3 group"
          >
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center shadow-neon group-hover:shadow-neon-lg transition-all duration-300">
                <Icon
                  name="Gamepad2"
                  size={24}
                  className="text-background group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </div>
            <div className="hidden sm:block">
              <h1 className="font-heading text-xl font-bold text-text-primary group-hover:text-primary transition-colors duration-300">
                GameDev
              </h1>
              <p className="font-caption text-xs text-text-secondary -mt-1">
                Portfolio
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`group relative px-4 py-2 rounded-lg font-body font-medium transition-all duration-300 ${isActiveRoute(item.path)
                    ? 'text-primary bg-primary/10 shadow-neon'
                    : 'text-text-secondary hover:text-primary hover:bg-primary/5'
                  }`}
                title={item.description}
              >
                <div className="flex items-center space-x-2">
                  <Icon
                    name={item.icon}
                    size={18}
                    className={`transition-all duration-300 ${isActiveRoute(item.path)
                        ? 'text-primary' : 'text-text-secondary group-hover:text-primary'
                      }`}
                  />
                  <span>{item.label}</span>
                </div>
                {isActiveRoute(item.path) && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-primary rounded-full shadow-neon"></div>
                )}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 rounded-lg text-text-secondary hover:text-primary hover:bg-primary/5 transition-all duration-300"
            aria-label="Toggle mobile menu"
          >
            <Icon
              name={isMobileMenuOpen ? 'X' : 'Menu'}
              size={24}
              className="transition-transform duration-300"
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay - Enhanced Glassmorphic style */}
{isMobileMenuOpen && (
  <div className="md:hidden fixed inset-0 top-16 z-1100 bg-gradient-to-br from-surface/90 to-surface/95 backdrop-blur-xl border-t border-accent/20 shadow-[0_8px_32px_0_rgba(0,0,0,0.2)]">
    <nav className="px-4 py-6 space-y-3">
      {navigationItems.map((item) => (
        <Link
          key={item.path}
          to={item.path}
          className={`group flex items-center space-x-3 px-4 py-3 rounded-xl font-body font-medium transition-all duration-300 ${
            isActiveRoute(item.path)
              ? 'text-primary bg-primary/10 shadow-neon border border-primary/20'
              : 'text-text-primary hover:text-primary bg-white/5 hover:bg-primary/5 border border-white/5 hover:border-primary/10'
          }`}
        >
          <div className={`p-2 rounded-lg ${
            isActiveRoute(item.path)
              ? 'bg-primary/10 text-primary'
              : 'bg-white/5 text-text-secondary group-hover:bg-primary/5 group-hover:text-primary'
          }`}>
            <Icon 
              name={item.icon} 
              size={20} 
              className="transition-colors duration-300"
            />
          </div>
          <div className="flex-1">
            <div className="text-base">{item.label}</div>
            <div className={`text-xs ${
              isActiveRoute(item.path)
                ? 'text-primary/80'
                : 'text-text-tertiary group-hover:text-primary/70'
            }`}>
              {item.description}
            </div>
          </div>
          {isActiveRoute(item.path) && (
            <div className="w-2 h-2 bg-primary rounded-full shadow-neon"></div>
          )}
        </Link>
      ))}
    </nav>
  </div>
)}
    </header>
  );
};

export default GlobalHeader;
