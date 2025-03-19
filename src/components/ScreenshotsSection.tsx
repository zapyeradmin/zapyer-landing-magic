
import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ScreenshotsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const screenshots = [
    "/lovable-uploads/dc3f7530-ae9f-4754-bb0e-a13b9ac3c974.png",
    "/lovable-uploads/dc3f7530-ae9f-4754-bb0e-a13b9ac3c974.png",
    "/lovable-uploads/dc3f7530-ae9f-4754-bb0e-a13b9ac3c974.png",
    "/lovable-uploads/dc3f7530-ae9f-4754-bb0e-a13b9ac3c974.png"
  ];
  
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === screenshots.length - 1 ? 0 : prevIndex + 1));
  };
  
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? screenshots.length - 1 : prevIndex - 1));
  };
  
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
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section className="gp tp320">
      <div className="skw-shp-tp rgt"></div>
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Interface Intuitiva</h2>
          <p className="text-zapyer-gray max-w-2xl mx-auto">
            Conheça a interface do Zapyer Chat - projetada para facilitar o gerenciamento de atendimentos
          </p>
          <div className="w-16 h-1 bg-zapyer-blue mx-auto mt-6"></div>
        </div>
        
        <div 
          ref={sectionRef} 
          className="relative max-w-4xl mx-auto opacity-0"
          style={{
            backgroundImage: "url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100\" height=\"100\" viewBox=\"0 0 100 100\"><rect width=\"100\" height=\"100\" rx=\"5\" ry=\"5\" fill=\"%23f5f5f5\" /></svg>')",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "contain",
            padding: "20px"
          }}
        >
          <div className="p-4 overflow-hidden rounded-xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {screenshots.map((screenshot, index) => (
                <div key={index} className="w-full flex-shrink-0 px-2">
                  <img 
                    src={screenshot} 
                    alt={`Zapyer Chat Screenshot ${index + 1}`} 
                    className="w-full h-auto rounded-lg shadow-lg"
                  />
                </div>
              ))}
            </div>
          </div>
          
          <div className="absolute inset-y-0 left-0 flex items-center">
            <button 
              onClick={prevSlide}
              className="p-2 rounded-full bg-white shadow-md text-zapyer-blue hover:bg-zapyer-blue hover:text-white transition-colors -ml-4"
              aria-label="Previous screenshot"
            >
              <ChevronLeft size={24} />
            </button>
          </div>
          
          <div className="absolute inset-y-0 right-0 flex items-center">
            <button 
              onClick={nextSlide}
              className="p-2 rounded-full bg-white shadow-md text-zapyer-blue hover:bg-zapyer-blue hover:text-white transition-colors -mr-4"
              aria-label="Next screenshot"
            >
              <ChevronRight size={24} />
            </button>
          </div>
          
          <div className="flex justify-center mt-6 gap-2">
            {screenshots.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-zapyer-blue' : 'bg-zapyer-blue/30'
                }`}
                aria-label={`Go to screenshot ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScreenshotsSection;
