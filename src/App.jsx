import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsAndConditionsPage from './pages/TermsAndConditionsPage';
import ContactPage from './pages/ContactPage';
import ScrollToTop from './components/layout/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/privacy" element={<PrivacyPolicyPage />} />
          <Route path="/terms" element={<TermsAndConditionsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          {/* Add more routes as needed */}
          <Route path="*" element={<div>404 - Not Found</div>} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
