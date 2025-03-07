
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Benefits from '@/components/Benefits';
import VideoSection from '@/components/VideoSection';
import Features from '@/components/Features';
import Testimonials from '@/components/Testimonials';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';
import LeadForm from '@/components/LeadForm';

const Index: React.FC = () => {
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
          }
        }
      }
    };

    document.addEventListener('click', smoothScroll);
    
    return () => {
      document.removeEventListener('click', smoothScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Header />
      <Benefits />
      <VideoSection />
      <Features />
      <Testimonials />
      <CallToAction />
      <Footer />
      <LeadForm />
    </div>
  );
};

export default Index;
