
import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonialsRef = useRef<HTMLDivElement>(null);
  
  const testimonials = [
    {
      id: 1,
      name: 'Ana Souza',
      role: 'CEO, TechSales',
      image: "https://placehold.co/100x100/1E5EFA/FFFFFF.png?text=AS",
      content: 'O Zapyer Chat revolucionou nosso atendimento e dobrou nossas vendas! A integração foi simples e os resultados, imediatos.',
      stars: 5
    },
    {
      id: 2,
      name: 'João Lima',
      role: 'Gerente de Operações, CloudServ',
      image: "https://placehold.co/100x100/10B981/FFFFFF.png?text=JL",
      content: 'A IA e os relatórios nos ajudaram a ter mais controle e eficiência. Nossa equipe consegue atender o triplo de clientes com muito mais qualidade.',
      stars: 5
    },
    {
      id: 3,
      name: 'Mariana Costa',
      role: 'Diretora de Marketing, Innova',
      image: "https://placehold.co/100x100/0F172A/FFFFFF.png?text=MC",
      content: 'Fácil de usar e perfeito para nossa equipe! Os setores personalizados organizaram completamente nosso fluxo de trabalho.',
      stars: 5
    }
  ];
  
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };
  
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };
  
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    
    if (testimonialsRef.current) {
      observer.observe(testimonialsRef.current);
    }
    
    return () => {
      if (testimonialsRef.current) {
        observer.unobserve(testimonialsRef.current);
      }
    };
  }, []);

  return (
    <section id="testimonials" className="gp notp">
      <div className="container mx-auto px-6">
        <div 
          ref={testimonialsRef} 
          className="max-w-4xl mx-auto opacity-0"
        >
          <div className="relative p-8 md:p-12 bg-white rounded-xl shadow-lg">
            <div className="mb-8 text-center">
              <h2 className="text-3xl font-bold mb-2">O que nossos clientes dizem</h2>
              <p className="text-zapyer-gray">
                Empresas de todos os tamanhos já transformaram seu atendimento com o Zapyer Chat
              </p>
            </div>
            
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <div className="flex flex-col items-center text-center">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="w-16 h-16 rounded-full mb-4"
                    />
                    <div className="flex mb-2">
                      {[...Array(testimonial.stars)].map((_, i) => (
                        <Star key={i} size={16} fill="#FFD700" className="text-[#FFD700]" />
                      ))}
                    </div>
                    <p className="text-zapyer-dark italic mb-4">"{testimonial.content}"</p>
                    <h3 className="font-bold text-lg text-zapyer-dark">{testimonial.name}</h3>
                    <p className="text-zapyer-blue text-sm">{testimonial.role}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="absolute inset-y-0 left-0 flex items-center">
              <button 
                onClick={prevSlide}
                className="p-2 rounded-full bg-white shadow-md text-zapyer-blue hover:bg-zapyer-blue hover:text-white transition-colors -ml-4"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={24} />
              </button>
            </div>
            
            <div className="absolute inset-y-0 right-0 flex items-center">
              <button 
                onClick={nextSlide}
                className="p-2 rounded-full bg-white shadow-md text-zapyer-blue hover:bg-zapyer-blue hover:text-white transition-colors -mr-4"
                aria-label="Next testimonial"
              >
                <ChevronRight size={24} />
              </button>
            </div>
            
            <div className="flex justify-center mt-6 gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-zapyer-blue' : 'bg-zapyer-blue/30'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
