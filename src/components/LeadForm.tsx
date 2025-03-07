
import React, { useState } from 'react';
import { X, Send, Loader2 } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

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
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsOpen(false);
      toast({
        title: "Formulário enviado com sucesso!",
        description: "Em breve nossa equipe entrará em contato.",
      });
      setFormData({ name: '', email: '', phone: '' });
    }, 1500);
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
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-zapyer-dark mb-1">
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-zapyer-blue"
                  placeholder="Seu nome"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-zapyer-dark mb-1">
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-zapyer-blue"
                  placeholder="seu@email.com"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-zapyer-dark mb-1">
                  Telefone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-zapyer-blue"
                  placeholder="(00) 00000-0000"
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full primary-button"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={20} className="animate-spin" />
                    <span>Enviando...</span>
                  </>
                ) : (
                  <span>Enviar</span>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default LeadForm;
