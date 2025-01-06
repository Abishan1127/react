import React from 'react';
import '../styles/About.css';
import Im from '../assets/about-img.png'
const About: React.FC = () => {
  return (
    <section className="about">
      <img src={Im} alt="About" width="40%" />
      <div>
        <h2>About Our Bookstore</h2>
        <p>Lorem ipsum dolor sit amet...</p>
        <button>Read More</button>
      </div>
    </section>
  );
};

export default About;
