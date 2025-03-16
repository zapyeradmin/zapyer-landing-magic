
import React, { useEffect, useRef } from 'react';
import { Check, Smartphone, Users, Bot, Calendar, Layers } from 'lucide-react';

const Features: React.FC = () => {
  const featuresRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observerFeatures = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const elements = entry.target.querySelectorAll('.feature-item');
          elements.forEach((el, index) => {
            setTimeout(() => {
              el.classList.add('animate-fade-in-right');
            }, index * 100);
          });
          observerFeatures.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    
    const observerImage = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-left');
          observerImage.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    
    if (featuresRef.current) {
      observerFeatures.observe(featuresRef.current);
    }
    
    if (imageRef.current) {
      observerImage.observe(imageRef.current);
    }
    
    return () => {
      if (featuresRef.current) {
        observerFeatures.unobserve(featuresRef.current);
      }
      if (imageRef.current) {
        observerImage.unobserve(imageRef.current);
      }
    };
  }, []);

  const features = [
    {
      title: 'Múltiplos Números',
      description: 'Conexão com até 3 números de WhatsApp.',
      icon: <Smartphone size={24} className="text-zapyer-blue" />
    },
    {
      title: 'Setores Personalizados',
      description: 'Setores personalizados para organizar o atendimento.',
      icon: <Users size={24} className="text-zapyer-green" />
    },
    {
      title: 'Integrações Poderosas',
      description: 'Integração com Typebot, N8N, WebFlow e Kanban.',
      icon: <Layers size={24} className="text-zapyer-blue" />
    },
    {
      title: 'IA Avançada',
      description: 'IA do ChatGPT para respostas automáticas e precisas.',
      icon: <Bot size={24} className="text-zapyer-green" />
    },
    {
      title: 'Automações Inteligentes',
      description: 'Agendamento de mensagens e fluxos de automação personalizados.',
      icon: <Calendar size={24} className="text-zapyer-blue" />
    }
  ];

  return (
    <section id="features" className="py-20 px-6 relative overflow-hidden">
      <div className="container mx-auto">
        <h2 className="section-title">Recursos que Fazem a Diferença</h2>
        <p className="section-subtitle">Funcionalidades exclusivas que transformarão a maneira como sua equipe trabalha.</p>
        
        <div className="flex flex-col md:flex-row items-center gap-12 mt-12">
          <div 
            ref={imageRef} 
            className="md:w-1/2 relative opacity-0"
          >
            <div className="absolute -top-8 -left-8 w-40 h-40 bg-zapyer-blue/10 rounded-full filter blur-xl"></div>
            <div className="absolute -bottom-12 -right-12 w-40 h-40 bg-zapyer-green/10 rounded-full filter blur-xl"></div>
            <div className="glass-card p-3 shadow-card rounded-xl relative z-10">
              <img 
                src="/lovable-uploads/dc3f7530-ae9f-4754-bb0e-a13b9ac3c974.png" 
                alt="Zapyer Chat Dashboard" 
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
          
          <div ref={featuresRef} className="md:w-1/2 space-y-6">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="feature-item flex items-start gap-4 glass-card p-5 rounded-lg opacity-0 hover:shadow-lg transition-all duration-300"
              >
                <div className="rounded-full p-2 bg-white shadow-sm">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="font-bold text-lg text-zapyer-dark mb-1">{feature.title}</h3>
                  <p className="text-zapyer-gray">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
