
import React, { useEffect, useRef } from 'react';
import { MessageSquare } from 'lucide-react';

const AboutSection: React.FC = () => {
  const statsRef = useRef<HTMLDivElement>(null);
  
  const handleWhatsAppClick = () => {
    const message = "Olá, quero saber mais sobre o Zapyer Chat!";
    const encodedMessage = encodeURIComponent(message);
    window.open(`http://wa.me/5587996316081?text=${encodedMessage}`, '_blank');
  };
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const elements = entry.target.querySelectorAll('.stat-box');
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
    
    if (statsRef.current) {
      observer.observe(statsRef.current);
    }
    
    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, []);

  const stats = [
    {
      value: '3000+',
      label: 'Empresas Atendidas',
      icon: 'ion-android-open'
    },
    {
      value: '50000+',
      label: 'Usuários Ativos',
      icon: 'ion-android-hand'
    },
    {
      value: '150+',
      label: 'Atendentes Simultâneos',
      icon: 'fa fa-trophy'
    },
    {
      value: '500k+',
      label: 'Mensagens por Dia',
      icon: 'fa fa-send-o'
    }
  ];

  return (
    <section id="about" className="gp nogp thm-lyr opc6">
      <div className="parlx" style={{backgroundImage: "url('/lovable-uploads/dc3f7530-ae9f-4754-bb0e-a13b9ac3c974.png')"}}></div>
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="w-20 h-20 bg-white/10 backdrop-blur-lg rounded-full flex items-center justify-center mx-auto mb-6">
            <MessageSquare size={40} className="text-white" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">O Melhor App de Multiatendimento do Mercado</h2>
          <p className="text-white/80 text-lg">
            Nossa solução foi desenvolvida para transformar a maneira como sua empresa utiliza o WhatsApp. Centralize a comunicação, aumente a eficiência e impulsione suas vendas com recursos avançados de IA, automações inteligentes e relatórios detalhados.
          </p>
        </div>
        
        <div className="mb-16 flex flex-wrap justify-center gap-4">
          <button 
            onClick={handleWhatsAppClick}
            className="flex items-center justify-center gap-2 bg-zapyer-green text-white py-3 px-6 rounded-full hover:shadow-lg transition-all"
          >
            <MessageSquare size={20} />
            <span>
              <span className="block text-xs">Disponível para</span>
              Iniciar Agora
            </span>
          </button>
          <button 
            onClick={handleWhatsAppClick}
            className="flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-white py-3 px-6 rounded-full hover:bg-white/20 transition-all"
          >
            <MessageSquare size={20} />
            <span>
              <span className="block text-xs">Solicite</span>
              Uma Demonstração
            </span>
          </button>
        </div>
        
        <div ref={statsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="stat-box bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center opacity-0 transition-all hover:bg-white/15"
            >
              <div className="w-14 h-14 bg-zapyer-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageSquare size={24} className="text-white" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">{stat.value}</h3>
              <p className="text-white/80">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
