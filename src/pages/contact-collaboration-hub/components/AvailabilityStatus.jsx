import React, { useState, useEffect } from 'react';
import Icon from 'components/AppIcon';

const AvailabilityStatus = ({ currentTime }) => {
  const [availability, setAvailability] = useState({
    status: 'available',
    message: 'Available for new projects',
    nextAvailable: null
  });

  // Mock availability logic based on time
  useEffect(() => {
    const hour = currentTime.getHours();
    const day = currentTime.getDay(); // 0 = Sunday, 6 = Saturday

    // Business hours: Monday-Friday, 9AM-6PM PST
    const isBusinessHours = day >= 1 && day <= 5 && hour >= 9 && hour <= 18;
    
    if (isBusinessHours) {
      setAvailability({
        status: 'available',
        message: 'Available for new projects',
        nextAvailable: null
      });
    } else if (day >= 1 && day <= 5) {
      // Weekday but outside business hours
      setAvailability({
        status: 'busy',
        message: 'Outside business hours',
        nextAvailable: 'Available tomorrow at 9:00 AM PST'
      });
    } else {
      // Weekend
      setAvailability({
        status: 'away',
        message: 'Weekend - Limited availability',
        nextAvailable: 'Available Monday at 9:00 AM PST'
      });
    }
  }, [currentTime]);

  const statusConfig = {
    available: {
      color: 'text-success',
      bgColor: 'bg-success/20',
      borderColor: 'border-success/30',
      icon: 'CheckCircle',
      pulse: true
    },
    busy: {
      color: 'text-warning',
      bgColor: 'bg-warning/20',
      borderColor: 'border-warning/30',
      icon: 'Clock',
      pulse: false
    },
    away: {
      color: 'text-error',
      bgColor: 'bg-error/20',
      borderColor: 'border-error/30',
      icon: 'XCircle',
      pulse: false
    }
  };

  const config = statusConfig[availability.status];

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      timeZoneName: 'short'
    });
  };

  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Main Status Card */}
      <div className={`bg-surface/50 backdrop-blur-sm rounded-2xl border ${config.borderColor} p-6 shadow-neon`}>
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          {/* Status Indicator */}
          <div className="flex items-center space-x-4">
            <div className={`relative w-12 h-12 ${config.bgColor} rounded-full flex items-center justify-center`}>
              <Icon 
                name={config.icon} 
                size={24} 
                className={config.color} 
              />
              {config.pulse && (
                <div className={`absolute inset-0 ${config.bgColor} rounded-full animate-ping opacity-75`}></div>
              )}
            </div>
            
            <div>
              <div className={`font-heading text-xl font-bold ${config.color}`}>
                {availability.message}
              </div>
              <div className="font-body text-text-secondary">
                Current status for new projects and collaborations
              </div>
            </div>
          </div>

          {/* Current Time */}
          <div className="text-center md:text-right">
            <div className="font-mono text-lg font-bold text-text-primary">
              {formatTime(currentTime)}
            </div>
            <div className="font-caption text-sm text-text-tertiary">
              {formatDate(currentTime)}
            </div>
          </div>
        </div>

        {/* Next Available */}
        {availability.nextAvailable && (
          <div className="mt-4 pt-4 border-t border-accent/20">
            <div className="flex items-center space-x-2 text-text-secondary">
              <Icon name="Calendar" size={16} />
              <span className="font-body text-sm">
                {availability.nextAvailable}
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        <div className="bg-surface/30 rounded-xl border border-accent/20 p-4 text-center">
          <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-2">
            <Icon name="Zap" size={16} className="text-primary" />
          </div>
          <div className="font-heading text-lg font-bold text-text-primary">
            24h
          </div>
          <div className="font-caption text-xs text-text-tertiary">
            Average Response Time
          </div>
        </div>

        <div className="bg-surface/30 rounded-xl border border-accent/20 p-4 text-center">
          <div className="w-8 h-8 bg-success/20 rounded-lg flex items-center justify-center mx-auto mb-2">
            <Icon name="Calendar" size={16} className="text-success" />
          </div>
          <div className="font-heading text-lg font-bold text-text-primary">
            2-3 weeks
          </div>
          <div className="font-caption text-xs text-text-tertiary">
            Next Available Slot
          </div>
        </div>

        <div className="bg-surface/30 rounded-xl border border-accent/20 p-4 text-center">
          <div className="w-8 h-8 bg-secondary/20 rounded-lg flex items-center justify-center mx-auto mb-2">
            <Icon name="Users" size={16} className="text-secondary" />
          </div>
          <div className="font-heading text-lg font-bold text-text-primary">
            3/5
          </div>
          <div className="font-caption text-xs text-text-tertiary">
            Current Project Load
          </div>
        </div>
      </div>

      {/* Booking Calendar Preview */}
      <div className="mt-6 bg-surface/30 rounded-xl border border-accent/20 p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-heading text-lg font-bold text-text-primary">
            Schedule a Call
          </h3>
          <button className="px-4 py-2 bg-primary/20 text-primary rounded-lg font-body font-medium hover:bg-primary/30 transition-all duration-300">
            View Full Calendar
          </button>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            { day: 'Mon', date: '15', available: true },
            { day: 'Tue', date: '16', available: false },
            { day: 'Wed', date: '17', available: true },
            { day: 'Thu', date: '18', available: true }
          ].map((slot, index) => (
            <div
              key={index}
              className={`p-3 rounded-lg border text-center transition-all duration-300 ${
                slot.available
                  ? 'border-success/30 bg-success/10 hover:bg-success/20 cursor-pointer' :'border-error/30 bg-error/10 cursor-not-allowed opacity-50'
              }`}
            >
              <div className="font-caption text-xs text-text-tertiary">
                {slot.day}
              </div>
              <div className={`font-heading text-lg font-bold ${
                slot.available ? 'text-success' : 'text-error'
              }`}>
                {slot.date}
              </div>
              <div className="font-caption text-xs">
                {slot.available ? 'Available' : 'Booked'}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AvailabilityStatus;