import { useState, useEffect } from 'react';
import { privacyPolicy } from '../constant/legal';
import { Link } from 'react-router-dom';

const PrivacyPolicyPage = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 200);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const scrollToSection = (e, slug) => {
    e.preventDefault();
    const element = document.getElementById(slug);
    if (element) {
      const offset = 100; // Account for fixed navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <div className="pt-32 bg-accent w-full min-h-screen">

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
            Privacy Policy
          </h1>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto px-6">
            This Privacy Policy outlines how we collect, use, share, and protect your information on our website and services.
          </p>
        </div>

        <div className="bg-white rounded-t-[3rem] shadow-2xl">
          <div className="container mx-auto px-6 md:px-32 py-16 lg:px-8 max-w-7xl">

            <div className="flex gap-12">

              <div className="flex-1 text-text-secondary lg:pr-72">
                <p className="mb-8 font-medium italic">
                  Last updated: {privacyPolicy.lastUpdated}
                </p>

                {privacyPolicy.sections.map((section) => (
                  <section
                    key={section.id}
                    id={section.slug}
                    className="mb-12 scroll-mt-32"
                  >
                    <h2 className="text-2xl font-bold text-text-primary mb-5">
                      {section.title}
                    </h2>

                    <p className="mb-4 leading-relaxed">
                      {section.content}
                    </p>

                    {section.list && (
                      <ul className="list-disc pl-6 mb-4 space-y-3">
                        {section.list.map((item, index) => (
                          <li key={index} className="leading-relaxed">
                            {typeof item === 'string' ? (
                              item
                            ) : (
                              <>
                                <strong className="text-text-primary">
                                  {item.label}:
                                </strong>{" "}
                                {item.description}
                              </>
                            )}
                          </li>
                        ))}
                      </ul>
                    )}
                  </section>
                ))}
              </div>

              <div className="hidden lg:block w-64"></div>

            </div>
          </div>
        </div>
      </div>

      <div className={`hidden lg:block fixed ${isScrolled ? 'top-[15%]' : 'top-[40%]'} right-[calc((100vw-80rem)/2)] w-64 z-50`}>
        <div className="space-y-6 bg-white border-l-2 border-accent pl-6 py-4">

          <h3 className="text-sm font-bold text-accent uppercase tracking-wider mb-4">
            Contents
          </h3>

          <nav className="flex flex-col gap-3">
            {privacyPolicy.sections.map((section) => (
              <Link
                key={section.id}
                href={`#${section.slug}`}
                onClick={(e) => scrollToSection(e, section.slug)}
                className="text-[15px] text-text-secondary hover:text-primary transition-colors duration-200"
              >
                {section.title.split('. ')[1] || section.title}
              </Link>
            ))}
          </nav>

        </div>
      </div>
    </>
  );
};

export default PrivacyPolicyPage;
