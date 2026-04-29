import React from 'react';
import featBg2 from '../../assets/images/website-bg-feat-2.svg';
import sidePhone from '../../assets/images/side-phone.png';
import { Instagram, Twitter, Mail, MessageCircle } from 'lucide-react';

const socialIcons = [
  { Icon: MessageCircle, name: 'WhatsApp' },
  { Icon: Instagram, name: 'Instagram' },
  { Icon: Twitter, name: 'Twitter/X' },
  { Icon: Mail, name: 'Email' },
];

const ShareShowcase = () => {
  return (
    <section className="relative bg-accent lg:bg-transparent overflow-hidden py-16" id="share-showcase">
      {/* Background SVG */}
      <img
        src={featBg2}
        alt=""
        aria-hidden="true"
        className="hidden lg:block absolute inset-0 w-full h-full object-cover object-center z-0 pointer-events-none select-none"
      />

      <div className="relative z-10 container mx-auto px-8 md:px-4 py-8 lg:py-16">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          
          {/* ── LEFT: Two upright phones ── */}
          <div className="flex-1 flex items-end justify-center mb-6 lg:mb-0 lg:mt-0 min-h-[300px] lg:min-h-[580px] w-full">
            <div className="relative flex justify-center items-end">
              {/* Small phone — Back, left */}
              <img
                src={sidePhone}
                alt="Notebean app screen back"
                className="object-contain drop-shadow-xl absolute"
                style={{
                  width: 'clamp(160px, 32vw, 210px)',
                  bottom: '20px',
                  right: '50%',
                  zIndex: 0,
                }}
              />
              {/* Big phone — Front, right */}
              <img
                src={sidePhone}
                alt="Notebean app screen front"
                className="object-contain drop-shadow-2xl relative z-10"
                style={{
                  width: 'clamp(200px, 40vw, 260px)',
                }}
              />
            </div>
          </div>

          {/* ── RIGHT: Text content ── */}
          <div className="flex-1 max-w-xl">
            <h2 className="text-center lg:text-left text-4xl md:text-5xl font-extrabold text-text-primary leading-tight mb-6">
              Share Ideas, Not Just Notes
            </h2>
            <p className="text-center lg:text-left text-text-secondary mb-10 text-base md:text-lg leading-relaxed">
              From a quick grocery list to a full project plan — Notebean makes it effortless to share your thoughts with anyone, anywhere.
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-6">
              {socialIcons.map(({ Icon, name }) => (
                <div 
                  key={name} 
                  className="w-16 h-16 rounded-2xl bg-white shadow-[0_8px_30px_rgb(0,0,0,0.08)] flex items-center justify-center text-primary transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_12px_40px_rgb(0,0,0,0.12)] hover:text-secondary cursor-pointer border border-gray-50"
                  title={name}
                >
                  <Icon size={28} strokeWidth={2.5} />
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ShareShowcase;
