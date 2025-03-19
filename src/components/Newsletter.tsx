
import React, { useState } from 'react';
import { MessageSquare } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Erro",
        description: "Por favor, insira seu email.",
        variant: "destructive"
      });
      return;
    }
    
    // In a real application, you would send this to your backend
    toast({
      title: "Sucesso!",
      description: "Você foi inscrito na nossa newsletter.",
    });
    
    // Reset form
    setEmail('');
    
    // Redirect to WhatsApp with email
    const message = `Olá! Eu me inscrevi na newsletter com o email: ${email}. Gostaria de saber mais sobre o Zapyer Chat!`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`http://wa.me/5587996316081?text=${encodedMessage}`, '_blank');
  };

  return (
    <section className="gp thm-lyr opc6">
      <div className="parlx" style={{backgroundImage: "url('/lovable-uploads/dc3f7530-ae9f-4754-bb0e-a13b9ac3c974.png')"}}></div>
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-md rounded-xl p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12 mb-8">
            <div className="w-16 h-16 bg-zapyer-blue/20 rounded-full flex items-center justify-center shrink-0">
              <MessageSquare size={30} className="text-zapyer-blue" />
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Inscreva-se em Nossa Newsletter</h3>
              <p className="text-white/80">Receba as últimas novidades e atualizações do Zapyer Chat</p>
            </div>
          </div>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Insira seu email..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-6 py-3 rounded-full bg-white/20 backdrop-blur-sm text-white placeholder:text-white/60 border border-white/30 focus:outline-none focus:ring-2 focus:ring-zapyer-blue/50"
            />
            <button
              type="submit"
              className="px-6 py-3 rounded-full bg-zapyer-blue text-white font-medium hover:bg-zapyer-blue/90 transition-colors flex items-center justify-center"
            >
              Inscrever-se
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
