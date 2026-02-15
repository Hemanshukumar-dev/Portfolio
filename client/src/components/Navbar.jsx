
import React, { useState, useEffect } from 'react';
import Button from '../ui/Button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Toggle sticky state when user scrolls past a certain point (e.g., 100px or Hero height)
      if (window.scrollY > window.innerHeight - 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false); // Close mobile menu on click
    }
  };

  const navLinks = [
    { name: 'SKILLS', id: 'skills', type: 'scroll' },
    { name: 'PROJECTS', id: 'projects', type: 'scroll' },
    { name: 'CONTACT', id: 'contact', type: 'scroll' },
  ];

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-background/95 backdrop-blur-sm border-b border-zinc-800 py-3' : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          {/* Logo / Brand */}
          <div 
            className="text-xl font-heading text-white cursor-pointer hover:text-accent transition-colors"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            HP_DEV
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a 
                href="/cv.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="font-heading text-sm text-zinc-300 hover:text-white transition-colors border-b-2 border-transparent hover:border-accent pb-1"
            >
                CV_FILE
            </a>

            {navLinks.map((link) => (
                <button
                    key={link.name}
                    onClick={() => scrollToSection(link.id)}
                    className="font-heading text-sm text-zinc-300 hover:text-white transition-colors border-b-2 border-transparent hover:border-accent pb-1"
                >
                    {link.name}
                </button>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-white p-2 focus:outline-none"
            >
                {isMobileMenuOpen ? (
                   /* Close Icon (Pixel-ish X) */
                   <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="square"/>
                        <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="square"/>
                   </svg>
                ) : (
                   /* Hamburger Icon (Pixel-ish Menu) */
                   <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="4" y="6" width="16" height="2" fill="currentColor"/>
                        <rect x="4" y="11" width="16" height="2" fill="currentColor"/>
                        <rect x="4" y="16" width="16" height="2" fill="currentColor"/>
                   </svg>
                )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8 md:hidden animate-fade-in">
             <a 
                href="/cv.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="font-heading text-2xl text-white hover:text-accent"
            >
                CV_FILE
            </a>
            
            {navLinks.map((link) => (
                <button
                    key={link.name}
                    onClick={() => scrollToSection(link.id)}
                    className="font-heading text-2xl text-white hover:text-accent"
                >
                    {link.name}
                </button>
            ))}

            <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="absolute bottom-10 text-zinc-500 hover:text-white mt-8"
            >
                [CLOSE]
            </button>
        </div>
      )}
    </>
  );
};

export default Navbar;
