
import React, { useState } from 'react';
import { MessageSquare, Loader2 } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

const ContactSection: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
Assunto: ${formData.subject}

Mensagem: ${formData.message}`;
    
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
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      
      // Open WhatsApp in a new tab
      window.open(whatsappURL, '_blank');
    }, 1000);
  };

  return (
    <section id="contact" className="gp nogp">
      <div className="w-full h-[400px] bg-zapyer-light">
        {/* Map would go here in a real implementation */}
        <div className="w-full h-full flex items-center justify-center bg-gray-200">
          <MessageSquare size={48} className="text-zapyer-blue/30" />
        </div>
      </div>
      
      <div className="container mx-auto px-6 -mt-40 relative z-10">
        <div className="bg-white rounded-xl shadow-xl p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-6 text-zapyer-dark">ENTRE EM CONTATO</h3>
              <div className="space-y-4 text-zapyer-gray">
                <p><span className="text-zapyer-blue font-medium">Email:</span> contato@zapyer.io</p>
                <p><span className="text-zapyer-blue font-medium">WhatsApp:</span> +55 87 99631-6081</p>
                <p><span className="text-zapyer-blue font-medium">Atendimento:</span> Seg a Sex - 9h às 18h</p>
                <p><span className="text-zapyer-blue font-medium">Suporte:</span> Todos os dias - 8h às 22h</p>
                <p className="pt-4">Centralizando atendimentos e potencializando negócios em todo o Brasil</p>
              </div>
            </div>
            
            <div className="md:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <input 
                    type="text" 
                    name="name" 
                    placeholder="Nome Completo *" 
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-zapyer-blue/50"
                  />
                  <input 
                    type="email" 
                    name="email" 
                    placeholder="Email *" 
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-zapyer-blue/50"
                  />
                  <input 
                    type="tel" 
                    name="phone" 
                    placeholder="Telefone *" 
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-zapyer-blue/50"
                  />
                </div>
                
                <div>
                  <input 
                    type="text" 
                    name="subject" 
                    placeholder="Assunto *" 
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-zapyer-blue/50"
                  />
                </div>
                
                <div>
                  <textarea 
                    name="message" 
                    placeholder="Sua Mensagem *" 
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 rounded-3xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-zapyer-blue/50"
                  ></textarea>
                </div>
                
                <div className="text-center">
                  <button
                    type="submit"
                    className="xapo-button px-8 py-3"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 size={20} className="animate-spin mr-2" />
                        <span>ENVIANDO...</span>
                      </>
                    ) : (
                      <span>ENVIAR MENSAGEM</span>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
