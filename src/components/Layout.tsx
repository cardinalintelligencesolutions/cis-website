import { Outlet, Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Layout = () => {
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  
  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  useEffect(() => {
    let ticking = false;
    
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;
      const scrollDifference = Math.abs(currentScrollY - lastScrollY);
      
      // Only update if there's meaningful scroll movement
      if (scrollDifference < 10) return;
      
      if (currentScrollY > lastScrollY && currentScrollY > 150) {
        // Scrolling down and past 150px
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY || currentScrollY <= 80) {
        // Scrolling up or near top
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
      ticking = false;
    };

    const requestTick = () => {
      if (!ticking) {
        requestAnimationFrame(controlNavbar);
        ticking = true;
      }
    };

    window.addEventListener('scroll', requestTick, { passive: true });
    return () => window.removeEventListener('scroll', requestTick);
  }, [lastScrollY]);

  return (
    <div className="min-h-full bg-white">
      <div className="relative isolate">
        <header className={`fixed top-0 left-0 right-0 z-50 px-6 lg:px-8 transition-all duration-500 ease-out ${
          isVisible 
            ? 'translate-y-0 opacity-100' 
            : '-translate-y-2 opacity-0 pointer-events-none'
        }`}>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between py-6">
              <div className="flex items-center">
                <img 
                  src="/CIS.svg" 
                  alt="CIS Logo" 
                  className="h-8 w-8 mr-3"
                />
              </div>
              
              <nav className="hidden md:block">
                <div className="bg-white/20 backdrop-blur-xl rounded-full px-8 py-3 shadow-2xl ring-1 ring-white/30 border border-white/20" style={{
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12), 0 2px 16px rgba(0, 0, 0, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.5), 0 0 20px rgba(151, 32, 39, 0.15)',
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0.1) 100%)'
                }}>
                  <ul className="flex items-center space-x-8">
                    <li>
                      <Link 
                        to="/" 
                        className={`flex items-center text-sm font-medium transition-colors ${
                          isActive('/') 
                            ? 'text-cis-primary' 
                            : 'text-gray-700 hover:text-cis-primary'
                        }`}
                        aria-label="Home"
                      >
                        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
                        </svg>
                      </Link>
                    </li>
                    <li>
                      <Link 
                        to="/services" 
                        className={`text-sm font-medium transition-colors ${
                          isActive('/services') 
                            ? 'text-cis-primary' 
                            : 'text-gray-700 hover:text-cis-primary'
                        }`}
                      >
                        Services
                      </Link>
                    </li>
                    <li>
                      <Link 
                        to="/about" 
                        className={`text-sm font-medium transition-colors ${
                          isActive('/about') 
                            ? 'text-cis-primary' 
                            : 'text-gray-700 hover:text-cis-primary'
                        }`}
                      >
                        About
                      </Link>
                    </li>
                    <li>
                      <Link 
                        to="/contact" 
                        className={`text-sm font-medium transition-colors ${
                          isActive('/contact') 
                            ? 'text-cis-primary' 
                            : 'text-gray-700 hover:text-cis-primary'
                        }`}
                      >
                        Contact
                      </Link>
                    </li>
                  </ul>
                </div>
              </nav>

              <div className="flex items-center space-x-4">
                <button
                  type="button"
                  className="relative rounded-full p-2 text-gray-600 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors"
                  aria-label="Switch to dark theme"
                >
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </header>

        <main className="pt-20">
          <Outlet />
        </main>

        <footer className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="border-t border-gray-200 py-8">
            <div className="flex items-center justify-between">
              <div className="flex space-x-6">
                <Link to="/about" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">About</Link>
                <Link to="/services" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Services</Link>
                <Link to="/contact" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Contact</Link>
              </div>
              <p className="text-sm text-gray-600">© 2025 Cardinal Intelligence Systems. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Layout;