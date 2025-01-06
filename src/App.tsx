import React from 'react';
import Header from './Components/ Header';
import Hero from './Components/HeroSection';
import Categories from './Components/BookCategories';
import About from './Components/ AboutUs';
import Blog from './Components/BlogSection';
import ContactUs from './Components/ContactUs';
import Footer from './Components/Footer';
import './styles/global.css';

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Categories />
      <About />
      <Blog />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default App;
