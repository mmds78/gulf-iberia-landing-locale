
import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import LanguageToggle from './LanguageToggle';

const Header = () => {
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-gulf-navy shadow-lg py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="font-serif text-2xl font-bold text-white">
            Gulf<span className="text-gulf-gold">Iberia</span>
          </h1>
        </div>

        <div className="hidden md:flex space-x-6 items-center">
          <a href="#" className="text-white hover:text-gulf-gold transition-colors">
            {t('nav.home')}
          </a>
          <a href="#about" className="text-white hover:text-gulf-gold transition-colors">
            {t('nav.about')}
          </a>
          <a href="#services" className="text-white hover:text-gulf-gold transition-colors">
            {t('nav.services')}
          </a>
          <a href="#contact" className="text-white hover:text-gulf-gold transition-colors">
            {t('nav.contact')}
          </a>
          <LanguageToggle />
        </div>

        <div className="md:hidden flex items-center">
          <LanguageToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;
