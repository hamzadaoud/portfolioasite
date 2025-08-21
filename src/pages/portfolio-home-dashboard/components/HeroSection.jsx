import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Icon from 'components/AppIcon';
import Image from 'components/AppImage';

const HeroSection = () => {
  const [currentTitle, setCurrentTitle] = useState(0);
  const [isAvailable, setIsAvailable] = useState(true);

  const titles = [
    "Game Developer",
    "Unity 3D Specialist",
    "C# Programmer",
    "Creative Game Designer"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitle((prev) => (prev + 1) % titles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const profileData = {
    name: "Hamza Daoud",
    currentTitle: titles[currentTitle],
    location: "Marrakech, Morocco",
    experience: "3+ Years",
    projectsCompleted: "10+",
    bio: `Passionate game developer and Unity 3D specialist with extensive experience in C# programming and game design. Skilled in creating immersive and engaging video games with a strong focus on innovation, performance, and player experience. In addition to development, I have experience in digital marketing and user acquisition, applying strategies to promote projects online. Dedicated to building a successful video game company in Morocco.`,
    avatar: "https://i.imgur.com/your-avatar.jpg" // Replace with your actual image URL
  };

  return (
    <section
      className="relative min-h-screen flex items-center justify-center pt-16"
      aria-label="Hero section introducing Hamza Daoud, game developer and Unity specialist"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" aria-hidden="true"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            {/* Availability Status */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center space-x-2 px-4 py-2 bg-success/10 border border-success/30 rounded-full mb-6"
              role="status"
              aria-live="polite"
            >
              <div
                className={`w-2 h-2 rounded-full ${
                  isAvailable ? 'bg-success animate-pulse' : 'bg-warning'
                }`}
              ></div>
              <span className="font-caption text-sm text-success font-medium">
                {isAvailable ? 'Available for Projects' : 'Currently Busy'}
              </span>
            </motion.div>

            {/* Name and Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="font-heading text-4xl md:text-5xl lg:text-6xl font-black text-text-primary mb-4"
            >
              {profileData.name}
            </motion.h1>

            <motion.div
              key={currentTitle}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="h-12 mb-6"
            >
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-transparent bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text">
                {profileData.currentTitle}
              </h2>
            </motion.div>

            {/* Bio */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="font-body text-lg text-text-secondary mb-8 max-w-2xl"
            >
              {profileData.bio}
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap justify-center lg:justify-start gap-6 mb-8"
              aria-label="Key stats about Hamza Daoud"
            >
              <div className="text-center">
                <div className="font-heading text-2xl font-bold text-primary">{profileData.experience}</div>
                <div className="font-caption text-sm text-text-tertiary">Experience</div>
              </div>
              <div className="text-center">
                <div className="font-heading text-2xl font-bold text-secondary">{profileData.projectsCompleted}</div>
                <div className="font-caption text-sm text-text-tertiary">Projects</div>
              </div>
              <div className="text-center">
                <div className="font-heading text-2xl font-bold text-accent">Unity</div>
                <div className="font-caption text-sm text-text-tertiary">Specialty</div>
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Link
                to="/project-gallery"
                className="group flex items-center justify-center space-x-2 px-8 py-4 bg-gradient-to-r from-primary to-secondary rounded-lg font-body font-semibold text-background hover:shadow-neon transition-all duration-300 transform hover:scale-105"
                aria-label="View Hamza Daoud's projects"
              >
                <Icon name="Play" size={20} />
                <span>View Projects</span>
              </Link>
              
              <a
                href="/files/HamzaDaoud_Resume.pdf"
                download
                className="group flex items-center justify-center space-x-2 px-8 py-4 bg-surface border border-accent/30 rounded-lg font-body font-semibold text-text-primary hover:bg-accent/10 hover:border-accent transition-all duration-300"
                aria-label="Download Hamza Daoud's resume"
              >
                <Icon name="Download" size={20} />
                <span>Download Resume</span>
              </a>
            </motion.div>
          </motion.div>

          {/* Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative" aria-hidden="true">
              {/* Holographic Border Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent rounded-2xl blur-sm opacity-75 animate-pulse"></div>
              
              {/* Profile Card */}
              <div className="relative bg-surface/90 backdrop-blur-md rounded-2xl p-8 border border-accent/30 shadow-neon max-w-sm">
                {/* Avatar */}
                <div className="relative mb-6">
                  <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-primary/50 shadow-neon">
                    <Image
                      src={profileData.avatar}
                      alt={`Avatar of ${profileData.name}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-success rounded-full border-4 border-surface flex items-center justify-center">
                    <div className="w-3 h-3 bg-success rounded-full animate-pulse"></div>
                  </div>
                </div>

                {/* Profile Info */}
                <div className="text-center">
                  <h3 className="font-heading text-xl font-bold text-text-primary mb-2">
                    {profileData.name}
                  </h3>
                  <p className="font-body text-primary font-medium mb-4">
                    {profileData.currentTitle}
                  </p>
                  
                  <div className="flex items-center justify-center space-x-2 text-text-secondary mb-6">
                    <Icon name="MapPin" size={16} aria-hidden="true" />
                    <span className="font-body text-sm">{profileData.location}</span>
                  </div>

                  {/* Social Links */}
                  <div className="flex justify-center space-x-4">
                    <a
                      href="https://github.com/hamzadaoud"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors duration-300"
                      aria-label="Hamza Daoud GitHub Profile"
                    >
                      <Icon name="Github" size={20} />
                    </a>
                    <a
                      href="https://ma.linkedin.com/in/hamza-daoud-419a45184"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-secondary/10 text-secondary hover:bg-secondary/20 transition-colors duration-300"
                      aria-label="Hamza Daoud LinkedIn Profile"
                    >
                      <Icon name="Linkedin" size={20} />
                    </a>
                   
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        aria-hidden="true"
      >
        <div className="flex flex-col items-center space-y-2 text-text-tertiary">
          <span className="font-caption text-xs">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
