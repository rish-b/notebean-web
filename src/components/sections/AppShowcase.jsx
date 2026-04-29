import featBg from '../../assets/images/website-bg-feat.svg';
import sidePhone from '../../assets/images/side-phone.png';
import { highlights } from '../../constant';


const AppShowcase = () => {
  return (
    <section className="relative bg-accent lg:bg-transparent overflow-hidden" id="app-showcase">
      {/* Background SVG */}
      <img
        src={featBg}
        alt=""
        aria-hidden="true"
        className="hidden md:block absolute inset-0 w-full h-full object-cover object-top z-0 pointer-events-none select-none"
      />

      <div className="relative z-10 container mx-auto px-8 md:px-4 py-8 lg:py-16">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-8">
          {/* ── LEFT: Text content ── */}
          <div className="flex-1 max-w-xl lg:mt-16">
            <h2 className="text-center lg:text-left text-4xl md:text-5xl font-extrabold text-text-primary leading-tight mb-6">
              Use Notebean on{' '}
              <span className="text-primary">Android or iOS</span>{' '}
              to Manage Everything
            </h2>
            <p className="text-center lg:text-left text-text-secondary mb-10 text-base leading-relaxed">
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

          {/* ── RIGHT: Two upright phones ── */}
          <div className="flex-1 flex items-end justify-center mb-6 lg:mb-0 lg:mt-0 min-h-[300px] lg:min-h-[580px]">
            <div className="relative">
              {/* Big phone — base element */}
              <img
                src={sidePhone}
                alt="Notebean app screen"
                className="object-contain drop-shadow-2xl relative"
                style={{
                  width: 'clamp(200px, 40vw, 230px)',
                  zIndex: 1,
                }}
              />
              {/* Small phone — absolutely placed, right edge at big phone's center, bottom slightly lower */}
              <img
                src={sidePhone}
                alt="Notebean app screen"
                className="object-contain drop-shadow-2xl absolute"
                style={{
                  width: 'clamp(160px, 32vw, 180px)',
                  bottom: '-12px',
                  right: '50%',
                  zIndex: 2,
                }}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AppShowcase;