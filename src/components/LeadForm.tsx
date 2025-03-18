
import React, { useState } from 'react';
import { X, Send, Loader2 } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';

const LeadForm: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Prepare WhatsApp message with user data
    const message = `Olá, me chamo ${formData.name}! 
Email: ${formData.email}
Telefone: ${formData.phone}

Gostaria de saber mais sobre o Zapyer Chat!`;
    
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/5587996316081?text=${encodedMessage}`;
    
    // Simulate a brief loading state before redirecting
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Redirecionando para o WhatsApp",
        description: "Você será conectado com nossa equipe agora.",
      });
      
      // Reset form data
      setFormData({ name: '', email: '', phone: '' });
      setIsOpen(false);
      
      // Open WhatsApp in a new tab
      window.open(whatsappURL, '_blank');
    }, 1000);
  };

  const toggleForm = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Floating Form Button */}
      <button
        onClick={toggleForm}
        className="fixed bottom-6 right-6 z-50 bg-zapyer-blue text-white rounded-full p-4 shadow-lg hover:bg-zapyer-blue/90 transition-all duration-300 hover:scale-105"
        aria-label="Abrir formulário de contato"
      >
        {isOpen ? <X size={24} /> : <Send size={24} />}
      </button>

      {/* Lead Form */}
      <div 
        className={`fixed bottom-20 right-6 z-50 transition-all duration-500 transform ${
          isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
        }`}
      >
        <div className="glass-card p-6 rounded-xl shadow-xl w-80">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold text-zapyer-dark">Fale Conosco</h3>
            <button 
              onClick={toggleForm}
              className="text-zapyer-gray hover:text-zapyer-dark transition-colors"
            >
              <X size={20} />
            </button>
          </div>
          
          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div className="space-y-1.5">
                <Label htmlFor="name">
                  Nome
                </Label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Seu nome"
                />
              </div>
              
              <div className="space-y-1.5">
                <Label htmlFor="email">
                  E-mail
                </Label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="seu@email.com"
                />
              </div>
              
              <div className="space-y-1.5">
                <Label htmlFor="phone">
                  Telefone
                </Label>
                <Input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="(00) 00000-0000"
                />
              </div>
              
              <Button
                type="submit"
                className="w-full primary-button"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={20} className="animate-spin" />
                    <span>Enviando...</span>
                  </>
                ) : (
                  <span>Enviar</span>
                )}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default LeadForm;
