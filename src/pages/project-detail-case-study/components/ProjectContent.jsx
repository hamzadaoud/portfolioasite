import React from 'react';
import { motion } from 'framer-motion';
import Icon from 'components/AppIcon';

const ProjectContent = ({ project, activeSection, setActiveSection }) => {
  const sections = [
    {
      id: 'overview',
      title: 'Project Overview',
      icon: 'FileText',
      content: project.description
    },
    {
      id: 'challenges',
      title: 'Development Challenges',
      icon: 'AlertTriangle',
      content: project.challenges
    },
    {
      id: 'solutions',
      title: 'Technical Solutions',
      icon: 'Lightbulb',
      content: project.solutions
    },
    {
      id: 'results',
      title: 'Results & Impact',
      icon: 'TrendingUp',
      content: project.results
    }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSection(sectionId);
    }
  };

  return (
    <div className="space-y-12">
      {/* Section Navigation */}
      <div className="sticky top-32 z-40 bg-surface/95 backdrop-blur-md rounded-xl border border-accent/20 p-4 mb-8">
        <div className="flex flex-wrap gap-2">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-body font-medium transition-all duration-300 ${
                activeSection === section.id
                  ? 'bg-primary/20 text-primary border border-primary/30' :'text-text-secondary hover:text-primary hover:bg-primary/10'
              }`}
            >
              <Icon name={section.icon} size={16} />
              <span className="hidden sm:inline">{section.title}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Content Sections */}
      {sections.map((section, index) => (
        <motion.section
          key={section.id}
          id={section.id}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          className="relative"
        >
          {/* Section Header */}
          <div className="flex items-center space-x-4 mb-8">
            <div className="p-3 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl border border-primary/30">
              <Icon name={section.icon} size={24} className="text-primary" />
            </div>
            <div>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-text-primary">
                {section.title}
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mt-2" />
            </div>
          </div>

          {/* Section Content */}
          <div className="relative">
            {/* Holographic border effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-xl blur-sm" />
            
            <div className="relative bg-surface/80 backdrop-blur-sm rounded-xl border border-accent/20 p-8">
              <div className="prose prose-lg max-w-none">
                <div className="font-body text-text-secondary leading-relaxed whitespace-pre-line">
                  {section.content}
                </div>
              </div>

              {/* Glitch effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          </div>

          {/* Code snippets for technical sections */}
          {(section.id === 'solutions' || section.id === 'challenges') && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-6"
            >
              <div className="bg-background/90 rounded-lg border border-accent/30 p-6 font-mono text-sm">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-error rounded-full" />
                    <div className="w-3 h-3 bg-warning rounded-full" />
                    <div className="w-3 h-3 bg-success rounded-full" />
                  </div>
                  <span className="font-caption text-text-tertiary">
                    {section.id === 'solutions' ? 'optimization.cs' : 'challenge-analysis.md'}
                  </span>
                </div>
                <div className="text-text-secondary">
                  {section.id === 'solutions' ? (
                    <div>
                      <span className="text-accent">// Performance optimization example</span><br />
                      <span className="text-secondary">public class</span> <span className="text-primary">LODManager</span> : <span className="text-secondary">MonoBehaviour</span><br />
                      {`{`}<br />
                      &nbsp;&nbsp;<span className="text-secondary">private void</span> <span className="text-primary">UpdateLOD</span>()<br />
                      &nbsp;&nbsp;{`{`}<br />
                      &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-accent">// Dynamic quality adjustment</span><br />
                      &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-secondary">float</span> distance = Vector3.Distance(player.position, transform.position);<br />
                      &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-secondary">if</span> (distance &gt; lodThreshold) SetLowQuality();<br />
                      &nbsp;&nbsp;{`}`}<br />
                      {`}`}
                    </div>
                  ) : (
                    <div>
                      <span className="text-accent"># Performance Challenges</span><br />
                      <span className="text-text-secondary">- Memory usage: 512MB → 256MB target</span><br />
                      <span className="text-text-secondary">- Frame rate: 30fps → 60fps goal</span><br />
                      <span className="text-text-secondary">- Battery optimization for mobile</span><br />
                      <span className="text-text-secondary">- Cross-platform compatibility</span>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </motion.section>
      ))}
    </div>
  );
};

export default ProjectContent;