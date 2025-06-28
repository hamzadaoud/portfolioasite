import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

import GlobalHeader from 'components/ui/GlobalHeader';
import ProjectBreadcrumbs from 'components/ui/ProjectBreadcrumbs';
import ProjectNavigation from 'components/ui/ProjectNavigation';
import Icon from 'components/AppIcon';

// Components
import ProjectHero from './components/ProjectHero';
import ProjectMetrics from './components/ProjectMetrics';
import ProjectContent from './components/ProjectContent';
import ProjectGallery from './components/ProjectGallery';
import ProjectDownloads from './components/ProjectDownloads';
import ProjectSidebar from './components/ProjectSidebar';
import RelatedProjects from './components/RelatedProjects';

const ProjectDetailCaseStudy = () => {
  const { projectId } = useParams();
  const [activeSection, setActiveSection] = useState('overview');
  const [isLoading, setIsLoading] = useState(true);
  const [currentProject, setCurrentProject] = useState(null);

  // Mock project data
  const projectsData = {
    'orbit-odyssey': {
      id: 'orbit-odyssey',
      title: 'Orbit Odyssey',
      subtitle: '2D Space Navigation Adventure',
      category: 'Game Development',
      type: 'game', // Added project type
      status: 'in-progress',
      description: `Embark on a thrilling journey through the depths of space in this captivating 2D adventure that challenges your piloting skills and reflexes! Navigate your spacecraft through a perilous cosmic landscape filled with treacherous obstacles and celestial hazards.`,
      heroVideo: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      heroImage: 'https://img.itch.zone/aW1nLzE1NzMyMDcwLnBuZw==/original/UokhDn.png?w=1200&h=600&fit=crop',
      technologies: ['Unity', 'C#', 'Photoshop', 'Aseprite'],
      platforms: ['HTML5', 'Mobile Web'],
      teamSize: 1,
      duration: 'Ongoing',
      role: 'Solo Developer & Designer',
      challenges: `Creating precise yet challenging controls for mobile was the primary difficulty. The physics-based movement needed to feel responsive while maintaining realistic space navigation mechanics.`,
      solutions: `Developed a custom control system that combines touch gestures with virtual buttons, allowing players to choose their preferred input method. Implemented a dynamic difficulty adjustment system.`,
      results: `Early prototypes have received positive feedback for their tight controls and satisfying difficulty curve. The game's unique take on space navigation has been praised for its fresh approach.`,
      gallery: [
        'https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1454789548928-9efd52dc4031?w=800&h=600&fit=crop'
      ],
      downloads: [
        { name: 'Web Demo', size: '15 MB', type: 'html5', url: '#' },
        { name: 'Source Code', size: '42 MB', type: 'zip', url: '#' }
      ]
    },
    'morocco-school-finder': {
      id: 'morocco-school-finder',
      title: 'Morocco School Finder',
      subtitle: 'Educational Institution Search Platform',
      category: 'Web Application',
      type: 'website', // Added project type
      status: 'completed',
      description: `A comprehensive platform helping parents and students discover and compare educational institutions across Morocco. The web application features advanced search filters, detailed school profiles, user reviews, and comparison tools.`,
      heroVideo: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      heroImage: 'https://images.unsplash.com/photo-1588072432836-e10032774350?w=1200&h=600&fit=crop',
      technologies: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Node.js'],
      platforms: ['Web'],
      teamSize: 1,
      duration: '3 months',
      role: 'Full-stack Developer',
      features: [ // Changed from challenges/solutions for websites
        'Advanced search filters by location, school type, and curriculum',
        'Detailed school profiles with photos and key information',
        'User review and rating system',
        'Responsive design for all devices',
        'Comparison tool for side-by-side evaluation'
      ],
      results: `The platform has been well-received by users, with particular praise for its clean interface and comprehensive search capabilities. It currently indexes over 1,200 educational institutions across Morocco.`,
      gallery: [
        'https://images.unsplash.com/photo-1588072432836-e10032774350?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=600&fit=crop'
      ],
      liveUrl: '#' // Added live URL for websites
    }
  };

  const allProjects = [
    {
      id: 'orbit-odyssey',
      title: 'Orbit Odyssey',
      path: '/project-detail-case-study/orbit-odyssey',
      category: 'Game Development',
      thumbnail: 'https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=400&h=300&fit=crop'
    },
    {
      id: 'morocco-school-finder',
      title: 'Morocco School Finder',
      path: '/project-detail-case-study/morocco-school-finder',
      category: 'Web Application',
      thumbnail: 'https://images.unsplash.com/photo-1588072432836-e10032774350?w=400&h=300&fit=crop'
    }
  ];

  // Determine if the project is a website
  const isWebsite = currentProject?.type === 'website';

  useEffect(() => {
    const loadProject = () => {
      setIsLoading(true);
      
      setTimeout(() => {
        const project = projectsData[projectId];
        setCurrentProject(project);
        setIsLoading(false);
      }, 1000);
    };

    loadProject();
  }, [projectId]);

  useEffect(() => {
    const loadProject = () => {
      setIsLoading(true);
      
      // Simulate loading delay
      setTimeout(() => {
        const project = projectsData[projectId];
        setCurrentProject(project);
        setIsLoading(false);
      }, 1000);
    };

    loadProject();
  }, [projectId]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['overview', 'challenges', 'solutions', 'results', 'gallery'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <GlobalHeader />
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <div className="w-16 h-16 border-4 border-primary/30 border-t-primary rounded-full animate-spin mx-auto mb-4"></div>
            <p className="font-body text-text-secondary">Loading project details...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <GlobalHeader />
      <ProjectBreadcrumbs projectName={currentProject?.title} />
      
      <main className="relative">
        {/* Hero Section */}
        {currentProject && <ProjectHero project={currentProject} />}
        
        {/* Metrics Dashboard - Only for games */}
        {!isWebsite && currentProject && <ProjectMetrics project={currentProject} />}
        
        {/* Main Content Area */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3">
              {currentProject && (
                <ProjectContent 
                  project={currentProject} 
                  activeSection={activeSection}
                  setActiveSection={setActiveSection}
                  isWebsite={isWebsite}
                />
              )}
              
              {/* Gallery Section */}
              {currentProject && <ProjectGallery project={currentProject} />}
              
              {/* Downloads Section - Only for games */}
              {!isWebsite && currentProject && <ProjectDownloads project={currentProject} />}
              
              {/* Live URL Button - Only for websites */}
              {isWebsite && currentProject?.liveUrl && (
                <div className="mt-12 text-center">
                  <a
                    href={currentProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 px-8 py-4 bg-primary text-background rounded-lg font-body font-medium hover:bg-primary/90 transition-all duration-300 group"
                  >
                    <span>Visit Live Website</span>
                    <Icon 
                      name="ExternalLink" 
                      size={20} 
                      className="group-hover:translate-x-1 transition-transform duration-300" 
                    />
                  </a>
                </div>
              )}
            </div>
            
            {/* Sidebar */}
            <div className="lg:col-span-1">
              {currentProject && (
                <ProjectSidebar 
                  project={currentProject}
                  activeSection={activeSection}
                  setActiveSection={setActiveSection}
                  isWebsite={isWebsite}
                />
              )}
            </div>
          </div>
        </div>
        
        {/* Related Projects */}
        {currentProject && (
          <RelatedProjects currentProjectId={currentProject.id} projects={allProjects} />
        )}
      </main>
      
      {/* Project Navigation */}
      {currentProject && (
        <ProjectNavigation 
          currentProjectId={currentProject.id}
          projects={allProjects}
        />
      )}
    </div>
  );
};

export default ProjectDetailCaseStudy;