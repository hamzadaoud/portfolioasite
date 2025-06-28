import React from 'react';
import { Link } from 'react-router-dom';
import Icon from 'components/AppIcon';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        {/* Animated 404 */}
        <div className="relative mb-8">
          <h1 className="font-heading text-8xl md:text-9xl font-black text-transparent bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text animate-pulse">
            404
          </h1>
          <div className="absolute inset-0 font-heading text-8xl md:text-9xl font-black text-primary/20 blur-sm">
            404
          </div>
        </div>

        {/* Glitch Effect Text */}
        <div className="mb-8">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-text-primary mb-4 glitch-effect">
            Page Not Found
          </h2>
          <p className="font-body text-lg text-text-secondary mb-6">
            The page you're looking for has been moved to another dimension or doesn't exist in this reality.
          </p>
        </div>

        {/* Navigation Options */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            to="/portfolio-home-dashboard"
            className="group flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-primary to-secondary rounded-lg font-body font-medium text-background hover:shadow-neon transition-all duration-300"
          >
            <Icon name="Home" size={20} />
            <span>Return Home</span>
          </Link>
          
          <Link
            to="/project-gallery"
            className="group flex items-center space-x-2 px-6 py-3 bg-surface border border-accent/30 rounded-lg font-body font-medium text-text-primary hover:bg-accent/10 hover:border-accent transition-all duration-300"
          >
            <Icon name="FolderOpen" size={20} />
            <span>View Projects</span>
          </Link>
        </div>

        {/* Decorative Elements */}
        <div className="mt-12 flex justify-center space-x-4 opacity-50">
          <div className="w-2 h-2 bg-primary rounded-full animate-ping"></div>
          <div className="w-2 h-2 bg-secondary rounded-full animate-ping" style={{ animationDelay: '0.2s' }}></div>
          <div className="w-2 h-2 bg-accent rounded-full animate-ping" style={{ animationDelay: '0.4s' }}></div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;