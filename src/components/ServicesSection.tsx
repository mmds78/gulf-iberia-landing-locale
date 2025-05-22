
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Ship, Package, Globe } from 'lucide-react';

const ServicesSection = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: <Ship className="h-10 w-10 text-gulf-gold" />,
      title: t('services.logistics'),
      description: t('services.logistics.desc')
    },
    {
      icon: <Package className="h-10 w-10 text-gulf-gold" />,
      title: t('services.customs'),
      description: t('services.customs.desc')
    },
    {
      icon: <Globe className="h-10 w-10 text-gulf-gold" />,
      title: t('services.consulting'),
      description: t('services.consulting.desc')
    }
  ];

  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl font-bold text-gulf-navy mb-4 reveal-on-scroll">
            {t('services.title')}
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-lg shadow-lg text-center reveal-on-scroll"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gulf-navy rounded-full mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gulf-blue mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
