import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from 'components/AppIcon';
import Image from 'components/AppImage';

const ProjectHero = ({ project }) => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [showParticles, setShowParticles] = useState(true);

  const handlePlayVideo = () => {
    setIsVideoPlaying(true);
    setShowParticles(false);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with parallax effect */}
      <div className="absolute inset-0">
        <Image
          src={project.heroImage}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/90"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-secondary/10"></div>
      </div>

      {/* Animated particles */}
      {showParticles && (
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-primary rounded-full"
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                opacity: 0
              }}
              animate={{
                y: [null, -100],
                opacity: [0, 1, 0]
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 2
              }}
            />
          ))}
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Project Category */}
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-primary/20 rounded-full border border-primary/30 mb-6">
            <Icon name="Gamepad2" size={16} className="text-primary" />
            <span className="font-caption text-primary font-medium">{project.category}</span>
          </div>

          {/* Project Title */}
          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-black text-text-primary mb-4">
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              {project.title}
            </span>
          </h1>

          {/* Subtitle */}
          <p className="font-body text-xl md:text-2xl text-text-secondary mb-8 max-w-2xl mx-auto">
            {project.subtitle}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            {!isVideoPlaying ? (
              <button
                onClick={handlePlayVideo}
                className="group flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-primary to-secondary rounded-lg font-body font-bold text-background hover:shadow-neon transition-all duration-300 transform hover:scale-105"
              >
                <Icon name="Play" size={24} className="group-hover:scale-110 transition-transform duration-300" />
                <span>Watch Demo</span>
              </button>
            ) : (
              <div className="w-full max-w-2xl aspect-video bg-surface rounded-lg overflow-hidden shadow-neon">
                <iframe
                  src={project.heroVideo}
                  title={`${project.title} Demo`}
                  className="w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            )}

            <a
              href="#overview"
              className="group flex items-center space-x-3 px-8 py-4 bg-surface/80 backdrop-blur-sm border border-accent/30 rounded-lg font-body font-bold text-text-primary hover:bg-accent/10 hover:border-accent transition-all duration-300"
            >
              <Icon name="FileText" size={24} className="group-hover:text-accent transition-colors duration-300" />
              <span>Read Case Study</span>
            </a>
          </div>

          {/* Status Badge */}
          <div className="mt-8">
            <div className={`inline-flex items-center space-x-2 px-4 py-2 rounded-full border ${
              project.status === 'completed' 
                ? 'bg-success/20 border-success/30 text-success'
                : project.status === 'in-progress' ?'bg-warning/20 border-warning/30 text-warning' :'bg-accent/20 border-accent/30 text-accent'
            }`}>
              <Icon 
                name={
                  project.status === 'completed' ? 'CheckCircle' :
                  project.status === 'in-progress' ? 'Clock' : 'Lightbulb'
                } 
                size={16} 
              />
              <span className="font-caption font-medium capitalize">
                {project.status.replace('-', ' ')}
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <div className="flex flex-col items-center space-y-2">
          <span className="font-caption text-text-tertiary text-sm">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-primary rounded-full mt-2"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ProjectHero;