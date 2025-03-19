
import React, { useEffect, useState } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import WhyChooseUs from '@/components/WhyChooseUs';
import AboutSection from '@/components/AboutSection';
import ScreenshotsSection from '@/components/ScreenshotsSection';
import Features from '@/components/Features';
import Newsletter from '@/components/Newsletter';
import TeamSection from '@/components/TeamSection';
import Testimonials from '@/components/Testimonials';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import LeadForm from '@/components/LeadForm';
import MobileMenu from '@/components/MobileMenu';

const Index: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Smooth scrolling for anchor links
  useEffect(() => {
    const smoothScroll = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target && target.tagName === 'A') {
        const anchor = target as HTMLAnchorElement;
        const href = anchor.getAttribute('href');
        
        if (href && href.startsWith('#') && href.length > 1) {
          e.preventDefault();
          const targetId = href.substring(1);
          const targetElement = document.getElementById(targetId);
          
          if (targetElement) {
            targetElement.scrollIntoView({
              behavior: 'smooth'
            });
            
            // Close mobile menu if open
            if (mobileMenuOpen) {
              setMobileMenuOpen(false);
            }
          }
        }
      }
    };

    document.addEventListener('click', smoothScroll);
    
    return () => {
      document.removeEventListener('click', smoothScroll);
    };
  }, [mobileMenuOpen]);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Header toggleMobileMenu={toggleMobileMenu} />
      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
      <HeroSection />
      <ServicesSection />
      <WhyChooseUs />
      <AboutSection />
      <ScreenshotsSection />
      <Newsletter />
      <TeamSection />
      <Features />
      <Testimonials />
      <ContactSection />
      <Footer />
      <LeadForm />
    </div>
  );
};

export default Index;
