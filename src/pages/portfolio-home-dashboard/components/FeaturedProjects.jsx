import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Icon from 'components/AppIcon';
import Image from 'components/AppImage';

const FeaturedProjects = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  const featuredProjects = [
    {
      id: 'orbit-odyssey',
      title: 'Orbit Odyssey',
      category: '2D Space Game',
      description: `Embark on a thrilling journey through space in this 2D adventure that challenges your piloting skills. Navigate through treacherous cosmic landscapes filled with obstacles and celestial hazards.`,
      image: 'https://img.itch.zone/aW1nLzE1NzMyMDcwLnBuZw==/original/UokhDn.png?w=800&h=600&fit=crop',
      technologies: ['Unity', 'C#', '2D Physics', 'Mobile'],
      status: 'In Development',
      year: '2024',
      featured: true,
      stats: {
        downloads: 'Coming Soon',
        rating: 'N/A',
        platforms: ['HTML5', 'Mobile']
      }
    },
    {
      id: 'morocco-school-finder',
      title: 'Morocco School Finder',
      category: 'Education Platform',
      description: `Discover and compare educational institutions in Morocco. Features advanced search filters, detailed school profiles, and user reviews to help parents make informed decisions.`,
      image: 'https://images.unsplash.com/photo-1588072432836-e10032774350?w=800&h=600&fit=crop',
      technologies: ['React', 'TypeScript', 'Vite', 'Node.js'],
      status: 'Completed',
      year: '2024',
      featured: true,
      stats: {
        downloads: 'Live',
        rating: '4.7',
        platforms: ['Web']
      },
      liveUrl: '#' // Added live URL
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed':
        return 'text-success bg-success/10 border-success/30';
      case 'In Development':
        return 'text-warning bg-warning/10 border-warning/30';
      case 'Prototype':
        return 'text-accent bg-accent/10 border-accent/30';
      default:
        return 'text-text-secondary bg-surface/50 border-text-secondary/30';
    }
  };

  return (
    <div className="grid lg:grid-cols-2 gap-8">
      {featuredProjects.map((project, index) => (
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
          viewport={{ once: true }}
          onMouseEnter={() => setHoveredProject(project.id)}
          onMouseLeave={() => setHoveredProject(null)}
          className="group relative"
        >
          {/* Project Card */}
          <div className="relative bg-surface/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-accent/20 hover:border-primary/50 transition-all duration-500 hover:shadow-neon">
            {/* Project Image */}
            <div className="relative h-48 overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent"></div>
              
              {/* Status Badge */}
              <div className={`absolute top-4 right-4 px-3 py-1 rounded-full border font-caption text-xs font-medium ${getStatusColor(project.status)}`}>
                {project.status}
              </div>

              {/* Glitch Effect on Hover */}
              {hoveredProject === project.id && (
                <div className="absolute inset-0 bg-primary/10 animate-pulse"></div>
              )}
            </div>

            {/* Project Content */}
            <div className="p-6">
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="font-heading text-xl font-bold text-text-primary mb-1 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="font-caption text-sm text-text-secondary">
                    {project.category} • {project.year}
                  </p>
                </div>
                {project.stats.rating !== 'N/A' && (
                  <div className="flex items-center space-x-1 text-warning">
                    <Icon name="Star" size={16} className="fill-current" />
                    <span className="font-caption text-sm">{project.stats.rating}</span>
                  </div>
                )}
              </div>

              {/* Description */}
              <p className="font-body text-sm text-text-secondary mb-4 line-clamp-3">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-primary/10 text-primary rounded-md font-caption text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Stats */}
              <div className="flex items-center justify-between text-xs text-text-tertiary mb-4">
                <div className="flex items-center space-x-1">
                  <Icon name={project.liveUrl ? "Globe" : "Download"} size={14} />
                  <span>{project.stats.downloads}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Icon name="Monitor" size={14} />
                  <span>{project.stats.platforms.join(', ')}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-2">
                <Link
                  to={`/project-detail-case-study/${project.id}`}
                  className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 bg-gradient-to-r from-primary to-secondary rounded-lg font-body font-medium text-background hover:shadow-neon transition-all duration-300 transform hover:scale-105"
                >
                  <Icon name="Eye" size={16} />
                  <span>View Details</span>
                </Link>
                
                {project.liveUrl ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-surface border border-accent/30 rounded-lg text-text-secondary hover:text-primary hover:border-primary/50 transition-all duration-300"
                  >
                    <Icon name="ExternalLink" size={16} />
                  </a>
                ) : (
                  <button className="p-2 bg-surface border border-accent/30 rounded-lg text-text-secondary hover:text-primary hover:border-primary/50 transition-all duration-300">
                    <Icon name="ExternalLink" size={16} />
                  </button>
                )}
              </div>
            </div>

            {/* Hover Effect Border */}
            {hoveredProject === project.id && (
              <div className="absolute inset-0 border-2 border-primary/50 rounded-2xl pointer-events-none animate-pulse"></div>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default FeaturedProjects;