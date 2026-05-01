import { termsAndConditions } from '../constant/legal';

const TermsAndConditionsPage = () => {
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
    <div className="pt-32 bg-accent w-full max-h-screen">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">Terms and Conditions</h1>
        <p className="text-lg text-text-secondary max-w-2xl mx-auto px-6">
          These Terms govern your use of our website and services. By using our Services, you agree to these Terms.
        </p>
      </div>

      <div className='bg-white rounded-t-[3rem] shadow-2xl'>
        <div className="container mx-auto px-6 py-16 lg:px-8 max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-12 relative">
            
            {/* Main Content */}
            <div className="flex-1 text-text-secondary ">
              <p className="mb-8 font-medium italic">Last updated: {termsAndConditions.lastUpdated}</p>
              
              {termsAndConditions.sections.map((section) => (
                <section key={section.id} id={section.slug} className="mb-12 scroll-mt-32">
                  <h2 className="text-2xl font-bold text-text-primary mb-5">{section.title}</h2>
                  <p className="mb-4 leading-relaxed">{section.content}</p>
                  {section.list && (
                    <ul className="list-disc pl-6 mb-4 space-y-3">
                      {section.list.map((item, index) => (
                        <li key={index} className="leading-relaxed">{item}</li>
                      ))}
                    </ul>
                  )}
                </section>
              ))}
            </div>

            {/* Sidebar Navigation - Right Side */}
            <aside className="hidden lg:block w-64 flex-shrink-0">
              <div className="sticky top-28 space-y-6">
                <div className="border-l-2 border-accent pl-6">
                  <h3 className="text-sm font-bold text-accent uppercase tracking-wider mb-6">Contents</h3>
                  <nav className="flex flex-col gap-4">
                    {termsAndConditions.sections.map((section) => (
                      <a
                        key={section.id}
                        href={`#${section.slug}`}
                        onClick={(e) => scrollToSection(e, section.slug)}
                        className="text-[15px] text-text-secondary hover:text-primary transition-colors duration-200 block py-1"
                      >
                        {section.title.split('. ')[1] || section.title}
                      </a>
                    ))}
                  </nav>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditionsPage;
