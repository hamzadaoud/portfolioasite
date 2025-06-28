import React, { useState, useEffect } from 'react';
import Icon from '../AppIcon';

const FilterNavigation = ({
  onFilterChange = () => {},
  initialFilters = {},
  isSticky = true
}) => {
  const [filters, setFilters] = useState({
    category: 'all',
    technology: 'all',
    status: 'all',
    ...initialFilters
  });

  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const filterOptions = {
    category: [
      { value: 'all', label: 'All Categories' },
      { value: 'action', label: 'Action Games' },
      { value: 'puzzle', label: 'Puzzle Games' },
      { value: 'adventure', label: 'Adventure' },
      { value: 'simulation', label: 'Simulation' },
      { value: 'ai', label: 'AI Projects' }
    ],
    technology: [
      { value: 'all', label: 'All Technologies' },
      { value: 'unity', label: 'Unity' },
      { value: 'unreal', label: 'Unreal Engine' },
      { value: 'react', label: 'React' },
      { value: 'python', label: 'Python' },
      { value: 'csharp', label: 'C#' },
      { value: 'javascript', label: 'JavaScript' }
    ],
    status: [
      { value: 'all', label: 'All Status' },
      { value: 'completed', label: 'Completed' },
      { value: 'in-progress', label: 'In Progress' },
      { value: 'prototype', label: 'Prototype' }
    ]
  };

  useEffect(() => {
    if (isSticky) {
      const handleScroll = () => {
        const currentScrollY = window.scrollY;
        setIsVisible(currentScrollY < lastScrollY || currentScrollY < 200);
        setLastScrollY(currentScrollY);
      };

      window.addEventListener('scroll', handleScroll, { passive: true });
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [lastScrollY, isSticky]);

  const handleChange = (type, value) => {
    const updated = { ...filters, [type]: value };
    setFilters(updated);
    onFilterChange(updated);
  };

  const clearFilters = () => {
    const reset = { category: 'all', technology: 'all', status: 'all' };
    setFilters(reset);
    onFilterChange(reset);
  };

  return (
    <div
      className={`bg-surface/95 border-b border-accent/20 backdrop-blur-md ${
        isSticky ? 'sticky top-16 z-50' : ''
      } transition-all duration-300 ${isVisible ? '' : '-translate-y-full opacity-0'}`}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-center gap-4 w-full text-center">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
            {Object.entries(filterOptions).map(([type, options]) => (
              <select
                key={type}
                value={filters[type]}
                onChange={(e) => handleChange(type, e.target.value)}
                className="px-4 py-2 rounded-lg border border-accent/20 bg-surface/50 text-text-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-sm"
              >
                {options.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            ))}
          </div>

          {(filters.category !== 'all' || filters.technology !== 'all' || filters.status !== 'all') && (
            <button
              onClick={clearFilters}
              className="flex items-center justify-center space-x-2 text-error px-4 py-2 border border-error/30 bg-error/10 rounded-lg hover:bg-error/20 transition-all text-sm"
            >
              <Icon name="X" size={16} />
              <span>Clear Filters</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default FilterNavigation;
