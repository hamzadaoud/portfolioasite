import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from 'components/AppIcon';
import Image from 'components/AppImage';

const ProjectGallery = ({ project }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index) => {
    setSelectedImage(project.gallery[index]);
    setCurrentIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction) => {
    const newIndex = direction === 'next' 
      ? (currentIndex + 1) % project.gallery.length
      : (currentIndex - 1 + project.gallery.length) % project.gallery.length;
    
    setCurrentIndex(newIndex);
    setSelectedImage(project.gallery[newIndex]);
  };

  return (
    <motion.section
      id="gallery"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mt-16"
    >
      {/* Section Header */}
      <div className="flex items-center space-x-4 mb-8">
        <div className="p-3 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl border border-primary/30">
          <Icon name="Image" size={24} className="text-primary" />
        </div>
        <div>
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-text-primary">
            Project Gallery
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mt-2" />
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {project.gallery.map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group relative cursor-pointer overflow-hidden rounded-xl border border-accent/20 hover:border-accent/40 transition-all duration-300"
            onClick={() => openLightbox(index)}
          >
            <div className="aspect-video overflow-hidden">
              <Image
                src={image}
                alt={`${project.title} Screenshot ${index + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-4 left-4 right-4">
                <div className="flex items-center justify-between">
                  <span className="font-body text-text-primary font-medium">
                    Screenshot {index + 1}
                  </span>
                  <div className="flex items-center space-x-2 px-3 py-1 bg-primary/20 rounded-full border border-primary/30">
                    <Icon name="ZoomIn" size={16} className="text-primary" />
                    <span className="font-caption text-primary text-sm">View</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Glitch effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-1100 bg-background/95 backdrop-blur-md flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-5xl max-h-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Image */}
              <div className="relative">
                <Image
                  src={selectedImage}
                  alt={`${project.title} Screenshot ${currentIndex + 1}`}
                  className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-neon"
                />
                
                {/* Navigation */}
                <button
                  onClick={() => navigateImage('prev')}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 bg-surface/80 backdrop-blur-sm rounded-full border border-accent/30 text-text-primary hover:text-primary hover:border-primary/50 transition-all duration-300"
                >
                  <Icon name="ChevronLeft" size={24} />
                </button>
                
                <button
                  onClick={() => navigateImage('next')}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 bg-surface/80 backdrop-blur-sm rounded-full border border-accent/30 text-text-primary hover:text-primary hover:border-primary/50 transition-all duration-300"
                >
                  <Icon name="ChevronRight" size={24} />
                </button>
              </div>

              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute -top-12 right-0 p-2 text-text-secondary hover:text-text-primary transition-colors duration-300"
              >
                <Icon name="X" size={24} />
              </button>

              {/* Image Counter */}
              <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 px-4 py-2 bg-surface/80 backdrop-blur-sm rounded-full border border-accent/30">
                <span className="font-caption text-text-secondary">
                  {currentIndex + 1} of {project.gallery.length}
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
};

export default ProjectGallery;