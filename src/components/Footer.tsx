
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
    <footer className="bg-zapyer-dark text-white py-8 sm:py-12 px-4 sm:px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {/* Logo and description */}
          <div className="flex flex-col items-center sm:items-start">
            <div className="mb-3 sm:mb-4">
              <img 
                src="/lovable-uploads/b78caee9-300c-4e95-8069-0de56aa843a1.png" 
                alt="Zapyer Chat Logo" 
                className="h-10 sm:h-12 mb-3"
              />
            </div>
            <p className="text-gray-300 text-sm sm:text-base text-center sm:text-left mb-4 max-w-xs">
              Transforme seu atendimento no WhatsApp com nossa solução completa de multiatendimento.
            </p>
          </div>
          
          {/* Resources */}
          <div className="flex flex-col items-center sm:items-start">
            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-center sm:text-left">Recursos</h3>
            <ul className="space-y-2 text-center sm:text-left">
              <li><a href="#benefits" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base">Benefícios</a></li>
              <li><a href="#features" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base">Funcionalidades</a></li>
              <li><a href="#testimonials" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base">Depoimentos</a></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div className="flex flex-col items-center sm:items-start">
            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-center sm:text-left">Contato</h3>
            <div className="space-y-3 flex flex-col items-center sm:items-start">
              <button 
                onClick={handleWhatsAppClick}
                className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors text-sm sm:text-base"
              >
                <MessageSquare size={isMobile ? 16 : 18} />
                <span>WhatsApp</span>
              </button>
              <a 
                href="https://www.instagram.com/zapyer.io/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors text-sm sm:text-base"
              >
                <Instagram size={isMobile ? 16 : 18} />
                <span>Instagram</span>
              </a>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-700/50 mt-8 sm:mt-10 pt-5 text-center text-gray-400 text-xs sm:text-sm">
          <p>© 2025 Zapyer Chat - Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
