import featBg2 from '../../assets/images/website-bg-feat-2.svg';

import { Mail, MessageCircle } from 'lucide-react';

const InstagramIcon = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
  </svg>
);

const TwitterXIcon = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const socialIcons = [
  { Icon: MessageCircle, name: 'WhatsApp' },
  { Icon: InstagramIcon, name: 'Instagram' },
  { Icon: TwitterXIcon, name: 'Twitter/X' },
  { Icon: Mail, name: 'Email' },
];

const ShareShowcase = () => {
  return (
    <section className="relative bg-white overflow-hidden" id="share-showcase">

      <div className="container mx-auto px-6 md:px-4 py-8 lg:py-16 flex flex-col lg:flex-row items-center justify-around gap-8">

          {/* ── LEFT: Decorative SVG image ── */}
          <div className="flex items-center">
            <img
              src={featBg2}
              alt="Share illustration"
              className="w-full max-w-sm lg:max-w-md object-contain select-none"
            />
          </div>

          {/* ── RIGHT: Text content ── */}
          <div className="max-w-xl">
            <h2 className="text-center lg:text-left text-4xl md:text-5xl font-extrabold text-text-primary leading-tight mb-6">
              Share Ideas, Not Just Notes
            </h2>
            <p className="text-center lg:text-left text-text-secondary mb-10 text-base md:text-lg leading-relaxed">
              From a quick grocery list to a full project plan — Notebean makes it effortless to share your thoughts with anyone, anywhere.
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4 md:gap-6">
              {socialIcons.map(({ Icon, name }) => (
                <div
                  key={name}
                  className="w-16 h-16 rounded-2xl bg-accent flex items-center justify-center text-white transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_12px_40px_rgb(0,0,0,0.12)] hover:text-secondary cursor-pointer border border-gray-50"
                  title={name}
                >
                  <Icon size={28} strokeWidth={2.5} />
                </div>
              ))}
            </div>
          </div>
      </div>
    </section>
  );
};

export default ShareShowcase;
