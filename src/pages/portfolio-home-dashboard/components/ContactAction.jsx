import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from 'components/AppIcon';

const ContactAction = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show button after scrolling down 300px
      setIsVisible(currentScrollY > 300);
      
      // Hide when scrolling up, show when scrolling down
      if (currentScrollY > lastScrollY && currentScrollY > 300) {
        setIsExpanded(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const contactOptions = [
    {
      label: 'Quick Chat',
      icon: 'MessageCircle',
      color: 'primary',
      action: () => console.log('Quick chat')
    },
    {
      label: 'Email Me',
      icon: 'Mail',
      color: 'secondary',
      action: () => console.log('Email')
    },
    {
      label: 'Schedule Call',
      icon: 'Phone',
      color: 'accent',
      action: () => console.log('Schedule call')
    }
  ];

  const getColorClasses = (color) => {
    const colorMap = {
      primary: 'bg-primary/20 text-primary hover:bg-primary/30',
      secondary: 'bg-secondary/20 text-secondary hover:bg-secondary/30',
      accent: 'bg-accent/20 text-accent hover:bg-accent/30'
    };
    return colorMap[color] || colorMap.primary;
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-6 right-6 z-1050"
        >
          <div className="relative">
            {/* Quick Actions Menu */}
            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8, y: 20 }}
                  transition={{ duration: 0.2 }}
                  className="absolute bottom-16 right-0 space-y-2"
                >
                  {contactOptions.map((option, index) => (
                    <motion.button
                      key={option.label}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      transition={{ duration: 0.2, delay: index * 0.05 }}
                      onClick={option.action}
                      className={`flex items-center space-x-2 px-4 py-2 rounded-lg backdrop-blur-md border border-accent/20 font-body font-medium transition-all duration-300 hover:shadow-neon ${getColorClasses(option.color)}`}
                    >
                      <Icon name={option.icon} size={16} />
                      <span className="whitespace-nowrap">{option.label}</span>
                    </motion.button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Main Contact Button */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative"
            >
              <Link
                to="/contact-collaboration-hub"
                className="group flex items-center justify-center w-14 h-14 bg-gradient-to-r from-primary to-secondary rounded-full shadow-neon hover:shadow-neon-lg transition-all duration-300"
                onMouseEnter={() => setIsExpanded(true)}
                onMouseLeave={() => setIsExpanded(false)}
              >
                <Icon 
                  name="MessageSquare" 
                  size={24} 
                  className="text-background group-hover:scale-110 transition-transform duration-300" 
                />
                
                {/* Pulse Animation */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full animate-ping opacity-20"></div>
              </Link>

              {/* Tooltip */}
              <div className="absolute bottom-full right-0 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="bg-surface/95 backdrop-blur-md text-text-primary px-3 py-1 rounded-lg border border-accent/20 font-caption text-sm whitespace-nowrap">
                  Let's collaborate!
                  <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-surface/95"></div>
                </div>
              </div>
            </motion.div>

            {/* Availability Indicator */}
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-success rounded-full border-2 border-background flex items-center justify-center">
              <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ContactAction;