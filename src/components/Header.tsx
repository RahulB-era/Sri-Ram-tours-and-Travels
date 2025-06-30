import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Button from './ui/Button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Tours', path: '/tours' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="font-bold text-xl tracking-wider">
            <span className={`${isScrolled ? 'text-charcoal' : 'text-white'} transition-colors duration-300`}>
              SRI RAM TOUR & TRAVELS
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-medium transition-all duration-300 border-b-2 pb-1 ${
                  location.pathname === link.path
                    ? 'border-primary text-primary'
                    : `border-transparent hover:border-primary ${
                        isScrolled ? 'text-charcoal hover:text-primary' : 'text-white hover:text-white/80'
                      }`
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Button as={Link} to="/contact" size="sm" className="ml-4">
              CONTACT US
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className={`w-6 h-6 ${isScrolled ? 'text-charcoal' : 'text-white'}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isScrolled ? 'text-charcoal' : 'text-white'}`} />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 py-4 animate-fadeIn">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block py-2 px-4 text-charcoal font-medium transition-colors hover:text-primary ${
                  location.pathname === link.path ? 'text-primary bg-red-50' : ''
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="px-4 pt-4">
              <Button as={Link} to="/contact" size="sm" className="w-full" onClick={() => setIsMobileMenuOpen(false)}>
                CONTACT US
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;