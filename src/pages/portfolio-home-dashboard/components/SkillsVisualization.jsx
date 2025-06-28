import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Icon from 'components/AppIcon';

const SkillsVisualization = () => {
  const [animatedValues, setAnimatedValues] = useState({});

  const skillCategories = [
    {
      category: 'Game & Creative Tools',
      skills: [
        { name: 'Unity (C#)', level: 95, icon: 'Box', color: 'primary' },
        { name: 'Blender', level: 85, icon: 'Camera', color: 'secondary' },
      ]
    },
    {
      category: 'Programming & Web',
      skills: [
        { name: 'JavaScript', level: 85, icon: 'Braces', color: 'accent' },
        { name: 'HTML/CSS', level: 90, icon: 'Code', color: 'success' },
        { name: 'AI Technologies', level: 75, icon: 'Brain', color: 'warning' },
        { name: 'Xamarin', level: 70, icon: 'Smartphone', color: 'accent' }
      ]
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      const newAnimatedValues = {};
      skillCategories.forEach(category => {
        category.skills.forEach(skill => {
          newAnimatedValues[skill.name] = skill.level;
        });
      });
      setAnimatedValues(newAnimatedValues);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const getColorClass = (color) => {
    const colorMap = {
      primary: 'text-primary bg-primary/20 border-primary/30',
      secondary: 'text-secondary bg-secondary/20 border-secondary/30',
      accent: 'text-accent bg-accent/20 border-accent/30',
      success: 'text-success bg-success/20 border-success/30',
      warning: 'text-warning bg-warning/20 border-warning/30'
    };
    return colorMap[color] || colorMap.primary;
  };

  const getProgressColor = (color) => {
    const colorMap = {
      primary: 'from-primary to-primary/60',
      secondary: 'from-secondary to-secondary/60',
      accent: 'from-accent to-accent/60',
      success: 'from-success to-success/60',
      warning: 'from-warning to-warning/60'
    };
    return colorMap[color] || colorMap.primary;
  };

  return (
    <div className="grid lg:grid-cols-2 gap-8">
      {skillCategories.map((category, categoryIndex) => (
        <motion.div
          key={category.category}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
          viewport={{ once: true }}
          className="bg-surface/50 backdrop-blur-sm rounded-2xl p-6 border border-accent/20 hover:border-primary/30 transition-all duration-300"
        >
          <div className="mb-6">
            <h3 className="font-heading text-xl font-bold text-text-primary mb-2">
              {category.category}
            </h3>
            <div className="w-12 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
          </div>

          <div className="space-y-4">
            {category.skills.map((skill, skillIndex) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: (categoryIndex * 0.2) + (skillIndex * 0.1) }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-3">
                    <div className={`p-2 rounded-lg border ${getColorClass(skill.color)}`}>
                      <Icon name={skill.icon} size={16} />
                    </div>
                    <span className="font-body font-medium text-text-primary">
                      {skill.name}
                    </span>
                  </div>
                  <span className="font-caption text-sm font-bold text-text-secondary">
                    {animatedValues[skill.name] || 0}%
                  </span>
                </div>

                <div className="relative h-2 bg-surface rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${animatedValues[skill.name] || 0}%` }}
                    transition={{ duration: 1.5, delay: (categoryIndex * 0.2) + (skillIndex * 0.1) + 0.5, ease: "easeOut" }}
                    className={`h-full bg-gradient-to-r ${getProgressColor(skill.color)} rounded-full relative`}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-r ${getProgressColor(skill.color)} rounded-full blur-sm opacity-50`}></div>
                  </motion.div>
                  <motion.div
                    initial={{ left: 0 }}
                    animate={{ left: `${animatedValues[skill.name] || 0}%` }}
                    transition={{ duration: 1.5, delay: (categoryIndex * 0.2) + (skillIndex * 0.1) + 0.5, ease: "easeOut" }}
                    className="absolute top-1/2 transform -translate-y-1/2 -translate-x-1/2 w-3 h-3 bg-white rounded-full shadow-neon opacity-80"
                  ></motion.div>
                </div>

                <div className="flex justify-between text-xs text-text-tertiary mt-1">
                  <span>Beginner</span>
                  <span>Expert</span>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-6 pt-4 border-t border-accent/20">
            <div className="flex items-center justify-between text-sm">
              <span className="font-body text-text-secondary">Average Proficiency</span>
              <span className="font-caption font-bold text-primary">
                {Math.round(category.skills.reduce((acc, skill) => acc + skill.level, 0) / category.skills.length)}%
              </span>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default SkillsVisualization;
