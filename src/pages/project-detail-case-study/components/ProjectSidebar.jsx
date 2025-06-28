import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Icon from 'components/AppIcon';

const ProjectSidebar = ({ project, activeSection, setActiveSection }) => {
  const navigationItems = [
    { id: 'overview', label: 'Overview', icon: 'FileText' },
    { id: 'challenges', label: 'Challenges', icon: 'AlertTriangle' },
    { id: 'solutions', label: 'Solutions', icon: 'Lightbulb' },
    { id: 'results', label: 'Results', icon: 'TrendingUp' },
    { id: 'gallery', label: 'Gallery', icon: 'Image' }
  ];

  const socialLinks = [
    { name: 'GitHub', icon: 'Github', url: '#', color: 'text-text-primary' },
    { name: 'LinkedIn', icon: 'Linkedin', url: '#', color: 'text-primary' },
    { name: 'Twitter', icon: 'Twitter', url: '#', color: 'text-secondary' },
    { name: 'Share', icon: 'Share2', url: '#', color: 'text-accent' }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSection(sectionId);
    }
  };

  return (
    <div className="space-y-6">
      {/* Quick Navigation */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="sticky top-32"
      >
        <div className="bg-surface/80 backdrop-blur-sm rounded-xl border border-accent/20 p-6">
          <h3 className="font-heading text-lg font-bold text-text-primary mb-4 flex items-center space-x-2">
            <Icon name="Navigation" size={20} className="text-primary" />
            <span>Quick Navigation</span>
          </h3>
          
          <nav className="space-y-2">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg font-body font-medium transition-all duration-300 text-left ${
                  activeSection === item.id
                    ? 'bg-primary/20 text-primary border border-primary/30' :'text-text-secondary hover:text-primary hover:bg-primary/10'
                }`}
              >
                <Icon name={item.icon} size={16} />
                <span>{item.label}</span>
              </button>
            ))}
          </nav>
        </div>
      </motion.div>

      {/* Project Actions */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <div className="bg-surface/80 backdrop-blur-sm rounded-xl border border-accent/20 p-6">
          <h3 className="font-heading text-lg font-bold text-text-primary mb-4 flex items-center space-x-2">
            <Icon name="Zap" size={20} className="text-secondary" />
            <span>Actions</span>
          </h3>
          
          <div className="space-y-3">
            <Link
              to="/contact-collaboration-hub"
              className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-gradient-to-r from-primary to-secondary rounded-lg font-body font-bold text-background hover:shadow-neon transition-all duration-300 transform hover:scale-105"
            >
              <Icon name="MessageSquare" size={18} />
              <span>Discuss Project</span>
            </Link>
            
            <button className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-surface border border-accent/30 rounded-lg font-body font-medium text-text-primary hover:bg-accent/10 hover:border-accent transition-all duration-300">
              <Icon name="Heart" size={18} />
              <span>Add to Favorites</span>
            </button>
          </div>
        </div>
      </motion.div>

      {/* Social Sharing */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="bg-surface/80 backdrop-blur-sm rounded-xl border border-accent/20 p-6">
          <h3 className="font-heading text-lg font-bold text-text-primary mb-4 flex items-center space-x-2">
            <Icon name="Share2" size={20} className="text-accent" />
            <span>Share & Connect</span>
          </h3>
          
          <div className="grid grid-cols-2 gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                className={`flex items-center justify-center space-x-2 px-3 py-2 bg-background/50 rounded-lg border border-accent/20 hover:border-accent/40 transition-all duration-300 group ${link.color}`}
                title={link.name}
              >
                <Icon 
                  name={link.icon} 
                  size={16} 
                  className="group-hover:scale-110 transition-transform duration-300" 
                />
                <span className="font-caption text-xs">{link.name}</span>
              </a>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Project Stats */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <div className="bg-surface/80 backdrop-blur-sm rounded-xl border border-accent/20 p-6">
          <h3 className="font-heading text-lg font-bold text-text-primary mb-4 flex items-center space-x-2">
            <Icon name="BarChart3" size={20} className="text-success" />
            <span>Project Stats</span>
          </h3>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="font-caption text-text-tertiary">Views</span>
              <span className="font-body font-semibold text-text-primary">2,847</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-caption text-text-tertiary">Downloads</span>
              <span className="font-body font-semibold text-text-primary">1,203</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-caption text-text-tertiary">Likes</span>
              <span className="font-body font-semibold text-text-primary">456</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-caption text-text-tertiary">Last Updated</span>
              <span className="font-body font-semibold text-text-primary">2 days ago</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Back to Projects */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <Link
          to="/project-gallery"
          className="block w-full p-4 bg-gradient-to-r from-accent/20 to-primary/20 rounded-xl border border-accent/30 hover:border-accent/50 transition-all duration-300 group"
        >
          <div className="flex items-center space-x-3">
            <Icon 
              name="ArrowLeft" 
              size={20} 
              className="text-accent group-hover:scale-110 transition-transform duration-300" 
            />
            <div>
              <div className="font-body font-semibold text-text-primary">
                Back to Projects
              </div>
              <div className="font-caption text-text-tertiary text-sm">
                Explore more work
              </div>
            </div>
          </div>
        </Link>
      </motion.div>
    </div>
  );
};

export default ProjectSidebar;