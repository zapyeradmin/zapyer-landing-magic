
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
    <section id="testimonials" className="py-20 px-6 bg-zapyer-light relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-zapyer-blue/5 to-zapyer-green/5 z-0"></div>
      <div className="container mx-auto relative z-10">
        <h2 className="section-title">O que nossos clientes dizem</h2>
        <p className="section-subtitle">
          Empresas de todos os tamanhos já transformaram seu atendimento com o Zapyer Chat
        </p>
        
        <div 
          ref={testimonialsRef} 
          className="relative max-w-4xl mx-auto mt-12 opacity-0"
        >
          {/* Testimonial Carousel */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <div className="glass-card p-8 rounded-xl shadow-lg">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 rounded-full overflow-hidden">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg text-zapyer-dark">{testimonial.name}</h3>
                        <p className="text-zapyer-gray text-sm">{testimonial.role}</p>
                        <div className="flex mt-1">
                          {[...Array(testimonial.stars)].map((_, i) => (
                            <Star key={i} size={16} fill="#FFD700" className="text-[#FFD700]" />
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-zapyer-dark italic">"{testimonial.content}"</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation Buttons */}
          <div className="flex justify-center mt-6 gap-4">
            <button 
              onClick={prevSlide}
              className="p-2 rounded-full bg-white shadow-md text-zapyer-blue hover:bg-zapyer-blue hover:text-white transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>
            <div className="flex gap-2">
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
            <button 
              onClick={nextSlide}
              className="p-2 rounded-full bg-white shadow-md text-zapyer-blue hover:bg-zapyer-blue hover:text-white transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
