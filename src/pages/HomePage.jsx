import Hero from '../components/sections/Hero';
import Features from '../components/sections/Features';
import AppShowcase from '../components/sections/AppShowcase';
import ShareShowcase from '../components/sections/ShareShowcase';
import CTA from '../components/sections/CTA';

const HomePage = () => {
  return (
    <div className="home-page">
      <Hero />
      <Features />
      <AppShowcase />
      <ShareShowcase />
      <CTA/>
    </div>
  );
};

export default HomePage;
