
import React from 'react';
import { X, MessageSquare } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const handleWhatsAppClick = () => {
    const message = "Olá, quero saber mais sobre o Zapyer Chat!";
    const encodedMessage = encodeURIComponent(message);
    window.open(`http://wa.me/5587996316081?text=${encodedMessage}`, '_blank');
    onClose();
  };

  return (
    <div className={`mobile-menu ${isOpen ? 'open' : 'closed'}`}>
      <div className="p-4 flex justify-between items-center border-b">
        <img 
          src="/lovable-uploads/b78caee9-300c-4e95-8069-0de56aa843a1.png" 
          alt="Zapyer Chat Logo" 
          className="h-8"
        />
        <button 
          onClick={onClose} 
          className="text-zapyer-dark hover:text-zapyer-blue"
          aria-label="Close menu"
        >
          <X size={24} />
        </button>
      </div>
      <nav className="py-4">
        <a href="#home" className="mobile-menu-item" onClick={onClose}>Home</a>
        <a href="#services" className="mobile-menu-item" onClick={onClose}>Benefícios</a>
        <a href="#about" className="mobile-menu-item" onClick={onClose}>Sobre</a>
        <a href="#features" className="mobile-menu-item" onClick={onClose}>Funcionalidades</a>
        <a href="#pricing" className="mobile-menu-item" onClick={onClose}>Planos</a>
        <a href="#testimonials" className="mobile-menu-item" onClick={onClose}>Depoimentos</a>
        <a href="#contact" className="mobile-menu-item" onClick={onClose}>Contato</a>
        <div className="px-6 py-4">
          <button 
            onClick={handleWhatsAppClick}
            className="xapo-button w-full"
          >
            <MessageSquare size={18} className="mr-2" />
            Fale Conosco
          </button>
        </div>
      </nav>
    </div>
  );
};

export default MobileMenu;
