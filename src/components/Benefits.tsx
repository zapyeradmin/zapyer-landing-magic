
import React, { useEffect, useRef } from 'react';
import { Users, BarChart, Zap } from 'lucide-react';

const Benefits: React.FC = () => {
  const benefitsRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const elements = entry.target.querySelectorAll('.benefit-card');
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
    
    if (benefitsRef.current) {
      observer.observe(benefitsRef.current);
    }
    
    return () => {
      if (benefitsRef.current) {
        observer.unobserve(benefitsRef.current);
      }
    };
  }, []);

  const benefits = [
    {
      title: 'Centralização Total',
      description: 'Gerencie toda a comunicação em um único número de WhatsApp.',
      icon: <BarChart className="w-12 h-12 text-zapyer-blue" />,
      color: 'bg-zapyer-blue/10',
    },
    {
      title: 'Produtividade em Equipe',
      description: 'Até 15 usuários simultâneos com relatórios detalhados de desempenho.',
      icon: <Users className="w-12 h-12 text-zapyer-green" />,
      color: 'bg-zapyer-green/10',
    },
    {
      title: 'Atendimento Inteligente',
      description: 'IA com ChatGPT e automações para respostas rápidas e eficazes.',
      icon: <Zap className="w-12 h-12 text-zapyer-blue" />,
      color: 'bg-zapyer-blue/10',
    }
  ];

  return (
    <section id="benefits" className="py-20 px-6 relative overflow-hidden">
      <div className="container mx-auto">
        <h2 className="section-title">Por que escolher o Zapyer Chat?</h2>
        <p className="section-subtitle">Nossa solução foi desenvolvida para transformar a maneira como sua empresa utiliza o WhatsApp.</p>
        
        <div ref={benefitsRef} className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="benefit-card glass-card p-8 rounded-xl relative overflow-hidden opacity-0 transition-all duration-500 hover:shadow-lg hover:-translate-y-1"
            >
              <div className={`absolute top-0 right-0 rounded-bl-3xl w-24 h-24 ${benefit.color} -z-10`}></div>
              <div className="mb-6">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-zapyer-dark mb-4">{benefit.title}</h3>
              <p className="text-zapyer-gray">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
