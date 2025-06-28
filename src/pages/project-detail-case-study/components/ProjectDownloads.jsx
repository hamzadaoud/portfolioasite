import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from 'components/AppIcon';

const ProjectDownloads = ({ project }) => {
  const [downloadingItems, setDownloadingItems] = useState(new Set());

  const getFileIcon = (type) => {
    switch (type) {
      case 'exe': return 'Monitor';
      case 'apk': return 'Smartphone';
      case 'dmg': return 'Laptop';
      case 'zip': return 'Archive';
      case 'tar.gz': return 'Package';
      default: return 'Download';
    }
  };

  const getFileColor = (type) => {
    switch (type) {
      case 'exe': return 'text-primary';
      case 'apk': return 'text-success';
      case 'dmg': return 'text-secondary';
      case 'zip': return 'text-accent';
      case 'tar.gz': return 'text-warning';
      default: return 'text-text-secondary';
    }
  };

  const handleDownload = (item, index) => {
    setDownloadingItems(prev => new Set([...prev, index]));
    
    // Simulate download process
    setTimeout(() => {
      setDownloadingItems(prev => {
        const newSet = new Set(prev);
        newSet.delete(index);
        return newSet;
      });
      
      // In a real app, this would trigger the actual download
      console.log(`Downloading ${item.name}`);
    }, 2000);
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mt-16"
    >
      {/* Section Header */}
      <div className="flex items-center space-x-4 mb-8">
        <div className="p-3 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl border border-primary/30">
          <Icon name="Download" size={24} className="text-primary" />
        </div>
        <div>
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-text-primary">
            Downloads
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mt-2" />
        </div>
      </div>

      {/* Downloads Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {project.downloads.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group relative"
          >
            <div className="bg-surface/80 backdrop-blur-sm rounded-xl border border-accent/20 hover:border-accent/40 p-6 transition-all duration-300 hover:shadow-neon">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-br from-${getFileColor(item.type).split('-')[1]}/20 to-${getFileColor(item.type).split('-')[1]}/10 border border-${getFileColor(item.type).split('-')[1]}/30`}>
                    <Icon 
                      name={getFileIcon(item.type)} 
                      size={24} 
                      className={getFileColor(item.type)}
                    />
                  </div>
                  <div>
                    <h3 className="font-body font-semibold text-text-primary mb-1">
                      {item.name}
                    </h3>
                    <div className="flex items-center space-x-3 text-sm">
                      <span className="font-caption text-text-tertiary">
                        {item.size}
                      </span>
                      <span className="font-caption text-text-tertiary uppercase">
                        {item.type}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Download Button */}
                <button
                  onClick={() => handleDownload(item, index)}
                  disabled={downloadingItems.has(index)}
                  className={`group/btn flex items-center space-x-2 px-4 py-2 rounded-lg font-body font-medium transition-all duration-300 ${
                    downloadingItems.has(index)
                      ? 'bg-warning/20 text-warning border border-warning/30 cursor-not-allowed' :'bg-primary/20 text-primary border border-primary/30 hover:bg-primary/30 hover:shadow-neon'
                  }`}
                >
                  {downloadingItems.has(index) ? (
                    <>
                      <div className="w-4 h-4 border-2 border-warning/30 border-t-warning rounded-full animate-spin" />
                      <span>Downloading...</span>
                    </>
                  ) : (
                    <>
                      <Icon 
                        name="Download" 
                        size={16} 
                        className="group-hover/btn:scale-110 transition-transform duration-300" 
                      />
                      <span>Download</span>
                    </>
                  )}
                </button>
              </div>

              {/* Progress Bar for Downloading Items */}
              {downloadingItems.has(index) && (
                <div className="mt-4">
                  <div className="w-full bg-surface rounded-full h-2 overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-warning to-warning/60"
                      initial={{ width: '0%' }}
                      animate={{ width: '100%' }}
                      transition={{ duration: 2, ease: 'easeInOut' }}
                    />
                  </div>
                </div>
              )}

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Download Notice */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="mt-8 p-6 bg-accent/10 rounded-xl border border-accent/20"
      >
        <div className="flex items-start space-x-3">
          <Icon name="Info" size={20} className="text-accent mt-0.5" />
          <div>
            <h4 className="font-body font-semibold text-text-primary mb-2">
              Download Information
            </h4>
            <p className="font-body text-text-secondary text-sm leading-relaxed">
              All downloads are provided for evaluation and portfolio purposes. 
              Source code and assets are available for educational use. 
              Please respect intellectual property rights and licensing terms.
            </p>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default ProjectDownloads;