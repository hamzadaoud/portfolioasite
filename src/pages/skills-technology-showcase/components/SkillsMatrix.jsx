import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from 'components/AppIcon';
import SkillProgressBar from './SkillProgressBar';

const SkillsMatrix = ({ skillsData }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('level');

  const categories = [
    { id: 'all', name: 'All Skills', icon: 'Grid3X3' },
    { id: 'programming', name: 'Programming', icon: 'Code2' },
    { id: 'engines', name: 'Game Engines', icon: 'Gamepad2' },
    { id: 'tools', name: 'Tools', icon: 'Settings' },
    { id: 'soft', name: 'Soft Skills', icon: 'Users' }
  ];

  const sortOptions = [
    { id: 'level', name: 'Proficiency Level', icon: 'TrendingUp' },
    { id: 'years', name: 'Experience Years', icon: 'Calendar' },
    { id: 'name', name: 'Alphabetical', icon: 'AlphabeticalSort' }
  ];

  const getAllSkills = () => {
    let allSkills = [];
    Object.entries(skillsData).forEach(([category, skills]) => {
      allSkills = [...allSkills, ...skills.map(skill => ({ ...skill, category }))];
    });
    return allSkills;
  };

  const getFilteredAndSortedSkills = () => {
    let skills = selectedCategory === 'all' 
      ? getAllSkills() 
      : skillsData[selectedCategory]?.map(skill => ({ ...skill, category: selectedCategory })) || [];

    // Sort skills
    skills.sort((a, b) => {
      switch (sortBy) {
        case 'level':
          return b.level - a.level;
        case 'years':
          return b.years - a.years;
        case 'name':
          return a.name.localeCompare(b.name);
        default:
          return 0;
      }
    });

    return skills;
  };

  const skills = getFilteredAndSortedSkills();

  const getSkillStats = () => {
    const allSkills = getAllSkills();
    return {
      total: allSkills.length,
      expert: allSkills.filter(skill => skill.level >= 90).length,
      advanced: allSkills.filter(skill => skill.level >= 75 && skill.level < 90).length,
      intermediate: allSkills.filter(skill => skill.level >= 60 && skill.level < 75).length,
      avgLevel: Math.round(allSkills.reduce((sum, skill) => sum + skill.level, 0) / allSkills.length),
      totalYears: allSkills.reduce((sum, skill) => sum + skill.years, 0)
    };
  };

  const stats = getSkillStats();

  return (
    <div className="space-y-8">
      {/* Stats Overview */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4"
      >
        <div className="bg-surface/50 rounded-lg p-4 border border-accent/20 text-center">
          <div className="font-mono text-2xl font-bold text-primary mb-1">{stats.total}</div>
          <div className="text-xs text-text-tertiary">Total Skills</div>
        </div>
        <div className="bg-surface/50 rounded-lg p-4 border border-success/20 text-center">
          <div className="font-mono text-2xl font-bold text-success mb-1">{stats.expert}</div>
          <div className="text-xs text-text-tertiary">Expert Level</div>
        </div>
        <div className="bg-surface/50 rounded-lg p-4 border border-primary/20 text-center">
          <div className="font-mono text-2xl font-bold text-primary mb-1">{stats.advanced}</div>
          <div className="text-xs text-text-tertiary">Advanced</div>
        </div>
        <div className="bg-surface/50 rounded-lg p-4 border border-warning/20 text-center">
          <div className="font-mono text-2xl font-bold text-warning mb-1">{stats.intermediate}</div>
          <div className="text-xs text-text-tertiary">Intermediate</div>
        </div>
        <div className="bg-surface/50 rounded-lg p-4 border border-secondary/20 text-center">
          <div className="font-mono text-2xl font-bold text-secondary mb-1">{stats.avgLevel}%</div>
          <div className="text-xs text-text-tertiary">Avg Level</div>
        </div>
        <div className="bg-surface/50 rounded-lg p-4 border border-accent/20 text-center">
          <div className="font-mono text-2xl font-bold text-accent mb-1">{stats.totalYears}</div>
          <div className="text-xs text-text-tertiary">Total Years</div>
        </div>
      </motion.div>

      {/* Filters */}
      <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
        {/* Category Filter */}
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-body font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-primary/20 text-primary border border-primary/30' :'bg-surface/50 text-text-secondary hover:text-primary hover:bg-primary/10 border border-transparent hover:border-primary/20'
              }`}
            >
              <Icon name={category.icon} size={16} />
              <span>{category.name}</span>
            </button>
          ))}
        </div>

        {/* Sort Options */}
        <div className="flex items-center space-x-2">
          <span className="text-sm text-text-tertiary">Sort by:</span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="bg-surface border border-accent/20 rounded-lg px-3 py-2 text-text-primary font-body text-sm focus:outline-none focus:border-primary/40"
          >
            {sortOptions.map((option) => (
              <option key={option.id} value={option.id}>
                {option.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Skills Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`${selectedCategory}-${sortBy}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="grid gap-4"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="bg-surface/30 rounded-lg p-6 border border-accent/20 hover:border-primary/40 hover:bg-surface/50 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${skill.color} flex items-center justify-center`}>
                    <Icon name={skill.icon} size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-bold text-text-primary">{skill.name}</h3>
                    <p className="text-sm text-text-tertiary capitalize">{skill.category}</p>
                  </div>
                </div>
                
                <div className="text-right">
                  <div className="font-mono text-lg font-bold text-primary">{skill.level}%</div>
                  <div className="text-xs text-text-tertiary">{skill.years} years</div>
                </div>
              </div>

              <SkillProgressBar skill={skill} showAnimation={false} className="mb-4" />

              <p className="text-sm text-text-secondary mb-4">{skill.description}</p>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4 text-xs text-text-tertiary">
                  <div className="flex items-center space-x-1">
                    <Icon name="FolderOpen" size={12} />
                    <span>{skill.projects?.length || 0} projects</span>
                  </div>
                  {skill.certifications?.length > 0 && (
                    <div className="flex items-center space-x-1">
                      <Icon name="Award" size={12} className="text-success" />
                      <span>{skill.certifications.length} certs</span>
                    </div>
                  )}
                </div>
                
                <div className="flex space-x-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <div
                      key={i}
                      className={`w-2 h-2 rounded-full ${
                        i < Math.floor(skill.level / 20) ? 'bg-primary' : 'bg-surface'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {skills.length === 0 && (
        <div className="text-center py-12">
          <Icon name="Search" size={48} className="text-text-tertiary mx-auto mb-4" />
          <h3 className="font-heading text-xl font-bold text-text-primary mb-2">No Skills Found</h3>
          <p className="text-text-secondary">Try adjusting your filters to see more results.</p>
        </div>
      )}
    </div>
  );
};

export default SkillsMatrix;