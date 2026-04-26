import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="app-shell">
      <Navbar />
      <main id="main-content">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
