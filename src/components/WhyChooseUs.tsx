
import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

interface AccordionItemProps {
  title: string;
  content: string;
  isActive: boolean;
  onClick: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, content, isActive, onClick }) => {
  return (
    <div className="border-b border-gray-200 py-4">
      <h4 
        className="flex justify-between items-center text-lg font-semibold cursor-pointer"
        onClick={onClick}
      >
        {title}
        <ChevronDown 
          className={`transform transition-transform duration-300 ${isActive ? 'rotate-180' : ''}`} 
          size={20} 
        />
      </h4>
      <div 
        className={`overflow-hidden transition-all duration-300 ${isActive ? 'max-h-40 mt-4' : 'max-h-0'}`}
      >
        <p className="text-zapyer-gray">{content}</p>
      </div>
    </div>
  );
};

const WhyChooseUs: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  
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
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const accordionItems = [
    {
      title: 'Somos especialistas em comunicação multicanal',
      content: 'Nossa plataforma foi desenvolvida para centralizar a comunicação e facilitar o gerenciamento de múltiplos atendimentos, aumentando a produtividade da sua equipe.'
    },
    {
      title: 'Soluções digitais personalizadas para seu negócio',
      content: 'Personalizamos nossa plataforma de acordo com as necessidades específicas da sua empresa, garantindo que você tenha todas as ferramentas necessárias para um atendimento excepcional.'
    },
    {
      title: 'Construímos e impulsionamos marcas e agências',
      content: 'Ajudamos empresas a fortalecerem sua presença digital através de atendimento eficiente e automações inteligentes, elevando o padrão de comunicação com os clientes.'
    },
    {
      title: 'Ideal para empresas de todos os tamanhos',
      content: 'Seja uma pequena empresa ou uma grande corporação, o Zapyer Chat adapta-se ao seu volume de atendimento e necessidades específicas com planos flexíveis.'
    }
  ];

  return (
    <section className="gp">
      <div className="container mx-auto px-6">
        <div ref={sectionRef} className="flex flex-col lg:flex-row items-start gap-12 opacity-0">
          <div className="lg:w-1/2">
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Por que <span className="text-zapyer-blue">Escolher o Zapyer</span>
              </h2>
              <p className="text-zapyer-gray">
                O Zapyer Chat foi desenvolvido pensando nas necessidades reais das empresas que utilizam o WhatsApp como principal canal de comunicação. Nossa plataforma combina facilidade de uso com recursos avançados para transformar seu atendimento.
              </p>
            </div>
            
            <div>
              {accordionItems.map((item, index) => (
                <AccordionItem 
                  key={index}
                  title={item.title}
                  content={item.content}
                  isActive={activeIndex === index}
                  onClick={() => setActiveIndex(index === activeIndex ? -1 : index)}
                />
              ))}
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <div className="glass-card p-3 rounded-xl shadow-xl overflow-hidden relative">
              <img 
                src="/lovable-uploads/dc3f7530-ae9f-4754-bb0e-a13b9ac3c974.png"
                alt="Zapyer Chat Dashboard" 
                className="w-full h-auto rounded-lg"
              />
              
              {/* Decorative elements */}
              <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-zapyer-blue/10 rounded-full filter blur-xl -z-10"></div>
              <div className="absolute -top-8 -left-8 w-40 h-40 bg-zapyer-green/10 rounded-full filter blur-xl -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
