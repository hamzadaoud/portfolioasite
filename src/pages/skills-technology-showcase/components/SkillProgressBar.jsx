import React from 'react';
import { motion } from 'framer-motion';
import Icon from 'components/AppIcon';

const SkillProgressBar = ({ skill, showAnimation = false, className = "" }) => {
  const getSkillLevel = (level) => {
    if (level >= 90) return { text: 'Expert', color: 'text-success' };
    if (level >= 75) return { text: 'Advanced', color: 'text-primary' };
    if (level >= 60) return { text: 'Intermediate', color: 'text-warning' };
    return { text: 'Beginner', color: 'text-error' };
  };

  const skillLevel = getSkillLevel(skill.level);

  return (
    <div className={`space-y-3 ${className}`}>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <span className="font-body font-medium text-text-primary">{skill.name}</span>
          <span className={`text-xs font-caption px-2 py-1 rounded-full bg-surface/50 ${skillLevel.color}`}>
            {skillLevel.text}
          </span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="font-mono text-sm text-primary font-bold">{skill.level}%</span>
          <span className="text-xs text-text-tertiary">{skill.years}y</span>
        </div>
      </div>
      
      <div className="relative">
        <div className="w-full h-3 bg-surface rounded-full overflow-hidden border border-accent/20">
          <motion.div
            initial={showAnimation ? { width: 0 } : { width: `${skill.level}%` }}
            animate={{ width: `${skill.level}%` }}
            transition={{ duration: showAnimation ? 1.5 : 0, ease: "easeOut" }}
            className={`h-full bg-gradient-to-r ${skill.color} relative`}
          >
            {/* Animated shine effect */}
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: '100%' }}
              transition={{ 
                duration: 2, 
                repeat: Infinity, 
                repeatDelay: 3,
                ease: "easeInOut" 
              }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
            />
          </motion.div>
        </div>
        
        {/* Skill level markers */}
        <div className="absolute top-0 left-0 w-full h-3 flex justify-between items-center px-1">
          {[25, 50, 75].map((marker) => (
            <div
              key={marker}
              className="w-0.5 h-2 bg-background/50 rounded-full"
              style={{ marginLeft: `${marker}%` }}
            />
          ))}
        </div>
      </div>

      {/* Experience indicators */}
      <div className="flex items-center space-x-4 text-xs text-text-tertiary">
        <div className="flex items-center space-x-1">
          <Icon name="Calendar" size={12} />
          <span>{skill.years} years experience</span>
        </div>
        <div className="flex items-center space-x-1">
          <Icon name="FolderOpen" size={12} />
          <span>{skill.projects?.length || 0} projects</span>
        </div>
        {skill.certifications?.length > 0 && (
          <div className="flex items-center space-x-1">
            <Icon name="Award" size={12} />
            <span>{skill.certifications.length} certifications</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default SkillProgressBar;