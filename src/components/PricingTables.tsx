
import React, { useEffect, useRef } from 'react';
import { Check, MessageSquare } from 'lucide-react';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

const PricingTables: React.FC = () => {
  const pricingSectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const elements = entry.target.querySelectorAll('.pricing-card');
          elements.forEach((el, index) => {
            setTimeout(() => {
              el.classList.add('animate-fade-in');
            }, index * 200);
          });
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    
    if (pricingSectionRef.current) {
      observer.observe(pricingSectionRef.current);
    }
    
    return () => {
      if (pricingSectionRef.current) {
        observer.unobserve(pricingSectionRef.current);
      }
    };
  }, []);

  const handleWhatsAppClick = (plan: string) => {
    const message = `Olá, estou interessado no ${plan} do Zapyer Chat e gostaria de mais informações!`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/5587996316081?text=${encodedMessage}`, '_blank');
  };

  return (
    <section id="pricing" className="py-20 px-6 relative overflow-hidden bg-white">
      <div className="container mx-auto">
        <h2 className="section-title">Escolha o Plano Ideal Para Seu Negócio</h2>
        <p className="section-subtitle mb-12">Soluções que se adaptam ao tamanho e às necessidades da sua empresa</p>
        
        <div 
          ref={pricingSectionRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto"
        >
          {/* Plano Starter */}
          <Card className="pricing-card opacity-0 flex flex-col glass-card hover:shadow-lg transition-all duration-300">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-bold text-zapyer-blue">Plano Starter</CardTitle>
              <p className="text-sm font-medium text-zapyer-gray">Para pequenas empresas</p>
              <div className="mt-4">
                <span className="text-3xl font-bold text-zapyer-dark">R$149,90</span>
                <span className="text-zapyer-gray text-sm">/mês</span>
              </div>
            </CardHeader>
            <CardContent className="flex-grow">
              <h4 className="font-semibold mb-2 text-zapyer-dark">Benefícios inclusos:</h4>
              <ul className="space-y-2">
                <PricingFeature text="Até 5 usuários" />
                <PricingFeature text="Até 1 WhatsApp" />
                <PricingFeature text="Até 4 Filas/setores" />
                <PricingFeature text="Campanhas de envio" />
                <PricingFeature text="Agendamentos de mensagens" />
                <PricingFeature text="Chat interno entre usuários" />
                <PricingFeature text="Conexão API externa" />
                <PricingFeature text="Kanban instalado" />
                <PricingFeature text="Integração ChatGPT" />
                <PricingFeature text="Integração Dialogflow" />
                <PricingFeature text="Integração N8N" />
                <PricingFeature text="Integração WebHooks" />
                <PricingFeature text="Integração Typebot" />
                <PricingFeature text="Suporte normal" />
              </ul>
            </CardContent>
            <CardFooter>
              <Button 
                onClick={() => handleWhatsAppClick('Plano Starter')}
                className="w-full primary-button"
              >
                <MessageSquare size={18} />
                Contratar Agora
              </Button>
            </CardFooter>
          </Card>

          {/* Plano Premium */}
          <Card className="pricing-card opacity-0 flex flex-col glass-card hover:shadow-lg transition-all duration-300 border-zapyer-blue shadow-md">
            <div className="bg-zapyer-blue text-white py-1 px-4 text-center text-sm font-medium rounded-t-lg">
              Mais Popular
            </div>
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-bold text-zapyer-blue">Plano Premium</CardTitle>
              <p className="text-sm font-medium text-zapyer-gray">Para negócios em crescimento</p>
              <div className="mt-4">
                <span className="text-3xl font-bold text-zapyer-dark">R$249,90</span>
                <span className="text-zapyer-gray text-sm">/mês</span>
              </div>
            </CardHeader>
            <CardContent className="flex-grow">
              <h4 className="font-semibold mb-2 text-zapyer-dark">Benefícios inclusos:</h4>
              <ul className="space-y-2">
                <PricingFeature text="Até 10 usuários" />
                <PricingFeature text="Até 2 WhatsApp" />
                <PricingFeature text="Até 10 Filas/setores" />
                <PricingFeature text="Construtor de fluxo integrado" />
                <PricingFeature text="Campanhas de envio" />
                <PricingFeature text="Agendamentos de mensagens" />
                <PricingFeature text="Chat interno entre usuários" />
                <PricingFeature text="Conexão API externa" />
                <PricingFeature text="Kanban instalado" />
                <PricingFeature text="Integração ChatGPT" />
                <PricingFeature text="Integração Dialogflow" />
                <PricingFeature text="Integração N8N" />
                <PricingFeature text="Integração WebHooks" />
                <PricingFeature text="Integração Typebot" />
                <PricingFeature text="Integração Flowbuilder" />
                <PricingFeature text="Suporte normal" />
              </ul>
            </CardContent>
            <CardFooter>
              <Button 
                onClick={() => handleWhatsAppClick('Plano Premium')}
                className="w-full primary-button"
              >
                <MessageSquare size={18} />
                Contratar Agora
              </Button>
            </CardFooter>
          </Card>

          {/* Plano Enterprise */}
          <Card className="pricing-card opacity-0 flex flex-col glass-card hover:shadow-lg transition-all duration-300">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-bold text-zapyer-green">Plano Enterprise</CardTitle>
              <p className="text-sm font-medium text-zapyer-gray">Prioridade de atendimento</p>
              <div className="mt-4">
                <span className="text-3xl font-bold text-zapyer-dark">R$349,90</span>
                <span className="text-zapyer-gray text-sm">/mês</span>
              </div>
            </CardHeader>
            <CardContent className="flex-grow">
              <h4 className="font-semibold mb-2 text-zapyer-dark">Benefícios inclusos:</h4>
              <ul className="space-y-2">
                <PricingFeature text="Até 15 usuários" />
                <PricingFeature text="Até 3 WhatsApp" />
                <PricingFeature text="Até 15 Filas/setores" />
                <PricingFeature text="Construtor de fluxo integrado" />
                <PricingFeature text="Campanhas de envio" />
                <PricingFeature text="Agendamentos de mensagens" />
                <PricingFeature text="Chat interno entre usuários" />
                <PricingFeature text="Conexão API externa" />
                <PricingFeature text="Kanban instalado" />
                <PricingFeature text="Integração ChatGPT" />
                <PricingFeature text="Integração Dialogflow" />
                <PricingFeature text="Integração N8N" />
                <PricingFeature text="Integração WebHooks" />
                <PricingFeature text="Integração Typebot" />
                <PricingFeature text="Integração Flowbuilder" />
                <PricingFeature text="Suporte com prioridade" highlight={true} />
              </ul>
            </CardContent>
            <CardFooter>
              <Button 
                onClick={() => handleWhatsAppClick('Plano Enterprise')}
                className="w-full primary-button"
              >
                <MessageSquare size={18} />
                Contratar Agora
              </Button>
            </CardFooter>
          </Card>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-16">
          <Button 
            onClick={() => handleWhatsAppClick('um plano personalizado')}
            className="primary-button text-lg px-8 py-6"
          >
            <MessageSquare size={20} />
            Fale com nossa equipe sobre um plano personalizado
          </Button>
        </div>
      </div>
    </section>
  );
};

// Helper component for pricing features
const PricingFeature: React.FC<{ text: string; highlight?: boolean }> = ({ text, highlight = false }) => (
  <li className="flex items-start">
    <Check size={18} className={`mr-2 mt-0.5 ${highlight ? 'text-zapyer-green' : 'text-zapyer-blue'}`} />
    <span className={highlight ? 'text-zapyer-dark font-medium' : 'text-zapyer-gray'}>
      {text}
    </span>
  </li>
);

export default PricingTables;
