import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import GlobalHeader from 'components/ui/GlobalHeader';
import ProjectBreadcrumbs from 'components/ui/ProjectBreadcrumbs';
import FilterNavigation from 'components/ui/FilterNavigation';
import Icon from 'components/AppIcon';
import Image from 'components/AppImage';

const ProjectGallery = () => {
  const [filters, setFilters] = useState({
    category: 'all',
    technology: 'all',
    status: 'all'
  });
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('date');
  const [viewMode, setViewMode] = useState('grid');
  const [hoveredProject, setHoveredProject] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Projects data
  const projects = [
    {
      id: 'orbit-odyssey',
      title: 'Orbit Odyssey',
      description: 'Embark on a thrilling journey through the depths of space in this captivating 2D adventure that challenges your piloting skills and reflexes! Navigate your spacecraft through a perilous cosmic landscape filled with treacherous obstacles and celestial hazards.',
      category: 'game',
      technologies: ['unity'],
      status: 'in-progress',
      thumbnail: 'https://img.itch.zone/aW1nLzE1NzMyMDcwLnBuZw==/original/UokhDn.png',
      videoPreview: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4',
      releaseDate: '2024-06-02',
      teamSize: 1,
      duration: 'Ongoing',
      platforms: ['HTML5'],
      featured: true,
      downloads: 0,
      rating: 0,
      tags: ['2D', '8-Bit', 'Space', 'Retro', 'Pixel Art', 'Mobile']
    },
    {
      id: 'morocco-school-finder',
      title: 'Morocco School Finder',
      description: 'Discover the best educational institutions for your child with our smart search platform. Compare schools, read reviews, and make informed decisions about education in Morocco.',
      category: 'web',
      technologies: ['react', 'typescript', 'vite'],
      status: 'completed',
      thumbnail: 'https://images.unsplash.com/photo-1588072432836-e10032774350?w=800&h=600&fit=crop',
      videoPreview: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4',
      releaseDate: '2024-05-15',
      teamSize: 1,
      duration: '3 months',
      platforms: ['Web'],
      featured: true,
      downloads: 0,
      rating: 4.7,
      tags: ['Education', 'Morocco', 'School Search', 'React', 'TypeScript', 'Vite'],
      features: [
        'Smart search for schools across Morocco',
        'Compare schools by various criteria',
        'Read and submit reviews',
        'Filter by city, school type, and age group',
        'View detailed school profiles'
      ]
    }
  ];

  // Filter and search logic
  const filteredProjects = useMemo(() => {
    let filtered = projects.filter(project => {
      const matchesCategory = filters.category === 'all' || project.category === filters.category;
      const matchesTechnology = filters.technology === 'all' || project.technologies.includes(filters.technology);
      const matchesStatus = filters.status === 'all' || project.status === filters.status;
      const matchesSearch = searchQuery === '' || 
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCategory && matchesTechnology && matchesStatus && matchesSearch;
    });

    // Sort projects
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'date':
          return new Date(b.releaseDate) - new Date(a.releaseDate);
        case 'popularity':
          return b.downloads - a.downloads;
        case 'rating':
          return b.rating - a.rating;
        case 'title':
          return a.title.localeCompare(b.title);
        default:
          return 0;
      }
    });

    return filtered;
  }, [projects, filters, searchQuery, sortBy]);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed':
        return 'text-success bg-success/20 border-success/30';
      case 'in-progress':
        return 'text-warning bg-warning/20 border-warning/30';
      case 'prototype':
        return 'text-accent bg-accent/20 border-accent/30';
      default:
        return 'text-text-secondary bg-surface/50 border-surface/30';
    }
  };

  const getTechnologyIcon = (tech) => {
    const icons = {
      unity: 'Box',
      unreal: 'Gamepad2',
      react: 'Component',
      python: 'FileCode',
      csharp: 'Hash',
      javascript: 'Braces',
      typescript: 'Type',
      vite: 'Zap'
    };
    return icons[tech] || 'Code2';
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <GlobalHeader />
        <div className="pt-16 flex items-center justify-center min-h-screen">
          <div className="text-center">
            <div className="w-16 h-16 border-4 border-primary/30 border-t-primary rounded-full animate-spin mx-auto mb-4"></div>
            <p className="font-body text-text-secondary">Loading projects...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <GlobalHeader />
      <ProjectBreadcrumbs />
      
      {/* Hero Section */}
      <section className="pt-8 pb-12 bg-gradient-to-br from-background via-surface/30 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-heading text-4xl md:text-5xl lg:text-6xl font-black text-transparent bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text mb-6"
            >
             <br /> Project Gallery
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-body text-xl text-text-secondary max-w-3xl mx-auto mb-8"
            >
              Explore my collection of projects, from game development to web applications.
            </motion.p>
            
            {/* Search and Sort Controls */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-8"
            >
              <div className="relative flex-1 max-w-md">
                <Icon 
                  name="Search" 
                  size={20} 
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-tertiary" 
                />
                <input
                  type="text"
                  placeholder="Search projects..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-surface/50 border border-accent/20 rounded-lg text-text-primary placeholder-text-tertiary focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                />
              </div>
              
              <div className="flex items-center space-x-2">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-3 bg-surface/50 border border-accent/20 rounded-lg text-text-primary focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                >
                  <option value="date">Latest First</option>
                  <option value="popularity">Most Popular</option>
                  <option value="rating">Highest Rated</option>
                  <option value="title">Alphabetical</option>
                </select>
                
                <div className="flex bg-surface/50 border border-accent/20 rounded-lg p-1">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded transition-all duration-300 ${
                      viewMode === 'grid' ?'bg-primary text-background' :'text-text-secondary hover:text-primary'
                    }`}
                  >
                    <Icon name="Grid3X3" size={20} />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded transition-all duration-300 ${
                      viewMode === 'list' ?'bg-primary text-background' :'text-text-secondary hover:text-primary'
                    }`}
                  >
                    <Icon name="List" size={20} />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Filter Navigation */}
      <FilterNavigation 
        onFilterChange={handleFilterChange}
        initialFilters={filters}
        isSticky={true}
      />

      {/* Projects Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Results Summary */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-4">
              <h2 className="font-heading text-2xl font-bold text-text-primary">
                {filteredProjects.length} Project{filteredProjects.length !== 1 ? 's' : ''}
              </h2>
              {(filters.category !== 'all' || filters.technology !== 'all' || filters.status !== 'all' || searchQuery) && (
                <span className="text-sm font-caption text-text-secondary">
                  Filtered results
                </span>
              )}
            </div>
          </div>

          {/* Projects Display */}
          <AnimatePresence mode="wait">
            {filteredProjects.length === 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-center py-16"
              >
                <Icon name="Search" size={64} className="text-text-tertiary mx-auto mb-4" />
                <h3 className="font-heading text-xl font-bold text-text-primary mb-2">
                  No projects found
                </h3>
                <p className="font-body text-text-secondary mb-6">
                  Try adjusting your filters or search terms
                </p>
                <button
                  onClick={() => {
                    setFilters({ category: 'all', technology: 'all', status: 'all' });
                    setSearchQuery('');
                  }}
                  className="px-6 py-3 bg-primary text-background rounded-lg font-body font-medium hover:bg-primary/90 transition-all duration-300"
                >
                  Clear All Filters
                </button>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className={
                  viewMode === 'grid' ?'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' :'space-y-6'
                }
              >
                {filteredProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onMouseEnter={() => setHoveredProject(project.id)}
                    onMouseLeave={() => setHoveredProject(null)}
                    className={`group relative bg-surface/50 backdrop-blur-sm border border-accent/20 rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-500 hover:shadow-neon ${
                      viewMode === 'list' ? 'flex items-center' : ''
                    }`}
                  >
                    {/* Project Thumbnail */}
                    <div className={`relative overflow-hidden ${
                      viewMode === 'list' ? 'w-48 h-32 flex-shrink-0' : 'aspect-video'
                    }`}>
                      <Image
                        src={project.thumbnail}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      
                      {/* Overlay Effects */}
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      
                      {/* Status Badge */}
                      <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-caption font-medium border ${getStatusColor(project.status)}`}>
                        {project.status.replace('-', ' ').toUpperCase()}
                      </div>
                      
                      {/* Featured Badge */}
                      {project.featured && (
                        <div className="absolute top-4 right-4 px-3 py-1 bg-secondary/20 text-secondary border border-secondary/30 rounded-full text-xs font-caption font-medium">
                          FEATURED
                        </div>
                      )}
                      
                      {/* Hover Play Button */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="w-16 h-16 bg-primary/90 rounded-full flex items-center justify-center backdrop-blur-sm border border-primary/30 shadow-neon">
                          <Icon name="Play" size={24} className="text-background ml-1" />
                        </div>
                      </div>
                    </div>

                    {/* Project Info */}
                    <div className={`p-6 ${viewMode === 'list' ? 'flex-1' : ''}`}>
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="font-heading text-xl font-bold text-text-primary group-hover:text-primary transition-colors duration-300">
                          {project.title}
                        </h3>
                        {project.rating > 0 && (
                          <div className="flex items-center space-x-1 text-warning">
                            <Icon name="Star" size={16} className="fill-current" />
                            <span className="text-sm font-caption">{project.rating}</span>
                          </div>
                        )}
                      </div>
                      
                      <p className="font-body text-text-secondary mb-4 line-clamp-2">
                        {project.description}
                      </p>
                      
                      {/* Technology Stack */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech) => (
                          <div
                            key={tech}
                            className="flex items-center space-x-1 px-2 py-1 bg-accent/10 text-accent border border-accent/20 rounded text-xs font-caption"
                          >
                            <Icon name={getTechnologyIcon(tech)} size={12} />
                            <span className="capitalize">{tech}</span>
                          </div>
                        ))}
                      </div>
                      
                      {/* Project Stats */}
                      <div className="flex items-center justify-between text-xs font-caption text-text-tertiary mb-4">
                        <div className="flex items-center space-x-4">
                          <span>{project.teamSize} member{project.teamSize !== 1 ? 's' : ''}</span>
                          <span>{project.duration}</span>
                          {project.downloads > 0 && (
                            <span>{project.downloads.toLocaleString()} downloads</span>
                          )}
                        </div>
                        <span>{new Date(project.releaseDate).getFullYear()}</span>
                      </div>
                      
                      {/* Action Buttons */}
                      <div className="flex items-center space-x-3">
                        <Link
                          to={`/project-detail-case-study/${project.id}`}
                          className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 bg-primary text-background rounded-lg font-body font-medium hover:bg-primary/90 transition-all duration-300 group/btn"
                        >
                          <span>View Details</span>
                          <Icon 
                            name="ArrowRight" 
                            size={16} 
                            className="group-hover/btn:translate-x-1 transition-transform duration-300" 
                          />
                        </Link>
                        
                        <button className="p-2 bg-surface border border-accent/20 rounded-lg text-text-secondary hover:text-primary hover:border-primary/30 transition-all duration-300">
                          <Icon name="ExternalLink" size={16} />
                        </button>
                        
                        <button className="p-2 bg-surface border border-accent/20 rounded-lg text-text-secondary hover:text-primary hover:border-primary/30 transition-all duration-300">
                          <Icon name="Heart" size={16} />
                        </button>
                      </div>
                    </div>
                    
                    {/* Glitch Effect on Hover */}
                    {hoveredProject === project.id && (
                      <div className="absolute inset-0 pointer-events-none">
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5 animate-pulse"></div>
                      </div>
                    )}
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-surface/30 to-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl font-bold text-text-primary mb-4">
            Interested in My Work?
          </h2>
          <p className="font-body text-lg text-text-secondary mb-8">
            Whether it's game development or web applications, I'm open to collaborations and new opportunities.
          </p>
          <Link
            to="/contact-collaboration-hub"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-primary to-secondary text-background rounded-lg font-body font-medium hover:shadow-neon transition-all duration-300 group"
          >
            <span>Get In Touch</span>
            <Icon 
              name="Rocket" 
              size={20} 
              className="group-hover:translate-x-1 transition-transform duration-300" 
            />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ProjectGallery;