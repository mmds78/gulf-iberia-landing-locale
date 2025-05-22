
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-gulf-navy text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-serif text-2xl font-bold mb-4">
              Gulf<span className="text-gulf-gold">Iberia</span>
            </h3>
            <p className="text-gray-300 max-w-xs">
              Premium import-export services connecting Spain and the United Arab Emirates.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4">Contact</h4>
            <div className="space-y-2 text-gray-300">
              <p>Email: info@gulfiberia.com</p>
              <p>Phone: +34 91 123 4567</p>
              <p>UAE: +971 5 123 4567</p>
            </div>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4">Offices</h4>
            <div className="space-y-2 text-gray-300">
              <p>Madrid, Spain</p>
              <p>Dubai, UAE</p>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 mb-4 md:mb-0">
            {t('footer.rights')}
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              {t('footer.privacy')}
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              {t('footer.terms')}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
