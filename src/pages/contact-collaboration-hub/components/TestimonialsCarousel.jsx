import React, { useState, useEffect } from 'react';
import Icon from 'components/AppIcon';
import Image from 'components/AppImage';

const TestimonialsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Chen",
      role: "Lead Game Designer",
      company: "Pixel Studios",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      content: `Working with this developer was an absolute game-changer for our indie studio. Their technical expertise in Unity and creative problem-solving helped us launch our first commercial game ahead of schedule. The attention to detail and commitment to quality exceeded our expectations.`
    },
    {
      id: 2,
      name: "Marcus Rodriguez",
      role: "Technical Director",
      company: "GameForge Interactive",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      content: `Exceptional work on our multiplayer action game. The networking implementation was flawless, and the performance optimizations made our game run smoothly across all target platforms. Professional, reliable, and incredibly talented.`
    },
    {
      id: 3,
      name: "Emily Watson",
      role: "Indie Developer",
      company: "Solo Creator",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      content: `As a solo developer, I needed someone who could understand my vision and bring it to life. The collaboration was seamless, communication was excellent, and the final product exceeded my wildest dreams. Highly recommended!`
    },
    {
      id: 4,
      name: "David Kim",
      role: "Product Manager",
      company: "TechPlay Games",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      content: `Outstanding mobile game development skills. The UI/UX implementation was pixel-perfect, and the game mechanics felt incredibly polished. Delivered on time and within budget. Will definitely work together again.`
    },
    {
      id: 5,
      name: "Lisa Thompson",
      role: "Creative Director",
      company: "Neon Games",
      avatar: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      content: `Brought our concept art to life with stunning visual effects and smooth animations. The shader work was particularly impressive, creating the exact atmosphere we envisioned. A true artist and technical expert.`
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    // Resume autoplay after 10 seconds
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Icon
        key={index}
        name="Star"
        size={16}
        className={`${
          index < rating ? 'text-warning fill-current' : 'text-text-tertiary'
        }`}
      />
    ));
  };

  return (
    <div className="relative">
      {/* Main Testimonial */}
      <div className="bg-surface/50 backdrop-blur-sm rounded-2xl border border-accent/20 p-8 shadow-neon">
        <div className="flex flex-col md:flex-row items-start space-y-6 md:space-y-0 md:space-x-8">
          {/* Avatar */}
          <div className="flex-shrink-0">
            <div className="relative">
              <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-primary/30">
                <Image
                  src={testimonials[currentIndex].avatar}
                  alt={testimonials[currentIndex].name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                <Icon name="Quote" size={12} className="text-background" />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1">
            {/* Rating */}
            <div className="flex items-center space-x-1 mb-4">
              {renderStars(testimonials[currentIndex].rating)}
            </div>

            {/* Testimonial Text */}
            <blockquote className="font-body text-lg text-text-primary leading-relaxed mb-6">
              "{testimonials[currentIndex].content}"
            </blockquote>

            {/* Author Info */}
            <div>
              <div className="font-heading font-bold text-text-primary">
                {testimonials[currentIndex].name}
              </div>
              <div className="font-body text-text-secondary">
                {testimonials[currentIndex].role}
              </div>
              <div className="font-caption text-sm text-primary">
                {testimonials[currentIndex].company}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="flex items-center justify-between mt-6">
        {/* Previous Button */}
        <button
          onClick={goToPrevious}
          className="p-3 rounded-lg bg-surface/50 border border-accent/20 text-text-secondary hover:text-primary hover:border-primary/30 transition-all duration-300"
          aria-label="Previous testimonial"
        >
          <Icon name="ChevronLeft" size={20} />
        </button>

        {/* Dots Indicator */}
        <div className="flex items-center space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-primary shadow-neon'
                  : 'bg-text-tertiary hover:bg-text-secondary'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        {/* Next Button */}
        <button
          onClick={goToNext}
          className="p-3 rounded-lg bg-surface/50 border border-accent/20 text-text-secondary hover:text-primary hover:border-primary/30 transition-all duration-300"
          aria-label="Next testimonial"
        >
          <Icon name="ChevronRight" size={20} />
        </button>
      </div>

      {/* Auto-play Indicator */}
      <div className="flex items-center justify-center mt-4">
        <div className="flex items-center space-x-2 text-text-tertiary">
          <Icon 
            name={isAutoPlaying ? "Play" : "Pause"} 
            size={14} 
            className={isAutoPlaying ? "text-success" : "text-warning"}
          />
          <span className="font-caption text-xs">
            {isAutoPlaying ? "Auto-playing" : "Paused"}
          </span>
        </div>
      </div>

      {/* Progress Bar */}
      {isAutoPlaying && (
        <div className="mt-2 w-full bg-surface/30 rounded-full h-1 overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-100 ease-linear"
            style={{
              width: '100%',
              animation: 'progress 5s linear infinite'
            }}
          />
        </div>
      )}

      <style jsx>{`
        @keyframes progress {
          from { width: 0%; }
          to { width: 100%; }
        }
      `}</style>
    </div>
  );
};

export default TestimonialsCarousel;