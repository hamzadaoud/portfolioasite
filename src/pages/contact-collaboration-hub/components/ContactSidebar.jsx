import React from 'react';
import Icon from 'components/AppIcon';

const ContactSidebar = () => {
  const contactMethods = [
   {
  icon: 'Mail',
  label: 'Email',
  value: 'hello@gamedev.portfolio',
  href: 'mailto:hamzadaoudbn@gmail.com',
  description: 'Best for detailed inquiries'
},

    {
      icon: 'MessageSquare',
      label: 'Discord',
      value: 'GameDev#1234',
      href: '#',
      description: 'Quick chat and collaboration'
    },
    {
      icon: 'Phone',
      label: 'Phone',
      value: '+212644857115',
      href: 'tel:+212644857115',
      description: 'Available Mon-Fri, 9AM-6PM PST'
    }
  ];

  const socialLinks = [
    {
      icon: 'Github',
      label: 'GitHub',
      href: 'https://github.com/hamzadaoud',
      color: 'text-text-secondary hover:text-primary'
    },
    {
      icon: 'Linkedin',
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/hamza-daoud-419a45184?originalSubdomain=ma',
      color: 'text-text-secondary hover:text-primary'
    },
    {
      icon: 'Twitter',
      label: 'Twitter',
      href: 'https://twitter.com/gamedev',
      color: 'text-text-secondary hover:text-primary'
    },
    {
      icon: 'Youtube',
      label: 'YouTube',
      href: 'https://youtube.com/gamedev',
      color: 'text-text-secondary hover:text-primary'
    }
  ];

  const responseStats = [
    {
      icon: 'Clock',
      label: 'Response Time',
      value: '< 24 hours',
      description: 'Average first response'
    },
    {
      icon: 'CheckCircle',
      label: 'Success Rate',
      value: '98%',
      description: 'Project completion rate'
    },
    {
      icon: 'Users',
      label: 'Happy Clients',
      value: '50+',
      description: 'Satisfied customers'
    }
  ];

  return (
    <div className="space-y-8">
      {/* Contact Methods */}
      <div className="bg-surface/50 backdrop-blur-sm rounded-2xl border border-accent/20 p-6 shadow-neon">
        <h3 className="font-heading text-xl font-bold text-text-primary mb-6">
          Get in Touch
        </h3>
        
        <div className="space-y-4">
          {contactMethods.map((method, index) => (
            <a
              key={index}
              href={method.href}
              className="group flex items-start space-x-4 p-4 rounded-lg hover:bg-primary/5 transition-all duration-300"
            >
              <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center group-hover:bg-primary/30 transition-all duration-300">
                <Icon 
                  name={method.icon} 
                  size={20} 
                  className="text-primary" 
                />
              </div>
              <div className="flex-1">
                <div className="font-body font-medium text-text-primary group-hover:text-primary transition-colors duration-300">
                  {method.label}
                </div>
                <div className="font-body text-text-secondary text-sm">
                  {method.value}
                </div>
                <div className="font-caption text-xs text-text-tertiary mt-1">
                  {method.description}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Social Media */}
      <div className="bg-surface/50 backdrop-blur-sm rounded-2xl border border-accent/20 p-6 shadow-neon">
        <h3 className="font-heading text-xl font-bold text-text-primary mb-6">
          Follow My Work
        </h3>
        
        <div className="grid grid-cols-2 gap-4">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex items-center space-x-3 p-3 rounded-lg border border-accent/20 hover:border-primary/30 transition-all duration-300 ${social.color}`}
            >
              <Icon 
                name={social.icon} 
                size={20} 
                className="group-hover:scale-110 transition-transform duration-300" 
              />
              <span className="font-body font-medium">{social.label}</span>
            </a>
          ))}
        </div>
      </div>

      {/* Response Stats */}
      <div className="bg-surface/50 backdrop-blur-sm rounded-2xl border border-accent/20 p-6 shadow-neon">
        <h3 className="font-heading text-xl font-bold text-text-primary mb-6">
          Why Work With Me
        </h3>
        
        <div className="space-y-4">
          {responseStats.map((stat, index) => (
            <div key={index} className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-success/20 rounded-lg flex items-center justify-center">
                <Icon 
                  name={stat.icon} 
                  size={20} 
                  className="text-success" 
                />
              </div>
              <div className="flex-1">
                <div className="flex items-center space-x-2">
                  <span className="font-body font-medium text-text-primary">
                    {stat.label}
                  </span>
                  <span className="font-heading font-bold text-success">
                    {stat.value}
                  </span>
                </div>
                <div className="font-caption text-xs text-text-tertiary">
                  {stat.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Media Kit Download */}
      <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl border border-primary/20 p-6">
        <div className="text-center">
          <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-4">
            <Icon name="Download" size={24} className="text-primary" />
          </div>
          <h3 className="font-heading text-lg font-bold text-text-primary mb-2">
            Media Kit
          </h3>
          <p className="font-body text-sm text-text-secondary mb-4">
            Download my complete portfolio, resume, and project assets
          </p>
          <button className="w-full px-4 py-3 bg-gradient-to-r from-primary to-secondary rounded-lg font-body font-medium text-background hover:shadow-neon transition-all duration-300">
            Download Media Kit
          </button>
        </div>
      </div>

      {/* Location */}
      <div className="bg-surface/50 backdrop-blur-sm rounded-2xl border border-accent/20 p-6 shadow-neon">
        <h3 className="font-heading text-xl font-bold text-text-primary mb-4">
          Location
        </h3>
        
        <div className="space-y-3">
          <div className="flex items-center space-x-3">
            <Icon name="MapPin" size={20} className="text-primary" />
            <div>
              <div className="font-body font-medium text-text-primary">
                San Francisco, CA
              </div>
              <div className="font-caption text-sm text-text-tertiary">
                Pacific Standard Time (PST)
              </div>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <Icon name="Globe" size={20} className="text-primary" />
            <div>
              <div className="font-body font-medium text-text-primary">
                Remote Friendly
              </div>
              <div className="font-caption text-sm text-text-tertiary">
                Available for global projects
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSidebar;
