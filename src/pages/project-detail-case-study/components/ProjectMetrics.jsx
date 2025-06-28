import React from 'react';
import { motion } from 'framer-motion';
import Icon from 'components/AppIcon';

const ProjectMetrics = ({ project }) => {
  const metrics = [
    {
      icon: 'Calendar',
      label: 'Duration',
      value: project.duration,
      color: 'text-primary'
    },
    {
      icon: 'Users',
      label: 'Team Size',
      value: `${project.teamSize} members`,
      color: 'text-secondary'
    },
    {
      icon: 'User',
      label: 'Role',
      value: project.role,
      color: 'text-accent'
    },
    {
      icon: 'Monitor',
      label: 'Platforms',
      value: project.platforms.join(', '),
      color: 'text-success'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="relative py-16 bg-surface/50 backdrop-blur-sm border-y border-accent/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              variants={itemVariants}
              className="group relative"
            >
              <div className="bg-background/80 backdrop-blur-sm rounded-xl p-6 border border-accent/20 hover:border-accent/40 transition-all duration-300 hover:shadow-neon">
                <div className="flex items-center space-x-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-br from-${metric.color.split('-')[1]}/20 to-${metric.color.split('-')[1]}/10 border border-${metric.color.split('-')[1]}/30`}>
                    <Icon 
                      name={metric.icon} 
                      size={24} 
                      className={metric.color}
                    />
                  </div>
                  <div>
                    <p className="font-caption text-text-tertiary text-sm uppercase tracking-wide">
                      {metric.label}
                    </p>
                    <p className="font-body text-text-primary font-semibold text-lg">
                      {metric.value}
                    </p>
                  </div>
                </div>
                
                {/* Hover effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Technologies Used */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 text-center"
        >
          <h3 className="font-heading text-xl font-bold text-text-primary mb-6">
            Technologies Used
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {project.technologies.map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
                className="px-4 py-2 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full border border-primary/30 text-primary font-body font-medium hover:shadow-neon transition-all duration-300 cursor-default"
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectMetrics;