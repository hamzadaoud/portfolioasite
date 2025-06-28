import React from 'react';
import { motion } from 'framer-motion';
import Icon from 'components/AppIcon';


const TechnologyCard = ({ skill, isHovered = false }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="group relative bg-surface/50 backdrop-blur-sm rounded-xl border border-accent/20 p-6 hover:border-primary/40 hover:shadow-neon transition-all duration-300 overflow-hidden"
    >
      {/* Background gradient effect */}
      <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
      
      {/* Decorative corner elements */}
      <div className="absolute top-2 right-2 w-1 h-1 bg-primary rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="absolute bottom-2 left-2 w-0.5 h-0.5 bg-secondary rounded-full opacity-30 group-hover:opacity-70 transition-opacity duration-300"></div>

      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
              className={`w-10 h-10 rounded-lg bg-gradient-to-br ${skill.color} flex items-center justify-center shadow-neon group-hover:shadow-neon-lg transition-all duration-300`}
            >
              <Icon name={skill.icon} size={20} className="text-white" />
            </motion.div>
            <div>
              <h3 className="font-heading text-lg font-bold text-text-primary group-hover:text-primary transition-colors duration-300">
                {skill.name}
              </h3>
              <p className="text-xs text-text-tertiary">{skill.years} years</p>
            </div>
          </div>
          
          <div className="text-right">
            <div className="font-mono text-lg font-bold text-primary">{skill.level}%</div>
            <div className="text-xs text-text-tertiary">Proficiency</div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mb-4">
          <div className="w-full h-2 bg-background rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${skill.level}%` }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
              className={`h-full bg-gradient-to-r ${skill.color} relative`}
            >
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity, 
                  repeatDelay: 4,
                  ease: "easeInOut" 
                }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
              />
            </motion.div>
          </div>
        </div>

        {/* Description */}
        <p className="font-body text-sm text-text-secondary mb-4 line-clamp-2 group-hover:text-text-primary transition-colors duration-300">
          {skill.description}
        </p>

        {/* Projects count */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 text-xs text-text-tertiary">
            <Icon name="FolderOpen" size={14} />
            <span>{skill.projects?.length || 0} projects</span>
          </div>
          
          {skill.certifications?.length > 0 && (
            <div className="flex items-center space-x-1">
              <Icon name="Award" size={14} className="text-success" />
              <span className="text-xs text-success">{skill.certifications.length}</span>
            </div>
          )}
        </div>

        {/* Hover overlay with additional info */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 bg-surface/95 backdrop-blur-sm rounded-xl p-6 flex flex-col justify-center"
          style={{ pointerEvents: isHovered ? 'auto' : 'none' }}
        >
          <div className="space-y-3">
            <h4 className="font-heading text-lg font-bold text-primary">Recent Projects</h4>
            <div className="space-y-2">
              {skill.projects?.slice(0, 3).map((project, index) => (
                <div key={index} className="flex items-center space-x-2 text-sm text-text-secondary">
                  <div className="w-1 h-1 bg-primary rounded-full"></div>
                  <span>{project}</span>
                </div>
              ))}
            </div>
            <div className="text-xs text-text-tertiary mt-3">
              Click to view detailed information
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default TechnologyCard;