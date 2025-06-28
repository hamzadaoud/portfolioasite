import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../AppIcon';

const ProjectNavigation = ({ 
  currentProjectId = null, 
  projects = [], 
  onProjectChange = null 
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Default projects data if none provided
  const defaultProjects = [
    {
      id: 'cyber-runner',
      title: 'Cyber Runner',
      path: '/project-detail-case-study/cyber-runner',
      category: 'Action Game',
      thumbnail: '/assets/images/projects/cyber-runner-thumb.jpg'
    },
    {
      id: 'quantum-puzzle',
      title: 'Quantum Puzzle',
      path: '/project-detail-case-study/quantum-puzzle',
      category: 'Puzzle Game',
      thumbnail: '/assets/images/projects/quantum-puzzle-thumb.jpg'
    },
    {
      id: 'space-odyssey',
      title: 'Space Odyssey',
      path: '/project-detail-case-study/space-odyssey',
      category: 'Adventure Game',
      thumbnail: '/assets/images/projects/space-odyssey-thumb.jpg'
    },
    {
      id: 'neural-network',
      title: 'Neural Network',
      path: '/project-detail-case-study/neural-network',
      category: 'AI Simulation',
      thumbnail: '/assets/images/projects/neural-network-thumb.jpg'
    }
  ];

  const projectList = projects.length > 0 ? projects : defaultProjects;

  useEffect(() => {
    if (currentProjectId) {
      const index = projectList.findIndex(project => project.id === currentProjectId);
      if (index !== -1) {
        setCurrentIndex(index);
      }
    }
  }, [currentProjectId, projectList]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsVisible(currentScrollY < lastScrollY || currentScrollY < 100);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const handlePrevious = () => {
    const newIndex = currentIndex > 0 ? currentIndex - 1 : projectList.length - 1;
    setCurrentIndex(newIndex);
    if (onProjectChange) {
      onProjectChange(projectList[newIndex]);
    }
  };

  const handleNext = () => {
    const newIndex = currentIndex < projectList.length - 1 ? currentIndex + 1 : 0;
    setCurrentIndex(newIndex);
    if (onProjectChange) {
      onProjectChange(projectList[newIndex]);
    }
  };

  const currentProject = projectList[currentIndex];
  const previousProject = projectList[currentIndex > 0 ? currentIndex - 1 : projectList.length - 1];
  const nextProject = projectList[currentIndex < projectList.length - 1 ? currentIndex + 1 : 0];

  return (
    <div 
      className={`fixed bottom-6 left-1/2 transform -translate-x-1/2 z-1050 transition-all duration-300 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
      }`}
    >
      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center bg-surface/95 backdrop-blur-md rounded-2xl border border-accent/20 shadow-neon p-2">
        {/* Previous Project */}
        <Link
          to={previousProject.path}
          onClick={handlePrevious}
          className="group flex items-center space-x-3 px-4 py-3 rounded-xl hover:bg-primary/10 transition-all duration-300"
          title={`Previous: ${previousProject.title}`}
        >
          <Icon 
            name="ChevronLeft" 
            size={20} 
            className="text-text-secondary group-hover:text-primary transition-colors duration-300" 
          />
          <div className="text-left">
            <div className="text-xs font-caption text-text-tertiary">Previous</div>
            <div className="text-sm font-body text-text-secondary group-hover:text-primary transition-colors duration-300 truncate max-w-24">
              {previousProject.title}
            </div>
          </div>
        </Link>

        {/* Current Project Indicator */}
        <div className="flex items-center space-x-2 px-6 py-3 mx-2 bg-primary/10 rounded-xl border border-primary/20">
          <div className="w-2 h-2 bg-primary rounded-full shadow-neon animate-pulse"></div>
          <div className="text-center">
            <div className="text-xs font-caption text-text-tertiary">
              {currentIndex + 1} of {projectList.length}
            </div>
            <div className="text-sm font-body text-primary font-medium">
              {currentProject.title}
            </div>
          </div>
        </div>

        {/* Next Project */}
        <Link
          to={nextProject.path}
          onClick={handleNext}
          className="group flex items-center space-x-3 px-4 py-3 rounded-xl hover:bg-primary/10 transition-all duration-300"
          title={`Next: ${nextProject.title}`}
        >
          <div className="text-right">
            <div className="text-xs font-caption text-text-tertiary">Next</div>
            <div className="text-sm font-body text-text-secondary group-hover:text-primary transition-colors duration-300 truncate max-w-24">
              {nextProject.title}
            </div>
          </div>
          <Icon 
            name="ChevronRight" 
            size={20} 
            className="text-text-secondary group-hover:text-primary transition-colors duration-300" 
          />
        </Link>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden flex items-center justify-center space-x-4 bg-surface/95 backdrop-blur-md rounded-2xl border border-accent/20 shadow-neon p-3">
        <Link
          to={previousProject.path}
          onClick={handlePrevious}
          className="p-3 rounded-xl bg-primary/10 hover:bg-primary/20 transition-all duration-300 group"
          title={`Previous: ${previousProject.title}`}
        >
          <Icon 
            name="ChevronLeft" 
            size={24} 
            className="text-primary group-hover:scale-110 transition-transform duration-300" 
          />
        </Link>

        <div className="flex flex-col items-center space-y-1 px-4">
          <div className="flex space-x-1">
            {projectList.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-primary shadow-neon' 
                    : 'bg-text-tertiary'
                }`}
              />
            ))}
          </div>
          <div className="text-xs font-caption text-text-secondary text-center">
            {currentProject.title}
          </div>
        </div>

        <Link
          to={nextProject.path}
          onClick={handleNext}
          className="p-3 rounded-xl bg-primary/10 hover:bg-primary/20 transition-all duration-300 group"
          title={`Next: ${nextProject.title}`}
        >
          <Icon 
            name="ChevronRight" 
            size={24} 
            className="text-primary group-hover:scale-110 transition-transform duration-300" 
          />
        </Link>
      </div>
    </div>
  );
};

export default ProjectNavigation;