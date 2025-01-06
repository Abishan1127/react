import React from 'react';
import '../styles/ContactUs.css';
import im2 from '../assets/contact-img.jpg'

const ContactUs: React.FC = () => {
  return (
    <section className="contact-us">
      <div>
        <h2>Contact Us</h2>
        <form>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="number" placeholder="Phone Number" />
          <textarea rows={4} placeholder="Message"></textarea>
          <button>SEND</button>
        </form>
      </div>
      <img src={im2} alt="Contact Us" width="35%" />
    </section>
  );
};

export default ContactUs;
