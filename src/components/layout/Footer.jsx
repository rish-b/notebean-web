import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/images/logo.png';

const Footer = () => {
  return (
    <footer className="relative z-10 bg-background border-t border-surface py-12">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex flex-col items-center text-center lg:flex-row lg:justify-between lg:items-start gap-8">

          {/* Left - Brand (takes more space) */}
          <div className="space-y-4 lg:flex-[2] lg:text-left">
            <NavLink to="/" className="flex items-center gap-2">
            <div className="relative w-14 h-14 overflow-hidden rounded-xl transition-transform duration-300">
              <img 
                src={logo} 
                alt="Notebean Logo" 
                  className="w-full h-full object-contain rounded-full"
              />
            </div>
            <span className="text-2xl font-bold tracking-tight transition-colors duration-300 text-text-primary">
              Notebean
            </span>
          </NavLink>
            <p className="text-text-secondary max-w-sm mx-auto lg:mx-0">
              Your intelligent companion for capturing ideas, organizing thoughts, and boosting productivity.
            </p>
            <div className="flex gap-4 justify-center lg:justify-start">
              {/* Instagram */}
              <Link to="https://www.instagram.com/organimind/" target="_blank" className="text-primary hover:text-secondary transition-colors">
                <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
                </svg>
              </Link>
              {/* Twitter/X */}
              <Link to="https://x.com/OrganiMind" target="_blank" className="text-primary hover:text-secondary transition-colors">
                <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </Link>
              {/* YouTube */}
              <Link to="https://www.youtube.com/@OrganizeMind" target="_blank" className="text-primary hover:text-secondary transition-colors">
                <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Right - 3 link columns */}
          <div className="flex flex-col items-center gap-8 lg:flex-row lg:items-start lg:gap-24">
            <div className="space-y-4">
              <h4 className="font-semibold text-text-primary">Product</h4>
              <ul className="space-y-2">
                <li><Link to="/#features" className="text-text-secondary hover:text-primary transition-colors">Features</Link></li>
                {/* <li><Link to="/#pricing" className="text-text-secondary hover:text-primary transition-colors">Pricing</Link></li> */}
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-text-primary">Support</h4>
              <ul className="space-y-2">
                <li><Link to="/contact" className="text-text-secondary hover:text-primary transition-colors">Contact</Link></li>
                <li><Link to="/privacy" className="text-text-secondary hover:text-primary transition-colors">Privacy Policy</Link></li>
                <li><Link to="/terms" className="text-text-secondary hover:text-primary transition-colors">Terms of Service</Link></li>
              </ul>
            </div>
          </div>

        </div>

        <div className="border-t border-surface mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-text-secondary text-sm">
            &copy; {new Date().getFullYear()} NoteBean Inc. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link to="/privacy" className="text-text-secondary hover:text-primary transition-colors">Privacy</Link>
            <Link to="/terms" className="text-text-secondary hover:text-primary transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;