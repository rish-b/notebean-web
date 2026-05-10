import { Link } from 'react-router-dom';
import featBg2 from '../../assets/images/shareShowCaseImg.png';

import { Mail } from 'lucide-react';

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

const YoutubeIcon = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

const socialIcons = [
  { Icon: Mail, name: 'Email', to: 'mailto:info@organimind.com' },
  { Icon: InstagramIcon, name: 'Instagram', to: 'https://www.instagram.com/organimind/' },
  { Icon: TwitterXIcon, name: 'Twitter/X', to: 'https://x.com/OrganiMind' },
  { Icon: YoutubeIcon, name: 'YouTube', to: 'https://www.youtube.com/@OrganizeMind' },
];

const ShareShowcase = () => {
  return (
    <section className="relative bg-white overflow-hidden py-12 md:py-0" id="share-showcase">

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
            {socialIcons.map(({ Icon, name, to }) => (
              <Link
                to={to}
                target="_blank"
                key={name}
                className="w-16 h-16 rounded-2xl bg-accent flex items-center justify-center text-white transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_12px_40px_rgb(0,0,0,0.12)] hover:text-secondary cursor-pointer border border-gray-50"
                title={name}
              >
                <Icon size={28} strokeWidth={2.5} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShareShowcase;
