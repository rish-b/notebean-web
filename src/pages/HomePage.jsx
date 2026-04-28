import Hero from '../components/sections/Hero';
import Features from '../components/sections/Features';
import AppShowcase from '../components/sections/AppShowcase';

const HomePage = () => {
  return (
    <div className="home-page">
      <Hero />
      <Features />
      <AppShowcase />
    </div>
  );
};

export default HomePage;
