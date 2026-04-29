import Hero from '../components/sections/Hero';
import Features from '../components/sections/Features';
import AppShowcase from '../components/sections/AppShowcase';
import ShareShowcase from '../components/sections/ShareShowcase';

const HomePage = () => {
  return (
    <div className="home-page">
      <Hero />
      <Features />
      <AppShowcase />
      <ShareShowcase />
    </div>
  );
};

export default HomePage;
