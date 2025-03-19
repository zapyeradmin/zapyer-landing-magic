
import React, { useState } from 'react';
import { MessageSquare, Menu } from 'lucide-react';

interface HeaderProps {
  toggleMobileMenu: () => void;
}

const Header: React.FC<HeaderProps> = ({ toggleMobileMenu }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  
  const handleWhatsAppClick = () => {
    const message = "Olá, quero saber mais sobre o Zapyer Chat!";
    const encodedMessage = encodeURIComponent(message);
    window.open(`http://wa.me/5587996316081?text=${encodedMessage}`, '_blank');
  };

  // Add scroll event listener to detect when to change header style
  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 shadow-md py-2' : 'py-4'}`}>
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/b78caee9-300c-4e95-8069-0de56aa843a1.png" 
              alt="Zapyer Chat Logo" 
              className="h-10 md:h-12"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-zapyer-dark hover:text-zapyer-blue transition-colors">Home</a>
            <a href="#services" className="text-zapyer-dark hover:text-zapyer-blue transition-colors">Benefícios</a>
            <a href="#about" className="text-zapyer-dark hover:text-zapyer-blue transition-colors">Sobre</a>
            <a href="#features" className="text-zapyer-dark hover:text-zapyer-blue transition-colors">Funcionalidades</a>
            <a href="#pricing" className="text-zapyer-dark hover:text-zapyer-blue transition-colors">Planos</a>
            <a href="#testimonials" className="text-zapyer-dark hover:text-zapyer-blue transition-colors">Depoimentos</a>
            <a href="#contact" className="text-zapyer-dark hover:text-zapyer-blue transition-colors">Contato</a>
            <button 
              onClick={handleWhatsAppClick}
              className="xapo-button"
            >
              <MessageSquare size={18} className="mr-2" />
              Fale Conosco
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMobileMenu} 
            className="md:hidden text-zapyer-blue"
            aria-label="Menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
