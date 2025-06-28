import React, { useState } from 'react';
import Icon from 'components/AppIcon';

const ContactForm = ({ onSubmit, isSubmitted }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    inquiryType: '',
    projectTitle: '',
    description: '',
    timeline: '',
    budget: '',
    files: []
  });
  const [errors, setErrors] = useState({});
  const [isDragOver, setIsDragOver] = useState(false);

  const inquiryTypes = [
    { value: '', label: 'Select Inquiry Type', icon: 'HelpCircle' },
    { value: 'freelance', label: 'Freelance Project', icon: 'Briefcase' },
    { value: 'fulltime', label: 'Full-time Opportunity', icon: 'Building' },
    { value: 'collaboration', label: 'Collaboration', icon: 'Users' },
    { value: 'press', label: 'Press Inquiry', icon: 'Newspaper' },
    { value: 'other', label: 'Other', icon: 'MessageSquare' }
  ];

  const budgetRanges = [
    { value: '', label: 'Select Budget Range' },
    { value: 'under-5k', label: 'Under $5,000' },
    { value: '5k-15k', label: '$5,000 - $15,000' },
    { value: '15k-50k', label: '$15,000 - $50,000' },
    { value: '50k-plus', label: '$50,000+' },
    { value: 'discuss', label: 'Let\'s Discuss' }
  ];

  const timelineOptions = [
    { value: '', label: 'Select Timeline' },
    { value: 'asap', label: 'ASAP' },
    { value: '1-month', label: '1 Month' },
    { value: '2-3-months', label: '2-3 Months' },
    { value: '3-6-months', label: '3-6 Months' },
    { value: '6-months-plus', label: '6+ Months' },
    { value: 'flexible', label: 'Flexible' }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleFileUpload = (files) => {
    const fileArray = Array.from(files);
    setFormData(prev => ({
      ...prev,
      files: [...prev.files, ...fileArray]
    }));
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragOver(false);
    const files = e.dataTransfer.files;
    handleFileUpload(files);
  };

  const removeFile = (index) => {
    setFormData(prev => ({
      ...prev,
      files: prev.files.filter((_, i) => i !== index)
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.inquiryType) {
      newErrors.inquiryType = 'Please select an inquiry type';
    }

    if (!formData.description.trim()) {
      newErrors.description = 'Project description is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      onSubmit(formData);
      // Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        inquiryType: '',
        projectTitle: '',
        description: '',
        timeline: '',
        budget: '',
        files: []
      });
    }
  };

  return (
    <div className="bg-surface/50 backdrop-blur-sm rounded-2xl border border-accent/20 p-8 shadow-neon">
      <div className="mb-8">
        <h2 className="font-heading text-2xl font-bold text-text-primary mb-2">
          Start a Conversation
        </h2>
        <p className="font-body text-text-secondary">
          Tell me about your project and let's discuss how we can work together.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Personal Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block font-body font-medium text-text-primary mb-2">
              Full Name *
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className={`w-full px-4 py-3 bg-background/50 border rounded-lg font-body text-text-primary placeholder-text-tertiary focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300 ${
                errors.name ? 'border-error glitch-effect' : 'border-accent/30'
              }`}
              placeholder="Enter your full name"
            />
            {errors.name && (
              <p className="mt-1 text-sm text-error font-body">{errors.name}</p>
            )}
          </div>

          <div>
            <label className="block font-body font-medium text-text-primary mb-2">
              Email Address *
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className={`w-full px-4 py-3 bg-background/50 border rounded-lg font-body text-text-primary placeholder-text-tertiary focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300 ${
                errors.email ? 'border-error glitch-effect' : 'border-accent/30'
              }`}
              placeholder="your.email@example.com"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-error font-body">{errors.email}</p>
            )}
          </div>
        </div>

        <div>
          <label className="block font-body font-medium text-text-primary mb-2">
            Company/Organization
          </label>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleInputChange}
            className="w-full px-4 py-3 bg-background/50 border border-accent/30 rounded-lg font-body text-text-primary placeholder-text-tertiary focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300"
            placeholder="Your company or organization"
          />
        </div>

        {/* Inquiry Type */}
        <div>
          <label className="block font-body font-medium text-text-primary mb-2">
            Inquiry Type *
          </label>
          <div className="relative">
            <select
              name="inquiryType"
              value={formData.inquiryType}
              onChange={handleInputChange}
              className={`w-full px-4 py-3 bg-background/50 border rounded-lg font-body text-text-primary focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300 appearance-none ${
                errors.inquiryType ? 'border-error glitch-effect' : 'border-accent/30'
              }`}
            >
              {inquiryTypes.map((type) => (
                <option key={type.value} value={type.value}>
                  {type.label}
                </option>
              ))}
            </select>
            <Icon 
              name="ChevronDown" 
              size={20} 
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-text-tertiary pointer-events-none" 
            />
          </div>
          {errors.inquiryType && (
            <p className="mt-1 text-sm text-error font-body">{errors.inquiryType}</p>
          )}
        </div>

        {/* Project Details */}
        <div>
          <label className="block font-body font-medium text-text-primary mb-2">
            Project Title
          </label>
          <input
            type="text"
            name="projectTitle"
            value={formData.projectTitle}
            onChange={handleInputChange}
            className="w-full px-4 py-3 bg-background/50 border border-accent/30 rounded-lg font-body text-text-primary placeholder-text-tertiary focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300"
            placeholder="What's your project called?"
          />
        </div>

        <div>
          <label className="block font-body font-medium text-text-primary mb-2">
            Project Description *
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            rows={6}
            className={`w-full px-4 py-3 bg-background/50 border rounded-lg font-body text-text-primary placeholder-text-tertiary focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300 resize-vertical ${
              errors.description ? 'border-error glitch-effect' : 'border-accent/30'
            }`}
            placeholder="Tell me about your project, goals, and what you're looking for..."
          />
          {errors.description && (
            <p className="mt-1 text-sm text-error font-body">{errors.description}</p>
          )}
        </div>

        {/* Timeline and Budget */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block font-body font-medium text-text-primary mb-2">
              Timeline
            </label>
            <div className="relative">
              <select
                name="timeline"
                value={formData.timeline}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-background/50 border border-accent/30 rounded-lg font-body text-text-primary focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300 appearance-none"
              >
                {timelineOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              <Icon 
                name="ChevronDown" 
                size={20} 
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-text-tertiary pointer-events-none" 
              />
            </div>
          </div>

          <div>
            <label className="block font-body font-medium text-text-primary mb-2">
              Budget Range
            </label>
            <div className="relative">
              <select
                name="budget"
                value={formData.budget}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-background/50 border border-accent/30 rounded-lg font-body text-text-primary focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300 appearance-none"
              >
                {budgetRanges.map((range) => (
                  <option key={range.value} value={range.value}>
                    {range.label}
                  </option>
                ))}
              </select>
              <Icon 
                name="ChevronDown" 
                size={20} 
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-text-tertiary pointer-events-none" 
              />
            </div>
          </div>
        </div>

        {/* File Upload */}
        <div>
          <label className="block font-body font-medium text-text-primary mb-2">
            Project Files
          </label>
          <div
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            className={`border-2 border-dashed rounded-lg p-8 text-center transition-all duration-300 ${
              isDragOver 
                ? 'border-primary bg-primary/10' :'border-accent/30 hover:border-accent/50'
            }`}
          >
            <Icon name="Upload" size={32} className="text-text-tertiary mx-auto mb-4" />
            <p className="font-body text-text-secondary mb-2">
              Drag and drop files here, or click to browse
            </p>
            <p className="font-caption text-sm text-text-tertiary">
              Supported formats: PDF, DOC, PNG, JPG (Max 10MB each)
            </p>
            <input
              type="file"
              multiple
              onChange={(e) => handleFileUpload(e.target.files)}
              className="hidden"
              id="file-upload"
              accept=".pdf,.doc,.docx,.png,.jpg,.jpeg"
            />
            <label
              htmlFor="file-upload"
              className="inline-block mt-4 px-6 py-2 bg-accent/20 text-accent rounded-lg font-body font-medium cursor-pointer hover:bg-accent/30 transition-all duration-300"
            >
              Browse Files
            </label>
          </div>

          {/* Uploaded Files */}
          {formData.files.length > 0 && (
            <div className="mt-4 space-y-2">
              {formData.files.map((file, index) => (
                <div key={index} className="flex items-center justify-between bg-background/50 rounded-lg p-3">
                  <div className="flex items-center space-x-3">
                    <Icon name="File" size={20} className="text-text-tertiary" />
                    <span className="font-body text-text-secondary">{file.name}</span>
                    <span className="font-caption text-xs text-text-tertiary">
                      ({(file.size / 1024 / 1024).toFixed(2)} MB)
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => removeFile(index)}
                    className="p-1 text-error hover:bg-error/10 rounded transition-all duration-300"
                  >
                    <Icon name="X" size={16} />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Submit Button */}
        <div className="pt-6">
          <button
            type="submit"
            disabled={isSubmitted}
            className="w-full px-8 py-4 bg-gradient-to-r from-primary to-secondary rounded-lg font-body font-medium text-background hover:shadow-neon transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <div className="flex items-center justify-center space-x-2">
              <Icon name="Send" size={20} />
              <span>Send Message</span>
            </div>
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;