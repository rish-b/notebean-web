import { NotebookPen, FolderOpen, Bell, Wifi } from 'lucide-react';
import featBg from '../../assets/images/website-bg-feat.svg';
import sidePhone from '../../assets/images/side-phone.png';

const highlights = [
  {
    Icon: NotebookPen,
    title: 'Write, Sketch & Create',
    description: 'Capture every thought with rich text notes, hand-drawn sketches, and custom stickers — all in one beautiful workspace.',
  },
  {
    Icon: FolderOpen,
    title: 'Organize Effortlessly',
    description: 'Search, sort, tag, and categorize your notes into smart collections so you always find what you need instantly.',
  },
  {
    Icon: Bell,
    title: 'Smart Reminders & Widgets',
    description: 'Never forget an idea. Set reminders directly on your notes and access them from handy home-screen widgets.',
  },
  {
    Icon: Wifi,
    title: 'Works Offline, Syncs Everywhere',
    description: 'Your notes are always available — even without internet. Auto-sync keeps every device perfectly up to date.',
  },
];

const AppShowcase = () => {
  return (
    <section className="relative" id="app-showcase">
      {/* Background SVG */}
      <img
        src={featBg}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover object-bottom z-0 pointer-events-none select-none"
      />

      <div className="relative z-10 container mx-auto py-24 lg:py-32">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-8">

          {/* ── LEFT: Text content ── */}
          <div className="flex-1 max-w-xl">
            <h2 className="text-4xl md:text-5xl font-extrabold text-text-primary leading-tight mb-6">
              Use Notebean on{' '}
              <span className="text-primary">Android or iOS</span>{' '}
              to Manage Everything
            </h2>
            <p className="text-text-secondary mb-10 text-base leading-relaxed">
              Whether you are on your phone commuting, at your desk, or offline — 
              Notebean keeps your thoughts organised and beautiful across every device.
            </p>

            <ul className="space-y-7">
              {highlights.map(({ Icon, title, description }) => (
                <li key={title} className="flex items-start gap-5">
                  {/* Icon bubble */}
                  <div className="shrink-0 w-12 h-12 rounded-2xl bg-white shadow-md flex items-center justify-center text-primary">
                    <Icon size={22} strokeWidth={1.8} />
                  </div>
                  <div>
                    <p className="font-bold text-text-primary mb-0.5">{title}</p>
                    <p className="text-text-secondary text-sm leading-relaxed">{description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* ── RIGHT: Two upright phones, side by side, back larger ── */}
          <div className="flex-1 relative flex items-end justify-end min-h-[450px] lg:min-h-[580px]">
            {/* Back phone — larger, behind */}
            <img
              src={sidePhone}
              alt="Notebean app screen"
              className="absolute object-contain drop-shadow-2xl"
              style={{
                width: '280px',
                right: '6%',
                bottom: '0',
                zIndex: 1,
              }}
            />
            {/* Front phone — smaller, in front */}
            <img
              src={sidePhone}
              alt="Notebean app screen"
              className="absolute object-contain drop-shadow-2xl"
              style={{
                width: '230px',
                right: '20%',
                top: '1%',
                zIndex: 2,
              }}
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default AppShowcase;
