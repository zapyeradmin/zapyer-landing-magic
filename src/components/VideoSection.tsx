
import React, { useEffect, useRef, useState } from 'react';
import { Play } from 'lucide-react';

const VideoSection: React.FC = () => {
  const videoSectionRef = useRef<HTMLDivElement>(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  
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
    
    if (videoSectionRef.current) {
      observer.observe(videoSectionRef.current);
    }
    
    return () => {
      if (videoSectionRef.current) {
        observer.unobserve(videoSectionRef.current);
      }
    };
  }, []);

  const handlePlayVideo = () => {
    setIsVideoPlaying(true);
  };

  return (
    <section className="py-20 px-6 bg-zapyer-light relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-zapyer-blue/5 to-zapyer-green/5 z-0"></div>
      <div className="container mx-auto relative z-10">
        <h2 className="section-title">Veja o Zapyer Chat em Ação</h2>
        <p className="section-subtitle">
          Descubra como nossa plataforma simplifica e potencializa o atendimento no WhatsApp para sua empresa
        </p>
        
        <div 
          ref={videoSectionRef} 
          className="max-w-4xl mx-auto mt-12 glass-card p-3 rounded-xl shadow-xl overflow-hidden opacity-0"
        >
          <div className="relative aspect-video bg-zapyer-dark/5 rounded-lg overflow-hidden">
            {isVideoPlaying ? (
              <iframe 
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/fhiTtNx-sLU?autoplay=1" 
                title="Zapyer Chat Apresentação"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            ) : (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-full h-full">
                  {/* YouTube thumbnail with higher quality (maxresdefault) */}
                  <img 
                    src="https://img.youtube.com/vi/fhiTtNx-sLU/maxresdefault.jpg" 
                    alt="Zapyer Chat Video Preview" 
                    className="w-full h-full object-cover"
                  />
                  <button 
                    onClick={handlePlayVideo}
                    className="absolute inset-0 m-auto w-20 h-20 bg-zapyer-blue text-white rounded-full flex items-center justify-center animate-pulse-soft transition-transform hover:scale-110"
                    aria-label="Play video"
                  >
                    <Play size={32} fill="white" className="ml-1" />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
        
        <div className="flex justify-center mt-10">
          <button className="primary-button">
            Teste Grátis Agora
          </button>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
