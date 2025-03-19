
import React, { useEffect, useRef } from 'react';
import { MessageSquare } from 'lucide-react';

const HeroSection: React.FC = () => {
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
    <section id="home" className="relative min-h-screen flex flex-col bg-hero-pattern overflow-hidden pt-24">
      <div className="thm-lyr opc6 absolute inset-0">
        <div className="parlx" style={{backgroundImage: "url('/lovable-uploads/4b28a225-b59c-4c8f-9e0f-3ebf5f3377f1.png')"}}></div>
      </div>
      
      <div className="container mx-auto px-6 flex flex-1 items-center z-10">
        <div className="flex flex-col md:flex-row items-center w-full">
          {/* Left content - text */}
          <div className="md:w-1/2 mb-8 md:mb-0 opacity-0" ref={heroRef}>
            <div className="staggered-animation">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
                <span className="block">Transforme seu</span> 
                <span>Atendimento com o</span>
                <span className="text-zapyer-blue"> Zapyer</span>
                <span className="text-zapyer-green">Chat</span>
              </h1>
              <p className="text-lg text-white/90 mb-8 max-w-xl">
                Centralize a comunicação, aumente a eficiência e impulsione suas vendas com nossa solução de multiatendimento no WhatsApp.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={handleWhatsAppClick}
                  className="xapo-button"
                >
                  <MessageSquare size={18} className="mr-2" />
                  Fale Conosco no WhatsApp
                </button>
                <a 
                  href="#pricing"
                  className="xapo-button-outline text-white border-white"
                >
                  Ver Planos
                </a>
              </div>
            </div>
          </div>
          
          {/* Right content - image */}
          <div className="md:w-1/2 relative flex justify-center md:justify-end">
            <div className="relative w-full max-w-2xl">
              {/* Decorative elements */}
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-zapyer-blue/10 rounded-full filter blur-xl"></div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-zapyer-green/10 rounded-full filter blur-xl"></div>
              
              {/* Image container */}
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
      </div>
    </section>
  );
};

export default HeroSection;
