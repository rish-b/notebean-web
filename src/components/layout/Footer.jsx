import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <h3>NoteBean</h3>
            <p>Smart note-taking for modern teams.</p>
          </div>
          <div className="footer-links">
            <h4>Product</h4>
            <a href="#features">Features</a>
            <a href="#integrations">Integrations</a>
          </div>
          <div className="footer-links">
            <h4>Company</h4>
            <a href="#about">About</a>
            <a href="#careers">Careers</a>
          </div>
          <div className="footer-links">
            <h4>Support</h4>
            <a href="#help">Help Center</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} NoteBean Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
