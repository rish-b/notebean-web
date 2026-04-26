import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* Add more routes as needed */}
          <Route path="*" element={<div>404 - Not Found</div>} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
