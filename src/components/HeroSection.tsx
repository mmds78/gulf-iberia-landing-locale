
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from './ui/button';

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <div className="relative min-h-screen flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1466442929976-97f336a657be?ixlib=rb-4.0.3')",
            filter: "brightness(0.7)"
          }}
        ></div>
        <div className="absolute inset-0 hero-gradient"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="max-w-2xl animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white leading-tight mb-4">
            {t('hero.title')}
          </h1>
          <p className="text-xl md:text-2xl text-gulf-sand mb-8">
            {t('hero.subtitle')}
          </p>
          <Button className="bg-gulf-gold hover:bg-gulf-gold/90 text-gulf-navy font-medium px-6 py-3 text-lg">
            {t('hero.cta')}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
