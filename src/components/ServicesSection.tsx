
import React, { useEffect, useRef } from 'react';
import { Users, BarChart, Zap, MessageSquare } from 'lucide-react';

const ServicesSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const handleWhatsAppClick = () => {
    const message = "Olá, quero saber mais sobre o Zapyer Chat!";
    const encodedMessage = encodeURIComponent(message);
    window.open(`http://wa.me/5587996316081?text=${encodedMessage}`, '_blank');
  };
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const elements = entry.target.querySelectorAll('.feature-box');
          elements.forEach((el, index) => {
            setTimeout(() => {
              el.classList.add('animate-fade-in');
            }, index * 150);
          });
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const services = [
    {
      title: 'Centralização Total',
      description: 'Gerencie toda a comunicação em um único número de WhatsApp.',
      icon: <BarChart className="w-12 h-12 text-zapyer-blue" />,
    },
    {
      title: 'Produtividade em Equipe',
      description: 'Até 15 usuários simultâneos com relatórios detalhados de desempenho.',
      icon: <Users className="w-12 h-12 text-zapyer-green" />,
    },
    {
      title: 'Atendimento Inteligente',
      description: 'IA com ChatGPT e automações para respostas rápidas e eficazes.',
      icon: <Zap className="w-12 h-12 text-zapyer-blue" />,
    },
    {
      title: 'Múltiplos Números',
      description: 'Conexão com até 3 números de WhatsApp.',
      icon: <MessageSquare className="w-12 h-12 text-zapyer-green" />,
    },
    {
      title: 'Setores Personalizados',
      description: 'Setores personalizados para organizar o atendimento.',
      icon: <Users className="w-12 h-12 text-zapyer-blue" />,
    },
    {
      title: 'Integrações Poderosas',
      description: 'Integração com Typebot, N8N, WebFlow e Kanban.',
      icon: <Zap className="w-12 h-12 text-zapyer-green" />,
    }
  ];

  return (
    <section id="services" className="gp gry-bg">
      <div className="skw-shp-tp rgt"></div>
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Transforme sua ideia em <br /> um <span className="text-zapyer-blue">negócio escalável!</span>
          </h2>
          <p className="text-zapyer-gray max-w-2xl mx-auto">
            Por que escolher o Zapyer Chat? Nossa solução foi desenvolvida para transformar a maneira como sua empresa utiliza o WhatsApp.
          </p>
        </div>
        
        <div ref={sectionRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="feature-box opacity-0 transition-all duration-500 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-zapyer-dark mb-4">{service.title}</h3>
              <p className="text-zapyer-gray">{service.description}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button 
            onClick={handleWhatsAppClick}
            className="xapo-button"
          >
            CONTATE-NOS <i className="ml-2 inline-block">→</i>
          </button>
        </div>
      </div>
      <div className="skw-shp-bp rgt"></div>
    </section>
  );
};

export default ServicesSection;
