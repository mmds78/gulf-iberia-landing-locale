
import React, { useEffect, useRef } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const AboutSection = () => {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });
    
    const elements = document.querySelectorAll('.reveal-on-scroll');
    elements.forEach(el => observer.observe(el));
    
    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1492321936769-b49830bc1d1e?ixlib=rb-4.0.3" 
                alt="UAE Building" 
                className="rounded-lg shadow-xl w-full h-[400px] object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-gulf-gold p-4 rounded shadow-lg hidden md:block">
                <img 
                  src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3" 
                  alt="Modern Office" 
                  className="w-32 h-32 object-cover rounded"
                />
              </div>
            </div>
          </div>
          <div className="reveal-on-scroll">
            <h2 className="font-serif text-4xl font-bold text-gulf-navy mb-2">
              {t('about.title')}
            </h2>
            <p className="text-xl text-gulf-blue mb-6">
              {t('about.subtitle')}
            </p>
            <div className="space-y-4">
              <p className="text-gray-700">
                {t('about.description')}
              </p>
              <p className="text-gray-700">
                {t('about.expertise')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
