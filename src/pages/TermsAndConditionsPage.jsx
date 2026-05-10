import { useState, useEffect } from 'react';
import { termsAndConditions } from '../constant/legal';
import { Link } from 'react-router-dom';

const TermsAndConditionsPage = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-100px 0px -60% 0px',
        threshold: 0.1,
      }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

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
      const offset = 100;
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
            {termsAndConditions.title}
          </h1>

          <p className="text-lg text-text-secondary max-w-2xl mx-auto px-6">
            These Terms govern your use of our website and services. By using our Services, you agree to these Terms.
          </p>
        </div>

        <div className="bg-white rounded-t-[3rem] shadow-2xl">
          <div className="container mx-auto px-6 md:px-32 py-16 lg:px-8 max-w-7xl">

            <div className="flex gap-12">

              <div className="flex-1 text-text-secondary lg:pr-72 min-h-[1000px]">

                {/* Meta */}
                <p className="mb-3 font-medium italic">
                  {termsAndConditions.meta.appName} by {termsAndConditions.meta.company}
                </p>

                <p className="mb-8 font-medium italic">
                  Effective date: {termsAndConditions.meta.effectiveDate} | Last updated: {termsAndConditions.meta.lastUpdated}
                </p>

                {/* Highlight */}
                {termsAndConditions.highlight && (
                  <div className="bg-green-50 border-l-4 border-green-500 p-5 rounded-r-xl mb-10">
                    <p className="font-semibold text-text-primary mb-2">
                      {termsAndConditions.highlight.title}:
                    </p>

                    <p className="leading-relaxed">
                      {termsAndConditions.highlight.content}
                    </p>
                  </div>
                )}

                {/* Introduction */}
                {termsAndConditions.introduction?.map((paragraph, index) => (
                  <p
                    key={index}
                    className="mb-5 leading-relaxed"
                  >
                    {paragraph}
                  </p>
                ))}

                {/* Sections */}
                {termsAndConditions.sections.map((section) => (
                  <section
                    key={section.id}
                    id={section.slug}
                    className="mb-12 scroll-mt-32"
                  >

                    <h2 className="text-2xl font-bold text-text-primary mb-5">
                      {section.title}
                    </h2>

                    {/* Section Content */}
                    {section.content && (
                      <p className="mb-4 leading-relaxed">
                        {section.content}
                      </p>
                    )}

                    {/* Section List */}
                    {section.list && (
                      <ul className="list-disc pl-6 mb-4 space-y-3">
                        {section.list.map((item, index) => (
                          <li
                            key={index}
                            className="leading-relaxed"
                          >
                            {typeof item === 'string' ? (
                              item
                            ) : (
                              <>
                                <strong className="text-text-primary">
                                  {item.label}:
                                </strong>{' '}
                                {item.description}
                              </>
                            )}
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* Table */}
                    {section.table && (
                      <div className="overflow-x-auto mb-6">
                        <table className="w-full border border-gray-200">
                          <thead>
                            <tr>
                              {section.table.headers.map((header, index) => (
                                <th
                                  key={index}
                                  className="border border-gray-200 bg-gray-50 px-4 py-3 text-left text-sm font-semibold text-text-primary"
                                >
                                  {header}
                                </th>
                              ))}
                            </tr>
                          </thead>

                          <tbody>
                            {section.table.rows.map((row, rowIndex) => (
                              <tr key={rowIndex}>
                                {row.map((cell, cellIndex) => (
                                  <td
                                    key={cellIndex}
                                    className="border border-gray-200 px-4 py-3 text-sm leading-relaxed"
                                  >
                                    {cell}
                                  </td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    )}

                    {/* Subsections */}
                    {section.subsections?.map((subsection, index) => (
                      <div
                        key={index}
                        className="mb-8"
                      >

                        <h3 className="text-xl font-semibold text-text-primary mb-4">
                          {subsection.title}
                        </h3>

                        {subsection.content && (
                          <p className="mb-4 leading-relaxed">
                            {subsection.content}
                          </p>
                        )}

                        {subsection.list && (
                          <ul className="list-disc pl-6 mb-4 space-y-3">
                            {subsection.list.map((item, idx) => (
                              <li
                                key={idx}
                                className="leading-relaxed"
                              >
                                {typeof item === 'string' ? (
                                  item
                                ) : (
                                  <>
                                    <strong className="text-text-primary">
                                      {item.label}:
                                    </strong>{' '}
                                    {item.description}
                                  </>
                                )}
                              </li>
                            ))}
                          </ul>
                        )}

                        {subsection.bottomContent && (
                          <p className="mb-4 leading-relaxed">
                            {subsection.bottomContent}
                          </p>
                        )}

                      </div>
                    ))}

                    {/* Bottom Content */}
                    {section.bottomContent && (
                      <p className="mb-4 leading-relaxed">
                        {section.bottomContent}
                      </p>
                    )}

                  </section>
                ))}

              </div>

              <div className="hidden lg:block w-64"></div>

            </div>
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <div className={`hidden lg:block fixed ${isScrolled ? 'top-[15%]' : 'top-[50%]'} right-[calc((100vw-80rem)/2)] w-64 z-0`}>
        <div className="space-y-6 bg-white border-l-2 border-accent pl-6 py-4 max-h-[75vh] overflow-y-auto custom-scrollbar">

          <h3 className="text-sm font-bold text-accent uppercase tracking-wider mb-4">
            Contents
          </h3>

          <nav className="flex flex-col gap-3">
            {termsAndConditions.sections.map((section) => (
              <Link
                key={section.id}
                to={`#${section.slug}`}
                onClick={(e) => scrollToSection(e, section.slug)}
                className={`text-[15px] transition-colors duration-200 ${activeSection === section.slug
                  ? 'text-primary font-semibold'
                  : 'text-text-secondary hover:text-primary'
                  }`}
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

export default TermsAndConditionsPage;