import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Icon from 'components/AppIcon';
import Image from 'components/AppImage';

const RelatedProjects = ({ currentProjectId, projects }) => {
  const relatedProjects = projects.filter(project => project.id !== currentProjectId).slice(0, 3);

  if (relatedProjects.length === 0) {
    return null;
  }

  return (
    <section className="py-16 bg-surface/30 backdrop-blur-sm border-t border-accent/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Related Projects
          </h2>
          <p className="font-body text-text-secondary max-w-2xl mx-auto">
            Explore more of my game development work and discover the diverse range of projects in my portfolio.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {relatedProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <Link to={project.path} className="block">
                <div className="bg-surface/80 backdrop-blur-sm rounded-xl border border-accent/20 hover:border-accent/40 overflow-hidden transition-all duration-300 hover:shadow-neon transform hover:scale-105">
                  {/* Project Image */}
                  <div className="aspect-video overflow-hidden">
                    <Image
                      src={project.thumbnail}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  {/* Project Info */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-3 py-1 bg-primary/20 text-primary rounded-full font-caption text-sm border border-primary/30">
                        {project.category}
                      </span>
                      <Icon 
                        name="ArrowUpRight" 
                        size={16} 
                        className="text-text-tertiary group-hover:text-primary transition-colors duration-300" 
                      />
                    </div>

                    <h3 className="font-heading text-xl font-bold text-text-primary mb-2 group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>

                    <div className="flex items-center space-x-2 text-text-secondary">
                      <Icon name="Eye" size={14} />
                      <span className="font-caption text-sm">View Case Study</span>
                    </div>
                  </div>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View All Projects Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link
            to="/project-gallery"
            className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-primary to-secondary rounded-lg font-body font-bold text-background hover:shadow-neon transition-all duration-300 transform hover:scale-105"
          >
            <Icon name="Grid3X3" size={20} />
            <span>View All Projects</span>
            <Icon name="ArrowRight" size={20} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default RelatedProjects;