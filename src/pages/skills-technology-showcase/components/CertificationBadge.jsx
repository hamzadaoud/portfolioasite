import React from 'react';
import { motion } from 'framer-motion';
import Icon from 'components/AppIcon';
import Image from 'components/AppImage';

const CertificationBadge = ({ certification }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="group relative bg-surface/50 backdrop-blur-sm rounded-xl border border-accent/20 p-6 hover:border-success/40 hover:shadow-neon transition-all duration-300 overflow-hidden"
    >
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-success/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      {/* Verification badge */}
      {certification.verified && (
        <div className="absolute top-3 right-3 flex items-center space-x-1 bg-success/20 text-success px-2 py-1 rounded-full text-sm font-caption">
          <Icon name="CheckCircle" size={14} />
          <span>Verified</span>
        </div>
      )}

      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-start space-x-4 mb-4">
          <div className="relative">
            <div className="w-16 h-16 rounded-xl overflow-hidden border-2 border-accent/20 group-hover:border-success/40 transition-colors duration-300">
              <Image
                src={certification.image}
                alt={certification.name}
                className="w-full h-full object-cover"
              />
            </div>
            {certification.verified && (
              <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-success rounded-full flex items-center justify-center border-2 border-surface">
                <Icon name="Check" size={14} className="text-background" />
              </div>
            )}
          </div>
          
          <div className="flex-1">
            <h3 className="font-heading text-xl font-bold text-text-primary group-hover:text-success transition-colors duration-300 mb-1">
              {certification.name}
            </h3>
            <p className="font-body text-base text-text-secondary mb-2">
              {certification.issuer}
            </p>
            <div className="flex items-center space-x-2 text-sm text-text-tertiary">
              <Icon name="Calendar" size={14} />
              <span>Issued {certification.date}</span>
            </div>
          </div>
        </div>

        {/* Achievement indicators */}
        <div className="flex items-center justify-between pt-4 border-t border-accent/20">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1 text-sm text-text-tertiary">
              <Icon name="Award" size={14} className="text-success" />
              <span>Professional</span>
            </div>
            <div className="flex items-center space-x-1 text-sm text-text-tertiary">
              <Icon name="Shield" size={14} className="text-primary" />
              <span>Industry Standard</span>
            </div>
          </div>
          
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="p-2 rounded-lg bg-success/10 text-success hover:bg-success/20 transition-colors duration-300"
            title="View Certificate"
          >
            <Icon name="ExternalLink" size={16} />
          </motion.button>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-2 left-2 w-1 h-1 bg-success rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute bottom-2 right-2 w-0.5 h-0.5 bg-primary rounded-full opacity-30 group-hover:opacity-70 transition-opacity duration-300"></div>
      </div>

      {/* Hover glow effect */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-success/10 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
    </motion.div>
  );
};

export default CertificationBadge;
