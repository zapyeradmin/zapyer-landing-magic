
import React, { useEffect, useRef } from 'react';
import { MessageSquare } from 'lucide-react';

const Header: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  const handleWhatsAppClick = () => {
    const message = "Olá, quero saber mais sobre o Zapyer Chat!";
    const encodedMessage = encodeURIComponent(message);
    window.open(`http://wa.me/5587996316081?text=${encodedMessage}`, '_blank');
  };
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    
    if (heroRef.current) {
      observer.observe(heroRef.current);
    }
    
    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);
  
  return (
    <header className="relative min-h-screen flex flex-col bg-hero-pattern overflow-hidden">
      <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-zapyer-blue/5 to-zapyer-green/5 z-0"></div>
      
      {/* Top navigation */}
      <nav className="relative px-6 py-4 flex justify-between items-center z-10">
        <div className="flex items-center">
          <img 
            src="/lovable-uploads/b78caee9-300c-4e95-8069-0de56aa843a1.png" 
            alt="Zapyer Chat Logo" 
            className="h-10 md:h-12"
          />
        </div>
        <div className="hidden md:flex space-x-8 items-center">
          <a href="#benefits" className="text-zapyer-dark hover:text-zapyer-blue transition-colors">Benefícios</a>
          <a href="#features" className="text-zapyer-dark hover:text-zapyer-blue transition-colors">Funcionalidades</a>
          <a href="#testimonials" className="text-zapyer-dark hover:text-zapyer-blue transition-colors">Depoimentos</a>
          <button 
            onClick={handleWhatsAppClick}
            className="whatsapp-button"
          >
            <MessageSquare size={18} />
            Fale Conosco
          </button>
        </div>
        <button className="md:hidden text-zapyer-blue">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>
      
      {/* Hero content - two-column layout */}
      <div className="flex-1 flex flex-col md:flex-row items-center container mx-auto px-6 md:px-12 z-10">
        {/* Text column */}
        <div className="md:w-1/2 mb-8 md:mb-0 opacity-0" ref={heroRef}>
          <div className="staggered-animation">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-zapyer-dark leading-tight mb-6">
              Transforme seu Atendimento com o 
              <span className="text-zapyer-blue"> Zapyer</span>
              <span className="text-zapyer-green">Chat</span>
            </h1>
            <p className="text-lg text-zapyer-gray mb-8 max-w-xl">
              Centralize a comunicação, aumente a eficiência e impulsione suas vendas com nossa solução de multiatendimento no WhatsApp.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={handleWhatsAppClick}
                className="whatsapp-button"
              >
                <MessageSquare size={18} />
                Fale Conosco no WhatsApp
              </button>
              <button 
                onClick={handleWhatsAppClick}
                className="secondary-button"
              >
                Saiba Mais
              </button>
            </div>
          </div>
        </div>
        
        {/* Image column */}
        <div className="md:w-1/2 relative flex justify-center md:justify-end">
          <div className="relative w-full max-w-2xl">
            {/* Decorative elements */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-zapyer-blue/10 rounded-full filter blur-xl"></div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-zapyer-green/10 rounded-full filter blur-xl"></div>
            
            {/* Image container with proper scaling - reduced by another 30% from 210% to 147% */}
            <div className="relative z-10 rounded-lg overflow-hidden transform scale-[147%] my-8 mx-auto">
              <img 
                src="/lovable-uploads/4b28a225-b59c-4c8f-9e0f-3ebf5f3377f1.png" 
                alt="Zapyer Chat Interface no laptop e celular" 
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
