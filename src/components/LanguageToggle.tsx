
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from './ui/button';
import { Globe } from 'lucide-react';

const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'es' : 'en');
  };

  return (
    <Button 
      variant="ghost" 
      onClick={toggleLanguage}
      className="flex items-center space-x-2 text-white hover:bg-white/10"
    >
      <Globe className="h-4 w-4" />
      <span>{language === 'en' ? 'ES' : 'EN'}</span>
    </Button>
  );
};

export default LanguageToggle;
