import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Header = () => {
  const location = useLocation();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  
  const navigationItems = [
    { path: '/', label: 'Home' },
    { path: '/services', label: 'Services' },
    { path: '/about', label: 'About Us' },
    { path: '/contact', label: 'Contact' }
  ];

  useEffect(() => {
    const currentIndex = navigationItems.findIndex(item => item.path === location.pathname);
    setActiveIndex(currentIndex >= 0 ? currentIndex : null);
  }, [location.pathname]);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-white/20">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo - Standalone */}
          <Link 
            to="/" 
            className="flex items-center space-x-3 group transition-transform duration-500 hover:scale-105"
          >
            <div className="relative">
              <img 
                src="/CIS.svg" 
                alt="CIS Logo" 
                className="h-12 w-12 transition-all duration-500 group-hover:rotate-6 group-hover:brightness-110"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-cis-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full blur-sm"></div>
            </div>
            <span className="text-2xl font-bold text-cis-primary group-hover:text-cis-accent transition-colors duration-300">
              CIS
            </span>
          </Link>
          
          {/* Pill Navigation */}
          <div className="relative">
            <nav className="relative flex items-center bg-gradient-to-r from-white/60 via-white/80 to-white/60 backdrop-blur-2xl border border-white/30 rounded-full px-2 py-2 shadow-lg shadow-black/5">
              {/* Liquid Glass Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-full opacity-50"></div>
              <div className="absolute inset-0 bg-white/10 rounded-full backdrop-blur-3xl"></div>
              
              {/* Active/Hover Indicator */}
              {(activeIndex !== null || hoveredIndex !== null) && (
                <div 
                  className="absolute top-2 bottom-2 bg-gradient-to-r from-cis-primary/10 via-cis-primary/20 to-cis-primary/10 rounded-full transition-all duration-500 ease-out backdrop-blur-sm border border-cis-primary/20"
                  style={{
                    left: `${8 + (hoveredIndex !== null ? hoveredIndex : activeIndex || 0) * 120}px`,
                    width: '104px',
                    boxShadow: '0 0 20px rgba(151, 32, 39, 0.1), inset 0 0 20px rgba(255, 255, 255, 0.3)'
                  }}
                />
              )}
              
              {/* Navigation Links */}
              <div className="relative flex items-center space-x-2">
                {navigationItems.map((item, index) => {
                  const isActive = location.pathname === item.path;
                  const isHovered = hoveredIndex === index;
                  
                  return (
                    <Link
                      key={item.path}
                      to={item.path}
                      onMouseEnter={() => setHoveredIndex(index)}
                      onMouseLeave={() => setHoveredIndex(null)}
                      className={`
                        relative z-10 px-6 py-3 text-sm font-semibold rounded-full 
                        transition-all duration-300 ease-out
                        transform hover:scale-105 hover:-translate-y-0.5
                        ${
                          isActive 
                            ? 'text-cis-primary shadow-sm' 
                            : isHovered
                              ? 'text-cis-primary'
                              : 'text-cis-secondary hover:text-cis-primary'
                        }
                      `}
                      style={{
                        textShadow: (isActive || isHovered) ? '0 0 10px rgba(151, 32, 39, 0.3)' : 'none',
                        filter: (isActive || isHovered) ? 'brightness(1.1)' : 'brightness(1)'
                      }}
                    >
                      <span className="relative z-20">{item.label}</span>
                      
                      {/* Micro-animation glow */}
                      {(isActive || isHovered) && (
                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-cis-primary/5 to-transparent animate-pulse"></div>
                      )}
                    </Link>
                  );
                })}
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;