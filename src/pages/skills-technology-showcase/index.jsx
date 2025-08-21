import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from 'components/AppIcon';
import Image from 'components/AppImage';
import GlobalHeader from 'components/ui/GlobalHeader';
import ProjectBreadcrumbs from 'components/ui/ProjectBreadcrumbs';
import SkillsRadarChart from './components/SkillsRadarChart';
import SkillProgressBar from './components/SkillProgressBar';
import TechnologyCard from './components/TechnologyCard';
import CertificationBadge from './components/CertificationBadge';
import SkillsMatrix from './components/SkillsMatrix';

const SkillsTechnologyShowcase = () => {
  const [activeCategory, setActiveCategory] = useState('programming');
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hoveredSkill, setHoveredSkill] = useState(null);

  // Mock data for skills and technologies
  const skillsData = {
  programming: [
    {
      id: 'csharp',
      name: 'C#',
      level: 90,
      years: 3,
      icon: 'Hash',
      color: 'from-purple-500 to-blue-500',
      description: 'Main language for Unity game development and tools',
      projects: ['Unity Games', 'Game Systems'],
      certifications: []
    },
    {
      id: 'javascript',
      name: 'JavaScript',
      level: 85,
      years: 2,
      icon: 'Braces',
      color: 'from-yellow-500 to-orange-500',
      description: 'Used for building web apps and game dashboards',
      projects: ['Portfolio Website'],
      certifications: []
    }
  ],
  engines: [
    {
      id: 'unity',
      name: 'Unity',
      level: 90,
      years: 3,
      icon: 'Box',
      color: 'from-gray-700 to-gray-900',
      description: 'Primary engine for developing 3D games and simulations',
      projects: ['Personal Game Projects'],
      certifications: []
    },
    {
      id: 'blender',
      name: 'Blender',
      level: 80,
      years: 2,
      icon: 'Box',
      color: 'from-orange-600 to-yellow-500',
      description: 'Creating 3D assets and animations for game projects',
      projects: ['Character & Environment Models'],
      certifications: []
    }
  ],
  tools: [
    {
      id: 'git',
      name: 'Git & GitHub',
      level: 80,
      years: 3,
      icon: 'GitBranch',
      color: 'from-orange-500 to-red-500',
      description: 'Used for version control and collaborating on code',
      projects: ['All Projects'],
      certifications: []
    },
    {
      id: 'figma',
      name: 'Figma',
      level: 70,
      years: 2,
      icon: 'Figma',
      color: 'from-purple-500 to-pink-500',
      description: 'For UI/UX prototyping and layout planning',
      projects: ['UI Design for Games'],
      certifications: []
    }
  ],
  soft: [
  {
    id: 'creativity',
    name: 'Creative Design',
    level: 90,
    years: 4,
    icon: 'Palette',
    color: 'from-pink-500 to-purple-500',
    description: 'Designing game ideas, characters, and visuals',
    projects: ['Game Concepts', 'Visual Mockups'],
    certifications: []
  },
  {
    id: 'problem-solving',
    name: 'Problem Solving',
    level: 85,
    years: 3,
    icon: 'Lightbulb',
    color: 'from-yellow-500 to-orange-500',
    description: 'Debugging and optimizing Unity performance',
    projects: ['Fixing game issues', 'Performance Tuning'],
    certifications: []
  },
  {
    id: 'communication',
    name: 'Communication',
    level: 80,
    years: 3,
    icon: 'MessageSquare',
    color: 'from-blue-500 to-indigo-500',
    description: 'Collaborating with teammates and writing documentation',
    projects: ['Team Messages', 'Club Management'],
    certifications: []
  },
  {
    id: 'theater',
    name: 'Theater & Performance',
    level: 80,
    years: 4,
    icon: 'TheaterMasks',  // you can use this or 'Users' if no specific icon
    color: 'from-purple-700 to-indigo-600',
    description: 'Experience in acting, storytelling, and stage collaboration',
    projects: ['Theater Club at University', 'Public Performances'],
    certifications: []
  }
]

};

const categories = [
  { id: 'programming', name: 'Programming', icon: 'Code2', description: 'Languages & Frameworks' },
  { id: 'engines', name: 'Game Engines & Tools', icon: 'Gamepad2', description: 'Unity, Blender & related tools' },
  { id: 'tools', name: 'Design & Dev Tools', icon: 'Settings', description: 'Figma, Git & workflow apps' },
  { id: 'soft', name: 'Soft Skills', icon: 'Users', description: 'Creativity, Communication, Problem Solving' }
];

 const certifications = [
  {
    id: 'deug-english',
    name: 'DEUG in English Literature',
    issuer: 'Cadi Ayyad University',
    date: '2023',
    image: 'https://upload.wikimedia.org/wikipedia/commons/f/f3/University_Cadi_Ayyad_logo.png',
    verified: true
  },
   {
    id: 'BA-in-english',
    name: 'Bachelor\'s in English Literature',
    issuer: 'Cadi Ayyad University',
    date: '2025',
    image: 'https://upload.wikimedia.org/wikipedia/commons/f/f3/University_Cadi_Ayyad_logo.png',
    verified: true
  },
  {
    id: 'bac2-dev',
    name: 'Bac+2 in Software Development',
    issuer: 'ISTA / OFPPT Morocco',
    date: '2024',
    image: 'https://upload.wikimedia.org/wikipedia/fr/2/26/OFPPT_Logo.svg',
    verified: true
  }
];


  const radarData = [
    { skill: 'Game Development', value: 95 },
    { skill: 'Frontend Development', value: 85 },
    { skill: 'Backend Development', value: 75 },
    { skill: 'UI/UX Design', value: 80 },
    { skill: 'Project Management', value: 85 },
    { skill: 'Team Leadership', value: 85 }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const handleDownloadResume = () => {
    // Mock download functionality
    const link = document.createElement('a');
    link.href = '#';
    link.download = 'GameDev_Skills_Summary.pdf';
    link.click();
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="relative">
            <div className="w-20 h-20 border-4 border-primary/20 border-t-primary rounded-full animate-spin mx-auto mb-4"></div>
            <div className="absolute inset-0 w-20 h-20 border-4 border-transparent border-r-secondary rounded-full animate-spin mx-auto" style={{ animationDirection: 'reverse', animationDuration: '1s' }}></div>
          </div>
          <h2 className="font-heading text-xl font-bold text-primary mb-2">Loading Skills Matrix</h2>
          <p className="font-body text-text-secondary">Initializing technology showcase...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <GlobalHeader />
      <ProjectBreadcrumbs />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-2 h-2 bg-primary rounded-full animate-ping"></div>
          <div className="absolute top-40 right-20 w-1 h-1 bg-secondary rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute bottom-20 left-1/4 w-1.5 h-1.5 bg-accent rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="font-heading text-4xl md:text-6xl font-black text-transparent bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text mb-6">
              Skills & Technology
            </h1>
            <p className="font-body text-xl text-text-secondary max-w-3xl mx-auto mb-8">
              Explore my technical expertise through interactive visualizations and comprehensive skill assessments. 
              From game engines to programming languages, discover the technologies that power my creations.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={handleDownloadResume}
                className="group flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-primary to-secondary rounded-lg font-body font-medium text-background hover:shadow-neon transition-all duration-300"
              >
                <Icon name="Download" size={20} />
                <span>Download Skills Summary</span>
              </button>
              
              <Link
                to="/contact-collaboration-hub"
                className="group flex items-center space-x-2 px-6 py-3 bg-surface border border-accent/30 rounded-lg font-body font-medium text-text-primary hover:bg-accent/10 hover:border-accent transition-all duration-300"
              >
                <Icon name="MessageSquare" size={20} />
                <span>Discuss Collaboration</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Radar Chart Section */}
      <section className="py-16 bg-surface/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Core Competencies
            </h2>
            <p className="font-body text-lg text-text-secondary max-w-2xl mx-auto">
              Interactive radar visualization of my primary skill areas and expertise levels
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <SkillsRadarChart data={radarData} />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="font-heading text-2xl font-bold text-text-primary mb-6">
                Expertise Breakdown
              </h3>
              
              {radarData.map((item, index) => (
                <div key={item.skill} className="flex items-center justify-between p-4 bg-surface/50 rounded-lg border border-accent/20">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-primary rounded-full shadow-neon"></div>
                    <span className="font-body font-medium text-text-primary">{item.skill}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-24 h-2 bg-surface rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.value}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="h-full bg-gradient-to-r from-primary to-secondary"
                      />
                    </div>
                    <span className="font-mono text-sm text-primary font-bold">{item.value}%</span>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Category Navigation */}
      <section className="py-8 bg-surface/50 sticky top-32 z-40 backdrop-blur-md border-y border-accent/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`group flex items-center space-x-2 px-4 py-3 rounded-lg font-body font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-primary/20 text-primary border border-primary/30 shadow-neon'
                    : 'bg-surface/50 text-text-secondary hover:text-primary hover:bg-primary/10 border border-transparent hover:border-primary/20'
                }`}
              >
                <Icon 
                  name={category.icon} 
                  size={18} 
                  className={`transition-colors duration-300 ${
                    activeCategory === category.id ? 'text-primary' : 'text-text-tertiary group-hover:text-primary'
                  }`}
                />
                <div className="text-left">
                  <div className="text-sm">{category.name}</div>
                  <div className="text-xs opacity-70 hidden md:block">{category.description}</div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              {skillsData[activeCategory].map((skill, index) => (
                <motion.div
                  key={skill.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onHoverStart={() => setHoveredSkill(skill.id)}
                  onHoverEnd={() => setHoveredSkill(null)}
                  onClick={() => setSelectedSkill(skill)}
                  className="group cursor-pointer"
                >
                  <TechnologyCard 
                    skill={skill} 
                    isHovered={hoveredSkill === skill.id}
                  />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-16 bg-surface/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Certifications & Achievements
            </h2>
            <p className="font-body text-lg text-text-secondary max-w-2xl mx-auto">
              Professional certifications and industry recognition validating my expertise
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <CertificationBadge certification={cert} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Matrix */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Skills Matrix Overview
            </h2>
            <p className="font-body text-lg text-text-secondary max-w-2xl mx-auto">
              Comprehensive view of all technical skills and proficiency levels
            </p>
          </motion.div>

          <SkillsMatrix skillsData={skillsData} />
        </div>
      </section>

      {/* Skill Detail Modal */}
      <AnimatePresence>
        {selectedSkill && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-1100 bg-background/95 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setSelectedSkill(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-surface rounded-2xl border border-accent/30 shadow-neon max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${selectedSkill.color} flex items-center justify-center shadow-neon`}>
                      <Icon name={selectedSkill.icon} size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-heading text-2xl font-bold text-text-primary">{selectedSkill.name}</h3>
                      <p className="font-body text-text-secondary">{selectedSkill.years} years experience</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedSkill(null)}
                    className="p-2 rounded-lg hover:bg-primary/10 transition-colors duration-300"
                  >
                    <Icon name="X" size={24} className="text-text-secondary hover:text-primary" />
                  </button>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-heading text-lg font-bold text-text-primary mb-2">Proficiency Level</h4>
                    <SkillProgressBar skill={selectedSkill} showAnimation={true} />
                  </div>

                  <div>
                    <h4 className="font-heading text-lg font-bold text-text-primary mb-2">Description</h4>
                    <p className="font-body text-text-secondary">{selectedSkill.description}</p>
                  </div>

                  <div>
                    <h4 className="font-heading text-lg font-bold text-text-primary mb-3">Notable Projects</h4>
                    <div className="grid gap-2">
                      {selectedSkill.projects.map((project, index) => (
                        <div key={index} className="flex items-center space-x-2 p-3 bg-background/50 rounded-lg">
                          <Icon name="FolderOpen" size={16} className="text-primary" />
                          <span className="font-body text-text-secondary">{project}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {selectedSkill.certifications.length > 0 && (
                    <div>
                      <h4 className="font-heading text-lg font-bold text-text-primary mb-3">Certifications</h4>
                      <div className="grid gap-2">
                        {selectedSkill.certifications.map((cert, index) => (
                          <div key={index} className="flex items-center space-x-2 p-3 bg-success/10 rounded-lg border border-success/20">
                            <Icon name="Award" size={16} className="text-success" />
                            <span className="font-body text-success">{cert}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SkillsTechnologyShowcase;
