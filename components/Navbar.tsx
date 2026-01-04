import React, { useState, useEffect } from 'react';
import { Menu, X, Instagram, Phone } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#' },
    { label: 'Services', href: '#services' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Reviews', href: '#reviews' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="#" className={`text-2xl md:text-3xl font-serif font-bold tracking-tighter ${scrolled ? 'text-brand-900' : 'text-brand-900 md:text-brand-900'}`}>
              IMADE OMA<span className="text-brand-600">.</span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`font-medium text-sm tracking-widest uppercase hover:text-brand-600 transition-colors ${scrolled ? 'text-gray-800' : 'text-gray-800'}`}
              >
                {link.label}
              </a>
            ))}
            <a 
              href="#booking"
              className="bg-brand-600 text-white px-6 py-2.5 rounded-none text-sm font-semibold tracking-wider hover:bg-brand-700 transition-colors"
            >
              BOOK SESSION
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-brand-900 focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full h-screen">
          <div className="px-4 pt-8 pb-6 space-y-4 text-center">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-3 text-lg font-serif font-medium text-gray-900 hover:text-brand-600"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-8">
              <a
                href="#booking"
                onClick={() => setIsOpen(false)}
                className="inline-block w-full text-center bg-brand-900 text-white px-4 py-4 font-bold uppercase tracking-widest"
              >
                Book Appointment
              </a>
            </div>
            <div className="pt-8 flex justify-center space-x-6 text-brand-600">
                <Instagram />
                <Phone />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;