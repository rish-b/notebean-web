import  { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../../assets/images/notebean_logo_without_bg.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Features', path: '/features' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-500 ${
          scrolled 
            ? 'bg-surface/95 backdrop-blur-lg border-b border-gray-300 py-3 shadow-sm' 
            : 'bg-transparent py-5'
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          {/* Logo Section */}
          <NavLink to="/" className="flex items-center group">
            <div className="relative w-16 h-16 overflow-hidden rounded-xl transition-transform duration-300 group-hover:scale-110">
              <img 
                src={logo} 
                alt="Notebean Logo" 
                className="w-full h-full object-contain"
              />
            </div>
            <span className="text-2xl font-bold tracking-tight transition-colors duration-300 text-text-primary">
              Notebean
            </span>
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-10">
            <div className="flex items-center gap-8">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) => 
                    `relative text-[15px] font-semibold transition-all duration-300 hover:text-primary group ${
                      isActive 
                        ? 'text-primary' 
                        : 'text-text-primary/80'
                    }`
                  }
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </NavLink>
              ))}
            </div>

            <button className="px-7 py-2.5 rounded-full bg-primary text-white font-bold text-sm hover:bg-secondary transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 active:scale-95">
              Get Started
            </button>
          </div>

          {/* Mobile Toggle */}
          <button 
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              scrolled ? 'text-primary hover:bg-surface' : 'text-text-primary hover:bg-black/5'
            }`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`lg:hidden fixed inset-0 z-[999] bg-surface backdrop-blur-xl transition-all duration-500 ease-in-out ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        } ${scrolled ? 'top-[88px]' : 'top-[104px]'}`}
      >
        <div className="flex flex-col items-center justify-start p-8 gap-8 h-full">
          {navLinks.map((link, index) => (
            <NavLink
              key={link.name}
              to={link.path}
              className="text-md font-bold text-primary hover:text-secondary transition-colors"
              onClick={() => setIsOpen(false)}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              {link.name}
            </NavLink>
          ))}
          <button className="mt-4 px-10 py-2 rounded-full bg-primary text-white font-bold text-md shadow-xl hover:bg-secondary transition-all active:scale-95">
            Get Started
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
