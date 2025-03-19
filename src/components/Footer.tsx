
import React from 'react';
import { MessageSquare, Instagram } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const Footer: React.FC = () => {
  const isMobile = useIsMobile();
  
  const handleWhatsAppClick = () => {
    const message = "Olá, quero saber mais sobre o Zapyer Chat!";
    const encodedMessage = encodeURIComponent(message);
    window.open(`http://wa.me/5587996316081?text=${encodedMessage}`, '_blank');
  };

  return (
    <footer className="gp tp315 bg-zapyer-dark text-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">
            <span className="text-zapyer-blue">Zapyer</span>
            <span className="text-zapyer-green">Chat</span>
          </h1>
          <p className="text-gray-300 mb-8">
            Centralize a comunicação, aumente a eficiência e impulsione suas vendas. 
            Nossa solução foi desenvolvida para transformar a maneira como sua empresa 
            utiliza o WhatsApp.
          </p>
          <p className="text-gray-400 text-sm mb-6">
            © 2025 Zapyer Chat - Todos os direitos reservados.
          </p>
          
          <div className="flex justify-center space-x-4">
            <a 
              href="#"
              onClick={handleWhatsAppClick}
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-zapyer-blue transition-colors"
              aria-label="WhatsApp"
            >
              <MessageSquare size={20} />
            </a>
            <a 
              href="https://www.instagram.com/zapyer.io/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-zapyer-blue transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
