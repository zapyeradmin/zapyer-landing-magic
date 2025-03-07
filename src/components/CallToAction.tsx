
import React, { useEffect, useRef } from 'react';
import { MessageSquare, ArrowRight } from 'lucide-react';

const CallToAction: React.FC = () => {
  const ctaRef = useRef<HTMLDivElement>(null);
  
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
    
    if (ctaRef.current) {
      observer.observe(ctaRef.current);
    }
    
    return () => {
      if (ctaRef.current) {
        observer.unobserve(ctaRef.current);
      }
    };
  }, []);
  
  const handleWhatsAppClick = () => {
    const message = "Olá, quero saber mais sobre o Zapyer Chat!";
    const encodedMessage = encodeURIComponent(message);
    window.open(`http://wa.me/5587996316081?text=${encodedMessage}`, '_blank');
  };

  return (
    <section className="py-20 px-6 relative overflow-hidden">
      <div 
        ref={ctaRef}
        className="container mx-auto opacity-0"
      >
        <div className="glass-card relative overflow-hidden rounded-2xl p-12 md:p-16 max-w-5xl mx-auto">
          <div className="absolute top-0 right-0 w-80 h-80 bg-zapyer-blue/10 rounded-full filter blur-3xl -z-10 transform translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-zapyer-green/10 rounded-full filter blur-3xl -z-10 transform -translate-x-1/2 translate-y-1/2"></div>
          
          <div className="text-center max-w-3xl mx-auto relative z-10">
            <h2 className="font-montserrat font-extrabold text-3xl md:text-4xl mb-6 text-zapyer-dark">
              Pronto para transformar sua empresa?
            </h2>
            <p className="text-zapyer-gray text-lg mb-8">
              Fale com nossa equipe e descubra como o Zapyer Chat pode levar seu atendimento ao próximo nível.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={handleWhatsAppClick}
                className="whatsapp-button"
              >
                <MessageSquare size={18} />
                Fale Conosco no WhatsApp
              </button>
              <button className="secondary-button">
                <span>Solicite uma Demonstração</span>
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
