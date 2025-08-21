import React from 'react';
import { motion } from 'framer-motion';
import Icon from 'components/AppIcon';

const AchievementsTimeline = () => {
  const achievements = [
    {
      id: 1,
      year: '2024',
      title: 'IT Manager Intern',
      company: 'Hospitility House, Marrakech',
      description: `Managing website updates, bookings, and improving digital services for guests at the Riad.`,
      type: 'career',
      icon: 'Briefcase',
      color: 'primary',
      featured: true
    },
    {
      id: 2,
      year: '2024',
      title: 'Founder & Game Developer',
      company: 'Project xlabM',
      description: `Launched my own indie game studio to build original games using Unity and C#, driven by passion and creative vision.`,
      type: 'career',
      icon: 'Rocket',
      color: 'accent',
      featured: true
    },
    {
      id: 3,
      year: '2023',
      title: 'Social Media Manager',
      company: 'Theater & Cinema Club – FLSH',
      description: `Designed posters, created videos, and managed social platforms for events, performances, and university communications.`,
      type: 'career',
      icon: 'Camera',
      color: 'secondary',
      featured: false
    },
    {
      id: 4,
      year: '2022',
      title: 'Unity Journey Begins',
      company: 'Self-Taught',
      description: `Started learning Unity, C#, and game development seriously during university, combining creativity with technical skills.`,
      type: 'achievement',
      icon: 'Gamepad2',
      color: 'success',
      featured: false
    },
    {
      id: 5,
      year: '2023',
      title: 'DEUG in English Literature',
      company: 'Cadi Ayyad University',
      description: `Completed a Bac+2 degree in English Studies while exploring programming and building a future in tech and gaming.`,
      type: 'education',
      icon: 'GraduationCap',
      color: 'warning',
      featured: false
    },
    {
      id: 5,
      year: '2025',
      title: 'BA in English Literature',
      company: 'Cadi Ayyad University',
      description: `Completed my Bachelor\'s degree in English Studies while exploring programming and building a future in tech and gaming.`,
      type: 'education',
      icon: 'GraduationCap',
      color: 'warning',
      featured: false
    }
  ];

  const getColorClasses = (color) => {
    const colorMap = {
      primary: {
        bg: 'bg-primary/10',
        border: 'border-primary/30',
        text: 'text-primary',
        dot: 'bg-primary'
      },
      secondary: {
        bg: 'bg-secondary/10',
        border: 'border-secondary/30',
        text: 'text-secondary',
        dot: 'bg-secondary'
      },
      accent: {
        bg: 'bg-accent/10',
        border: 'border-accent/30',
        text: 'text-accent',
        dot: 'bg-accent'
      },
      success: {
        bg: 'bg-success/10',
        border: 'border-success/30',
        text: 'text-success',
        dot: 'bg-success'
      },
      warning: {
        bg: 'bg-warning/10',
        border: 'border-warning/30',
        text: 'text-warning',
        dot: 'bg-warning'
      }
    };
    return colorMap[color] || colorMap.primary;
  };

  const getTypeLabel = (type) => {
    const typeMap = {
      career: 'Career',
      certification: 'Certification',
      achievement: 'Achievement',
      education: 'Education'
    };
    return typeMap[type] || 'Milestone';
  };

  return (
    <div className="relative max-w-4xl mx-auto">
      {/* Timeline Line */}
      <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent transform md:-translate-x-1/2"></div>

      <div className="space-y-12">
        {achievements.map((achievement, index) => (
          <motion.div
            key={achievement.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
          >
            {/* Timeline Dot */}
            <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 z-10">
              <div className={`w-4 h-4 ${getColorClasses(achievement.color).dot} rounded-full border-4 border-background shadow-neon`}>
                {achievement.featured && (
                  <div className={`absolute inset-0 ${getColorClasses(achievement.color).dot} rounded-full animate-ping opacity-75`}></div>
                )}
              </div>
            </div>

            {/* Content Card */}
            <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
              <div className={`bg-surface/50 backdrop-blur-sm rounded-2xl p-6 border ${getColorClasses(achievement.color).border} hover:shadow-neon transition-all duration-300 group`}>
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className={`p-2 rounded-lg border ${getColorClasses(achievement.color).bg} ${getColorClasses(achievement.color).border}`}>
                      <Icon name={achievement.icon} size={20} className={getColorClasses(achievement.color).text} />
                    </div>
                    <div>
                      <div className={`px-2 py-1 rounded-md ${getColorClasses(achievement.color).bg} ${getColorClasses(achievement.color).text} font-caption text-xs font-medium mb-1`}>
                        {getTypeLabel(achievement.type)}
                      </div>
                      <div className="font-caption text-sm text-text-tertiary">{achievement.year}</div>
                    </div>
                  </div>
                  {achievement.featured && (
                    <div className="flex items-center space-x-1 text-warning">
                      <Icon name="Star" size={16} className="fill-current" />
                      <span className="font-caption text-xs">Featured</span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="mb-4">
                  <h3 className="font-heading text-lg font-bold text-text-primary mb-1 group-hover:text-primary transition-colors duration-300">
                    {achievement.title}
                  </h3>
                  <p className="font-body text-sm text-secondary font-medium mb-3">
                    {achievement.company}
                  </p>
                  <p className="font-body text-sm text-text-secondary leading-relaxed">
                    {achievement.description}
                  </p>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-accent/20">
                  <div className="flex items-center space-x-2 text-text-tertiary">
                    <Icon name="Calendar" size={14} />
                    <span className="font-caption text-xs">{achievement.year}</span>
                  </div>
                  <button className="flex items-center space-x-1 text-text-secondary hover:text-primary transition-colors duration-300">
                    <span className="font-caption text-xs">Learn More</span>
                    <Icon name="ArrowRight" size={14} />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AchievementsTimeline;
