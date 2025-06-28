import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';

const ProjectBreadcrumbs = ({ projectName = null, customBreadcrumbs = null }) => {
  const location = useLocation();

  const generateBreadcrumbs = () => {
    if (customBreadcrumbs) {
      return customBreadcrumbs;
    }

    const breadcrumbs = [
      {
        label: 'Portfolio',
        path: '/portfolio-home-dashboard',
        icon: 'Home'
      }
    ];

    if (location.pathname.includes('/project-gallery')) {
      breadcrumbs.push({
        label: 'Projects',
        path: '/project-gallery',
        icon: 'FolderOpen'
      });
    }

    if (location.pathname.includes('/project-detail-case-study')) {
      breadcrumbs.push({
        label: 'Projects',
        path: '/project-gallery',
        icon: 'FolderOpen'
      });
      
      if (projectName) {
        breadcrumbs.push({
          label: projectName,
          path: location.pathname,
          icon: 'FileText',
          isActive: true
        });
      }
    }

    if (location.pathname.includes('/skills-technology-showcase')) {
      breadcrumbs.push({
        label: 'Skills',
        path: '/skills-technology-showcase',
        icon: 'Code2',
        isActive: true
      });
    }

    if (location.pathname.includes('/development-blog')) {
      breadcrumbs.push({
        label: 'Blog',
        path: '/development-blog',
        icon: 'BookOpen',
        isActive: true
      });
    }

    if (location.pathname.includes('/contact-collaboration-hub')) {
      breadcrumbs.push({
        label: 'Contact',
        path: '/contact-collaboration-hub',
        icon: 'MessageSquare',
        isActive: true
      });
    }

    return breadcrumbs;
  };

  const breadcrumbs = generateBreadcrumbs();

  if (breadcrumbs.length <= 1) {
    return null;
  }

  return (
    <nav 
      className="bg-surface/50 backdrop-blur-sm border-b border-accent/20 sticky top-16 z-50"
      aria-label="Breadcrumb navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center py-3">
          <ol className="flex items-center space-x-2 text-sm">
            {breadcrumbs.map((crumb, index) => (
              <li key={crumb.path} className="flex items-center">
                {index > 0 && (
                  <Icon 
                    name="ChevronRight" 
                    size={16} 
                    className="text-text-tertiary mx-2" 
                  />
                )}
                
                {crumb.isActive ? (
                  <div className="flex items-center space-x-2 text-primary font-medium">
                    <Icon 
                      name={crumb.icon} 
                      size={16} 
                      className="text-primary" 
                    />
                    <span className="font-body">{crumb.label}</span>
                  </div>
                ) : (
                  <Link
                    to={crumb.path}
                    className="flex items-center space-x-2 text-text-secondary hover:text-primary transition-colors duration-300 group"
                  >
                    <Icon 
                      name={crumb.icon} 
                      size={16} 
                      className="text-text-tertiary group-hover:text-primary transition-colors duration-300" 
                    />
                    <span className="font-body group-hover:underline">
                      {crumb.label}
                    </span>
                  </Link>
                )}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </nav>
  );
};

export default ProjectBreadcrumbs;