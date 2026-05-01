import { useEffect } from 'react';
import { Users, Star, Headphones } from 'lucide-react';
import handPhone from '../../assets/images/hand-phone.png';
import { Link } from 'react-router-dom';

const CTA = () => {
  useEffect(() => {
    const style = document.createElement('style');
    style.id = 'cta-float-keyframes';
    style.innerHTML = `
      @keyframes float {
        0%, 100% { transform: translateY(0px) scale(1); }
        50% { transform: translateY(-20px) scale(1.02); }
      }
      @keyframes pulse {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.05); }
      }
    `;
    if (!document.getElementById('cta-float-keyframes')) {
      document.head.appendChild(style);
    }
    return () => {
      const el = document.getElementById('cta-float-keyframes');
      if (el) el.remove();
    };
  }, []);

  return (
    <section className="relative bg-accent pt-20 md:pt-0">

      <div className="relative container mx-auto px-6 flex flex-col lg:flex-row items-center justify-around gap-12">

        {/* Left Content */}
        <div className="flex-1 max-w-2xl text-center lg:text-left">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 text-text-primary">
            Your Notes, Your Way.
          </h2>
          <p className="text-lg md:text-xl opacity-90 mb-8 leading-relaxed text-text-primary/80 max-w-lg mx-auto lg:mx-0">
            Capture ideas instantly, organize thoughts beautifully, and access everything securely. The perfect note-taking companion for your digital life.
          </p>

          <div className="flex items-center justify-center lg:justify-start gap-2 flex-wrap">
            {/* iOS Button */}
            <Link
              href="#"
              className="inline-flex items-center gap-3 px-6 py-3.5 rounded-2xl bg-primary text-white font-semibold hover:bg-secondary transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 active:scale-95 shadow-md"
            >
              <svg className="w-7 h-7 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              <div className="text-left leading-tight">
                <div className="text-[11px] opacity-80 font-normal">Download on the</div>
                <div className="text-base font-bold">App Store</div>
              </div>
            </Link>

            {/* Android Button */}
            <Link
              href="#"
              className="inline-flex items-center gap-3 px-6 py-3.5 rounded-2xl border-2 border-primary text-black font-semibold hover:bg-primary hover:text-white transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 active:scale-95"
            >
              <svg className="w-7 h-7 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3.18 23.76c.3.17.64.18.96.04l12.45-7.17-2.68-2.68-10.73 9.81zM.54 1.52C.2 1.86 0 2.4 0 3.09v17.82c0 .69.2 1.23.54 1.57l.08.08 9.98-9.98v-.23L.62 1.44l-.08.08zM21.46 10.5l-2.67-1.54-3.01 3.01 3.01 3.01 2.68-1.55c.77-.44.77-1.49-.01-1.93zM3.18.24L15.91 7.6 13.23 10.27 2.5.46C2.18.29 1.84.3 1.52.46L.54 1.52 3.18.24z" />
              </svg>
              <div className="text-left leading-tight">
                <div className="text-[11px] opacity-70 font-normal">Get it on</div>
                <div className="text-base font-bold">Google Play</div>
              </div>
            </Link>
          </div>

          {/* Trust indicators */}
          <div className="mt-12 flex flex-col md:flex-row items-center justify-center lg:justify-start gap-8 md:gap-12">
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Users className="w-5 h-5 text-primary mr-2" />
                <div className="text-3xl font-bold text-text-primary">10K+</div>
              </div>
              <div className="text-sm text-text-primary/70">Happy Users</div>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Star className="w-5 h-5 text-primary mr-2" />
                <div className="text-3xl font-bold text-text-primary">4.8★</div>
              </div>
              <div className="text-sm text-text-primary/70">App Rating</div>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Headphones className="w-5 h-5 text-primary mr-2" />
                <div className="text-3xl font-bold text-text-primary">24/7</div>
              </div>
              <div className="text-sm text-text-primary/70">Support</div>
            </div>
          </div>
        </div>

        {/* Right Content - Phone Image */}
        <div className="flex justify-center relative w-64 md:w-80 lg:w-96" >
            <img
              src={handPhone}
              alt="Hand holding smartphone"
              className="w-full h-auto object-contain"
            />

            {/* Floating badge */}
            <div
              className="absolute -top-4 -right-4 bg-primary text-white px-4 py-2 rounded-full font-semibold text-sm shadow-lg"
              style={{
                animation: 'pulse 2s ease-in-out infinite',
              }}
            >
              Limited Time Offer
            </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
