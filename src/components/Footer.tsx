
import React from 'react';
import { MessageSquare, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  const handleWhatsAppClick = () => {
    const message = "Olá, quero saber mais sobre o Zapyer Chat!";
    const encodedMessage = encodeURIComponent(message);
    window.open(`http://wa.me/5587996316081?text=${encodedMessage}`, '_blank');
  };

  return (
    <footer className="bg-zapyer-dark text-white py-12 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <div className="mb-4">
              <img 
                src="/lovable-uploads/b78caee9-300c-4e95-8069-0de56aa843a1.png" 
                alt="Zapyer Chat Logo" 
                className="h-12 mb-4"
              />
            </div>
            <p className="text-gray-300 mb-4">
              Transforme seu atendimento no WhatsApp com nossa solução completa de multiatendimento.
            </p>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="text-xl font-bold mb-4">Recursos</h3>
            <ul className="space-y-2">
              <li><a href="#benefits" className="text-gray-300 hover:text-white transition-colors">Benefícios</a></li>
              <li><a href="#features" className="text-gray-300 hover:text-white transition-colors">Funcionalidades</a></li>
              <li><a href="#testimonials" className="text-gray-300 hover:text-white transition-colors">Depoimentos</a></li>
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="text-xl font-bold mb-4">Contato</h3>
            <div className="space-y-4">
              <button 
                onClick={handleWhatsAppClick}
                className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
              >
                <MessageSquare size={18} />
                <span>WhatsApp</span>
              </button>
              <a 
                href="https://www.instagram.com/zapyer.io/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
              >
                <Instagram size={18} />
                <span>Instagram</span>
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-6 text-center text-gray-400">
          <p>© 2025 Zapyer Chat - Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
