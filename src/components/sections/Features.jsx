import { useRef, useEffect, useState } from 'react';
import { 
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import {features} from '../../constant'


const Features = () => {
  const scrollRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        const totalScroll = scrollWidth - clientWidth;
        const currentProgress = (scrollLeft / totalScroll) * 100;
        setProgress(currentProgress);
      }
    };

    const scrollEl = scrollRef.current;
    if (scrollEl) {
      scrollEl.addEventListener('scroll', handleScroll);
    }

    // Auto-scroll logic
    const autoScrollInterval = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          // Reset to start
          scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          scrollRef.current.scrollBy({ left: clientWidth / 3, behavior: 'smooth' });
        }
      }
    }, 1000);

    const style = document.createElement('style');
    style.id = 'features-scrollbar-hide';
    style.innerHTML = `
      .no-scrollbar::-webkit-scrollbar {
        display: none;
      }
      .no-scrollbar {
        -ms-overflow-style: none;
        scrollbar-width: none;
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      if (scrollEl) {
        scrollEl.removeEventListener('scroll', handleScroll);
      }
      clearInterval(autoScrollInterval);
      const el = document.getElementById('features-scrollbar-hide');
      if (el) el.remove();
    };
  }, []);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth, scrollWidth } = scrollRef.current;
      
      if (direction === 'right' && scrollLeft + clientWidth >= scrollWidth - 10) {
        scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
      } else if (direction === 'left' && scrollLeft <= 10) {
        scrollRef.current.scrollTo({ left: scrollWidth, behavior: 'smooth' });
      } else {
        const scrollTo = direction === 'left' 
          ? scrollLeft - clientWidth / 3 
          : scrollLeft + clientWidth / 3;
        scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
      }
    }
  };

  return (
    <section className="relative py-24 bg-white overflow-hidden" id="features">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
            Why People Love Notebean?
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Following reasons show advantages of adding Notebean to your daily life.
            Demos and checkouts are just a few clicks away.
          </p>
        </div>

        <div className="relative group">
          {/* Scroll Buttons */}
          <button 
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 p-3 rounded-full bg-white shadow-xl text-primary hover:bg-primary hover:text-white transition-all duration-300 opacity-0 group-hover:opacity-100 hidden md:block"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 p-3 rounded-full bg-white shadow-xl text-primary hover:bg-primary hover:text-white transition-all duration-300 opacity-0 group-hover:opacity-100 hidden md:block"
          >
            <ChevronRight size={24} />
          </button>

          {/* Features Scroll Container */}
          <div 
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto pb-12 snap-x snap-mandatory no-scrollbar"
          >
            {features.map((feature, index) => (
              <div 
                key={index}
                className="min-w-full md:min-w-[calc(33.333%-1rem)] snap-center"
              >
                <div className="bg-accent/10 rounded-[2.5rem] p-12 h-full shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_50px_rgba(196,179,169,0.15)] transition-all duration-700 group/card flex flex-col items-center text-center hover:-translate-y-2">
                  <div className="relative mb-10 inline-block">
                    {/* Doodle Background - Layered for depth */}
                    <div 
                      className="absolute inset-0 scale-[1.8] opacity-60 transition-all duration-1000 group-hover/card:rotate-90 group-hover/card:scale-[2.1]" 
                      style={{ 
                        backgroundColor: 'rgba(120, 119, 117, 0.15)',
                        borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
                        filter: 'blur(1px)'
                      }}
                    ></div>
                    <div 
                      className="absolute inset-0 scale-[1.5] opacity-40 transition-all duration-1000 group-hover/card:-rotate-90 group-hover/card:scale-[1.8]" 
                      style={{ 
                        backgroundColor: 'rgba(120, 119, 117, 0.1)',
                        borderRadius: '70% 30% 30% 70% / 70% 70% 30% 30%',
                        filter: 'blur(1px)'
                      }}
                    ></div>
                    
                    {/* Icon */}
                    <div className={`relative z-10 p-2 rounded-[1.2rem] bg-white shadow-sm ${feature.iconColor}`}>
                      <feature.Icon size={35} strokeWidth={1.5} />
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-text-primary mb-4 tracking-tight">
                    {feature.title}
                  </h3>
                  <p className="text-text-secondary leading-relaxed text-base opacity-80">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Progress Indicator */}
        <div className="flex justify-center mt-8">
          <div className="h-1.5 w-48 bg-primary/10 rounded-full overflow-hidden">
            <div 
              className="h-full bg-primary transition-all duration-300 ease-out"
              style={{ width: `${Math.max(5, progress)}%` }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
