
import React, { useEffect, useRef } from 'react';
import { Instagram, MessageSquare } from 'lucide-react';

const TeamSection: React.FC = () => {
  const teamRef = useRef<HTMLDivElement>(null);
  
  const handleWhatsAppClick = () => {
    const message = "Olá, quero saber mais sobre o Zapyer Chat!";
    const encodedMessage = encodeURIComponent(message);
    window.open(`http://wa.me/5587996316081?text=${encodedMessage}`, '_blank');
  };
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const elements = entry.target.querySelectorAll('.team-member');
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
    
    if (teamRef.current) {
      observer.observe(teamRef.current);
    }
    
    return () => {
      if (teamRef.current) {
        observer.unobserve(teamRef.current);
      }
    };
  }, []);

  const team = [
    {
      name: 'Ana Souza',
      role: 'CEO, Zapyer',
      image: "https://placehold.co/300x300/1E5EFA/FFFFFF.png?text=AS",
      description: 'Especialista em tecnologia com mais de 10 anos de experiência em soluções para o WhatsApp.'
    },
    {
      name: 'João Lima',
      role: 'CTO, Zapyer',
      image: "https://placehold.co/300x300/10B981/FFFFFF.png?text=JL",
      description: 'Desenvolvedor full-stack com foco em criar soluções intuitivas e eficientes para empresas.'
    },
    {
      name: 'Mariana Costa',
      role: 'COO, Zapyer',
      image: "https://placehold.co/300x300/0F172A/FFFFFF.png?text=MC",
      description: 'Estrategista de negócios apaixonada por otimizar processos e melhorar a experiência do cliente.'
    }
  ];

  return (
    <section id="team" className="gp bp175">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Conheça Nossa Equipe</h2>
          <p className="text-zapyer-gray max-w-2xl mx-auto">
            Profissionais dedicados a revolucionar o atendimento ao cliente via WhatsApp
          </p>
          <div className="w-16 h-1 bg-zapyer-blue mx-auto mt-6"></div>
        </div>
        
        <div ref={teamRef} className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {team.map((member, index) => (
            <div key={index} className="team-member opacity-0">
              <div className="overflow-hidden rounded-t-lg">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-auto transition-transform hover:scale-105 duration-300"
                />
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold mb-1">{member.name}</h4>
                <span className="text-zapyer-blue text-sm block mb-4">{member.role}</span>
                <div className="team-social mb-4">
                  <a href="#" className="team-social-icon" aria-label="Facebook">
                    <MessageSquare size={16} />
                  </a>
                  <a href="https://www.instagram.com/zapyer.io/" target="_blank" rel="noopener noreferrer" className="team-social-icon" aria-label="Instagram">
                    <Instagram size={16} />
                  </a>
                </div>
                <p className="text-zapyer-gray text-sm">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button 
            onClick={handleWhatsAppClick}
            className="xapo-button"
          >
            FALE COM NOSSA EQUIPE <i className="ml-2 inline-block">→</i>
          </button>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
