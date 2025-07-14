import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import GlobalHeader from 'components/ui/GlobalHeader';
import Icon from 'components/AppIcon';

import HeroSection from './components/HeroSection';
import FeaturedProjects from './components/FeaturedProjects';
import SkillsVisualization from './components/SkillsVisualization';
import AchievementsTimeline from './components/AchievementsTimeline';
import ContactAction from './components/ContactAction';
import ParticleBackground from './components/ParticleBackground';

const PortfolioHomeDashboard = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="relative mb-8">
            <div className="w-20 h-20 border-4 border-primary/30 border-t-primary rounded-full animate-spin mx-auto"></div>
            <div className="absolute inset-0 w-20 h-20 border-4 border-secondary/20 border-b-secondary rounded-full animate-spin mx-auto" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}></div>
          </div>
          <h2 className="font-heading text-xl font-bold text-primary mb-2">Initializing Portfolio</h2>
          <p className="font-body text-text-secondary">Loading holographic interface...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Particle Background */}
      <ParticleBackground mousePosition={mousePosition} />
      
      {/* Global Header */}
      <GlobalHeader />
      
      {/* Main Content */}
      <main className="relative z-10">
        {/* Hero Section */}
        <HeroSection />
        
        {/* Featured Projects Section */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-text-primary mb-4">
                Featured <span className="text-transparent bg-gradient-to-r from-primary to-secondary bg-clip-text">Projects</span>
              </h2>
              <p className="font-body text-lg text-text-secondary max-w-2xl mx-auto">
                Explore my latest game development projects showcasing cutting-edge technology and innovative gameplay mechanics.
              </p>
            </motion.div>
            <FeaturedProjects />
          </div>
        </section>

        {/* Skills Visualization Section */}
        <section className="py-16 lg:py-24 bg-surface/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-text-primary mb-4">
                Technical <span className="text-transparent bg-gradient-to-r from-accent to-primary bg-clip-text">Expertise</span>
              </h2>
              <p className="font-body text-lg text-text-secondary max-w-2xl mx-auto">
                Proficiency levels across various game development technologies and programming languages.
              </p>
            </motion.div>
            <SkillsVisualization />
          </div>
        </section>

        {/* Achievements Timeline Section */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-text-primary mb-4">
                Career <span className="text-transparent bg-gradient-to-r from-secondary to-accent bg-clip-text">Journey</span>
              </h2>
              <p className="font-body text-lg text-text-secondary max-w-2xl mx-auto">
                Key milestones and achievements in my game development career.
              </p>
            </motion.div>
            <AchievementsTimeline />
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-text-primary mb-6">
                Ready to Create Something <span className="text-transparent bg-gradient-to-r from-primary to-secondary bg-clip-text">Amazing?</span>
              </h2>
              <p className="font-body text-lg text-text-secondary mb-8 max-w-2xl mx-auto">
                Let's collaborate on your next game development project. From concept to launch, I bring technical expertise and creative vision to every project.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  to="/contact-collaboration-hub"
                  className="group flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-primary to-secondary rounded-lg font-body font-semibold text-background hover:shadow-neon transition-all duration-300 transform hover:scale-105"
                >
                  <Icon name="MessageSquare" size={20} />
                  <span>Start Collaboration</span>
                </Link>
                <Link
                  to="/project-gallery"
                  className="group flex items-center space-x-2 px-8 py-4 bg-surface border border-accent/30 rounded-lg font-body font-semibold text-text-primary hover:bg-accent/10 hover:border-accent transition-all duration-300"
                >
                  <Icon name="FolderOpen" size={20} />
                  <span>View All Projects</span>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Floating Contact Action */}
      <ContactAction />

      {/* Footer */}
      <footer className="bg-surface/50 border-t border-accent/20 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                <Icon name="Gamepad2" size={20} className="text-background" />
              </div>
              <div>
                <h3 className="font-heading text-lg font-bold text-text-primary">GameDev Portfolio</h3>
                <p className="font-caption text-xs text-text-secondary">Professional Game Developer</p>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <a href="#" className="text-text-secondary hover:text-primary transition-colors duration-300">
                <Icon name="Github" size={20} />
              </a>
              <a href="#" className="text-text-secondary hover:text-primary transition-colors duration-300">
                <Icon name="Linkedin" size={20} />
              </a>
              <a href="#" className="text-text-secondary hover:text-primary transition-colors duration-300">
                <Icon name="Twitter" size={20} />
              </a>
            </div>
          </div>
          <div className="mt-6 pt-6 border-t border-accent/20 text-center">
            <p className="font-body text-sm text-text-tertiary">
              © {new Date().getFullYear()} Hamza Daoud. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PortfolioHomeDashboard;