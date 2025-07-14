import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import GlobalHeader from 'components/ui/GlobalHeader';
import ProjectBreadcrumbs from 'components/ui/ProjectBreadcrumbs';
import Icon from 'components/AppIcon';

import ContactForm from './components/ContactForm';
import ContactSidebar from './components/ContactSidebar';
import TestimonialsCarousel from './components/TestimonialsCarousel';
import AvailabilityStatus from './components/AvailabilityStatus';

const ContactCollaborationHub = () => {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleFormSubmit = (formData) => {
    // Mock form submission
    console.log('Form submitted:', formData);
    setIsFormSubmitted(true);
    
    // Reset after 5 seconds
    setTimeout(() => {
      setIsFormSubmitted(false);
    }, 5000);
  };

  return (
    <>
      <Helmet>
        <title>Contact & Collaboration Hub - GameDev Portfolio</title>
        <meta name="description" content="Get in touch for game development projects, collaborations, and professional opportunities. Available for freelance work and full-time positions." />
        <meta name="keywords" content="game developer contact, freelance game development, collaboration, hire game developer" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <GlobalHeader />
        <ProjectBreadcrumbs />

        {/* Hero Section */}
        <section className="relative pt-24 pb-16 overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full border border-primary/20 mb-6">
                <div className="w-2 h-2 bg-primary rounded-full animate-ping"></div>
                <span className="font-caption text-sm text-primary">Available for Projects</span>
              </div>
              
              <h1 className="font-heading text-4xl md:text-6xl font-black text-text-primary mb-6">
                Let's Create Something
                <span className="block bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  Extraordinary
                </span>
              </h1>
              
              <p className="font-body text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
                Ready to bring your game ideas to life? I'm available for freelance projects, 
                full-time opportunities, and exciting collaborations in the gaming industry.
              </p>
            </div>

            {/* Availability Status */}
            <AvailabilityStatus currentTime={currentTime} />
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Contact Form */}
              <div className="lg:col-span-2">
                <ContactForm 
                  onSubmit={handleFormSubmit}
                  isSubmitted={isFormSubmitted}
                />
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <ContactSidebar />
              </div>
            </div>
          </div>
        </section>

        

        {/* Success Modal */}
        {isFormSubmitted && (
          <div className="fixed inset-0 z-1100 flex items-center justify-center bg-background/80 backdrop-blur-sm">
            <div className="bg-surface border border-primary/20 rounded-2xl p-8 max-w-md mx-4 shadow-neon">
              <div className="text-center">
                <div className="w-16 h-16 bg-success/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="CheckCircle" size={32} className="text-success" />
                </div>
                <h3 className="font-heading text-xl font-bold text-text-primary mb-2">
                  Message Sent Successfully!
                </h3>
                <p className="font-body text-text-secondary mb-6">
                  Thank you for reaching out. I'll get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setIsFormSubmitted(false)}
                  className="px-6 py-3 bg-gradient-to-r from-primary to-secondary rounded-lg font-body font-medium text-background hover:shadow-neon transition-all duration-300"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Footer */}
        <footer className="bg-surface/50 border-t border-accent/20 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="flex items-center justify-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                  <Icon name="Gamepad2" size={20} className="text-background" />
                </div>
                <span className="font-heading text-xl font-bold text-text-primary">GameDev Portfolio</span>
              </div>
              <p className="font-body text-text-secondary">
                © {new Date().getFullYear()} GameDev Portfolio. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default ContactCollaborationHub;
