
import '../styles/ Hero.css';
import im4 from '../assets/slider-img.png'

const Hero= () => {
  return (
    <section className="hero">
      <div className="content">
        <h1>For All Your Reading Needs</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores repudiandae molestias laudantium quia sequi odit adipisci molestiae saepe quo similique!</p>
        <button>Read More</button>
      </div>
      <img src={im4} alt="Hero" width="500" />
    </section>
  );
};

export default Hero;

