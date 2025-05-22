
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Update title
    document.title = "Gulf Iberia | Spain-UAE Import Export Specialists";
    
    // Scroll reveal functionality
    const handleScroll = () => {
      const elements = document.querySelectorAll('.reveal-on-scroll');
      elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        if (rect.top <= windowHeight * 0.85) {
          el.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check in case elements are already in view
    setTimeout(handleScroll, 300);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
